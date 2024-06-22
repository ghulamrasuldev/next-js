import Link from "next/link";
import React from "react";

export default function Dashboard() {
  return (
    <div className="text-bold h-96 w-full">
      <h1 className="text-4xl text-black">Welcome to Dashboard</h1>
      <button class="btn w-64 rounded-full">
        <Link href="/">Go Back</Link>
      </button>
    </div>
  );
}
