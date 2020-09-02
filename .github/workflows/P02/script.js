const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const ticketPrice = +movieSelect.value;

populatedUI();
// pull date from local storage to build UI
 function populatedUI() {
     const selectedSeats = localStorage.getItem('selectedSeats');
     if (selectedSeats !== null && selectedSeats.length > 0)  {
         seats.forEach( (seat, index ) => {
             if (selectedSeats.indexOf(index) > -1 ) {
                seat.classList.add('selected');
            }
         } ) 
     }
       const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
       if (selectedMovieIndex  !== null) {
           movieSelect.selectedIndex = selectedMovieIndex;
       }
 }


// Function to  update counts 
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const countSelectedSeats = selectedSeats.length;
    const seatsIndex = [...selectedSeats].map(seat =>[...seats].indexOf(seat));
    localStorage.setItem('selectedSeats',JSON.stringify(seats.Index));
    count.innerText = countSelectedSeats;
    total.innerText = ticketPrice * countSelectedSeats;   
   }

 // Function to save thr selected movie and  
    function setMovieData(movieIndex,moviePrice) {
         localStorage.setItem('selectedmovieIndex',movieIndex);
         localStorage.setItem('selectedMoviePrice',moviePrice);
    }
 // Event listner change on selected movie
      movieSelect.addEventListener('change', (e) => {
      ticketPrice = +e.target.value;
      setMovieData(e.target.selectedIndex, e.target.value);  
      updateSelectedCount(); 
    })

// Event listener for click on Available seats 

container.addEventListener('click', (e) => {
        if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied') );{
        e.target.classList.toggle('selected');
        updateSelectedCount();
        }
    } )

// calculate initial number of seat 
    updateSelectedCount();



