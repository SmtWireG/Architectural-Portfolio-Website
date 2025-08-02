   let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    document.querySelector(".prev").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });
    document.querySelector(".next").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
    function showSlide(index) {
      let slidesContainer = document.querySelector(".slides");
      let offset = -index * 100;
      slidesContainer.style.transform = `translateX(${offset}%)`;
    }
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 9000);
    showSlide(currentIndex);
