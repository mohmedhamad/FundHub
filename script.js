// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
document.getElementById('applyBtn').addEventListener('click', function() {
    // Get form input values
    const foundersName = document.getElementById('foundersName').value;
    const startupName = document.getElementById('startupName').value;
    const email = document.getElementById('email').value;
    const industry = document.getElementById('industry').value;
    const country = document.getElementById('country').value;
    const brief = document.getElementById('brief').value;
    const videoLink = document.getElementById('videoLink').value;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return; // Stop form submission if email is invalid
    }

    // Validate empty fields
    if (!foundersName || !startupName || !email || !industry || !country || !brief || !videoLink) {
        alert('Please fill in all fields.');
        return; // Stop form submission if any field is empty
    }

    // Replace this with your actual form submission logic
    alert('Profile Submitted!');

    // Reload the page after submitting the form
    location.reload();
});

// Your existing JavaScript code

document.addEventListener("DOMContentLoaded", () => {
    displayProjects(projectData); // Assuming you have projectData array defined
});
const projectData = [
    {
        name: "E-commerce Platform",
        description: "Developed a scalable e-commerce platform with advanced search functionality and secure payment gateways.",
        tags: ["Web Development", "E-commerce", "JavaScript"],
    },
    {
        name: "Mobile Banking App",
        description: "Designed and implemented a user-friendly mobile banking application with real-time transaction updates.",
        tags: ["Mobile App", "Finance", "UI/UX Design"],
    },
    {
        name: "Data Analytics Dashboard",
        description: "Built a data analytics dashboard for visualizing and analyzing large datasets, providing valuable insights.",
        tags: ["Data Analytics", "Dashboard", "Visualization"],
    },
];
// Function to create project cards
function createProjectCard(project) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <h2>${project.name}</h2>
        <p>${project.description}</p>
        <div class="tags">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
    `;

    return projectCard;
}

// Function to display projects
function displayProjects(projectData) {
    const projectList = document.getElementById("project-list");

    // Clear existing project cards
    projectList.innerHTML = "";

    // Iterate through projects and create project cards
    projectData.forEach((project) => {
        const projectCard = createProjectCard(project);
        projectList.appendChild(projectCard);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    displayProjects(projectData);
});

