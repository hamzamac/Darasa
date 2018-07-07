import React, {Component} from 'react';
import Presentation from './Presentation';

class Billboard extends Component
{
    render()
    {        
        return(
            <div className="Billboard w3-panel w3-threequarter w3-mobile  
            nfullHeight">
                <Presentation 
                    data={this.props.data} 
                    changePage={this.props.changePage}
                />
            </div>
        );
    }
}

export default Billboard;