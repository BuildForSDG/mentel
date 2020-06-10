import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

export default class Dashboard extends Component {
    state = {
        isOpen: false,
        activeItem: "1"
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };

    render() {
        return (
            <main><nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>

            </main>
        );
    }
}
