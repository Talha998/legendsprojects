// Get DOM elements
const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Add Event Lisners
// 1. Toggle the Nav
toggle.addEventListener('click',   ()  => 
   document.body.classList.toggle('show.nav')
);

// 2. show the modal
open.addEventListener('click' , ()  =>
 modal.classList.add('show-modal')
);


//3. Show the Modal
close.addEventListener('click' , () =>
modal.classList.remove('show-modal') 
);

// 4. Close the Modal on click Outside Modal 
  window.addEventListener('click' , e => 
      e.target === modal ? modal.classList.remove('show-modal') : false
    );