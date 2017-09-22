import React, {Component} from 'react';


class LandingPage extends Component {
    render(){
        return(
            <div className="Parent">
                <div className="banner">
                    Shelf's and Bins
                </div>
                <div className="Shelves">
                    <ul>
                        <li className="shelf">Shelf A</li>                        
                        <li className="shelf">Shelf B</li>
                        <li className="shelf">Shelf C</li>
                        <li className="shelf">Shelf D</li>                        
                    </ul>
                </div>
            </div>
        )
    }
}