import React, {Component} from 'react';

class ClassDetails extends Component
{
    constructor(props)
    {
        super(props);

        this.state={
            title:"Advance Programing in C++",
            peers:20,
            duration:"00:23"
        }
    }
    render()
    {
        return(
            <ul className="w3-ul w3-center">
                <li >{this.state.title} <i className="fa fa-television" aria-hidden="true"></i></li>
                <li >{this.state.peers} <i className="fa fa-users" aria-hidden="true"></i></li>
                <li >{this.state.duration} <i className="fa fa-clock-o" aria-hidden="true"></i></li>
            </ul>
        );
    }
}

export default ClassDetails;