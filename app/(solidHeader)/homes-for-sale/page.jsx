"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  AdjustmentsHorizontalIcon,
  ArrowsPointingOutIcon,
  ChevronDownIcon,
  ListBulletIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  MapIcon,
  HomeModernIcon,
  TruckIcon,
  BuildingLibraryIcon,
  BuildingStorefrontIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import LoadingListingCard from "@/components/ui/LoadingUI/LoadingListingCard";
import Image from "next/image";
import {
  CalendarDays,
  Heart,
  Bed,
  Bath,
  Ruler,
  MapPin,
  CarIcon,
  CarFrontIcon,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

// Format price with commas
const formatPrice = (price) => {
  return price ? price.toLocaleString("en-US") : "Price on request";
};

// Format date for open house display
const formatOpenHouseDate = (timestamp) => {
  if (!timestamp) return null;
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

// Listing Card Component
function ListingCard({ listing }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:shadow-reGreen/20 hover:border-reGreen-400">
      {/* Header - Image + Badges */}
      <header className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <Image
          src={listing.images?.[0] || "/placeholder.svg?height=225&width=400"}
          alt={`${listing.address?.deliveryLine || "Property"}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={400}
          height={225}
          priority
        />

        <button
          aria-label="Add to favorites"
          className="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 text-reGreen backdrop-blur-sm transition-colors hover:bg-white hover:text-reRed"
        >
          <Heart className="h-5 w-5" />
        </button>

        {listing.imageCount > 0 && (
          <div className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
            1 / {listing.imageCount}
          </div>
        )}

        {listing.status && listing.status !== "Active" && (
          <div className="absolute left-3 top-3 rounded-md bg-reYellow px-2 py-1 text-xs font-semibold text-white shadow-sm">
            {listing.status}
          </div>
        )}

        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {listing.waterfrontYN && (
            <span className="rounded-md bg-reBlue px-2 py-1 text-xs font-semibold text-white shadow-sm">
              Waterfront
            </span>
          )}
          {listing.yearBuilt &&
            listing.yearBuilt >= new Date().getFullYear() && (
              <span className="rounded-md bg-reGreen px-2 py-1 text-xs font-semibold text-white shadow-sm">
                New Construction
              </span>
            )}
          {listing.openHouse && (
            <span className="rounded-md bg-reBlue-300 px-2 py-1 text-xs font-semibold text-reBlue-900 shadow-sm">
              Open House
            </span>
          )}
        </div>
      </header>

      {/* Main Content */}
      <section className="flex flex-1 flex-col p-4">
        {/* Price Row */}
        <div className="mb-1 flex items-baseline justify-between">
          <h2 className="text-xl font-bold font-heading text-reDark">
            ${formatPrice(listing.listPrice)}
          </h2>
          {listing.previousListPrice && (
            <span className="text-sm text-reTextLight line-through">
              ${formatPrice(listing.previousListPrice)}
            </span>
          )}
        </div>

        {/* Details */}
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-reBody">
          {listing.beds !== undefined && (
            <div className="flex w-full min-w-[100px] items-center gap-1">
              <Bed className="h-4 w-4 text-reGreen" />
              <span>
                {listing.beds} {listing.beds === 1 ? "bed" : "beds"}
              </span>
            </div>
          )}
          {listing.baths?.total !== undefined && (
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4 text-reGreen" />
              <span>
                {listing.baths.total}{" "}
                {listing.baths.total === 1 ? "bath" : "baths"}
              </span>
            </div>
          )}
          {listing.size && (
            <div className="flex items-center gap-1">
              <Ruler className="h-4 w-4 text-reGreen" />
              <span>{listing.size.toLocaleString()} sq ft</span>
            </div>
          )}
        </div>

        {/* Address */}
        <address className="mb-2 flex items-start gap-1 not-italic text-reText">
          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-reGreen" />
          <span className="line-clamp-2">
            {listing.address?.deliveryLine}, {listing.address?.city},{" "}
            {listing.address?.state} {listing.address?.zip}
          </span>
        </address>

        {/* Property Type & Year */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {listing.propertyType && (
            <span className="inline-flex items-center rounded-full bg-reGreen-100 px-2.5 py-0.5 text-xs font-medium text-reGreen-700">
              <HomeIcon className="mr-1 h-3 w-3 text-reGreen" />
              {listing.propertyType}
            </span>
          )}
          {listing.yearBuilt && (
            <span className="inline-flex items-center rounded-full bg-reGrey-100 px-2.5 py-0.5 text-xs font-medium text-reGrey-700">
              Built {listing.yearBuilt}
            </span>
          )}
        </div>

        {/* Spacer for Open House or Placeholder */}
        <div className="mt-auto">
          {listing.openHouse ? (
            <div className="rounded-md bg-reBlue-50 p-2">
              <div className="flex items-center gap-1.5 text-xs font-medium text-reBlue-700">
                <CalendarDays className="h-4 w-4 text-reGreen" />
                <span>
                  Open House: {formatOpenHouseDate(listing.openHouse.date)} •{" "}
                  {listing.openHouse.time}
                </span>
              </div>
            </div>
          ) : (
            <div className="h-8" /> // Empty placeholder to maintain spacing
          )}

          {/* Footer - Listing Office */}
          <footer className="mt-3 border-t border-gray-100 pt-3 text-xs text-reTextGrey">
            <div className="flex justify-between">
              <span>Listed By: {listing.listingOffice?.name || "Unknown"}</span>
              <span>MLS#: {listing?.id || "MLSID"}</span>
            </div>
          </footer>
        </div>
      </section>
    </article>
  );
}

// Create a client component that uses useSearchParams
function HomesForSaleContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Base filters
  const [view, setView] = useState("gallery");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");

  // Advanced filters
  const [propertyType, setPropertyType] = useState([]);
  const [status, setStatus] = useState([]);
  const [sqftRange, setSqftRange] = useState({ min: "", max: "" });
  const [lotSizeRange, setLotSizeRange] = useState({ min: "", max: "" });
  const [yearBuiltRange, setYearBuiltRange] = useState({ min: "", max: "" });
  const [garageSpots, setGarageSpots] = useState("");
  const [poolType, setPoolType] = useState("");
  const [maxHOA, setMaxHOA] = useState("");
  const [maxTaxes, setMaxTaxes] = useState("");

  // Add this after the other state variables
  const [hasFiltered, setHasFiltered] = useState(false);

  // Results state
  const [listings, setListings] = useState([]);
  const [totals, setTotals] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 25;

  // Count active advanced filters
  const getActiveFilterCount = () => {
    let count = 0;
    if (propertyType.length) count++;
    if (status.length) count++;
    if (sqftRange.min || sqftRange.max) count++;
    if (lotSizeRange.min || lotSizeRange.max) count++;
    if (yearBuiltRange.min || yearBuiltRange.max) count++;
    if (garageSpots) count++;
    if (poolType) count++;
    if (maxHOA) count++;
    if (maxTaxes) count++;
    return count;
  };

  // Reset all advanced filters
  const resetAdvancedFilters = () => {
    setPropertyType([]);
    setStatus([]);
    setSqftRange({ min: "", max: "" });
    setLotSizeRange({ min: "", max: "" });
    setYearBuiltRange({ min: "", max: "" });
    setGarageSpots("");
    setPoolType("");
    setMaxHOA("");
    setMaxTaxes("");
  };

  // Build query parameters based on current filters
  const buildQueryParams = () => {
    const params = new URLSearchParams();

    // Initial required parameters
    params.set("market", "MLSWIS");
    params.set("images", "true");
    params.set("details", "true");
    if (!hasFiltered) {
      params.set("listingOffice.id", "of27022");
    }

    // Search query - map to keyword or address
    if (searchQuery) {
      params.set("keyword", searchQuery);
    }

    // Price range
    if (priceRange.min && priceRange.max) {
      params.set("listPrice", `>=${priceRange.min},<=${priceRange.max}`);
    } else if (priceRange.min) {
      params.set("listPrice", `>=${priceRange.min}`);
    } else if (priceRange.max) {
      params.set("listPrice", `<=${priceRange.max}`);
    }

    // Beds
    if (beds) {
      if (beds === "Studio") {
        params.set("beds", "0");
      } else if (beds.includes("+")) {
        params.set("beds", `>=${beds.replace("+", "")}`);
      } else if (beds !== "Any") {
        params.set("beds", beds);
      }
    }

    // Baths
    if (baths) {
      if (baths.includes("+")) {
        params.set("baths.total", `>=${baths.replace("+", "")}`);
      } else if (baths !== "Any") {
        params.set("baths.total", baths);
      }
    }

    // Property Type
    if (propertyType.length > 0) {
      // Map UI property types to API property types
      const propertyTypeMap = {
        House: "Single Family",
        Townhouse: "Attached",
        Condo: "Condominium",
        Land: "Vacant Land",
        "Multi Family": "Multi-Family",
        Mobile: "Mobile",
        "Co-op": "Cooperative",
        Commercial: "Commercial/Industrial",
        Other: "Other",
      };

      const mappedTypes = propertyType.map(
        (type) => propertyTypeMap[type] || type,
      );
      params.set("propertyType", mappedTypes.join(","));
    }

    // Status
    if (status.length > 0) {
      params.set("status", status.join(","));
    }

    // Square Feet
    if (sqftRange.min && sqftRange.max) {
      params.set("size", `>=${sqftRange.min},<=${sqftRange.max}`);
    } else if (sqftRange.min) {
      params.set("size", `>=${sqftRange.min}`);
    } else if (sqftRange.max) {
      params.set("size", `<=${sqftRange.max}`);
    }

    // Lot Size
    if (lotSizeRange.min && lotSizeRange.max) {
      params.set(
        "lotsize.acres",
        `>=${lotSizeRange.min},<=${lotSizeRange.max}`,
      );
    } else if (lotSizeRange.min) {
      params.set("lotsize.acres", `>=${lotSizeRange.min}`);
    } else if (lotSizeRange.max) {
      params.set("lotsize.acres", `<=${lotSizeRange.max}`);
    }

    // Year Built
    if (yearBuiltRange.min && yearBuiltRange.max) {
      params.set(
        "yearBuilt",
        `>=${yearBuiltRange.min},<=${yearBuiltRange.max}`,
      );
    } else if (yearBuiltRange.min) {
      params.set("yearBuilt", `>=${yearBuiltRange.min}`);
    } else if (yearBuiltRange.max) {
      params.set("yearBuilt", `<=${yearBuiltRange.max}`);
    }

    // Garage Spots
    if (garageSpots && garageSpots.includes("+")) {
      params.set("garageSpaces", `>=${garageSpots.replace("+", "")}`);
    }

    // Pool
    if (poolType) {
      if (poolType === "both") {
        params.set("hasPool", "true");
      } else if (poolType === "private") {
        params.set("hasPrivatePool", "true");
      } else if (poolType === "community") {
        params.set("hasCommunityPool", "true");
      } else if (poolType === "none") {
        params.set("hasPool", "false");
      }
    }

    // HOA Fees
    if (maxHOA) {
      params.set("hoaFee", `<=${maxHOA}`);
    }

    // Property Taxes
    if (maxTaxes) {
      params.set("taxAmount", `<=${maxTaxes}`);
    }

    // Add pagination and sorting
    params.set("pageSize", pageSize.toString());
    params.set("pageNumber", currentPage.toString());
    params.set("sortField", "listPrice");
    params.set("sortOrder", "desc");

    return params;
  };

  // Fetch listings based on current filters
  const fetchListings = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = buildQueryParams();
      const response = await fetch(`/api/listings/search?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Failed to fetch listings");
      }

      const data = await response.json();
      setListings(data.result?.listings || []);
      setTotals(data.result?.total || 0);
    } catch (err) {
      console.error("Error fetching listings:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Update URL with current filters
  const updateUrl = () => {
    const params = buildQueryParams();
    router.push(`/homes-for-sale?${params.toString()}`, { scroll: false });
  };

  // Apply filters and update URL
  const applyFilters = () => {
    if (!hasFiltered) {
      setHasFiltered(true);
    }
    setCurrentPage(1); // Reset to first page when applying new filters
    updateUrl();
    fetchListings();
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  // Initialize with default filters
  useEffect(() => {
    fetchListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  // Calculate total pages
  const totalPages = Math.ceil(totals / pageSize);

  return (
    <>
      <section
        id="filters"
        className="border-b border-reGrey-100 bg-white p-6 font-body text-reBody shadow-sm"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Gallery/Map Toggle */}
          <Tabs
            defaultValue={view}
            onValueChange={setView}
            className="w-full md:w-auto"
          >
            <TabsList className="bg-reGrey-100">
              <TabsTrigger
                value="gallery"
                className="data-[state=active]:bg-reGreen data-[state=active]:text-white"
              >
                Gallery
              </TabsTrigger>
              <TabsTrigger
                value="map"
                className="data-[state=active]:bg-reGreen data-[state=active]:text-white"
              >
                Map
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-center">
            {/* Main Search */}
            <Input
              type="text"
              placeholder="Address, City, ZIP, or MLS#"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={applyFilters}
              className="flex-1 border-reGrey-200 focus-visible:ring-reGreen"
            />

            <div className="flex flex-wrap gap-2">
              {/* Price Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-reGrey-200 bg-white text-reText hover:bg-reGreen-100 hover:text-reGreen hover:border-reGreen"
                  >
                    {priceRange.min || priceRange.max ? (
                      <span className="flex items-center">
                        ${priceRange.min || "0"} - ${priceRange.max || "Any"}
                        <XMarkIcon
                          className="ml-2 h-4 w-4 text-reGreen"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPriceRange({ min: "", max: "" });
                            setTimeout(applyFilters, 0);
                          }}
                        />
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Price{" "}
                        <ChevronDownIcon className="ml-2 h-4 w-4 text-reGreen" />
                      </span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 border-reGrey-200">
                  <div className="grid gap-4 p-4">
                    <div className="grid gap-2">
                      <Label className="text-reText">Minimum Price</Label>
                      <Input
                        type="number"
                        placeholder="No Min"
                        value={priceRange.min}
                        onChange={(e) =>
                          setPriceRange((prev) => ({
                            ...prev,
                            min: e.target.value,
                          }))
                        }
                        className="border-reGrey-200 focus-visible:ring-reGreen"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label className="text-reText">Maximum Price</Label>
                      <Input
                        type="number"
                        placeholder="No Max"
                        value={priceRange.max}
                        onChange={(e) =>
                          setPriceRange((prev) => ({
                            ...prev,
                            max: e.target.value,
                          }))
                        }
                        className="border-reGrey-200 focus-visible:ring-reGreen"
                      />
                    </div>
                    <Button
                      onClick={() => {
                        applyFilters();
                        document.body.click(); // Close dropdown
                      }}
                      className="bg-reGreen text-white hover:bg-reGreen-600"
                    >
                      Apply
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Beds/Baths Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className={`flex items-center border flex-grow ${
                      beds || baths
                        ? "bg-reGreen-100 text-reGreen border-reGreen"
                        : "border-reGrey-200 bg-white text-reText hover:text-reGreen hover:bg-reGreen-100 hover:border-reGreen focus-visible:ring-reGreen focus-visible:ring-offset-2"
                    }`}
                  >
                    {beds || baths ? (
                      <span className="flex items-center">
                        {beds && `${beds} Bed(s)`} {baths && `${baths} Bath(s)`}
                        <XMarkIcon
                          className="ml-2 h-4 w-4 text-reGreen cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setBeds("");
                            setBaths("");
                            setTimeout(applyFilters, 0);
                          }}
                        />
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Beds & Baths{" "}
                        <ChevronDownIcon className="ml-2 h-4 w-4 text-reGreen" />
                      </span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full max-w-[350px] border-reGrey-200">
                  <div className="grid gap-4 p-4">
                    {/* Beds Section */}
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <DropdownMenuLabel className="text-reText flex items-center gap-2">
                          <Bed className="h-5 w-5 text-reGreen" />
                          Bedrooms
                        </DropdownMenuLabel>
                        {beds && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setBeds("")}
                            className="text-reGrey text-sm hover:text-reGreen-600"
                          >
                            Reset Beds
                          </Button>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Any", "Studio", "1+", "2+", "3+", "4+", "5+"].map(
                          (option) => (
                            <Button
                              key={option}
                              variant={beds === option ? "default" : "outline"}
                              size="sm"
                              onClick={() =>
                                setBeds(option === beds ? "" : option)
                              }
                              className={`flex-1 ${
                                beds === option
                                  ? "bg-reGreen text-white hover:bg-reGreen-600"
                                  : "border-reGrey-200 bg-white text-reText hover:bg-reGreen-100 hover:text-reGreen hover:border-reGreen"
                              }`}
                            >
                              {option}
                            </Button>
                          ),
                        )}
                      </div>
                    </div>

                    <DropdownMenuSeparator className="bg-reGrey-100" />

                    {/* Baths Section */}
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <DropdownMenuLabel className="text-reText flex items-center gap-2">
                          <Bath className="h-5 w-5 text-reGreen" />
                          Bathrooms
                        </DropdownMenuLabel>
                        {baths && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setBaths("")}
                            className="text-reGreen hover:text-reGreen-600"
                          >
                            Reset Baths
                          </Button>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Any",
                          "1+",
                          "1.5+",
                          "2+",
                          "2.5+",
                          "3+",
                          "3.5+",
                          "4+",
                        ].map((option) => (
                          <Button
                            key={option}
                            variant={baths === option ? "default" : "outline"}
                            size="sm"
                            onClick={() =>
                              setBaths(option === baths ? "" : option)
                            }
                            className={`flex-1 ${
                              baths === option
                                ? "bg-reGreen text-white hover:bg-reGreen-600"
                                : "border-reGrey-200 bg-white text-reText hover:bg-reGreen-100 hover:text-reGreen hover:border-reGreen"
                            }`}
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => {
                        applyFilters();
                        document.body.click(); // Close dropdown
                      }}
                      className="bg-reGreen text-white hover:bg-reGreen-600"
                    >
                      Apply
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* All Filters Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className={`flex flex-grow items-center gap-2 border ${
                      getActiveFilterCount() > 0
                        ? "bg-reGreen-100 text-reGreen border-reGreen"
                        : "border-reGrey-200 bg-white text-reText hover:text-reGreen hover:bg-reGreen-100 hover:border-reGreen focus-visible:ring-reGreen focus-visible:ring-offset-2"
                    }`}
                  >
                    <AdjustmentsHorizontalIcon className="h-4 w-4 flex-shrink-0 text-reGreen" />
                    <span className="truncate">
                      All Filters{" "}
                      {getActiveFilterCount() > 0 &&
                        `(${getActiveFilterCount()})`}
                    </span>
                    {getActiveFilterCount() > 0 && (
                      <XMarkIcon
                        className="h-4 w-4 flex-shrink-0 cursor-pointer text-reGreen"
                        onClick={(e) => {
                          e.stopPropagation();
                          resetAdvancedFilters();
                          setTimeout(applyFilters, 0);
                        }}
                      />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full max-w-[600px] max-h-[70vh] overflow-y-auto border-reGrey-200 relative">
                  <div className="sticky top-[-5px] bg-white border-b border-reGrey-100 z-10">
                    <div className="p-4 flex justify-between items-center bg-white">
                      <div className="flex items-center gap-2">
                        <AdjustmentsHorizontalIcon className="h-4 w-4 flex-shrink-0 text-reGreen" />
                        <h3 className="font-heading font-semibold text-reText">
                          All Filters
                        </h3>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          resetAdvancedFilters();
                          setTimeout(applyFilters, 0);
                        }}
                        className="text-reTextLight hover:text-reText hover:bg-reGrey-100"
                      >
                        Reset All
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 grid gap-6">
                    {/* Property Type Section */}
                    <div className="grid gap-3">
                      <DropdownMenuLabel className="flex items-center gap-2 text-base font-heading font-semibold text-reText">
                        <HomeIcon className="h-5 w-5 text-reGreen" />
                        <span>Property Type</span>
                      </DropdownMenuLabel>

                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { type: "House", icon: HomeIcon },
                          { type: "Townhouse", icon: BuildingOffice2Icon },
                          { type: "Condo", icon: BuildingOfficeIcon },
                          { type: "Land", icon: MapIcon },
                          { type: "Multi Family", icon: HomeModernIcon },
                          { type: "Mobile", icon: TruckIcon },
                          { type: "Co-op", icon: BuildingLibraryIcon },
                          { type: "Commercial", icon: BuildingStorefrontIcon },
                          { type: "Other", icon: QuestionMarkCircleIcon },
                        ].map(({ type, icon: Icon }) => (
                          <Button
                            key={type}
                            variant={
                              propertyType.includes(type)
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            onClick={() => {
                              if (propertyType.includes(type)) {
                                setPropertyType(
                                  propertyType.filter((t) => t !== type),
                                );
                              } else {
                                setPropertyType([...propertyType, type]);
                              }
                            }}
                            className={`flex flex-col items-center gap-2 p-4 h-auto ${
                              propertyType.includes(type)
                                ? "bg-reGreen text-white hover:bg-reGreen-600"
                                : "border-reGrey-200 bg-white text-reText hover:bg-reGreen-100 hover:text-reGreen hover:border-reGreen"
                            }`}
                          >
                            <Icon
                              className={`${propertyType.includes(type) ? "text-white" : "text-reGreen"} h-6 w-6`}
                            />
                            <span className="text-sm">{type}</span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <DropdownMenuSeparator className="bg-reGrey-100" />

                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Status Section (first) */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <ClipboardDocumentListIcon className="h-5 w-5 text-reGreen" />
                          <Label className="text-base font-heading font-semibold text-reText">
                            Status
                          </Label>
                        </div>
                        <fieldset className="grid gap-3">
                          {["Active", "Pending", "Contingent"].map((stat) => (
                            <div key={stat} className="flex items-center gap-2">
                              <Checkbox
                                id={`status-${stat}`}
                                checked={status.includes(stat)}
                                onCheckedChange={(checked) => {
                                  setStatus((prev) =>
                                    checked
                                      ? [...prev, stat]
                                      : prev.filter((s) => s !== stat),
                                  );
                                }}
                                className="border-reGrey-300 data-[state=checked]:bg-reGreen data-[state=checked]:border-reGreen focus-visible:ring-2 focus-visible:ring-reGreen focus-visible:ring-offset-2"
                              />
                              <label
                                htmlFor={`status-${stat}`}
                                className="text-sm font-medium text-reText cursor-pointer"
                              >
                                {stat}
                              </label>
                            </div>
                          ))}
                        </fieldset>
                      </div>

                      {/* Pool Type Section (second) */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <Squares2X2Icon className="h-5 w-5 text-reGreen" />
                          <Label className="text-base font-heading font-semibold text-reText">
                            Pool
                          </Label>
                        </div>
                        <div className="grid gap-2">
                          {[
                            { value: "private", label: "Private Pool" },
                            { value: "community", label: "Community Pool" },
                            {
                              value: "both",
                              label: "Private or Community Pool",
                            },
                            { value: "none", label: "No Pool" },
                          ].map((option) => (
                            <Button
                              key={option.value}
                              variant={
                                poolType === option.value
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() =>
                                setPoolType(
                                  poolType === option.value ? "" : option.value,
                                )
                              }
                              className={`justify-start ${
                                poolType === option.value
                                  ? "bg-reGreen text-white hover:bg-reGreen-600"
                                  : "border-reGrey-200 bg-white text-reText hover:bg-reGreen-100 hover:text-reGreen hover:border-reGreen"
                              }`}
                            >
                              {option.label}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <DropdownMenuSeparator className="bg-reGrey-100" />

                    {/* Property Details Section */}
                    <div className="grid gap-4">
                      <DropdownMenuLabel className="text-base font-heading font-semibold text-reText flex items-center gap-2">
                        <ListBulletIcon className="h-5 w-5 text-reGreen" />
                        Property Details
                      </DropdownMenuLabel>

                      {/* Square Feet */}
                      <div className="grid gap-2">
                        <Label className="text-sm text-reTextLight flex items-center gap-2">
                          <Ruler className="h-5 w-5 text-reGreen" />
                          Square Feet
                        </Label>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-1.5">
                            <Input
                              type="number"
                              placeholder="Min"
                              value={sqftRange.min}
                              onChange={(e) =>
                                setSqftRange((prev) => ({
                                  ...prev,
                                  min: e.target.value,
                                }))
                              }
                              className="border-reGrey-200 focus-visible:ring-reGreen"
                            />
                          </div>
                          <div className="grid gap-1.5">
                            <Input
                              type="number"
                              placeholder="Max"
                              value={sqftRange.max}
                              onChange={(e) =>
                                setSqftRange((prev) => ({
                                  ...prev,
                                  max: e.target.value,
                                }))
                              }
                              className="border-reGrey-200 focus-visible:ring-reGreen"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Lot Size */}
                      <div className="grid gap-2">
                        <Label className="text-sm text-reTextLight flex items-center gap-2">
                          <ArrowsPointingOutIcon className="h-5 w-5 text-reGreen" />
                          Lot Size (Acres)
                        </Label>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-1.5">
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="Min"
                              value={lotSizeRange.min}
                              onChange={(e) =>
                                setLotSizeRange((prev) => ({
                                  ...prev,
                                  min: e.target.value,
                                }))
                              }
                              className="border-reGrey-200 focus-visible:ring-reGreen"
                            />
                          </div>
                          <div className="grid gap-1.5">
                            <Input
                              type="number"
                              step="0.1"
                              placeholder="Max"
                              value={lotSizeRange.max}
                              onChange={(e) =>
                                setLotSizeRange((prev) => ({
                                  ...prev,
                                  max: e.target.value,
                                }))
                              }
                              className="border-reGrey-200 focus-visible:ring-reGreen"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Year Built */}
                      <div className="grid gap-2">
                        <Label className="text-sm text-reTextLight flex items-center gap-2">
                          <HomeIcon className="h-5 w-5 text-reGreen" />
                          Year Built
                        </Label>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-1.5">
                            <Input
                              type="number"
                              placeholder="Min"
                              value={yearBuiltRange.min}
                              onChange={(e) =>
                                setYearBuiltRange((prev) => ({
                                  ...prev,
                                  min: e.target.value,
                                }))
                              }
                              className="border-reGrey-200 focus-visible:ring-reGreen"
                            />
                          </div>
                          <div className="grid gap-1.5">
                            <Input
                              type="number"
                              placeholder="Max"
                              value={yearBuiltRange.max}
                              onChange={(e) =>
                                setYearBuiltRange((prev) => ({
                                  ...prev,
                                  max: e.target.value,
                                }))
                              }
                              className="border-reGrey-200 focus-visible:ring-reGreen"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <DropdownMenuSeparator className="bg-reGrey-100" />

                    {/* House Features Section */}
                    <div className="grid gap-4">
                      <DropdownMenuLabel className="text-base font-heading font-semibold text-reText flex items-center gap-2">
                        <HomeIcon className="h-5 w-5 text-reGreen" />
                        House Features
                      </DropdownMenuLabel>

                      {/* Garage Spots */}
                      <div className="grid gap-2">
                        <Label className="text-sm text-reTextLight flex items-center gap-2">
                          <CarIcon className="h-5 w-5 text-reGreen" />
                          Garage Spots
                        </Label>
                        <div className="grid grid-cols-4 gap-3">
                          {[
                            { type: "1+", icon: CarFrontIcon },
                            { type: "2+", icon: CarFrontIcon },
                            { type: "3+", icon: CarFrontIcon },
                            { type: "4+", icon: CarFrontIcon },
                          ].map(({ type, icon: Icon }) => (
                            <Button
                              key={type}
                              variant={
                                garageSpots === type ? "default" : "outline"
                              }
                              size="sm"
                              onClick={() =>
                                setGarageSpots(garageSpots === type ? "" : type)
                              }
                              className={`flex flex-col items-center gap-2 p-4 h-auto ${
                                garageSpots === type
                                  ? "bg-reGreen text-white hover:bg-reGreen-600"
                                  : "border-reGrey-200 bg-white text-reText hover:bg-reGreen-100 hover:text-reGreen hover:border-reGreen"
                              }`}
                            >
                              <Icon
                                className={`h-6 w-6 ${garageSpots === type ? "text-white" : "text-reGreen"}`}
                              />
                              <span className="text-sm">{type}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <DropdownMenuSeparator className="bg-reGrey-100" />

                    {/* Fees Section */}
                    <div className="grid gap-4">
                      <DropdownMenuLabel className="text-base font-heading font-semibold text-reText flex items-center gap-2">
                        <span className="text-lg mr-2 font-bold text-reGreen">
                          $
                        </span>
                        Fees
                      </DropdownMenuLabel>

                      {/* HOA Fees */}
                      <div className="grid gap-2">
                        <Label className="text-sm text-reTextLight flex items-center gap-2">
                          <span className="text-reGreen">HOA</span>
                          Maximum Monthly HOA
                        </Label>
                        <Input
                          type="number"
                          placeholder="No Max"
                          value={maxHOA}
                          onChange={(e) => setMaxHOA(e.target.value)}
                          className="border-reGrey-200 focus-visible:ring-reGreen"
                        />
                      </div>

                      {/* Property Taxes */}
                      <div className="grid gap-2">
                        <Label className="text-sm text-reTextLight flex items-center gap-2">
                          <span className="text-reGreen">Tax</span>
                          Maximum Annual Property Tax
                        </Label>
                        <Input
                          type="number"
                          placeholder="No Max"
                          value={maxTaxes}
                          onChange={(e) => setMaxTaxes(e.target.value)}
                          className="border-reGrey-200 focus-visible:ring-reGreen"
                        />
                      </div>
                    </div>

                    <Button
                      onClick={() => {
                        applyFilters();
                        document.body.click(); // Close dropdown
                      }}
                      className="mt-4 bg-reGreen text-white hover:bg-reGreen-600"
                    >
                      Apply Filters
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="bg-gray-50 p-6">
        {loading ? (
          <LoadingListingCard number={12} />
        ) : error ? (
          <div className="text-center py-8 text-reRed">Error: {error}</div>
        ) : listings.length === 0 ? (
          <div className="text-center py-8 text-reText font-heading">
            No properties found matching your criteria.
          </div>
        ) : (
          <>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <h2 className="text-xl font-heading font-semibold text-reDark mb-4 md:mb-0">
                {totals} Properties Found
              </h2>
              <div className="flex items-center gap-2">
                <Label className="text-reText">Sort by:</Label>
                <select className="border border-reGrey-200 rounded p-2 text-reText focus:outline-none focus:ring-2 focus:ring-reGreen">
                  <option value="price-desc">Price (High to Low)</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="newest">Newest</option>
                  <option value="beds-desc">Beds (Most)</option>
                  <option value="baths-desc">Baths (Most)</option>
                </select>
              </div>
            </div>
            <ScrollArea className="h-[70vh]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {listings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            </ScrollArea>

            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="border-reGrey-200 bg-white text-reText hover:bg-reGrey-100 hover:text-reText disabled:opacity-50"
                  >
                    Previous
                  </Button>

                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    // Show pages around current page
                    let pageNum = i + 1;
                    if (totalPages > 5) {
                      if (currentPage > 3) {
                        pageNum = currentPage - 3 + i;
                      }
                      if (pageNum > totalPages - 4) {
                        pageNum = totalPages - 4 + i;
                      }
                    }

                    return (
                      <Button
                        key={i}
                        variant={
                          currentPage === pageNum ? "default" : "outline"
                        }
                        onClick={() => handlePageChange(pageNum)}
                        className={
                          currentPage === pageNum
                            ? "bg-reGreen text-white hover:bg-reGreen-600"
                            : "border-reGrey-200 bg-white text-reText hover:bg-reGrey-100 hover:text-reText"
                        }
                      >
                        {pageNum}
                      </Button>
                    );
                  })}

                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="border-reGrey-200 bg-white text-reText hover:bg-reGrey-100 hover:text-reText disabled:opacity-50"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}

// Create a wrapper component that uses Suspense
export default function HomesForSalePage() {
  return (
    <Suspense
      fallback={
        <div className="p-6">
          <div className="h-16 mb-6 bg-reGrey-100 animate-pulse rounded"></div>

          <LoadingListingCard number={12} />
        </div>
      }
    >
      <HomesForSaleContent />
    </Suspense>
  );
}
