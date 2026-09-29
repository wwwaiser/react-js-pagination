# Changelog

## 3.1.0

This release needs no code changes. It fixes installs on React 19, removes the dependencies that security scanners flagged, and makes the package about 90 times smaller.

### Fixed

- Works with React 18 and 19. `react` is now a peer dependency, so the component uses your app's React instead of installing a second copy of React 16. With React 19 that second copy crashed rendering with "Objects are not valid as a React child" ([#101](https://github.com/wwwaiser/react-js-pagination/issues/101)).
- Removed `tar` and `fstream` from the dependencies. The component never used them, and they triggered high-severity audit warnings ([#133](https://github.com/wwwaiser/react-js-pagination/issues/133), [#152](https://github.com/wwwaiser/react-js-pagination/issues/152)).
- The published package contains only the build, types and docs: 40 kB unpacked instead of 3.7 MB, which used to include the demo bundle.
- The active page link no longer gets the class `undefined` when `activeLinkClass` is not set.
- Previous and next no longer remount on every page change, so custom icons stop flashing ([#84](https://github.com/wwwaiser/react-js-pagination/issues/84)).
- `pageRangeDisplayed={0}` shows only the navigation controls instead of ten page numbers ([#66](https://github.com/wwwaiser/react-js-pagination/issues/66)).
- Ctrl-, Cmd-, Shift- and Alt-clicks on links with a real `getPageUrl` are left to the browser (new tab, new window or download) instead of being cancelled, as Next.js and React Router links do.

### Added

- `aria-current="page"` on the active page link ([#154](https://github.com/wwwaiser/react-js-pagination/issues/154), [#151](https://github.com/wwwaiser/react-js-pagination/pull/151), thanks @some-daan).
- `pageAriaLabel`, `firstPageAriaLabel`, `prevPageAriaLabel`, `nextPageAriaLabel` and `lastPageAriaLabel` props to customize or translate the link labels ([#149](https://github.com/wwwaiser/react-js-pagination/pull/149), thanks @some-daan).
- `aria-disabled="true"` on disabled first, previous, next and last controls.
- `ellipsis` and `ellipsisText` keep the first and last page visible: `1 … 18 19 20 21 22 … 45` ([#103](https://github.com/wwwaiser/react-js-pagination/issues/103), based on [#64](https://github.com/wwwaiser/react-js-pagination/pull/64), thanks @nbudin).
- `onChange` receives the clicked control as a second argument: `"first"`, `"prev"`, `"page"`, `"next"` or `"last"` ([#88](https://github.com/wwwaiser/react-js-pagination/issues/88), [#110](https://github.com/wwwaiser/react-js-pagination/issues/110)).
- `getPageText` customizes page link labels, for example `1,002` ([#65](https://github.com/wwwaiser/react-js-pagination/issues/65)).
- `inactiveClass` and `inactiveLinkClass` style every item except the active page, for Tailwind and other utility classes ([#113](https://github.com/wwwaiser/react-js-pagination/issues/113), [#99](https://github.com/wwwaiser/react-js-pagination/issues/99)).
- TypeScript types. They are compatible with `@types/react-js-pagination`, which you can now remove.
- `llms.txt` with a short usage guide for coding agents.

### Maintenance

- Tests moved from Enzyme to React Testing Library, with CI on GitHub Actions for React 15 to 19.
- The demo moved from webpack 4 to Vite.

## 3.0.3

Last release before 3.1.0 (February 2020).
