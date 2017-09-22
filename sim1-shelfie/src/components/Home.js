import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'

// export default function Home() {
//         return (
//             <div>
//                 <h1>Shelfie</h1>
//                 <ul>
//                     <Route path="api/shelf/A" render={() => (
//                         <Shelf shelfid={"A"}/>
//                     )}/><Link to="api/shelf/A"><li>Shelf A</li></Link>
//                     <Route path="api/shelf/B" render={() => (
//                         <Shelf shelfid={"B"}/>
//                     )}/><Link to="api/shelf/B"><li>Shelf B</li></Link>
//                     <Route path="api/shelf/C" render={() => (
//                         <Shelf shelfid={"C"}/>
//                     )}/><Link to="api/shelf/C"><li>Shelf C</li></Link>
//                     <Route path="api/shelf/D" render={() => (
//                         <Shelf shelfid={"D"}/>
//                     )}/><Link to="api/shelf/D"><li>Shelf D</li></Link>
//                 </ul>
//             </div>
//         )
//     }

    export default function Home(props) {
        return (
            <div>
                <h1>Shelfie</h1>
                <Link activeClassName="active" to="api/shelf/A">Shelf A</Link>
                <Link activeClassName="active" to="api/shelf/B">Shelf B</Link>
                <Link activeClassName="active" to="api/shelf/C">Shelf C</Link>
                <Link activeClassName="active" to="api/shelf/D">Shelf D</Link>
                {props.children}
            </div>
        )
    }





