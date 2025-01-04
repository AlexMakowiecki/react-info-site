import "../styles/Main.css"
import reactLogo from "../assets/react.svg"
export default function Main() {
  return (
    <main>
      <div className="inner-wrapper">
        <h1>Tips for using Vite while learning React</h1>
        <h2> <a href="https://v2.scrimba.com/learn-react-c0e/~0p">Run React locally with Vite</a> Lesson</h2>
        <ul>
          <li> If you can't navigate through the options shown in the console while installing Vite, try using a console inside Visual Studio Code. </li>
          <li> You can delete the "public" folder and the content of the "src" folder if you want. The .gitignore and readme.md are optional too, but helpful if you will use git. </li>
        </ul>
        <h2> <a href="https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~0qq">Project Setup</a> Lesson </h2>
        <ul>
          <li> The index.js and style.css files can be placed inside the "src" folder. </li>
          <li> You can't move index.html without changing Vite's default configuration. </li>
          <li> All files that use React syntax must end with .jsx. You can't use React syntax if you don't. </li>
          <li> On the other hand, you don't need to import React in each .jsx file anymore. </li>
          <li> You can create the "components" folder inside the "src" folder and put the React components there. </li>
          <li> Remember that now you have to use ReactDOM.createRoot() to render. </li>
        </ul>
      </div>
      <div className="background">
        <img src={reactLogo} />
      </div>
    </main>
  )
}

