import React from "react";
import cn from "classnames";
import uniqueId from "lodash/uniqueId";

// BEGIN (write your solution here)
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: null };
  }
  render() {
    const { images } = this.props;
    const imageClass = cn(["carousel-item", this.state.active ? "active" : ""]);
    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[images].map((id, data) => (
            <div className={cn(imageClass)} key={id}>
              <img alt="" className="d-block w-100" src={data} />
            </div>
          ))}
        </div>
        <button
          onClick={this.slideLeft}
          className="carousel-control-prev"
          data-bs-target="#carousel"
          type="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          onClick={this.slideRight}
          className="carousel-control-next"
          data-bs-target="#carousel"
          type="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
