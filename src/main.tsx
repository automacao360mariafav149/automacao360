import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./components/Carousel.css"; // Importar o CSS do carrossel

createRoot(document.getElementById("root")!).render(<App />);
