var Styleguide = React.createClass({
  render: function(){
    return (
      <main>
        <section>
          <h3>Text input</h3>
          <Ravioli.Text/>
          <Ravioli.Text required={true} counter='subtract' counterMax={10}/>
        </section>

        <section>
          <h3>Textarea</h3>
          <Ravioli.Textarea/>
        </section>

        <section>
          <h3>Number input</h3>
          <Ravioli.Number/>
          <Ravioli.Number min={0} max={5} placeholder='0 to 5'/>
          <Ravioli.Number float={true} placeholder='#.#'/>
        </section>

        <section>
          <h3>Select</h3>
          <Ravioli.Select
            options={[
              {value: 123, label: 'dasdsadsadasdsa'},
              {value: 'sswws', label: 1234567890},
              'sffffffff',
              1234]}/>
          <Ravioli.Select
            placeholder='Select something (or not)'
            empty='empty label'
            options={[1,2,3]}/>
        </section>

        <section>
          <h3>Checkbox</h3>
          <Ravioli.Check label='Check me'/>
        </section>

        <section>
          <h3>Button</h3>
          <Ravioli.Button label='Default'/>
          <Ravioli.Button label='With icon' icon='arrow-right'/>
          <Ravioli.Button label='Action' classes='action'/>
          <Ravioli.Button label='Highlight' classes='highlight'/>
          <Ravioli.Button label='Lowlight' classes='lowlight'/>
          <Ravioli.Button label='Fit' classes='fit'/>
          <Ravioli.Button label='Link' classes='fit' link='http://google.com'/>
        </section>
      </main>
    );
  }
});

ReactDOM.render(<Styleguide/>, document.getElementById('main'));
