// Project data
const brandProjects = [
    {
        id: 1,
        thumbnail: 'Images/Brand/MarcelPozo_BrandDesign_ClinicaAxial.png',
        title: 'Clínica AXIAL',
        year: '2022',
        description: 'Imagotype designed for Clínica AXIAL, clinic centre in Barcelona specialized in physiotherapy, psychology and nutrition.\n\nEach specialty is represented by a color and a shape, all interconnected through this axial link symbolized by the spine. In turn, the spine is interpreted as a path: the path a treatment follows, its process, step by step, just as defined by the points that compose it.'
    },
    {
        id: 2,
        thumbnail: 'Images/Brand/MarcelPozo_BrandDesign_25CVG.png',
        title: '25 CVG',
        year: '2021',
        description: 'Imagotype presented at the logo contest for the 25th anniversary of the Castellers de la Vila de Gràcia.\n\nThe design outlines a \'25\' using the silhouette -in negative- of an "enxaneta" performing the "aleta": not only because of the evident connection this figure has with the "casteller" world but also for its meaning of achievement, comparable to that of its anniversary.'
    },
    {
        id: 3,
        thumbnail: 'Images/Brand/MarcelPozo_BrandDesign_Lai22.png',
        title: 'Lai22',
        year: '2022',
        description: 'Imagotype designed for Lai 22 Hostel & Bar in Tallinn, Estonia.\n\nThe upper geometric isotype is inspired by the iconic piece of furniture displayed behind the reception desk, the first visual element guests encounter upon entering.'
    },
    {
        id: 4,
        thumbnail: 'Images/Brand/MarcelPozo_BrandDesign_RosaSantJordi.png',
        title: 'Sant Jordi',
        year: '2015',
        description: 'Isotype created to represent the rose-selling campaign led by \'scout groups\' ("caus" and "esplais") for Catalonia\'s traditional Sant Jordi Day.\n\nThe icon merges the rose petals with the distinctive scout neckerchief.'
    },
    {
        id: 5,
        thumbnail: 'Images/Brand/MarcelPozo_BrandDesign_Ribbo.png',
        title: 'Ribbo',
        year: '2019',
        description: 'Logotype for RIBBO, own product.\n\nThe letter \'i\' is shaped inspired by the most distinctive part of the device, transforming it into an icon that is both graphically and functionally repeated throughout the product.\nThe typography\'s style and form are based on key aspects such as the action of using the product, the essence of its qualities and the artistic background that guided its aesthetic development.'
    },
    {
        id: 6,
        thumbnail: 'Images/Brand/MarcelPozo_BrandDesign_Tavascan.png',
        title: 'Tavascan',
        year: '2020',
        description: 'Logotype designer for Tavascan Estació d\'Alta Muntanya, ski resort in the Pyrenees.\n\nThis project involved the renovation of their previous logo, updating the original concept to align with modern aesthetics. The new design, with its clean shapes and well-balanced composition, offers a fresher, brighter look that enhances the resort\'s winter atmosphere.'
    },
    {
        id: 7,
        thumbnail: 'Images/Brand/MarcelPozo_BrandDesign_Naedd.png',
        title: 'Nädd',
        year: '2018',
        description: 'Imagotype for NÄDD, own product.\n\nThe isotype visually represents and emphasizes the device\'s unique shape. The product\'s name is a multilingual wordplay, while the letters in the logotype are designed to reflect different components and elements of the device.'
    },
    {
        id: 8,
        thumbnail: 'Images/Brand/MarcelPozo_BrandDesign_CampamentsIPSI.png',
        title: 'Campaments IPSI',
        year: '2020',
        description: 'Imagotype designed for Campaments d\'alta muntanya IPSI, summer camp in the Pyrenees.\n\nIts isotype represents the valley where the project takes place, along with a camping tent. Subtly integrated within the design is the shape of an eagle too, symbolising the project\'s values and the energy of the camp\'s participants.'
    },
    {
        id: 9,
        thumbnail: 'Images/Brand/MarcelPozo_BrandDesign_TrocPot.png',
        title: 'TrocPot',
        year: '2020',
        description: 'Logotype designed for TrocPot, a start-up specialising in desserts sold in jars.\n\nThe circular composition establishes a visual connection between the logo and the brand\'s products, reflecting the round shape of the glass jar containers.'
    },
    {
        id: 10,
        thumbnail: 'Images/Brand/MarcelPozo_BrandDesign_LEscletxa.png',
        title: 'L\'Escletxa',
        year: '2019',
        description: 'Logotype for L\'Escletxa, an emerging local radio station in Barcelona.\n\nThe magenta \'X\' serves as the logotype\'s icon and can also stand alone as a symbol of the radio station. Its design features a slit -an "escletxa" in Catalan- integrated into its shape.'
    },
    {
        id: 11,
        thumbnail: 'Images/Brand/MarcelPozo_BrandDesign_EMU.png',
        title: 'EMU',
        year: '2017',
        description: 'Imagotype for EMU, a mountain and nature-focused pedagogy team.\n\nShaped with the sharpness of precision and technique of outdoor activities, the isotype depicts a mountain yet tracing the shape of the Cassiopeia constellation.'
    },
    {
        id: 12,
        thumbnail: 'Images/Brand/MarcelPozo_BrandDesign_FerradaAlins.png',
        title: 'Ferrada Alins',
        year: '2021',
        description: 'Imagotype designed for Ferrada Alins, via ferrata in the Pyrenees.\n\nBeing the text appearing on the logo their website URL itself, the design shapes iron steps -icons of this kind of adventure routes- rising from \'Alins\', name of the village where this via ferrata starts in.'
    }
];

