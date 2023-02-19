export const preparePlayerData = (playerData) => Object.values(playerData);

export const addWinsToPlayers = function (playersDataArray, matchData) {
	matchData.forEach((match) => {
		if (match.winer) {
			playersDataArray.forEach((player) => {
				if (!player.win) {
					player.win = 1;
				} else {
					player.win++;
				}
			});
		}
	});
	return playersDataArray;
};
