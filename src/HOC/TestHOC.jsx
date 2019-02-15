import React from 'react'
import HOC, { eHOC } from './HOC'
import Base from './Base'

export default HOC(Base)

// export const EHOC = eHOC(Base)


@eHOC
export class EHOC extends React.Component {
  render() {
    return <input type="text" {...this.props}/>
  }
}
