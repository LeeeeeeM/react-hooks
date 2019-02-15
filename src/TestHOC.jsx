import React from 'react'
import HOC, { eHOC } from './components/HOC'
import Base from './components/Base'

export default HOC(Base)

// export const EHOC = eHOC(Base)


@eHOC
export class EHOC extends React.Component {
  render() {
    return <input type="text" {...this.props}/>
  }
}
