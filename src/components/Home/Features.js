import { motion } from "framer-motion";
import Image from "next/image";

const Features = () => {
  const text =
    " Online booking: The system would have an online portal where patrons could search for and book items or resources from any device with an internet connection. Resource availability: The system would display the availability of resources in real-time, allowing patrons to see which items are currently available and when they will become available. Reservation limits: The systemwould allow administrators to set reservation limits on items, such as the maximum number of days an item can be reserved, or the maximum number of reservations that can be made for a particular item. Notifications: The system would send notifications to patrons when their reservations are confirmed, when an item becomes available, or when a reservation is about to expire. Cancellation: The system would allow patrons to cancel their reservations, freeing up the resource for other patrons to reserve. Waitlist: The system could allow patrons to add themselves to a waitlist for a popular item that is currently  unavailable, and they would be notified when the item becomes available.";

  return (
    <div className="my-5">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="md:text-4xl my-2 font-bold font-serif text-center text-2xl"
      >
        Feature
      </motion.h1>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <motion.img
            className="md:w-1/2"
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            alt="image"
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div>
            <h1 className="text-52xl font-bold"></h1>

            <motion.p 
            className="py-6 text-lg  font-serif"
            animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              {text.split("").map((char, index) => {
                return (
                  <motion.span
                    key={char + "-" + index}
                    animate={{ opacity: 1 }}
                  >
                
               
                      {char}
            
                  </motion.span>
                );
              })}
            </motion.p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
