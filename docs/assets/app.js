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
    React.createElement(GnocchiButton, null, 'Default'),
    React.createElement(GnocchiButton, {classes: ['action']}, 'Action'),
    React.createElement(GnocchiButton, {classes: ['highlight']}, 'Highlight'),
    React.createElement(GnocchiButton, {classes: ['lowlight']}, 'Lowlight')
  ),
  document.querySelectorAll('#section-button')[0]
);
