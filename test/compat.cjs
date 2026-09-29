/*
 * Renders the built package (dist/) with whichever React version is installed and
 * compares the markup with test/markup.fixture.json, so CI can prove every supported
 * React major renders the same HTML without warnings.
 *
 *   node test/compat.cjs           check against the fixture
 *   node test/compat.cjs --update  rewrite the fixture
 */
const fs = require("fs");
const path = require("path");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const Pagination = require("../dist/Pagination.js").default;

const FIXTURE = path.join(__dirname, "markup.fixture.json");

const CASES = [
  ["defaults", { totalItemsCount: 20 }],
  ["readme-example", { totalItemsCount: 450, activePage: 15, pageRangeDisplayed: 5 }],
  ["single-item", { totalItemsCount: 1 }],
  ["zero-items", { totalItemsCount: 0 }],
  ["last-page", { totalItemsCount: 450, activePage: 45 }],
  ["hide-disabled-first-page", { totalItemsCount: 100, activePage: 1, hideDisabled: true }],
  ["hide-disabled-last-page", { totalItemsCount: 100, activePage: 10, hideDisabled: true }],
  ["hide-navigation", { totalItemsCount: 100, activePage: 5, hideNavigation: true }],
  ["hide-first-last", { totalItemsCount: 100, activePage: 5, hideFirstLastPages: true }],
  ["all-classes", { totalItemsCount: 100, activePage: 1, innerClass: "pg", itemClass: "item", linkClass: "link", activeClass: "on", activeLinkClass: "on-link", disabledClass: "off", itemClassFirst: "if", itemClassPrev: "ip", itemClassNext: "in", itemClassLast: "il", linkClassFirst: "lf", linkClassPrev: "lp", linkClassNext: "ln", linkClassLast: "ll" }],
  ["page-urls", { totalItemsCount: 100, activePage: 3, getPageUrl: (i) => "/list?page=" + i }],
  ["custom-text", { totalItemsCount: 100, activePage: 3, prevPageText: "Prev", nextPageText: "Next", firstPageText: "First", lastPageText: "Last" }],
  ["element-text", { totalItemsCount: 100, activePage: 3, prevPageText: React.createElement("span", { className: "icon" }, "‹") }],
  ["custom-aria", { totalItemsCount: 100, activePage: 3, pageAriaLabel: "Page :page", firstPageAriaLabel: "First", prevPageAriaLabel: "Previous", nextPageAriaLabel: "Next", lastPageAriaLabel: "Last" }],
  ["range-3-per-25", { totalItemsCount: 1000, activePage: 20, pageRangeDisplayed: 3, itemsCountPerPage: 25 }],
  ["active-beyond-total", { totalItemsCount: 50, activePage: 100 }]
];

const warnings = [];
console.error = (...args) => warnings.push(args.join(" "));
console.warn = (...args) => warnings.push(args.join(" "));

const actual = {};
for (const [name, props] of CASES) {
  actual[name] = renderToStaticMarkup(React.createElement(Pagination, Object.assign({ onChange() {} }, props)));
}

const label = `React ${React.version}`;
if (process.argv.includes("--update")) {
  fs.writeFileSync(FIXTURE, JSON.stringify(actual, null, 2) + "\n");
  process.stdout.write(`${label}: wrote ${Object.keys(actual).length} cases to ${path.relative(process.cwd(), FIXTURE)}\n`);
  process.exit(0);
}

const expected = JSON.parse(fs.readFileSync(FIXTURE, "utf8"));
const mismatches = CASES.map(([name]) => name).filter((name) => actual[name] !== expected[name]);

if (mismatches.length || warnings.length) {
  mismatches.forEach((name) => {
    process.stderr.write(`\n${name}\n  expected ${expected[name]}\n  actual   ${actual[name]}\n`);
  });
  warnings.forEach((w) => process.stderr.write(`\nwarning: ${w.split("\n")[0]}\n`));
  process.stderr.write(`\n${label}: ${mismatches.length} mismatches, ${warnings.length} warnings\n`);
  process.exit(1);
}
process.stdout.write(`${label}: all ${CASES.length} cases match the fixture, no warnings\n`);
