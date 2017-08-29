import React, {Component} from 'react';
import ReactPDF from 'react-pdf/build/entry.webpack';
import lecture from '../documents/Lecture_5.pdf';

class Presentation extends Component
{
    render()
    {
        return(
            <div className="w3-display-middle">
                <ReactPDF
                    file={lecture}
                    pageIndex={0}
                    scale={1.2}
                />
            </div>
        );
    }
}

export default Presentation;