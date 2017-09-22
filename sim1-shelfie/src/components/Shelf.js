import React from 'react';


export default function Shelf () {
var shelfid = this.params.shelfid

axios.get('/api/shelf/' + shelfid)
.then(bins => {
[{},{}, null, null, {}]
})
}


bins.map((val, i) => {
    if(null) {
        <div>+ add inventory to bin</div>
    } else {
        <div>bin + {i}</div>
    }
})


export default function Home(props) {
    return (
        <div>
            <h1>Shelfie</h1>
            <Link activeClassName="active" to="api/shelf/A">Bin 1</Link>
            <Link activeClassName="active" to="api/shelf/B">Bin 2</Link>
            <Link activeClassName="active" to="api/shelf/C">Bin 3</Link>
            <Link activeClassName="active" to="api/shelf/D">Bin 4</Link>
            {props.children}
        </div>
    )
}