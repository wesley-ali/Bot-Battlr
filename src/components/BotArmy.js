import React from "react";
import BotCard from "./BotCard";

function BotArmy(props) {
  return (
    <>
      <h2>Your Bot Army</h2>
      <div className="bot-army">
        {props.army.length < 1 && (
          <p>Not Bots enlisted. Click on a bot below to enlist it.</p>
        )}
        {props.army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => props.onRelease(bot)}
            onDischarge={() => props.onDischarge(bot)}
          />
        ))}
      </div>
    </>
  );
}

export default BotArmy;
