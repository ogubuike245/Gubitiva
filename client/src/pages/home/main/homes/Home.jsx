import React from "react";
import "./home.css";
import Popular from "../popular/Popular";
const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="main-content">
            <Popular />
          </section>

          <section className="side-content">
            <h1>SIDE</h1>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
