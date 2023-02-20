// PlayerList.js

import React from "react"; //optional
import Player from "./Player";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

function PlayerList(props) {
	const { playerData, matchData } = props;
	// console.log(playerData, matchData);
	const playerDataArray = preparePlayerData(playerData);
	const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
	return (
		<section className='PlayerList'>
			<h1>Current participating players</h1>
			{parsedPlayerData.map((player, i) => {
				return (
					<Player
						{...player}
						key={i}
					/>
				);
			})}
		</section>
	);
}

export default PlayerList;
