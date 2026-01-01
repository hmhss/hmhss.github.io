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

3.  **Add Environment Variables**:
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

### Troubleshooting
If you see a `500: INTERNAL_SERVER_ERROR` with `Error: process.env.ORIGINS MUST be comma separated list of origins`, it means the `ORIGINS` environment variable is missing or empty in the running deployment.

1.  **Verify Variable**: Go to Vercel > Settings > Environment Variables. Ensure `ORIGINS` exists with value `*`.
2.  **Force Redeploy**: Go to Deployments > Click the three dots > **Redeploy**.
    *   *Note: If redeploying doesn't work, try creating a new deployment by pushing a small change to the Vercel repo or clicking "Promote to Production".*

### Alternative `ORIGINS` Value
If `hmhss.github.io` still fails, try changing the `ORIGINS` value to `*` (asterisk).
1.  Go to Vercel > Settings > Environment Variables.
2.  Edit `ORIGINS` and set it to `*`.
3.  Go to Deployments > Redeploy.
This allows any domain to connect, which rules out domain matching issues.

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

## Done!

Once you have updated the Callback URL in GitHub (Step 3.1), you can go to:
[https://hmhss.github.io/admin](https://hmhss.github.io/admin)

It should now allow you to log in via GitHub without any Netlify errors.

## Done!
Now when you visit `https://hmhss.github.io/admin`, it will use your own private, free authentication server. No Netlify limits!
