"use client";
import { AiOutlineAudio } from "react-icons/ai";
import { LuSend } from "react-icons/lu";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scrollarea";
import { Separator } from "@/components/ui/separator";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    value: "kohndoe",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    value: "janedoe",
  },
  {
    id: 3,
    name: "Bob Smith",
    email: "bob@example.com",
    value: "bobsmith",
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alice@example.com",
    value: "alicejohnson",
  },
  {
    id: 5,
    name: "Mike Brown",
    email: "mike@example.com",
    value: "mikebrown",
  },
  {
    id: 6,
    name: "Emily Davis",
    email: "emily@example.com",
    value: "emilydavis",
  },
  {
    id: 7,
    name: "Sarah Lee",
    email: "sarah@example.com",
    value: "sarahlee",
  },
  {
    id: 8,
    name: "Kevin White",
    email: "kevin@example.com",
    value: "kevinwhite",
  },
  {
    id: 9,
    name: "Lisa Nguyen",
    email: "lisa@example.com",
    value: "lisanguyen",
  },
  {
    id: 10,
    name: "David Kim",
    email: "david@example.com",
    value: "davidkim",
  },
];
const messages = [
  {
    id: 1,
    text: "Hello, how are you?",
    sender: "Me",
  },
  {
    id: 2,
    text: "I'm good, thanks. How about you?",
    sender: "John Doe",
  },
  {
    id: 3,
    text: "I'm good too. What's up?",
    sender: "Me",
  },
];

const SelectBox = () => {
  return (
    <div className="mx-auto w-[98%]">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

const Search = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="mx-auto w-[98%]">
      <Popover
        open={open}
        onOpenChange={setOpen}
      >
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value
              ? users.find((user) => user.value === value)?.name
              : "Search ..."}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[90%] p-0 mx-auto">
          <Command>
            <CommandInput placeholder="Search.." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {users.map((user) => (
                  <CommandItem
                    key={user.value}
                    value={user.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === user.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {user.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

const UserList = () => {
  return (
    <div className="pb-4 ">
      <ScrollArea className="h-[500px] rounded-md border pe-2">
        <ul
          className=""
          suppressHydrationWarning
        >
          {users.map((user) => (
            <>
              <Link
                key={user.id}
                href="#"
                className="m-0 "
              >
                <li className="text-left px-2 py-1 bg-slate-200 mb-2">
                  <b>{user.name}</b> <br />
                  {user.email}
                </li>
              </Link>
            </>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

const Messages = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col gap-4 w-full px-2 mt-16">
      <ScrollArea className="max-h-[500px] h-full">
        {data.map((message: any) => (
          <div
            key={message.id}
            className={`flex w-full mb-2 ${
              message.sender === "Me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-2xl px-3 py-2 ${
                message.sender === "Me"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

const Chat = () => {
  const [file, setFile] = useState<File | null>(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, how are you?",
      sender: "Me",
    },
    {
      id: 2,
      text: "I'm good, thanks. How about you?",
      sender: "John Doe",
    },
    {
      id: 3,
      text: "I'm good too. What's up?",
      sender: "Me",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      if (file) {
        // Upload file logic here
        console.log("File uploaded successfully!");
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: prevMessages.length + 1,
            text: `Image uploaded: ${file.name}`,
            sender: "Me",
          },
        ]);
        console.log("Message Sent", { messages });
        setFile(null);
        alert("Image Uploaded");
        setFile(null);
      } else {
        alert("Please, Upload Image!");
      }
    }
  };

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    // Logic to send message
    if (newMessage) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          text: newMessage,
          sender: "Me",
        },
      ]);
    }
    console.log("Message Sent", { messages });
    setNewMessage("");
  };

  return (
    <div className="flex flex-col items-end justify-end h-full gap-4 py-2 relative">
      <div className="absolute w-full bg-white top-0 text-left p-2 shadow-lg shadow-slate-200 rounded-md z-10">
        <h4 className="text-lg font-semibold">John Doe</h4>
        <p className="text-xs">Online</p>
      </div>
      <Messages data={messages} />
      <form
        onSubmit={handleSendMessage}
        className="w-full"
      >
        <div className="w-full flex gap-2 items-center">
          <div className="bg-white border border-black rounded-md py-2 px-3 flex gap-1 items-center w-[95%]">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="w-[94%] outline-none focus:outline-none"
              placeholder="Type a message..."
            />
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer w-[3%]"
            >
              <MdOutlineAddPhotoAlternate />
            </label>
            <input
              type="file"
              // onChange={handleAudio}
              className="hidden"
              id="audio-upload"
            />
            <label
              htmlFor="audio-upload"
              className="cursor-pointer w-[3%]"
            >
              <AiOutlineAudio />
            </label>
          </div>
          <button
            className="w-[5%] flex justify-center items-center"
            type="submit"
          >
            <LuSend className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

const ChatBox = () => {
  return (
    <div className="max-w-[1000px] w-full mx-auto">
      <h1 className="text-xl font-semibold text-gray-700 my-10">Chat Box</h1>
      <div className="border border-black rounded-md flex p-2">
        <div className="w-[25%] flex flex-col gap-1 justify-center">
          <Search />
          <SelectBox />
          <UserList />
        </div>
        <div className="w-[75%] p-2 bg-white">
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
