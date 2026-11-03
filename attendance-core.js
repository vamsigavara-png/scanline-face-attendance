/* Pure helpers for the SCANLINE learning demo. No biometric data is sent anywhere. */
(function(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.ScanlineAttendance = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  'use strict';
  function dayKey(date) {
    const d = date instanceof Date ? date : new Date(date);
    if (Number.isNaN(d.getTime())) throw new Error('Invalid date');
    return [d.getFullYear(), String(d.getMonth() + 1).padStart(2, '0'), String(d.getDate()).padStart(2, '0')].join('-');
  }
  function mark(entries, person, date, timestamp) {
    if (!person || person.id == null) throw new Error('Person ID required');
    const existing = entries.some(e => String(e.personId) === String(person.id) && e.date === date);
    if (existing) return { entries, added: false };
    const entry = {
      id: String(person.id) + '_' + date, personId: person.id,
      name: person.name, phone: person.phone, photo: person.photo,
      date, time: timestamp
    };
    return { entries: [...entries, entry], added: true };
  }
  function stats(people, entries, date) {
    const ids = new Set(people.map(p => String(p.id)));
    const present = new Set(entries.filter(e => e.date === date && ids.has(String(e.personId))).map(e => String(e.personId))).size;
    const total = ids.size;
    return { total, present, absent: Math.max(0, total - present), percentage: total ? Math.round(present / total * 100) : 0 };
  }
  function csvCell(value) {
    const s = String(value == null ? '' : value);
    return '"' + s.replace(/"/g, '""') + '"';
  }
  function attendanceCsv(entries, date) {
    const rows = entries.filter(e => e.date === date).sort((a,b) => String(a.time).localeCompare(String(b.time)));
    return [['Date','Person ID','Name','Phone','Check-in time'], ...rows.map(e => [e.date,e.personId,e.name,e.phone,e.time])]
      .map(row => row.map(csvCell).join(',')).join('\r\n') + '\r\n';
  }
  return { dayKey, mark, stats, attendanceCsv };
});
