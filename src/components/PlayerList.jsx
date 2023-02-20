// PlayerList.js

import React from "react"; //optional
import Player from "./Player";

function PlayerList(props) {
	const { playerData } = props;
	// console.log(playerData, matchData);

	return (
		<section className='PlayerList'>
			<h1>Current participating players</h1>
			{playerData.map((player, i) => {
				return (
					<Player
						{...player}
						key={player.gamerTag}
					/>
				);
			})}
		</section>
	);
}

export default PlayerList;
