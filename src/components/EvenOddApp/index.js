// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  randomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.randomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    let num
    if (count % 2 === 0) {
      num = 'Even'
    } else {
      num = 'Odd'
    }

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="main-heading">Count {count}</h1>
          <p className="para-heading">Count is {num}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
