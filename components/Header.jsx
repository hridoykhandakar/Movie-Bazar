import {
  HomeIcon,
  BoltIcon,
  CheckBadgeIcon,
  CircleStackIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className=" flex flex-col items-center  sm:flex-row justify-between h-auto m-5">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title={"HOME"} Icon={HomeIcon} />
        <HeaderItem title={"TRENDING"} Icon={BoltIcon} />
        <HeaderItem title={"VERIFIED"} Icon={CheckBadgeIcon} />
        <HeaderItem title={"COLLECTIONS"} Icon={CircleStackIcon} />
        <HeaderItem title={"SEARCH"} Icon={MagnifyingGlassIcon} />
        <HeaderItem title={"ACCOUNT"} Icon={UserIcon} />
      </div>
      <Image
        className="block text-center"
        alt="logo"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
};
export default Header;
