'use strict';

const btn = document.getElementById('btn'),
  overlay = document.querySelector('.overlay');
// btn.addEventListener('click', (e) => {
//   // alert('click');
//   console.log(e.target);
//   //   // event.target.remove();
// });

// let i = 0;
const deleteElement = (e) => {
  // i++;
  // if (i == 1) {
  //   btn.removeEventListener('click', deleteElement);
  console.log(e.currentTarget);
  console.log(e.type);
  // }
};

btn.addEventListener('click', deleteElement, { onse: true });
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.target);
});

btns.forEach((btn) => {
  btn.addEventListener('click', deleteElement);
});
