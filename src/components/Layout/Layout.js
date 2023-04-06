import NavBar from "../NavBar/NavBar";
import ProductSidebar from "../Product/ProductSidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="b flex">
         <div className="
           flex-1">
         {children}
         </div>

        <div className="p-2">
        <ProductSidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
