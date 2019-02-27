import React from "react";

import "./SearchItem.css";

class SearchItem extends React.Component {
  dragStart = e => {
    const { data } = this.props;
    data.childs = [];
    e.dataTransfer.setData("data", JSON.stringify(data));
    return true;
  };

  render() {
    const {
      data: { name }
    } = this.props;
    return (
      <span className="search-item" draggable onDragStart={this.dragStart}>
        {name}
      </span>
    );
  }
}

export default SearchItem;
