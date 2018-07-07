import React, {Component} from 'react';
import '../styles/Chip.css';


class Chips extends Component
{

    render()
    {
        return(
            <div className="chip w3-text-theme">
                <img className="" src={this.props.photo} alt="Person" width="96" height="96" />
                <span className="" >{this.props.name}</span>
            </div>
        );
    }
}

export default Chips;