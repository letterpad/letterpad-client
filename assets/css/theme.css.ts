import css from "styled-jsx/css";

export const themeVars = css`
  :global(:root) {
    /* set base values */
    --text-base-size: 1em;
    --text-scale-ratio: 1.2;
    --baseline: 24px;

    /* type scale */
    --text-xs: calc(1em / (var(--text-scale-ratio) * var(--text-scale-ratio)));
    --text-sm: calc(1em / var(--text-scale-ratio));
    --text-md: calc(1em * var(--text-scale-ratio));
    --text-lg: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-xl: calc(
      1em * var(--text-scale-ratio) * var(--text-scale-ratio) *
        var(--text-scale-ratio)
    );
    --text-xxl: calc(
      1em * var(--text-scale-ratio) * var(--text-scale-ratio) *
        var(--text-scale-ratio) * var(--text-scale-ratio)
    );
    --text-xxxl: calc(
      1em * var(--text-scale-ratio) * var(--text-scale-ratio) *
        var(--text-scale-ratio) * var(--text-scale-ratio) *
        var(--text-scale-ratio)
    );

    /* spacing values */
    --space-sm: calc(var(--baseline) / 2);
    --space-md: var(--baseline);
    --space-lg: calc(var(--baseline) * 2);
    --space-xl: calc(var(--baseline) * 3);
    --space-xxl: calc(var(--baseline) * 4);

    --color-primary: #2188ff;
    --color-text: #24292e;
    --color-text-dull: #768390;
    --color-border: #e0e0e0;
    --color-bg: #fefefe;
    --color-bg-2: #f0f0f0;
    --color-post-bg: #f0f0f0;
    --color-pre-bg: #e1e1e1;
    --color-pre-fg: #cdd9e5;
    --font-sans-serif: "Rubik", sans-serif;
    --font-serif: "Libre Baskerville", serif;
    --font-mono: monospace;
    --font-light: 100;
    --font-normal: 400;
    --font-bold: 700;
    --font-heavy: 800;
    --xlarge: 1680px;
    --large: 1280px;
    --medium: 980px;
    --small: 740px;
    --xsmall: 480px;
    --height: 4rem;
    --margin: 2rem;
    --radius: 0.5rem;

    @media (max-width: 767px) {
      --baseline: 16px;
    }
  }
  @media (prefers-color-scheme: dark) {
    :global(:root) {
      --color-primary: #539bf5;
      --color-text: #adbac7;
      --color-text-dull: #aeaeae;
      --color-border: #444c56;
      --color-bg: #1e2228;
      --color-bg-2: rgba(205, 217, 229, 0.15);
      --color-post-bg: rgba(9, 11, 13, 0.8);
      --color-pre-bg: #2d333b;
      --color-pre-fg: #cdd9e5;
    }
  }
`;
