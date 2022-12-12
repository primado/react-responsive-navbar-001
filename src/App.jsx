import React, { Component, useState } from "react";
import "./App.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevState) => !prevState);
  };

  return (
    <div className="App">
      <header id>
        <nav>
          <div>
            <ul id="navbar" className={clicked ? "ul active" : "ul"}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
          <button id="mobile" onClick={handleClick}>
            <i
              id="bar"
              className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </button>
        </nav>
      </header>
    </div>
  );
}

// class Navbar extends Component {
//   state = { clicked: false };

//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };

//   render() {
//     return (
//       <div className="App">
//         <header id>
//           <nav>
//             <div>
//               <ul
//                 id="navbar"
//                 className={this.state.clicked ? "ul active" : "ul"}
//               >
//                 <li>
//                   <a href="#">Home</a>
//                 </li>
//                 <li>
//                   <a href="#">Blog</a>
//                 </li>
//                 <li>
//                   <a href="#">Contact</a>
//                 </li>
//                 <li>
//                   <a href="#">About</a>
//                 </li>
//               </ul>
//             </div>
//             <button id="mobile" onClick={this.handleClick}>
//               <i
//                 id="bar"
//                 className={
//                   this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"
//                 }
//               ></i>
//             </button>
//           </nav>
//         </header>
//       </div>
//     );
//   }
// }

export default Navbar;
