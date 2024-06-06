import { AiOutlineAudio } from "react-icons/ai";
import { LuSend } from "react-icons/lu";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const Select = () => {
  return <h1>Select Form</h1>;
};

const Search = () => {
  return <h1>Search Form</h1>;
};

const UserList = () => {
  return <h1>User List</h1>;
};

const Chat = () => {
  return (
    <div className="">
      <div className="w-full flex gap-2 items-center">
        <div className="bg-white border border-black rounded-md py-2 px-3 flex gap-1 items-center w-[95%]">
          <input
            type="text"
            className="w-[95%] outline-none focus:outline-none"
          />
          <button className="w-[2.5%]">
            <MdOutlineAddPhotoAlternate />
          </button>
          <button className="w-[2.5%]">
            <AiOutlineAudio />
          </button>
        </div>
        <button className="w-[5%]">
          <LuSend />
        </button>
      </div>
    </div>
  );
};

const ChatBox = () => {
  return (
    <div className="max-w-[1000px] w-full mx-auto">
      <h1 className="text-xl font-semibold text-gray-700 my-10">Chat Box</h1>
      <div className="border border-black flex">
        <div className="w-[25%]">
          <Search />
          <Select />
          <UserList />
        </div>
        <div className="w-[75%] p-2 bg-gray-200">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Welcome to my website!</h1>
      <ChatBox />
    </div>
  );
}
