import xs from 'xstream'
import isolate from '@cycle/isolate'
import {div, h1, h2, p} from '@cycle/dom'

function Login (sources) {
  return {
    DOM: xs.of(
      div({}, [
        h1('.login', 'Login page no reload habra'),
        h2('.lo', 'coherence'),
        p('.ilo', 'vera esta n casa and reload molo 2')
      ])
    )
  }
}

export default sources => isolate(Login)(sources)
