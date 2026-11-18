# Artune GitHub Pages Site

This is the GitHub-ready version of the Artune website.

## Site Structure

```txt
/
/learning/
/learning/group-dynamics-for-facilitators/
/consulting/
/consulting/educational-consulting/
/consulting/leadership-and-organizations/
/events/
/creators/
/about/
/contact/
```

The retired paths below redirect into the new structure:

```txt
/explore/ -> /
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
homepage.css
course-introduction.css
navigation.css
navigation.js
consulting.css
leadership.css
consulting.js
analytics.js
script.js
assets/
explore/
learning/
consulting/
events/
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

- The site is structured as a public-facing development and learning portal.
- Contact email: `admin@artune.net`
- Offerings has three categories: Personal & Professional Development, Consulting & Coaching, and Events.
- School consulting inquiries use `/contact/` until a dedicated booking link is available.
- Event dates and booking links can be added when confirmed; no dates are currently advertised.
