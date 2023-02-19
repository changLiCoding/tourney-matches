import React from "react"; //optional
import Match from "./Match";
import matchData from "../data/matchData";

function MatchList() {
	return (
		<section className='PlayerList MatchList'>
			<h1>Match list</h1>
			<Match />
		</section>
	);
}

export default MatchList;
