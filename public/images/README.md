# Images for Mousiki

## How to Get Images from mousiki.io

Since the current live site at https://mousiki.io has the images you need, here's how to download them:

### Method 1: Browser Developer Tools (Easiest)
1. Visit https://mousiki.io
2. Right-click on any image ? "Save image as..."
3. Save to `public/images/` folder

### Method 2: Browser Inspector
1. Open https://mousiki.io
2. Press F12 (Developer Tools)
3. Go to Network tab
4. Refresh the page
5. Filter by "Img" to see all images
6. Right-click on each image URL ? "Open in new tab"
7. Save each image to `public/images/`

### Method 3: Using wget or curl (Command Line)
If you know the image URLs from mousiki.io:
```bash
cd public/images
wget https://mousiki.io/path-to-image.png
# or
curl -O https://mousiki.io/path-to-image.png
```

## Recommended Image Structure

```
public/images/
??? hero-bg.jpg          # Hero section background
??? teacher-hero.png     # For Teachers page
??? school-hero.png      # For Schools page
??? student-hero.png     # For Students page
??? parent-hero.png      # For Parents page
??? about-team.jpg       # Team photo
??? feature-icons/       # Feature illustration icons
?   ??? student-mgmt.svg
?   ??? scheduling.svg
?   ??? online-class.svg
?   ??? progress.svg
??? logos/
    ??? logo.png         # Main logo
    ??? logo-white.png   # White version for dark backgrounds
```

## Alternative: Use Free Stock Images

If you want to use free alternatives while you prepare the mousiki.io images:

### Free Music Education Stock Photos:
- **Unsplash**: https://unsplash.com/s/photos/music-education
- **Pexels**: https://www.pexels.com/search/music%20lesson/
- **Pixabay**: https://pixabay.com/images/search/music%20class/

### Free Icons:
- **Font Awesome**: https://fontawesome.com (free tier)
- **Heroicons**: https://heroicons.com
- **Lucide**: https://lucide.dev

## After Adding Images

Once you've added images to `public/images/`, update the src attribute in components:

```javascript
// Example usage
<img src="/images/hero-bg.jpg" alt="Music Education" />
<img src="/images/teacher-hero.png" alt="For Teachers" />
```

## Current Status

The application is currently using emoji icons (??, ??, etc.) and gradient backgrounds as placeholders. These work well but can be replaced with actual images once downloaded from mousiki.io.
