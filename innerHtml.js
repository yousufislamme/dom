var authorsStyle = document.getElementsByClassName('author');

// authorsStyle[2].style.background = 'green';
// authorsStyle[2].style.color = 'white';
for(i = 0; i < authorsStyle.length; i++){
   var element = authorsStyle[i];
   console.log(element);

   element.style.backgroundColor = '#ff6b8095';
}

const addParagraph = document.getElementById('add-artical');
const createElement = document.createElement('p');
createElement.innerHTML = ('Add this line from JS...');

addParagraph.appendChild(createElement);














