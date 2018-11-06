import React from 'react'
import { useEffect, useState, useContext } from 'react'
import Row from './functions/Row'
import { ThemeContext, LocalContext } from './Context'

export default function App(props) {
  const [name, setName] = useState('slm')
  const [nickName, setNickName] = useState('LeeeeeeM')
  const theme = useContext(ThemeContext)
  const local = useContext(LocalContext)

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleNickNameChange(e) {
    setNickName(e.target.value)
  }

  return (
    <section className={theme.class2}>
      <Row label="Name">
        <input
          value={name}
          onChange={handleNameChange}
        />
      </Row>
      <Row label="nickName">
        <input
          value={nickName}
          onChange={handleNickNameChange}
        />
      </Row>
      <Row label="Language">
        <div className={local.class}>{local.us}</div>
      </Row>
    </section>
  )
}