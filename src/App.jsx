import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import InputText from './InputText';
import app from './scss/app.css';

class App extends Component {
  render() {
    return (
    	<div>
    		{/*
			<div className="title">
				<h3>Asher</h3>
			</div>
    		*/}

    		{/*<div className={app.title2}>
				<h3>Asher</h3>
			</div>*/}

			{/*
				global css className
				css module className
			*/}
			<div className='global-font' styleName='title-test'>
				<h2>ASA</h2>
			</div>
			{/*<div styleName='title3'>
				<h2>ASAssss</h2>
			</div>*/}
    		
    		<InputText name="name" type="text" />
    		<InputText name="password" type="password" />
    	</div>
    );
  }
}

export default CSSModules(App, app);