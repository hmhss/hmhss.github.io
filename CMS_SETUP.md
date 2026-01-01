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
        *   **Name**: Ov23liWGYxUY3CFoY9WY
            *   **Value**: (Paste your Client ID)
        *   **Name**: `OAUTH_CLIENT_SECRET`
            *   **Value**: (Paste your Client Secret)
        *   **Name**: `ORIGINS`
            *   **Value**: `hmhss.github.io`
    *   *Note: You do not need to change the Build Command or Output Directory.*

4.  **Deploy (or Redeploy)**:
    *   **Crucial**: If you have already deployed, you must **Redeploy** for the new environment variables to take effect.
    *   Go to **Deployments** tab > Click the three dots on the latest deployment > **Redeploy**.
    *   **Copy your new Domain** (if you haven't already): `https://netlify-cms-github-oauth-provider-three.vercel.app`.

### Troubleshooting
If you see a `500: INTERNAL_SERVER_ERROR` with `Cannot read properties of undefined (reading 'match')`, it means the `ORIGINS` environment variable is not set correctly or hasn't taken effect.
- **Double check**: Go to Settings > Environment Variables in Vercel. Ensure `ORIGINS` exists and is spelled exactly like that (all caps).
- **Redeploy**: Changing variables does NOT update the running site. You MUST go to Deployments > Redeploy.

## Step 3: Connect Everything

1.  **Update GitHub App Callback**: 
    *   Go back to your GitHub OAuth App settings (Developer Settings > OAuth Apps > Edit).
    *   **CRITICAL**: Update the **Authorization callback URL** to:
        `https://netlify-cms-github-oauth-provider-three.vercel.app/callback`
    
2.  **Update Code**: 
    *   (Already Done) `public/admin/config.yml` has been updated with your Vercel URL.

3.  **Push Changes**: 
    *   (Already Done) The config changes have been pushed to the repository.

## Done!

Once you have updated the Callback URL in GitHub (Step 3.1), you can go to:
[https://hmhss.github.io/admin](https://hmhss.github.io/admin)

It should now allow you to log in via GitHub without any Netlify errors.

## Done!
Now when you visit `https://hmhss.github.io/admin`, it will use your own private, free authentication server. No Netlify limits!
