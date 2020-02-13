import React, { useState } from 'react';

//import any components needed

import { numArr } from '../../../data';

//Import your array data to from the provided data file

const Numbers = () => {
	const [numbers, setNumbers] = useState(numArr);
	return (
		<div>
			{/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
			{numbers.map(i => (
				<button>{i}</button>
			))}
		</div>
	);
};

export default Numbers;
