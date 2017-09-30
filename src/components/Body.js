import React ,{Component} from 'react';
import Billboard from './Billboard';
import Sidebar from './Sidebar';
class Body extends Component
{
    render()
    {
        return(
            <div className="w3-container w3-theme-light w3-row">
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