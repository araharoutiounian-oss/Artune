# Artune GitHub Pages Site

This is the GitHub-ready version of the Artune website.

## Site Structure

```txt
/
/explore/
/learning/
/learning/group-dynamics-for-facilitators/
/creators/
/about/
/contact/
```

The retired paths below redirect into the new structure:

```txt
/courses/ -> /learning/
/courses/group-dynamics-for-facilitators/ -> /learning/group-dynamics-for-facilitators/
/practice/ -> /learning/
/journal/ -> /learning/
```

## Publish with GitHub Pages

Upload everything in this folder to the root of your GitHub repository:

```txt
index.html
styles.css
script.js
assets/
explore/
learning/
creators/
about/
contact/
courses/
practice/
journal/
.nojekyll
CNAME
README.md
```

Then in GitHub:

1. Go to `Settings` > `Pages`.
2. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
3. Save.

## Custom Domain

The included `CNAME` file is set to:

```txt
artune.net
```

## Notes

- The `Member Portal` button links to the FreshLearn login page.
- The site is structured as a public-facing development and learning portal.
- Contact email: `admin@artune.net`
