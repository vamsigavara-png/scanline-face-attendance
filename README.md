# Scanline Face Attendance

A static face-detection and attendance tracking project built with HTML, CSS, and JavaScript using `face-api.js`.

## Features

- Live webcam face detection
- Image upload detection
- Face landmarks and expression overlays
- Local saved enrollment records
- Attendance log with date-based tracking
- Admin unlock flow for viewing saved data
- Browser-only local storage persistence

## Run locally

Open the project in a browser, or serve it locally:

```bash
cd scanline-face-attendance
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

## GitHub Pages

This repository is set up as a static site. To publish it on GitHub Pages:

1. Push this repository to GitHub.
2. Open the repository in GitHub.
3. Go to Settings → Pages.
4. Set Source to "Deploy from a branch".
5. Choose the `main` branch and the root folder `/`.
6. Save.

The site will be available at:

```text
https://vamsigavara-png.github.io/scanline-face-attendance/
```

## Notes

- This is a client-side prototype meant for demo use.
- Real authentication and secure attendance storage require a backend.
