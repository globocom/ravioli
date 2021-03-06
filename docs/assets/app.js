'use strict';

var Styleguide = React.createClass({
  displayName: 'Styleguide',

  render: function render() {
    return React.createElement(
      'main',
      null,
      React.createElement(
        'section',
        null,
        React.createElement(
          'h3',
          null,
          'Text input'
        ),
        React.createElement(Ravioli.Text, null),
        React.createElement(Ravioli.Text, { required: true, counter: 'subtract', counterMax: 10 })
      ),
      React.createElement(
        'section',
        null,
        React.createElement(
          'h3',
          null,
          'Textarea'
        ),
        React.createElement(Ravioli.Textarea, null)
      ),
      React.createElement(
        'section',
        null,
        React.createElement(
          'h3',
          null,
          'Number input'
        ),
        React.createElement(Ravioli.Number, null),
        React.createElement(Ravioli.Number, { min: 0, max: 5, placeholder: '0 to 5' }),
        React.createElement(Ravioli.Number, { float: true, placeholder: '#.#' })
      ),
      React.createElement(
        'section',
        null,
        React.createElement(
          'h3',
          null,
          'Select'
        ),
        React.createElement(Ravioli.Select, {
          options: [{ value: 123, label: 'dasdsadsadasdsa' }, { value: 'sswws', label: 1234567890 }, 'sffffffff', 1234] }),
        React.createElement(Ravioli.Select, {
          placeholder: 'Select something (or not)',
          empty: 'empty label',
          options: [1, 2, 3] })
      ),
      React.createElement(
        'section',
        null,
        React.createElement(
          'h3',
          null,
          'Checkbox'
        ),
        React.createElement(Ravioli.Check, { label: 'Check me' })
      ),
      React.createElement(
        'section',
        null,
        React.createElement(
          'h3',
          null,
          'Button'
        ),
        React.createElement(Ravioli.Button, { label: 'Default' }),
        React.createElement(Ravioli.Button, { label: 'With icon', icon: 'arrow-right' }),
        React.createElement(Ravioli.Button, { label: 'Action', classes: 'action' }),
        React.createElement(Ravioli.Button, { label: 'Highlight', classes: 'highlight' }),
        React.createElement(Ravioli.Button, { label: 'Lowlight', classes: 'lowlight' }),
        React.createElement(Ravioli.Button, { label: 'Fit', classes: 'fit' }),
        React.createElement(Ravioli.Button, { label: 'Link', classes: 'fit', link: 'http://google.com' })
      )
    );
  }
});

ReactDOM.render(React.createElement(Styleguide, null), document.getElementById('main'));
