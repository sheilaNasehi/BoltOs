import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

import Home from './container/Home'
import Dashboard from './container/Dashboard'
import Signin from './container/Signin'
import Signup from './container/Signup'
import Password from './container/Password'
import Pools from './container/Pools'
import Edit from './container/Edit'
import MiningProfile from './container/MiningProfile'
import Profile from './container/Profile'
import NotMatch from './container/404'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Signin} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/password" component={Password} />
				<Route path="/home" render={() => (
					<Home>
						<Route path="/home/dashboard" component={Dashboard} />
						<Route path="/home/pools" component={Pools} />
						<Route path="/home/miningprofile" component={MiningProfile} />
						<Route path="/home/edit" component={Edit} />
						<Route path="/home/profile" component={Profile} />
					</Home>
				)} />
				<Route path="*" component={NotMatch} />
			</Switch>
		</Router>
	)
}

export default App;
