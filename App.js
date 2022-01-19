import React, { useState } from 'react';
import Data from './data';
import List from './List';

function App(){
	const [people, setPeople]= useState(Data);
	console.log(people);
	return (
		<main>
			<section className="container">
				<h3> 0 birthdays today</h3>
				<List people={people}/>
				
				<button type="button" className="" onClick={()=>{setPeople([]);}}> Clear All?</button>
			</section>
		</main>
	)
};

export default App;