import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { GameContext } from "./GameProvider.js";

export const EventForm = () => {
  const history = useHistory();

  const { games } = useContext(GameContext);

  const [currentEvent, setEvent] = useState({});

  useEffect(() => {
    // Get all existing games from API
  }, []);

  const changeEventState = (domEvent) => {
    // ...
  };

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Schedule New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="gameId">Game: </label>
          <select
            name="gameId"
            className="form-control"
            value={currentEvent.gameId}
            onChange={changeEventState}
          >
            <option value="0">Select a game...</option>
            {games.map((game) => (
              <option>Monopoly</option>
            ))}
          </select>
        </div>
      </fieldset>

      {/* Create the rest of the input fields */}

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          // Create the event

          // Once event is created, redirect user to event list
        }}
        className="btn btn-primary"
      >
        Create Event
      </button>
    </form>
  );
};