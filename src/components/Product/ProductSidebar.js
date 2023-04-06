
import Link from "next/link";

const ProductSidebar = () => {
  return (
    <div className="mt-2 ">
         <h1 className=" md:ml-8 font-bold md:text-2xl">categories</h1>
          <hr/>
        
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="md:menu md:p-8 md:w-80 bg-base-100 lg:bg-inherit text-base-content">
                <li><Link href="/fictionbook">Fiction Book</Link></li>
                <li><Link href="/historybook">History book</Link></li>
                <li><Link href="/scientificbook">Scientific book</Link></li>
             
                <hr />

            </ul>
    
    </div>
  );
};

export default ProductSidebar;
