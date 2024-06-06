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
  return <h1>Chat</h1>;
};

const ChatBox = () => {
  return (
    <div className="max-w-[1000px] w-full mx-auto">
      <h1 className="text-xl font-semibold text-gray-700 my-10">Chat Box</h1>
      <div className="border border-black flex">
        <div className="w-[20%]">
          <Search />
          <Select />
          <UserList />
        </div>
        <div className="w-[80%]">
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
