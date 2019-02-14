import React from "react";

class TreeLeave extends React.Component {
  dragOver = e => {
    e.target.classList.add("is-item-over");
    e.preventDefault();
  };
  dragLeave = e => {
    e.target.classList.remove("is-item-over");
  };
  dragDrop = e => {
    const { leave } = this.props;
    let data = e.dataTransfer.getData("data");
    this.props.setChild(JSON.parse(data), leave.id);
    e.target.classList.remove("is-item-over");
    e.dataTransfer.clearData("data");
    e.stopPropagation();
    e.preventDefault();
  };

  render() {
    const {
      leave: { title, childs },
      renderElements
    } = this.props;
    console.log(childs);
    return (
      <div
        className="tree-leave"
        onDragOver={this.dragOver}
        onDragLeave={this.dragLeave}
        onDrop={this.dragDrop}
      >
        <span>{title}</span>
        {childs.length ? renderElements(childs) : null}
      </div>
    );
  }
}

export default TreeLeave;
