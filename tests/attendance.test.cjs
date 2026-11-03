const test = require('node:test');
const assert = require('node:assert/strict');
const core = require('../attendance-core.js');
const person = {id:'s1', name:'Demo Student', phone:'000', photo:''};
test('marks a person once per date', () => {
  const first = core.mark([], person, '2026-11-03', '2026-11-03T10:00:00Z');
  assert.equal(first.added, true);
  const repeat = core.mark(first.entries, person, '2026-11-03', '2026-11-03T11:00:00Z');
  assert.equal(repeat.added, false);
  assert.equal(repeat.entries.length, 1);
  assert.equal(core.mark(repeat.entries, person, '2026-11-04', '2026-11-04T10:00:00Z').entries.length, 2);
});
test('stats count unique enrolled people and clamp absent', () => {
  const people = [person, {id:'s2'}];
  const entries = [core.mark([],person,'2026-11-03','now').entries[0]];
  assert.deepEqual(core.stats(people,entries,'2026-11-03'),{total:2,present:1,absent:1,percentage:50});
  assert.equal(core.stats([],entries,'2026-11-03').percentage,0);
});
test('CSV escapes commas, quotes, and formula-like values', () => {
  const entries = [{...person,personId:'s1',date:'2026-11-03',time:'10:00',name:'=HYPERLINK("x"), Jane'}];
  const csv = core.attendanceCsv(entries,'2026-11-03');
  assert.match(csv, /"=HYPERLINK\(""x""\), Jane"/);
  assert.equal(csv.split('\r\n').filter(Boolean).length,2);
  assert.equal(core.attendanceCsv(entries,'2026-11-04').split('\r\n').filter(Boolean).length,1);
});
