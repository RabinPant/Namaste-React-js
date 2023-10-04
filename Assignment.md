Theory Assignment: Chapter - 01 Inception (24/12/2022)
1. What is Emmet ?
Emmet is a plug-in for many popular text editors which greatly improves HTML & CSS. Emmet short hand expression can be used to generate HTML markup and css. Most useful emmet abbreviations are :
HTML
1.	html:5 - generates html5 boilerplate
2.	ui>li - nested elements
3.	h1.#heading.container.con - create h1 element with id heading and classes container and con
4.	div[data-name=rabin] - Custom attribute
5.	header+div+footer - generate siblings
CSS
1.	m10-10-10-10 - Margin on all sides margin: 10px 10px 10px 10px;
2. Difference between library and framework ?
Library - collection of pre-defined helper functions, objects, classes, modules that can be used in code to boost the development. By using a library, you can control the flow of the application and call the library. Eg: React, JQuery, Lodash
Framework - Foundation upon which applications are built. In contrast, when you use a framework, the control is inverted, i.e., the framework controls the flow and calls your code. Eg: Node JS, Angular, Spring
3. What is CDN ? Why do we use it ?
A CDN also called a content distribution network, is a group of geographically distributed and interconnected servers. They provide cached internet content from a network location closest to a user to speed up its delivery.
4. Why is React known as React ?
React was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the View in MVC, this means that as the user clicks around and changes the app's data, the view should react or change with those user events.
5. What is cross-origin in script tag ?
The crossorigin attribute provides support for CORS , defining how the element handles cross-origin requests. CORS stands for Cross-Origin Resource Sharing. If cross-origin is set to "user-credential", then user authentication is required to access the file.
6. What is difference between React and ReactDOM?
React library contains functionality utilised in web and mobile apps (react native). ReactDOM library contains functionality utilised in web browser. It contains DOM manipulation utilities.
7.What is the difference between react.production.js and react.development.js ?
react.production.js - production code of react library that is minified and production ready. react.development.js - More readable and developer friendly react library code that can be used to debug.
8.What is async and defer - check Akshay Saini's Youtube channel ?
Without async/defer : Browser stops the html parsing once script tag is encountered. It resumes parsing only after script is fetched and executed.
Async : Html parsing is done in parallel while scripts are being fetched from the network and executed. Once the script is done with execution, html parsing is resumed. This can be used for external scripts like google analytics. It is better to avoid async for scripts that are dependent on other scripts since we dont know in which order script will be executed.
Defer : Similar to async, Html parsing is done in parallel while scripts are being fetched from the network. But scripts are executed only after the html parsing is done.

===========================================================================================

Theory Assignment: Chapter - 03 Laying the foundation (01/01/2023)
1. What is JSX?
JSX is neither a string nor a html tag but a syntactic sugar for the React object. It is a html-like syntax inside js code for creating react elements. By using JSX, instead of writting markup (html) and logic(js) separately, the separation of concerns (SoC) is emphasized based on loosely coupled units called 'Components' which contains both.

Broswer does not understand JSX and a transpiler/compiler is required to convert this to browser understandable js code. Eg: Babel

JSX ------> React.createElement() -----> React element ----> Object to be rendered in the DOM

2. Superpowers of JSX
JSX as variables : markup (html-like) syntax can be set in a variable. This creates a react element (object).

javascript expressions in JSX : JSX supports all js expressions by wrapping them in {}

Attributes in JSX : We can pass all the html attributes inside jsx tag (attributes must be CamelCased). Even, custom attributes can be created, but it must not use CamelCase.

Props in JSX : The values of each attribute can be passed as properties (props) to a react element. This is my favourite superpower of jsx, since it can handle dynamic data to create react elements.

3. Role of type attribute in script tag ? What options can I use there ?
type attribute of the <script> tag indicates the type of script. Until HTML 4, type is a required attribute. The value of type can be any of the following :

<script type="" src="app.js"></script>
In HTML5, type attribute is not mandatory. If type attribute is not present(default), or an empty string (type="") or javascript MIME type (text/javascript or application/ecmascript), it is treated as classic "javascript" file.

<script type="module" src="app.js"></script>
If the type attribute is set module, then the code in that js file is treated as module.

<script type="importmap" src="app.js"></script>
If the type attribute is set importmap, the body of the element contains importmap ie an JSON object using which the browser can resolve the module specifiers while importing modules.

<script type="{$anyothervalue}" src="app.js"></script>
If the type attribute contains anyother value, then the code is treated as data block and will not be processed by the browser. A valid MIME type other than Javascript MIME type (Eg: image/png or text/css) must be mentioned. All the other attributes for this type will be ignored even the src attribute.

4. { TitleComponent } vs { <TitleComponent /> } vs { <TitleComponent> </TitleComponent> } in JSX
{ TitleComponent } - This value in jsx is considered as jsx expression or variable. If no such variable is present, no output will be shown in the browser. Console throws the following warning

index.js:1 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.

{ <TitleComponent /> } - This value in jsx is meant for rendering a component (i.e) function that return jsx. This is self closing tag.

{ <TitleComponent> </TitleComponent> } - This is same as { <TitleComponent /> } if there are no child inside TitleComponent. If there are children, then those values come inside { <TitleComponent>}  and </TitleComponent> }.

chapter-
