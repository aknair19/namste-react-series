// import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
// const About = () => {
//   return (
//     <div>
//       <h1>This is About us page</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, vero.
//       </p>
//       <Profile name={"Abhishek function"} />
//       <ProfileClass name={"Abhishek class"} />
//     </div>
//   );
// };

class About2 extends Component {
  constructor(props) {
    super(props);
    console.log("parent-constructor");
  }

  async componentDidMount() {
    console.log("parent-compDidMount");
  }

  render() {
    console.log("parent- render");
    return (
      <div>
        <h1>This is About us page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          vero.
        </p>

        <ProfileClass name={"CHILD1"} />
        <ProfileClass name={"CHILD2"} />
      </div>
    );
  }
}

export default About2;
