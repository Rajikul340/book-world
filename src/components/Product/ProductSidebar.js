
import Link from "next/link";

const ProductSidebar = () => {
  return (
    <div className="md:mt-2 mt-12 ">
         <h1 className=" md:ml-8 font-bold md:text-2xl">categories</h1>
          <hr/>
  
            <ul className="md:menu md:p-8 md:w-80 bg-base-100 lg:bg-inherit text-base-content">
                <li><Link href="/product">Fiction Book</Link></li>
                <li><Link href="/historybook">History book</Link></li>
                <li><Link href="/scientificbook">Scientific book</Link></li>
             
                <hr />

            </ul>
    
    </div>
  );
};

export default ProductSidebar;
