"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Loader2, MapPin, Building, Hash, Home, GraduationCap, School } from "lucide-react"
import { Command, CommandInput } from "@/components/ui/command"

export default function PropertySearch({ styles }) {
  const [keyword, setKeyword] = useState("")
  const [debouncedKeyword, setDebouncedKeyword] = useState("")
  const [results, setResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const searchRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [searchRef])

  // Debounce the keyword input
  useEffect(() => {
    // Don't trigger search if keyword is too short
    if (keyword.length < 3) {
      setResults(null)
      return
    }

    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword)
    }, 500)

    return () => clearTimeout(timer)
  }, [keyword])

  // Fetch results when debounced keyword changes
  const fetchResults = useCallback(async () => {
    if (!debouncedKeyword || debouncedKeyword.length < 3) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/call/${debouncedKeyword}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()
      console.log("API Response:", data) // Debug log
      setResults(data)
      setIsOpen(true)
    } catch (err) {
      console.error("Search error:", err)
      setError(err.message || "Failed to fetch results. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }, [debouncedKeyword])

  useEffect(() => {
    fetchResults()
  }, [debouncedKeyword, fetchResults])

  // Helper function to count total results
  const countResults = () => {
    if (!results?.result?.responses) return 0

    let total = 0
    const responses = results.result.responses

    // Count zipcodes
    if (responses[2]?.result?.total) {
      total += responses[2].result.total
    }

    // Count postal-cities
    if (responses[0]?.result?.total) {
      total += responses[0].result.total
    }

    // Count counties
    if (responses[1]?.result?.total) {
      total += responses[1].result.total
    }

    // Count states
    if (responses[3]?.result?.total) {
      total += responses[3].result.total
    }

    // Count schools
    if (responses[4]?.result?.total) {
      total += responses[4].result.total
    }

    // Count school districts
    if (responses[5]?.result?.total) {
      total += responses[5].result.total
    }

    // Count listings
    if (responses[6]?.result?.total) {
      total += responses[6].result.total
    }

    return total
  }

  return (
    <div
      className={`flex flex-grow flex-col items-center border border-reGrey-200 rounded-lg  focus-within:ring-2 focus-within:ring-reGreen z-50 ${styles}`}
      ref={searchRef}
    >
      <div className="relative w-full ">
        <Command className="rounded-lg border shadow-md bg-reDark bg-opacity-50">
          <div className="flex items-center border-b px-3 relative">
            <Search className="mr-2 h-4 w-4 shrink-0 text-reGreen" />
            <CommandInput
              placeholder="Search properties, cities, counties..."
              value={keyword}
              onValueChange={setKeyword}
              className="flex h-14 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-0 focus:ring-offset-0 border-none"
            />
            {isLoading && (
              <Loader2 className="absolute right-3 h-4 w-4 animate-spin text-muted-foreground text-reBody" />
            )}
          </div>
          {/* Completely remove the CommandList section for now since it's causing errors */}
        </Command>

        {isOpen && results && keyword.length >= 3 && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-md border border-input bg-popover shadow-md bg-white text-reBody">
            {/* Results count header - Outside ScrollArea to keep it fixed */}
            <div className="sticky top-0 px-2 py-1.5 text-sm font-medium text-muted-foreground bg-popover z-10 border-b">
              {countResults()} results for "{debouncedKeyword}"
            </div>

            <ScrollArea className="h-[400px]">
              {countResults() === 0 ? (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  No results found for "{debouncedKeyword}"
                </div>
              ) : (
                <div className="p-1">
                  {/* Zipcodes Section - FIRST */}
                  {results.result.responses[2]?.result?.zipcodes?.length > 0 && (
                    <div className="mt-2">
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                        ZIP CODES ({results.result.responses[2].result.total})
                      </div>
                      <div className="space-y-1">
                        {results.result.responses[2].result.zipcodes.map((zip) => (
                          <div
                            key={zip.id}
                            className="flex items-center gap-2 rounded-sm px-2 py-1.5 hover:bg-accent cursor-pointer"
                          >
                            <Hash className="h-4 w-4 text-muted-foreground" />
                            <div className="font-medium">{zip.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Cities Section - SECOND */}
                  {results.result.responses[0]?.result?.["postal-cities"]?.length > 0 && (
                    <div className="mt-2">
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                        CITIES ({results.result.responses[0].result.total})
                      </div>
                      <div className="space-y-1">
                        {results.result.responses[0].result["postal-cities"].map((city) => (
                          <div
                            key={city.id}
                            className="flex items-center gap-2 rounded-sm px-2 py-1.5 hover:bg-accent cursor-pointer"
                          >
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <span className="font-medium">{city.name}</span>
                              <span className="text-muted-foreground">, {city.state.abbreviation}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Counties Section - THIRD */}
                  {results.result.responses[1]?.result?.counties?.length > 0 && (
                    <div className="mt-2">
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                        COUNTIES ({results.result.responses[1].result.total})
                      </div>
                      <div className="space-y-1">
                        {results.result.responses[1].result.counties.map((county) => (
                          <div
                            key={county.id}
                            className="flex items-center gap-2 rounded-sm px-2 py-1.5 hover:bg-accent cursor-pointer"
                          >
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <span className="font-medium">{county.name} County</span>
                              <span className="text-muted-foreground">, {county.state.abbreviation}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* States Section - FOURTH */}
                  {results.result.responses[3]?.result?.states?.length > 0 && (
                    <div className="mt-2">
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                        STATES ({results.result.responses[3].result.total})
                      </div>
                      <div className="space-y-1">
                        {results.result.responses[3].result.states.map((state) => (
                          <div
                            key={state.id}
                            className="flex items-center gap-2 rounded-sm px-2 py-1.5 hover:bg-accent cursor-pointer"
                          >
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <div className="font-medium">{state.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Schools Section - FIFTH */}
                  {results.result.responses[4]?.result?.schools?.length > 0 && (
                    <div className="mt-2">
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                        SCHOOLS ({results.result.responses[4].result.total})
                      </div>
                      <div className="space-y-1">
                        {results.result.responses[4].result.schools.slice(0, 5).map((school) => (
                          <div
                            key={school.id}
                            className="flex items-center gap-2 rounded-sm px-2 py-1.5 hover:bg-accent cursor-pointer"
                          >
                            <GraduationCap className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <div className="font-medium truncate">{school.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {school.address?.city}, {school.address?.state} • {school.level || "School"}
                              </div>
                            </div>
                          </div>
                        ))}
                        {results.result.responses[4].result.total > 5 && (
                          <div className="px-2 py-1.5 text-xs text-center text-blue-600 hover:underline cursor-pointer">
                            View all {results.result.responses[4].result.total} schools
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* School Districts Section - SIXTH */}
                  {results.result.responses[5]?.result?.schools?.length > 0 && (
                    <div className="mt-2">
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                        SCHOOL DISTRICTS ({results.result.responses[5].result.total})
                      </div>
                      <div className="space-y-1">
                        {results.result.responses[5].result.schools.slice(0, 5).map((school) => (
                          <div
                            key={school.id}
                            className="flex items-center gap-2 rounded-sm px-2 py-1.5 hover:bg-accent cursor-pointer"
                          >
                            <School className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <div className="font-medium truncate">{school.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {school.address?.city}, {school.address?.state}
                              </div>
                            </div>
                          </div>
                        ))}
                        {results.result.responses[5].result.total > 5 && (
                          <div className="px-2 py-1.5 text-xs text-center text-blue-600 hover:underline cursor-pointer">
                            View all {results.result.responses[5].result.total} school districts
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Properties Section - LAST */}
                  {results.result.responses[6]?.result?.listings?.length > 0 && (
                    <div className="mt-2">
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                        PROPERTIES ({results.result.responses[6].result.total})
                      </div>
                      <div className="space-y-1">
                        {results.result.responses[6].result.listings.slice(0, 5).map((listing) => (
                          <div
                            key={listing.id}
                            className="flex items-start gap-2 rounded-sm px-2 py-1.5 hover:bg-accent cursor-pointer"
                          >
                            {listing.images && listing.images[0] ? (
                              <img
                                src={listing.images[0] || "/placeholder.svg"}
                                alt=""
                                className="h-10 w-10 rounded object-cover"
                              />
                            ) : (
                              <div className="flex h-10 w-10 items-center justify-center rounded bg-muted">
                                <Home className="h-5 w-5 text-muted-foreground" />
                              </div>
                            )}
                            <div className="flex-1 overflow-hidden">
                              <div className="font-medium truncate">{listing.address.deliveryLine}</div>
                              <div className="text-xs text-muted-foreground truncate">
                                {listing.address.city}, {listing.address.state} {listing.address.zip}
                              </div>
                              {listing.listPrice && (
                                <div className="text-sm font-semibold">${listing.listPrice.toLocaleString()}</div>
                              )}
                            </div>
                          </div>
                        ))}
                        {results.result.responses[6].result.total > 5 && (
                          <div className="px-2 py-1.5 text-xs text-center text-blue-600 hover:underline cursor-pointer">
                            View all {results.result.responses[6].result.total} properties
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </ScrollArea>
          </div>
        )}
      </div>

      {error && <div className="mt-2 p-2 text-sm text-red-700 bg-red-100 rounded-md">{error}</div>}
    </div>
  )
}

