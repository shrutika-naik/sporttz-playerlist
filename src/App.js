import './App.css';
import Search from './shared/Search';
import TeamData from './data/TeamData';

function App() {
  const {loading, playerList, error} = TeamData();
  return (
    <div className="App">
      {!loading && <Search playerList={playerList} loading={loading} error={error} />}      
      {loading && <div class="loader"></div>}
      <div>{error && 'Error'}</div>
    </div>
  );
}

export default App;