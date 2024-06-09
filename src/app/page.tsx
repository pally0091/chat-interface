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
import { Check, ChevronsUpDown } from "lucide-react";
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
import { SlClose } from "react-icons/sl";

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
  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];
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
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Search ..."}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[90%] p-0 mx-auto">
          <Command>
            <CommandInput placeholder="Search.." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {framework.label}
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
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
    },
    {
      id: 3,
      name: "Bob Smith",
      email: "bob@example.com",
    },
    {
      id: 4,
      name: "Alice Johnson",
      email: "alice@example.com",
    },
    {
      id: 5,
      name: "Mike Brown",
      email: "mike@example.com",
    },
    {
      id: 6,
      name: "Emily Davis",
      email: "emily@example.com",
    },
    {
      id: 7,
      name: "Sarah Lee",
      email: "sarah@example.com",
    },
    {
      id: 8,
      name: "Kevin White",
      email: "kevin@example.com",
    },
    {
      id: 9,
      name: "Lisa Nguyen",
      email: "lisa@example.com",
    },
    {
      id: 10,
      name: "David Kim",
      email: "david@example.com",
    },
  ];
  return (
    <ScrollArea className=" h-[550px] rounded-md border">
      <ul>
        {users.map((user) => (
          <>
            <Link
              key={user.id}
              href="#"
              className="m-0"
            >
              <li className="text-left px-2 py-1 ">
                <b>{user.name}</b> <br />
                {user.email}
              </li>
            </Link>
            <Separator className="my-2" />
          </>
        ))}
      </ul>
    </ScrollArea>
  );
};

const Messages = () => {
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

  return (
    <div className="flex flex-col gap-4 w-full px-2">
      <ScrollArea>
        {messages.map((message) => (
          <>
            <div
              key={message.id}
              className={`flex w-full ${
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
          </>
        ))}
      </ScrollArea>
    </div>
  );
};

const ImageUpload = ({ closeModal }: { closeModal: () => void }) => {
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    if (file) {
      // Upload file logic here
      console.log("File uploaded successfully!");
      closeModal();
      alert("Image Uploaded");
    } else {
      alert("Please, Upload Image!");
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-6">
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Upload Image
          </h3>
          <button
            className="text-gray-400 hover:text-gray-500"
            onClick={closeModal}
          >
            <SlClose className="text-xl font-semibold" />
          </button>
        </div>
        <div className="mt-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col items-end justify-end h-full gap-4 py-2">
        <Messages />
        <div className="w-full flex gap-2 items-center">
          <div className="bg-white border border-black rounded-md py-2 px-3 flex gap-1 items-center w-[95%]">
            <input
              type="text"
              className="w-[95%] outline-none focus:outline-none"
            />
            <button
              className="w-[2.5%]"
              onClick={() => setIsOpen(true)}
            >
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
      {isOpen && <ImageUpload closeModal={() => setIsOpen(false)} />}
    </>
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
