# Static Site with CI/CD and ESLint

This repository contains a simple static website built as part of a Software Configuration Management assignment. The site includes a demonstration of CI/CD using GitHub Actions and an ESLint quality gate.

## Features

- **Static site**: HTML, CSS, and JavaScript files constitute the entire website.
- **GitHub Pages**: The site is automatically built and deployed to GitHub Pages on every push to the `main` branch.
- **CI/CD Workflow**: GitHub Actions workflow builds the site, runs ESLint, uploads the artifact, and deploys it to Pages.
- **Quality Gate**: ESLint checks the JavaScript file and prevents deployment if linting errors are present.
- **Ugly UI improvement**: The site describes an example of an ugly user interface and explains how it could be improved. (Replace the screenshot placeholder with your own.)

## Repository Structure

- `index.html` – main page of the site
- `styles.css` – basic styling
- `js/app.js` – JavaScript with a message for the console
- `.eslintrc.json` – ESLint configuration, requiring semicolons and warning on unused variables
- `package.json` – Node package file with ESLint dependency and lint script
- `.github/workflows/deploy.yml` – GitHub Actions workflow for CI/CD

## Lint and Deployment

The workflow runs ESLint before the build step. If you remove a required semicolon from `js/app.js`, the linter will fail and deployment will be halted. Fixing the code and pushing changes will trigger a successful deployment.

## How to View the Site

After enabling GitHub Pages with the "GitHub Actions" source, the site will be available at:

```
https://<username>.github.io/ugly-ui-clean-ci/
```
Replace `<username>` with your actual GitHub username.

## LLM Prompts

The prompts used to generate this site and workflow can be found in the file `Prompts.md`.
