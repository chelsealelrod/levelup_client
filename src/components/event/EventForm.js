import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { GameContext } from "../game/GameProvider.js";
import { EventContext } from "../event/EventProvider";
import "./Events.css"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export const EventForm = () => {
  const history = useHistory();

  const { games } = useContext(GameContext);
  const { createEvent } = useContext(EventContext);

  const [currentEvent, setCurrentEvent] = useState({  game: 1,
    location: "",
    date: "",
    time: ""});
  const { getGames } = useContext(GameContext);
  const [startDate, setStartDate] = useState(new Date());


  useEffect(() => {
    getGames();
  }, []);

  const changeEventState = (domEvent) => {
    const newEventState = { ...currentEvent };
    newEventState.game = domEvent.target.value;
    setCurrentEvent(newEventState);
  };

  return (
    <>
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
            <option defaultValue="0">Select a game...</option>
            {games.map((game) => (
              <option
              key={game.id}
              value={game.id}
          >
              {game.title}
          </option>
            ))}
          </select>
          <br></br>
          </div>
          <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            required
            autoFocus
            className="form-control"
            value={currentEvent.description}
            onChange={changeEventState}
          />
          
        </div>
        <div className="form-group"><br></br>
        <label htmlFor="date">Date:</label>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
    <br></br>
     <div className="form-group">
     <label for="time">Time:</label><br></br>

     <input type="time" id="appt" name="appt"
            min="09:00" max="18:00" required/>
     
     </div>
      </fieldset>

      {/* Create the rest of the input fields */}

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          const event = {
            game: currentEvent.game,
            location: currentEvent.location,
            date: currentEvent.date,
            time: currentEvent.time
          };

          // Send POST request to your API
          createEvent(event).then(() => history.push("/events"));
        }}
        className="btn btn-primary"
      >
        Create Event
      </button>
    </form>
    </>
  );
};