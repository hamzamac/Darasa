import React ,{Component} from 'react';
import Billboard from './Billboard';
import Sidebar from './Sidebar';
import '../styles/Body.css';
class Body extends Component
{
    render()
    {
        return(
            <div className="Body w3-display-container nfullHeight w3-theme-light w3-row">
               <Billboard  
                    data={this.props.data}  
                    changePage={this.props.changePage}
                /> 
               <Sidebar  data={this.props.data} />               
            </div>
        );
    }
}

export default Body;