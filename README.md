# Turbopack SVGR Issue Demonstration

This repository demonstrates a bug encountered when using multiple SVGs imported via `@svgr/webpack` in a Next.js project running with Turbopack.

## The Issue

When importing multiple different SVG components (using `@svgr/webpack`) within the same file (e.g., `src/app/page.tsx`), Turbopack seems to incorrectly render only the last imported SVG multiple times, instead of rendering each distinct SVG.

## Steps to Reproduce

1.  **Install dependencies:**
    ```bash
    pnpm install
    ```

2.  **Run development server (Standard Webpack):**
    ```bash
    pnpm dev
    ```
    *   **Expected Behavior:** The page should display three *different* SVG icons.

3.  **Run development server (Turbopack):**
    ```bash
    pnpm dev:turbo
    ```
    *   **Actual Behavior:** The page displays the *same* SVG icon (specifically, the last one imported in `src/app/page.tsx`) repeated three times. Changing the import order will determine which SVG is displayed.

