import NavBar from "@/components/NavBar/NavBar";
import React from "react";
import Footer from "@/components/Home/Footer";
import OurTeam from "@/components/About/OurTeam";
const index = () => {
  return (
    <div>
      <NavBar />
     <OurTeam/>
      <Footer />
    </div>
  );
};

export default index;
