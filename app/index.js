import {run} from '@cycle/xstream-run';
import {div, label, input, hr, h1, makeDOMDriver} from '@cycle/dom';

function main(sources) {
  const sinks = {
    DOM: sources.DOM.select('.myinput').events('input')
      .map(ev => ev.target.value)
      .startWith('')
      .map(name =>
        div('.form-group', [
          label('Name:'),
          input('.myinput .form-control', {attrs: {type: 'text'}}),
          hr(),
          h1(`Hola  ${name}`)
        ])
      )
  };
  return sinks;
}

run(main, { DOM: makeDOMDriver('#app-container') });
