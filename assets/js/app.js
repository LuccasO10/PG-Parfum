document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // BOTÃO VOLTAR
  // =========================
  const btnVoltar = document.getElementById("btn-voltar");

  if (btnVoltar) {
    btnVoltar.addEventListener("click", function (e) {
      e.preventDefault();

      if (window.history.length > 1) {
        history.back();
      } else {
        window.location.href = "index.html";
      }
    });
  }


  // =========================
  // CARROSSEL
  // =========================
  console.log("Carrossel ativo");

  document.querySelectorAll(".carrossel-wrapper").forEach(wrapper => {

    const carrossel = wrapper.querySelector(".carrossel");
    const btnLeft = wrapper.querySelector(".esquerda");
    const btnRight = wrapper.querySelector(".direita");

    if (!carrossel || !btnLeft || !btnRight) {
      console.warn("Carrossel incompleto:", wrapper);
      return;
    }

    const scrollAmount = 300;

    btnRight.addEventListener("click", () => {
      carrossel.scrollLeft += scrollAmount;
    });

    btnLeft.addEventListener("click", () => {
      carrossel.scrollLeft -= scrollAmount;
    });

  });

});

