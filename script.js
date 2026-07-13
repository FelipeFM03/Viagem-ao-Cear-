// ==============================
// MANIFESTO DE IMAGENS POR DIA
// ==============================
// Adicione aqui o nome de TODOS os arquivos que estão dentro de cada
// pasta "MIDIAS/IMAGENS/DIA-X". Cada dia vira um carrossel automático
// com todas as fotos listadas, na ordem em que aparecem no array.
//
// Exemplo: se a pasta DIA-1 tem "BEL - FOR.jpg", "praia1.jpg" e "praia2.jpg",
// basta escrever:
//   1: ["BEL - FOR.jpg", "praia1.jpg", "praia2.jpg"],
//
// Se um arquivo estiver dentro de uma subpasta, inclua o caminho relativo
// à pasta do dia, como já foi feito nos exemplos abaixo (dia 2 e dia 3).

const imagensPorDia = {
  1: [
    "BEL - FOR.jpg",
    "CAPA-FORTALEZA.jpg",
    "img-sitio-do-bosco-1.jpg",
    "img-sitio-do-bosco-2.jpg",
    "img-sitio-do-bosco-3.jpg",
    "img-sitio-do-bosco-4.jpg",
    "img-sitio-do-bosco-5.jpg",
    "4.jpg",
  ],
  2: [
    "Parque_Nacional_de_Ubajara/1.JPG",
    "Parque_Nacional_de_Ubajara/12.JPG",
    "Parque_Nacional_de_Ubajara/13.JPG",
    "Parque_Nacional_de_Ubajara/14.JPG",
    "Parque_Nacional_de_Ubajara/54- Parque Nacional de Ubajara - Gruta de Ubajara - Sala da Rosa.JPG",
    "Parque_Nacional_de_Ubajara/58.JPG",
    "Parque_Nacional_de_Ubajara/60.JPG",
    "Parque_Nacional_de_Ubajara/Parque_Nacional_de_Ubajara_-_Ceará_-_Brasil.jpg",
    "Parque_Nacional_de_Ubajara/Sem-Titulo-1-20 (1).jpg",
  ],
  3: [
    "CENTRO-TAPIOQUEIRAS.jpg",
    "CENTRO-TAPIOQUEIRAS-2.jpg",
    "CENTRO-TAPIOQUEIRAS-3.jpg",
    "CENTRO-TAPIOQUEIRAS-4.jpg",
    "1 (1).jpg",
    "1 (2).jpg",
    "1 (3).jpg",
    "1 (4).jpg",
    "1 (5).jpg",
    "1 (6).jpg",
    "1 (7).jpg",
    "1 (8).jpg",
    "1 (9).jpg",
    "1 (10).jpg",
    "1 (11).jpg",
    "1 (12).jpg",
    "1 (13).jpg",
    "1 (14).jpg",
  ],
  4: [
    
    "Serra de Guaramiranga-1.jpg",
    "Serra de Guaramiranga-2.jpg",
    "Serra de Guaramiranga-3.jpg",
    "Serra de Guaramiranga-4.jpeg",
    "Serra de Guaramiranga-5.jpg",
    "Sorveteria 50 Sabores-3.png",
    "SORVETERIA-50-1.jpg",
    "SORVETERIA-50.jpg",
    "images.jpg",
    "50Sabores_fachada-942x1024.jpeg",
    "FEIRA-DA-MADRUGADA-1.jpg",
    "FEIRA.jpg",
  ],
  5: [
    "logo-dino-3.webp",
    "images.jpg",
    "001-qncfg3yw5cwmm9gbvg38k8hbepp26nvjez2f08snq0.webp",
    "images (1).jpg",
    "images (2).jpg",
    "images (3).jpg",
    "images (4).jpg",
    "images (5).jpg",
    "1_parque_raquel_de_queiroz_7-18121624.jpg",
  ],
  6: [

    "images (1).jpg",
    "images (2).jpg",
    "images (3).jpg",
    "faroldeparacurupraçapasseiosfortalezace.jpg",
    "images (6).jpg",
    "images.jpg",
    "Lencois-paracuruenses.webp",
    "NOTICIAS-8-Site-1.webp",
    "202410251424_eqWb_i.avif",
    "chico-caranguejo-praia-futuro-scaled.jpg",
    "images (4).jpg",
    "Chico-do-Caranguejo_caranguejo.jpg",
    "Diario do Nordeste Ismael Soares.webp",
    "g_chico-do-caranguejo-eusebio532b768931.jpg",

    
  ],
  7: [
    "barraca-terra-do-sol-praia-do-futuro-fortaleza.avif",
    "Fortaleza_do_Futuro.webp",
    "images (1).jpg",
    "images.jpg",
    "praia-love.avif",
    "praia-do-futuro-fortaleza.jpg",
    "praia-do-fututo.webp",
    "fortaleza16-copy.webp",
    "images (2).jpg",
    "images (3).jpg",
    "images (4).jpg",
    "images (5).jpg",
    "images (6).jpg",
    "fortaleza16-copy.webp",
    "feirinha-de-artesanato-beira-mar-fortaleza-1024x680.jpg",

  ],
  8: [
    "2014set_Ceara_384.JPG",
    "images (1).jpg",
    "images (2).jpg",
    "images (7).jpg",
    "images.jpg",
    "o-que-fazer-canoa-quebrada-ceara-46.webp",
    "photo0jpg.jpg",
  ],
  // DIA-9 ainda não veio em nenhum print — mandei mantido o arquivo original.
  9: ["BEL - FOR (1).jpg"],
};

