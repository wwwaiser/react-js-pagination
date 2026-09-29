[![CI](https://github.com/wwwaiser/react-js-pagination/actions/workflows/ci.yml/badge.svg)](https://github.com/wwwaiser/react-js-pagination/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/react-js-pagination.svg)](https://www.npmjs.com/package/react-js-pagination)
[![npm downloads](https://img.shields.io/npm/dw/react-js-pagination.svg)](https://www.npmjs.com/package/react-js-pagination)

# react-js-pagination

**A small React component that renders pagination.**

The component comes with no built-in styles. Its HTML matches [Bootstrap](https://getbootstrap.com/docs/5.3/components/pagination/) pagination stylesheets.

- Works with React 15, 16, 17, 18 and 19, and uses your app's React (no second copy).
- Ships TypeScript types.
- Accessible by default: `aria-current` on the active page, `aria-disabled` on disabled controls, and labels you can translate.
- Three small dependencies: `classnames`, `paginator` and `prop-types`.

## Installation

```
npm install react-js-pagination
```

If you use TypeScript, you can remove `@types/react-js-pagination`: types are included from 3.1.0.

## Usage

`Pagination` is a controlled component. It shows the page you pass in `activePage`, and `onChange` tells you which page the user picked. Store that page in state and pass it back, or the highlighted page never changes.

```jsx
import React, { useState } from "react";
import Pagination from "react-js-pagination";

export default function Results() {
  const [activePage, setActivePage] = useState(1);

  return (
    <nav aria-label="Results pages">
      <Pagination
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={setActivePage}
      />
    </nav>
  );
}
```

See the [live example](https://wwwaiser.github.io/react-js-pagination/).

![Example](https://i.gyazo.com/9af4c2b9e20aa95a67597d3ca64efde3.png)

### Bootstrap 4 and 5

Bootstrap 3 works as is. Bootstrap 4 and 5 need two extra class names:

```jsx
<Pagination itemClass="page-item" linkClass="page-link" {...otherProps} />
```

### Real page URLs

Pass `getPageUrl` to give every link a real `href`. Clicks still call `onChange`. Ctrl-, Cmd-, Shift- and Alt-clicks are left to the browser, so people can open a page in a new tab or window (or download it with Alt), as with any link.

```jsx
<Pagination getPageUrl={(page) => `/products?page=${page}`} {...otherProps} />
```

### Accessibility

- The active page link has `aria-current="page"`.
- Disabled first, previous, next and last controls have `aria-disabled="true"`.
- Every link has an `aria-label`. Set the `*AriaLabel` props to translate them. In `pageAriaLabel`, `:page` is replaced with the page number.
- Wrap the component in `<nav aria-label="…">` so screen readers announce it as navigation.

## Props

Name | Type | Default | Description
--- | --- | --- | ---
`totalItemsCount` | Number | | **Required.** Total count of items which you are going to display
`onChange` | Function | | **Required.** Page change handler. Receives `pageNumber` as its argument
`activePage` | Number | `1` | Active page, starting at 1
`itemsCountPerPage` | Number | `10` | Count of items per page
`pageRangeDisplayed` | Number | `5` | Range of pages in paginator, excluding navigation blocks (prev, next, first, last pages)
`prevPageText` | String / ReactElement | `⟨` | Text of prev page navigation button
`firstPageText` | String / ReactElement | `«` | Text of first page navigation button
`lastPageText` | String / ReactElement | `»` | Text of last page navigation button
`nextPageText` | String / ReactElement | `⟩` | Text of next page navigation button
`pageAriaLabel` | String | `Go to page number :page` | `aria-label` of page links; `:page` is replaced with the page number
`firstPageAriaLabel` | String | `Go to first page` | `aria-label` of the first page button
`prevPageAriaLabel` | String | `Go to previous page` | `aria-label` of the previous page button
`nextPageAriaLabel` | String | `Go to next page` | `aria-label` of the next page button
`lastPageAriaLabel` | String | `Go to last page` | `aria-label` of the last page button
`getPageUrl` | Function | | Generate the `href` attribute for a page
`innerClass` | String | `pagination` | Class name of `<ul>` tag
`activeClass` | String | `active` | Class name of active `<li>` tag
`activeLinkClass` | String | | Class name of active `<a>` tag
`itemClass` | String | | Default class of the `<li>` tag
`itemClassFirst` | String | | Class of the first `<li>` tag
`itemClassPrev` | String | | Class of the previous `<li>` tag
`itemClassNext` | String | | Class of the next `<li>` tag
`itemClassLast` | String | | Class of the last `<li>` tag
`disabledClass` | String | `disabled` | Class name of the first, previous, next and last `<li>` tags when disabled
`hideDisabled` | Boolean | `false` | Hide navigation buttons (prev, next, first, last) if they are disabled
`hideNavigation` | Boolean | `false` | Hide navigation buttons (prev page, next page)
`hideFirstLastPages` | Boolean | `false` | Hide first/last navigation buttons
`linkClass` | String | | Default class of the `<a>` tag
`linkClassFirst` | String | | Class of the first `<a>` tag
`linkClassPrev` | String | | Class of the previous `<a>` tag
`linkClassNext` | String | | Class of the next `<a>` tag
`linkClassLast` | String | | Class of the last `<a>` tag

## Development

```
npm install
npm start              # demo with live reload
npm run validate       # lint, type check and tests
npm run test:compat    # build, then compare the rendered markup with the fixture
npm run build-example  # rebuild the demo in demo/ (served by GitHub Pages)
```

CI also checks the markup on React 15, 16, 17 and 18. See [CHANGELOG.md](CHANGELOG.md) for release notes.
