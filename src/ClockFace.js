import React, { Component, PropTypes } from 'react'

import clockFace from './media/clock-face.svg'
import handHour from './media/hand-hour.svg'
import handMinute from './media/hand-minute.svg'
import handSecond from './media/hand-second.svg'
import spacer from './media/spacer.svg'

class ClockFace extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date)
  }

  render() {
    const { date } = this.props
    const hours = (date.getHours() % 12) * 30
    const mintutes = date.getMinutes() * 6
    const seconds = date.getSeconds() * 6
    return (
      <div>
        <img src={clockFace}
             style={{ position: 'absolute' }}
             role='presentation'
        />
        <img src={handHour}
             style={{ position: 'absolute', transform: `rotate(${hours}deg)` }}
             role='presentation'
        />
        <img src={handMinute}
             style={{ position: 'absolute', transform: `rotate(${mintutes}deg)` }}
             role='presentation'
        />
        <img src={handSecond}
             style={{ position: 'absolute', transform: `rotate(${seconds}deg)` }}
             role='presentation'
        />
        <img src={spacer}
             role='presentation'
        />
      </div>
    )
  }

}

export default ClockFace
