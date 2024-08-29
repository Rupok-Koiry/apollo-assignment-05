import React, { ChangeEvent } from "react";
import Button from "./Button";

const BookingFilter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowFilterCars(true);
    updateQueryParam("status", "available");
    updateQueryParam("type", type);
  };
  return (
    <div>
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
    </div>
  );
};

export default BookingFilter;
