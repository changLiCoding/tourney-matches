import "./App.css";
import MatchList from "./components/MatchList";
import PlayerList from "./components/PlayerList";
import playerData from "./data/playerData";
import matchData from "./data/matchData";

function App() {
	return (
		<div className='App'>
			<h1>
				Tourney Matches{" "}
				<span>Where Coding and Tournaments found their Match!</span>
			</h1>
			<PlayerList
				matchData={matchData}
				playerData={playerData}
			/>
			<MatchList matchData={matchData} />
		</div>
	);
}

export default App;
