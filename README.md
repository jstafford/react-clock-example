React Clock Example
===================

Look at the running example at [https://jstafford.github.io/react-clock-example](https://jstafford.github.io/react-clock-example)

The artwork for the clock face was derived from [Swiss railway
clock.svg](https://commons.wikimedia.org/wiki/File:Swiss_railway_clock.svg) by
Wikimedia user [Jahoe](https://commons.wikimedia.org/wiki/User:Jahoe). It is
licensed under the [Creative Commons Attribution-Share Alike 3.0
Unported](https://creativecommons.org/licenses/by-sa/3.0/deed.en) license.

There are three components to look at here:

1. The App component starts a timer to update the clocks and changes the props
on its child components so that they re-render every second.
2. The Clock component is a very simple component that just displays a textual
version of the current time.
3. The ClockFace component has hour, minute and second hands. Because it is
implemented using scalable vector graphics (SVG), it should look good at any
size and on any pixel density screen.

The clock components do not track the time directly, rather they are driven by
props, which allows for all the benefits of stateless components. For example,
you could have a large array of clocks that all update in sync, or a set of
world clock showing different hours, or perhaps even clocks that run at
different speeds.

This project was bootstrapped with [Create React
App](https://github.com/facebookincubator/create-react-app).
