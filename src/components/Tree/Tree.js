import React, { Component } from "react";

import "./tree.css";

import TreeBranch from "./TreeBranch";
import TreeLeave from "./TreeLeave";

class Tree extends Component {
  state = {
    tree: {
      title: "Income",
      elements: [
        {
          id: 1,
          title: "test",
          childs: [
            { id: 12, title: "test", childs: [] },
            {
              id: 123,
              title: "test",
              childs: [
                { id: 1234, title: "test", childs: [] },
                { id: 12345, title: "test", childs: [] },
                { id: 123456, title: "test", childs: [] }
              ]
            },
            { id: 1234567, title: "test", childs: [] }
          ]
        },
        { id: 12345678, title: "test1", childs: [] },
        { id: 1623674, title: "test2", childs: [] },
        { id: 18467975, title: "test3", childs: [] }
      ]
    }
  };

  componentDidMount() {
    // this.setState({ tree: this.props.tree });
  }

  setChild = (data, id) => {
    const elements = addChildToLeaf(id, data, this.state);
    this.setState({ tree: { title: this.state.tree.title, elements: elements } });
  };

  renderElements = elements => {
    return (
      <TreeBranch>
        {elements
          ? elements.map(it => (
            <TreeLeave
              renderElements={this.renderElements}
              leave={it}
              setChild={this.setChild}
              key={Math.random()}
            />
          ))
          : null}
      </TreeBranch>
    );
  };

  render() {
    const {
      tree: { title, elements }
    } = this.state;
    return (
      <div className="tree">
        <h1>{title}</h1>
        {this.renderElements(elements)}
      </div>
    );
  }
}

export default Tree;

function addChildToLeaf(id, data, state) {
  const newStateElements = [...state.tree.elements];
  let result = null;
  for (let i = 0; i < newStateElements.length; i++) {
    result = findIt(newStateElements[i], id);
    if (result) {
      result.childs.push(data);
      break;
    }
  }
  return newStateElements;
}

function findIt(leaf, id) {
  let result;
  if (leaf.id === id) return leaf;
  if (leaf.childs.length) {
    for (let i = 0; i < leaf.childs.length; i++) {
      result = findIt(leaf.childs[i], id);
      if (result) return result;
    }
  }
  return null;
}
