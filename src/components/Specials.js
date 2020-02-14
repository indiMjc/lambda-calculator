import React from 'react';

const Specials = ({ specials, setCalc }) => {
	return (
		<div>
			{specials.map(special => (
				<button key={special} name={special} onClick={e => setCalc(e.target.name)}>
					{special}
				</button>
			))}
		</div>
	);
};

export default Specials;
