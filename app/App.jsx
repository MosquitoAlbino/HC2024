import React                from 'react'
import ClinicHistory        from 'page/ClinicHistory'
import Home                 from 'page/Home'
import {
  BrowserRouter as Router,
  Route,
}                           from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/clinic-history" component={ClinicHistory} />
    </div>
  </Router>
)

export default App
