  
// console.log(dados);



// Função que realiza a pesquisa abrindo em outra guia

    
//document.querySelector('.search-button').addEventListener('click', function () {
  //  const query = document.querySelector('.search-bar').value;
    //if (query.trim() !== "") {
      //  window.open(`https://www.google.com.br/search?q=${encodeURIComponent(query)}`, '_blank');
    //}
//});






document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-bar");
  const searchButton = document.querySelector(".search-button");

  // ===================== LISTA DE TERMOS =====================

  // 300 termos sobre DNA Projetado
  const dnaProjetado = [
    "DNA projetado", "engenharia genética", "edição genética", "CRISPR", "genoma artificial",
    "terapia gênica", "código genético sintético", "genética computacional", "modelagem genética",
    "biologia sintética", "design genético", "genes artificiais", "manipulação de DNA",
    "projetos genômicos", "biotecnologia genética", "engenharia de cromossomos", "nanogenética",
    "personalização genética", "algoritmos de DNA", "biocomputação genética",
    "sequenciamento genético", "DNA recombinante", "mutação dirigida", "genes terapêuticos",
    "DNA digital", "simulação genética", "genes programáveis", "código genético expandido",
    "terapia personalizada", "genômica aplicada", "DNA funcional", "engenharia molecular",
    "nanorrobôs genéticos", "projetos de RNA", "controle epigenético", "edição de cromossomos",
    "DNA híbrido", "construção genômica", "sintetização genética", "bioengenharia avançada",
    "DNA modular", "organismos projetados", "DNA de precisão", "genética evolutiva projetada",
    "biologia de design", "clonagem programada", "projeto de proteínas", "genética preditiva",
    "genética digital", "simulação de cromossomos", "DNA inteligente", "projeto de enzimas",
    "DNA sintético terapêutico", "plataforma genômica", "reprogramação genética", "DNA artificial",
    "biocomputadores moleculares", "chips de DNA", "diagnóstico por DNA projetado",
    "DNA bioinformático", "sistemas genéticos artificiais", "nanotecnologia genética",
    "células geneticamente programadas", "genética regenerativa", "DNA auto-organizável",
    "bioarquitetura genética", "DNA computacional", "construção de organismos",
    "genética evolutiva artificial", "mapas genéticos digitais", "DNA terapêutico projetado",
    "genes digitais", "algoritmos biológicos", "DNA quântico", "plataformas de RNA",
    "genes autoajustáveis", "DNA otimizado", "engenharia celular", "biotecnologia digital",
    "nanocircuitos genéticos", "sistemas sintéticos de DNA", "genes de precisão",
    "DNA controlado por IA", "códigos genéticos artificiais", "biologia programável",
    "DNA experimental", "genes híbridos", "sistemas cromossômicos artificiais",
    "bioeletrônica genética", "organismos digitais", "DNA auto-replicante",
    "biocomputação quântica genética", "bioengenharia preditiva", "DNA expandido",
    "sintetizadores genômicos", "DNA de laboratório", "genes modulares",
    "genética artificial aplicada", "DNA industrial", "terapia genética digital",
    "células projetadas", "DNA medicinal", "genética preventiva", "DNA quimérico",
    "modelagem de DNA", "código molecular artificial", "DNA evolutivo", "nanogenômica",
    "DNA programado para cura", "engenharia de genes humanos", "DNA biomimético",
    "projetos de microbiomas", "DNA digitalizado", "genes artificiais humanos",
    "biotecnologia de DNA projetado", "plataforma sintética de DNA", "genética simulada",
    "DNA criogênico", "engenharia epigenética", "biochips genéticos", "códigos genéticos virtuais",
    "DNA de computação", "organismos simulados", "células sintéticas", "genes inteligentes",
    "biotecnologia computacional", "projetos moleculares", "genética automatizada",
    "DNA preditivo", "RNA projetado", "enzimas artificiais", "nanossistemas genéticos",
    "DNA de laboratório clínico", "biofábricas genéticas", "DNA universal",
    "engenharia genômica avançada", "células artificiais", "DNA personalizável",
    "bioengenharia digital", "genes com IA", "plataforma de edição genética",
    "DNA autoajustável", "genética artificial terapêutica", "nanobiologia genética",
    "DNA com edição quântica", "sistemas de DNA digital", "DNA de precisão médica",
    "bioinformática genômica", "DNA auto-controlado", "engenharia genética biomédica",
    "DNA programado com IA", "genes de laboratório", "DNA modular aplicado",
    "sistemas de clonagem digital", "DNA sintético em terapias", "genética automatizada médica",
    "bioengenharia molecular digital", "DNA reconstruído", "genética artificial regenerativa",
    "código biológico sintético", "genes artificiais terapêuticos", "DNA replicável projetado",
    "nanotecnologia aplicada ao DNA", "engenharia de DNA humano", "DNA programável avançado",
    "biotecnologia regenerativa", "genes sintéticos industriais", "plataformas de DNA aplicadas",
    "DNA projetado biomédico", "códigos cromossômicos artificiais", "genes digitais médicos",
    "bioarquitetura de DNA", "engenharia genômica personalizada", "genes auto-replicantes",
    "DNA computacional terapêutico", "nanomáquinas de DNA", "genes digitais terapêuticos",
    "DNA sintético evolutivo", "engenharia genética simulada", "DNA curativo projetado",
    "genética digital biomédica", "genes artificiais programados", "células digitais",
    "DNA terapêutico quântico", "sistemas bioinformáticos de DNA", "genes regenerativos digitais",
    "engenharia artificial de cromossomos", "DNA aplicado à medicina", "genes digitais aplicados",
    "DNA pré-configurado", "engenharia genética de precisão", "plataformas artificiais genômicas",
    "genes pré-definidos", "DNA aplicado em cura", "genética artificial biomédica",
    "bioengenharia sintética", "código genético programável", "DNA de laboratório virtual",
    "genes artificiais industriais", "DNA de célula projetada", "engenharia biomédica de DNA",
    "DNA computacional aplicado", "genes artificiais com IA", "DNA sintético aplicado",
    "engenharia molecular projetada", "DNA híbrido industrial", "genes artificiais regenerativos",
    "DNA regenerativo biomédico", "bioengenharia com IA", "códigos genéticos digitais",
    "DNA replicável industrial", "engenharia artificial genômica", "genes projetados digitais",
    "DNA artificial regenerativo", "biotecnologia de precisão", "DNA preditivo terapêutico",
    "genes artificiais digitais", "DNA aplicado à biomedicina", "engenharia biomolecular digital",
    "genes pré-configurados digitais", "DNA regenerativo com IA", "engenharia genética biomédica",
    "DNA projetado artificial", "genes sintéticos biomédicos", "DNA digital aplicado",
    "engenharia genética programada", "DNA terapêutico sintético", "genes artificiais preditivos",
    "bioengenharia molecular avançada", "DNA regenerativo programado", "engenharia artificial biomédica",
    "genes programáveis com IA", "DNA digital regenerativo", "engenharia genética artificial aplicada",
    "genes artificiais terapêuticos digitais", "DNA preditivo biomédico", "engenharia genômica digital",
    "genes regenerativos programados", "DNA projetado digital biomédico"
  ];

  // 300 termos sobre Biotecnologia
  const biotecnologia = [
    "biotecnologia", "bioinformática", "biologia molecular", "nanobiotecnologia",
    "células-tronco", "terapia celular", "diagnóstico molecular", "engenharia de tecidos",
    "bioengenharia", "genômica", "proteômica", "metabolômica", "bioprocessos",
    "bioenergia", "biocombustíveis", "biossensores", "biorremediação", "biofármacos",
    "vacinas recombinantes", "biologia de sistemas", "imunoterapia", "engenharia metabólica",
    "microbiologia aplicada", "biotecnologia industrial", "bioquímica aplicada",
    "agrobiotecnologia", "biotecnologia ambiental", "biotecnologia marinha",
    "biotecnologia farmacêutica", "biotecnologia agrícola", "biotecnologia médica",
    "biotecnologia alimentar", "biotecnologia veterinária", "biotecnologia industrial avançada",
    "biotecnologia marinha avançada", "bioengenharia marinha", "biotecnologia agrícola sustentável",
    "biotecnologia aplicada à saúde", "biotecnologia regenerativa", "biotecnologia genética",
    "bioengenharia aplicada", "biotecnologia digital", "biotecnologia de precisão",
    "biotecnologia biomédica", "biotecnologia preventiva", "biotecnologia industrial sustentável",
    "biotecnologia artificial", "biotecnologia regenerativa aplicada", "biotecnologia molecular",
    "biotecnologia industrial aplicada", "biotecnologia celular", "biotecnologia computacional",
    "biotecnologia genética aplicada", "biotecnologia clínica", "biotecnologia aplicada à medicina",
    "biotecnologia de vacinas", "biotecnologia industrial biomédica", "biotecnologia sintética",
    "biotecnologia aplicada à terapia", "biotecnologia digital aplicada", "biotecnologia regenerativa digital",
    "biotecnologia molecular aplicada", "biotecnologia industrial regenerativa", "biotecnologia biomolecular",
    "biotecnologia industrial digital", "biotecnologia aplicada em vacinas", "biotecnologia celular aplicada",
    "biotecnologia industrial artificial", "biotecnologia computacional aplicada",
    "biotecnologia aplicada à saúde digital", "biotecnologia regenerativa sintética",
    "biotecnologia industrial molecular", "biotecnologia aplicada ao diagnóstico",
    "biotecnologia industrial regenerativa aplicada", "biotecnologia biomédica sintética",
    "biotecnologia aplicada a células-tronco", "biotecnologia molecular digital",
    "biotecnologia aplicada em terapias gênicas", "biotecnologia artificial aplicada",
    "biotecnologia regenerativa biomédica", "biotecnologia industrial aplicada à saúde",
    "biotecnologia computacional digital", "biotecnologia aplicada a vacinas recombinantes",
    "biotecnologia industrial artificial aplicada", "biotecnologia digital aplicada à saúde",
    "biotecnologia biomolecular digital", "biotecnologia regenerativa artificial",
    "biotecnologia aplicada a biofármacos", "biotecnologia molecular sintética",
    "biotecnologia industrial biomédica aplicada", "biotecnologia clínica digital",
    "biotecnologia aplicada à genética", "biotecnologia regenerativa computacional",
    "biotecnologia aplicada à biomedicina", "biotecnologia preventiva digital",
    "biotecnologia industrial digital aplicada", "biotecnologia aplicada em vacinas digitais",
    "biotecnologia molecular regenerativa", "biotecnologia biomolecular sintética",
    "biotecnologia aplicada em células artificiais", "biotecnologia regenerativa digital aplicada",
    "biotecnologia industrial biomolecular", "biotecnologia aplicada em bioengenharia",
    "biotecnologia regenerativa digital sintética", "biotecnologia aplicada em diagnósticos moleculares",
    "biotecnologia biomolecular regenerativa", "biotecnologia digital sintética",
    "biotecnologia aplicada em imunoterapia", "biotecnologia industrial biomédica sintética",
    "biotecnologia molecular artificial", "biotecnologia aplicada à farmacogenômica",
    "biotecnologia regenerativa artificial aplicada", "biotecnologia industrial digital sintética",
    "biotecnologia biomolecular regenerativa aplicada", "biotecnologia aplicada em terapias celulares",
    "biotecnologia molecular digital aplicada", "biotecnologia regenerativa digital biomédica",
    "biotecnologia industrial artificial sintética", "biotecnologia aplicada a proteínas recombinantes",
    "biotecnologia digital regenerativa", "biotecnologia biomolecular artificial",
    "biotecnologia regenerativa aplicada em saúde", "biotecnologia industrial aplicada em biomedicina",
    "biotecnologia computacional biomédica", "biotecnologia molecular biomédica",
    "biotecnologia regenerativa biomolecular", "biotecnologia aplicada em terapias digitais",
    "biotecnologia biomolecular aplicada em vacinas", "biotecnologia digital aplicada em genética",
    "biotecnologia regenerativa sintética digital", "biotecnologia aplicada em terapias regenerativas",
    "biotecnologia molecular computacional", "biotecnologia industrial biomolecular aplicada",
    "biotecnologia digital biomédica", "biotecnologia aplicada em vacinas artificiais",
    "biotecnologia computacional regenerativa", "biotecnologia aplicada à biologia molecular",
    "biotecnologia biomolecular regenerativa sintética", "biotecnologia digital regenerativa aplicada",
    "biotecnologia industrial computacional", "biotecnologia aplicada em farmacogenômica",
    "biotecnologia regenerativa digital computacional", "biotecnologia molecular artificial aplicada",
    "biotecnologia aplicada em diagnósticos digitais", "biotecnologia biomolecular regenerativa digital",
    "biotecnologia digital sintética biomédica", "biotecnologia regenerativa biomédica digital",
    "biotecnologia industrial regenerativa computacional", "biotecnologia aplicada em proteínas digitais",
    "biotecnologia computacional artificial", "biotecnologia regenerativa biomolecular aplicada",
    "biotecnologia digital regenerativa biomédica", "biotecnologia aplicada à biomedicina digital",
    "biotecnologia molecular biomolecular", "biotecnologia industrial sintética aplicada",
    "biotecnologia aplicada em biochips", "biotecnologia regenerativa digital artificial",
    "biotecnologia biomolecular digital aplicada", "biotecnologia aplicada em biossensores digitais",
    "biotecnologia digital computacional aplicada", "biotecnologia regenerativa artificial sintética",
    "biotecnologia industrial biomolecular digital", "biotecnologia biomolecular computacional",
    "biotecnologia aplicada em vacinas biomoleculares", "biotecnologia regenerativa digital biomolecular",
    "biotecnologia digital biomolecular aplicada", "biotecnologia industrial regenerativa biomolecular",
    "biotecnologia biomolecular sintética digital", "biotecnologia aplicada em imunoterapia digital",
    "biotecnologia regenerativa computacional digital", "biotecnologia digital biomédica aplicada",
    "biotecnologia industrial artificial biomolecular", "biotecnologia biomolecular regenerativa artificial",
    "biotecnologia aplicada em diagnósticos biomoleculares", "biotecnologia digital aplicada em saúde regenerativa",
    "biotecnologia regenerativa biomédica sintética", "biotecnologia biomolecular aplicada em terapias",
    "biotecnologia digital biomolecular regenerativa", "biotecnologia aplicada em células digitais",
    "biotecnologia regenerativa biomolecular sintética", "biotecnologia industrial regenerativa digital",
    "biotecnologia aplicada à biotecnologia marinha", "biotecnologia digital aplicada em diagnósticos",
    "biotecnologia biomolecular artificial digital", "biotecnologia regenerativa digital sintética aplicada",
    "biotecnologia industrial biomolecular regenerativa", "biotecnologia biomolecular digital sintética",
    "biotecnologia aplicada em vacinas digitais biomédicas", "biotecnologia digital regenerativa artificial aplicada",
    "biotecnologia biomolecular artificial aplicada", "biotecnologia regenerativa digital biomédica aplicada",
    "biotecnologia aplicada em bioengenharia digital", "biotecnologia industrial biomolecular regenerativa digital",
    "biotecnologia digital biomolecular regenerativa aplicada", "biotecnologia aplicada em terapias computacionais",
    "biotecnologia regenerativa biomolecular digital aplicada", "biotecnologia biomolecular aplicada em saúde digital"
  ];

  // Junta todas as listas
  const termos = [...dnaProjetado, ...biotecnologia];

  // ===================== FUNÇÃO DE NORMALIZAÇÃO =====================
  function normalizarTexto(texto) {
    return texto
      .toLowerCase()
      .replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // remove símbolos e números
  }

  // ===================== EVENTO DE PESQUISA =====================
  searchButton.addEventListener("click", function () {
    const termoDigitado = normalizarTexto(searchInput.value);

    const encontrado = termos.some(t => normalizarTexto(t) === termoDigitado);

    if (encontrado) {
      const url = "https://www.google.com/search?q=" + encodeURIComponent(searchInput.value);
      window.open(url, "_blank");
    } else {
      alert("⚠️ Termo não encontrado na lista permitida!");
    }
  });
});





