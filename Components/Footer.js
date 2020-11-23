import React, { Component} from "react";

class Footer extends Component {
  render() {
    return (
      <div
        style={{ position: "absolute", bottom: 0, width: "100%" }}
        className="bg-gray-100"
      >
        <footer className="bg-light text-center">
          <p>Copyrights © 2020 All Rights Reserved by Brijesh Burfal</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
