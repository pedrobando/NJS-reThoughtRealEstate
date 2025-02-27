'use client'
import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { 
  HomeIcon, 
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  MapIcon,
  HomeModernIcon,
  TruckIcon,
  BuildingLibraryIcon,
  BuildingStorefrontIcon,
  QuestionMarkCircleIcon 
} from '@heroicons/react/24/outline'

const HomesForSalePage = () => {
  // Base filters
  const [view, setView] = useState("gallery")
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [beds, setBeds] = useState("")
  const [baths, setBaths] = useState("")
  
  // Advanced filters
  const [propertyType, setPropertyType] = useState([])
  const [status, setStatus] = useState([])
  const [sqftRange, setSqftRange] = useState({ min: '', max: '' })
  const [lotSizeRange, setLotSizeRange] = useState({ min: '', max: '' })
  const [yearBuiltRange, setYearBuiltRange] = useState({ min: '', max: '' })
  const [garageSpots, setGarageSpots] = useState('')
  const [poolType, setPoolType] = useState('')
  const [maxHOA, setMaxHOA] = useState('')
  const [maxTaxes, setMaxTaxes] = useState('')

  // Count active advanced filters
  const getActiveFilterCount = () => {
    let count = 0
    if (propertyType.length) count++
    if (status.length) count++
    if (sqftRange.min || sqftRange.max) count++
    if (lotSizeRange.min || lotSizeRange.max) count++
    if (yearBuiltRange.min || yearBuiltRange.max) count++
    if (garageSpots) count++
    if (poolType) count++
    if (maxHOA) count++
    if (maxTaxes) count++
    return count
  }

  // Reset all advanced filters
  const resetAdvancedFilters = () => {
    setPropertyType([])
    setStatus([])
    setSqftRange({ min: '', max: '' })
    setLotSizeRange({ min: '', max: '' })
    setYearBuiltRange({ min: '', max: '' })
    setGarageSpots('')
    setPoolType('')
    setMaxHOA('')
    setMaxTaxes('')
  }

  return (<>
    <section id="filters" className="flex flex-col gap-4 p-6 border-b text-reBody">
      <div className="flex gap-2 justify-between">
        {/* Gallery/Map Toggle */}
        <Tabs defaultValue={view} onValueChange={setView} className="">
          <TabsList>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="map">Map</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Main Search */}
        <Input
          type="text"
          placeholder="Address, City, ZIP, or MLS#"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className=""
        />

        {/* Price Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="">
              {priceRange.min || priceRange.max ? (
                <span className="flex items-center">
                  ${priceRange.min || '0'} - ${priceRange.max || 'Any'}
                  <XMarkIcon
                    className="ml-2 h-4 w-4"
                    onClick={(e) => {
                      e.stopPropagation()
                      setPriceRange({ min: '', max: '' })
                    }}
                  />
                </span>
              ) : (
                <span className="flex items-center">
                  Price <ChevronDownIcon className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80">
            <div className="grid gap-4 p-4">
              <div className="grid gap-2">
                <Label>Minimum Price</Label>
                <Input
                  type="number"
                  placeholder="No Min"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                />
              </div>
              <div className="grid gap-2">
                <Label>Maximum Price</Label>
                <Input
                  type="number"
                  placeholder="No Max"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                />
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Beds/Baths Filter */}
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" className=" ">
      {beds || baths ? (
        <span className="flex items-center">
          {beds && `${beds} Bed(s)`} {baths && `${baths} Bath(s)`}
          <XMarkIcon
            className="ml-2 h-4 w-4"
            onClick={(e) => {
              e.stopPropagation()
              setBeds("")
              setBaths("")
            }}
          />
        </span>
      ) : (
        <span className="flex items-center">
          Beds & Baths <ChevronDownIcon className="ml-2 h-4 w-4" />
        </span>
      )}
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-[300px] ">
    <div className="grid gap-4 p-4">
      {/* Beds Section */}
      <div className="grid gap-2">
        <DropdownMenuLabel>Bedrooms</DropdownMenuLabel>
        <div className="flex flex-wrap gap-2">
          {['Any', 'Studio', '1+', '2+', '3+', '4+', '5+'].map((option) => (
            <Button
              key={option}
              variant={beds === option ? "default" : "outline"}
              size="sm"
              onClick={() => setBeds(option === beds ? "" : option)}
              className="flex-1"
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      <DropdownMenuSeparator />

      {/* Baths Section */}
      <div className="grid gap-2">
        <DropdownMenuLabel>Bathrooms</DropdownMenuLabel>
        <div className="flex flex-wrap gap-2">
          {['Any', '1+', '1.5+', '2+', '2.5+', '3+', '3.5+', '4+'].map((option) => (
            <Button
              key={option}
              variant={baths === option ? "default" : "outline"}
              size="sm"
              onClick={() => setBaths(option === baths ? "" : option)}
              className="flex-1"
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    </div>
  </DropdownMenuContent>
</DropdownMenu>

        {/* All Filters Dropdown */}
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" className="min-w-[150px] ">
      All Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
      {getActiveFilterCount() > 0 && (
        <XMarkIcon
          className="ml-2 h-4 w-4"
          onClick={(e) => {
            e.stopPropagation()
            resetAdvancedFilters()
          }}
        />
      )}
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-[500px] max-h-[70vh] overflow-y-auto absolute right-0">
    <div className="sticky top-0 bg-white border-b z-10">
      <div className="p-4 flex justify-between items-center bg-white">
        <h3 className="font-semibold">All Filters</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={resetAdvancedFilters}
          className="text-muted-foreground"
        >
          Reset All
        </Button>
      </div>
    </div>

    <div className="p-4 grid gap-6">
      
{/* Property Type Section */}
<div className="grid gap-3">
  <DropdownMenuLabel className="text-base font-semibold">Property Type</DropdownMenuLabel>
  <div className="grid grid-cols-3 gap-3">
    {[
      { type: 'House', icon: HomeIcon },
      { type: 'Townhouse', icon: BuildingOffice2Icon },
      { type: 'Condo', icon: BuildingOfficeIcon },
      { type: 'Land', icon: MapIcon },
      { type: 'Multi Family', icon: HomeModernIcon },
      { type: 'Mobile', icon: TruckIcon },
      { type: 'Co-op', icon: BuildingLibraryIcon },
      { type: 'Commercial', icon: BuildingStorefrontIcon },
      { type: 'Other', icon: QuestionMarkCircleIcon }
    ].map(({ type, icon: Icon }) => (
      <Button
        key={type}
        variant={propertyType.includes(type) ? "default" : "outline"}
        size="sm"
        onClick={() => {
          if (propertyType.includes(type)) {
            setPropertyType(propertyType.filter(t => t !== type))
          } else {
            setPropertyType([...propertyType, type])
          }
        }}
        className="flex flex-col items-center gap-2 p-4 h-auto"
      >
        <Icon className="h-6 w-6" />
        <span className="text-sm">{type}</span>
      </Button>
    ))}
  </div>
</div>

      <DropdownMenuSeparator />

      {/* Status Section */}
      <div className="grid gap-3">
        <DropdownMenuLabel className="text-base font-semibold">Status</DropdownMenuLabel>
        <div className="flex gap-6">
          {['Active', 'Pending', 'Contingent'].map((stat) => (
            <div key={stat} className="flex items-center space-x-2">
              <Checkbox
                id={`status-${stat}`}
                checked={status.includes(stat)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setStatus([...status, stat])
                  } else {
                    setStatus(status.filter(s => s !== stat))
                  }
                }}
              />
              <Label htmlFor={`status-${stat}`} className="text-sm">{stat}</Label>
            </div>
          ))}
        </div>
      </div>

      <DropdownMenuSeparator />

      {/* Property Details Section */}
      <div className="grid gap-4">
        <DropdownMenuLabel className="text-base font-semibold">Property Details</DropdownMenuLabel>
        
        {/* Square Feet */}
        <div className="grid gap-2">
          <Label className="text-sm text-muted-foreground">Square Feet</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1.5">
              <Input
                type="number"
                placeholder="Min"
                value={sqftRange.min}
                onChange={(e) => setSqftRange(prev => ({ ...prev, min: e.target.value }))}
              />
            </div>
            <div className="grid gap-1.5">
              <Input
                type="number"
                placeholder="Max"
                value={sqftRange.max}
                onChange={(e) => setSqftRange(prev => ({ ...prev, max: e.target.value }))}
              />
            </div>
          </div>
        </div>

        {/* Lot Size */}
        <div className="grid gap-2">
          <Label className="text-sm text-muted-foreground">Lot Size (Acres)</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1.5">
              <Input
                type="number"
                step="0.1"
                placeholder="Min"
                value={lotSizeRange.min}
                onChange={(e) => setLotSizeRange(prev => ({ ...prev, min: e.target.value }))}
              />
            </div>
            <div className="grid gap-1.5">
              <Input
                type="number"
                step="0.1"
                placeholder="Max"
                value={lotSizeRange.max}
                onChange={(e) => setLotSizeRange(prev => ({ ...prev, max: e.target.value }))}
              />
            </div>
          </div>
        </div>

        {/* Year Built */}
        <div className="grid gap-2">
          <Label className="text-sm text-muted-foreground">Year Built</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1.5">
              <Input
                type="number"
                placeholder="Min"
                value={yearBuiltRange.min}
                onChange={(e) => setYearBuiltRange(prev => ({ ...prev, min: e.target.value }))}
              />
            </div>
            <div className="grid gap-1.5">
              <Input
                type="number"
                placeholder="Max"
                value={yearBuiltRange.max}
                onChange={(e) => setYearBuiltRange(prev => ({ ...prev, max: e.target.value }))}
              />
            </div>
          </div>
        </div>
      </div>

      <DropdownMenuSeparator />

      {/* House Features Section */}
      <div className="grid gap-4">
        <DropdownMenuLabel className="text-base font-semibold">House Features</DropdownMenuLabel>
        
        {/* Garage Spots */}
        <div className="grid gap-2">
          <Label className="text-sm text-muted-foreground">Garage Spots</Label>
          <div className="flex gap-2">
            {['1+', '2+', '3+', '4+'].map((spots) => (
              <Button
                key={spots}
                variant={garageSpots === spots ? "default" : "outline"}
                size="sm"
                onClick={() => setGarageSpots(garageSpots === spots ? "" : spots)}
                className="flex-1"
              >
                {spots}
              </Button>
            ))}
          </div>
        </div>

        {/* Pool Type */}
        <div className="grid gap-2">
          <Label className="text-sm text-muted-foreground">Pool</Label>
          <div className="grid gap-2">
            {[
              { value: 'private', label: 'Private Pool' },
              { value: 'community', label: 'Community Pool' },
              { value: 'both', label: 'Private or Community Pool' },
              { value: 'none', label: 'No Pool' }
            ].map((option) => (
              <Button
                key={option.value}
                variant={poolType === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => setPoolType(poolType === option.value ? "" : option.value)}
                className="justify-start"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <DropdownMenuSeparator />

      {/* Fees Section */}
      <div className="grid gap-4">
        <DropdownMenuLabel className="text-base font-semibold">Fees</DropdownMenuLabel>
        
        {/* HOA Fees */}
        <div className="grid gap-2">
          <Label className="text-sm text-muted-foreground">Maximum Monthly HOA</Label>
          <Input
            type="number"
            placeholder="No Max"
            value={maxHOA}
            onChange={(e) => setMaxHOA(e.target.value)}
          />
        </div>

        {/* Property Taxes */}
        <div className="grid gap-2">
          <Label className="text-sm text-muted-foreground">Maximum Annual Property Tax</Label>
          <Input
            type="number"
            placeholder="No Max"
            value={maxTaxes}
            onChange={(e) => setMaxTaxes(e.target.value)}
          />
        </div>
      </div>
    </div>
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
</section></>
  )
}

export default HomesForSalePage

   