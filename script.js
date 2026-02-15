const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");


let sampleEvent =
    [
        {
            title: "Web dev",
            date: "4-12-2026",
            category: "workshop",
            description: "Learn basic of HTML and CSS."
        },
        {
            title: "Web dev2",
            date: "5-12-2026",
            category: "conference",
            description: "Learn basic of Javascript."
        }
    ]

//add sample events 
addSampleBtn.addEventListener("click",()=>{
    sampleEvent.forEach(addEvent);
})


//   create event card  
function createEventCard(eventData){

    const card = document.createElement("div");
    card.className = "event-card";

    // Header div
    const header = document.createElement("div");
    header.className = "card-header";

    const title = document.createElement("h3");
    title.textContent = eventData.title;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "×";

    header.appendChild(title);
    header.appendChild(deleteBtn);

    // Date
    const date = document.createElement("div");
    date.className = "event-date";
    date.textContent = "📅 " + eventData.date;

    // Category
    const category = document.createElement("span");
    category.className = "event-category";
    category.textContent = eventData.category;

    // Description
    const description = document.createElement("p");
    description.className = "event-description";
    description.textContent = eventData.description;

    // Append everything to card
    card.appendChild(header);
    card.appendChild(date);
    card.appendChild(category);
    card.appendChild(description);

    return card;
}



//Add the card inside eventcontainer
function addEvent(eventData){
  const emptyState=document.querySelector(".empty-state");
  if(emptyState) emptyState.remove();

  const card = createEventCard(eventData);
  eventContainer.appendChild(card);

  // ✅ FEATURE 1: Individual Delete Button
  const deleteBtn = card.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", () => {
      card.remove();

      if(eventContainer.children.length === 0){
          eventContainer.innerHTML = `
          <div class="empty-state">
              No events yet. Add your first event!
          </div>`;
      }
  });
}


eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    }

    addEvent(eventData);
    eventForm.reset();
})


//clear button to clear everything
clearAllBtn.addEventListener("click",()=>{
    eventContainer.innerHTML=`<div class="empty-state">
    No events yet. Add your first event!
    </div>`
})



/* ======================================================
   ✅ FEATURE 2: Keyboard Event (DOM Manipulation Section)
   ====================================================== */

const demoContent = document.getElementById("demoContent");

// Listen for keyboard press anywhere on page
document.addEventListener("keydown", (e) => {

    // Show which key user pressed
    demoContent.innerText = "You pressed: " + e.key;

});







