import { Link } from "@inertiajs/react";

export default function MenuLink({text, href}) {
  return (
    <Link className="p-2 px-4 md:px-8 border border-red-800 text-red-800 text-md rounded hover:bg-black bg-opacity-50 transition-all hover:scale-105" href={href}>{text}</Link>
  )
}