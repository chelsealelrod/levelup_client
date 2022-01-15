import React from "react";
import { Route } from "react-router-dom";
import { GameList } from "./game/GameList.js";
import { GameProvider } from "./game/GameProvider.js";
import { EventProvider } from "./event/EventProvider.js";
import { EventForm } from "./event/EventForm.js";
import { EventList } from "./event/EventList.js";
import { GameForm } from "./game/GameForm";
import { ProfileProvider } from "./profile/ProfileProvider";
import { Profile } from "./profile/Profile";
import { GamerProvider } from "./gamer/GamerProvider.js";


export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >  <GamerProvider>
            <GameProvider>
              <EventProvider>
                <ProfileProvider>

              <Route exact path="/games">
                <GameList />
              </Route>

              <Route exact path="/games/new">
                <GameForm />
              </Route>

              <Route exact path="/events">
                <EventList />
              </Route>

              <Route exact path="/events/new">
                <EventForm />
              </Route>

              <Route exact path="/profile">
                <Profile />
              </Route>

            </ProfileProvider>
          </EventProvider>
        </GameProvider>
      </GamerProvider>
      </main>
    </>
  );
};