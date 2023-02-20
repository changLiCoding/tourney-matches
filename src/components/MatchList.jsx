import React from "react"; //optional
import Match from "./Match";

function MatchList(props) {
	const { matchData } = props;
	return (
		<section className='PlayerList MatchList'>
			<h1>Match list</h1>
			{matchData.map((ele, i) => {
				return (
					<Match
						{...ele}
						key={i}
					/>
				);
			})}
			{/* <Match {...matchData[0]} /> */}
		</section>
	);
}

export default MatchList;
