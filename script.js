document.addEventListener("DOMContentLoaded", function(event) {
	const container = document.querySelector('.brands');
	const showMoreButton = document.querySelector('.brands__show-more--bth');
	const icon = document.querySelector('.icon');

	if (window.matchMedia("(max-width: 700px)").matches) {
		let swiper = new Swiper(".mySwiper", {
		  slidesPerView: "auto",
		  spaceBetween: 30,
		  pagination: {
			el: ".swiper-pagination",
			clickable: true,
		  },
		});
	}


const handleClick = (event) => {
  if (container?.classList.contains("expanded")) {
    showMoreButton.textContent = "Показать всё";
	
  } else {
	showMoreButton.textContent = "Скрыть";
  }

};

showMoreButton.addEventListener("click", handleClick);


showMoreButton.onclick = function() {
	icon.classList.toggle('icon__content');
	container.classList.toggle('expanded');
}

});

