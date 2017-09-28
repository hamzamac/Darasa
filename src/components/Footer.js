import React, {Component} from 'react';

class Footer extends Component
{
    render()
    {
        return (
            <div className="w3-container w3-theme-dark w3-center"><a href="www.shewt.co.tz">
                Shewt 2017</a> {this.props.peers}
            </div>
        );
    }
}

export default Footer;