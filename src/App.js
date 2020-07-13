import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Attributes from "./attributes/attributes"
import Birthday from "./attributes/birthday"
import PersonCard from "./attributes/PersonCard"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      happy: false
    }
  }
  wishHappy = (e) => {
    this.setState({happy: !this.state.happy});
  }

  render() {
    return (
      <div className='container'>
        <div className="jumbotron"><h1>John</h1></div>
        <div className='card-body'>
          < Attributes lbs={999} yrs={999} />
          <Birthday date="9/9/1999" isHappy={this.state.happy} />
          {
              this.state.happy ?
              <button
                className="btn btn-danger"
                onClick={this.wishHappy}
              >Happy Birthday
              </button>
              :
              <button
                className="btn btn-success"
                onClick={this.wishHappy}
              >No Happy
              </button>
            }
        </div>

        <div className="jumbotron"><h1>Jyohn</h1></div>
        <div className='card-body'>
          < Attributes lbs={9979} yrs={9979} />
          <Birthday date="9/9/1999" isHappy={this.state.happy} />
          {
              this.state.happy ?
              <button
                className="btn btn-danger"
                onClick={this.wishHappy}
              >Happy Birthday
              </button>
              :
              <button
                className="btn btn-success"
                onClick={this.wishHappy}
              >No Happy
              </button>
            }

<PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
<PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" />
<PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" />
<PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" />
<PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" />
<PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" />
        </div>
        

      </div>

    );
  }
}


export default App;
