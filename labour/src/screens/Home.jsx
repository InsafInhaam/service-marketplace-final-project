import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";


const Home = () => {

  return (
    <div>
      <Navbar />

      <Carousel />

      {/*================== Home Section Starts from Here ==================*/}
      <section id="home">
        <div className="home-left">
          <img src={Image1} alt="" />
        </div>
        <div className="home-right">
          <h2 className="home-heading"> Grow Up Your Workflow Speed </h2>
          <p className="home-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            quibusdam blanditiis quas assumenda nam error vel dolores suscipit
            ad, sapiente deleniti ipsum, obcaecati perspiciatis.
          </p>
          <a href className="btn">
            Our Work
          </a>
        </div>
      </section>
      {/*================== Home Section Ends Here */}

      {/*================== Workflow Section Starts from Here ==================*/}
      <section id="workFlow" className="mt-5">
        <h2 className="heading"> Grow Up Your Workflow Speed. </h2>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, commodi
          sint. <br />
          Ipsam molestias nemovel laboriosam consequatur, perferendis
          <br /> minima soluta? Natus necessitatibus autem suscipit!
        </p>
        <div className="num-container">
          <div className="num-item">
            <span>
              27,882 <br />
              Customers
            </span>
          </div>
          <div className="num-item">
            <span>
              90% <br />
              Action Plans
            </span>
          </div>
          <div className="num-item">
            <span>
              70,592 <br />
              Downloads
            </span>
          </div>
        </div>
      </section>
      {/*================== Workflow Section Ends Here */}
      {/*================== Goal Section Starts from Here ==================*/}
      <section id="goal" className="mt-5">
        <div className="goal-left">
          <h2>Our Goal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            omnis obcaecati incidunt asperiores, mollitia quibusdam velit at
            itaque sunt, culpa in pariatur quas, temporibus repellendus vitae!
            Vitae, illum asperiores.
          </p>
          <ul>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              atque!
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              atque!
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              atque!
            </li>
          </ul>
          <a href className="btn">
            Contact Us
          </a>
        </div>
        <div className="goal-right">
          <img src={Image1} alt="" />
        </div>
      </section>
      {/*================== Goal Section Ends Here */}
      {/*================== Our Team Section Starts from Here ==================*/}
      <section id="our-Team" className="mt-5">
        <h2>Our Member</h2>
        <div className="teamContainer">
          <div className="team-item">
            <img src={Image1} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
            <img src={Image1} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
            <img src={Image1} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
            <img src={Image1} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
        </div>
      </section>
      {/*================== Our Team Section Ends Here */}
      <Footer />
    </div>
  );
};

export default Home;
