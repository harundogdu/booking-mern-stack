import { MdOutlineFlightTakeoff, MdOutlineAttractions } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { BiTaxi, BiBed } from "react-icons/bi";

export const listArray = [
  {
    id: 1,
    name: "Stays",
    icons: <BiBed size={16} />,
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

export const featuredItems = [
  {
    id: 1,
    img: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    title: "Hotels",
    subtitle: "877.065 hotels",
  },
  {
    id: 2,
    img: "https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
    title: "Apartments",
    subtitle: "906.009 apartments",
  },
  {
    id: 3,
    img: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
    title: "Resorts",
    subtitle: "17.038 resorts",
  },
  {
    id: 4,
    img: "https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
    title: "Villas",
    subtitle: "52.038 villas",
  },
];

export const imgArray = [
  {
    id: 1,
    img: "https://t-cf.bstatic.com/xdata/images/city/540x270/613087.webp?k=68ce65e52a527819c35c13c3d0e8a925263a71aab15a89577b4083c021855481&o=",
    title: "Paris",
    subTitle: "7,568 tesis",
  },
  {
    id: 2,
    img: "https://t-cf.bstatic.com/xdata/images/city/540x270/613104.webp?k=6e9fa0c6cb25472c6a843ddc1a14d93cf7a7306a4111a74052af94d75c69b03e&o=",
    title: "Roma",
    subTitle: "1,568 tesis",
  },
  {
    id: 3,
    img: "https://t-cf.bstatic.com/xdata/images/city/540x270/976538.webp?k=19a2487e30f31349e54aaf32d509121d81e2e31eee5b820c7c98576a4426d997&o=",
    title: "Amsterdam",
    subTitle: "3,368 tesis",
  },
  {
    id: 4,
    img: "https://t-cf.bstatic.com/xdata/images/city/540x270/613094.webp?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o=",
    title: "Londra",
    subTitle: "12,566 tesis",
  },
  {
    id: 5,
    img: "https://t-cf.bstatic.com/xdata/images/city/540x270/968314.webp?k=0e0d712f666150594683eeeea60d7e3afdaab51286a9023f15f648ff3fbb0d6c&o=",
    title: "Barselona",
    subTitle: "3,568 tesis",
  },
];

export const hotelArray = [
  {
    id: 1,
    title: "Hilton Garden Inn",
    city: "Paris",
    price: 105,
    point: 8.5,
    img: "https://t-cf.bstatic.com/xdata/images/hotel/square200/373325864.webp?k=865955482db50525feed534f2832de16c89822cda1774919a162df68af5193a1&o=",
  },
  {
    id: 2,
    title: "Hotel de Ville",
    city: "Paris",
    price: 105,
    point: 8.5,
    img: "https://t-cf.bstatic.com/xdata/images/hotel/square200/316219385.webp?k=3ae282b3bccaa27adb63b2fa402da99a3bc737c4fd9dc66b1c89cb0f09b79dfa&o=",
  },
  {
    id: 3,
    title: "Hotel de Milano",
    city: "Milano",
    price: 205,
    point: 9.5,
    img: "https://t-cf.bstatic.com/xdata/images/hotel/square200/64331064.webp?k=e287f616ccfba9a2a70ddc1a634964c57b322de157642a638deefad84c24b0cf&o=",
  },

  {
    id: 4,
    title: "Hotel de Londra",
    city: "Londra",
    price: 225,
    point: 9.8,
    img: "https://t-cf.bstatic.com/xdata/images/hotel/square200/351766364.webp?k=4d456207b96340af4355e58ebd5b9331152a87960ef870a93f450815b600c149&o=",
  },
];
