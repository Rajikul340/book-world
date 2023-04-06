import { motion } from "framer-motion";
import { BsBookHalf, BsFillBookFill, BsBook } from "react-icons/bs";
import { GiDisc, GiCompactDisc } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";

const WhyUs = () => {
  return (
    <div className="my-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="md:text-4xl my-5 font-bold font-serif text-center text-2xl"
      >
        Why Should Us
      </motion.h1>

      <div className="md:w-7/12 mx-auto">
        <p className="text-lg font-serif my-7 text-center">
          We pride ourselves in being the world‘s largest textbook buyback price
          comparison tool. In addition to helping you get rid of your old
          textbooks, we also offer:
        </p>
      </div>

      <div className="md:grid md:grid-cols-3 gap-10 w-11/12 mx-auto my-2">
        <div className="card border border-primary shadow-xl">
          <div className=" flex justify-center gap-16 relative">
            <BsBookHalf size={40} className="absolute top-10 left-24  " />
            <BsFillBookFill className="absolute top-7" size={60} />
            <BsBook className="absolute top-10 right-24" size={40} />
          </div>

          <div className="card-body mt-16 ">
            <h2 className="card-title capitalize">
              {" "}
              Buying Books with low cost
            </h2>
            <p>
              With one simple search we connect you to various companies buying
              used textbooks online. By comparing textbook buyback prices, we
              ensure you receive the best prices for your textbooks. Shipping is
              free and often paid the same day your book is received.
            </p>
          </div>
        </div>
        <div className="card md:my-0 my-8 border border-primary shadow-xl">
          <div className=" flex justify-center gap-16 relative ">
            <GiCompactDisc size={40} className="absolute top-10 left-24" />
            <BsFillBookFill className="absolute top-7" size={60} />
            <GiDisc className="absolute top-10 right-24" size={40} />
          </div>

          <div className="card-body  mt-16">
            <h2 className="card-title capitalize"> discover new books</h2>
            <p>
              Fiction: These are books that are made up stories or narratives,
              which can be further classified into genres such as romance,
              mystery, science fiction, horror, and more. Non-fiction: These
              books are based on real events, facts, or people. They can be
              further divided into subcategories such as biographies, history,
              self-help, cookbooks, travel, and more.
            </p>
          </div>
        </div>

        <div className="card  border border-primary md:my-0 my-8 shadow-xl">
          <div className=" flex justify-center gap-16 relative">
            <BiCategoryAlt size={40} className="absolute top-10 left-24" />
            <BsFillBookFill className="absolute top-7" size={60} />
            <AiOutlineSafetyCertificate
              className="absolute top-10 right-24"
              size={40}
            />
          </div>

          <div className="card-body mt-16">
            <h2 className="card-title capitalize">
           
              different categories of book
            </h2>
            <p>
              With one simple search we connect you to various companies buying
              used textbooks online. By comparing textbook buyback prices, we
              ensure you receive the best prices for your textbooks. Shipping is
              free and often paid the same day your book is received.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