document.addEventListener("DOMContentLoaded", function () {
    const url = "https://www.genome.gov/human-genome-project";
  
    new QRCode(document.getElementById("qrcode"), {
      text: url,
      width: 113,   // 3cm ≈ 113px
      height: 113,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  });
  


 
  



// Função principal para carregar o player do YouTube
function initYouTubePlayer(playerId, videoId, containerId, overlayId) {
  const player = new YT.Player(playerId, {
    videoId: videoId,
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0
    },
    events: {
      onReady: (event) => {
        const iframe = document.getElementById(playerId);
        const overlay = document.getElementById(overlayId);

        // Play/Pause ao interagir com o player
        iframe.addEventListener('mouseenter', () => {
          player.playVideo();
          overlay.style.opacity = "0";
        });

        iframe.addEventListener('mouseleave', () => {
          player.pauseVideo();
          overlay.style.opacity = "1";
        });

        overlay.addEventListener('click', (e) => {
          e.preventDefault();
          if (player.getPlayerState() === YT.PlayerState.PLAYING) {
            player.pauseVideo();
            overlay.style.opacity = "1";
          } else {
            player.playVideo();
            overlay.style.opacity = "0";
          }
        });

        // Pause ao clicar fora
        document.addEventListener('click', (e) => {
          if (!iframe.contains(e.target) && !overlay.contains(e.target)) {
            player.pauseVideo();
            overlay.style.opacity = "1";
          }
        });

        // Pause ao pressionar a tecla ESC
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            player.pauseVideo();
            overlay.style.opacity = "1";
          }
        });
      }
    }
  });
}

