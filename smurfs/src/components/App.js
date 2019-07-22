import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gettingSmurfs, addingSmurfs, deletingSmurf } from '../actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      height: '',
      name: '',
      age: '',
    }
  }

  componentDidMount() {
    console.log(this.props);
    this.props.gettingSmurfs();
    console.log(this.props);
  }

  changeHandler = e => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addSmurf = event => {
    event.preventDefault();
    const newSmurf = {
      id: this.state.smurfs.length,
      height: this.state.height,
      name: this.state.name,
      age: this.state.age,
    }
    this.props.addingSmurfs(newSmurf);
    this.setState({
      height: '',
      name: '',
      age: '',
    });
  }

  deleteSmurf = id => {
    this.props.deletingSmurf(id);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux LeRoy G</h1>
        
        <div>
          <p>Smurf Village:</p>
            <form onSubmit={this.addSmurf}>
              <input 
                type='text'
                name='name'
                placeholder='Name'
                value={this.state.name}
                onChange={this.changeHandler}
              />
              <input 
                type='text'
                name='age'
                placeholder='Age'
                value={this.state.age}
                onChange={this.changeHandler}
              />
              <input 
                type='text'
                name='height'
                placeholder='Height'
                value={this.state.height}
                onChange={this.changeHandler}
              />
              <button onClick={this.addSmurf}>Add Your Smurf</button>
            </form>
          </div>
          <div className='Smurfs-main'>
            {this.props.smurfs.map(smurf => {
              return(
                <div className='smurf-solo' key={smurf.name}>
                  <button 
                    className='remove-smurf-button'
                    key={smurf.id}
                    onClick={() => this.deleteSmurf(smurf.id)}
                  >
                    X
                  </button>
                  <p>Height: {smurf.height}</p>
                  <p>Name: {smurf.name}</p>
                  <p>Age: {smurf.age}</p>
                </div>
              );
            })}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, 
  { gettingSmurfs, addingSmurfs, deletingSmurf }) (App);