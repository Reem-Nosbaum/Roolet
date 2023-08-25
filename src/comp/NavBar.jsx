import "../style/App.css";
import "../style/NavBar.css";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
  function hendalHomeButton(e) {
    console.log("press");
  }
  return (
    <div className="nav-bar">
      <h1>Roolet</h1>
      <button className="menu-btn">
        <AiOutlineMenu size={"25px"} />
      </button>
      <button className="home-btn" onClick={hendalHomeButton}>
        <AiOutlineHome size={"25px"} />
      </button>
    </div>
  );
}
