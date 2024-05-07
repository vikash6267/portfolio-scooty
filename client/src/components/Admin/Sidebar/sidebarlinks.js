import { AiOutlineDashboard } from "react-icons/ai";
import { GiScooter } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";

export const sidebarLinks = [
  {
    id: 1,
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <AiOutlineDashboard />
  },
  {
    id: 2,
    name: "Add Offer",
    path: "/admin/add-offer",
    icon: <GiScooter />
  },
  {
    id: 3,
    name: "All Offers",
    path: "/dashboard/all-offers",
    icon: <BiSolidOffer />
  },
];
