import React from "react";
import Happening from "../../components/events/Happening";
import { Link } from "react-router-dom";
import EventInfo from "./EventInfo";

const data = [
  { id: 1, title: "Happening" },
  { id: 2, title: "Upcomming" },
  { id: 3, title: "Expared" },
];

const Event = () => {
  return (
    <div className="container mx-auto bg-red-500">
      {data.length > 0 ? (
        <div className="flex justify-evenly items-center">
          {data.map((elem, id) => {
            return (
              <Link key={elem.id} to={`/event/${elem.id}`}>
                <p>{elem.title}</p>
              </Link>
            );
          })}
        </div>
      ) : null}
     
    </div>
  );
};

export default Event;
