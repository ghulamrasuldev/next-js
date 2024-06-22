import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <div className="py-8 bg-white">
      <ul className="flex justify-around px-96">
        <li className="mr-4 text-black">
          <Link href="/privacy-policy">Home</Link>
        </li>
        <li className="mr-4 text-black">
          <Link href="/contact">Recipes</Link>
        </li>
        <li className="mr-4 text-black">
          <Link href="/terms-and-conditions">Create Meal Plan</Link>
        </li>
        <li className="mr-4 text-black">
          <Link href="/terms-and-conditions">About Us</Link>
        </li>
        <li className="mr-4 text-black">
          <Link href="/terms-and-conditions">Contact Us</Link>
        </li>
      </ul>
      {/* <ThemeToggle /> */}
    </div>
  );
}
