import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Settings, Bell, Search, Home, Newspaper } from "lucide-react";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [searchTerm, setSearchTerm] = useState("");

  // Navigation items array
  const navigationItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <Home className="w-6 h-6" />,
    },
    {
      name: "News",
      path: "/news",
      icon: <Newspaper className="w-6 h-6" />,
    },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  // Filter navigation items based on search term
  const filteredItems = navigationItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-start w-64 h-screen bg-white border-r border-[#dde1e6] p-6 gap-4">
      <div className="flex items-center justify-center w-full px-4 py-3">
        <img
          src={logo}
          alt="Company Logo"
          className="h-10 w-auto object-contain hover:opacity-90 transition-opacity"
        />
      </div>

      {/* Search Field */}
      <div className="relative w-full mb-2">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
        <Input
          type="text"
          placeholder="Search for..."
          className="w-full h-12 pl-10 bg-gray-100 border-b border-gray-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col w-full gap-1">
        {filteredItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-2 px-2 py-3 rounded-lg cursor-pointer ${
              activeItem === item.name
                ? "bg-[#1D7D0D] text-white"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleItemClick(item.name)}
          >
            {item.icon}
            <span className="text-base font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
