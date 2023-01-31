// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from "react-icons/fa";
// import images
import AboutImg from "../src/assets/img/about/plate.png";
import ModelWhiteImg from "../src/assets/img/model-white.png";
import ModelBlackImg from "../src/assets/img/model-black.png";
import MenuImg1 from "../src/assets/img/menu/1.jpg";
import MenuImg2 from "../src/assets/img/menu/2.jpeg";
import MenuImg3 from "../src/assets/img/menu/3.jpg";
import MenuImg4 from "../src/assets/img/menu/4.jpg";
import SignatureImg from "../src/assets/img/team/signature.png";
import ChefImg from "../src/assets/img/team/chef.png";
import Avatar1 from "../src/assets/img/testimonial/avatar1.png";
import Avatar2 from "../src/assets/img/testimonial/avatar2.png";
import Avatar3 from "../src/assets/img/testimonial/avatar3.png";

export const navData = [
  { href: "/", name: "home" },
  { href: "/", name: "about" },
  { href: "/", name: "menu" },
  { href: "/", name: "team" },
  { href: "/", name: "testimonials" },
  { href: "/", name: "book a table" },
  { href: "/", name: "contact" },
];

export const heroData = {
  pretitle: "Nothing brings together like",
  title: "Bistro Cafe",
  subtitle: "Satisfy your sweet tooth with our generous cookie cup. ",
  btnText: "Order your cookie cup",
};

export const socialData = [
  { href: "/", icon: <FaYoutube /> },
  { href: "/", icon: <FaFacebookF /> },
  { href: "/", icon: <FaInstagram /> },
  { href: "/", icon: <FaPinterestP /> },
  { href: "/", icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: "our story",
  title: "who we are",
  subtitle:
    "Step into the world of culinary delight at Bistro Restaurant. Our menu is crafted with the finest ingredients and expertly prepared by our talented chefs. From savory entrees to decadent desserts, every dish is a celebration of flavor and technique. Join us for a truly memorable dining experience, surrounded by the warm ambiance of our elegant setting. ",
  btnText: "Order your cookie cup",
  image: AboutImg,
};

export const menuData = {
  title: "The right cookie cup for you",
  subtitle: "view all menu",
  modelImg: ModelWhiteImg,
  btnText: "view complete menu",
  menuItems: [
    {
      image: MenuImg1,
      name: "Classic cookie",
      price: "$0.99",
      description: "Our classical cookie cup for everyone",
    },
    {
      image: MenuImg2,
      name: "VIP cookie",
      price: "$1.49",
      description: "Add style to the old generation",
    },
    {
      image: MenuImg3,
      name: "Super cookie",
      price: "$1.99",
      description: "Add more sugar to your heart",
    },
    {
      image: MenuImg4,
      name: "Love cookie",
      price: "$1.20",
      description: "Share with the one you love the most",
    },
  ],
};

export const teamData = {
  pretitle: "our team",
  title: "meet our chef",
  sub1: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.",
  sub2: "Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.",
  name: "Antonio Rodriguez",
  occupation: "executive chef",
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: "1500+ statisfied clients",
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar1,
      name: "Rick Thompson",
      occupation: "CEO of Delightful",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar2,
      name: "John Doe",
      occupation: "CEO of Delightful",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar3,
      name: "Henry A.",
      occupation: "CEO of Delightful",
    },
  ],
};

export const reservationData = {
  title: "booking form",
  subtitle:
    "Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.",
  modelImg: ModelBlackImg,
  btnText: "make a reservation",
};

export const newsletterData = {
  title: "join our newsletter",
  subtitle: "Get latest news & updates in your inbox.",
  placeholder: "Subscribe our delicious dishes",
  btnText: "subscribe now",
};

export const footerData = {
  contact: {
    title: "contact location",
    address: "Parque Montalvo, Ambato, Ecuador",
    phone: "+593995426348",
  },
  hours: {
    title: "working hours",
    program: [
      {
        days: "monday - friday",
        hours: "09:00 AM - 10:00 PM",
      },
      {
        days: "saturday - sunday",
        hours: "09:00 AM - 11:00 PM",
      },
    ],
  },
  social: {
    title: "social network",
    icons: [
      { href: "/", icon: <FaYoutube /> },
      { href: "/", icon: <FaFacebookF /> },
      { href: "/", icon: <FaInstagram /> },
      { href: "/", icon: <FaPinterestP /> },
      { href: "/", icon: <FaDiscord /> },
    ],
  },
};
