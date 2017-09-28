import React, {Component} from 'react';

class ClassDetails extends Component
{

    render()
    {
        return(
            <ul className="w3-ul ">
                <li > 
                    <i className="fa fa-television" aria-hidden="true"></i>  
                    <span className="w3-padding">{this.props.title}</span>
                </li>
                <li > 
                    <i className="fa fa-users" aria-hidden="true"></i>   
                    <span className="w3-padding">{this.props.peers}</span> 
                </li>
                <li >
                    <i className="fa fa-clock-o " aria-hidden="true"></i>   
                    <span className="w3-padding">{this.props.duration}</span>
                </li>
            </ul>
        );
    }
}

export default ClassDetails;