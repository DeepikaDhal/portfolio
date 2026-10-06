import type { Project } from "../data/projects";

export function createProjectCard(project: Project): HTMLAnchorElement {
  const card = document.createElement("a");
  card.className = "card";
  card.href = project.href;
  card.setAttribute("aria-label", project.title);

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-front">
        <img src="${project.image}" alt="" />
      </div>
      <div class="card-face card-back">
        <h2>${project.title}</h2>
      </div>
    </div>
  `;

  return card;
}