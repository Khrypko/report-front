import React from "react";

import "./SearchItem.css";

class SearchItem extends React.Component {
  dragStart = e => {
    const { data } = this.props;
    e.dataTransfer.setData("data", JSON.stringify(data));
    return true;
  };

  render() {
    const {
      data: { title }
    } = this.props;
    return (
      <span className="search-item" draggable onDragStart={this.dragStart}>
        {title}
      </span>
    );
  }
}

export default SearchItem;
