import { MdOutlineFlightTakeoff, MdOutlineAttractions } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { BiTaxi,BiBed } from "react-icons/bi";

export const listArray = [
  {
    id: 1,
    name: "Stays",
    icons: <BiBed size={16}/>,
    path: "/stays",
    isActive: true,
  },
  {
    id: 2,
    name: "Flights",
    icons: <MdOutlineFlightTakeoff />,
    path: "/flights",
    isActive: false,
  },
  {
    id: 3,
    name: "Car rentals",
    icons: <AiFillCar />,
    path: "/car-rentals",
    isActive: false,
  },
  {
    id: 4,
    name: "Attractions",
    icons: <MdOutlineAttractions />,
    path: "/attractions",
    isActive: false,
  },
  {
    id: 5,
    name: "Airport taxis",
    icons: <BiTaxi />,
    path: "/airport-taxis",
    isActive: false,
  },
];
