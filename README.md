# Hebron Matriculation Higher Secondary School Website

This repository contains the source code for the Hebron MHSS website, built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). It uses [Decap CMS](https://decapcms.org/) for content management and is designed to be deployed on [GitHub Pages](https://pages.github.com/).

## Project Structure

```
├── public/
│   ├── admin/       # Decap CMS configuration
│   ├── favicon/     # Favicon assets
│   └── uploads/     # Media files uploaded via CMS
├── src/
│   ├── components/  # Reusable UI components (Header, NotificationToast, etc.)
│   ├── content/     # Content collections (Announcements, Blog, Alumni)
│   ├── data/        # Static data (Featured Alumni, Stats)
│   ├── layouts/     # Page layouts
│   └── pages/       # Website pages and routing
└── astro.config.mjs # Astro configuration
```

## ✨ Key Features

*   **Dynamic Content:** Managed via Decap CMS (Announcements, Blog Posts, Alumni Profiles).
*   **Notification Toast:** Automatically displays the latest announcement on page load.
    *   *Behavior:* Appears after 1s, auto-dismisses after 20s. Persists "seen" status locally so users aren't pestered by the same announcement.
*   **Responsive Design:** Mobile-first approach using Tailwind CSS.
*   **Performance:** Static generation for fast load times, with Google Analytics integration.
*   **SEO Friendly:** Sitemap generation and meta tag management.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.14.1 or higher)
- npm

### Local Development

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/hmhss/hmhss.github.io.git
    cd hmhss.github.io
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

1.  Navigate to `/admin` (e.g., `https://hmhss.github.io/admin`).
2.  Click **Login with GitHub**.

### Authentication Setup

The CMS is configured to use **GitHub** as the backend with a custom OAuth server.
- **Backend**: `github`
- **Authentication**: GitHub OAuth (hosted on Vercel).

### Adding Site Editors

To add new editors, you must give them access to the GitHub repository:

1.  Go to the repository **Settings** on GitHub.
2.  Navigate to **Collaborators** (or Manage Access).
3.  Invite the user and grant them **Write** access.
4.  Once they accept the invitation, they can log in via `/admin`.

### CMS Documentation

For detailed setup instructions, see [CMS_SETUP.md](./CMS_SETUP.md).

## 📦 Deployment

This project is configured to deploy to **GitHub Pages** using GitHub Actions.

1.  Push your code to the `main` branch.
2.  Go to your repository **Settings > Pages**.
3.  Under **Build and deployment**, select **GitHub Actions** as the source.
4.  The workflow defined in `.github/workflows/astro.yml` will automatically build and deploy the site.
5.  Ensure `astro.config.mjs` has the correct `site` and `base` URL for your GitHub Pages URL.

## 🖼️ Media & Assets

-   **Images:** Keep images optimized (below 200KB where possible). Uploads via CMS go to `public/uploads/`.
-   **Favicons:** Managed in `public/favicon/` with cache-busting logic in the layout.
-   **Videos:** Embed videos from YouTube/Vimeo to keep the repository size small.

## 🛠️ Customization

### Brand Colors

Defined in `src/styles/global.css` (Tailwind theme):
- Burgundy: `#6f1d1b`
- Gold: `#bb9457`
- Cream: `#ffe6a7`
