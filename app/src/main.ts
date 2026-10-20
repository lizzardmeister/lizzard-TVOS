import "./style.css";
import { tiles, theme, type Tile } from "./config.ts";
import { resolveKey } from "./keys.ts";

// Número de colunas da grade. Define o movimento de foco para cima/baixo.
const COLUMNS = 4;

let focusIndex = 0;

function applyTheme(): void {
  const root = document.documentElement;
  root.style.setProperty("--bg", theme.bg);
  root.style.setProperty("--surface", theme.surface);
  root.style.setProperty("--text", theme.text);
  root.style.setProperty("--text-dim", theme.textDim);
  root.style.setProperty("--accent", theme.accent);
  if (theme.wallpaper) {
    document.body.style.backgroundImage = `url("${theme.wallpaper}")`;
  }
}

function renderClock(el: HTMLElement): void {
  const tick = () => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    el.textContent = `${hh}:${mm}`;
  };
  tick();
  setInterval(tick, 1000 * 15);
}

function renderHome(app: HTMLElement): void {
  app.innerHTML = `
    <header class="top-bar">
      <span class="brand">lizzard<span class="brand-dim">-TVOS</span></span>
      <span class="clock" id="clock">--:--</span>
    </header>
    <main class="grid" id="grid"></main>
  `;

  const clock = app.querySelector<HTMLElement>("#clock")!;
  renderClock(clock);

  const grid = app.querySelector<HTMLElement>("#grid")!;
  tiles.forEach((tile, i) => {
    const el = document.createElement("button");
    el.className = "tile";
    el.dataset.index = String(i);
    if (tile.accent) el.style.setProperty("--tile-accent", tile.accent);
    el.innerHTML = `<span class="tile-label">${tile.label}</span>`;
    el.addEventListener("click", () => activate(tile));
    grid.appendChild(el);
  });

  updateFocus();
}

function tileEls(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>(".tile"));
}

function updateFocus(): void {
  const els = tileEls();
  els.forEach((el, i) => el.classList.toggle("focused", i === focusIndex));
  els[focusIndex]?.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function move(delta: number): void {
  const next = focusIndex + delta;
  if (next >= 0 && next < tiles.length) {
    focusIndex = next;
    updateFocus();
  }
}

function activate(tile: Tile): void {
  // Fase 2/3: aqui entra o lançamento real via API do webOS.
  // Por enquanto só registramos a intenção.
  console.log("[lizzard] activate", tile.kind, tile.id, tile);
  const el = tileEls()[focusIndex];
  el?.classList.add("activated");
  setTimeout(() => el?.classList.remove("activated"), 180);
}

function onKey(e: KeyboardEvent): void {
  const key = resolveKey(e);
  if (!key) return;
  e.preventDefault();
  switch (key) {
    case "left":
      move(-1);
      break;
    case "right":
      move(1);
      break;
    case "up":
      move(-COLUMNS);
      break;
    case "down":
      move(COLUMNS);
      break;
    case "ok":
      activate(tiles[focusIndex]);
      break;
    case "back":
      // Na home, Voltar não faz nada (não há para onde voltar).
      break;
  }
}

function boot(): void {
  applyTheme();
  const app = document.querySelector<HTMLElement>("#app")!;
  renderHome(app);
  window.addEventListener("keydown", onKey);
}

boot();
