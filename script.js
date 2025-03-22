// Add this JavaScript code to the end of your HTML file, before the closing </body> tag

// Data storage
const careerData = {
    roadmaps: [
        {
            id: "software-dev",
            title: "Software Development",
            category: "tech",
            description: "Master the art of creating software applications with this comprehensive roadmap.",
            progress: 0,
            steps: [
                {
                    id: "software-dev-1",
                    title: "Foundations",
                    level: "basic",
                    description: "Learn programming basics, data structures, and algorithms.",
                    resources: [
                        { title: "Introduction to Computer Science", type: "course", url: "#", description: "A comprehensive introduction to CS concepts and programming" },
                        { title: "Data Structures and Algorithms", type: "book", url: "#", description: "Essential guide to data structures and algorithms" },
                        { title: "Git & GitHub Crash Course", type: "video", url: "#", description: "Learn version control basics for software development" }
                    ],
                    isCompleted: false
                },
                {
                    id: "software-dev-2",
                    title: "Specialization",
                    level: "intermediate",
                    description: "Choose your path: Web, Mobile, Backend, or Systems development.",
                    resources: [
                        { title: "Web Development Bootcamp", type: "course", url: "#", description: "Full-stack web development from the ground up" },
                        { title: "Mobile App Development", type: "tutorial", url: "#", description: "Build native mobile applications for iOS and Android" },
                        { title: "Backend Engineering with Node.js", type: "course", url: "#", description: "Server-side programming and API development" }
                    ],
                    isCompleted: false
                },
                {
                    id: "software-dev-3",
                    title: "Advanced Skills",
                    level: "advanced",
                    description: "Master design patterns, architecture, and best practices.",
                    resources: [
                        { title: "Software Architecture Patterns", type: "book", url: "#", description: "Learn essential design patterns for robust applications" },
                        { title: "Clean Code", type: "book", url: "#", description: "Writing maintainable and efficient code" },
                        { title: "System Design Interview", type: "course", url: "#", description: "Learn how to design scalable systems" }
                    ],
                    isCompleted: false
                }
            ]
        },
        {
            id: "data-science",
            title: "Data Science",
            category: "business",
            description: "Transform raw data into valuable insights with this structured learning path.",
            progress: 0,
            steps: [
                {
                    id: "data-science-1",
                    title: "Basics",
                    level: "basic",
                    description: "Statistics, programming, and data wrangling skills.",
                    resources: [
                        { title: "Statistics for Data Science", type: "course", url: "#", description: "Essential statistical concepts for data analysis" },
                        { title: "Python for Data Analysis", type: "book", url: "#", description: "Data manipulation with Pandas and NumPy" },
                        { title: "SQL Fundamentals", type: "tutorial", url: "#", description: "Database queries for data extraction" }
                    ],
                    isCompleted: false
                },
                {
                    id: "data-science-2",
                    title: "Analysis & Visualization",
                    level: "intermediate",
                    description: "Data analysis techniques and visualization tools.",
                    resources: [
                        { title: "Exploratory Data Analysis", type: "course", url: "#", description: "Techniques for understanding data structure and patterns" },
                        { title: "Data Visualization with Python", type: "tutorial", url: "#", description: "Creating insightful visualizations with Matplotlib and Seaborn" },
                        { title: "Tableau Fundamentals", type: "course", url: "#", description: "Building interactive dashboards" }
                    ],
                    isCompleted: false
                },
                {
                    id: "data-science-3",
                    title: "Machine Learning",
                    level: "advanced",
                    description: "Build predictive models and deploy machine learning solutions.",
                    resources: [
                        { title: "Machine Learning A-Z", type: "course", url: "#", description: "Comprehensive guide to ML algorithms" },
                        { title: "Deep Learning Specialization", type: "course", url: "#", description: "Neural networks and deep learning techniques" },
                        { title: "MLOps Fundamentals", type: "tutorial", url: "#", description: "Deploying and managing machine learning models in production" }
                    ],
                    isCompleted: false
                }
            ]
        },
        {
            id: "ux-design",
            title: "UX/UI Design",
            category: "design",
            description: "Create delightful digital experiences with this comprehensive design roadmap.",
            progress: 0,
            steps: [
                {
                    id: "ux-design-1",
                    title: "Design Fundamentals",
                    level: "basic",
                    description: "Color theory, typography, layout principles, and user psychology.",
                    resources: [
                        { title: "Principles of Design", type: "course", url: "#", description: "Core visual design principles and elements" },
                        { title: "Color Theory for Designers", type: "tutorial", url: "#", description: "Understanding color psychology and harmonies" },
                        { title: "Typography Fundamentals", type: "course", url: "#", description: "Type selection, hierarchy, and readability" }
                    ],
                    isCompleted: false
                },
                {
                    id: "ux-design-2",
                    title: "UI & Interaction Design",
                    level: "intermediate", 
                    description: "Creating interfaces, wireframes, and prototypes.",
                    resources: [
                        { title: "UI Design Patterns", type: "book", url: "#", description: "Common interface patterns and best practices" },
                        { title: "Figma Essentials", type: "tutorial", url: "#", description: "Design and prototype interfaces with Figma" },
                        { title: "Interaction Design Principles", type: "course", url: "#", description: "Creating intuitive and engaging user interactions" }
                    ],
                    isCompleted: false
                },
                {
                    id: "ux-design-3",
                    title: "Research & Testing",
                    level: "advanced",
                    description: "User research methods, usability testing, and design systems.",
                    resources: [
                        { title: "User Research Methods", type: "course", url: "#", description: "Techniques for understanding user needs and behaviors" },
                        { title: "Usability Testing", type: "book", url: "#", description: "Planning and conducting effective usability tests" },
                        { title: "Design Systems", type: "tutorial", url: "#", description: "Building and maintaining scalable design systems" }
                    ],
                    isCompleted: false
                }
            ]
        },
        {
            id: "devops",
            title: "DevOps Engineer",
            category: "tech",
            description: "Bridge the gap between development and operations with automated processes.",
            progress: 0,
            steps: [
                {
                    id: "devops-1",
                    title: "Systems & Networking",
                    level: "basic",
                    description: "Operating systems, networking, and cloud fundamentals.",
                    resources: [
                        { title: "Linux Administration", type: "course", url: "#", description: "Essential Linux skills for DevOps" },
                        { title: "Networking Fundamentals", type: "tutorial", url: "#", description: "Understanding network protocols and architecture" },
                        { title: "Cloud Computing Basics", type: "course", url: "#", description: "Introduction to major cloud platforms" }
                    ],
                    isCompleted: false
                },
                {
                    id: "devops-2",
                    title: "Containerization & CI/CD",
                    level: "intermediate",
                    description: "Docker, Kubernetes, and continuous integration pipelines.",
                    resources: [
                        { title: "Docker for DevOps", type: "tutorial", url: "#", description: "Containerization for application deployment" },
                        { title: "Kubernetes in Action", type: "book", url: "#", description: "Container orchestration for scalable applications" },
                        { title: "CI/CD Pipeline Implementation", type: "course", url: "#", description: "Setting up automated build and deployment pipelines" }
                    ],
                    isCompleted: false
                },
                {
                    id: "devops-3",
                    title: "Infrastructure as Code",
                    level: "advanced",
                    description: "Terraform, Ansible, and automated infrastructure management.",
                    resources: [
                        { title: "Terraform Up & Running", type: "book", url: "#", description: "Infrastructure as code with Terraform" },
                        { title: "Ansible for DevOps", type: "course", url: "#", description: "Automating configuration management" },
                        { title: "Cloud Architecture Patterns", type: "tutorial", url: "#", description: "Designing resilient cloud infrastructure" }
                    ],
                    isCompleted: false
                }
            ]
        },
        {
            id: "product-mgmt",
            title: "Product Management",
            category: "business",
            description: "Guide product development from ideation to market success.",
            progress: 0,
            steps: [
                {
                    id: "product-mgmt-1",
                    title: "Product Fundamentals",
                    level: "basic",
                    description: "Market research, product life cycle, and user-centered design.",
                    resources: [
                        { title: "Introduction to Product Management", type: "course", url: "#", description: "Core concepts and responsibilities" },
                        { title: "User-Centered Product Design", type: "book", url: "#", description: "Designing products that solve real user problems" },
                        { title: "Market Research Techniques", type: "tutorial", url: "#", description: "Identifying opportunities and validating ideas" }
                    ],
                    isCompleted: false
                },
                {
                    id: "product-mgmt-2",
                    title: "Planning & Execution",
                    level: "intermediate",
                    description: "Roadmapping, agile methodologies, and feature prioritization.",
                    resources: [
                        { title: "Product Roadmapping", type: "course", url: "#", description: "Creating and managing effective product roadmaps" },
                        { title: "Agile Product Management", type: "book", url: "#", description: "Managing products with agile methodologies" },
                        { title: "Feature Prioritization Frameworks", type: "tutorial", url: "#", description: "Techniques for prioritizing product features" }
                    ],
                    isCompleted: false
                },
                {
                    id: "product-mgmt-3",
                    title: "Growth & Analytics",
                    level: "advanced",
                    description: "Metrics analysis, A/B testing, and data-driven decision making.",
                    resources: [
                        { title: "Product Metrics that Matter", type: "course", url: "#", description: "Defining and tracking key product metrics" },
                        { title: "A/B Testing for Product Managers", type: "tutorial", url: "#", description: "Designing and analyzing product experiments" },
                        { title: "Data-Driven Product Strategy", type: "book", url: "#", description: "Using data to inform product decisions" }
                    ],
                    isCompleted: false
                }
            ]
        },
        {
            id: "digital-marketing",
            title: "Digital Marketing",
            category: "marketing",
            description: "Master the art and science of promoting brands and products online.",
            progress: 0,
            steps: [
                {
                    id: "digital-marketing-1",
                    title: "Marketing Foundations",
                    level: "basic",
                    description: "Marketing principles, customer journey, and brand positioning.",
                    resources: [
                        { title: "Digital Marketing Fundamentals", type: "course", url: "#", description: "Essential concepts for online marketing" },
                        { title: "Brand Strategy Guide", type: "book", url: "#", description: "Building and positioning compelling brands" },
                        { title: "Customer Journey Mapping", type: "tutorial", url: "#", description: "Understanding and optimizing customer touchpoints" }
                    ],
                    isCompleted: false
                },
                {
                    id: "digital-marketing-2",
                    title: "Channel Mastery",
                    level: "intermediate",
                    description: "SEO, content marketing, social media, and paid advertising.",
                    resources: [
                        { title: "SEO Mastery", type: "course", url: "#", description: "Optimizing websites for search engines" },
                        { title: "Content Marketing Strategy", type: "book", url: "#", description: "Creating valuable content that attracts and engages" },
                        { title: "Social Media Marketing", type: "tutorial", url: "#", description: "Building brand presence on social platforms" }
                    ],
                    isCompleted: false
                },
                {
                    id: "digital-marketing-3",
                    title: "Analytics & Optimization",
                    level: "advanced",
                    description: "Conversion optimization, attribution modeling, and marketing automation.",
                    resources: [
                        { title: "Google Analytics Mastery", type: "course", url: "#", description: "Analyzing website traffic and user behavior" },
                        { title: "Conversion Rate Optimization", type: "tutorial", url: "#", description: "Improving website and campaign performance" },
                        { title: "Marketing Automation", type: "book", url: "#", description: "Scaling marketing efforts with automation tools" }
                    ],
                    isCompleted: false
                }
            ]
        }
    ],
    skills: [
        {
            id: "technical-skills",
            category: "Technical Skills",
            items: [
                { id: "programming", name: "Programming", description: "Writing code in various languages" },
                { id: "data-analysis", name: "Data Analysis", description: "Extracting insights from data" },
                { id: "system-design", name: "System Design", description: "Designing software architecture" },
                { id: "cloud-computing", name: "Cloud Computing", description: "Using cloud platforms and services" },
                { id: "database-management", name: "Database Management", description: "Working with SQL and NoSQL databases" }
            ]
        },
        {
            id: "soft-skills",
            category: "Soft Skills",
            items: [
                { id: "communication", name: "Communication", description: "Clear and effective communication" },
                { id: "leadership", name: "Leadership", description: "Guiding teams to achieve goals" },
                { id: "problem-solving", name: "Problem Solving", description: "Finding creative solutions to challenges" },
                { id: "time-management", name: "Time Management", description: "Prioritizing and organizing work efficiently" },
                { id: "adaptability", name: "Adaptability", description: "Adjusting to new situations and requirements" }
            ]
        },
        {
            id: "business-skills",
            category: "Business Skills",
            items: [
                { id: "strategy", name: "Strategic Thinking", description: "Long-term planning and decision making" },
                { id: "project-management", name: "Project Management", description: "Coordinating resources and timelines" },
                { id: "marketing", name: "Marketing", description: "Promoting products and services" },
                { id: "negotiation", name: "Negotiation", description: "Reaching beneficial agreements" },
                { id: "financial-literacy", name: "Financial Literacy", description: "Understanding budgets and financial statements" }
            ]
        }
    ]
};

