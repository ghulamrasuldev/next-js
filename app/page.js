import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-white w-2/5 h-2/5 rounded-xl flex flex-col items-center justify-center pb-16">
        <h1 className="text-4xl text-black my-16">
          Login to your Healthy & Tasty Account
        </h1>
        <div className="w-2/5 flex flex-col items-start">
          <p className="text-black ml-4 my-1">Email</p>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs h-14 w-full self-center"
          />
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <p className="text-black ml-4 my-1">Password</p>
          <input
            type="password"
            placeholder="Your Password"
            className="input input-bordered w-full max-w-xs h-14 w-full self-center"
          />
        </div>
        <button class="btn input-bordered w-full max-w-xs h-14 w-2/5 my-4">
          <Link href="/dashboard">Login</Link>
        </button>
      </div>
    </div>
  );
}
