import React from 'react';

const Specials = ({ specials, calc, setCalc }) => {
	const onClick = e => {
		const { name } = e.target;
		setCalc({
			screen: name,
			calculation: `${calc.calculation} ${name}`
		});
	};
	return (
		<div>
			{specials.map(special => (
				<button key={special} name={special} onClick={onClick}>
					{special}
				</button>
			))}
		</div>
	);
};

export default Specials;
