import Header from "./header/Header";
import Hello from "./firstSection/Hello";
import Skill from "./skills/Skill";
import Social from "./socialmedia/SocialMedia";
import Mywork from "./myworks/Mywork";
import Footer from "./fotter/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Hello />
      <Skill />
      <Social />
      <Mywork />
      <Footer />
    </div>
  );
}

export default App;
