# Visão

## O problema

As TVs chegam cheias de bloatware: apps que ninguém pediu, anúncios na home,
linhas de "recomendados" que são propaganda, e uma interface que trava. O dono
da TV não controla a própria tela inicial.

## O que queremos

Uma home própria, limpa e rápida, que coloca o controle de volta nas mãos do
dono. Referência de fluxo: Roku — simples, direto, cada app a um clique, sem
ruído.

### Princípios

1. **Fluidez acima de tudo.** Em uma TV o processador é fraco. Toda decisão de
   engenharia defende os 60fps de navegação. Sem framework pesado, sem animação
   que engasga, sem rede no caminho crítico da home.
2. **Zero bloat por construção.** O app é nosso. Nada entra que não sirva ao uso.
3. **Personalização real.** Cores, papel de parede, quais tiles aparecem, em que
   ordem. O dono arruma a casa dele.
4. **Navegação por controle remoto em primeiro lugar.** Foco visível, setas
   previsíveis, OK e Voltar sempre fazendo o óbvio. Nada que exija mouse.

## Escopo da v1

A primeira versão entrega:

- **Home com grade de tiles** navegável pelo controle.
- **Lançar apps** já instalados na TV (abrir Netflix, YouTube, etc.).
- **Atalhos de entrada HDMI** (HDMI 1, 2, 3) como tiles.
- **Relógio** e um fundo personalizável.
- **Personalização** via arquivo de configuração (cores, wallpaper, ordem dos tiles).

### Fora da v1 (e por quê)

- **Assumir o botão Home** — exige root, indisponível nesta versão da TV.
- **Remover apps da LG** — exige root.
- **Espelhar celular por conta própria** — depende de serviço de sistema; usamos o
  que a TV já oferece.
- **Loja de apps própria** — grande demais para a v1; apps web próprios podem vir depois.

## Visão de longo prazo

Se a comunidade liberar root para o webOS 25, migramos para o cenário onde o
launcher assume a home de verdade e o bloat da LG some. O código da v1 é
reaproveitado quase inteiro; só muda o portão de entrada. Ver
[CONSTRAINTS.md](CONSTRAINTS.md).
