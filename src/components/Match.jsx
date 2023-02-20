import React from "react"; //optional

function Match(props) {
	return (
		<article className='Match'>
			<h1>
				{props.players[0]} <span>vs</span> {props.players[1]}
			</h1>
			<h2>
				{props.winner
					? `${props.winner} is the winner by ${props.scoreDifference}!`
					: "No winners yet!"}
			</h2>

			{/* To be shown when there is a winner */}
			{/* To be shown when there is no winner */}
		</article>
	);
}
export default Match;
