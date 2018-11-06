import React from 'react'
import { useEffect, useState, useContext } from 'react'
import Row from './functions/Row'
import { ThemeContext, LocalContext } from './Context'

export default function App(props) {
  const width = useWindowWidth()
  const theme = useContext(ThemeContext)
  const local = useContext(LocalContext)
  const [ name, nickName ] = useNameChange('slm', 'LeeeeeeM')
  return (
    <section className={theme.class2}>
      <Row label="Name">
        <input {...name}/>
      </Row>
      <Row label="nickName">
        <input {...nickName}/>
      </Row>
      <Row label="Language">
        <div>{local.us}</div>
      </Row>
      <Row label="Width">
        <div>{width}</div>
      </Row>
    </section>
  )
}


function useWindowWidth () {
  const [ width, setWidth ] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return width
}

function useNameChange(n, nn) {
  const [ name, setName ] = useState(n)
  const [ nickName, setNickName ] = useState(nn)
  useEffect(() => {
    document.title = name + '   ' + nickName
  })

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleNickNameChange(e) {
    setNickName(e.target.value)
  }

  return [{
    value: name,
    onChange: handleNameChange
  }, {
    value: nickName,
    onChange: handleNickNameChange
  }]
}