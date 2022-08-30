import React from 'react';
import { Route } from 'react-router-dom';

import Main from '../views/Main';
import Yes from '../views/Yes';
import No from '../views/No';

const App = () => {
	return (
		<>
			<Route path='/' exact>
				<Main />
			</Route>
			<Route path='/y'>
				<Yes />
			</Route>
			<Route path='/n'>
				<No />
			</Route>

		</>
	)
}

export default App;
