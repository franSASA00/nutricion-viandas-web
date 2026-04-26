import { Hero } from "./components/Hero";
import { Viandas } from "./components/Viandas";
import { Galeria } from "./components/Galeria";
import { Servicios } from "./components/Servicios";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Viandas />
      <Galeria />
      <Servicios />
      <Footer />
    </div>
  );
}
