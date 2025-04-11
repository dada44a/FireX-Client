import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl">FireX</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Movies</Link>
          </li>
          <li>
            <details>
              <summary>User</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link href={"/user/settings"}>Settings</Link>
                </li>
                <li>
                  <Link href={"/user/rewards"}>Reward</Link>
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
