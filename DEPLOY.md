# Deployment Instructions

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `dhm-guide-beta`
3. Description: "Next.js beta version of DHM Guide for improved performance"
4. Choose "Public"
5. ⚠️ **DO NOT** check any initialization options
6. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the empty repository, run these commands:

```bash
# Add your repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/dhm-guide-beta.git

# Push the code
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: If repository doesn't appear in Vercel

1. In Vercel, click "Import Git Repository"
2. Click "Add GitHub Account" or "Configure GitHub App"
3. Grant access to your repositories
4. Select the `dhm-guide-beta` repository
5. Click "Import"

### Option B: Manual import

1. In Vercel, use "Import Third-Party Git Repository"
2. Enter: `https://github.com/YOUR_USERNAME/dhm-guide-beta`
3. Click "Continue"

## Step 4: Configure Deployment

1. Framework Preset: Next.js (auto-detected)
2. Root Directory: ./ (leave as is)
3. Build Command: `npm run build` (default)
4. Output Directory: .next (default)
5. Install Command: `npm install` (default)

Click "Deploy"

## Step 5: Verify Deployment

Once deployed, you'll get a URL like:
- `dhm-guide-beta.vercel.app`
- `dhm-guide-beta-YOUR_USERNAME.vercel.app`

## Troubleshooting

### Repository not showing in Vercel?

1. Check GitHub integration:
   - Go to Vercel Dashboard → Settings → Integrations
   - Check if GitHub is connected
   - Click "Manage" → "Repository access"
   - Add `dhm-guide-beta` to accessible repositories

2. Refresh Vercel:
   - Log out and log back in
   - Clear browser cache
   - Try incognito mode

### Build failing?

Check build logs for errors. Common issues:
- Missing environment variables
- Node version mismatch
- Missing dependencies

## Performance Testing

After deployment:
1. Visit your Vercel URL
2. Open Chrome DevTools → Lighthouse
3. Run Performance audit
4. Compare LCP with original site (target: <1.5s vs current 4.9s)