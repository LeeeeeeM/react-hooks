import React from 'react'
import WithDelayHint from '../functions/WithDelayHint'
import PureDisplay from '../components/PureDisplay'

export default props => {
  const isDelayed = WithDelayHint(props.isLoading, 2000)
  return <PureDisplay {...props} isDelayed={isDelayed} />
}