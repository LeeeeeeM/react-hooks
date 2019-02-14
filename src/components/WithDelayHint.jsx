import React, { Component } from 'react'

export default (loadingPropName, delay) => ComponentIn => {
  const ComponentOut = class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isDelayed: false
      }
    }

    tryStartTimer() {
      this.setState({isDelayed: false})
      if (this.props[loadingPropName]) {
        this.timer = setTimeout(() => this.setState({isDelayed: true}), delay)
      }
    }

    componentDidMount() {
      this.tryStartTimer()
    }

    componentWillUnmount() {
      clearTimeout(this.timer)
      this.timer = null
    }

    componentDidUpdate(prevProps) {
      if (this.props[loadingPropName] !== prevProps[loadingPropName]) {
        clearTimeout(this.timer)
        this.tryStartTimer()
      }
    }

    render() {
      const {isDelayed} = this.state
      return <ComponentIn {...this.props} isDelayed={isDelayed}/>
    }

  }

  ComponentOut.displayName = `withDelayHit(${ComponentIn.displayName || ComponentIn.name})`

  return ComponentOut
}