# PrimalTraining

Site institucional de uma academia de treino funcional, feito com HTML, CSS e JavaScript puros (sem framework, sem build). O layout foi criado a partir de um design no Figma e é totalmente responsivo, do celular ao desktop.

## Páginas

| Página | Arquivo | Conteúdo |
| --- | --- | --- |
| Início | `index.html` | Apresentação, diferenciais, comunidade e chamada para reserva |
| Sobre | `about.html` | Visão da academia, estrutura e chamada para reserva |
| Reserva | `reserve.html` | Sessões e preços, treinamento pessoal e formulário de reserva |

## Tecnologias

- HTML5 semântico (`header`, `nav`, `main`, `section`, `footer`)
- CSS3: variáveis (`:root`), Flexbox, Grid, `clamp()` e media queries
- JavaScript (vanilla) apenas na página de reserva
- Fontes do Google Fonts: Anek Tamil, Geist e Geist Mono
- [Formcarry](https://formcarry.com/) para receber os dados do formulário

## Estrutura de pastas

```
.
├── index.html
├── about.html
├── reserve.html
└── assets
    ├── css
    │   ├── style.css         # estilos base (layout fluido) e componentes
    │   └── responsive.css    # ajustes de layout por breakpoint
    ├── js
    │   └── script.js         # modal do formulário, máscara e envio
    └── img
        ├── Image-man.jpg
        ├── Image-2.jpg
        ├── Image-woman(2).png
        ├── Image-woman(4).png
        ├── Image-woman(5).png
        ├── Inserir um título.png
        └── vector
            └── logo
                ├── Logo.png
                ├── Vector.png
                ├── Vector (1).png
                └── PrimalTraining.png
```

## Como rodar

Não há dependências nem etapa de build.

1. Baixe ou clone o projeto.
2. Abra o `index.html` no navegador.

Para testar o formulário de reserva, sirva a pasta por HTTP (por exemplo, com a extensão **Live Server** do VS Code), porque o envio usa `fetch`.

## Responsividade

A abordagem é *desktop-first*, com base fluida:

- **`style.css`** usa porcentagens, `flex`, `grid` e `clamp()` nos tamanhos de fonte. O valor máximo de cada tamanho é o do design original.
- **`responsive.css`** só muda o layout: empilha colunas, ajusta bordas, espaçamentos e proporção das imagens.

| Breakpoint | Dispositivo | O que muda |
| --- | --- | --- |
| até 1024px | Tablet | Seções de duas colunas viram uma coluna; sessões continuam em 3 cards |
| até 768px | Tablet pequeno | Sessões em 1 coluna; rodapé em coluna; menos espaçamento |
| até 480px | Celular | Cabeçalho em coluna; botões de chamada em largura total |

As imagens das seções preenchem o bloco com `object-fit: cover`. O bloco define a altura (`min-height` no desktop, `aspect-ratio` quando empilhado).

## Formulário de reserva

O botão **RESERVE SEU LUGAR** (classe `.reserve-button`) abre o formulário em um modal. Ele fecha com `Esc`, clicando fora ou ao enviar com sucesso.

- Campos: sessão, nome, telefone (máscara `(00) 0 0000-0000`), email, data (a partir de hoje), horário (05:00 às 20:00) e o que a pessoa quer melhorar.
- O envio é feito com `fetch` para o Formcarry, sem recarregar a página. Mensagens de envio, sucesso e erro aparecem dentro do formulário.
- Para usar outro endpoint, troque o `action` da tag `<form class="form-help">` em `reserve.html`.
- O `script.js` só atua quando encontra o formulário, por isso é carregado apenas em `reserve.html`.

## Acessibilidade e desempenho

- Navegação com `aria-label` e `aria-current` na página atual.
- Foco visível para teclado e modal com foco no primeiro campo.
- Hover só em dispositivos com mouse. Em telas touch o preço dos cards de sessão aparece sempre.
- `prefers-reduced-motion` respeitado.
- Fontes carregadas só nos pesos usados.
- Imagem principal com `fetchpriority="high"`, demais com `loading="lazy"`.
- Sem jQuery: a máscara do telefone é feita em JavaScript puro.

## Personalização

- **Cores, fontes e tamanhos:** variáveis no `:root` do `style.css`.
- **Contato e horários:** rodapé repetido nas três páginas (email, telefone, horário de funcionamento e redes sociais).
- **Preços e horários das sessões:** `reserve.html`, seção `sessions`.

## Pendências conhecidas

- Trocar os dados de contato de exemplo (email e telefone) pelos reais.
- Revisar os textos `alt` das imagens para descrever o que elas mostram.
- Renomear imagens com espaço, parênteses ou acento (`Image-woman(4).png`, `Vector (1).png`, `Inserir um título.png`) e atualizar os caminhos nos HTMLs.
- Adicionar `width` e `height` nas imagens dos logos para evitar mudança de layout durante o carregamento.
