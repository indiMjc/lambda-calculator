import React, { useEffect } from 'react';

//Import your array data to from the provided data file

const Numbers = ({ numbers, calc, setCalc }) => {
	const onClick = e => {
		const { name } = e.target;
		setCalc({
			screen: `${name}`,
			calculation: `${calc.calculation}${name}`
		});

		// const checkTruthy = () => {
		// 	if (calc.screen && typeof calc.screen[0] === 'string') {
		// 		return 'not number';
		// 	} else {
		// 		return 'number';
		// 	}
		// };

		console.log(typeof calc.screen);
	};
	// useEffect(() => {
	// 	if (calc.screen && typeof calc.screen[0] === 'string') {
	// 		console.log('effect');
	// 		setCalc({
	// 			screen: `${calc.screen.substr(1)}`,
	// 			calculation: `${calc.calculation}`
	// 		});
	// 	}
	// }, [onClick]);
	return (
		<div>
			{numbers.map(num => (
				<button key={num} name={num} onClick={onClick}>
					{num}
				</button>
			))}
		</div>
	);
};

export default Numbers;
