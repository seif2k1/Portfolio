import Header from "./header/Header";
import Hello from "./firstSection/Hello";
import Skill from "./skills/Skill";
import Social from "./socialmedia/SocialMedia";
import Mywork from "./myworks/Mywork";
import Spline from "@splinetool/react-spline";
import Footer from "./fotter/Footer";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay (e.g., fetching data from an API)
    setTimeout(() => {
      setIsLoading(false);
      /* 
      setTimeout(() => {
        setIsLoading2(false);
      }, 15000); */
    }, 15000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spline scene="https://prod.spline.design/N0AVjKvZ-ZxKdxtT/scene.splinecode" />
        </div>
      ) : (
        <div className="container">
          <Header />
          <Hello />
          <Skill />
          <Social />
          <Mywork />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
