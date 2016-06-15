import React, { Component, PropTypes } from 'react';

class InputText extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired
	}

	constructor(props) {
		super(props);
	}

	render() {
		var { name, type } = this.props;

		return (
			<div>
				<label>{name}: </label>
				<input name={name} type={type}/>
			</div>
		)
	}
}

export default InputText;