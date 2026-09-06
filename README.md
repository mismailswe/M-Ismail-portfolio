# Muhammad Ismail — Academic Portfolio

A refactor of the existing React portfolio, retaining Create React App, React 16, hash navigation, section components, shared content, Framer Motion, theme preferences, and the EmailJS contact integration. No new framework or runtime dependency was added.

## Run locally

```sh
npm install
npm start
```

`npm run build` produces the GitHub Pages build in `build/`, using the existing `/M-Ismail-portfolio/` homepage configuration. Publishing remains an explicit separate step with the existing deployment script.

For an offline content build without the optional external profile refresh:

```sh
USE_GITHUB_DATA=false USE_LINKEDIN_DATA=false npm run build
```

## Edit content

`src/portfolio.js` remains the source of truth:

- `greeting`, `aboutSection`, `academicProfile`: introduction, degree, research interests, and recent updates.
- `researchSection`: publications, years, authors, venues, descriptions, paper/code links, and academic profiles. The year filters derive from these records. Citation controls copy the supplied bibliographic record as plain text; abbreviated author lists are preserved.
- `researchProjects`: selected research implementations and their existing source links.
- `educationInfo`, `workExperiences`: education and engineering history.
- `contactInfo`: contact address. The existing CV link remains in `greeting.resumeLink`; it currently opens the original Google Drive folder.

The displayed profile uses the existing MS and publication records. PhD enrollment, institutional research appointments, citation metrics, teaching, and academic service have not been assumed. Add these when confirmed. The natural language autoencoder project links to the existing implementation notes, as a verified repository URL was not supplied.

Original commercial projects, machine learning projects, certifications, and LinkedIn content are retained in the repository for reuse, but the academic page emphasizes publications and research software. The original `#research`, `#work`, `#education`, `#experience`, and `#contact` anchors remain, with `#skills`, `#linkedin`, and `#ai-lab` pointing to their relevant content.

## Structure and design

`src/containers/Main.js` composes the existing sections. Shared typography and layout tokens live in `src/styles/globals.css`; each section retains its own stylesheet. `SectionHeading` and `Reveal` are reused with a quieter presentation. The page uses local system fonts, an ivory and green light theme, a matching dark theme, responsive navigation, keyboard focus states, reduced-motion support, and print styles. Existing saved theme choices are respected; new visitors start in light mode.

The previous preloader, custom cursor, marquee, animated counters, and tilting cards are no longer mounted. Their source files remain available. No external font or image service is required for the redesigned page.

## Verification

```sh
CI=true npm test -- --watchAll=false --runInBand
npm run build
```

The regression suite covers publication filtering, citation copy and its manual fallback, successful and failed contact submissions with a mocked EmailJS service, and mobile-menu Escape/focus handling. Browser checks cover desktop and narrow-screen layouts, internal anchors, year filters, citation disclosure, and both themes. Tests do not send email.

EmailJS configuration and setup are documented in `EMAIL_SETUP.md`. The production build still reports the existing Create React App/Browserslist maintenance notices; dependency migration is outside this design refactor.
