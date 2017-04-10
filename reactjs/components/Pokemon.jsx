import React from 'react'

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'http://cdn.bulbagarden.net/upload/e/ec/001MS.png',
      owned: true,
    }
  }

  updateOwnership() {
    this.setState({owned: this.state.owned ^= true})
  }

  render() {
    return (
      <img className={this.state.owned ? 'owned' : 'not-owned'}
           style={{width: 40, height: 40}}
           src={this.state.url}
           onClick={() => this.updateOwnership()}>
      </img>
)}
}
