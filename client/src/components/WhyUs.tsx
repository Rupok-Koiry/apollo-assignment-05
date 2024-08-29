import { useState } from "react";

const WhyUs = () => {
  return (
    <section className="relative md:py-10 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-primary-text text-center font-semibold mb-4">
          Why Chose Drive <span className="text-primary-orange">Now</span>?
        </h2>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What do I need to rent a car from Drive Now?"
              text="To rent a car from Drive Now, you'll need a valid driver's license, a credit or debit card, and proof of identity. Renters must be at least 21 years old, though age requirements may vary depending on the vehicle type."
            />
            <AccordionItem
              header="Can I modify or cancel my reservation?"
              text="Yes, you can modify or cancel your reservation online through your Drive Now account or by contacting our customer service. Please note that changes or cancellations may be subject to fees depending on the timing and terms of your reservation."
            />
            <AccordionItem
              header="What is included in the rental rate?"
              text="Our rental rates typically include the vehicle, unlimited mileage, and basic insurance coverage. Additional services such as GPS, child seats, or extra insurance can be added during the booking process for an extra fee."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What should I do in case of an accident or breakdown?"
              text="In the event of an accident or breakdown, please contact our 24/7 roadside assistance team immediately. They will guide you through the necessary steps, including filing a report if required, and arranging for a replacement vehicle if needed."
            />
            <AccordionItem
              header="Are there any mileage limits or restrictions?"
              text="Drive Now offers unlimited mileage for most rentals. However, certain vehicle categories or special promotions may have mileage limits. Be sure to check your rental agreement for any specific restrictions."
            />
            <AccordionItem
              header="Can I rent a car with a debit card?"
              text="Yes, Drive Now accepts debit cards for car rentals. However, a hold may be placed on your account to cover the estimated rental charges and any potential additional costs. Be sure to check with your bank for any specific policies regarding debit card transactions."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

type AccordionItemProps = {
  header: string;
  text: string;
};

const AccordionItem = ({ header, text }: AccordionItemProps) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="mb-4 px-8 py-6 w-full rounded-lg bg-secondary-background text-primary-white">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="w-full">
          <h4 className="mt-1 text-lg font-bold text-primary-text">{header}</h4>
        </div>
        <div className="flex h-6 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary-orange ">
          <svg
            className={`fill-primary stroke-primary transition duration-300 ease-in text-white ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill="#fff"
              stroke=""
            />
          </svg>
        </div>
      </button>

      <div
        className={`transition duration-300 ease-in ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 px-4 text-base leading-relaxed text-secondary-text">
          {text}
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
