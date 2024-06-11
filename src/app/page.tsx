"use client";
import { AiOutlineAudio } from "react-icons/ai";
import { LuCircleDot, LuSend } from "react-icons/lu";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import TextareaAutosize from "react-textarea-autosize";

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
import { GoDotFill } from "react-icons/go";
import moment from "moment";
import { timeStamp } from "console";

const users = [
  {
    id: 1,
    name: "John Doe",
    value: "kohndoe",
    position: "Manager",
    lastMessage: "I Want to talk about my issue",
    timeStamp: "2024-06-08T10:21:54.439+00:00",
  },
  {
    id: 2,
    name: "Jane Doe",
    value: "janedoe",
    position: "Developer",
    lastMessage: "I Want to talk about my issue",
    timeStamp: "2024-06-11T09:18:54.439+00:00",
  },
  {
    id: 3,
    name: "Bob Smith",
    value: "bobsmith",
    position: "Designer",
    lastMessage: "I Want to talk about my issue",
    timeStamp: "2024-06-11T01:21:54.439+00:00",
  },
  {
    id: 4,
    name: "Alice Johnson",
    value: "alicejohnson",
    position: "QA",
    lastMessage: "I Want to talk about my issue",
    timeStamp: "2024-06-10T10:21:54.439+00:00",
  },
  {
    id: 5,
    name: "Mike Brown",
    value: "mikebrown",
    position: "DevOps",
    lastMessage: "I Want to talk about my issue",
    timeStamp: "2024-06-11T10:21:54.439+00:00",
  },
  {
    id: 6,
    name: "Emily Davis",
    value: "emilydavis",
    position: "Manager",
    lastMessage: "I Want to talk about my issue",
    timeStamp: "2024-06-06T10:21:54.439+00:00",
  },
  {
    id: 7,
    name: "Sarah Lee",
    value: "sarahlee",
    position: "Developer",
    lastMessage: "I Want to talk about my issue",
    timeStamp: "2024-06-10T10:21:54.439+00",
  },
  {
    id: 8,
    name: "Kevin White",
    value: "kevinwhite",
    position: "Designer",
    lastMessage: "I Want to talk about my issue",
    timeStamp: "2024-06-10T10:21:54.439+00",
  },
  {
    id: 9,
    name: "Lisa Nguyen",
    value: "lisanguyen",
    position: "QA",
    lastMessage: "I Want to talk about my issue",
    timeStamp: "2024-06-10T10:21:54.439+00",
  },
  {
    id: 10,
    name: "David Kim",
    value: "davidkim",
    position: "DevOps",
    lastMessage: "I Want to talk about my issue",
    timeStamp: "2023-06-10T10:21:54.439+00",
  },
];

const formatTimestamp = (timestamp: string) => {
  const now = moment();
  const time = moment(timestamp);
  const diffInSeconds = now.diff(time, "seconds");
  const diffInMinutes = now.diff(time, "minutes");
  const diffInHours = now.diff(time, "hours");
  const diffInDays = now.diff(time, "days");

  if (diffInSeconds < 60) {
    return "Just now";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  } else if (diffInDays < 7) {
    return time.format("dddd");
  } else {
    return time.format("DD/MM/YYYY");
  }
};

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
              <CommandEmpty>No user found.</CommandEmpty>
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
          {users.map((user) => {
            return (
              <>
                <Link
                  key={user.id}
                  href="#"
                  className="m-0 "
                >
                  <li className="text-left px-2 py-2 rounded-md bg-slate-200 mb-2 relative">
                    <span className="absolute top-1 right-1 text-[7px]">
                      ⚫
                    </span>
                    <p className=" flex gap-1 items-center text-sm">
                      <b>{user.name}</b>{" "}
                      <GoDotFill className="text-xs text-gray-500" />{" "}
                      <span className="text-xs text-gray-500">
                        {user.position}
                      </span>
                    </p>
                    <p>{user.lastMessage.slice(0, 15)}...</p>
                    <p className="text-left text-xs text-gray-500">
                      {formatTimestamp(user.timeStamp)}
                    </p>
                  </li>
                </Link>
              </>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
};

const Messages = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col gap-4 w-full px-2 mt-16">
      <ScrollArea className="max-h-[500px] h-full pe-3">
        {data.map((message: any) => (
          <div
            key={message.id}
            className="mb-2"
          >
            <div
              className={`flex w-full mb-1 ${
                message.sender === "Jen" ? "justify-end" : "justify-start"
              }`}
            >
              <div className="max-w-[320px]">
                <div
                  className={`rounded-2xl px-3 py-2  ${
                    message.sender === "Jen"
                      ? "bg-blue-500 text-white text-right"
                      : "bg-gray-200 text-black text-left"
                  }`}
                >
                  <p
                    className={`text-sm flex flex-col text-left  ${
                      message.sender === "Jen"
                        ? "text-gray-200"
                        : "text-gray-500"
                    }`}
                  >
                    <span>{message.sender}</span>{" "}
                    <span className="text-xs">{message.position}</span>
                  </p>
                  <p
                    className="my-2"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {message.text}
                  </p>
                </div>
                <p className={`text-xs text-gray-600 text-right me-2 mt-1`}>
                  {formatTimestamp(message.timeStamp)}
                </p>
              </div>
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
      sender: "Jen",
      position: "Manager",
      timeStamp: "2024-05-30T12:00:00.000Z",
    },
    {
      id: 2,
      text: "I'm good, thanks. How about you?",
      sender: "John Doe",
      position: "Employee",
      timeStamp: "2024-05-30T12:01:00.000Z",
    },
    {
      id: 3,
      text: "I'm good too. What's up?",
      sender: "Jen",
      position: "Manager",
      timeStamp: "2024-06-01T12:02:00.000Z",
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
            sender: "Jen",
            position: "Manager",
            timeStamp: new Date().toISOString(),
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
          sender: "Jen",
          position: "Manager",
          timeStamp: new Date().toISOString(),
        },
      ]);
    }
    console.log("Message Sent", { messages });
    setNewMessage("");
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }

    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      setNewMessage((prev) => prev + "\n");
    }
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
            <TextareaAutosize
              value={newMessage}
              onKeyDown={handleKeyPress}
              onChange={(e) => setNewMessage(e.target.value)}
              className="w-[94%] h-6 outline-none focus:outline-none resize-none overflow-hidden"
              placeholder="Type a message..."
            />
            {/* <input
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
            </label> */}
            {/* <input
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
            </label> */}
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
