import React from 'react'
import Row from './components/Row'
import { ThemeContext, LocalContext } from './Context'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'slm',
      nickName: 'LeeeeeeM'
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleNickNameChange = this.handleNickNameChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleNickNameChange(e) {
    this.setState({
      nickName: e.target.value
    })
  }

  render() {
    return (
      <section>
        <ThemeContext.Consumer>
          {
            theme => (
              <section className={theme.class1}>
                <Row label="Name">
                  <input value={this.state.name} onChange={this.handleNameChange} />
                </Row>
                <Row label="NickName">
                  <input value={this.state.nickName} onChange={this.handleNickNameChange} />
                </Row>
                <LocalContext.Consumer>
                  {local => (
                    <Row label="Language">
                      <div className={local.class}>{local.china}</div>
                    </Row>
                  )}
                </LocalContext.Consumer>
              </section>
            )
          }
        </ThemeContext.Consumer>
      </section>
    )
  }
}