import React, {Component} from 'react';
import axios from 'axios';
import CreateBin from './CreateBin'




class Shelf extends Component {
     constructor() {
         super()

         this.state = {
             binsArr: ["Temporary String"],
             binFlag: false
         }


     }


    getData() {
        var arr = this.state.binsArr.data.map((e, i) => {
            return (
                <CreateBin
                    id={e.id}
                    name={e.name}
                    price={e.price}
                />
            )
        })
        return arr;
    }

    componentDidMount() {
        console.log(this.props.shelfid);
        axios.get('http://localhost:3001/api/shelf/' + this.props.shelfid)
        .then((bins) => {
            this.setState({
                binsArr: bins,
                binFlag: true
            })
            console.log(this.state.binsArr.data);
           
        })
    }


render() {
    return (
        <div>
            {/* <p>{this.state.binsArr.data[0].name}</p> */}
            {this.props.shelfid}
        </div>
    )
}
 }
 export default Shelf