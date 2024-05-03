import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";

export default function TicketCard({ticket}) {
  const formatTimestamp = (stamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute:"2-digit",
      hour12: true
    }
    const date = new Date(stamp)
    const formatedDate = date.toLocaleString("en-US", options)

    return formatedDate
  }
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 ,-2 m-1">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority}/>
        <div className="ml-auto">
          <DeleteBlock id = {ticket._id} />
        </div>
      </div>
      <h4>{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{ticket.description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
            <p className="text-xs my-1">{formatTimestamp(ticket.createdAt)}</p>
          <ProgressBar progress={ticket.progress}/>
        </div>
        <div className="ml-auto flex items-end">

        <StatusDisplay stat={ticket.status}/>
        </div>
      </div>
    </div>
  );
}
