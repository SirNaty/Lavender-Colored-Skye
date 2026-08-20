# Happy Birthday, Skye 💜

A single-page lavender birthday website designed for GitHub Pages.

## Files
- `index.html` — page content
- `style.css` — lavender theme, layout, animations and responsive design
- `script.js` — surprise button, photo uploads, scroll animations and music control

## Publish with GitHub Pages
1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, and `script.js`.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.
6. GitHub will provide the website address after deployment.

## Add music
Put your audio file in the same folder and name it `music.mp3`.
Then, in `index.html`, replace:
`<!-- <source src="music.mp3" type="audio/mpeg"> -->`
with:
`<source src="music.mp3" type="audio/mpeg">`

Browsers normally require a click before audio can start, so the music button is intentionally manual.

## Add permanent photos
The photo boxes currently let you preview photos locally in the browser. For photos to appear for everyone who visits the GitHub site, add image files to the repository and replace the photo inputs with normal `<img src="your-photo.jpg">` elements.
