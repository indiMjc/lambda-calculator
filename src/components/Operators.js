import React from 'react';

const Operators = ({ operators, calcState, setCalc, setCalcState }) => {
	const calculate = () => setCalcState(eval(calcState));

	const clear = () => setCalcState('');
	return (
		<div>
			<button onClick={clear}>C</button>
			{operators.map(operator => (
				<button key={operator} value={operator} onClick={e => setCalc(e.target.value)}>
					{operator}
				</button>
			))}
			<button onClick={calculate}>=</button>
		</div>
	);
};

export default Operators;
