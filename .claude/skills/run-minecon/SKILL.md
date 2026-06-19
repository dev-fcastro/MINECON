---
name: run-minecon
description: Run, start, build, screenshot, or verify the MINECON Angular web app. Use this when asked to launch the app, take a screenshot, check a UI change, or confirm a feature works in the browser.
---

MINECON is an Angular 21 SSR web app (Node/Vite dev server). The driver is headless Chrome via a single PowerShell command — no separate driver file needed.

All paths in this skill are relative to `d:\projectos\MINECON\`.

## Critical: heap limit

`ng serve` crashes with "JavaScript heap out of memory" at the default 256 MB heap. **Always** set the memory flag before starting:

```powershell
$env:NODE_OPTIONS = "--max-old-space-size=4096"
```

Or inline in cmd.exe (see Start section below).

## Prerequisites

- Node.js ≥ 20 and npm ≥ 11 (already installed)
- Google Chrome at `C:\Program Files\Google\Chrome\Application\chrome.exe`
- No global installs needed — `npx ng` uses the local `@angular/cli`

## Build

```powershell
cd d:\projectos\MINECON
$env:NODE_OPTIONS = "--max-old-space-size=4096"
npm run build
```

Output lands in `dist/MINECON/`.

## Run — agent path (headless screenshot)

### 1. Start the dev server (background, writes to serve.log)

```powershell
Remove-Item d:\projectos\MINECON\serve.log -ErrorAction SilentlyContinue
Start-Process -FilePath "cmd.exe" `
  -ArgumentList "/c", "set NODE_OPTIONS=--max-old-space-size=4096 && cd /d d:\projectos\MINECON && npx ng serve --port 4200" `
  -RedirectStandardOutput "d:\projectos\MINECON\serve.log" `
  -RedirectStandardError  "d:\projectos\MINECON\serve-err.log" `
  -NoNewWindow -PassThru
```

### 2. Wait until ready (monitor serve.log)

The server is ready when `serve.log` contains `Local:.*4200`. Use Monitor or poll:

```bash
until grep -q "Local:.*4200" "d:/projectos/MINECON/serve.log" 2>/dev/null; do sleep 2; done
```

Typical build time: **5–10 seconds** with warm cache; up to 30 s cold.

### 3. Take a screenshot

```powershell
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$ssPath = "d:\projectos\MINECON\screenshot-home.png"
Start-Process -FilePath $chrome `
  -ArgumentList "--headless=new", "--disable-gpu", "--screenshot=$ssPath", "--window-size=1440,900", "http://localhost:4200" `
  -Wait -PassThru -NoNewWindow | Out-Null
```

For mobile viewport (375×812):
```powershell
Start-Process -FilePath $chrome `
  -ArgumentList "--headless=new", "--disable-gpu", "--screenshot=d:\projectos\MINECON\screenshot-mobile.png", "--window-size=375,812", "http://localhost:4200" `
  -Wait -PassThru -NoNewWindow | Out-Null
```

Then `Read` the `.png` file to view the screenshot.

### 4. Navigate to other routes

Change the URL argument — e.g. `http://localhost:4200/marcas`, `http://localhost:4200/contacto`, `http://localhost:4200/marcas/volvo-construction-equipment`.

## Run — human path

```powershell
cd d:\projectos\MINECON
$env:NODE_OPTIONS = "--max-old-space-size=4096"
npm start
```

Browser opens automatically at `http://localhost:4200`. Ctrl-C to stop. Watch mode is enabled — changes hot-reload.

## Test

```powershell
cd d:\projectos\MINECON
npx vitest run
```

(Unit tests only — no e2e suite.)

## Gotchas

- **Two distinct OOM modes**: (1) Without `NODE_OPTIONS`: build reaches 100–200 MB then crashes with "JavaScript heap out of memory / Committing semi space failed". Fix: set the 4096 flag. (2) *With* the flag but after multiple spawn attempts: Node crashes at ~55 MB with "Zone Allocation failed - process out of memory" — this is a native V8 zone issue caused by accumulated virtual address reservations from previous crashed processes. Fix: wait a few minutes or restart VS Code to clear zombie address space, then retry.
- **Heap OOM (primary)**: `ng serve` without `NODE_OPTIONS=--max-old-space-size=4096` crashes immediately at the build step. This is the #1 failure mode.
- **Chrome headless can't reach `localhost`**: Use `127.0.0.1` if `localhost` fails, or use `--host-resolver-rules="MAP localhost 127.0.0.1"` flag. In practice `localhost` works for the `--screenshot` flag but may fail for interactive sessions.
- **Screenshot lands in CWD, not in the project**: Always use an absolute path for `--screenshot=<abs-path>` to control where the file goes.
- **`Start-Process` with `-RedirectStandardOutput` + `-NoNewWindow`**: The node process survives the cmd.exe parent exiting only because cmd.exe itself waits. Do NOT use `-Wait` when starting the server or the shell will block until ng serve exits (which is never).
- **SSR enabled**: The app has `@angular/ssr`. The dev server runs both browser and server bundles — build output has `Browser bundles` + `Server bundles` sections. Both must complete before the server is ready.
- **Port 4200 in use**: If a previous server is still running, `ng serve` will fail silently (no error, just no output). Kill the old process or use `--port 4201`.
