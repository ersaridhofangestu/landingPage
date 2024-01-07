import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Section from "./pages/Section";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <div className=" bg-slate-50">
      <Nav />
      <Hero />
      <Main />
      <Section />
      <Testimonial />
    </div>
  );
}

export default App;
