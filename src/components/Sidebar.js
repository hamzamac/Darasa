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
                        photo={this.props.data.presenterPhoto} 
                        location={this.props.data.presenterLocation} 
                    />
                </div>
                <div className="w3-section" >
                    <ClassDetails 
                        title={this.props.data.topic}
                        peers={this.props.data.peers}
                        duration={this.props.data.timeStamp}
                    />
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