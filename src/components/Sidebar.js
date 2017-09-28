import React, {Component} from 'react';
import Chips from './Chips';
import ClassDetails from './ClassDetails';

class Sidebar extends Component
{
    render()
    {
        return(
            <div className="w3-panel w3-quarter w3-mobile w3-theme-d4 w3-round">
                <div className="w3-section" >
                    <Chips 
                    name={this.props.data.presenterName} 
                    photo={this.props.data.presenterLocation} 
                    location={this.props.data.presenterPhoto} />
                </div>
                <div className="w3-section" >
                    <ClassDetails />
                </div>
                <div className="w3-section" >
                    shared materials {this.props.data.documentPath}
                </div>
                <div className="w3-section" >
                    chart box
                </div>                                                  
            </div>
        );
    }
}
export default Sidebar;