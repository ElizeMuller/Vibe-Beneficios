fetch("../pages/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  }).catch(error => {
    console.log(error)
    });

fetch("../pages/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  }).catch(error => {
    console.log(error)
    });

// dropdown menu
function dropdownMenu() {
  document.querySelector("#dropdown-menu").classList.toggle("active");
};


//Sobre Nós
function iniciarModal(ModalId){
  const fade = document.getElementById(ModalId);
  const modal = document.getElementById('SobreModal');
  fade.classList.add('mod');
  modal.classList.add('mod');
  fade.addEventListener('click', (e) => {
  if(e.target.id == ModalId){
    fade.classList.remove('mod')
  }
  });
}
//iniciarModal('SobreFade');
const SobreBotao = document.querySelector(".SobreBotao");
SobreBotao.addEventListener('click', () => iniciarModal('SobreFade'));