const illustrationProjects = [
    {
        id: 1,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_ARoS.png',
        title: 'ARoS Museum',
        year: '2022',
        description: 'Fineliner'
    },
    {
        id: 2,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_ThisIsACandle.png',
        title: 'This is a candle.',
        year: '2020',
        description: 'Soft pastels and fineliner'
    },
    {
        id: 3,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_Helicopteru.png',
        title: 'Helicòpteru',
        year: '2021',
        description: 'Marker'
    },
    {
        id: 4,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_DandelionWind.png',
        title: 'Dandelion. Wind.',
        year: '2021',
        description: 'Fineliner'
    },
    {
        id: 5,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_Prawn.png',
        title: 'Prawn.',
        year: '2020',
        description: 'Fineliner'
    },
    {
        id: 6,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_AalenPostcard.jpg',
        title: 'Aalen postcard',
        year: '2018',
        description: 'Digital drawing'
    },
    {
        id: 7,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_ThisIsAlsoACandle.png',
        title: 'This is also a candle.',
        year: '2020',
        description: 'Marker'
    },
    {
        id: 8,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_TheTwoOfThem1.png',
        title: 'The two of them I',
        year: '2023',
        description: 'Digital drawing'
    },
    {
        id: 9,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_TheTwoOfThem2.png',
        title: 'The two of them II',
        year: '2023',
        description: 'Digital drawing'
    },
    {
        id: 10,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_TheTwoOfThem3.png',
        title: 'The two of them III',
        year: '2023',
        description: 'Digital drawing'
    },
    {
        id: 11,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_David.png',
        title: 'David',
        year: '2018',
        description: 'Markers'
    },
    {
        id: 12,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_SydneyOperaHouse.png',
        title: 'Sydney Opera House',
        year: '2018',
        description: 'Markers and fineliner'
    },
    {
        id: 13,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_Barcelona92.png',
        title: 'Barcelona 92',
        year: '2018',
        description: 'Markers and fineliner'
    },
    {
        id: 14,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_Aarhus.png',
        title: 'Århus',
        year: '2022',
        description: 'Watercolours and fineliner'
    },
    {
        id: 15,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_Triangle.jpg',
        title: 'Triangle',
        year: '2020',
        description: 'Digital drawing'
    },
    {
        id: 16,
        thumbnail: 'Images/Illustration/MarcelPozo_IllustrationDesign_Tandem.png',
        title: 'Tandem',
        year: '2020',
        description: 'Digital drawing'
    }
];

// DOM Elements
const aboutBtn = document.getElementById('aboutBtn');
const contactBtn = document.getElementById('contactBtn');
const aboutPopup = document.getElementById('aboutPopup');
const contactPopup = document.getElementById('contactPopup');
const projectPopup = document.getElementById('projectPopup');
const closeBtns = document.querySelectorAll('.close-btn');
const projectGrid = document.querySelector('.project-grid');

// Initialize brand page if we're on it
if (projectGrid) {
    initializeProjectsPage();
    initializeProjectPopupHandlers();
}

