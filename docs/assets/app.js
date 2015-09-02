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
