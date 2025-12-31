# Hebron Matriculation Higher Secondary School Website

This repository contains the source code for the Hebron MHSS website, built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). It uses [Decap CMS](https://decapcms.org/) for content management and is designed to be deployed on [GitHub Pages](https://pages.github.com/).

## Project Structure

```
├── public/
│   ├── admin/       # Decap CMS configuration
│   └── uploads/     # Media files uploaded via CMS
├── src/
│   ├── components/  # Reusable UI components (Header, Footer, Card)
│   ├── content/     # Content collections (Announcements, Blog, Alumni)
│   ├── layouts/     # Page layouts
│   └── pages/       # Website pages and routing
└── astro.config.mjs # Astro configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.14.1 or higher)
- npm

### Local Development

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/hmhss.git
    cd hmhss
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

    Or use the provided convenience script:

    ```bash
    ./dev.sh
    ```

    The site will be available at `http://localhost:4321`.

## 📝 Content Management (Decap CMS)

This site uses Decap CMS (formerly Netlify CMS) to allow non-technical users to edit content.

### Accessing the CMS

1.  Navigate to `/admin` (e.g., `http://localhost:4321/admin` or `https://your-site.github.io/admin`).
2.  Login with GitHub.

### Authentication Setup (GitHub Backend)

To enable the CMS to commit changes to your repository, you need to set up a GitHub OAuth App.

**Option 1: Using GitHub OAuth (Preferred)**

1.  Go to **GitHub Settings > Developer settings > OAuth Apps > New OAuth App**.
2.  **Application Name:** Hebron Website CMS
3.  **Homepage URL:** `https://<your-username>.github.io/<repo-name>`
4.  **Authorization callback URL:** `https://<your-username>.github.io/<repo-name>/admin/`
5.  **Register application**.
6.  You will need an OAuth client (like an external service or a Netlify site configured as an auth provider) to handle the handshake.
    *   *Note:* Since GitHub Pages doesn't have a backend to hide the Client Secret, you typically need an external auth server (like `decap-cms-github-oauth-provider` on Vercel/Heroku) OR use the "Git Gateway" feature if you were hosting on Netlify.
    *   **For GitHub Pages-only deployment:** It is recommended to use an external lightweight auth server.
    *   **Alternative for pure static (Editorial Workflow via GitHub UI):** If setting up an auth server is too complex, you can configure Decap CMS to use the `git-gateway` with Netlify Identity (free tier) even if the site is hosted on GitHub Pages, OR simply instruct editors to edit Markdown files directly in GitHub if the team is technical enough.

**Simplest Setup for this Project (Git Backend):**
The current `public/admin/config.yml` is configured for the `github` backend.
You need to:
1.  Update `repo` in `public/admin/config.yml` to your GitHub repository (e.g., `username/repo`).
2.  Setup an OAuth provider (e.g., deploy a free instance of [this project](https://github.com/vencax/netlify-cms-github-oauth-provider) to Vercel/Heroku) and add the `base_url` to `config.yml`.

## 📦 Deployment

This project is configured to deploy to **GitHub Pages** using GitHub Actions.

1.  Push your code to the `main` branch.
2.  Go to your repository **Settings > Pages**.
3.  Under **Build and deployment**, select **GitHub Actions** as the source.
4.  The workflow defined in `.github/workflows/deploy.yml` will automatically build and deploy the site.
5.  Ensure `astro.config.mjs` has the correct `site` and `base` URL for your GitHub Pages URL.

## 🖼️ Media & Assets

-   **Images:** Keep images optimized (below 200KB where possible). Uploads via CMS go to `public/uploads/`.
-   **Videos:** Embed videos from YouTube/Vimeo to keep the repository size small.

## 🛠️ Customization

-   **Styling:** Global styles are in `src/styles/global.css`. Tailwind classes are used throughout components.
-   **Colors:** The primary brand color is Blue (`blue-900` text, `blue-600` accents).
-   **Fonts:** Uses the system sans-serif font stack by default.

## 📄 License

MIT License.
