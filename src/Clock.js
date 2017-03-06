import React, { Component, PropTypes } from 'react'

class Clock extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date)
  }

  render() {
    const { date } = this.props
    return (
        <p>{date.toLocaleTimeString()}</p>
    )
  }
}

export default Clock
