
import { useEffect, useState } from 'react';
//import Standings from './components/Standings';
import ChartComponent from './components/ChartComponent';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2024&standingsTypes=regularSeason'
      );
      const data = await res.json();
      const allTeams = data.records.flatMap((r) => r.teamRecords);
      setTeams(allTeams);
    };

    fetchData();
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen p-6">
      <Standings />
      <ChartComponent teams={teams} />
    </main>
  );
}

export default App;