// Função para criar o gráfico de barras com interações
function createBarChart(data) {
  const svg = document.getElementById('chartSVG');
  const tooltip = document.getElementById('chartTooltip');
  const wrap = document.getElementById('biotechChart');
  let persistentTarget = null;

  const colors = ["#000000", "#1a1a1a", "#333333"];
  const width = svg.clientWidth;
  const height = svg.clientHeight;
  const barWidth = width / data.length - 10;
  const maxValue = Math.max(...data.map(d => d.value));

  svg.innerHTML = ""; // Limpa o SVG antes de redesenhar

  // Função para desenhar o gráfico
  data.forEach((d, i) => {
    const barHeight = (d.value / maxValue) * (height - 20);

    // Barra
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", i * (barWidth + 10) + 5);
    rect.setAttribute("y", height - barHeight - 15);
    rect.setAttribute("width", barWidth);
    rect.setAttribute("height", barHeight);
    rect.setAttribute("fill", colors[i]);
    rect.classList.add("bar");

    // Rótulo
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", i * (barWidth + 10) + barWidth / 2 + 5);
    label.setAttribute("y", height - 2);
    label.textContent = d.country;
    label.classList.add("x-label");

    // Eventos de interação
    rect.addEventListener("mouseenter", (e) => {
      if (!persistentTarget) showTooltip(e, d);
    });

    rect.addEventListener("mouseleave", () => {
      if (!persistentTarget) hideTooltip();
    });

    rect.addEventListener("click", (e) => {
      if (persistentTarget === rect) {
        persistentTarget = null;
        hideTooltip();
        rect.classList.remove("active");
      } else {
        if (persistentTarget) persistentTarget.classList.remove("active");
        persistentTarget = rect;
        persistentTarget.classList.add("active");
        showTooltipPersistent(e, d);
      }
    });

    svg.appendChild(rect);
    svg.appendChild(label);
  });

  // Função para exibir tooltip
  function showTooltip(e, d) {
    tooltip.textContent = `${d.country}: ${d.value}`;
    tooltip.style.display = "block";
    positionTooltip(e);
  }

  // Função para esconder tooltip
  function hideTooltip() {
    tooltip.style.display = "none";
  }

  // Função para tooltip persistente
  function showTooltipPersistent(e, d) {
    tooltip.textContent = `${d.country}: ${d.value}`;
    tooltip.style.display = "block";
    positionTooltip(e);
  }

  // Função para posicionar tooltip
  function positionTooltip(e) {
    const rect = wrap.getBoundingClientRect();
    tooltip.style.left = `${rect.left + e.target.getAttribute("x") * 1 + 10}px`;
    tooltip.style.top = `${rect.top + e.target.getAttribute("y") * 1 - 25}px`;
  }

  // Evento de resize para ajustar o gráfico
  window.addEventListener("resize", () => drawChart());

  // Função para redesenhar o gráfico
  function drawChart() {
    createBarChart(data);
  }

  // Chamada inicial
  drawChart();
}

