import React, { Component } from 'react'

import Clock from './Clock'
import ClockFace from './ClockFace'

class App extends Component {
  constructor( props ) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timeID = setInterval( () => this.handleTimer(), 1000 )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  handleTimer() {
    this.setState( { date : new Date() } )
  }

  render() {
    return (
        <div style={{ backgroundColor: 'steelblue' }}>
          <Clock date={this.state.date} />
          <p></p>
          <ClockFace date={this.state.date} height='256' width='256' />
          <p>&nbsp;</p>
        </div>
    )
  }
}

export default App
