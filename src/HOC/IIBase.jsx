import React, { Component } from 'react'

export default class IIBase extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    console.log(`IIBase has mounted`)
  }

  render() {
    return (<div>
      <span>input</span>
      <input type="text" value={this.props.name}/>
    </div>)
  }
}