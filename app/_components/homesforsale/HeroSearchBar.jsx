"use client"

import { useState, useEffect } from "react"
import { Search, Loader2, Map, Home, DollarSign } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import PropertySearch from "@/components/homesforsale/PropertySearch"

export default function HeroSearchBar() {
  const [keyword, setKeyword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  // Mock search function - replace with your actual search logic
  useEffect(() => {
    if (keyword.length >= 3) {
      setIsLoading(true)
      // Simulate API call
      const timer = setTimeout(() => {
        setResults([
          { id: 1, name: "San Francisco, CA" },
          { id: 2, name: "Los Angeles, CA" },
          { id: 3, name: "New York, NY" },
        ])
        setIsLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setResults([])
    }
  }, [keyword])

  return (
    <main className="flex flex-col bg-gradient-to-t from-neutral-950 to-neutral-900 w-full mt-[-185px] pt-[105px] min-h-[750px] justify-end items-center relative opacity-100">
    <header className="flex flex-col justify-center items-center text-center z-[50] mb-[20px]">
      <h1 className="text-3xl md:text-5xl font-bold text-white font-heading font-semibold pt-[10%] w-fit text-center px-6">
        Client-Centric REALTORS®
      </h1>
      <p className="text-xl md:text-2xl z-10 font-bold font-heading font-thin mt-2 text-reGreen">
        Real Simple. Real Skills. Real Results.®
      </p>
      <div className="w-full mt-8 px-6 rounded-lg">
        <PropertySearch styles="min-h-[50px]"/>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 w-full px-6">
        <button className="flex items-center justify-center gap-2 h-12 px-4 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground bg-reDark bg-opacity-50 border-white-200 hover:bg-white/20 text-white-200 focus:ring-2 focus:ring-white-200">
          <Search className="h-4 w-4" />
          <span>Buy</span>
        </button>

        <button className="flex items-center justify-center gap-2 h-12 px-4 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground bg-reDark bg-opacity-50 border-reBlue-200 hover:bg-reBlue-200/20 text-reBlue-200 focus:ring-2 focus:ring-reBlue-200">
          <Map className="h-4 w-4" />
          <span>Sell</span>
        </button>

        <button className="flex items-center justify-center gap-2 h-12 px-4 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground bg-reDark bg-opacity-50 border-reYellow hover:bg-reYellow/20 text-reYellow-100 focus:ring-2 focus:ring-reYellow">
          <Home className="h-4 w-4" />
          <span>Rent</span>
        </button>

        <button className="flex items-center justify-center gap-2 h-12 px-4 rounded-md border border-input hover:bg-reDark  border-reGreen hover:bg-reGreen/20 text-reGreen-100 focus:ring-2 focus:ring-reGreen">
          <DollarSign className="h-4 w-4" />
          <span>Pre Approval</span>
        </button>
      </div>
      <button
            className="flex gap-4 my-7 py-3 transition hover:cursor-pointer"
            id="home-value"
            aria-label="Get home value estimate"
          >
            <p className="text-[14px] text-left font-bold text-white">
              Get My Home's Current
              <br /> Market Value Today
            </p>
            <svg
              className="hover:animate-spin transition-all"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 66 66"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="33"
                cy="33"
                r="29"
                stroke="url(#paint0_linear_49_16)"
                strokeWidth="8"
              ></circle>
              <path
                d="M33 22.6169V43.3824M33 43.3824L23.3333 33.6918M33 43.3824L42.6667 33.6918"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_49_16"
                  x1="33"
                  y1="4"
                  x2="33"
                  y2="62"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFCC00"></stop>
                  <stop offset="0.495" stopColor="#8CC94E"></stop>
                  <stop offset="1" stopColor="#38B3FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </button>
        </header>

        <div className="absolute opacity-20 z-[1] object-cover h-full w-full mt-[-105px]">
          <video
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
            aria-hidden="true"
          >
            <source
              src="https://dashbrew.s3.us-east-2.amazonaws.com/assets/vids/kissimmee-orlando-bilingual-realtor.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>
  )
}