// Initialize user data in local storage
function initUserData() {
    if (!localStorage.getItem('careerCompassUser')) {
        const initialUserData = {
            completedSteps: [],
            favorites: [],
            skillAssessments: {}
        };
        localStorage.setItem('careerCompassUser', JSON.stringify(initialUserData));
    }
    return JSON.parse(localStorage.getItem('careerCompassUser'));
}

// Get user data from local storage
function getUserData() {
    return JSON.parse(localStorage.getItem('careerCompassUser')) || initUserData();
}

// Save user data to local storage
function saveUserData(userData) {
    localStorage.setItem('careerCompassUser', JSON.stringify(userData));
}

// Update roadmap progress
function updateProgress() {
    const userData = getUserData();
    
    careerData.roadmaps.forEach(roadmap => {
        const totalSteps = roadmap.steps.length;
        let completedSteps = 0;
        
        roadmap.steps.forEach(step => {
            if (userData.completedSteps.includes(step.id)) {
                step.isCompleted = true;
                completedSteps++;
            } else {
                step.isCompleted = false;
            }
        });
        
        roadmap.progress = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;
        
        // Update progress bar in UI
        const progressBar = document.querySelector(`[data-category="${roadmap.category}"] .progress-bar`);
        if (progressBar) {
            progressBar.style.width = `${roadmap.progress}%`;
        }
    });
}

