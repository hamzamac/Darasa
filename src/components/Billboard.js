import React, {Component} from 'react';
import Presentation from './Presentation';

class Billboard extends Component
{
    render()
    {        
        return(
            <div 
                className="w3-panel w3-threequarter w3-mobile w3-display-container"
                style={{height:670+'px'}}
            >
                <Presentation data={this.props.data} socket={this.props.socket}/>
            </div>
        );
    }
}

export default Billboard;