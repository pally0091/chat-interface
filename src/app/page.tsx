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

const SelectBox = () => {
  return (
    <div className="mx-auto">
      <Select>
        <SelectTrigger className="w-[180px]">
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
    <div className="mx-auto">
      <Popover
        open={open}
        onOpenChange={setOpen}
      >
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Search ..."}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
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
        <div className="w-[25%] flex flex-col gap-1 justify-center">
          <Search />
          <SelectBox />
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
