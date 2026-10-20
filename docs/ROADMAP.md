# Roadmap

Marcos em ordem. Cada um tem um critério claro de "pronto". Não passamos para o
próximo sem bater o anterior.

## Fase 0 — Base do projeto  ← ESTAMOS AQUI

Estrutura do repo, documentos de visão e restrições, esqueleto do app.

**Pronto quando:** o app roda no navegador do PC mostrando uma home de exemplo
navegável pelo teclado (simulando o controle).

## Fase 1 — "Olá, TV"

Fazer o app aparecer na TV de verdade.

- Criar conta LG Developer.
- Instalar o app "Developer Mode" na TV e ativar o modo.
- Instalar o ares-cli no PC e parear com a TV pela rede.
- Empacotar o app e instalar na TV.
- Testar o **Acesso Rápido** do controle (segurar tecla numérica) para abrir o
  launcher com um gesto.
- Script para renovar a sessão do Modo Desenvolvedor pelo PC.

**Pronto quando:** o launcher abre na TV e mostra a home.

## Fase 2 — Navegação de verdade

A home funcionar pelo controle remoto.

- Mapear as teclas do controle (setas, OK, Voltar).
- Sistema de foco: um tile sempre destacado, movimento previsível.
- Lançar um app real da TV a partir de um tile (ex.: abrir o YouTube).

**Pronto quando:** dá para andar pela home e abrir um app só com o controle.

## Fase 3 — A home completa

- Grade de tiles para apps instalados (lidos da TV).
- Tiles de entrada HDMI.
- Relógio e papel de parede.

**Pronto quando:** a home cobre o uso diário: apps + HDMI + relógio.

## Fase 4 — Personalização

- Arquivo de configuração: cores, wallpaper, ordem e seleção de tiles.
- Tela de ajustes dentro do app para editar sem mexer em arquivo.

**Pronto quando:** dá para reorganizar a home sem tocar em código.

## Fase 5 — Acabamento

- Animações suaves (dentro do orçamento de performance da TV).
- Tela de abertura (splash).
- Ícone e identidade visual do lizzard-TVOS.

**Pronto quando:** parece um produto, não um protótipo.

## Fase 6 — Publicar na LG Content Store

Submeter o app na loja oficial da LG. Aprovado, ele instala como app normal:
sem Modo Desenvolvedor, sem sessão expirando, e aparece no Acesso Rápido.

- Criar conta de seller na LG.
- Adequar ícones, metadados e requisitos de revisão.
- Submeter e acompanhar a revisão (leva semanas).

**Risco:** a LG pode recusar um app que funciona como home alternativa. Não há
regra explícita contra, mas é critério deles.

**Pronto quando:** o app instala pela loja numa TV sem Modo Desenvolvedor.

---

## Backlog / futuro

- **Companion na rede:** serviço (PC, Raspberry Pi ou Home Assistant) que usa a
  API de rede local da TV (LG Connect Apps) para abrir o launcher quando a TV
  liga e fechar apps abertos ("limpar memória"). Exige algo ligado na rede o
  tempo todo; sem isso, o Acesso Rápido do controle é o caminho.
- Apps web próprios embutidos (player de mídia, etc.).
- Migração para cenário A (root) se a comunidade liberar webOS 25.
- Automatizar a renovação/empacotamento com scripts.
