import { useNavigate } from "react-router";
import Button from "../components/Button";
import CarList from "../components/CarList";
import { ChangeEvent, useState } from "react";
import BookingModal from "../components/modals/BookingModal";
import { CarTypes } from "../constants/types";
import { useMe } from "../hooks/auth/useMe";
import { useCreateBooking } from "../hooks/bookings/useCreateBooking";

const Booking = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showFilterCars, setShowFilterCars] = useState(false);
  const [type, setType] = useState("");
  const [selectedCar, setSelectedCar] = useState<null | CarTypes>(null);
  const { user } = useMe();
  const { createBooking, isPending } = useCreateBooking();

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
    setShowFilterCars(true);
    updateQueryParam("status", "available");
    updateQueryParam("type", type);
  };

  const handleButtonClick = (car: CarTypes) => {
    setSelectedCar(car);
    setIsOpen(true);
  };

  const handleSubmitBooking = () => {
    if (!selectedCar) return;

    // Calculate total cost
    const newBooking = {
      user: user._id as string,
      car: selectedCar._id,
      startDate: new Date().toISOString(),
      totalCost: 0,
      status: "pending" as const,
    };
    createBooking(newBooking, {
      onSuccess: () => {
        setIsOpen(false);
      },
    });
  };
  return (
    <section className="bg-primary-background py-8 lg:py-10  container mx-auto px-5">
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

      {showFilterCars && (
        <CarList buttonText="Book Now" onButtonClick={handleButtonClick} />
      )}
      <BookingModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setIsOpen}
        car={selectedCar}
        handleSubmitBooking={handleSubmitBooking}
        loading={isPending}
      />
    </section>
  );
};

export default Booking;
