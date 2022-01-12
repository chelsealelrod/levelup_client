import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { GameContext } from "../game/GameProvider.js";
import { EventContext } from "../event/EventProvider";
import "./Events.css"

export const EventForm = () => {
  const history = useHistory();

  const { games } = useContext(GameContext);
  const { createEvent } = useContext(EventContext);

  const [currentEvent, setCurrentEvent] = useState({  
    gameId: 1,
    title: "",
    description: "",
    date: "",
    time: ""});
  const { getGames } = useContext(GameContext);



  useEffect(() => {
    getGames();
  }, []);

  const changeEventState = (domEvent) => {
    const newEventState = { ...currentEvent };

    newEventState[domEvent.target.name] = domEvent.target.value;
    setCurrentEvent(newEventState);
  };

  return (
    <>
    <form className="eventForm">
      <h2 className="eventForm__title">Schedule New Event</h2>
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
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            required
            autoFocus
            className="form-control"
            value={currentEvent.title}
            onChange={changeEventState}
          />
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
        <label htmlFor="date">Date:</label><br></br>
        <input type="date" id="appt" name="date" onChange={changeEventState}/>
        </div>
    <br></br>
     <div className="form-group">
     <label htmlFor="time">Time:</label><br></br>

     <input type="time" id="appt" name="time" onChange={changeEventState}
            min="09:00" max="18:00" required/>
     
     </div>
      </fieldset>

      {/* Create the rest of the input fields */}

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          const event = {
            gameId: currentEvent.gameId,
            description: currentEvent.description,
            date: new Date(currentEvent.date),
            time: currentEvent.time,
          };

          // Send POST request to your API
          console.log(event)
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