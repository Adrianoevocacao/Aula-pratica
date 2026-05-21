/* LOGIN */

function login(){

const usuario =
document.getElementById("usuario").value

const senha =
document.getElementById("senha").value

if(usuario === "admin" && senha === "1234"){

localStorage.setItem("logado","sim")

document.getElementById("status-login")
.innerHTML =
"✅ Login realizado com sucesso"

document.getElementById("login")
.style.display = "none"

document.getElementById("site")
.style.display = "block"

}else{

document.getElementById("status-login")
.innerHTML =
"❌ Usuário ou senha inválidos"

}

}

/* LOGIN AUTOMÁTICO */

if(localStorage.getItem("logado") === "sim"){

document.getElementById("login")
.style.display = "none"

document.getElementById("site")
.style.display = "block"

}

/* CARRINHO */

let carrinho = []

function adicionarCarrinho(nome,preco){

carrinho.push({ nome, preco })

renderizarCarrinho()

}

function renderizarCarrinho(){

const lista =
document.getElementById("lista-carrinho")

const total =
document.getElementById("total")

lista.innerHTML = ""

let soma = 0

carrinho.forEach((item,index)=>{

soma += item.preco

lista.innerHTML += `
<li>
${item.nome} - R$ ${item.preco.toFixed(2)}
<button onclick="removerItem(${index})">❌</button>
</li>
`

})

total.innerHTML =
`Total: R$ ${soma.toFixed(2)}`

}

function removerItem(index){

carrinho.splice(index,1)

renderizarCarrinho()

}

function finalizarPedido(){

if(carrinho.length === 0){
alert("Seu carrinho está vazio!")
return
}

let mensagem =
"Olá, quero fazer o seguinte pedido:%0A%0A"

let total = 0

carrinho.forEach(item=>{

mensagem += `- ${item.nome} | R$ ${item.preco.toFixed(2)}%0A`

total += item.preco

})

mensagem += `%0ATotal: R$ ${total.toFixed(2)}`

window.open(
`https://wa.me/5511994600556?text=${mensagem}`,
"_blank"
)

}

/* =========================
   CARROSSEL MELHORADO
========================= */

let slideIndex = 1;

let slideInterval;

// inicia corretamente
document.addEventListener("DOMContentLoaded", () => {
showSlides(slideIndex);
startAutoSlide();
setupSwipe();
setupPauseOnHover();
});

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {

let i;

let slides =
document.getElementsByClassName("slide");

let dots =
document.getElementsByClassName("dot");

if (slides.length === 0) return;

if (n > slides.length) {
slideIndex = 1
}

if (n < 1) {
slideIndex = slides.length
}

for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}

for (i = 0; i < dots.length; i++) {
dots[i].className =
dots[i].className.replace(" active", "");
}

slides[slideIndex-1].style.display = "block";

if (dots[slideIndex-1]) {
dots[slideIndex-1].className += " active";
}

}

/* AUTO PLAY */

function startAutoSlide(){
slideInterval = setInterval(() => {
plusSlides(1);
}, 5000);
}

/* PAUSAR AO PASSAR MOUSE */

function setupPauseOnHover(){

const container =
document.querySelector(".slideshow-container");

if(!container) return;

container.addEventListener("mouseenter", () => {
clearInterval(slideInterval);
});

container.addEventListener("mouseleave", () => {
startAutoSlide();
});

}

/* SWIPE (CELULAR) */

function setupSwipe(){

const container =
document.querySelector(".slideshow-container");

if(!container) return;

let startX = 0;

container.addEventListener("touchstart", (e) => {
startX = e.touches[0].clientX;
});

container.addEventListener("touchend", (e) => {

let endX = e.changedTouches[0].clientX;

let diff = startX - endX;

if(Math.abs(diff) > 50){

if(diff > 0){
plusSlides(1);
}else{
plusSlides(-1);
}

}

});

}