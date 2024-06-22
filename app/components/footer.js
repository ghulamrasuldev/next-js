import Link from "next/link";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-200 p-4 text-center">
      <ul className="flex justify-center">
        <li className="mr-4 text-black">
          <Link href="/privacy-policy">Privacy Policy</Link>
        </li>
        <li className="mr-4 text-black">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="mr-4 text-black">
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
