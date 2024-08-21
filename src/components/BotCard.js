import React from 'react';

function BotCard({ bot, onClick, onEnlist, isInArmy, onDischarge }) {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      {isInArmy ? (
        <div>
          <button 
            className="discharge-button" 
            onClick={(e) => { e.stopPropagation(); onDischarge(bot); }}>
            x
          </button>
        </div>
      ) : (
        <button onClick={(e) => { e.stopPropagation(); onEnlist(bot); }}>Enlist</button>
      )}
    </div>
  );
}

export default BotCard;
