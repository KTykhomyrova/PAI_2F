window.onload = function() {
    const rightBlock = document.querySelector('#aside');
    const img = rightBlock.querySelector('img');
    const ul = rightBlock.querySelector('ul');
  
    document.getElementById('indigo').onclick = () => rightBlock.style.backgroundColor = 'indigo';
    document.getElementById('steelBlue').onclick = () => rightBlock.style.backgroundColor = 'steelblue';
    document.getElementById('olive').onclick = () => rightBlock.style.backgroundColor = 'olive';
  
    document.getElementById('fontColorSelect').onchange = function() {
      rightBlock.style.color = this.value;
    };
  
    document.getElementById('fontSizeInput').onchange = function() {
      rightBlock.style.fontSize = this.value;
    };
  
    document.getElementById('borderCheckbox').onclick = function() {
      img.style.border = this.checked ? '3px solid white' : 'none';
    };
  
    const radios = document.getElementsByName('listStyle');
    radios.forEach(radio => {
      radio.onclick = () => ul.style.listStyleType = radio.value;
    });
  };
  