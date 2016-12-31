import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Gallery from './components/Gallery'
import App from './components/App'
import CreateCard from './components/CreateCard'
import Stats from './components/Stats'

const Routing = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Gallery} />
        <Route path="create" component={CreateCard} />
        <Route path="browse" component={Gallery} />
        <Route path="stats" component={Stats} />
      </Route>
    </Router>
  )
}

export default Routing
