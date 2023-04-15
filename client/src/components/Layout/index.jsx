import Navbar from "./Navbar/";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <div className="ads">
        <h1>ADS</h1>
      </div>
      <div>
        <div className="ads"></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
