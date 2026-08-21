<div align="center">

# OBLIVION

<p>
  A place for the web stuff I make.
</p>

<br>

<a href="https://nonopepep7-maker.github.io/Oblivon/">
  <img
    src="https://img.shields.io/badge/OPEN%20OBLIVION-→-111827?style=for-the-badge"
    alt="Open Oblivion"
  >
</a>

<br><br>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111827" alt="JavaScript">
<img src="https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
<img src="https://img.shields.io/badge/Pannellum-360°-6B7280?style=flat-square" alt="Pannellum">

</div>

---

## So, what is this?

Oblivion is basically a place where I keep some of the web projects and experiments I make.

The first thing you see is a 360° scene filling the screen. From there, you can move between different scenes, open the project panel, look through the projects, search for something, change the way the projects are shown, or turn the music on.

It is not trying to be a huge platform.

I just wanted the project page itself to feel like a project.

---

## Have a look

<div align="center">

<a href="./view/brave_0hrxKmbvID.jpg">
  <img
    src="./view/brave_0hrxKmbvID.jpg"
    alt="Oblivion main interface"
    width="92%"
  >
</a>

<br><br>

<table>
<tr>

<td width="50%" valign="top" align="center">

<a href="./view/brave_QB4eU7CxbZ.png">
  <img
    src="./view/brave_QB4eU7CxbZ.png"
    alt="Loading View"
    width="100%"
  >
</a>

<br><br>

<strong>Loading view</strong>

<br>

<sub>Where it starts.</sub>

</td>

<td width="50%" valign="top" align="center">

<a href="./view/brave_sKqfd430Uj.png">
  <img
    src="./view/brave_sKqfd430Uj.png"
    alt="Grid View"
    width="100%"
  >
</a>

<br><br>

<strong>Grid view</strong>

<br>

<sub>Everything at a glance.</sub>

</td>

</tr>

<tr>

<td width="50%" valign="top" align="center">

<a href="./view/brave_vPttT0Csoq.jpg">
  <img
    src="./view/brave_vPttT0Csoq.jpg"
    alt="Homepage View"
    width="100%"
  >
</a>

<br><br>

<strong>Homepage</strong>

<br>

<sub>The main scene.</sub>

</td>

<td width="50%" valign="top" align="center">

<a href="./view/brave_yjykXH0NY9.png">
  <img
    src="./view/brave_yjykXH0NY9.png"
    alt="Deck View"
    width="100%"
  >
</a>

<br><br>

<strong>Deck view</strong>

<br>

<sub>One project at a time.</sub>

</td>

</tr>
</table>

<br>

<sub>Click a screenshot to open it at full size.</sub>

</div>

---

## What can you do here?

There are **20 panorama scenes** to move through, so the background is not just one static image.

Then there is the project browser.

You can search it.
Filter it.
Switch between Grid and Deck.
Use the arrow keys in Deck mode.

And there is music too, if you want it.

Nothing complicated. That was kind of the point.

---

## Controls

| Thing                        | Does this                               |
| ---------------------------- | --------------------------------------- |
| **Explore Projects**         | Opens the project panel                 |
| **Grid**                     | Shows the projects together             |
| **Deck**                     | Shows one project at a time             |
| **Search**                   | Finds a project by title or description |
| **Categories**               | Filters the project list                |
| **← / →**                    | Moves between panorama scenes           |
| **Arrow Left / Arrow Right** | Moves through Deck view                 |
| **Sound On / Off**           | Turns the background music on or off    |
| **Esc**                      | Closes the project panel                |

---

## Inside the project

```text
.
├── view/
│   ├── brave_0hrxKmbvID.jpg
│   ├── brave_QB4eU7CxbZ.png
│   ├── brave_sKqfd430Uj.png
│   ├── brave_vPttT0Csoq.jpg
│   └── brave_yjykXH0NY9.png
│
├── bgm.mp3
├── bgm.ogg
├── index.html
├── README.md
└── script.js
```

A lot of the project lives in `script.js`.

That is where the panorama scenes, project data, filtering, search, Grid / Deck behaviour, and navigation are handled. The HTML is mostly the page itself and the UI, while the `view` folder contains the screenshots shown above.

The two audio files are there for the background music.

---

## How it works

There is no big setup behind this.

The page is built with HTML, CSS and JavaScript, with Tailwind CSS loaded from the CDN. Pannellum handles the 360° viewer.

The panorama list is just a JavaScript array. The same goes for the projects.

When you search or switch categories, the project panel is rendered again from that data. Deck view works from the same list, which keeps the whole thing fairly small and easy to change.

The sound control is kept in `script1.js`.

---

## Run it

Clone the repo:

```bash
git clone https://github.com/nonopepep7-maker/Oblivon.git
```

Then:

```bash
cd Oblivon
```

Open `index.html`.

That is enough.

You can also use VS Code's Live Server if you prefer running it through a local server.

Some of the libraries and panorama images are loaded from the web, so the complete page needs an internet connection.

---

## Adding a project

Open `script.js`.

Look for:

```javascript
const projects = [
    // ...
];
```

Then add something like:

```javascript
{
    cat: 'Web',
    title: 'My Project',
    desc: 'A short description.',
    icon: '<img src="ICON_URL" class="w-5 h-5 object-contain rounded-sm" alt="icon">',
    url: 'https://example.com'
}
```

Reload the page.

The project will be picked up by the search, category filter, Grid view, and Deck view automatically.

---

## Adding a panorama

The scenes are kept in:

```javascript
const scenesList = [
    // ...
];
```

For example:

```javascript
{
    id: 'scene21',
    label: 'Panorama 21 of 21',
    url: 'PANORAMA_URL'
}
```

A matching scene also has to be added to the Pannellum configuration in `script.js`.

---

## Built with

[![Pannellum](https://img.shields.io/badge/Pannellum-360°-6B7280?style=flat-square)](https://pannellum.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=flat-square\&logo=tailwindcss\&logoColor=white)](https://tailwindcss.com/)

HTML, CSS and JavaScript do the rest.

---

## One more thing

The panorama images and some other external assets are loaded from their original sources. Their licenses belong to their respective creators, so check those before reusing anything outside this project.

---

<div align="center">

### Made by Nirdesh

I make things.
Sometimes they work on the first try.

<br>

<a href="https://nonopepep7-maker.github.io/Oblivon/">
  <strong>Open Oblivion →</strong>
</a>

<br><br>

<sub>Thanks for stopping by.</sub>

</div>
