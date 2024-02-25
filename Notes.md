## Difference between `<main>` and `<section>`

1. `<main>` Element:

The `<main>` element represents the main content of the document. It's intended to encapsulate the primary content of the page.
There should typically be only one `<main>` element in a document, and it should not be nested within other structural elements like `<header>`, `<footer>`, or `<article>`.
The `<main>` element helps assistive technologies and search engines to identify the primary content of the page.
It's a way of marking up the most important content, making it easier for browsers and screen readers to navigate.

```
function App (){
  return (
  <main>
    <section className="container">
      <h3>0 Birthdays Today</h3>
    </section>
  </main>
  );
};
```

While `<main>` is specifically intended to represent the main content area of the document, you can use other elements like `<div>` with appropriate class names or custom elements as needed.

```
function App (){
  return (
    <div className="page">
      <section className="container">
        <h3>0 Birthdays Today</h3>
      </section>
    </div>
  );
}
```

2. `<section>` Element:

The `<section>` element is used to group together related content within a document.
It's a generic container for holding thematic grouping of content, and it doesn't carry the same semantic meaning as `<main>`.
`<section>` is often used to divide the content of a page into sections, such as chapters, headers, footers, or any other thematic grouping.
Unlike `<main>`, `<section>` can be nested within other `<section>` elements, and it's used to create hierarchical structures within the document.
