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

## UseEffect

useEffect() is a hook in React that allows you to perform side effects in function components. Side effects can include data fetching, subscriptions, or manually changing the DOM in React components.

The useEffect() hook takes two arguments: a function and an optional array of dependencies. The function passed to useEffect() will run after every render by default. If you provide a second argument, which is an array of dependencies, the effect will only re-run if one of the dependencies has changed since the last render.

```
const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    console.log(tours);
};

useEffect(() => {
    fetchTours();
}, []);
```

1. const fetchTours = async () => {: This line declares an asynchronous function named fetchTours.

2. setLoading(true);: This line invokes a function named setLoading with the argument true. Presumably, setLoading is a state updater function that updates a state variable responsible for indicating whether data is being loaded.

3. const response = await fetch(url);: This line makes an asynchronous HTTP request to the url provided and assigns the response to the variable response. The await keyword pauses the execution of the function until the fetch operation is complete and the response is received.

4. const tours = await response.json();: This line extracts the JSON content from the response and assigns it to the variable tours.

5. console.log(tours);: This line logs the tours data to the console for debugging purposes.

6. useEffect(() => {: This line starts the declaration of a useEffect hook.

7. fetchTours();: This line calls the fetchTours function defined above. It's within the useEffect hook, so it will be called after the component renders.

8. }, []);: This line specifies an empty dependency array [] as the second argument to useEffect. This means that the effect will only run once after the component mounts, because there are no dependencies. This is a common pattern for performing operations that should only happen once after the component mounts, such as fetching data.

### Asynchronous function

An asynchronous function is a function that operates asynchronously, meaning it doesn't necessarily execute in sequence with the rest of the program. Instead, it allows other code to run while it carries out its task, which may involve waiting for some external operation to complete, such as a network request or a file I/O operation.

In JavaScript, you can declare an asynchronous function using the async keyword before the function declaration. This keyword indicates that the function will operate asynchronously and may contain await expressions, which pause the execution of the function until a promise is resolved or rejected.

### fetch

It is a built-in web API provided by modern web browsers for making HTTP requests asynchronously. fetch allows you to fetch resources (such as JSON data, images, etc.) from a network, similar to XMLHttpRequest (XHR).

You can use the fetch API in any JavaScript environment that supports it, including React applications, to communicate with servers or APIs and fetch data.

### API

API stands for Application Programming Interface. It's a set of rules, protocols, and tools that allows different software applications to communicate with each other. APIs define the methods and data formats that applications can use to request and exchange information.

In the context of web development:

Web APIs: These are interfaces exposed by web servers to allow interaction with their services. For example, the Twitter API allows developers to retrieve tweets or post new ones programmatically.

JavaScript APIs: These are built into the web browser and provide functionality to JavaScript code running in the browser environment. Examples include the Fetch API for making HTTP requests, the DOM API for manipulating HTML and XML documents, and the Web Audio API for working with audio.

### HTTP

An HTTP (Hypertext Transfer Protocol) request is a message sent by a client (usually a web browser) to a server to request a specific resource or perform a certain action. HTTP is the protocol used for communication on the World Wide Web.

HTTP requests typically consist of:

Request Method: The method indicates the action the client wants to perform. Common methods include:

GET: Requests data from a specified resource.
POST: Submits data to be processed to a specified resource.
PUT: Updates a specified resource.
DELETE: Deletes a specified resource.
And others like PATCH, HEAD, OPTIONS, etc.
URL (Uniform Resource Locator): The URL specifies the location of the resource the client wants to interact with.

Headers: Headers provide additional information about the request or the client itself. They can include information such as the type of data the client can accept, the type of encoding used, authentication credentials, and more.

Body: Some requests, like POST and PUT, may include a body which contains data to be sent to the server. For example, when submitting a form, the form data is usually included in the body of a POST request.

When the server receives an HTTP request, it processes the request and sends back an HTTP response, which typically includes a status code indicating whether the request was successful or encountered an error, along with any data or content requested by the client.

### JSON

JSON (JavaScript Object Notation) is a lightweight, text-based format that is easy for humans to read and write and easy for machines to parse and generate. It is commonly used to represent structured data, like objects and arrays. JSON is natively supported in JavaScript, making it straightforward to convert JSON data into JavaScript objects and arrays. This allows us to easily manipulate and use the data in our application. Reading and parsing the response body as JSON is necessary to convert the raw response into a usable JavaScript object, enabling to work with the structured data returned by the server.

## Usage of Props

Props are used to pass data from the parent component (App) to the child component

### Parent Component: App
  1. State Initialization:
```
const [jobs, setJobs] = useState(items);
```
jobs: This state holds an array of job objects, initialized with items imported from a data file.

  2. Rendering Jobs:
```
{jobs.map((job) => {
  return <SingleJob key={job.id} {...job} />;
})}
```
jobs.map iterates over the jobs array.
For each job object, it creates a SingleJob component.
The key attribute is used by React to keep track of elements, especially when they change dynamically.
{...job} is the spread operator, which spreads the properties of the job object as individual props to the SingleJob component.

### Child Component: SingleJob (named job in the import/export statements)
1. Receiving Props:
```
const job = ({ title, dates, company }) => {
```
The SingleJob component (named job here) receives props. Using destructuring, it directly extracts title, dates, and company from the props object.
2. Rendering Job Details:
```
return (
    <article>
        <h4>{title}</h4>
        <h4>{dates}</h4>
        <h4>{company}</h4>
    </article>
);
```
The SingleJob component uses the received props to render the job details inside an article element.
It creates three h4 elements to display the title, dates, and company of the job.

### How Props Work
1. Data Passing:
In the App component, jobs is an array of job objects. Each job object has properties like id, title, dates, and company.
When creating a SingleJob component, {...job} spreads the job object properties as individual props. For example, if a job object is { id: 1, title: 'Developer', dates: '2021', company: 'XYZ Corp' }, it gets passed to SingleJob as:
```
<SingleJob id={1} title="Developer" dates="2021" company="XYZ Corp" />
```
2. Props Destructuring:
Inside SingleJob, the props object is destructured in the function parameter:
```
const job = ({ title, dates, company }) => {
```
This allows direct access to title, dates, and company without needing to reference props.title, props.dates, and props.company.

3. Rendering with Props:
The SingleJob component uses these destructured props to render the job details within its JSX.







