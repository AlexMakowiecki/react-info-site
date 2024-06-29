# React Info Site
## Introduction
It's a list of tips that may help if you are doing the React course from Scrimba while using Vite for your local Projects.
## Concepts learned in the course 
 - ### React
    - #### Theory
      - **What is a library?** It's reusable code that doesn't ask you to adapt your code around it. You decide how and when to use it.
      - **What is a framework?** It's code width its own architecture, that needs you to follow a pattern to use it.
      - React is composable. **Why is it composable?** Because you can different components to handle different sections of your HTML.
      - React is declarative. **Why is it declarative?** Because you don't need to tell how to create these components, you only need to tell what you want to do with them.  
      - **What is JSX?** A syntax that lets you create React objects representing HTML elements as if you were writing HTML.
    - #### Practice
      - Before anything, you need to **import React** to use the JSX syntax, and **import ReactDOM** to render your React components.
      - <details>
          <summary><b>ReactDOM.render</b> to render a react component inside the HTML element passed as an argument.</summary>
     
          ```jsx
          // Before React 18
          ReactDOM.render( reactComponent, domElement)
          // After React 18
          const root = reactDOM.createRoot( domElement )
          root.render( reactComponent )
          ```
        </details>
      - <details>
          <summary>To create a React component, you use JSX syntax, and all the JSX content has to be inside one container.</summary>
          
          ```jsx
          // In this case, the "div" is that one container
          const reactComponent = <div> <p>Hello <span>World!</span></p> </div>
          ```
        </details>
      - <details>
          <summary>The correct way to create a React Component is using a function that has the name of that component in Pascal Case.  That function will return the component.</summary>
          
          ```jsx
          function Main(){
              return (<main> <h1> Hello world! </h1> </main>)
          }
          ```
        </details>
      - <details>
          <summary>The correct way to use a React Component is to call the function that creates it, using JSX Syntax.</summary>
          
          ```Javascript
          function Main(){
              return (<main> <h1> Hello world! </h1> </main>)
          }
          console.log( <Main /> )
          ```
        </details>
      - You can create empty tags (<></>) and use them as containers. They won't be rendered.
      - <details>
          <summary>To give an element a class you have to use className as an attribute.</summary>
          
          ```Javascript
          function Main(){
              return (<main className="my-main"> <h1> Hello world! </h1> </main>)
          }
          ```
        </details>
      - <details>
          <summary>The recommended way to store the React components is to create a modular javascript file for each one of them. Main.js, Header.js, etc.</summary>
          
          ```Javascript
          // File named Main.js
          export default function Main(){
              return (<main className="my-main"> <h1> Hello world! </h1> </main>)
          }
          // index.js
          import Main from "./Main.js"
          console.log( <Main />)
          ```
        </details>
  - ### Vite/Project Organization
    - All the Javascript, CSS, and static files have to be stored inside the "src" folder.
    - The Javascript files that use React syntax have to end with .jsx instead of .js.
    - You can make a CSS file for each React Component, but you need to import that file inside the React Component to use it.
    - <details>
          <summary>You can make a CSS file for each React Component, but you need to import that file inside the React Component</summary>
          
         ```JSX
          // File named Main.jsx
          import "./css/Main.css"
          export default function Main(){
           return (<main className="example"></main>)
          }
         ```
        </details>
     - <details>
          <summary>To use images you also have to import them first</summary>
          
         ```JSX
          // File named Main.jsx
          import mainImg from "./assets/main-img.png"
          export default function Main(){
           return (<img src={ mainImg }></img>)
          }
         ```
        </details>    
## Preview
![react-info-site](https://github.com/AlexMakowiecki/react-info-site/assets/122258496/5e76b814-ca11-4d98-8271-54feb9c180b2)


## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!
