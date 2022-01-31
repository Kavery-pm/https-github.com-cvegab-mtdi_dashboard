import React, { Component } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Demo from "./Demo";
import Tour from "reactour";
import "./styles.css";

class useTour extends Component {
  constructor() {
    super();
    this.state = {
      isTourOpen: false,
      isShowingMore: false
    };
  }

  disableBody = target => disableBodyScroll(target);
  enableBody = target => enableBodyScroll(target);

  toggleShowMore = () => {
    this.setState(prevState => ({
      isShowingMore: !prevState.isShowingMore
    }));
  };

  closeTour = () => {
    this.setState({ isTourOpen: false });
  };

  openTour = () => {
    this.setState({ isTourOpen: true });
  };

  render() {
    const { isTourOpen, isShowingMore } = this.state;
    const accentColor = "#5cb7b7";
    return (
      <div>
        <Demo
          openTour={this.openTour}
          toggleShowMore={this.toggleShowMore}
          isShowingMore={isShowingMore}
        />
        <Tour
          onRequestClose={this.closeTour}
          steps={tourConfig}
          isOpen={isTourOpen}
          
          rounded={5}
          accentColor={accentColor}
          onAfterOpen={this.disableBody}
          onBeforeClose={this.enableBody}
        />
      </div>
    );
  }
}

const tourConfig = [
  {
    selector: '[data-tut="reactour__iso"]',
    content: `Ok, let's start with the name of the Tour that is about to begin.`
  },
  {
    selector: '[data-tut="reactour__logo"]',
    content: `And this is our cool bus...`
  },
  {
    selector: '[data-tut="reactour__copy"]',
    content: `Keep in mind that you could try and test everithing during the Tour. 
      For example, try selecting the highlighted text…`
  },
  {
    selector: '[data-tut="reactour__style"]',
    content: `Keep in mind that you could try and test everithing during the Tour. 
    For example, try selecting the highlighted text…`,
    
    style: {
      backgroundColor: "black",
      color: "white"
    }
  },
  {
    selector: '[data-tut="reactour__goTo"]',
    content: ({ goTo }) => (
      <div>
        If you wanna go anywhere, skipping places, it is absolutely possible.
        <br /> "Oh, I forgot something inside the bus…"{" "}
        <button
          style={{
            border: "1px solid #f7f7f7",
            background: "none",
            padding: ".3em .7em",
            fontSize: "inherit",
            display: "block",
            cursor: "pointer",
            margin: "1em auto"
          }}
          onClick={() => goTo(1)}
        >
          Please go back to{" "}
          <span aria-label="bus" role="img">
            🚌
          </span>
        </button>
      </div>
    )
  },
  {
    selector: '[data-tut="reactour__position"]',
    content: "Also when places are pretty hidden…",
    position: "left"
  },
  {
    selector: '[data-tut="reactour__scroll"]',
    content:
      "Probably you noted that the Tour scrolled directly to the desired place, and you could control the time also…"
  },
  {
    selector: '[data-tut="reactour__scroll--hidden"]',
    content: "Also when places are pretty hidden…"
  },
  {
    selector: '[data-tut="reactour__action"]',
    content: "hola"
  },
  {
    selector: '[data-tut="reactour__state"]',
    content:
      "And the Tour could be observing changes to update the view, try clicking the button…",
    observe: '[data-tut="reactour__state--observe"]'
  }
];

export default useTour;
