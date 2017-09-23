import React, {Component} from 'react';
import axios from 'axios';
import CreateBin from './CreateBin'




class Shelf extends Component {
     constructor() {
         super()

         this.state = {
             binsArr: [],
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
            if(bins.data.length < 5) {
                var binLength = bins.data.length;
                 var toFill = 5 - binLength;
                 var binsArrCopy = bins.data.slice()
                 for(var i=0; i < toFill; i++) {
                     binsArrCopy.push(null);
                 }
                 this.setState({
                     binsArr: binsArrCopy,
                     binFlag: true
                 })
                 console.log(this.state.binsArr);
            } else {

            
            this.setState({
                binsArr: bins.data,
                binFlag: true
            })
         
        }
        })
    }


render() {
     return (
        //  <div>Hello</div>
        <div>
            {
                this.state.binFlag ? this.state.binsArr.map((e, i) => {
                    return (
                      !e ? <div className="add-to-bin">Add to bin</div> : <CreateBin binNum={i} price={e.price}/> 
                    )
                })
                :
                <div>Loading...</div>
            }
            {this.props.shelfid}
        </div>
     )
}
 }
 export default Shelf