import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const labourer = useSelector((state) => state.user.user);
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/orders/calendar/${labourer._id}`
        );
        const result = await response.json();
        if (result.success) {
          // Transform the data to FullCalendar events format
          const events = result.calendarData.map((event) => ({
            id: event.id,
            title: event.title,
            start: `${event.date}`,
            end: `${event.date}`, // You might want to set the end time as well
          }));
          setCalendarEvents(events);
        } else {
          console.error("Error fetching calendar data:", result.message);
        }
      } catch (error) {
        console.error("Error fetching calendar data:", error);
      }
    };

    fetchData();
  }, [labourer._id, calendarEvents]);

  //   console.log(new Date(`${calendarEvents.serviceDate}T${calendarEvents.serviceTime}`));

//   console.log(new Date(`${calendarEvents.date}T${calendarEvents.time}`))
//   console.log(calendarEvents)

  return (
    <div>
      <header>
        {/* Sidebar */}
        <Sidebar />
        {/* Navbar */}
        <Navbar />
        {/* Navbar */}
      </header>
      {/*Main layout*/}
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4">
          <Calendar
            localizer={localizer}
            events={calendarEvents} // Use calendarEvents instead of events
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>
      </main>
    </div>
  );
};
export default MyCalendar;
