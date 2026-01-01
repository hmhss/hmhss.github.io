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

1.  Navigate to `/admin` (e.g., `https://hmhss.github.io/admin`).
2.  Click **Login with GitHub**.

### Authentication Setup

The CMS is configured to use the **GitHub Backend**. This allows direct access to the GitHub API for content management.
- **Backend**: `github` (in `public/admin/config.yml`)
- **Authentication**: Uses Netlify's central API (`api.netlify.com`) as the OAuth bridge.

### Adding Site Editors

Since the CMS uses your GitHub account for authentication, adding new editors is done via GitHub repository permissions:

1.  Go to the [GitHub Repository](https://github.com/hmhss/hmhss.github.io).
2.  Navigate to **Settings** > **Collaborators**.
3.  Click **Add people**.
4.  Enter the user's **GitHub username** or **email address**.
5.  Select **Write** role (or Admin) to allow them to edit content.
6.  The user will receive an email invitation. Once accepted, they can log in at `/admin`.

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
