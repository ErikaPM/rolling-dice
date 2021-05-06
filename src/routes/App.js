import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from '../containers/Game';
import GameInfo from '../containers/GameInfo';
import Home from '../containers/Home';
import PlayersResults from '../containers/PlayersResults';
import Layout from '../components/Layout'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/gameInfo" component={GameInfo} />
                <Route exact path="/play" component={Game} />
                <Route exact path="/results" component={PlayersResults} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;