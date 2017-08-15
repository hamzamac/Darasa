import React, {Component} from 'react';
import '../styles/Chip.css';
import Instructor from '../images/instructor.PNG';
class Chips extends Component
{
    render()
    {
        return(
            <div className="chip w3-text-theme">
                <img className="" src={Instructor} alt="Person" width="96" height="96" />
                <span className="" >Makame Hamza</span> : <span className="" >Sweden</span>
            </div>
        );
    }
}

export default Chips;