import React, { useEffect } from 'react';

//Import your array data to from the provided data file

const Numbers = ({ numbers, setCalc }) => {
	return (
		<div>
			{numbers.map(num => (
				<button key={num} name={num} onClick={e => setCalc(e.target.name)}>
					{num}
				</button>
			))}
		</div>
	);
};

export default Numbers;
