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

2.  **Add `vercel.json` to Your Fork (CRITICAL)**:
    *   This step fixes the "environment variables not found" issue by forcing the Node.js runtime.
    *   Go to your forked repository on GitHub (`your-username/netlify-cms-github-oauth-provider`).
    *   Click **Add file** > **Create new file**.
    *   Name the file: `vercel.json`
    *   Paste this content exactly:
        ```json
        {
          "version": 2,
          "builds": [
            {
              "src": "index.js",
              "use": "@vercel/node"
            }
          ]
        }
        ```
    *   Click **Commit changes**.

3.  **Create a Project in Vercel**:
    *   Log in to [Vercel](https://vercel.com/).
    *   Click **Add New...** > **Project**.
    *   Find the repository you just forked and click **Import**.

4.  **Add Environment Variables**:
    *   Go to **Settings** > **Environment Variables**.
    *   Add the following variables:
        *   **Name**: `ORIGINS`
        *   **Value**: `hmhss.github.io` (or `*` to allow all)
        *   **Name**: `OAUTH_CLIENT_ID`
        *   **Value**: (Your Client ID from GitHub)
        *   **Name**: `OAUTH_CLIENT_SECRET`
        *   **Value**: (Your Client Secret from GitHub)
    *   **IMPORTANT**: Ensure these are applied to **Production**, **Preview**, and **Development**.

4.  **Redeploy (CRITICAL STEP)**:
    *   Adding variables does **NOT** update the running site automatically.
    *   Go to the **Deployments** tab.
    *   Click the **three dots** (...) next to the latest deployment.
    *   Select **Redeploy**.
    *   Wait for the deployment to turn green (Ready).
    *   *Note: You do not need to change the Build Command or Output Directory.*

4.  **Deploy (or Redeploy)**:
    *   **Crucial**: If you have already deployed, you must **Redeploy** for the new environment variables to take effect.
    *   Go to **Deployments** tab > Click the three dots on the latest deployment > **Redeploy**.
    *   **Copy your new Domain** (if you haven't already): `https://netlify-cms-github-oauth-provider-three.vercel.app`.

## Troubleshooting

### "Vercel Authentication" / 401 Unauthorized
If you visit the URL and see a Vercel login screen:
1.  Go to Vercel Project > **Settings** > **Deployment Protection**.
2.  **Disable** "Vercel Authentication".
3.  Save.

### "Client ID undefined" / "No code provided"
If you see `client_id=undefined` in the URL or logs:
1.  Go to Vercel Project > **Settings** > **Environment Variables**.
2.  Ensure `OAUTH_CLIENT_ID` and `OAUTH_CLIENT_SECRET` are added.
3.  **IMPORTANT**: Go to **Deployments** and click **Redeploy** for them to take effect.

### 500: INTERNAL_SERVER_ERROR
If you see this error:
1.  It usually means `ORIGINS` variable is missing.
2.  Add `ORIGINS` = `*` (or `hmhss.github.io`) in Vercel Environment Variables.
3.  **Redeploy**.

## Step 3: Connect Everything

1.  **Update GitHub App Callback**: 
    *   Go back to your GitHub OAuth App settings (Developer Settings > OAuth Apps > Edit).
    *   **CRITICAL**: Update the **Authorization callback URL** to:
        `https://netlify-cms-github-oauth-provider-ajitjohnsons-projects.vercel.app/callback`
    *   (The Homepage URL can be your main site: `https://hmhss.github.io`)
    *   Save changes.

2.  **Update Config File**:
    *   I have already updated `public/admin/config.yml` for you.
    *   It now points to `base_url: https://netlify-cms-github-oauth-provider-ajitjohnsons-projects.vercel.app`
    *   And `auth_endpoint: auth` (root path).

## Done!

Once you have updated the Callback URL in GitHub (Step 3.1), you can go to:
[https://hmhss.github.io/admin](https://hmhss.github.io/admin)

It should now allow you to log in via GitHub without any Netlify errors.

## Done!
Now when you visit `https://hmhss.github.io/admin`, it will use your own private, free authentication server. No Netlify limits!
