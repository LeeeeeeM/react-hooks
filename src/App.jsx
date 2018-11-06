import React from 'react'
import Row from './components/Row'
import { ThemeContext, LocalContext } from './Context'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'slm',
      nickName: 'LeeeeeeM',
      width: window.innerWidth
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleNickNameChange = this.handleNickNameChange.bind(this)
    this.handleSize = this.handleSize.bind(this)
  }

  componentDidMount() {
    document.title = this.state.name + '   ' + this.state.nickName
    window.addEventListener('resize', this.handleSize)
  }

  handleSize() {
    this.setState({
      width: window.innerWidth
    })
  }

  componentDidUpdate() {
    document.title = this.state.name + '    ' + this.state.nickName
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleSize)
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
                      <div>{local.china}</div>
                    </Row>
                  )}
                </LocalContext.Consumer>
                <Row label="Width">
                  {this.state.width}
                </Row>
              </section>
            )
          }
        </ThemeContext.Consumer>
      </section>
    )
  }
}