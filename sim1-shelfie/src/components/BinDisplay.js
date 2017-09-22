import React, {Component} from 'react';
import './BinDisplay.css';
class BinDisplay extends Component{
    render(){
        return(
            <div className="BinDaddy">
                <div className="banner">
                    Just Bins
                </div>
                <div className="bins">
                    <ul className="list">
                        <li className="bin">Bin 1</li>                        
                        <li className="bin">Bin 2</li>
                        <li className="bin">Bin 3</li>
                        <li className="bin">Bin 4</li>                        
                    </ul>
                </div>
            </div>
        )
    }
} export default BinDisplay;