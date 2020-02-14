import React from 'react';

const Operators = ({ operators, setCalc }) => {
	return (
		<div>
			{operators.map(operator => (
				<button
					key={operator.char}
					name={operator.value}
					value={operator.char}
					onClick={e => setCalc(e.target.value)}
				>
					{operator.char}
				</button>
			))}
		</div>
	);
};

export default Operators;
