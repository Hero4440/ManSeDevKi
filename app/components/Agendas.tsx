import React, { useState } from "react";
import pgoto from "../images/agendas/1.png";

const Agendas = ({ events }) => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const toggleExpand = (index) => {
    if (expandedEvent === index) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(index);
    }
  };

  return (
    <div className="max-w-4xl mx-auto text-center bg-BED1CF">
      <h3 className="text-2xl md:text-3xl font-black mb-6 text-center text-gray-700 font-sans">
        Event details
      </h3>
      <div className="mb-4 text-gray-500 font-head md:text-lg font-medium">
        28 Feb 2024 - 1 Mar 2024
      </div>
      <div className="max-w-4xl mx-auto text-center px-4 md:px-0">
        {events.map((event, index) => (
          <div key={index} className="mb-6">
            <div className="flex items-center justify-between">
              <i
                className={
                  expandedEvent === index
                    ? "bx bxs-chevron-down text-2xl cursor-pointer mr-2"
                    : "bx bxs-chevron-right text-2xl cursor-pointer mr-2"
                }
                onClick={() => toggleExpand(index)}
              />
              <div className="flex items-center text-xl px-4 font-black w-full bg-white rounded p-4">
                <span className="text-gray-400 w-1/3">{event.name}</span>
                <span className="text-gray-700 w-1/3">{event.date}</span>
                <span className="text-gray-700 w-1/3">{event.location}</span>
              </div>
            </div>
            {expandedEvent === index && (
              <div className="mt-2 text-lg text-justify text-gray-700 font-serif md:flex items-center">
                {event.photo && (
                  <img
                    src={event.photo}
                    alt={`Event ${index + 1}`}
                    className="mt-4 mr-4 md:flex-shrink-0 md:w-200 md:h-250"
                  />
                )}
                <div>{event.description}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agendas;