const BASE_PATH = "MIDIAS/IMAGENS/DIA-";

// ==============================
// ANIMAÇÃO DOS CARDS
// ==============================

const cards = document.querySelectorAll(".card");
const titulo = document.querySelector(".overlay h1");
const destino = new Date("2026-09-12T05:50:00");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => {
  card.style.transition = "all 0.8s ease";
  observer.observe(card);
});

// ==============================
// BOTÃO VOLTAR AO TOPO
// ==============================

const botao = document.createElement("button");
botao.innerHTML = "⬆";
botao.id = "topo";
botao.setAttribute("aria-label", "Voltar ao topo");
document.body.appendChild(botao);

window.addEventListener("scroll", () => {
  botao.classList.toggle("visivel", window.scrollY > 500);
});

botao.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ==============================
// EFEITO NO TÍTULO
// ==============================

if (titulo && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let aumentando = true;
  let escala = 1;

  setInterval(() => {
    if (aumentando) {
      escala += 0.002;
      if (escala >= 1.05) aumentando = false;
    } else {
      escala -= 0.002;
      if (escala <= 1) aumentando = true;
    }

    titulo.style.transform = `scale(${escala})`;
  }, 20);
}

// ==============================
// DATA REGRESSIVA
// ==============================

const contador = document.createElement("div");
contador.id = "contador";
document.body.appendChild(contador);

function atualizarContador() {
  const agora = new Date();
  const diferenca = destino - agora;

  if (diferenca <= 0) {
    contador.innerHTML = "🎉 Boa viagem!";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);

  contador.innerHTML = `✈️ Faltam <b>${dias}</b>d, <b>${horas}</b>h e <b>${minutos}</b>min`;
}

atualizarContador();
setInterval(atualizarContador, 60000);

// ==============================
// CARROSSEIS DOS DIAS (dinâmicos)
// ==============================

function montarCarrossel(carousel) {
  const dia = carousel.dataset.day;
  const slidesContainer = carousel.querySelector(".carousel-slides");
  const prev = carousel.querySelector(".carousel-btn.prev");
  const next = carousel.querySelector(".carousel-btn.next");
  const arquivos = imagensPorDia[dia] || [];

  // Monta as imagens a partir do manifesto (imagensPorDia).
  slidesContainer.innerHTML = "";
  arquivos.forEach((arquivo, i) => {
    const img = document.createElement("img");
    img.src = `${BASE_PATH}${dia}/${arquivo}`;
    img.alt = carousel.dataset.alt || `Foto do dia ${dia}`;
    img.loading = i === 0 ? "eager" : "lazy";
    img.decoding = "async";
    img.addEventListener("error", () => img.remove());
    slidesContainer.appendChild(img);
  });

  let slides = Array.from(slidesContainer.querySelectorAll("img"));
  let index = 0;
  let autoplay;

  // Indicadores (bolinhas)
  const dotsWrap = document.createElement("div");
  dotsWrap.className = "carousel-dots";
  carousel.appendChild(dotsWrap);

  function renderDots() {
    dotsWrap.innerHTML = "";
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "carousel-dot" + (i === index ? " ativo" : "");
      dot.setAttribute("aria-label", `Ir para a foto ${i + 1}`);
      dot.addEventListener("click", () => irPara(i));
      dotsWrap.appendChild(dot);
    });
  }

  function update() {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    Array.from(dotsWrap.children).forEach((dot, i) =>
      dot.classList.toggle("ativo", i === index)
    );
  }

  function irPara(i) {
    index = (i + slides.length) % slides.length;
    update();
  }

  function anterior() {
    irPara(index - 1);
  }

  function proximo() {
    irPara(index + 1);
  }

  function iniciarAutoplay() {
    parar();
    if (slides.length > 1) {
      autoplay = setInterval(proximo, 5000);
    }
  }

  function parar() {
    clearInterval(autoplay);
  }

  if (slides.length <= 1) {
    if (prev) prev.style.display = "none";
    if (next) next.style.display = "none";
  } else {
    prev.addEventListener("click", () => { anterior(); iniciarAutoplay(); });
    next.addEventListener("click", () => { proximo(); iniciarAutoplay(); });
  }

  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { anterior(); iniciarAutoplay(); }
    if (e.key === "ArrowRight") { proximo(); iniciarAutoplay(); }
  });
  carousel.tabIndex = 0;

  carousel.addEventListener("mouseenter", parar);
  carousel.addEventListener("mouseleave", iniciarAutoplay);

  // Suporte a swipe (toque) para celular
  let inicioX = 0;
  let deslocando = false;

  carousel.addEventListener("touchstart", (e) => {
    inicioX = e.touches[0].clientX;
    deslocando = true;
    parar();
  }, { passive: true });

  carousel.addEventListener("touchend", (e) => {
    if (!deslocando) return;
    deslocando = false;
    const fimX = e.changedTouches[0].clientX;
    const diferenca = fimX - inicioX;

    if (Math.abs(diferenca) > 40) {
      if (diferenca < 0) proximo();
      else anterior();
    }
    iniciarAutoplay();
  });

  renderDots();
  update();
  iniciarAutoplay();
}

document.querySelectorAll("[data-carousel]").forEach(montarCarrossel);