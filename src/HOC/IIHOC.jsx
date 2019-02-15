import React from 'react'

export default function iiHOC (WrappedComponent) {
  const Enhancer = class extends WrappedComponent {
    constructor(props) {
      super(props)
      this.state = {
        name: 'slm'
      }
    }

    componentWillReceiveProps(nextProps) {
      // console.log(this.props, nextProps)
    }

    render() {
      // if (!this.props.loading) {
      //   return super.render()
      // }
      // return (<div>loading...</div>)

      if (this.props.loading) {
        return (<div>loading...</div>)
      }

      const elementsTree = super.render()

      const props = Object.assign({}, elementsTree.props, {
        className: 'edit-ii-props'
      })

      const newElementsTree = React.cloneElement(elementsTree, props)

      // 如果要修改children，使用map(() => { React.cloneElemnt .... }) react不允许直接修改，必须clone。
      // https://reactjs.org/docs/react-api.html#cloneelement
      return newElementsTree
    }
  }

  return Enhancer
}