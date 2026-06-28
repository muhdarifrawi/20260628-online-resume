# Personal Resume Website

A single-page personal resume and portfolio website for a full stack developer. Built with HTML, Tailwind CSS, and vanilla JavaScript — designed to be hosted for free on GitHub Pages.

> This project was built as an experiment using [Claude](https://claude.ai) by Anthropic as an AI pair programmer. The design, structure, and code were generated through an iterative conversation, and has since been adopted as my personal resume going forward.

---

## Live Demo

> Replace this with your GitHub Pages URL once deployed:
> `https://your-username.github.io`

---

## About This Project

This resume website was built as a personal experiment in AI-assisted development using Claude by Anthropic. The entire site which includes the design decisions, component structure, animations, dark mode system, and Formspree integration, was developed through a conversation with Claude, with iterative refinements along the way.

Only after the outcome looks to be reasonable, more refinements were made manually. Certain parts of the code were altered manually as Claude would either misunderstand the prompt or could not achieve the desired outcome.

This website has since been adopted as a real, living portfolio and resume. If you're curious about what AI-assisted development looks like in practice, this project is a practical example of it.

---

## Features

- **Dark / Light mode** — toggles instantly and remembers your preference via `localStorage`
- **Smooth scroll navigation** — fixed navbar with animated underline hover effects
- **Animated skill bars** — language proficiency visualised with CSS fill animations
- **Services section** — showcases services that I can provide
- **Live contact form** — powered by [Formspree](https://formspree.io); messages land directly into Formspree inbox
- **Fully responsive** — mobile-friendly layout using Tailwind's responsive grid utilities
- **No build step** — uses Tailwind via CDN, so no Node.js or bundler required

---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Markup     | HTML5                               |
| Styling    | Tailwind CSS (CDN) + custom CSS     |
| Scripting  | Vanilla JavaScript (ES2020)         |
| Fonts      | Google Fonts — Playfair Display, DM Mono, DM Sans |
| Form       | Formspree (free tier)               |
| Hosting    | GitHub Pages                        |

---

## Project Structure

```
├── index.html      # All page structure and content
├── styles.css      # Custom animations, transitions, and component styles
├── main.js         # Tailwind config, dark mode logic, Formspree form handler
└── README.md       # This file
```

---

## Getting Started

### 1. Clone or download the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Open locally

No build step needed. Just open `index.html` in your browser:

```bash
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### 3. Personalise the content

Open `index.html` and replace the placeholder content with your own:

- **Name & title** — search for `Arif Rawi` and `Full Stack Developer`
- **Bio** — update the hero paragraph
- **Skills** — adjust language names and proficiency percentages
- **Experience** — update job titles, companies, dates, and descriptions
- **Projects** — swap in your own project names, descriptions, and tech tags
- **Education** — update degree, institution, and certifications
- **Services** — edit or remove service cards to match what you offer
- **Contact links** — update the email address, GitHub URL, and LinkedIn URL
- **Footer year** — update the copyright year

### 4. Activate the contact form

1. Sign up for a free account at [formspree.io](https://formspree.io)
2. Create a new form — you'll receive an endpoint ID like `xabc1234`
3. Open `main.js` and replace the placeholder on this line:

```js
const FORMSPREE_ID = 'YOUR_FORM_ID'; // ← replace this
```

With your actual ID:

```js
const FORMSPREE_ID = 'xabc1234';
```

The free Formspree plan includes 50 submissions per month and delivers messages straight to your email inbox.

---

## Deploying to GitHub Pages

1. Push all files (`index.html`, `styles.css`, `main.js`, `README.md`) to a GitHub repository
2. Go to your repository → **Settings** → **Pages**
3. Under **Branch**, select `main` and set the folder to `/ (root)`
4. Click **Save** — your site will be live at `https://your-username.github.io/your-repo-name`

> If the repo is named exactly `your-username.github.io`, the site will be available at the root URL `https://your-username.github.io`.

---

## Customisation Tips

**Changing the accent colour**
The orange accent (`#E8621A`) is defined in two places — the Tailwind config in `main.js` and directly in `styles.css`. Update both to change the colour theme site-wide:

```js
// main.js — inside tailwind.config
colors: {
    accent: '#YOUR_COLOR',
}
```

```css
/* styles.css — update any hardcoded #E8621A values */
::-webkit-scrollbar-thumb { background: #YOUR_COLOR; }
.nav-link::after { background: #YOUR_COLOR; }
```

**Adding a profile photo**
In `index.html`, find the avatar placeholder block (it shows the `AM` monogram) and replace it with an `<img>` tag:

```html
<img src="your-photo.jpg" alt="Your Name" class="w-full h-full object-cover"/>
```

**Adding more services**
Copy any service card `<div>` block in the services section and update the icon, title, description, and bullet points.

---
## Work in progress
- [ ] Add in "about" section - talks more about my journey and about myself. 
- [ ] Update the sections number
- [ ] Add in the new "about" section into the navbar
- [ ] Update education and projects details

---

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to fork, adapt, and use it as the basis for your own resume.