let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}


let slidesI = 1;
showFotos(slidesI);

function plusSlides(n) {
  showFotos(slidesI += n);
}

function currentSlide(n) {
  showFotos(slidesI = n);
}

function showFotos(n) {
  let i;
  let slides = document.getElementsByClassName("my");
  let dits = document.getElementsByClassName("dit");
  if (n > slides.length) {slidesI = 1}
  if (n < 1) {slidesI = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dits.length; i++) {
    dits[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideI-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  var senha = document.getElementById('cf').value;
  var senha = document.getElementById('dt_nasc').value;
  var senha = document.getElementById('celular').value;
  var senha = document.getElementById('rua').value;
  var senha = document.getElementById('nacionalidade').value;
  var senha = document.getElementById('cidade').value;
  var senha = document.getElementById('bairro').value;
  var senha = document.getElementById('cep').value;
  var dados = {
    
  nome: nome,
  email: email,
  senha: senha,
  cpf: cpf,
  dt_nasc: dt_nasc,
  celular:  celular,
  rua: rua,
  nacionalidade: nacionalidade,
  cidade: cidade,
  bairro: bairro,
  cep: cep,



  };

  fetch('/salvar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then(function(response) {
    if (response.ok) {
      alert('Dados salvos com sucesso!');
    } else {
      alert('Ocorreu um erro ao salvar os dados.');
    }
  })
  .catch(function(error) {
    console.error('Ocorreu um erro:', error);
  });
});
