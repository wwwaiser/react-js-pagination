import React, { useState } from "react";
import Pagination from "../src/components/Pagination.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const PER_PAGE = 10;
const TOTAL_COUNT = 450;

// Bootstrap 4 and 5 need these two classes; Bootstrap 3 works without them.
const BOOTSTRAP = { itemClass: "page-item", linkClass: "page-link" };

const DEMOS = [
  { id: "default", title: "Default", props: {}, code: "" },
  { id: "hide-disabled", title: "Hide disabled", props: { hideDisabled: true }, code: "hideDisabled" },
  { id: "custom-range", title: "Custom pages range", props: { pageRangeDisplayed: 10 }, code: "pageRangeDisplayed={10}" },
  {
    id: "custom-navigation-text",
    title: "Custom navigation texts",
    props: { prevPageText: "prev", nextPageText: "next", firstPageText: "first", lastPageText: "last" },
    code: "prevPageText=\"prev\"\nnextPageText=\"next\"\nfirstPageText=\"first\"\nlastPageText=\"last\""
  },
  {
    id: "custom-navigation-elements",
    title: "Custom navigation elements",
    props: {
      firstPageText: <span aria-hidden="true">⇤</span>,
      prevPageText: <span aria-hidden="true">←</span>,
      nextPageText: <span aria-hidden="true">→</span>,
      lastPageText: <span aria-hidden="true">⇥</span>
    },
    code: "firstPageText={<span aria-hidden=\"true\">⇤</span>}\nprevPageText={<span aria-hidden=\"true\">←</span>}\nnextPageText={<span aria-hidden=\"true\">→</span>}\nlastPageText={<span aria-hidden=\"true\">⇥</span>}"
  },
  { id: "hide-navigation", title: "Hide navigation arrows", props: { hideNavigation: true, pageRangeDisplayed: 10 }, code: "hideNavigation\npageRangeDisplayed={10}" },
  { id: "hide-first-last-pages", title: "Hide first/last pages", props: { hideFirstLastPages: true, pageRangeDisplayed: 10 }, code: "hideFirstLastPages\npageRangeDisplayed={10}" },
  {
    id: "page-urls",
    title: "Real page URLs",
    props: { getPageUrl: (page) => `?page=${page}` },
    code: "getPageUrl={(page) => `?page=${page}`}"
  },
  {
    id: "custom-aria-labels",
    title: "Custom aria labels",
    props: { pageAriaLabel: "Seite :page", prevPageAriaLabel: "Vorherige Seite", nextPageAriaLabel: "Nächste Seite", firstPageAriaLabel: "Erste Seite", lastPageAriaLabel: "Letzte Seite" },
    code: "pageAriaLabel=\"Seite :page\"\nprevPageAriaLabel=\"Vorherige Seite\"\nnextPageAriaLabel=\"Nächste Seite\"\nfirstPageAriaLabel=\"Erste Seite\"\nlastPageAriaLabel=\"Letzte Seite\""
  }
];

function snippet(code) {
  const extra = code ? code.split("\n").map((line) => `  ${line}\n`).join("") : "";
  return `<Pagination\n${extra}  activePage={activePage}\n  itemsCountPerPage={${PER_PAGE}}\n  totalItemsCount={${TOTAL_COUNT}}\n  itemClass="page-item"\n  linkClass="page-link"\n  onChange={setActivePage}\n/>`;
}

export default function App() {
  const [activePage, setActivePage] = useState(1);

  return (
    <main className="app">
      <h1 className="h3 my-4">react-js-pagination</h1>
      <p className="text-body-secondary">Active page: {activePage}</p>
      {DEMOS.map((demo) => (
        <section key={demo.id} id={demo.id} className="card mb-4">
          <div className="card-header">
            <a href={`#${demo.id}`} className="h6 mb-0 text-decoration-none">{demo.title}</a>
          </div>
          <div className="card-body">
            <pre className="bg-body-tertiary p-3 rounded"><code>{snippet(demo.code)}</code></pre>
            <Pagination
              {...BOOTSTRAP}
              {...demo.props}
              innerClass="pagination justify-content-center mb-0"
              activePage={activePage}
              itemsCountPerPage={PER_PAGE}
              totalItemsCount={TOTAL_COUNT}
              onChange={setActivePage}
            />
          </div>
        </section>
      ))}
    </main>
  );
}
