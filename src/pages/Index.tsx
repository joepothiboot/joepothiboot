import { Header } from "@/components/portfolio/Header";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
