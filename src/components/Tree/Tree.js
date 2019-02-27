import React, { Component } from "react";

import "./tree.css";

import TreeBranch from "./TreeBranch";
import TreeLeave from "./TreeLeave";

class Tree extends Component {
  state = {
    tree: {
      name: "Income",
      elements: [
        {
          id: 1,
          name: "test",
          childs: [
            { id: 12, name: "test", childs: [] },
            {
              id: 123,
              name: "test",
              childs: [
                { id: 1234, name: "test", childs: [] },
                { id: 12345, name: "test", childs: [] },
                { id: 123456, name: "test", childs: [] }
              ]
            },
            { id: 1234567, name: "test", childs: [] }
          ]
        },
        { id: 12345678, name: "test1", childs: [] },
        { id: 1623674, name: "test2", childs: [] },
        { id: 18467975, name: "test3", childs: [] }
      ]
    }
  };

  componentDidMount() {
    // this.setState({ tree: this.props.tree });
  }

  setChild = (data, id) => {
    const elements = addChildToLeaf(id, data, this.state);
    this.setState({ tree: { name: this.state.tree.name, elements: elements } });
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
      tree: { name, elements }
    } = this.state;
    return (
      <div className="tree">
        <h1>{name}</h1>
        {this.renderElements(elements)}
      </div>
    );
  }
}

export default Tree;

function addChildToLeaf(id, data, state) {

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


