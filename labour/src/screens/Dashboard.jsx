import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <header>
        {/* Sidebar */}
        <Sidebar />
        {/* Navbar */}
        <Navbar />
        {/* Navbar */}
      </header>
      {/*Main layout*/}
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4"></div>
      </main>
    </div>
  );
};

export default Dashboard;
