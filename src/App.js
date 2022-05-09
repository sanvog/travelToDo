import "./styles.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import Eventlist from "./components/Eventlist";

export default function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [events, setEvents] = useState([
    { title: "Vilnius dance festival", id: 1 },
    { title: "Barock concert", id: 2 },
    { title: "Visit museum", id: 3 },
    { title: "Horse riding", id: 4 },
    { title: "Drawing class", id: 5 },
    { title: "Michelin star restaurant", id: 6 }
  ]);

  //Filter through the array first to get the latest state and then add the new filtering.
  //I named it previousEvents here.
  const handleClick = (id) => {
    setEvents((previousEvents) => {
      return previousEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const subTitle = "Things I want to do in Vilnius today";

  return (
    <div className="App">
      <Title title="My daily travel schedule" subtitle={subTitle} />
      {!showEvents && (
        <div>
          <button className="show" onClick={() => setShowEvents(true)}>
            show events
          </button>
        </div>
      )}
      {showEvents && (
        <div>
          <button className="show" onClick={() => setShowEvents(false)}>
            hide events
          </button>
        </div>
      )}
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <h2>Do you want free tickets to the Opera?</h2>
          <p> If so, say hi from Vilnius at reception </p>
        </Modal>
      )}
      {showEvents && <Eventlist events={events} handleClick={handleClick} />}
    </div>
  );
}
