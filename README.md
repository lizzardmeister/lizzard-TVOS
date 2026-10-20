# lizzard-TVOS

Um launcher próprio para TVs LG (webOS), feito do zero: home limpa, fluída e
personalizável, sem bloatware. Pensado para a experiência de uso, no estilo de
um Roku enxuto, mas com a cara que eu quiser.

## O que é (e o que não é)

Isto **não** substitui o webOS. A TV-alvo (LG NANO80, webOS 25 / 10.3.2) não
pode ser destravada na versão atual, então não dá para trocar o sistema nem
assumir o botão Home. Ver [docs/CONSTRAINTS.md](docs/CONSTRAINTS.md) para o
porquê.

O que isto **é**: um aplicativo webOS, construído do zero, que roda via Modo
Desenvolvedor da LG e entrega uma home própria — seus apps, streaming e entradas
HDMI organizados do seu jeito, navegável pelo controle remoto.

## Estrutura

| Pasta | O quê |
|-------|-------|
| [docs/](docs/) | Visão, restrições técnicas e roadmap |
| [app/](app/) | O aplicativo launcher (TypeScript + Vite) |

## Stack

- **TypeScript + Vite** — leve, parte rápido, sem runtime de framework pesando na TV.
- **ares-cli (SDK webOS da LG)** — empacota e instala o app na TV via Modo Desenvolvedor.

## Começando

Ver [app/README.md](app/README.md) para rodar no navegador e empacotar para a TV.

## Status: pausado (out/2026)

O objetivo era personalizar o sistema da TV a fundo, não apenas rodar um app.
Na versão atual de software (webOS 10.3.2) isso não é possível sem hardware
adicional. Projeto pausado por decisão do dono.

A base (documentos e esqueleto do launcher) fica preservada para o dia em que as
condições mudarem. Ver [docs/CONSTRAINTS.md](docs/CONSTRAINTS.md) para o que
precisaria mudar.
