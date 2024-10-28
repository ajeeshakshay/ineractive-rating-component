const rating_cards = document.querySelectorAll(".ratings-to-select span");
const submit_btn = document.querySelector(".submit-button");
const rate_point = document.querySelector(".selected-rating");
const rating_section = document.querySelector(".rating-container");
const thank_section = document.querySelector(".thank-you-container");
let rate = null;

rating_cards.forEach(function(rating_card){
  rating_card.addEventListener("click", function(e){
    const active = document.querySelector(".checked");
    console.log("worked");
    
    if (active) {
      active.classList.remove("checked");//un-highlights the previously checked ratings
    }
    const card = e.target;//used to highlight the newly selected rating
    card.classList.add("checked");
    rate = e.target.innerText;
    console.log(rate);
  });
});

submit_btn.addEventListener("click", function(){
  if (rate) {
    rate_point.innerText = rate;
    rating_section.classList.add("hidden");
    thank_section.classList.remove("hidden");
  }
});



