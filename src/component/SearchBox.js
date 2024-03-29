
import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba--green bg-lightest-green'
				type='search' 
				placeholder='search robots' 
				onChange={searchChange}
				/>
			</div>
		);
}

export default SearchBox;