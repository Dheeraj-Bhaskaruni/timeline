// script.js
document.addEventListener("DOMContentLoaded", function() {
  const events = [
    {
      date: "2023-01-01",
      title: "Event 1",
      description: "Description for Event 1.",
      media: "img/rat.jpeg"
    },
    {
      date: "2023-05-05",
      title: "Event 2",
      description: "Description for Event 2.",
      media: "img/Tiger.jpeg"
    },
    {
      date: "2023-07-04",
      title: "Event 2",
      description: "Description for Event 3.",
      media: "img/rat.jpeg"
    },


  ];

  const timelineNavigation = document.getElementById('timeline-navigation');
  const eventDisplay = document.getElementById('event-display');

  events.forEach((event, index) => {
    const navItem = document.createElement('div');
    navItem.textContent = event.date;

    navItem.addEventListener('click', () => {
      displayEvent(index);
    });

    timelineNavigation.appendChild(navItem);

    const eventDetail = document.createElement('div');
    eventDetail.innerHTML = `
            <h2>${event.title}</h2>
            <p>${event.description}</p>
            <img src="${event.media}" alt="${event.title}" width="200" />
        `;
    eventDisplay.appendChild(eventDetail);
  });

  function displayEvent(index) {
    const allEventDivs = document.querySelectorAll("#event-display > div");
    allEventDivs.forEach((div, divIndex) => {
      if(index === divIndex) {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });
  }

  // Display the first event by default
  displayEvent(0);
});
