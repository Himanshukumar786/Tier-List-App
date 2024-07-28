const tierInput = document.getElementById("Tier");
console.log(tierInput)

const submitBtn = document.getElementById("submit")
submitBtn.addEventListener('click', (Event) => {
    Event.preventDefault();
    const target = Event.target;

    createTierList()
});

function createTierList(tierListName) {
    const newTierList = document.createElement('div');

    newTierList.classList.add('tier-list');

    const heading = document.createElement('div'); // Try to randomly assign color to this heading
    heading.classList.add('heading');

    const textContainer = document.createElement('div');
    textContainer.textContent = tierListName;

    heading.appendChild(textContainer);

    const newTierListItems = document.createElement('div');
    newTierListItems.classList.add('tier-list-items');


    newTierList.appendChild(heading);
    newTierList.appendChild(newTierListItems);

    // setUpDropZoneInTierListItem(newTierListItems);

    const tierSection = document.getElementById('tier-list-section');
    tierSection.appendChild(newTierList);
}