// Initialize popups
initializePopups();

// Move this to the top of script.js, right after any const declarations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Drawing Canvas
    const penTool = document.getElementById('penTool');
    const canvasContainer = document.getElementById('drawingCanvas');
    const canvas = document.getElementById('canvas');
    const closeCanvas = document.getElementById('closeCanvas');

    if (penTool && canvasContainer && canvas && closeCanvas) {  // Check if we're on home page
        const ctx = canvas.getContext('2d');

        function initializeCanvas() {
            // Set canvas size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight - parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--footer-height'));

            // Set drawing style
            ctx.strokeStyle = '#ed1c24';
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.lineWidth = 2;
        }

        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        function startDrawing(e) {
            isDrawing = true;
            [lastX, lastY] = [e.clientX, e.clientY];
            
            // Draw a dot on click
            ctx.beginPath();
            ctx.arc(lastX, lastY, 1, 0, Math.PI * 2);
            ctx.fill();
        }

        function draw(e) {
            if (!isDrawing) return;
            
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
            
            [lastX, lastY] = [e.clientX, e.clientY];
        }

        function stopDrawing() {
            isDrawing = false;
        }

        // Event Listeners
        penTool.addEventListener('click', () => {
            canvasContainer.style.display = 'block';
            initializeCanvas();
        });

        closeCanvas.addEventListener('click', () => {
            canvasContainer.style.display = 'none';
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        // Add ESC key handler for canvas
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && canvasContainer.style.display === 'block') {
                canvasContainer.style.display = 'none';
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        });

        // Handle window resize
        window.addEventListener('resize', initializeCanvas);
    }
});

function initializeProjectsPage() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const projects = currentPage === 'illustration' ? illustrationProjects : brandProjects;

    if (projectGrid) {
        projectGrid.innerHTML = '';
        
        if (currentPage === 'illustration') {
            // Direct image approach for illustration page
            projects.forEach((project, index) => {
                const thumbnail = document.createElement('img');
                thumbnail.src = project.thumbnail;
                thumbnail.alt = project.title;
                thumbnail.classList.add('project-thumbnail');
                thumbnail.dataset.index = index;
                thumbnail.addEventListener('click', () => openProjectPopup(index, projects));
                projectGrid.appendChild(thumbnail);
            });
        } else {
            // Keep existing container approach for brand page
            projects.forEach((project, index) => {
                const container = document.createElement('div');
                container.classList.add('thumbnail-container');
                
                const thumbnail = document.createElement('img');
                thumbnail.src = project.thumbnail;
                thumbnail.alt = project.title;
                thumbnail.classList.add('project-thumbnail');
                thumbnail.dataset.index = index;
                
                container.appendChild(thumbnail);
                container.addEventListener('click', () => openProjectPopup(index, projects));
                projectGrid.appendChild(container);
            });
        }

        // Initialize navigation
        initializeProjectNavigation(projects);
    }
}

function initializeProjectNavigation(projects) {
    let currentProjectIndex = 0;

    // Project navigation arrows
    document.querySelector('.prev').addEventListener('click', () => navigateProject('prev', projects));
    document.querySelector('.next').addEventListener('click', () => navigateProject('next', projects));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (projectPopup.classList.contains('active')) {
            switch(e.key) {
                case 'ArrowLeft':
                    navigateProject('prev', projects);
                    break;
                case 'ArrowRight':
                    navigateProject('next', projects);
                    break;
                case 'Escape':
                    closePopup(projectPopup);
                    break;
            }
        }
    });
}

function openProjectPopup(index, projects) {
    const project = projects[index];
    currentProjectIndex = index;

    const img = document.getElementById('popupImage');
    img.src = project.thumbnail;
    
    // Check image ratio once loaded
    img.onload = function() {
        const ratio = this.naturalWidth / this.naturalHeight;
        if (Math.abs(ratio - 1) < 0.01) {  // If it's approximately square
            this.setAttribute('data-ratio', '1:1');
        } else {
            this.removeAttribute('data-ratio');
        }
    }

    document.querySelector('.project-title').textContent = project.title;
    document.querySelector('.project-year').textContent = project.year;
    document.querySelector('.project-description').textContent = project.description;

    projectPopup.classList.add('active');
}

