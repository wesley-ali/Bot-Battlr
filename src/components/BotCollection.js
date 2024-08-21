import React from "react";
import BotCard from "./BotCard";

function BotCollection(props) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {props.bots.map((bot) => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            onClick={() => props.onEnlist(bot)} 
            isInArmy={props.army.some((b) => b.id === bot.id)}
            onEnlist={props.onEnlist}
            onDischarge={props.onDischarge}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
