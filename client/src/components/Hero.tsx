import { useNavigate } from "react-router";
import BookingFilter from "./BookingFilter";

const Hero = () => {
  const navigate = useNavigate();
  const handleSubmit = ({
    location,
    type,
  }: {
    location: string;
    type: string;
  }) => {
    navigate(`/booking?location=${location}&type=${type}`);
  };
  return (
    <section className="hero md:h-[80vh] p-8 md:p-0 flex justify-center items-center text-center rounded-b-xl overflow-hidden">
      <div className="md:w-2/3">
        <h2 className="text-3xl md:text-4xl xl:text-5xl text-primary-white font-bold mb-8 capitalize tracking-wide">
          Drive Your Dream Car Today
        </h2>
        <p className="text-secondary-background md:text-lg my-5">
          Explore our extensive fleet of luxury and economy vehicles. Whether
          it's a weekend getaway or a business trip, Drive Now has the perfect
          car waiting for you.
        </p>
        <BookingFilter onSubmit={handleSubmit} />
      </div>
    </section>
  );
};

export default Hero;