function navigateProject(direction, projects) {
    currentProjectIndex = direction === 'next' 
        ? (currentProjectIndex + 1) % projects.length 
        : (currentProjectIndex - 1 + projects.length) % projects.length;
    
    openProjectPopup(currentProjectIndex, projects);
}

function initializePopups() {
    // About and Contact popup handlers
    aboutBtn.addEventListener('click', () => openPopup(aboutPopup));
    contactBtn.addEventListener('click', () => openPopup(contactPopup));

    // Close button handlers
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const popup = btn.closest('.popup, .project-popup');
            closePopup(popup);
        });
    });

    // Close on overlay click
    document.querySelectorAll('.popup-overlay').forEach(overlay => {
        overlay.addEventListener('click', () => {
            const popup = overlay.id === 'aboutOverlay' ? 
                document.getElementById('aboutPopup') : 
                document.getElementById('contactPopup');
            closePopup(popup);
        });
    });
}

function openPopup(popup) {
    // Close any open popup first
    const otherPopup = popup === aboutPopup ? contactPopup : aboutPopup;
    const otherBtn = popup === aboutPopup ? contactBtn : aboutBtn;
    const otherOverlay = popup.id === 'aboutPopup' ? 
        document.getElementById('contactOverlay') : 
        document.getElementById('aboutOverlay');
    
    if (otherPopup.style.display === 'block') {
        closePopup(otherPopup);
        otherBtn.classList.remove('active');
    }

    // Get the corresponding overlay and button
    const overlay = popup.id === 'aboutPopup' ? 
        document.getElementById('aboutOverlay') : 
        document.getElementById('contactOverlay');
    const btn = popup.id === 'aboutPopup' ? aboutBtn : contactBtn;
    
    // If popup is already open, close it
    if (popup.style.display === 'block') {
        closePopup(popup);
        btn.classList.remove('active');
        return;
    }

    // Open popup and add active state to button
    overlay.style.display = 'block';
    popup.style.display = 'block';
    btn.classList.add('active');
}

function closePopup(popup) {
    if (popup.id === 'aboutPopup' || popup.id === 'contactPopup') {
        const overlay = popup.id === 'aboutPopup' ? 
            document.getElementById('aboutOverlay') : 
            document.getElementById('contactOverlay');
        const btn = popup.id === 'aboutPopup' ? aboutBtn : contactBtn;
        
        overlay.style.display = 'none';
        popup.style.display = 'none';
        btn.classList.remove('active');
    } else {
        popup.classList.remove('active');
    }
}

function initializeNavigation() {
    // Get current page from URL
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
    
    // Set active state for current page link
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    navLinks.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        }
        
        // Add click handlers for navigation
        link.addEventListener('click', () => {
            switch(link.dataset.page) {
                case 'brand':
                    window.location.href = 'brand.html';
                    break;
                case 'illustration':
                    window.location.href = 'illustration.html';
                    break;
                case 'product':
                    // Add when product page is ready
                    // window.location.href = 'product.html';
                    break;
            }
        });
    });
}

// Call this with your other initializations
initializeNavigation();

function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            mobileMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

// Add hamburger menu styles
const menuToggleStyles = `
    .menu-toggle {
        display: none;
        flex-direction: column;
        justify-content: space-around;
        width: 24px;
        height: 20px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
    }

    .menu-toggle span {
        width: 100%;
        height: 2px;
        background-color: black;
        transition: all 0.3s;
    }

    .menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }

    .menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }

    @media (max-width: 480px) {
        .menu-toggle {
            display: flex;
        }
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = menuToggleStyles;
document.head.appendChild(styleSheet);

// Call this with your other initializations
initializeMobileMenu();

// Update project popup handlers
function initializeProjectPopupHandlers() {
    // Close button handler
    const closeBtn = document.querySelector('.project-popup .close-btn');
    closeBtn.addEventListener('click', () => closePopup(projectPopup));

    // Background click handler
    projectPopup.addEventListener('click', (e) => {
        if (e.target === projectPopup) {
            closePopup(projectPopup);
        }
    });

    // Prevent clicks on content from closing popup
    const popupContent = document.querySelector('.project-popup-content');
    popupContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Add ESC key handler
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open popup
        if (aboutPopup.style.display === 'block') {
            closePopup(aboutPopup);
        }
        if (contactPopup.style.display === 'block') {
            closePopup(contactPopup);
        }
        if (projectPopup.classList.contains('active')) {
            closePopup(projectPopup);
        }
    }
});
