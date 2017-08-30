import React, {Component} from 'react';

class Header extends Component
{
    render()
    {
        return (
            <div className="w3-container w3-theme w3-card2">
                
                <h4>
                    <i className="fa fa-universal-access" aria-hidden="true"></i>
                    Darasa
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                </h4>
            </div> 
        );
    }
}

export default Header;