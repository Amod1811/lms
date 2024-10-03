import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";

const Cart = () => {
  const [cartItems, setCartItems] = useState(0); // Cart items count
  const [isDropdownOpen, setDropdownOpen] = useState(false); // For profile dropdown

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="d-flex align-items-center">
      {/* Cart Icon with item count */}
      <div className="position-relative">
        <IoMdCart size={28} />
        <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center position-absolute" style={{ top: "-10px", right: "-10px" }}>
          <span>{cartItems}</span>
        </div>
      </div>

      {/* User Profile Icon */}
      <div className="dropdown ms-3">
        <button className="btn p-0" onClick={toggleDropdown}>
          <FaCircleUser size={28} />
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu dropdown-menu-end show mt-3">
            <div className="dropdown-item-text">
              <strong>Khushi Diwan</strong>
              <p className="small mb-0">khushi@example.com</p>
            </div>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Edit Profile</a>
            <a className="dropdown-item" href="#">Account Settings</a>
            <a className="dropdown-item text-danger" href="#">Sign Out</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
