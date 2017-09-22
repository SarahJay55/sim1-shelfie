import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Shelf from './components/Shelf';

export default (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route  path='/api/shelf/A' render={() => {
                return (
                    <Shelf 
                        shelfid={"A"}
                    />
                )
            }} />

            <Route  path='/api/shelf/B' render={() => {
                return (
                    <Shelf 
                        shelfid={"B"}
                    />
                )
            }} />

            <Route  path='/api/shelf/C' render={() => {
                return (
                    <Shelf 
                        shelfid={"C"}
                    />
                )
            }} />

            <Route path='/api/shelf/D' render={() => {
                return (
                    <Shelf 
                        shelfid={"D"}
                    />
                )
            }} />
        </Switch>
)
