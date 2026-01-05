# How to Get Images from mousiki.io

## Quick Steps

### 1. Visit the Live Site
Go to https://mousiki.io in your browser

### 2. Download Images Using These Methods:

#### **Method A: Right-Click Save (Easiest)**
1. Right-click on any image on mousiki.io
2. Select "Save image as..."
3. Save to your `public/images/` folder in this project

#### **Method B: Browser DevTools**
1. Open https://mousiki.io
2. Press `F12` or right-click ? "Inspect"
3. Go to the **Network** tab
4. Click the filter icon and select **Img** (images only)
5. Refresh the page (`Ctrl+R` or `Cmd+R`)
6. You'll see all image URLs listed
7. Right-click each image URL ? "Open in new tab"
8. Save each image to `public/images/`

#### **Method C: View Page Source**
1. On mousiki.io, press `Ctrl+U` (or `Cmd+U` on Mac)
2. Search for `<img` tags to find image sources
3. Copy the image URLs
4. Download each URL

### 3. Recommended Image Names

Save images with these names in `public/images/`:

```
public/images/
??? about-hero-bg.jpg       # About page hero background
??? team-photo.jpg          # Team photo for About page
??? teacher-hero.png        # For Teachers landing page
??? school-hero.png         # For Schools landing page
??? student-hero.png        # For Students landing page
??? parent-hero.png         # For Parents landing page
??? logo.png                # Mousiki logo
??? logo-white.png          # White version of logo
```

## Current Implementation

The code is already set up to use images! It will:
- ? **Display images** if they exist in `public/images/`
- ? **Gracefully fall back** to beautiful gradients if images aren't found yet
- ? **Work perfectly** with emoji icons as current placeholders

## Alternative: Use Free Stock Images

While you prepare mousiki.io images, you can use these free resources:

### **Free Music Photos:**
- [Unsplash - Music Education](https://unsplash.com/s/photos/music-education)
- [Pexels - Music Lesson](https://www.pexels.com/search/music%20lesson/)
- [Pixabay - Music Class](https://pixabay.com/images/search/music%20class/)

### **Free Icons & Illustrations:**
- [Undraw](https://undraw.co/illustrations) - Customizable illustrations
- [DrawKit](https://www.drawkit.com/) - Free vector illustrations
- [Heroicons](https://heroicons.com/) - Beautiful icons

## Testing Your Images

After adding images to `public/images/`:

1. **Restart your dev server:**
   ```bash
   npm start
   ```

2. **Check the browser** - images should appear automatically!

3. **If images don't show:**
   - Check the browser console for errors
   - Verify file names match exactly (case-sensitive)
   - Ensure images are in `public/images/` not `src/images/`

## Image Optimization Tips

For best performance:
- **Compress images** before adding (use [TinyPNG](https://tinypng.com/))
- **Use WebP format** for better compression (optional)
- **Recommended sizes:**
  - Hero backgrounds: 1920x1080px
  - Feature images: 800x600px
  - Icons: 256x256px or SVG

## Need Help?

If you have issues accessing mousiki.io images, you can:
1. Use the current emoji-based design (it looks great!)
2. Use free stock photos temporarily
3. Contact the mousiki.io team for image assets

---

**Note:** The current design with gradients and emojis is already creative and professional. Images will enhance it but aren't required for a beautiful site!
