import { useFieldArray, useForm } from "react-hook-form";
import { FiTrash } from "react-icons/fi";

const Contact = () => {
  const { handleSubmit, register, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center overflow-auto p-10">
      <form
        className=" shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="w-full text-2xl text-center text-primary mb-5">
           Contact us
        </h1>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="name">
           First Name 
          </label>
          <input type="text"
          placeholder="first name "
              className="input input-bordered w-full max-w-xs"
          id="name" {...register("name")} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="name">
          Last Name
          </label>
          <input type="text"
          placeholder="last name "
              className="input input-bordered w-full max-w-xs"
          id="name" {...register("name")} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="email">
             Email 
          </label>
          <input
            placeholder="email "
            className="input input-bordered w-full max-w-xs"
            type="email"
            id="email"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="phone">
         phone 
          </label>
          <input type="number"
          placeholder="phone "
          className="input input-bordered w-full max-w-xs"
          id="phone" {...register("phone")} />
        </div>
       
      
        
        <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="address">
            Address
          </label>
          <input type="text" 
          className="input input-bordered w-full max-w-xs"
          placeholder="address"
          id="location" {...register("address")} />
        </div>
        <hr className="w-full mt-2 bg-black" />
        <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="overview">
            Message
          </label>
          <textarea
           className="textarea textarea-bordered "
           placeholder="write your message"
          rows={8} {...register("overview")} id="overview" />
        </div>

        <div className="flex justify-end items-center w-full mt-3">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
