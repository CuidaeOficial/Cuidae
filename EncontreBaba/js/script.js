  // Função para verificar se todas as estrelas foram selecionadas
  function verificarEstrelas() {
    var estrelas = document.getElementsByClassName("fa-star");
    var todasSelecionadas = true;

    for (var i = 0; i < estrelas.length; i++) {
      if (!estrelas[i].classList.contains("clicked")) {
        todasSelecionadas = false;
        break;
      }
    }

    if (todasSelecionadas) {
      window.location.href = "avaliacoes.html"; // Substitua "avaliacoes.html" pela página desejada
    }
  }

  // Adicionar evento de clique nas estrelas
  var estrelas = document.getElementsByClassName("fa-star");
  for (var i = 0; i < estrelas.length; i++) {
    estrelas[i].addEventListener("click", function() {
      this.classList.toggle("clicked");
      verificarEstrelas();
    });
  }