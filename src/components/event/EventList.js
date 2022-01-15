import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider.js";
import "./Events.css";
import { useHistory } from "react-router-dom";
import { GamerContext } from "../gamer/GamerProvider"


export const EventList = () => {
  const history = useHistory();
  const { events, getEvents, joinEvent, leaveEvent } = useContext(EventContext);
  const { currentGamer, getCurrentGamer } = useContext(GamerContext);

  useEffect(() => {
    getEvents();
    getCurrentGamer();
  }, []);

  return (
    <article className="events">
      <header className="events__header">
        <h1>Level Up Game Events</h1>
        <button
          className="btn btn-2 btn-sep icon-create"
          onClick={() => {
            history.push({ pathname: "/events/new" });
          }}
        >
          Schedule New Event
        </button>
      </header>
      {events.map((event) => {
        return (
          <section key={event.id} className="registration">
            <div className="registration__game">{event.game.title}</div>
            <div>{event.description}</div>
            <div>
              debugger
              <p>Current Gamer: {currentGamer.gamer.bio}</p>
              <p>{new Date(event.date).toString()}</p>
              <p>{new Date(event.date).toUTCString()}</p>
              <p>{new Date(event.date).getUTCFullYear()}-{new Date(event.date).getUTCMonth() + 1}-{new Date(event.date).getUTCDate()}</p>
              <p>{new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</p>
               @ {event.time}
            </div>
            {event.joined ? (
              <button
                className="btn btn-3"
                onClick={() => leaveEvent(event.id)}
              >
                Leave
              </button>
            ) : (
              <button className="btn btn-2" onClick={() => joinEvent(event.id)}>
                Join
              </button>
            )}
          </section>
        );
      })}
    </article>
  );
};