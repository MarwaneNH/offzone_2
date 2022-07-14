import React from "react";
import Calendar from "./Calendar";

function Agenda() {
  return (
    <div className="agenda">
      <div className="left-bar">
        <div className="titre">
          <h2>Mes Lorem Ipsum</h2>
          <button>
            <img src="../icon/sort.svg" alt="" /> Filter
          </button>
        </div>
        <div className="item-container">
          <div className="container">
            <div className="item">
              <div className="item-title">
                <h3>Lorem Ipsum</h3>
                <div className="time">
                  <img src="../icon/time.svg" alt="" />
                  09:00
                </div>
                <img src="../icon/doctor.svg" alt="" />
              </div>
              <div className="item-content">
                <h3>Moha</h3>
                <span>Lorem Ipsum</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                  fames viverra suspendisse a sed viverra proin vitae. At cursus
                  pulvinar ac est urna.
                </p>

                <div>
                  <button>Lorem</button>
                </div>
              </div>
            </div>
          </div>
          <div className="btns">
            <button className="delete">Lorem Ipsum Lorem</button>
            <button>Lorem Ipsum Lorem</button>
          </div>
        </div>
      </div>
      <div className="agenda-content">
        <div className="nav">
          <div>
            <h2>Mon agenda</h2>
            <button>Button 2</button>
          </div>
          <div>
            <span>Journée</span>
            <span className="activeSpan">Semaine</span>
            <span>Mois</span>
          </div>
        </div>
        <Calendar />
      </div>
    </div>
  );
}

export default Agenda;
