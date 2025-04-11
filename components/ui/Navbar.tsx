import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">FireX</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Movies</a>
          </li>
          <li>
            <details>
              <summary>User</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Reward</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
