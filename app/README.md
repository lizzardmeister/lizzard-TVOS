# App launcher — lizzard-TVOS

Aplicativo webOS da home. TypeScript + Vite.

## Rodar no PC (desenvolvimento)

```bash
cd app
npm install
npm run dev
```

Abre em `http://localhost:5173`. Navegue com as **setas** do teclado, **Enter**
para OK, **Backspace** para Voltar. É assim que simulamos o controle remoto.

## Empacotar e instalar na TV (Fase 1 em diante)

Requer Modo Desenvolvedor ativo na TV e o PC pareado. Passos detalhados virão no
guia da Fase 1. Resumo dos comandos:

```bash
npm run build         # gera dist/
npm run package       # empacota dist/ em out/*.ipk
npm run install-tv    # instala na TV pareada (device "tv")
npm run launch-tv     # abre o app na TV
```

O `ares-*` vem do pacote `@webos-tools/cli`, instalado como dependência.

## Estrutura

| Arquivo | O quê |
|---------|-------|
| `appinfo.json` | Manifesto do app webOS (id, ícone, cores) |
| `src/config.ts` | Tiles e tema — a personalização mora aqui |
| `src/keys.ts` | Tradução das teclas do controle remoto |
| `src/main.ts` | Boot, render da home e foco |
| `src/style.css` | Visual, dimensionado para TV (10-foot UI) |

## Pendências conhecidas

- `icon.png` / `icon-large.png` ainda não existem; o `appinfo.json` já os
  referencia. Criar na Fase 5 (identidade visual).
- Tiles são placeholders; o lançamento real de apps entra na Fase 2/3.
