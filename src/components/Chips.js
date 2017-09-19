import React, {Component} from 'react';
import '../styles/Chip.css';
import InstPhoto from '../images/instructor.PNG';

class Chips extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:"Makame Hamza",
            photo:InstPhoto,
            location:"Sweden"
        }
    }
    render()
    {
        return(
            <div className="chip w3-text-theme">
                <img className="" src={this.state.photo} alt="Person" width="96" height="96" />
                <span className="" >{this.state.name}</span> : <span className="" >{this.state.location}</span>
            </div>
        );
    }
}

export default Chips;