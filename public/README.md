# Steps To Deploy

- This is meant to let me remember how I deploy this.

## How this personal page was deployed

- Type this to install gh pages
```
npm install gh-pages --save-dev
```
- Make a 404.html file inside public folder and type
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="refresh" content="0;url=/index.html" />
  <script>
    window.location.href = '/index.html';
  </script>
</head>
<body>
</body>
</html>
```
- Now in terminal type this
```
npm run build
npm run deploy
```
- Check deployment in github repo and wait 2-5 mins
- Inside settings, pages, it should be located to gh pages branch.
- Check deployment section and find the link to the site.

## Once finish and want to deploy again
```
npm run build
npm run deploy
```