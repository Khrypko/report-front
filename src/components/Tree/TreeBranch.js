import React from "react";

class TreeBranch extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="tree-branch">{children}</div>;
  }
}

export default TreeBranch;
