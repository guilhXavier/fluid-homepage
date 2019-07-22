import React from 'react';
import Time from './Time';
import Bookmarks from './Bookmarks';
import News from './News';
import Weather from './Weather';

const Main = () => (
	<React.Fragment>
		<h1 style={{ textAlign: 'center' }}>Welcome to your home page, human</h1>
		<div className="main-container">
			<div className="main-container-inner">
				<Bookmarks />
				<Time />
				<News />
				<Weather />
			</div>
		</div>
	</React.Fragment>
);

export default Main;
