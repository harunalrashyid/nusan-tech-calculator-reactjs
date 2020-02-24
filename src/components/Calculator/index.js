import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
	constructor() {
		super();

		this.state = {
			inputs: [],
			inputValue: [],
			result: ''
		}
	}

	componentWillMount() {
		this.setState({
			inputs: [
				{ id: 1, name: 'input1', value: '', checked: true },
				{ id: 2, name: 'input2', value: '', checked: true },
				{ id: 3, name: 'input3', value: '', checked: true }
			]		
		});
	}

	resetInput = () => {
		this.setState({
			input1: '',
			input2: '',
			input3: '',
		});
	}

	parseToNumber = () => {
		const { inputs } = this.state;

		const parse = inputs.map((input) => {
			return (input.checked ? Number(input.value) : 0);
		})

		console.log(parse);
		return parse;
	}

	handleCheckbox = e => {
		const { target: {name, checked} } = e;
		// console.log(checked);

		const findChecked = this.state.inputs.find(input => input.name === name);
		findChecked.checked = checked;

		this.setState({ 
			inputs: [...this.state.inputs]
		});
	}

	handleChangeInput = e => {
		const { target: {name, value} } = e;

		// find the current input
		const findInput = this.state.inputs.find(input => input.name === name);
		findInput.value = value

		this.setState({
			inputs: [...this.state.inputs]
		});
	}	

	handleActionIncrement = e => {
		const operation = this.parseToNumber().reduce((sum, value) => {
			return sum + value
		})

		this.setState({
			result: operation
		})
		// return this.resetInput();
	}

	handleActionDecrement = e => {
		let operation = this.parseToNumber().reduce((sum, value) => {
			return sum - value
		})

		this.setState({ 
			result: operation 
		});
		// return this.resetInput();
	}

	handleActionMultiply = e => {
		let operation = this.parseToNumber().reduce((sum, value) => {
			return sum * (value === 0 ? 1 : value)
		})

		this.setState({ 
			result: operation 
		});
		// return this.resetInput();
	}

	handleActionDivide = e => {
		let operation = this.parseToNumber().reduce((sum, value) => {
			return sum / (value === 0 ? 1 : value)
		})

		this.setState({ 
			result: operation 
		});
		// return this.resetInput();
	}

	render() {
		const { currentInput, inputs, results } = this.state;

		return(
			<div className="calculator">
				{inputs.map((input, key) => (
					<div className="calculator__input-wrapper" key={key}>
						<input 
						 type="number" 
						 className="calculator__input-number" 
						 name={input.name} 
						 value={input.value} 
						 disabled={!input.checked} 
						 onChange={this.handleChangeInput}
						/>
						<input 
						type="checkbox" 
						className="calculator__input-checkbox" 
						name={input.name}
						defaultChecked={input.checked}
						onChange={this.handleCheckbox} />
					</div>
				))}

				<div className="calculator__action-wrapper">
					<button className="calculator__action calculator__action--increment" onClick={this.handleActionIncrement}>+</button>
					<button className="calculator__action calculator__action--decrement" onClick={this.handleActionDecrement}>-</button>
					<button className="calculator__action calculator__action--multiply" onClick={this.handleActionMultiply}>x</button>
					<button className="calculator__action calculator__action--divide" onClick={this.handleActionDivide}>/</button>
				</div>

				<div className="calculator__result-wrapper">
					<h3 className="calculator__result">
						<span className="calculator__result-text">Result:</span>
						<span className="calculator__result-value">{this.state.result}</span>
					</h3>
				</div>
			</div>
		);
	}
}

export default Calculator;
