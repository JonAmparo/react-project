import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import Header from "./Header";
import profile from "../assets/profile.png";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    console.log("hi");

    return (
      <div>
        <Header />
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Jonathan.</p>
        <Title />
        <p>I'm always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Montreal and I code every day.</p>
            <p>
              My favorite language is Javascript, and I think React.js is
              awesome.
            </p>
            <p>Besides coding, I also love gaming and technology.</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
