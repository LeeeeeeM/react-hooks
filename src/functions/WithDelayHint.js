import {
  useRef, useEffect, useState
} from 'react'

export default (loading, delay) => {
  const [delayed, setDelayed] = useState(false)

  useEffect(() => {
    const timer = loading ? setTimeout(() => {
      setDelayed(true)
    }, delay) : null
    return () => {
      clearTimeout(timer)
    }
  }, [loading])

  return delayed
}