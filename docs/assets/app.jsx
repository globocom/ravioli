var GnocchiText = require('gnocchi-text');
var GnocchiTextarea = require('gnocchi-textarea');
var GnocchiNumber = require('gnocchi-number');
var GnocchiSelect = require('gnocchi-select');
var GnocchiButton = require('gnocchi-button');

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
    'sffffffff'
  ]} />,
  document.querySelectorAll('#section-select')[0]
);

React.render(
  <div>
    <GnocchiButton>Default</GnocchiButton>
    <GnocchiButton>
      With icon <i className='gnocchi-icon gnocchi-icon-arrow-right'></i>
    </GnocchiButton>
    <GnocchiButton classes={['action']}>Action</GnocchiButton>
    <GnocchiButton classes={['highlight']}>Highlight</GnocchiButton>
    <GnocchiButton classes={['lowlight']}>Lowlight</GnocchiButton>
    <GnocchiButton classes={['big']}>Big</GnocchiButton>
    <GnocchiButton classes={['block']}>Block</GnocchiButton>
  </div>,
  document.querySelectorAll('#section-button')[0]
);
