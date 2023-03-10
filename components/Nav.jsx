import { useRouter } from "next/router";
import requests from "../utils/requests";

const Nav = () => {
  const router = useRouter();
  return (
    <nav>
      <div className="flex px-10 sm:px20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll no-scrollbar overflow-y-auto">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}{" "}
          </h2>
        ))}
      </div>
    </nav>
  );
};
export default Nav;
