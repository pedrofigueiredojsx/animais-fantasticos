export default function initAccordion() {
  const accoridonList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';

  if(accoridonList.length) {
    accoridonList[0].classList.add(activeClass);
    accoridonList[0].nextElementSibling.classList.add(activeClass);


    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accoridonList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

console.log('Dev Mode');