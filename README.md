# Bot Battlr

Bot Battlr is a React-based web application where users can view, enlist, release, and discharge bots in their army. The project simulates bot management by allowing users to interact with a collection of bots, each having different attributes like health, damage, and armor.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)

## Features

- **Bot Collection**: View profiles of all available bots.
- **Bot Army**: Enlist bots into your army by clicking on them.
- **Release Bots**: Remove bots from your army with a simple click.
- **Discharge Bots**: Permanently remove bots from your army and the backend database.
- **Sorting and Filtering**: Sort bots by name, health, damage, or armor and filter them by class.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Pauline-WN/Bot-Battlr.git
   ```

2. **Navigate to the project directory**
   cd bot-battlr

3. **Install the dependencies:**  
   npm install

4. **Start the JSON server:**
   npx json-server --watch db.json --port 8001

5. **Start the development server:**
   npm start

## Usage

Once the application is running, you can interact with the bots in the following ways:

- **View Bot Collection**: Browse all bots available in the Bot Collection.
- **Enlist Bots**: Click on a bot to enlist it into your army. It will appear in the YourBotArmy section.
- **Release Bots**: Click on a bot in the army to release it back to the Bot Collection.
- **Discharge Bots**: Click the red "x" button on a bot to discharge it permanently.

## Components

- **src/App.js**: The main component that manages state and renders BotCollection and BotArmy.
- **src/components/BotCollection.js**: Displays all available bots and allows enlisting them into the army.
- **src/components/BotArmy.js**: Displays the user's bot army, allowing them to release or discharge bots.
- **src/components/BotCard.js**: Represents individual bot cards with details like name, health, damage, and armor, along with actions like enlist, release, and discharge.
