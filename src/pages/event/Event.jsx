import React from "react";
import Happening from "../../components/events/Happening";
import { Link } from "react-router-dom";
import EventInfo from "./EventInfo";
import EventTabs from "../../components/events/EventTabs";

const data = [
  { 
    id: 1,
    tabTitle: "Happening",
    text1:'30',
    text2:"September",
    text3:"Salom Mardum heyy ops",
    text4:"Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat"
  },
  { 
    id: 2,
    tabTitle: "Upcoming",
    text1:20,
    text2:"September",
    text3:"Applying Natural Laws to Technology and Society",
    text4:"Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat"
  },

  { 
    id: 3,
    tabTitle: "Experied",
    text1:30,
    text2:"December",
    text3:"YOu caon do it try again",
    text4:"Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat conuat"
  },
 
];

const Event = () => {
  return (
    <div className="">
     <EventTabs data={data}/>
    </div>
  );
};

export default Event;
