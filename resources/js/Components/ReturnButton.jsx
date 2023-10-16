import { Link } from "@inertiajs/react";

export default function ReturnButton({lang}) {
    return (
        <Link
            className="z-30 absolute left-2 top-2 rounded-md shadow bg-blue-800 font-bold tracking-wider text-white  px-4 p-2"
            href={lang.link.url}
        >
            {"<< " + lang.link.name}
        </Link>
    );
}
