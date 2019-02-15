import React, { Component } from 'react'

export default class Base extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    console.log(this.baseInputRef)
  }

  getRef() {
    return this.baseInputRef
  }

  render() {
    return (<div>
      <span>this is Base Component</span>
      <input type="text" {...this.props.name} ref={ele => {
        this.baseInputRef = ele
      }} />
    </div>)
  }
}