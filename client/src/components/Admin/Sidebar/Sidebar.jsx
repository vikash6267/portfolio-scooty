import React, { useState } from "react";
import { NavLink, useLocation, matchPath, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";

// import { sidebarLinks } from "./sidebarlinks";

import { AiOutlineDashboard } from "react-icons/ai";
import { GiScooter } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";

function Sidebar() {
  const sidebarLinks = [
    {
      id: 1,
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <AiOutlineDashboard />,
    },
    {
      id: 2,
      name: "Add Offer",
      path: "/admin/add-offer",
      icon: <GiScooter />,
    },
    {
      id: 3,
      name: "Add Service",
      path: "/admin/add-service",
      icon: <GiScooter />,
    },
    {
      id: 4,
      name: "All Offers",
      path: "/admin/all-offers",
      icon: <BiSolidOffer />,
    },
    {
      id: 5,
      name: "All Services",
      path: "/admin/all-service",
      icon: <BiSolidOffer />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "200px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      animate={{
        width: isOpen ? "220px" : "45px",
        transition: {
          duration: 0.5,
          type: "spring",
          damping: 12,
        },
      }}
      className="flex flex-col border-r-[1px] border-r-richblack-700 min-h-[calc(100vh-4rem)]   pt-3 gap-10 bg-red-400"
    >
      <div className="flex items-center justify-between text-2xl leading-0 px-2 h-8">
        <AnimatePresence>
          {isOpen && (
            <motion.h1
              variants={showAnimation}
              initial="show"
              aniamte="show"
              exit="hidden"
              className="whitespace-nowrap text-2xl text-blue-200 font-mulish capitalize"
            >
              <div className="flex gap-2">
                {" "}
                <img
                  src="https://i.ibb.co/64ncqHK/logo.png"
                  alt=""
                  width={50}
                  className=" rounded-full"
                />{" "}
                EV
              </div>
            </motion.h1>
          )}
        </AnimatePresence>

        <div>
          <FaBars onClick={toggle} className="cursor-pointer text-white" />
        </div>
      </div>
      {/* <div className="mx-auto my-6 h-[1px] w-10/12 bg-blue-700"></div> */}
      <section className="flex gap-4 flex-col text-xl">
        {sidebarLinks.map((link) => {
          return (
            <NavLink
              to={link.path}
              key={link.id}
              onClick={() => setIsOpen(false)}
              className={`" flex text-black font-mulish items-center gap-2 px-2 py-0 hover:border-r-4 hover:bg-blue-600 hover:transition hover:ease-in-expo " ${
                matchRoute(link?.path) && "bg-pink-400 "
              }`}
            >
              <div title={link.name} className=" text-2xl text-yellow-300">
                {link.icon}
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="show"
                    aniamte="show"
                    exit="hidden"
                    className="whitespace-nowrap text-xl"
                  >
                    {link.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          );
        })}
      </section>

      <div className="flex gap-5 flex-col text-xl"></div>

      <div className="mx-auto my-6 h-[1px] w-10/12 bg-blue-700"></div>
    </motion.div>
  );
}

export default Sidebar;
