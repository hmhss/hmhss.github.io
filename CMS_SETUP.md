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

Since the "Deploy Button" can sometimes be confusing or outdated, here is the reliable manual method:

1.  **Fork the Helper Repository**:
    *   Go to: [https://github.com/vencax/netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider)
    *   Click the **Fork** button in the top right corner to copy this repo to your own GitHub account.

2.  **Create a Project in Vercel**:
    *   Log in to [Vercel](https://vercel.com/).
    *   Click **Add New...** > **Project**.
    *   Find the repository you just forked (`netlify-cms-github-oauth-provider`) and click **Import**.

3.  **Configure Environment Variables**:
    *   In the "Configure Project" screen, look for **Environment Variables**.
    *   Add the following variables (using the values from Step 1):
        *   **Name**: `OAUTH_CLIENT_ID`
            *   **Value**: (Paste your Client ID)
        *   **Name**: `OAUTH_CLIENT_SECRET`
            *   **Value**: (Paste your Client Secret)
    *   *Note: You do not need to change the Build Command or Output Directory.*

4.  **Deploy**:
    *   Click **Deploy**.
    *   Wait for the deployment to finish. You will be redirected to the project dashboard.
    *   **Copy your new Domain**: It will look something like `https://netlify-cms-github-oauth-provider-yourname.vercel.app`.

## Step 3: Connect Everything

1.  **Update GitHub App Callback**: 
    *   Go back to your GitHub OAuth App settings (Developer Settings > OAuth Apps > Edit).
    *   Update the **Authorization callback URL** to match your new Vercel URL + `/callback`.
    *   Example: `https://netlify-cms-github-oauth-provider-yourname.vercel.app/callback`

2.  **Update Code**: 
    *   Edit `public/admin/config.yml` in this repository.
    *   Update the `base_url` to your new Vercel domain (no trailing slash).

    ```yaml
    backend:
      name: github
      repo: hmhss/hmhss.github.io
      branch: main
      base_url: https://netlify-cms-github-oauth-provider-yourname.vercel.app
      auth_endpoint: auth
    ```

3.  **Push Changes**: Commit and push the change to `config.yml`.

## Done!
Now when you visit `https://hmhss.github.io/admin`, it will use your own private, free authentication server. No Netlify limits!
