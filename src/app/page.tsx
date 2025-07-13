import TopNavbar from "./home/components/TopNavbar";
import Landing from "./home/components/Landing";
import About from "./home/components/About";
import Project from "./home/components/Project";
import Contact from "./home/components/Contact";

export default function Home() {
  return (
    <div>
      <TopNavbar/>
      <Landing/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}
