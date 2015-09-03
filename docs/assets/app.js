React.render(
  React.createElement(GnocchiText, null),
  document.querySelectorAll('#section-text')[0]
);

React.render(
  React.createElement(GnocchiTextarea, null),
  document.querySelectorAll('#section-textarea')[0]
);

React.render(
  React.createElement(GnocchiNumber, null),
  document.querySelectorAll('#section-number')[0]
);

React.render(
  React.createElement('div', null,
    React.createElement(GnocchiButton, {label: 'Default'}),
    React.createElement(GnocchiButton, {label: 'Action', type: 'action'}),
    React.createElement(GnocchiButton, {label: 'Highlight', type: 'highlight'}),
    React.createElement(GnocchiButton, {label: 'Lowlight', type: 'lowlight'})
  ),
  document.querySelectorAll('#section-button')[0]
);
