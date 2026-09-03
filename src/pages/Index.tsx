import { Header } from "@/components/portfolio/Header";
import { Projects } from "@/components/portfolio/Projects";
import { Blog } from "@/components/portfolio/Blog";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Projects />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
