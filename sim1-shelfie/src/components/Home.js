import React from 'react';
import { Link, Route, Switch, HashRouter as Router } from 'react-router-dom'
// import Shelf from './components/Shelf'


export default function Home(props) {
    return (
        <div>
            <h1>Shelfie</h1>

         
                <div>
                    <Link exact to="/api/shelf/A">Shelf A</Link>
                    <Link exact to="/api/shelf/B">Shelf B</Link>
                    <Link exact to="/api/shelf/C">Shelf C</Link>
                    <Link exact to="/api/shelf/D">Shelf D</Link>
                </div>
        
            {props.children}
        </div>
    )
}

    // export default function Home() {
    //     return (
    //         <div>
    //             <h1>Shelfie</h1>
    //             <ul>
    //                 <Route path="api/shelf/A" render={() => (
    //                     <Shelf shelfid={"A"}/>
    //                 )}/><Link to="api/shelf/A"><li>Shelf A</li></Link>
    //                 <Route path="api/shelf/B" render={() => (
    //                     <Shelf shelfid={"B"}/>
    //                 )}/><Link to="api/shelf/B"><li>Shelf B</li></Link>
    //                 <Route path="api/shelf/C" render={() => (
    //                     <Shelf shelfid={"C"}/>
    //                 )}/><Link to="api/shelf/C"><li>Shelf C</li></Link>
    //                 <Route path="api/shelf/D" render={() => (
    //                     <Shelf shelfid={"D"}/>
    //                 )}/><Link to="api/shelf/D"><li>Shelf D</li></Link>
    //             </ul>
    //         </div>
    //     )
    // }





