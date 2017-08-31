import React,{Component} from 'react';
import '../styles/ViewOptions.css';

class ViewOptions extends Component
{
    render()
    {
        return (
            <div className="w3-container w3-card-4 ">
                <h5>Wiews Options</h5>
                <p>
                    <input className="w3-radio" type="radio" name="gender" value="male" checked/>
                    <label>Slide</label>
                </p>
                <p>
                    <input className="w3-radio" type="radio" name="gender" value="female"/>
                    <label>Code Editor</label>
                </p>
                <p>
                    <input className="w3-radio" type="radio" name="gender" value="female"/>
                    <label>Screen Cast</label>
                </p>
                <p>  
                    <input className="w3-check" type="checkbox" name="gender" value="" />
                    <label>WhiteBoard</label>
                </p>
            </div>
        );

    }
}

export default ViewOptions;