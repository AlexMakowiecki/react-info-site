import reactLogo from "../assets/react.svg"
import "../styles/Header.css"

export default function Header(){
  return (
      <header>
        <div className="inner-wrapper">
          <div className="logo-container">
            <img src={reactLogo}/>
            <span>ReactFacts</span>
          </div>
          <h2>React Course - Project 1</h2>
        </div>
      </header>
  )
}