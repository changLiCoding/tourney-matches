export const preparePlayerData = (playerData) => Object.values(playerData);

export const addWinsToPlayers = function (playersDataArray, matchData) {
	// matchData.forEach((match) => {
	// 	if (match.winner) {
	// 		playersDataArray.forEach((player) => {
	// 			if (player.gamerTag === match.winner) {
	// 				if (!player.wins) {
	// 					player.wins = 1;
	// 				} else {
	// 					player.wins++;
	// 				}
	// 			}
	// 		});
	// 	}
	// });

	playersDataArray.forEach((player) => {
		const name = player.gamerTag;
		player.win = matchData.reduce((prVal, curVal, index) => {
			let isWInOne = 0;
			// console.log(prVal);
			if (curVal.winner === name) {
				isWInOne = 1;
			}
			// console.log(prVal + isWInOne);
			return prVal + isWInOne;
		}, 0);
	});

	return playersDataArray;
};
