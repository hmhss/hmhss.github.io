# Setting up Free CMS Authentication

Since the Netlify free tier limits were reached, we are switching to a robust, completely free open-source stack:
1.  **Hosting**: GitHub Pages (Already set up)
2.  **Authentication**: A free OAuth helper deployed on Vercel

## Step 1: Create a GitHub OAuth App

1.  Log into GitHub and go to **Settings** > **Developer settings** > **OAuth Apps**.
2.  Click **New OAuth App**.
3.  Fill in the details:
    *   **Application Name**: `HMHSS CMS Auth`
    *   **Homepage URL**: `https://hmhss.github.io`
    *   **Authorization callback URL**: `https://hmhss-oauth.vercel.app/callback` (You will update this in Step 2 if your Vercel URL is different)
4.  Click **Register application**.
5.  Copy the **Client ID** and generate a **Client Secret**. Keep these safe.

## Step 2: Deploy the OAuth Helper to Vercel

We will use a free, open-source project to handle the secure login handshake.

1.  Click this button to deploy the helper: 
    [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vencax/netlify-cms-github-oauth-provider)
    *(If the link doesn't work, go to https://github.com/vencax/netlify-cms-github-oauth-provider and click the "Deploy to Vercel" button there)*

2.  Vercel will ask for environment variables. Enter the ones you got from GitHub:
    *   `OAUTH_CLIENT_ID`: Paste your Client ID
    *   `OAUTH_CLIENT_SECRET`: Paste your Client Secret

3.  Click **Deploy**.
4.  Once deployed, you will get a URL (e.g., `https://project-name-xyz.vercel.app`).

## Step 3: Connect Everything

1.  **Update GitHub App**: Go back to your GitHub OAuth App settings and update the **Authorization callback URL** to match your new Vercel URL:
    *   `https://<YOUR-VERCEL-URL>/callback`

2.  **Update Code**: Edit `public/admin/config.yml` in this repository:
    ```yaml
    backend:
      name: github
      repo: hmhss/hmhss.github.io
      branch: main
      base_url: https://<YOUR-VERCEL-URL>  <-- Update this line!
      auth_endpoint: auth
    ```

3.  **Push Changes**: Commit and push the change to `config.yml`.

## Done!
Now when you visit `https://hmhss.github.io/admin`, it will use your own private, free authentication server. No Netlify limits!
