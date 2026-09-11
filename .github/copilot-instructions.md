# Copilot Instructions for SurveyJS Playground

## Build, Test, and Lint Commands

```bash
# Development server with hot reload
bun dev

# Type check and build for production
bun build

# Lint with ESLint
bun lint

# Preview production build
bun preview
```

The project uses **Vite** for bundling and **TypeScript** for type checking. ESLint config uses recommended rules for React, React Hooks, TypeScript, and React Refresh.

## High-Level Architecture

This is a React + TypeScript + Vite application that displays a multi-page questionnaire built with **SurveyJS**.

**Key Components**:
- **main.tsx** — Entry point that mounts the React app
- **App.tsx** — Root component; renders the Survey component from SurveyJS, displays form results on completion
- **survey.tsx** — Contains `createSurvey()` factory function that programmatically builds the survey model

**Data Flow**:
1. `createSurvey()` creates a SurveyJS Model instance
2. Pages are added declaratively with `survey.addNewPage()`
3. Questions are added to pages with `addNewQuestion(type, id)`
4. On form completion, `survey.onComplete` callback logs results to console
5. Survey is rendered via the `<Survey />` component from survey-react-ui

**Styling**:
- Uses SurveyJS's built-in CSS (`survey-core/survey-core.css`)
- Theme applied: `PlainLightPanelless` (clean, minimal design)
- Custom layout in App.tsx centers the survey with padding and max-width

## Key Conventions

### Survey Structure
- Survey is divided into **logical pages** (intro, about, feedback) using `addNewPage()`
- Each page has a `title` and optional `description`
- Pages are added in order and appear sequentially in the UI

### Question Types and IDs
- Questions are created with type and unique ID: `addNewQuestion(type, id)`
- Common types: `text`, `email`, `dropdown`, `radiogroup`, `checkbox`, `rating`, `boolean`, `comment`, `html`
- ID is used as the key in the submitted form data

### Conditional Visibility
- Use `visibleIf` property to show/hide questions based on other answers
- Example: `otherArea.visibleIf = "{areas} contains 'Other'"`
- Syntax follows SurveyJS expression language with `{}` for question references

### Form Validation and Settings
- `isRequired` controls whether a question is mandatory
- `inputType` specifies HTML input type (e.g., "email", "number", "date")
- `min`/`max` set numeric bounds (e.g., hours between 0–168)
- Rating questions use `rateMin`, `rateMax`, and description labels

### Question Properties
- `title` — Label shown to the user
- `description` — Optional helper text
- `choices` — Array of values for dropdowns, checkboxes, radiogroups
- `choices` can be strings or objects with `{ value, text }` pairs

### UI Customization
- `survey.showProgressBar = "top"` — Displays progress at the top
- `survey.showNavigationButtons = true` — Shows Previous/Next buttons
- `survey.firstPageIsStartPage = true` — Treats first page as a welcome screen
- `survey.startSurveyText` — Custom label for the start button

### Data Access
- Form data is submitted to the `onComplete` callback: `survey.onComplete.add((sender) => sender.data)`
- `sender.data` is an object with keys matching question IDs and submitted values

## React and TypeScript

- React Compiler is **enabled** for optimization; this may affect Vite dev/build performance
- Use strict TypeScript with default settings in `tsconfig.app.json`
- Components are functional components (no class components)
- ESLint enforces React Hook rules and React Refresh compatibility

## Dependencies to Know

- **survey-core** — Core SurveyJS model and styling
- **survey-react-ui** — React components for rendering surveys
- **react** / **react-dom** — UI framework
- **@vitejs/plugin-react** — Vite React support with Oxc transpiler
- **babel-plugin-react-compiler** — React Compiler plugin
