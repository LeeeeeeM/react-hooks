import React, { Component } from 'react'
import IIBase from './IIBase'
import IIHOC from './IIHOC'
const HOCBase = IIHOC(IIBase)

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        loading: !this.state.loading
      })
    }, 2000)
  }
  
  render() {
    return (<HOCBase loading={this.state.loading} />)
  }
}