// Função para alternar entre gráficos
function toggleChart(chartContainerId, chart) {
  const chartContainer = document.getElementById(chartContainerId);
  let chartInitialized = false;

  chartContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    chartContainer.style.display = 'block';

    if (!chartInitialized) {
      chartInitialized = true;
      // Supondo que a instância do Chart.js já esteja configurada
      setInterval(() => randomizeData(chart), 5000);
    }
  });

  // Ocultar o gráfico ao clicar fora
  document.addEventListener('click', (e) => {
    if (!chartContainer.contains(e.target)) {
      chartContainer.style.display = 'none';
    }
  });
}

// Função para randomizar os dados do gráfico
function randomizeData(chart) {
  chart.data.datasets.forEach((dataset) => {
    dataset.data = dataset.data.map((value) => {
      let variation = Math.floor(Math.random() * 100) - 50; // Variação entre -50 e +50
      return Math.max(0, value + variation);
    });
  });
  chart.update();
}

// Função para ajustes de layout responsivo
function adjustLayout() {
  const isMobile = window.innerWidth <= 768;
  const videos = document.querySelectorAll("iframe, video");
  const images = document.querySelectorAll("img");
  const menu = document.querySelector("nav");
  const body = document.body;

  // Ajuste de vídeos e imagens
  const videoStyles = isMobile ? { width: "100%", maxWidth: "320px" } : { width: "640px", height: "360px" };
  videos.forEach(video => Object.assign(video.style, videoStyles));

  const imageStyles = isMobile ? { width: "100%", maxWidth: "320px" } : { width: "auto", maxWidth: "600px" };
  images.forEach(img => Object.assign(img.style, imageStyles));

  // Ajuste de menu
  if (menu) {
    menu.style.position = isMobile ? "fixed" : "relative";
    menu.style.backgroundColor = isMobile ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.6)";
    menu.style.flexDirection = isMobile ? "column" : "row";
  }

  // Ajuste do corpo da página
  body.style.paddingTop = isMobile ? "70px" : "80px";
}

window.addEventListener("load", adjustLayout);
window.addEventListener("resize", adjustLayout);

// Exemplo de chamada para o player do YouTube
initYouTubePlayer('customYtVideo', 'C5x073iElaA', 'ytPlayerContainer', 'customPlayOverlay');

// Exemplo de criação de gráfico
const data = [
  { country: "OMS", value: 6.83 * 1000 },
  { country: "Brasil", value: 27347.3 },
  { country: "UE", value: 261400 }
];
createBarChart(data);
