import React, {Component} from 'react';

class Attributes extends Component{
    render(){
        return(
            <div className="card my-4">
                <div className="card-header">Attributes</div>
                <div className="card-body">
        <p>Fatness: {this.props.lbs} lbs</p>
        <p>Oldness: {this.props.yrs} yrs</p>
                </div>
            </div>
        )
    }

}
export default Attributes