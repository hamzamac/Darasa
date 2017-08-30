import React, {Component} from 'react';
import ReactPDF from 'react-pdf/build/entry.webpack';
import lecture from '../documents/Lecture_5.pdf';

class Presentation extends Component
{
    constructor(props) {
        super(props);
        this.state = {file: lecture};
    }

    message()
    {
        alert("Clicked");
    }

    render()
    {
        return(
            <div className="w3-display-middle">
                <ReactPDF
                    file={this.state.file}
                    pageIndex={0}
                    scale={1.2}
                />

                <div className="w3-center">
                    <div class="w3-bar">
                        <button className="w3-button w3-theme" onClick={this.message}>{"<<"}</button>
                        <button className="w3-button w3-theme">{"<"}</button>
                        <button className="w3-button w3-theme">{">"}</button>
                        <button className="w3-button w3-theme">{">>"}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Presentation;