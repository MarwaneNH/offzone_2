import React, { useEffect, useRef } from "react";

function Navbar() {
  const ul = useRef();
  const path = document.location.href;

  console.log(path.slice(-1));

  useEffect(() => {
    const allUlBtns = [...ul.current.querySelectorAll("button")];
    allUlBtns.forEach((x) => {
      if (x.parentElement.parentElement.href === path) {
        x.classList.add("active-btn");
      } else {
        x.classList.remove("active-btn");
      }
    });
  }, [path]);

  const activateBtn = (e) => {
    const allUlBtns = [...ul.current.querySelectorAll("button")];
    allUlBtns.forEach((x) => x.classList.remove("active-btn"));
    e.target.classList.add("active-btn");
  };

  return (
    <header>
      <nav>
        <span>Logo</span>
        <ul ref={ul}>
          <a href="/agenda">
            <li>
              <button onClick={activateBtn}>
                <svg
                  id="Calque_1"
                  data-name="Calque 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 23 23"
                >
                  <path
                    className="cls-1"
                    d="M18.69,2.76H18V2.09a.77.77,0,1,0-1.54,0v.67h-10V2.09A.77.77,0,1,0,5,2.09v.67H4.31A2.93,2.93,0,0,0,1.39,5.69V18.63a2.92,2.92,0,0,0,2.92,2.92H18.69a2.92,2.92,0,0,0,2.92-2.92V5.69A2.93,2.93,0,0,0,18.69,2.76ZM4.31,4.3H18.69a1.38,1.38,0,0,1,1.38,1.39v.67H2.93V5.69A1.38,1.38,0,0,1,4.31,4.3ZM18.69,20H4.31a1.38,1.38,0,0,1-1.38-1.38V7.89H20.07V18.63A1.38,1.38,0,0,1,18.69,20Z"
                  />
                  <path
                    className="cls-1"
                    d="M13.3,9.28a1.08,1.08,0,1,0,1.07,1.08A1.08,1.08,0,0,0,13.3,9.28Z"
                  />
                  <path
                    className="cls-1"
                    d="M16.89,9.28A1.08,1.08,0,1,0,18,10.36,1.08,1.08,0,0,0,16.89,9.28Z"
                  />
                  <path
                    className="cls-1"
                    d="M13.3,12.88A1.08,1.08,0,1,0,14.37,14,1.07,1.07,0,0,0,13.3,12.88Z"
                  />
                  <path
                    className="cls-1"
                    d="M16.89,12.88A1.08,1.08,0,1,0,18,14,1.08,1.08,0,0,0,16.89,12.88Z"
                  />
                  <path
                    className="cls-1"
                    d="M6.11,12.88A1.08,1.08,0,1,0,7.19,14,1.07,1.07,0,0,0,6.11,12.88Z"
                  />
                  <path
                    className="cls-1"
                    d="M9.7,12.88A1.08,1.08,0,1,0,10.78,14,1.08,1.08,0,0,0,9.7,12.88Z"
                  />
                  <path
                    className="cls-1"
                    d="M6.11,16.47a1.08,1.08,0,0,0,0,2.16,1.08,1.08,0,0,0,0-2.16Z"
                  />
                  <path
                    className="cls-1"
                    d="M9.7,16.47a1.08,1.08,0,1,0,1.08,1.08A1.08,1.08,0,0,0,9.7,16.47Z"
                  />
                  <path
                    className="cls-1"
                    d="M13.3,16.47a1.08,1.08,0,1,0,1.07,1.08A1.08,1.08,0,0,0,13.3,16.47Z"
                  />
                </svg>
              </button>
            </li>
          </a>
          <a href="/document">
            <li>
              <button
                onClick={activateBtn}
                className={`${path.slice(-1) === "/" ? "active-btnn" : ""} newNotif`}
              >
                <svg
                  id="Calque_1"
                  data-name="Calque 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 23 23"
                >
                  <path
                    className="cls-1"
                    d="M15.41,1.26a1.91,1.91,0,0,0-.6-.4,1.86,1.86,0,0,0-.7-.14H9.88A2.7,2.7,0,0,0,7.19,3.41V5H4.85A2.75,2.75,0,0,0,3,5.82a2.69,2.69,0,0,0-.79,1.91V19.59a2.68,2.68,0,0,0,2.65,2.69h8.35a2.68,2.68,0,0,0,2.65-2.69V18H18.2a2.67,2.67,0,0,0,2.64-2.7V7.55a1.86,1.86,0,0,0-.53-1.3Zm3.45,5.57H15.28a.55.55,0,0,1-.38-.16.58.58,0,0,1-.17-.38V2.63ZM9.7,6.94l4.13,4.2H10.25A.53.53,0,0,1,9.87,11a.52.52,0,0,1-.17-.38Zm3.46,13.9H4.81a1.24,1.24,0,0,1-1.22-1.25V7.73A1.29,1.29,0,0,1,4,6.84a1.22,1.22,0,0,1,.88-.37H8.27v4.14A2,2,0,0,0,8.85,12a2,2,0,0,0,1.39.59h4.14v7A1.24,1.24,0,0,1,13.16,20.84Zm5-4.31H15.81V11.87h0a1.85,1.85,0,0,0-.53-1.29l-4.9-5a1.84,1.84,0,0,0-.59-.41A2,2,0,0,0,9.08,5H8.62V3.42A1.29,1.29,0,0,1,9,2.53a1.22,1.22,0,0,1,.88-.37H13.3V6.3a2,2,0,0,0,.58,1.38,2,2,0,0,0,1.39.59h4.14v7A1.24,1.24,0,0,1,18.2,16.53Z"
                  />
                </svg>
              </button>
            </li>
          </a>
          <li>
            <button onClick={activateBtn} className="newNotif">
              <svg
                id="Calque_1"
                data-name="Calque 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23 23"
              >
                <path
                  className="cls-1"
                  d="M11.5,2.72A8.78,8.78,0,0,0,9.79,20.11a8.29,8.29,0,0,0,1.72.17,8.78,8.78,0,0,0,8.77-8.78A8.77,8.77,0,0,0,11.5,2.72ZM17.34,15.4A7,7,0,0,1,4.61,12.87a7,7,0,0,1,3-7.21,7,7,0,0,1,9.74,9.74Z"
                />
                <path
                  className="cls-1"
                  d="M13,6.6a3.41,3.41,0,0,0-1.53-.27A3.4,3.4,0,0,0,9.38,7a2.9,2.9,0,0,0-1.16,2,.75.75,0,0,0,.71.79.78.78,0,0,0,.82-.7,1.51,1.51,0,0,1,.6-.92,1.78,1.78,0,0,1,1.16-.35,2.2,2.2,0,0,1,.85.12c.89.42.89,1,.89,1.15,0,.71-.38,1-1.3,1.65a2.89,2.89,0,0,0-1.44,2.51.77.77,0,0,0,1.53,0,1.38,1.38,0,0,1,.77-1.24,3.42,3.42,0,0,0,2-2.92A2.78,2.78,0,0,0,13,6.6Z"
                />
                <path
                  className="cls-1"
                  d="M11.23,14.73a.9.9,0,1,0,.9.9A.9.9,0,0,0,11.23,14.73Z"
                />
              </svg>
            </button>
          </li>
          <li>
            <button onClick={activateBtn}>
              <svg
                id="Calque_1"
                data-name="Calque 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23 23"
              >
                <path
                  className="cls-1"
                  d="M19.77,15.33h0l-.22-.26c-1-1.2-1.59-1.92-1.59-5.31,0-3.07-1.23-5.07-3.79-6.12a2.88,2.88,0,0,0-2.67-2.2A2.93,2.93,0,0,0,8.8,3.65C6.27,4.69,5,6.69,5,9.76c0,3.39-.6,4.11-1.59,5.31l-.22.26A1.6,1.6,0,0,0,3,17,1.68,1.68,0,0,0,4.56,18H7.91a3.59,3.59,0,1,0,7.18,0h3.35A1.68,1.68,0,0,0,20,17,1.6,1.6,0,0,0,19.77,15.33ZM13,19.49a2.19,2.19,0,0,1-3,0A2.13,2.13,0,0,1,9.34,18h4.32A2.13,2.13,0,0,1,13,19.49Zm5.66-3.08a.24.24,0,0,1-.24.12H4.56a.26.26,0,0,1-.24-.12.17.17,0,0,1,0-.17L4.56,16c1.07-1.29,1.92-2.31,1.92-6.22C6.48,6.57,8,5.53,9.35,5A1.51,1.51,0,0,0,10.21,4,1.47,1.47,0,0,1,11.5,2.88,1.47,1.47,0,0,1,12.79,4a1.51,1.51,0,0,0,.86.94c1.34.55,2.88,1.59,2.88,4.78,0,3.91.84,4.93,1.91,6.22l.22.26A.17.17,0,0,1,18.68,16.41Z"
                />
              </svg>
            </button>
          </li>
          <li>
            <div className="user-nav">
              <img src="../icon/user.svg" alt="user" />
              <p>Full name Lorem</p>
              <img src="../icon/flech.svg" alt="user" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
