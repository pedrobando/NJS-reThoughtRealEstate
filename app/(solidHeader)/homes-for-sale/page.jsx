'use client'
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'

const HomesForSalePage = () => {
  const [priceRange, setPriceRange] = useState({
    min: '',
    max: ''
  })
  const [selectedBeds, setSelectedBeds] = useState("")
  const [selectedBaths, setSelectedBaths] = useState("")

  return (
    <>
      <section id="filters" className="flex mb-8 px-6 text-reBody pt-6">
        <div className="flex flex-wrap gap-4 items-center justify-between w-full">
          <Tabs defaultValue="gallery" className="w-fit">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="gallery" className="px-4 py-1.5">Gallery</TabsTrigger>
              <TabsTrigger value="map" className="px-4 py-1.5">Map</TabsTrigger>
            </TabsList>
          </Tabs>

          <input 
            type="text" 
            placeholder="Address, zipcode, or MLS number" 
            className="border p-2 flex-grow re-Body"
          />

          <DropdownMenu>
            <DropdownMenuTrigger className="border p-2 flex items-center justify-between min-w-[150px]">
              {priceRange.min || priceRange.max ? (
                <>
                  Price ${priceRange.min || ''} {priceRange.min && priceRange.max ? '-' : ''} ${priceRange.max || ''}
                  <XMarkIcon
                    onClick={(e) => {
                      e.stopPropagation();
                      setPriceRange({ min: '', max: '' });
                    }}
                    className="w-4 h-4 ml-3"
                  />
                </>
              ) : (
                <>
                  Price: Any
                  <ChevronDownIcon className="w-4 h-4 ml-3" />
                </>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-4">
              <DropdownMenuLabel>Min Price</DropdownMenuLabel>
              <select 
                className="mt-1 block w-full border rounded-md p-2"
                value={priceRange?.min || ''}
                onChange={(e) => setPriceRange(prev => ({...prev, min: e.target.value}))}
              >
                <option value="">No Min</option>
                <option value="100000">$100,000</option>
                <option value="200000">$200,000</option>
                <option value="300000">$300,000</option>
                <option value="400000">$400,000</option>
                <option value="500000">$500,000</option>
              </select>

              <DropdownMenuSeparator className="my-2"/>
              
              <DropdownMenuLabel>Max Price</DropdownMenuLabel>
              <select
                className="mt-1 block w-full border rounded-md p-2"
                value={priceRange?.max || ''}
                onChange={(e) => setPriceRange(prev => ({...prev, max: e.target.value}))}
              >
                <option value="">No Max</option>
                <option value="200000">$200,000</option>
                <option value="300000">$300,000</option>
                <option value="400000">$400,000</option>
                <option value="500000">$500,000</option>
                <option value="1000000">$1,000,000</option>
              </select>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
  <DropdownMenuTrigger className="border p-2 min-w-[220px] flex items-center justify-between">
    {selectedBeds || selectedBaths ? (
      <>
        Beds/Baths: {selectedBeds && `${selectedBeds} bed`} {selectedBaths && `${selectedBaths} bath`}
        <XMarkIcon
          onClick={(e) => {
            e.stopPropagation();
            setSelectedBeds("");
            setSelectedBaths("");
          }}
          className="w-4 h-4 ml-3"
        />
      </>
    ) : (
      <>
        Beds/Baths: Any
        <ChevronDownIcon className="w-4 h-4 ml-3" />
      </>
    )}
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-[300px] p-4">
    <DropdownMenuLabel>Bedrooms</DropdownMenuLabel>
    <ToggleGroup 
      type="single" 
      value={selectedBeds}
      onValueChange={setSelectedBeds}
      className="flex flex-wrap gap-2 my-2"
    >
      <ToggleGroupItem value="studio" className="px-3 py-1">Studio</ToggleGroupItem>
      <ToggleGroupItem value="1+" className="px-3 py-1">1+</ToggleGroupItem>
      <ToggleGroupItem value="2+" className="px-3 py-1">2+</ToggleGroupItem>
      <ToggleGroupItem value="3+" className="px-3 py-1">3+</ToggleGroupItem>
      <ToggleGroupItem value="4+" className="px-3 py-1">4+</ToggleGroupItem>
    </ToggleGroup>

    <DropdownMenuSeparator className="my-2"/>

    <DropdownMenuLabel>Bathrooms</DropdownMenuLabel>
    <ToggleGroup 
      type="single"
      value={selectedBaths}
      onValueChange={setSelectedBaths}
      className="flex flex-wrap gap-2 my-2"
    >
      <ToggleGroupItem value="1" className="px-3 py-1">1</ToggleGroupItem>
      <ToggleGroupItem value="1.5" className="px-3 py-1">1.5</ToggleGroupItem>
      <ToggleGroupItem value="2" className="px-3 py-1">2</ToggleGroupItem>
      <ToggleGroupItem value="2.5" className="px-3 py-1">2.5</ToggleGroupItem>
      <ToggleGroupItem value="3" className="px-3 py-1">3</ToggleGroupItem>
      <ToggleGroupItem value="3.5" className="px-3 py-1">3.5</ToggleGroupItem>
      <ToggleGroupItem value="4" className="px-3 py-1">4</ToggleGroupItem>
      <ToggleGroupItem value="4.5" className="px-3 py-1">4.5</ToggleGroupItem>
      <ToggleGroupItem value="5" className="px-3 py-1">5</ToggleGroupItem>
    </ToggleGroup>
  </DropdownMenuContent>
</DropdownMenu>
        </div>
      </section>

      <section id="results" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg overflow-hidden">
          <div className="relative h-48 bg-gray-200">
            <img src="/placeholder.svg?height=192&width=384" alt="Property Image" className="w-full h-full object-cover"/>
            <div className="absolute bottom-0 right-0 bg-white px-2 py-1 text-sm">1 of 5</div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">$350,000</h2>
            <p className="text-gray-600 mb-2">3 bed | 2 bath | 1,500 sf</p>
            <p className="mb-2">123 Main St, Anytown, ST 12345</p>
            <p className="text-sm text-gray-500">Listed by: ABC Realty</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomesForSalePage