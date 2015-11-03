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
        React.createElement(Gnocchi.Text, null)
      ),
      React.createElement(
        'section',
        null,
        React.createElement(
          'h3',
          null,
          'Textarea'
        ),
        React.createElement(Gnocchi.Textarea, null)
      ),
      React.createElement(
        'section',
        null,
        React.createElement(
          'h3',
          null,
          'Number input'
        ),
        React.createElement(Gnocchi.Number, null)
      ),
      React.createElement(
        'section',
        null,
        React.createElement(
          'h3',
          null,
          'Select'
        ),
        React.createElement(Gnocchi.Select, {
          options: [{ value: 123, label: 'dasdsadsadasdsa' }, { value: 'sswws', label: 1234567890 }, 'sffffffff', 1234] }),
        React.createElement(Gnocchi.Select, {
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
        React.createElement(Gnocchi.Check, { label: 'Check me' })
      ),
      React.createElement(
        'section',
        null,
        React.createElement(
          'h3',
          null,
          'Button'
        ),
        React.createElement(Gnocchi.Button, { label: 'Default' }),
        React.createElement(Gnocchi.Button, { label: 'With icon', icon: 'arrow-right' }),
        React.createElement(Gnocchi.Button, { label: 'Action', classes: 'action' }),
        React.createElement(Gnocchi.Button, { label: 'Highlight', classes: 'highlight' }),
        React.createElement(Gnocchi.Button, { label: 'Lowlight', classes: 'lowlight' }),
        React.createElement(Gnocchi.Button, { label: 'Fit', classes: 'fit' }),
        React.createElement(Gnocchi.Button, { label: 'Link', classes: 'fit', link: 'http://google.com' })
      )
    );
  }
});

ReactDOM.render(React.createElement(Styleguide, null), document.getElementById('main'));
