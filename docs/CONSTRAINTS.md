# Restrições técnicas

Este documento registra o que é e o que não é possível na TV-alvo, para não
reabrirmos decisões já fechadas.

## TV-alvo

- **Modelo:** LG 55NANO80TSA
- **Sistema:** webOS 25 (webOS 10)
- **Versão de software:** 10.3.2-33

## Root: indisponível nesta versão

As falhas que permitiam destravar (rootear) o webOS 25 só existiam na versão de
fábrica `10.0`. A partir da `10.1` a LG corrigiu. A TV está na `10.3.2`, bem além
disso. **Não há caminho de root conhecido para esta versão hoje.**

Consequência: não dá para trocar o sistema, assumir o botão Home, nem remover
apps da LG. Projetamos o produto dentro dessa realidade.

### Como reavaliar no futuro

A situação pode mudar se a comunidade (webosbrew) achar uma falha nova. Para
checar o status da sua TV a qualquer momento, use o verificador oficial da
comunidade informando modelo e versão de firmware. Enquanto o resultado for
"patched", seguimos no cenário B.

> **Recomendação:** não atualize o firmware da TV sem necessidade. Atualizações
> só fecham brechas, nunca abrem. Ficar parado na versão atual preserva qualquer
> chance futura.

## O cenário em que estamos: Modo Desenvolvedor (cenário B)

O Modo Desenvolvedor é um recurso **oficial** da LG, não é hack. Permite instalar
e rodar apps próprios na TV. É assim que vamos rodar o launcher.

### O que ele permite

- Instalar o nosso app (`.ipk`) na TV pela rede, a partir do PC.
- Rodar uma web app em tela cheia com acesso às APIs públicas do webOS
  (lançar outros apps, ler lista de apps instalados, etc.).
- Iterar rápido: editar no PC, empacotar, instalar, ver na TV.

### Os limites (importantes)

- **Não assume o botão Home.** Nosso launcher é um app que se abre; a home da LG
  continua sendo a home padrão.
- **A sessão expira.** O Modo Desenvolvedor dura cerca de 50 horas por sessão e
  precisa ser renovado pelo app "Developer Mode" da LG. Se expirar, os apps de
  desenvolvedor param até renovar.
- **Precisa de conta LG Developer** (gratuita) para ativar.
- **Se a sessão expirar, o Modo Dev desliga e apaga os apps instalados por
  ele.** É reativar e reinstalar. Renovar antes é um botão no app Developer
  Mode ou um comando do SDK pelo PC.
- **Não abre sozinho ao ligar a TV.** Não há configuração oficial para isso.
  Alternativas: Acesso Rápido do controle (um gesto) ou um companion na rede
  (ver roadmap).
- **Não fecha outros apps.** A API pública permite abrir apps, mas fechar outro
  app é negado para apps comuns. Só via companion na rede.

### Saída permanente sem root: a loja da LG

Um app publicado na LG Content Store instala como qualquer outro, sem Modo
Desenvolvedor e sem expirar. É o caminho de longo prazo (Fase 6 do roadmap),
sujeito à revisão da LG.

## Os dois cenários, lado a lado

| Capacidade | B: Modo Dev (agora) | A: Com root (futuro, se vier) |
|-----------|:---:|:---:|
| Rodar launcher próprio | Sim | Sim |
| Lançar apps / entradas HDMI | Sim | Sim |
| Personalização total do app | Sim | Sim |
| Assumir o botão Home | Não | Sim |
| Remover bloat da LG | Não | Sim |
| Sessão permanente (sem expirar) | Não (sim, se publicado na loja) | Sim |
| Abrir sozinho ao ligar a TV | Não | Sim |
| Fechar outros apps | Não | Sim |

A v1 cabe inteira na coluna B. É por isso que começamos por ela: é real hoje, e
o trabalho não é jogado fora se o cenário A aparecer.
