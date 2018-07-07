import React, {Component} from 'react';
import ReactPDF from 'react-pdf/build/entry.webpack';
import lecture from '../documents/Lecture_5.pdf';
//import ViewOptions from './ViewOptions';

class Presentation extends Component
{
    constructor(props) {
        super(props);
        this.state = {file: lecture,pageIndex:this.props.data.pageIndex};
        this.message = this.message.bind(this);
    }

    message = () => {
       // alert("Full Screen not yet Supported!");
    }
/*
    changePage(by) {
        this.setState(prevState => ({
          pageIndex: prevState.pageIndex + by,
        }));
        this.props.socket.emit("pageChange",this.state.pageIndex);
    }
*/
    render()
    {
        return(
            <div className="Presentation">
                <ReactPDF
                    file={this.state.file}
                    pageIndex={this.props.data.pageIndex}
                    scale={0.98}
                />

            </div>
        );
    }
}

export default Presentation;