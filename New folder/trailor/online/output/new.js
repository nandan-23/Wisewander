$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
  
        var target = this.hash,
        $target = $(target);
  
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1400, 'swing', function () {
            window.location.hash = target;
        });
    });
  });
  




// This script will be in your new.js file

window.onload = function() {
    // Get the number of days from user input.
    // I'm assuming that you are storing the user input in local storage.
    var numDays = localStorage.getItem('numDays');

    // Get the main content div
    var mainContentDiv = document.querySelector('.main-content');

    // Create the Overview card
    var overviewCard = createCard('Overview Card', 'This is the overview of the trip.');
    mainContentDiv.appendChild(overviewCard);

    // Create the Total Cost card
    var totalCostCard = createCard('Total Cost Card', 'This is the total cost of the trip.');
    mainContentDiv.appendChild(totalCostCard);

    // Create the Day cards
    for(var i=1; i <= numDays; i++) {
        var dayCard = createCard('Day ' + i + ' Card', 'This is the itinerary for day ' + i + '.');
        mainContentDiv.appendChild(dayCard);
    }
};

function createCard(title, content) {
    // Create section
    var section = document.createElement('div');
    section.className = 'section';

    // Create card
    var card = document.createElement('div');
    card.className = 'card';

    // Create card title
    var cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    // Create card content
    var cardContent = document.createElement('p');
    cardContent.textContent = content;

    // Add title and content to card
    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    // Add card to section
    section.appendChild(card);

    return section;
}
