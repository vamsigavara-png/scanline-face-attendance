# SCANLINE — Face Attendance

A browser-based face detection and attendance prototype built with HTML, CSS, JavaScript, and `face-api.js`. SCANLINE can scan a webcam feed or uploaded image, register people in the current browser, and record attendance when an enrolled face is recognized.

**Live demo:** [Open SCANLINE](https://vamsigavara-png.github.io/scanline-face-attendance/)

> This project is a learning and portfolio demo. It is not designed to secure or manage real attendance records.

## Features

- Detect faces from a webcam or uploaded image
- Display face landmarks, expressions, and detection confidence
- Register a detected face with a name and phone number
- Match enrolled faces during a live camera session
- Record attendance by date and avoid duplicate marks on the same day
- Review enrolled people and attendance in the admin view
- Export attendance records as JSON
- Store demo records in the browser using `localStorage`
- Responsive layout for desktop and mobile screens

## Try the live demo

1. Open the [live demo](https://vamsigavara-png.github.io/scanline-face-attendance/).
2. Select **Start Camera** and allow camera access, or choose **Load Image**.
3. When a face is detected, select **Register Face** and enter the person's details.
4. Keep the webcam running to test face matching and attendance logging.
5. Select **Unlock Admin View** to review saved records and attendance.

Camera access requires a secure context such as GitHub Pages over HTTPS or `localhost`. If camera access is unavailable, use **Load Image** to try face detection.

## Run locally

You need a modern browser and Python 3 for the simple local web server. From the project folder, run:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser. The page loads `face-api.js` and its model files from public CDNs, so an internet connection is needed on first load.

## How data is stored

This prototype stores face photos, face descriptors, and attendance entries in the browser's `localStorage`. The data stays in that browser profile on that device; it is not synced to a server. Clearing the browser's site data can remove it.

The admin check is implemented in client-side JavaScript. It is useful for demonstrating the interface, but it does not provide real authentication: the page source can be inspected and the check can be bypassed. Do not use this demo to store real attendance or sensitive face data.

## Project structure

```text
.
├── index.html          # Main app and GitHub Pages entry point
├── face_detect (4).html # Additional standalone HTML copy
└── README.md           # Project documentation
```

## Built with

- HTML, CSS, and JavaScript
- [face-api.js](https://github.com/vladmandic/face-api)
- Browser webcam APIs and `localStorage`

## Future improvements

- Add a backend with real authentication and access controls
- Store records securely with appropriate consent and deletion controls
- Add automated checks and browser-based testing
- Improve camera and recognition feedback for different lighting conditions

## License

No license is currently specified. Add a `LICENSE` file if you want others to reuse or modify this project under clear terms.

