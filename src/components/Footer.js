import React, { Component } from "react";

class Footer extends Component {
  render() {
    // 可以不把setVisibilityFilter改成setFilter，重命名一下setFilter
    const { filter, setFilter: setVisibilityFilter } = this.props;
    return (
      <div>
        <span>show</span>
        <button
          onClick={() => {
            setVisibilityFilter("all");
          }}
          disabled={filter === "all"}
        >
          All
        </button>
        <button
          onClick={() => {
            setVisibilityFilter("active");
          }}
          disabled={filter === "active"}
        >
          Active
        </button>
        <button
          onClick={() => {
            setVisibilityFilter("completed");
          }}
          disabled={filter === "completed"}
        >
          Completed
        </button>
      </div>
    );
  }
}

export default Footer;
