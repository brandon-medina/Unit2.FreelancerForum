// Initial freelancer data
let freelancers = [
    { name: 'Alice', occupation: 'Writer', price: 30 },
    { name: 'Bob', occupation: 'Teacher', price: 50 }
];
// Possible names array
let possibleNames = ['Alice', 'Bob', 'Carol'];

// Possible occupations array
let possibleOccupations = ['Writer', 'Teacher', 'Programmer'];

// Function to render freelancers to the DOM
function renderFreelancers() {
    const freelancerList = document.getElementById('freelancerList');
    freelancerList.innerHTML = ''; // Clear the list before repopulating
    freelancers.forEach(freelancer => {
        const freelancerElement = document.createElement('div');
        freelancerElement.innerHTML = `
            <h3>${freelancer.name}</h3>
            <p>${freelancer.occupation} - Starting at $${freelancer.price}</p>
        `;
        freelancerList.appendChild(freelancerElement);
    });
    calculateAndDisplayAverage();
}

// Function to calculate and display the average price
function calculateAndDisplayAverage() {
    const averagePriceElement = document.getElementById('averagePrice');
    const total = freelancers.reduce((acc, curr) => acc + curr.price, 0);
    const average = total / freelancers.length;
    averagePriceElement.textContent = `Average Starting Price: $${average.toFixed(2)}`;
}

// Simulating new freelancer entries
function addFreelancer(name, occupation, price) {
    setTimeout(() => {
        freelancers.push({ name, occupation, price });
        renderFreelancers(); // Re-render the freelancer list including new entry
    }, 3000); // New freelancers appear every 3 seconds
}

function addRandomFreelancer() {
    if (freelancers.length < 10) {
        const name = possibleNames[Math.floor(Math.random() * possibleNames.length)];
        const occupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
        const price = Math.floor(Math.random() * 100) + 20; // Random price between 20 and 120
        
        freelancers.push({ name, occupation, price });
        renderFreelancers(); // Re-render the freelancer list including new entry
    };
}

// Initialize the freelancer listing on document load
document.addEventListener('DOMContentLoaded', () => {
    renderFreelancers();
    // Adding Carol after a few seconds
    addFreelancer('Carol', 'Programmer', 70);
    const intervalId = setInterval(() => {
        if (freelancers.length < 10) {
            addRandomFreelancer();
        } else {
            clearInterval(intervalId); // Stop adding when reaching 10 freelancers
        }
    }, 3000); // Adjust the interval as needed
});