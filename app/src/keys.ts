// Mapa de teclas. Na TV, o controle remoto webOS envia keyCodes específicos;
// no navegador do PC usamos as setas e Enter para simular. Cobrimos os dois.

export type RemoteKey = "up" | "down" | "left" | "right" | "ok" | "back";

export function resolveKey(e: KeyboardEvent): RemoteKey | null {
  switch (e.keyCode) {
    // Setas (iguais no PC e na TV)
    case 37:
      return "left";
    case 38:
      return "up";
    case 39:
      return "right";
    case 40:
      return "down";
    // OK / Enter
    case 13:
      return "ok";
    // Voltar: Backspace (PC) e 461 (controle webOS)
    case 8:
    case 461:
      return "back";
    default:
      return null;
  }
}
