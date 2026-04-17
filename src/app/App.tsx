import { Hero } from "./components/Hero";
import { Viandas } from "./components/Viandas";
import { Servicios } from "./components/Servicios";
import { Footer } from "./components/Footer";
import { EducacionNutricional } from "./components/EducacionNutricional";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Viandas />
      <Servicios />
      <EducacionNutricional />
      <Footer />
    </div>
  );
}
