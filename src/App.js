import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";
import './App.css';   

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortCriteria, setSortCriteria] = useState("name");
  const [filterClass, setFilterClass] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBots(bots.filter((b) => b.id !== bot.id));
      setArmy(army.filter((b) => b.id !== bot.id));
    });
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  };

  const handleFilter = (className) => {
    setFilterClass(className);
  };

  const sortedAndFilteredBots = bots
    .filter((bot) => (filterClass ? bot.bot_class === filterClass : true))
    .sort((a, b) => {
      if (sortCriteria === "name") return a.name.localeCompare(b.name);
      if (sortCriteria === "health") return b.health - a.health;
      if (sortCriteria === "damage") return b.damage - a.damage;
      if (sortCriteria === "armor") return b.armor - a.armor;
      return 0;
    });

  return (
    <div className="App">
      <BotArmy 
        army={army} 
        onRelease={releaseBot} 
        onDischarge={dischargeBot} 
      />
      <div className="controls">
        <button onClick={() => handleSort("name")}>Sort by Name</button>
        <button onClick={() => handleSort("health")}>Sort by Health</button>
        <button onClick={() => handleSort("damage")}>Sort by Damage</button>
        <button onClick={() => handleSort("armor")}>Sort by Armor</button>
        <select onChange={(e) => handleFilter(e.target.value)}>
          <option value="">Filter by Class</option>
          <option value="Captain">Captain</option>
          <option value="Support">Support</option>
          <option value="Medic">Medic</option>
          <option value="Defender">Defender</option>
          <option value="Witch">Witch</option>
          <option value="Assault">Assault</option>
        </select>
      </div>
      <BotCollection 
        bots={sortedAndFilteredBots} 
        onEnlist={enlistBot} 
        onDischarge={dischargeBot}
        army={army}
      />
      {selectedBot && (
        <div className="bot-details">
          <h2>{selectedBot.name}</h2>
          <img src={selectedBot.avatar_url} alt={selectedBot.name} />
          <p>Health: {selectedBot.health}</p>
          <p>Damage: {selectedBot.damage}</p>
          <p>Armor: {selectedBot.armor}</p>
          <p>Class: {selectedBot.bot_class}</p>
          <button onClick={() => enlistBot(selectedBot)}>Enlist</button>
          <button onClick={() => setSelectedBot(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
