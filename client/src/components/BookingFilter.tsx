import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router";

type BookingFilterProps = {
  onSubmit: ({ type, location }: { type: string; location: string }) => void;
};

const BookingFilter = ({ onSubmit }: BookingFilterProps) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const updateQueryParam = (key: string, value: string) => {
    const searchParams = new URLSearchParams(location.search);
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
    navigate({ search: searchParams.toString() }, { replace: true });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateQueryParam("status", "available");
    updateQueryParam("location", selectedLocation);
    updateQueryParam("type", type);
    onSubmit({
      type,
      location: selectedLocation,
    });
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const locationParam = searchParams.get("location");
    const typeParam = searchParams.get("type");

    if (locationParam) setSelectedLocation(locationParam);
    if (typeParam) setType(typeParam);
  }, [location.search]);

  return (
    <div className="max-w-4xl bg-primary-white shadow-md rounded-lg p-8 mx-auto mb-10">
      <h2 className="text-3xl font-bold text-primary-text mb-6 text-center">
        Book Your Car Rental
      </h2>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit}
      >
        {/* Location Selection */}
        <div className="flex flex-col">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-primary-text mb-2"
          >
            Location
          </label>
          <select
            id="location"
            className="w-full border-secondary-grey rounded-md shadow-sm focus:border-primary-orange border outline-none py-1.5 lg:py-2 px-3"
            required
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setSelectedLocation(e.target.value)
            }
            value={selectedLocation}
          >
            <option value="">Select Location</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
          </select>
        </div>
        {/* Car Type Selection */}
        <div className="flex flex-col">
          <label
            htmlFor="car-type"
            className="block text-sm font-medium text-primary-text mb-2"
          >
            Car Type
          </label>
          <select
            id="car-type"
            className="w-full border-secondary-grey rounded-md shadow-sm focus:border-primary-orange border outline-none py-1.5 lg:py-2 px-3"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setType(e.target.value)
            }
            required
            value={type}
          >
            <option value="">Select Car Type</option>
            <option value="suv">SUV</option>
            <option value="coupe">Coupe</option>
            <option value="sedan">Sedan</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <Button className="w-full">Search Car</Button>
        </div>
      </form>
    </div>
  );
};

export default BookingFilter;
