import type { Project } from "../data/projects";

export function createTileGrid(projects: Project[]): HTMLDivElement {
  const grid = document.createElement("div");
  grid.className = "tile-grid";

  // Always render 9 cells; pad with empty tiles if fewer than 9 projects
  const cells: (Project | null)[] = [...projects];
  while (cells.length < 9) cells.push(null);

  cells.slice(0, 9).forEach((project) => {
    if (!project) {
      const empty = document.createElement("div");
      empty.className = "tile empty";
      grid.appendChild(empty);
      return;
    }

    const tile = document.createElement("a");
    tile.className = "tile";
    tile.href = project.href;
    tile.setAttribute("aria-label", project.title);

    const label = document.createElement("span");
    label.className = "tile-label";
    label.textContent = project.title;

    tile.appendChild(label);
    grid.appendChild(tile);
  });

  return grid;
}