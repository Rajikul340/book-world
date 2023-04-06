import Link from "next/link";
import styles from "../../styles/feature.module.css";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <div className="my-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="md:text-4xl my-10 font-bold font-serif text-center text-2xl"
      >
        Customer Review
      </motion.h1>
      <div className="carousel md:w-11/12 md:mx-auto">
        <div
          id="slide1"
          className="carousel-item relative md:w-full  md:grid md:grid-cols-3  gap-5"
        >
          <div className="card shadow-2xl border p-2 ">
            <div className=" mx-auto ml-6 ">
              <figure className="">
                <img
                  src="https://i.ibb.co/XYZFjBk/user1.jpg"
                  alt="Shoes"
                  className="w-16 h-16 rounded-full "
                />
                <figcaption className="mx-2 font-semebold font-serif">
                  jessy swal
                </figcaption>
              </figure>
              <ul className="flex my-2">
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
              </ul>
            </div>
            <div className="card-body p-4">
              <p className="">
                User experience: Is the website easy to navigate and use? Is the
                search functionality effective? Are the book descriptions and
                product images clear and helpful?
              </p>
              <div className="card-actions justify-end">
                <Link href="/">
                  {" "}
                  <div className="badge badge-outline">details</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="card border p-2  shadow-2xl ">
            <div className=" mx-auto ml-6 ">
              <figure className="">
                <img
                  src="https://i.ibb.co/yh7q0JW/user4.jpg"
                  alt="Shoes"
                  className="w-16 h-16 rounded-full "
                />
                <figcaption className="mx-2 font-semebold font-serif">
                  markene dyne
                </figcaption>
              </figure>
              <ul className="flex my-2">
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
              </ul>
            </div>
            <div className="card-body p-4">
              <p className="">
                User experience: Is the website easy to navigate and use? Is the
                search functionality effective? Are the book descriptions and
                product images clear and helpful?
              </p>
              <div className="card-actions justify-end">
                <Link href="/">
                  {" "}
                  <div className="badge badge-outline">details</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="card border p-2 shadow-2xl ">
            <div className=" mx-auto ml-6 ">
              <figure className="">
                <img
                  src="https://i.ibb.co/4fq44JC/user3.jpg"
                  alt="Shoes"
                  className="w-16 h-16 rounded-full "
                />
                <figcaption className="mx-2 font-semebold font-serif">
                  larry portal
                </figcaption>
              </figure>
              <ul className="flex my-2">
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
              </ul>
            </div>
            <div className="card-body p-4">
              <p className="">
                User experience: Is the website easy to navigate and use? Is the
                search functionality effective? Are the book descriptions and
                product images clear and helpful?
              </p>
              <div className="card-actions justify-end">
                <Link href="/">
                  {" "}
                  <div className="badge badge-outline">details</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item md:w-full relative md:grid md:grid-cols-3 gap-5"
        >
          <div className="card border p-2 shadow-2xl ">
            <div className=" mx-auto ml-6 ">
              <figure className="">
                <img
                  src="https://i.ibb.co/yd3bx8Q/user2.jpg"
                  alt="Shoes"
                  className="w-16 h-16 rounded-full "
                />
                <figcaption className="mx-2 font-semebold font-serif">
                  kungke chune
                </figcaption>
              </figure>
              <ul className="flex my-2">
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
              </ul>
            </div>
            <div className="card-body p-4">
              <p className="">
                User experience: Is the website easy to navigate and use? Is the
                search functionality effective? Are the book descriptions and
                product images clear and helpful?
              </p>
              <div className="card-actions justify-end">
                <Link href="/">
                  {" "}
                  <div className="badge badge-outline">details</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="card border p-2 shadow-2xl ">
            <div className=" mx-auto ml-6 ">
              <figure className="">
                <img
                  src="https://i.ibb.co/4fq44JC/user3.jpg"
                  alt="Shoes"
                  className="w-16 h-16 rounded-full "
                />
                <figcaption className="mx-2 font-semebold font-serif">
                  jessy swal
                </figcaption>
              </figure>
              <ul className="flex my-2">
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
              </ul>
            </div>
            <div className="card-body p-4">
              <p className="">
                User experience: Is the website easy to navigate and use? Is the
                search functionality effective? Are the book descriptions and
                product images clear and helpful?
              </p>
              <div className="card-actions justify-end">
                <Link href="/">
                  {" "}
                  <div className="badge badge-outline">details</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="card border p-2 shadow-2xl ">
            <div className=" mx-auto ml-6 ">
              <figure className="">
                <img
                  src="https://i.ibb.co/yh7q0JW/user4.jpg"
                  alt="Shoes"
                  className="w-16 h-16 rounded-full "
                />
                <figcaption className="mx-2 font-semebold font-serif">
                  jessy swal
                </figcaption>
              </figure>
              <ul className="flex my-2">
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
              </ul>
            </div>
            <div className="card-body p-4">
              <p className="">
                User experience: Is the website easy to navigate and use? Is the
                search functionality effective? Are the book descriptions and
                product images clear and helpful?
              </p>
              <div className="card-actions justify-end">
                <Link href="/">
                  {" "}
                  <div className="badge badge-outline">details</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative md:w-full md:grid md:grid-cols-3 gap-5"
        >
          <div className="card border p-2 shadow-2xl ">
            <div className=" mx-auto ml-6 ">
              <figure className="">
                <img
                  src="https://i.ibb.co/yd3bx8Q/user2.jpg"
                  alt="Shoes"
                  className="w-16 h-16 rounded-full "
                />
                <figcaption className="mx-2 font-semebold font-serif">
                  larry page
                </figcaption>
              </figure>
              <ul className="flex my-2">
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
              </ul>
            </div>
            <div className="card-body p-4">
              <p className="">
                User experience: Is the website easy to navigate and use? Is the
                search functionality effective? Are the book descriptions and
                product images clear and helpful?
              </p>
              <div className="card-actions justify-end">
                <Link href="/">
                  {" "}
                  <div className="badge badge-outline">details</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="card border p-2 shadow-2xl ">
            <div className=" mx-auto ml-6 ">
              <figure className="">
                <img
                  src="https://i.ibb.co/4fq44JC/user3.jpg"
                  alt="Shoes"
                  className="w-16 h-16 rounded-full "
                />
                <figcaption className="mx-2 font-semebold font-serif">
                  brwon dwon
                </figcaption>
              </figure>
              <ul className="flex my-2">
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
              </ul>
            </div>
            <div className="card-body p-4">
              <p className="">
                User experience: Is the website easy to navigate and use? Is the
                search functionality effective? Are the book descriptions and
                product images clear and helpful?
              </p>
              <div className="card-actions justify-end">
                <Link href="/">
                  {" "}
                  <div className="badge badge-outline">details</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="card border p-2 shadow-2xl ">
            <div className=" mx-auto ml-6 ">
              <figure className="">
                <img
                  src="https://i.ibb.co/yh7q0JW/user4.jpg"
                  alt="Shoes"
                  className="w-16 h-16 rounded-full "
                />
                <figcaption className="mx-2 font-semebold font-serif">
                  kangchi kuien
                </figcaption>
              </figure>
              <ul className="flex my-2">
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
              </ul>
            </div>
            <div className="card-body p-4">
              <p className="">
                User experience: Is the website easy to navigate and use? Is the
                search functionality effective? Are the book descriptions and
                product images clear and helpful?
              </p>
              <div className="card-actions justify-end">
                <Link href="/">
                  {" "}
                  <div className="badge badge-outline">details</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative md:w-full md:grid md:grid-cols-3 md:gap-5 "
        >
          <div className="card border p-2 shadow-2xl ">
            <div className=" mx-auto ml-6 ">
              <figure className="">
                <img
                  src="https://i.ibb.co/XYZFjBk/user1.jpg"
                  alt="Shoes"
                  className="w-16 h-16 rounded-full "
                />
                <figcaption className="mx-2 font-semebold font-serif">
                  jessy swal
                </figcaption>
              </figure>
              <ul className="flex my-2">
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
              </ul>
            </div>
            <div className="card-body p-4">
              <p className="">
                User experience: Is the website easy to navigate and use? Is the
                search functionality effective? Are the book descriptions and
                product images clear and helpful?
              </p>
              <div className="card-actions justify-end">
                <Link href="/">
                  {" "}
                  <div className="badge badge-outline">details</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="card border p-2  shadow-2xl ">
            <div className=" mx-auto ml-6 ">
              <figure className="">
                <img
                  src="https://i.ibb.co/4fq44JC/user3.jpg"
                  alt="Shoes"
                  className="w-16 h-16 rounded-full "
                />
                <figcaption className="mx-2 font-semebold font-serif">
                  larry potal
                </figcaption>
              </figure>
              <ul className="flex my-2">
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
              </ul>
            </div>
            <div className="card-body p-4">
              <p className="">
                User experience: Is the website easy to navigate and use? Is the
                search functionality effective? Are the book descriptions and
                product images clear and helpful?
              </p>
              <div className="card-actions justify-end">
                <Link href="/">
                  {" "}
                  <div className="badge badge-outline">details</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="card border p-2 shadow-2xl ">
            <div className=" mx-auto ml-6 ">
              <figure className="">
                <img
                  src="https://i.ibb.co/yh7q0JW/user4.jpg"
                  alt="Shoes"
                  className="w-16 h-16 rounded-full "
                />
                <figcaption className="mx-2 font-semebold font-serif">
                  markeen dyne
                </figcaption>
              </figure>
              <ul className="flex my-2">
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
                <li>
                  <FaStar style={{ fill: "#FFCA28" }} />
                </li>
              </ul>
            </div>
            <div className="card-body p-4">
              <p className="">
                User experience: Is the website easy to navigate and use? Is the
                search functionality effective? Are the book descriptions and
                product images clear and helpful?
              </p>
              <div className="card-actions justify-end">
                <Link href="/">
                  {" "}
                  <div className="badge badge-outline">details</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
