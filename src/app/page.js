import TicketCard from "@/components/TicketCard";
import Ticket from "@/models/Ticket";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-store",
    });
    console.log('fetched tickets');
    return res.json();
  } catch (error) {
    console.log(`Error fetching tickets: ${error}`);
    return []; // Return an empty array if there's an error
  }
};


export default async function Home() {
  const { Tickets } = await getTickets();
  // console.log(Tickets)

  const uniqueCategories = [
    ...new Set(Tickets?.map(({ category }) => category)),
  ];
  return (
    <div className="p-5">
      <div>
        {Tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div className="mb-4" key={categoryIndex}>
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {Tickets.filter((ticket) => ticket.category === uniqueCategory).map((filteredTicket, _index) => (
                  <TicketCard id={_index} key={_index} ticket={filteredTicket} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
