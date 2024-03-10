import React from 'react';

const Card = ({ name, email, username, id }) => {
	return (
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}180x180`} />
			<div>
				<h2>{name}</h2>
				<p>{username}</p>
				<p>{email}</p>
			</div>
		</div>	
	);
}

export default Card;