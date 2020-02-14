import React from 'react';

const Operators = ({ operators, calc, setCalc }) => {
	const onClick = e => {
		const { name, value } = e.target;
		setCalc({
			screen: value,
			calculation: `${calc.calculation} ${name}`
		});
	};
	return (
		<div>
			{operators.map(operator => (
				<button key={operator.char} name={operator.value} value={operator.char} onClick={onClick}>
					{operator.char}
				</button>
			))}
		</div>
	);
};

export default Operators;
