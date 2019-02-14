import React from 'react'

export default function({isLoading, isDelayed, data}) {
  if (isDelayed) {
    return (<div>Please wait a little more</div>)
  }
  if (isLoading) {
    return (<div>Loading...</div>)
  }
  return (<div>{data}</div>)
}