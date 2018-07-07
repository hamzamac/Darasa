import React, {Component} from 'react';

class ClassDetails extends Component
{

    render()
    {
        return(
            <ul className=" ClassDetails w3-ul ">
                <li > 
                    <i className="fa fa-television" aria-hidden="true"></i>  
                    <span className="w3-padding">{this.props.title}</span>
                </li>
                <li > 
                    <i className="fa fa-users" aria-hidden="true"></i>   
                    <span className="leftPadded">{this.props.peers}</span> 
                    <i className="fa fa-clock-o leftPadded" aria-hidden="true"></i>   
                    <span className="leftPadded">{this.props.duration}</span>                   
                </li>

                <li className="w3-center" >
                    <i className="fas fa-volume-up " aria-hidden="true"></i>   
                    <i className="fas fa-volume-off leftPadded" aria-hidden="true"></i> 
                    <i className="fas fa-microphone-alt leftPadded" aria-hidden="true"></i>   
                    <i className="fas fa-microphone-alt-slash leftPadded" aria-hidden="true"></i>  
                </li> 
                <li className="w3-center">
                        <i className="fas fa-angle-double-left" ></i>
                        <i className="fas fa-angle-left leftPadded" onClick={() => this.props.changePage(-1)}></i>
                        <i className="fas fa-angle-right leftPadded" onClick={() => this.props.changePage(1)}></i>
                        <i className="fas fa-angle-double-right leftPadded"></i>
                </li>                            
                <li >
                    FileUpload
                </li>
                <li className="App">
                    <div>
                        <i className="fas fa-file-pdf " aria-hidden="true"></i>   
                        <span className="leftPadded">Filename</span>
                        <i className="far fa-eye-slash leftPadded" aria-hidden="true"></i>
                        <i className="fas fa-file-download leftPadded" aria-hidden="true"></i>
                        <i className="fas fa-trash-alt leftPadded" aria-hidden="true"></i>
                    </div>
                    <div>
                        <i className="fas fa-file-pdf " aria-hidden="true"></i>   
                        <span className="leftPadded">Filename</span>
                        <i className="far fa-eye-slash leftPadded" aria-hidden="true"></i>
                        <i className="fas fa-file-download leftPadded" aria-hidden="true"></i>
                        <i className="fas fa-trash-alt leftPadded" aria-hidden="true"></i>
                    </div>
                </li>
            </ul>
        );
    }
}

export default ClassDetails;