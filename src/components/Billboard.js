import React, {Component} from 'react';
import Presentation from './Presentation';

class Billboard extends Component
{
    render()
    {
        return(
            <div className="w3-panel w3-threequarter w3-mobile">
              <Presentation />  
            </div>
        );
    }
}

export default Billboard;