// Toggle step completion
function toggleStepCompletion(stepId) {
    const userData = getUserData();
    
    if (userData.completedSteps.includes(stepId)) {
        userData.completedSteps = userData.completedSteps.filter(id => id !== stepId);
    } else {
        userData.completedSteps.push(stepId);
    }
    
    saveUserData(userData);
    updateProgress();
}

// Search functionality
function searchContent(query) {
    query = query.toLowerCase().trim();
    
    if (!query) {
        // Reset the view if search is empty
        document.querySelectorAll('.grid-item').forEach(item => {
            item.style.display = 'block';
        });
        return;
    }
    
    // Search through roadmaps
    document.querySelectorAll('.grid-item').forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
        const timelineItems = Array.from(item.querySelectorAll('.timeline-item'))
            .map(el => el.textContent.toLowerCase())
            .join(' ');
        
        const content = title + ' ' + description + ' ' + timelineItems;
        
        if (content.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Create resource modals
function createResourceModals() {
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modalsContainer';
    document.body.appendChild(modalContainer);
    
    careerData.roadmaps.forEach(roadmap => {
        roadmap.steps.forEach(step => {
            const modalHTML = `
                <div id="${step.id}-modal" class="modal">
                    <div class="modal-content">
                        <span class="close-modal" data-modal="${step.id}-modal">&times;</span>
                        <h2>${roadmap.title}: ${step.title}</h2>
                        <p>${step.description}</p>
                        
                        <h3>Resources</h3>
                        <div class="accordion">
                            ${step.resources.map((resource, index) => `
                                <div class="accordion-item">
                                    <div class="accordion-header" data-accordion="${step.id}-acc-${index}">
                                        <span>${resource.title}</span>
                                        <span>${resource.type}</span>
                                    </div>
                                    <div class="accordion-content" id="${step.id}-acc-${index}">
                                        <p>${resource.description}</p>
                                        <a href="${resource.url}" class="resource-link" target="_blank">Access Resource</a>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div style="margin-top: 2rem;">
                            <button class="btn btn-primary complete-step" data-step="${step.id}">
                                <span class="step-status">Mark as Completed</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            modalContainer.innerHTML += modalHTML;
        });
    });
    
    // Update completion status
    updateCompletionStatus();
}

// Update completion status UI
function updateCompletionStatus() {
    const userData = getUserData();
    
    document.querySelectorAll('.complete-step').forEach(button => {
        const stepId = button.getAttribute('data-step');
        const statusSpan = button.querySelector('.step-status');
        
        if (userData.completedSteps.includes(stepId)) {
            statusSpan.textContent = "Completed ✓";
            button.classList.add('completed');
        } else {
            statusSpan.textContent = "Mark as Completed";
            button.classList.remove('completed');
        }
    });
}

// Initialize the application
function initApp() {
    // Create resource modals
    createResourceModals();
    
    // Initialize user data
    initUserData();
    
    // Update progress bars
    updateProgress();
    
    // Search functionality
    const searchBar = document.querySelector('.search-bar');
    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            searchContent(e.target.value);
        });
    }
    
    // Modal functionality
    document.querySelectorAll('[data-modal]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(`${modalId}-modal`);
            if (modal) {
                modal.style.display = 'flex';
            }
        });
    });
    
    // Close modal
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const modalId = closeBtn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Accordion functionality
    document.querySelectorAll('[data-accordion]').forEach(header => {
        header.addEventListener('click', () => {
            const contentId = header.getAttribute('data-accordion');
            const content = document.getElementById(contentId);
            
            if (content) {
                content.classList.toggle('active');
            }
        });
    });
    
    // Toggle step completion
    document.querySelectorAll('.complete-step').forEach(button => {
        button.addEventListener('click', () => {
            const stepId = button.getAttribute('data-step');
            toggleStepCompletion(stepId);
            updateCompletionStatus();
        });
    });
    
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (themeToggle) {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.textContent = '☀️';
        }
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '☀️';
            } else {
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = '🌙';
            }
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);