import React from 'react'

class Parent extends React.Component {
  componentDidMount() {
    // 可以获取到 child ref
    console.log(this.childRef);
  }
  render() {
    const { children } = this.props;
    return React.cloneElement(children, {
      ref: (child) => {
        this.childRef = child;
        children.ref && children.ref(child);
      }
    });
  }
}

export default class App extends React.Component {
  componentDidMount() {
    // 可以获取到 child ref
    console.log(this.child);
  }
  render() {
    return (
      <Parent>
        <div ref={(child) => {
          this.child = child;
        }} />
      </Parent>
    );
  }
}