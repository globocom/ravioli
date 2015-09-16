var GnocchiText = Gnocchi.Text;
var GnocchiTextarea = Gnocchi.Textarea;
var GnocchiNumber = Gnocchi.Number;
var GnocchiSelect = Gnocchi.Select;
var GnocchiCheck = Gnocchi.Check;
var GnocchiButton = Gnocchi.Button;

React.render(
  <GnocchiText />,
  document.querySelectorAll('#section-text')[0]
);

React.render(
  <GnocchiTextarea />,
  document.querySelectorAll('#section-textarea')[0]
);

React.render(
  <GnocchiNumber />,
  document.querySelectorAll('#section-number')[0]
);

React.render(
  <GnocchiSelect options={[
    {value: 'sss', label: 'dasdsadsadasdsa'},
    {value: 'sswws', label: 'daswwwwdsadsadasdsa'},
    'sffffffff']}
  />,
  document.querySelectorAll('#section-select')[0]
);

React.render(
  <GnocchiCheck />,
  document.querySelectorAll('#section-check')[0]
);

React.render(
  <div>
    <GnocchiButton label='Default'></GnocchiButton>
    <GnocchiButton label='With icon' icon='arrow-right'></GnocchiButton>
    <GnocchiButton label='Action' classes='action' />
    <GnocchiButton label='Highlight' classes='highlight' />
    <GnocchiButton label='Lowlight' classes='lowlight' />
    <GnocchiButton label='Fit' classes='fit' />
  </div>,
  document.querySelectorAll('#section-button')[0]
);
