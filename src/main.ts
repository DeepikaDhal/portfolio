import { projects } from "./data/projects";
import { createTileGrid } from "./components/tileGrid";

const gallery = document.getElementById("gallery")!;
gallery.appendChild(createTileGrid(projects));