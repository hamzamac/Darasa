import React, {Component} from 'react';
import ReactPDF from 'react-pdf';
import lecture from '../documents/Lecture_5.pdf';

class Presentation extends Component
{
    onDocumentLoad({ total }) {
        this.setState({ total });
    }
 
    onPageLoad({ pageIndex, pageNumber }) {
        this.setState({ pageIndex, pageNumber });
    }
    render()
    {
        return(
            <div>
                <ReactPDF
                    file={lecture}
                    pageIndex={2}
                    onDocumentLoad={this.onDocumentLoad}
                    onPageLoad={this.onPageLoad}
                />
            </div>
        );
    }
}

export default Presentation;