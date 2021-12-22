import React from "react";
import { Route } from "react-router-dom";
import { GameList } from "./game/GameList.js";
import { GameProvider } from "./game/GameProvider.js";
import { EventProvider } from "./game/EventProvider.js";
import { EventList } from "./game/EventList.js";
import { GameForm } from "./game/GameForm";

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        <GameProvider>
          <Route exact path="/">
            <GameList />
          </Route>
        </GameProvider>
        <Route exact path="/games/new">
          <GameForm />
        </Route>
        <EventProvider>
          <Route exact path="/events">
            <EventList />
          </Route>
        </EventProvider>
      </main>
    </>
  );
};