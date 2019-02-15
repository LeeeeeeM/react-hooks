import React from 'react'

export default function HOC(WrappedComponent) {
  const EnhancedComponent = class extends WrappedComponent {

    getWrappedInstance(wrappedComponentInstance) {
      this.enhancedInputRef = wrappedComponentInstance.getRef()
    }

    componentDidMount() {
      console.log(this.enhancedInputRef)
    }

    render() {
      return <WrappedComponent {...this.props} ref={this.getWrappedInstance.bind(this)} />
    }
  }

  return EnhancedComponent
}

export function eHOC(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name: '2'
      }

      this.onNameChange = this.onNameChange.bind(this)
    }
    onNameChange(event) {
      console.log(event.target.value)
      this.setState({
        name: event.target.value
      })
    }
    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onNameChange
        }
      }
      return <WrappedComponent {...this.props} {...newProps.name} />
    }
  }
}