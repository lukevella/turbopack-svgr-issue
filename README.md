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
  
## Screenshots

<table>
  <tr>
    <td><strong>Without Turbopack (Correct)</strong></td>
    <td><strong>With Turbopack (Incorrect)</strong></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/e313659d-130e-49dc-8144-897ba24f860d" alt="Screenshot showing three distinct SVGs when running without Turbopack" width="400"/></td>
    <td><img src="https://github.com/user-attachments/assets/40be9476-f2a4-41fc-a8c0-ef9af726864c" alt="Screenshot showing the same SVG repeated three times when running with Turbopack" width="400"/></td>
  </tr>
</table>
