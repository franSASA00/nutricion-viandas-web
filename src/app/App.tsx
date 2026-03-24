import { Hero } from "./components/Hero";
import { Viandas } from "./components/Viandas";
import { Servicios } from "./components/Servicios";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Viandas />
      <Servicios />
      <Footer />
    </div>
  );
}
