import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Gallery from './components/Gallery'
import App from './components/App'
import CreateCard from './components/CreateCard'

const Routing = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Gallery} />
        <Route path="create" component={CreateCard} />
        <Route path="browse" component={Gallery} />
      </Route>
    </Router>
  )
}

export default Routing
