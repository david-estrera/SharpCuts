# Troubleshooting Guide

## White Screen Issue

If you're seeing a white screen, try these steps:

### 1. Check Browser Console
- Press `F12` or right-click → Inspect
- Go to the **Console** tab
- Look for any red error messages
- Common errors:
  - Module not found
  - Syntax errors
  - Import errors

### 2. Verify Dependencies
Make sure all dependencies are installed:
```bash
npm install
```

### 3. Clear Cache
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install

# Or on Windows PowerShell:
Remove-Item -Recurse -Force node_modules
npm install
```

### 4. Check if Dev Server is Running
Make sure the dev server started successfully:
```bash
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 5. Check Network Tab
- Open DevTools → Network tab
- Refresh the page
- Check if files are loading (should see 200 status)
- Look for failed requests (red entries)

### 6. Try Hard Refresh
- Windows/Linux: `Ctrl + Shift + R` or `Ctrl + F5`
- Mac: `Cmd + Shift + R`

### 7. Check Tailwind CSS
If styles aren't loading, verify:
- `postcss.config.js` exists
- `tailwind.config.js` exists
- `src/index.css` has `@tailwind` directives

### 8. Browser Compatibility
Try a different browser:
- Chrome/Edge (recommended)
- Firefox
- Safari

### 9. Check Port
If port 5173 is in use, Vite will use the next available port. Check the terminal output for the actual URL.

### 10. Rebuild
```bash
npm run build
npm run preview
```

## Common Errors

### "Cannot find module"
- Run `npm install` again
- Delete `node_modules` and reinstall

### "Port already in use"
- Kill the process using the port
- Or use a different port: `npm run dev -- --port 3000`

### Styles not loading
- Check that Tailwind is processing CSS
- Verify `postcss.config.js` and `tailwind.config.js` exist
- Clear browser cache

### React errors
- Check browser console for specific error messages
- Verify all imports are correct
- Check for syntax errors in components

