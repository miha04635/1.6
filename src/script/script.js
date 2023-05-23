document.addEventListener("DOMContentLoaded", function(event) {
	const container = document.querySelector('.brands');
	const showMoreButton = document.querySelector('.brands__show-more--bth');
	const icon = document.querySelector('.icon');
	const iconDevice = document.querySelector('.Device__icon');
	const containerDevice = document.querySelector('.Device');
	const showMoreButtonDevice = document.querySelector('.Device__show-more--bth');
	const burger = document.querySelector('.header__burger');
	const aside = document.querySelector('.aside');
	const burgerClosed = document.querySelector('.burger__bth');
	const containerAside = document.querySelector('.container');

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
    
	showMoreButton.innerHTML = "Показать всё";
  } else {
	showMoreButton.innerHTML = "Скрыть";
  }

};

showMoreButton.addEventListener("click", handleClick);

showMoreButton.onclick = function() {
	icon.classList.toggle('icon__content');
	container.classList.toggle('expanded');
}

const showMore = (event) => {
	if (containerDevice?.classList.contains("expanded")) {
		
		showMoreButtonDevice.textContent = "Показать всё";
	} else {
		showMoreButtonDevice.textContent = "Скрыть";
	}
  
  };
  
  showMoreButtonDevice.addEventListener("click", showMore);
  
  showMoreButtonDevice.onclick = function() {
	  iconDevice.classList.toggle('icon__content');
	  containerDevice.classList.toggle('expanded');
  }


  const openBurger = (event) => {
	aside.classList.add('open')
  };

  const closedBurder = (event) => {
	aside.classList.remove('open')
  }
  
  window.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') { 
		aside.classList.remove('open')
	}
  });

  burger.addEventListener("click", openBurger);
  burgerClosed.addEventListener("click", closedBurder);

});





