document.addEventListener('DOMContentLoaded', function() {
    // Initialize cursor first
    initializeCursor();

    // Spotlight effect for home page
    const spotlight = document.querySelector('.spotlight-background');
    
    if (spotlight) {
        const handleMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            requestAnimationFrame(() => {
                spotlight.style.opacity = '1';
                spotlight.style.webkitMaskImage = `radial-gradient(circle 150px at ${x}px ${y}px, black 0%, black 75%, transparent 100%)`;
                spotlight.style.maskImage = `radial-gradient(circle 150px at ${x}px ${y}px, black 0%, black 75%, transparent 100%)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
    }

    // Move mobile menu functionality outside portfolio check
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuToggle.textContent = mobileMenu.classList.contains('active') ? '×' : '+';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                menuToggle.textContent = '+';
            }
        });
    }

    // Canvas functionality for home page
    const canvas = document.getElementById('drawingCanvas');
    if (canvas) {  // Only run on home page
        const ctx = canvas.getContext('2d');
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        // Get cursor element
        const cursor = document.querySelector('.custom-cursor');

        // Set canvas size and style
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.fillStyle = '#ED1C24';  // CMYK Red
            ctx.strokeStyle = '#ED1C24';
            ctx.lineWidth = window.innerWidth <= 768 ? 4 : 6;
            ctx.lineCap = 'round';
        }

        // Initialize canvas
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Drawing functions
        function draw(e) {
            if (!isDrawing) return;
            
            // Get correct coordinates for both mouse and touch
            const x = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            const y = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;

            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.stroke();

            [lastX, lastY] = [x, y];
        }

        function startDrawing(e) {
            isDrawing = true;
            // Add drawing class to cursor
            if (cursor) cursor.classList.add('drawing');
            
            // Get correct coordinates for both mouse and touch
            const x = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            const y = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
            [lastX, lastY] = [x, y];

            // Draw initial dot
            ctx.beginPath();
            ctx.arc(lastX, lastY, ctx.lineWidth/2, 0, Math.PI * 2);
            ctx.fill();
        }

        function stopDrawing() {
            isDrawing = false;
            // Remove drawing class from cursor
            if (cursor) cursor.classList.remove('drawing');
        }

        // Event listeners for mouse
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        // Event listeners for touch
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();  // Prevent scrolling while drawing
            startDrawing(e);
        });
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();  // Prevent scrolling while drawing
            draw(e);
        });
        canvas.addEventListener('touchend', stopDrawing);

        // Clear canvas with Esc key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        });
    }

    const portfolioGrid = document.querySelector('.portfolio-grid');
    const numberOfProjects = 15;
    let currentProjectIndex = 0;
    
    // Get the current page name from the URL
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];

    // Project data for each category
    const productProjects = [
        {
            title: 'Chette',
            thumbnailImage: 'Images/Product/Chette/MarcelPozo_ProductDesign_Chette_0.jpg',
            popupImage: 'Images/Product/Chette/MarcelPozo_ProductDesign_Chette_1.jpg',
            description: 'Dining chair',
            year: '2023',
            developedAt: 'Elisava, Barcelona',
            developedFor: 'Andreu World',
            mentoring: 'Raimon Monsarro',
            materials: 'Oak wood',
            finishes: {
                text: 'Natural or lacquered finish',
                colors: [
                    { name: 'Grey white', code: 'RAL 9002', hex: '#E7EBDA' },
                    { name: 'Cement grey', code: 'RAL 7033', hex: '#7D8471' },
                    { name: 'Granite grey', code: 'RAL 7029', hex: '#4B4D46' },
                    { name: 'Green beige', code: 'RAL 1000', hex: '#BEBD7F' }
                ]
            },
            dimensions: {
                type: 'image',
                src: 'Images/Product/Chette/MarcelPozo_ProductDesign_Chette_D.png'
            },
            secondaryContent: `
                <h3 class="section-title">This is Chette</h3>
                <img src="Images/Product/Chette/MarcelPozo_ProductDesign_Chette_2.jpg" alt="Chette" style="width: 100%;">
               
                <p>Chette /∫εt/ originates from structural exploration and appreciation for wood as a raw material and the musicality of woodworking.</p>
                <p>Its distinctive semicircular section provides the chair with a unique visual effect depending on the viewing angle, while also surprising by generating complementary volumes at the joints between its parts.</p>
                <p>Chette complements the fluidity and character of its structural elements with a seat and backrest in plywood which provide ergonomic comfort through their soft subtle curves.</p>
                <p>Discreet yet full of personality, Chette integrates seamlessly with its surroundings. Plus, its compact size makes it ideal for small spaces. Perfect for warm, intimate spaces, especially those to be called home, Chette brings warmth and calm to any environment.</p>
                <p>Chette is distributed partially disassembled to optimise transport volume.</p>

                <h3 class="section-title">Chette as an adjective</h3>
                <img src="Images/Product/Chette/MarcelPozo_ProductDesign_Chette_3.jpg" alt="Chette" style="width: 100%;">

                <p>Silent,<br>
                intimate, warm, subtle, fluid,<br>
                compact, personal, calm, natural, humble, supportive, clean, cozy, minimal, detail-oriented, global, timeless, youthful, peaceful, honest,<br>
                serene, tranquil...<br>
                chette.</p>
                <p>Chette is born from the vision to create a chair that, at first glance, might seem modest and quiet, yet holds a whole soul within – a personality that reveals itself in every curve in the chair; in every detail.</p>

                <h3 class="section-title">The semicircular cross-section</h3>
                <img src="Images/Product/Chette/MarcelPozo_ProductDesign_Chette_4.jpg" alt="Chette" style="width: 100%;">

                <p>The essence of Chette lies in its structure. Its distinctive semicircular shape (half a 50 mm diameter circle) creates a unique optical effect on the chair:</p>
                <p>Despite keeping all legs a constant cross-section, their perceived volume changes depending on the viewing angle.</p>
                <p>When seen from the back, the legs appear round, with an apparently circular cross-section. When observed from its front, Chette displays flat wide legs.</p>
                <p>In fact, since the legs' axes are in different directions -they are not parallel-, the visual effect when viewing the chair from a non-orthogonal angle is that each leg seems to be different: some appear thick and robust, while others look slim and delicate.</p>

                <h3 class="section-title">Joints: fluidity and volumes</h3>
                <img src="Images/Product/Chette/MarcelPozo_ProductDesign_Chette_5.jpg" alt="Chette" style="width: 100%;">

                <p>Underneath the plywood seat, all four legs merge, united by the central H-shaped element, which is glued to the plywood seat itself. This element gives solidity to the whole structure, at the same time that acts as a component to give volumetric continuity and fluidity to the converging legs.</p>
                <p>Focusing on the rear legs, there we find the epicentre of the volumetric essence of the chair's structure. Here, the semicircular slats of the legs themselves align with those extending from beneath the seat. Due to the direction of their curves, the flat faces of each of them meet and merge, creating a seamlessly circular cross-section along the union length.</p>

                <h3 class="section-title">Materiality and manufacturing</h3>
                <img src="Images/Product/Chette/MarcelPozo_ProductDesign_Chette_6.jpg" alt="Chette" style="width: 100%;">

                <p>Completely made of wood, Chette places the material at the heart of the chair's design. Through its natural composition, Chette champions the nature of wood and its endless properties, highlighting its potential through the diversity of manufacturing techniques used to create its various components.</p>
                <p>The seat and backrest are made from curved plywood, with layers laminated perpendicularly (cross-laminated) to achieve optimal resistance properties.</p>
                <p>On the other hand, the parts forming the structural skeleton of the chair are created either by milling solid wood or by pressing curved plywood, followed by milling. In the latter case, the wooden layers composing the plywood are oriented by aligning their grain in the same direction (vertically), both to maximise its strength and to avoid contrasting colour tones between layers, which would be more prominently visible after the semicircular milling of the legs.</p>

                <h3 class="section-title">Parts, assemblability and sustainability</h3>
                <img src="Images/Product/Chette/MarcelPozo_ProductDesign_Chette_7.jpg" alt="Chette" style="width: 100%;">

                <p>Chette is distributed partially disassembled, which optimises transport volume and therefore reduces environmental impact: Minimising the space required during shipping isn't only more cost- efficient, but also contributes to sustainability by reducing carbon emissions associated with transportation.</p>
                <p>As for separate parts, there are the following:<br>
                - Backrest + back legs assembly<br>
                - Seat + legs convergence module<br>
                - Front left leg<br>
                - Front right leg</p>
                <p>The backrest, as well as the two curved angular elements, are glue- joined to the rear legs and reinforced with wooden dowels passing through. The circular cross-section of these dowels is visible on both its endings, perfectly even with the surface of the piece.</p>
                <p>All four elements are assembled and secured together using 12 metallic screws (3 per leg). The poka-yoke principle applied on the design ensures it can only be assembled in the correct way.</p>
                <p>Thanks to being assemblable, parts can be replaced if damaged, providing a longer functional life in the whole product's life cycle.</p>

                <h3 class="section-title">Lacquered colour palette</h3>
                <img src="Images/Product/Chette/MarcelPozo_ProductDesign_Chette_8.jpg" alt="Chette" style="width: 100%;">

                <p>Apart from its default finish version in natural oak, Chette is also presented in the following colour palette.</p>
                <p>With a fully lacquered finish, these four colours offer a variety of moods and personalities, yet all maintain an homogeneous colour saturation, allowing them all to harmonise with one another.</p>

                <img src="Images/Product/Chette/MarcelPozo_ProductDesign_Chette_9.jpg" alt="Chette" style="width: 100%;">
            `
        },
        {
            title: 'Dokk 1',
            thumbnailImage: 'Images/Product/Dokk1/MarcelPozo_ProductDesign_Dokk1_0.jpg',
            popupImage: 'Images/Product/Dokk1/MarcelPozo_ProductDesign_Dokk1_1.jpg',
            description: 'Ambient lamp',
            year: '2023',
            developedAt: 'Elisava, Barcelona',
            materials:`
                <p>Raw concrete<br>
                Raw steel</p>`,
            dimensions: {
                type: 'image',
                src: 'Images/Product/Dokk1/MarcelPozo_ProductDesign_Dokk1_D.png'
            },
            specifications:`
                <p>LED 230V 2W 3000K (included)<br>
                Efficiency A+</p>`,
            verse:`
                <p>Concrete. Steel.<br>
                Gravity. The mass and its elevation.<br>
                The rigidity of the iron parallelism.</p>
                <p>The warmth of rust rythming<br>
                curtains of light in verses of shadows.</p>`,
            secondaryContent: `         
                    <img src="Images/Product/Dokk1/MarcelPozo_ProductDesign_Dokk1_2.jpg" alt="Dokk1" style="width: 75%;">

                <p>Dokk1 is the entry of the most robust materials into the warm cozy environments. It's the reinterpretation of the functionality and the perceived feeling of raw materials to create light beams of poetry.</p>
                <p>As part of a room, Dokk1 highlights its closed circle concept: bringing back the structural materials first used for the construction of the building, to conclude with the last decoration details of the space.</p>

                    <div style="display: flex; gap: 20px; margin: 20px 0;">
                        <img src="Images/Product/Dokk1/MarcelPozo_ProductDesign_Dokk1_3.jpg" alt="Dokk1" style="width: 45%;">
                        <img src="Images/Product/Dokk1/MarcelPozo_ProductDesign_Dokk1_4.jpg" alt="Dokk1" style="width: 45%;">
                    </div>

                <p>Contrast on its textures, contrast on the irregularity within the regularity of its geometry, and contrast when turning the light on: the sculptural heavy and rusty cascade of iron takes a second plane, being the main character now the empty space between the bars, space that allows the trapped light inside to come out of the compactness of the element and be harmoniously projected and reflected on its surroundings.</p>

                    <img src="Images/Product/Dokk1/MarcelPozo_ProductDesign_Dokk1_5.jpg" alt="Dokk1" style="width: 75%;">
                    <img src="Images/Product/Dokk1/MarcelPozo_ProductDesign_Dokk1_6.jpg" alt="Dokk1" style="width: 100%;">
                    <img src="Images/Product/Dokk1/MarcelPozo_ProductDesign_Dokk1_7.jpg" alt="Dokk1" style="width: 85%;">
            `
        },
        {
            title: 'Plex',
            thumbnailImage: 'Images/Product/Plex/MarcelPozo_ProductDesign_Plex_0.jpg',
            popupImage: 'Images/Product/Plex/MarcelPozo_ProductDesign_Plex_1.jpg',
            verse:`
                <p>This is Plex.<br>
                As easy as it seems,<br>
                as logical as it seems:<br>
                Lift the tab, insert the shelf, release it. Done.<br>
                Simple. Plex.</p>`,
            description: 'Shelving system',
            year: '2023',
            developedAt: 'Elisava, Barcelona',
            with: 'Andrés Canchán',
            mentoring: 'Cinto Monsech',
            materials: 'Sheet metal',
            finishes: {
                colors: [
                    { hex: '#EBEDE7' },
                    { hex: '#738972' },
                    { hex: '#E29463' },
                    { hex: '#BD5050' },
                    { hex: '#4B5757' }
                ]
            },
            modelsAndDimensions: {
                type: 'image',
                src: 'Images/Product/Plex/MarcelPozo_ProductDesign_Plex_D.png'
            },
            secondaryContent: `
                    <img src="Images/Product/Plex/MarcelPozo_ProductDesign_Plex_2.png" alt="Plex" style="width: 100%;">
                
                <p>Plex is installed by fixing each unit to the wall using 4 screws. Once this is done, the shelf-fixing system and adjustment is all screw-less.</p>
                <p>As represented in the following picture, the flexibility of Plex will adapt the tab to the width of the shelf, keeping it tight in all cases.</p>

                    <img src="Images/Product/Plex/MarcelPozo_ProductDesign_Plex_3.png" alt="Plex" style="width: 50%;">

                <p>The lack of screws allow the repositioning of the shelf, its replacement, its reconfiguration... all, without damaging the elements and allowing them to be reused in the same conditions.</p>

                <p>On the other side, with the different modules available (single-tab / double-tab / triple-tab), a Plex shelving system can be installed in an infinite number of compositions:<br>
                From the single-shelf one, using only 2 single-tab units, to an endless combination of the modules, using their multiple tabs for chaining them with others.</p>

                <p>Plus, Plex modules can be used in both directions, working both with their tabs pointing inwards or outwards, and therefore giving even more flexibility, adaptability and freedom both functional and aesthetically on their assembly:</p>

                    <img src="Images/Product/Plex/MarcelPozo_ProductDesign_Plex_4.png" alt="Plex" style="width: 50%;">
                    <img src="Images/Product/Plex/MarcelPozo_ProductDesign_Plex_5.png" alt="Plex" style="width: 50%;">

                    <div style="display: flex; gap: 20px; margin: 20px 0;">
                        <img src="Images/Product/Plex/MarcelPozo_ProductDesign_Plex_6.jpg" alt="Plex" style="width: 45%;">
                        <img src="Images/Product/Plex/MarcelPozo_ProductDesign_Plex_7.jpg" alt="Plex" style="width: 45%;">
                    </div>
                    <img src="Images/Product/Plex/MarcelPozo_ProductDesign_Plex_8.jpg" alt="Plex" style="width: 50%;">

                    <div style="display: flex; gap: 20px; margin: 20px 0;">
                        <img src="Images/Product/Plex/MarcelPozo_ProductDesign_Plex_9.jpg" alt="Plex" style="width: 45%;">
                        <img src="Images/Product/Plex/MarcelPozo_ProductDesign_Plex_10.jpg" alt="Plex" style="width: 45%;">
                    </div>
                    <img src="Images/Product/Plex/MarcelPozo_ProductDesign_Plex_11.jpg" alt="Plex" style="width: 60%;">     
            `
        },
        {
            title: 'Venturi',
            thumbnailImage: 'Images/Product/Venturi/MarcelPozo_ProductDesign_Venturi_0.jpg',
            popupImage: 'Images/Product/Venturi/MarcelPozo_ProductDesign_Venturi_1.jpg',
            slogan: 'Finding comfort in floatability',
            description: 'Multipurpose chair',
            year: '2024',
            developedAt: 'Elisava, Barcelona',
            mentoring: `
            <P>Ricard Ferrer<br>
            Otto Canalda</p>
            `,
            materials: 'Sheet metal',
            finishes: {
                colors: [
                    { name: 'Oat Milk',         hex: '#E9E4DA' },
                    { name: 'Midnight Coffee',  hex: '#5A5553' },
                    { name: 'Foggy Burgundy',   hex: '#7A6060' },
                    { name: 'Autumn Rust',      hex: '#AA695B' },
                    { name: 'Mellow Apricot',   hex: '#E8B175' },
                    { name: 'Artichoke',        hex: '#80816A' },
                    { name: 'Deep Glacier',     hex: '#4B6A69' }
                ]
            },
            secondaryContent: `
                <p>The VENTURI Effect refers to the physical phenomenon in which a moving fluid increases its velocity when the cross-sectional area of the conduit through which it flows is reduced.</p>
                <p>In aviation, this phenomenon is responsible for making airplanes fly:<br>
                The shape of the wing profile causes an acceleration of the air over the upper surface of the wing as the aircraft moves.<br>
                Combined with Bernoulli's Principle, which states that the pressure of a moving fluid decreases as its velocity increases, this results in a pressure difference between the upper and lower surfaces of the wing. This difference generates a new force acting vertically on the aircraft: the Lift Force, which, by counteracting and surpassing the weight of the airplane, enables its FLOATABILITY.</p>

                <h3 class="section-title">Objective</h3>
                <p>Achieve an extra level of comfort thanks to the properties of plywood.</p>

                <h3 class="section-title">Proposal</h3>
                <p>Give the seat of the chair the same flexibility found in its backrest, utilizing the moment of force generated relative to its anchoring point.<br>
                The idea: a shell composed of two pieces, creating two cantilevered layers — the distinctive cantilever of the chair that provides a sense of floatability.</p>

                <h3 class="section-title">The concept</h3>
                <p>A compact seat where the two plywood pieces are connected together by a core:</p>
                    <img src="Images/Product/Venturi/MarcelPozo_ProductDesign_Venturi_25.png" alt="Venturi" style="width: 35%;">
                <p>SEAT + CORE + SHELL</p>

                <h3 class="section-title">The 'core'</h3>
                <p>Acting as joint between all pieces, it is made from recycled tires, being a commitment to sustainability through innovation while achieving a unique contrast and character between materials.</p>
                <p>In the picture below you can see the evolution of the recycled material:</p>

                    <img src="Images/Product/Venturi/MarcelPozo_ProductDesign_Venturi_26.png" alt="Venturi" style="width: 50%;">
                
                <h3 class="section-title">Options and finishes</h3>
                <p>Apart from with or without armrests, the finishes on Venturi are also customizable.<br>
                Wooden pieces can have a natural oak wood look or a colourful lacquered finish.<br>
                Also the metal structure of the chair, powder coated, is presented in different colours.</p>
                
                    <img src="Images/Product/Venturi/MarcelPozo_ProductDesign_Venturi_3.jpg" alt="Venturi" style="width: 100%;">

                <h3 class="section-title">Upholstery</h3>
                <p>Following the upper palette, Venturi is also available with an upholstered seat version, offering an extra comfort layer on the seat.</p>
                <p>In order to maintain the sustainable approach applied to the core, a sustainable textile, made from 100% recycled plastic waste is considered for the upholstery.</p>

                    <img src="Images/Product/Venturi/MarcelPozo_ProductDesign_Venturi_4.jpg" alt="Venturi" style="width: 100%;">                
            `
        },
        {
            title: 'Trot',
            thumbnailImage: 'Images/Product/Trot/MarcelPozo_ProductDesign_Trot_0.jpg',
            popupImage: 'Images/Product/Trot/MarcelPozo_ProductDesign_Trot_1.jpg',
            description: 'Bar stool',
            year: '2024',
            developedAt: 'Elisava, Barcelona',
            materials:`
                <p>Powder coated steel structure<br>
                Braided nylon cord seat</p>`,
            finishes: {
                colors: [
                    { hex: '#E8B44B' },
                    { hex: '#969280' },
                    { hex: '#5F7871' },
                    { hex: '#394948' }
                ]
            },
            dimensions: {
                type: 'image',
                src: 'Images/Product/Trot/MarcelPozo_ProductDesign_Trot_D.png'
            },
            secondaryContent: `
                    <img src="Images/Product/Trot/MarcelPozo_ProductDesign_Trot_2.jpg" alt="Trot" style="width: 100%;">
                
                <p>Pppbbpfff - snorts the horse as it begins to trot.<br>
                On its back, I sit comfortably while the flexibility of the saddle absorbs the movement of the equine trot and adapts to my sitting. The spine remains straight and my legs are hanging. My posture stays upright; natural, relaxed, without tension, without lower back pain.</p>
                
                    <img src="Images/Product/Trot/MarcelPozo_ProductDesign_Trot_3.jpg" alt="Trot" style="width: 50%;">

                <p>A look into the past to project the sitting of the future. The junction of formal and material innovation with the mathematical interpretation of organic forms to revalue history and tradition.</p>
                
                <p>Trot is a commitment to a multi-position and dynamic posture seat. A commitment to bringing life to an industrially neutral and standardized environment. A tribute to nature, seeking to make space to bloom again, with elegance and character.</p>
                
                <p>Its tubular structure, inspired by the anatomy of the horse, delineates the volumetric space - main focus of the piece. The woven seat seeks in mathematics the recreation of equine ergonomics, while, due to its composition, not only provides to the concept the differential contrast between its elements, but also creates a void under your legs, where you feel - though it's not there - the horse that was trotting long ago.</p>

                <div style="display: flex; gap: 20px; margin: 20px 0; justify-content: center;">
                    <img src="Images/Product/Trot/MarcelPozo_ProductDesign_Trot_4.jpg" alt="Trot" style="width: 45%;">
                    <img src="Images/Product/Trot/MarcelPozo_ProductDesign_Trot_5.jpg" alt="Trot" style="width: 45%;">
                </div>
                <img src="Images/Product/Trot/MarcelPozo_ProductDesign_Trot_6.jpg" alt="Trot" style="width: 45%;">

                <div style="display: flex; gap: 20px; margin: 20px 0;">
                    <img src="Images/Product/Trot/MarcelPozo_ProductDesign_Trot_7.jpg" alt="Trot" style="width: 45%;">
                    <img src="Images/Product/Trot/MarcelPozo_ProductDesign_Trot_8.jpg" alt="Trot" style="width: 45%;">
                </div>
                 <div style="display: flex; gap: 20px; margin: 20px 0;">
                    <img src="Images/Product/Trot/MarcelPozo_ProductDesign_Trot_9.jpg" alt="Trot" style="width: 45%;">
                    <img src="Images/Product/Trot/MarcelPozo_ProductDesign_Trot_10.jpg" alt="Trot" style="width: 45%;">
                </div>
                <img src="Images/Product/Trot/MarcelPozo_ProductDesign_Trot_11.jpg" alt="Trot" style="width: 45%;">
            `
        },
        {
            title: 'Ribbo',
            thumbnailImage: 'Images/Product/Ribbo/MarcelPozo_ProductDesign_Ribbo_0.jpg',
            popupImage: 'Images/Product/Ribbo/MarcelPozo_ProductDesign_Ribbo_1.jpg',
            slogan: `
                <p>A step further in elderly's mobility</p>`,
            description: 'Cane that can be transformed into an aid to stand up, with a simple quick movement',
            year: '2019',
            developedAt: 'Hochschule Aalen, Germany',
            mentoring: 'Prof. Frank Gärtner',
            materials:`
                <p>Aluminium leg<br>
                Injected/Rotomoulded glass fibre-reinforced PA (20%) structural elements<br>
                Injected PA details<br>
                Steel mechanism parts</p>
                `,
            secondaryContent: `
                <img src="Images/Product/Ribbo/MarcelPozo_ProductDesign_Ribbo_2.jpg" alt="Ribbo" style="width: 100%;">
        
            <p>Ribbo has a wide base and a safe position lock, offering stability on its use, as well as comfort thanks to its ergonomic design.</p>

                <img src="Images/Product/Ribbo/MarcelPozo_ProductDesign_Ribbo_3.jpg" alt="Ribbo" style="width: 50%;">

            <p>With an aesthetic inspired by Joan Miró's paintings, RIBBO combines a contrast between fluent dynamic global shapes and robust elements.</p>
            <p>The colours on the device relate the different parts with their function, for a more intuitive user experience.</p>

                <img src="Images/Product/Ribbo/MarcelPozo_ProductDesign_Ribbo_4.png" alt="Ribbo" style="width: 50%;">

            <p>Because of all this, Ribbo is also a step further in the aesthetic of mobility aids for elderly.</p>
            <p>Focusing on the materials used for its construction, these have been chosen thinking of lightweight, resistance and recyclability.</p>
               
                <img src="Images/Product/Ribbo/MarcelPozo_ProductDesign_Ribbo_5.jpg" alt="Ribbo" style="width: 75%;">
                <img src="Images/Product/Ribbo/MarcelPozo_ProductDesign_Ribbo_6.jpg" alt="Ribbo" style="width: 75%;">
                <img src="Images/Product/Ribbo/MarcelPozo_ProductDesign_Ribbo_7.jpg" alt="Ribbo" style="width: 75%;">
    `
            
        },
        {
            title: 'Nädd',
            thumbnailImage: 'Images/Product/Naedd/MarcelPozo_ProductDesign_Naedd_0.jpg',
            popupImage: 'Images/Product/Naedd/MarcelPozo_ProductDesign_Naedd_1.jpg',
            slogan: '1, 2, 3, clean!',
            description: 'Brush rinser',
            year: '2018',
            developedAt: 'Hochschule Aalen, Germany',
            mentoring: 'Prof. Frank Gärtner',
            materials:`
                <p>Concrete body<br>
                Steel base<br>
                Silicone tank<br>
                Steel mesh<br>
                Injected plastic detail parts</p>
                `,
            secondaryContent: `
                <img src="Images/Product/Naedd/MarcelPozo_ProductDesign_Naedd_2.jpg" alt="Nädd" style="width: 100%;">

            <p>Both usable with water or with other solvents, Nädd /nεd/ is the new partner when painting to guarantee a quick and efficient cleaning of your brushes. This compact design is the alternative to cleaning brushes in a single glass with water every time dirtier.</p>
            <p>It structures the cleaning process in 3 steps, starting with a robust removal of the painting on the brush and finishing with a last rinsing with clean solvent, stored in the lower colourful silicone tank. Generous area for wringing is also available.</p>

                <img src="Images/Product/Naedd/MarcelPozo_ProductDesign_Naedd_3.jpg" alt="Nädd" style="width: 70%;">

            <p>Nädd is offered in different colours on its silicone water-tank, and allows to keep back-up tanks.</p>
            <p>The materials used in the product, full of contrast, are the essence of the functionality of the device, as well as being a font of inspiration the connection these raw materials offer.</p>

                <img src="Images/Product/Naedd/MarcelPozo_ProductDesign_Naedd_4.jpg" alt="Nädd" style="width: 100%;">
                <img src="Images/Product/Naedd/MarcelPozo_ProductDesign_Naedd_5.jpg" alt="Nädd" style="width: 100%;">
                <img src="Images/Product/Naedd/MarcelPozo_ProductDesign_Naedd_6.jpg" alt="Nädd" style="width: 100%;">
        `
        },
    ];

    const brandProjects = [
        // Using same structure as product projects for now - you can replace content later
        {
            title: 'Clínica AXIAL',
            thumbnailImage: 'Images/Brand/MarcelPozo_BrandDesign_ClinicaAxial.jpg',
            popupImage: 'Images/Brand/MarcelPozo_BrandDesign_ClinicaAxial.jpg',
            year: '2022',
            description: `
            <p>Imagotype designed for Clínica AXIAL, clinic centre in Barcelona specialized in physiotherapy, psychology and nutrition.</p>
            <p>Each specialty is represented by a color and a shape, all interconnected through this axial link symbolized by the spine. In turn, the spine is interpreted as a path: the path a treatment follows, its process, step by step, just as defined by the points that compose it.</p>
            `
        },
        {
            title: '25 CVG',
            thumbnailImage: 'Images/Brand/MarcelPozo_BrandDesign_25CVG.jpg',
            popupImage: 'Images/Brand/MarcelPozo_BrandDesign_25CVG.jpg',
            year: '2021',
            description: `
            <p>Imagotype presented at the logo contest for the 25th anniversary of the Castellers de la Vila de Gràcia.</p>
            <p>The design outlines a '25' using the silhouette -in negative- of an "enxaneta" performing the "aleta": not only because of the evident connection this figure has with the "casteller" world but also for its meaning of achievement, comparable to that of its anniversary.</p>
            `
        },
        {
            title: 'Lai 22',
            thumbnailImage: 'Images/Brand/MarcelPozo_BrandDesign_Lai22.jpg',
            popupImage: 'Images/Brand/MarcelPozo_BrandDesign_Lai22.jpg',
            year: '2022',
            description: `
            <p>Imagotype designed for Lai 22 Hostel & Bar in Tallinn, Estonia.</p>
            <p>The upper geometric isotype is inspired by the iconic piece of furniture displayed behind the reception desk, the first visual element guests encounter upon entering.</p>
            `
        },
        {
            title: 'Sant Jordi',
            thumbnailImage: 'Images/Brand/MarcelPozo_BrandDesign_RosaSantJordi.jpg',
            popupImage: 'Images/Brand/MarcelPozo_BrandDesign_RosaSantJordi.jpg',
            year: '2015',
            description: `
            <p>Isotype created to represent the rose-selling campaign led by 'scout groups' ("caus" and "esplais") for Catalonia's traditional Sant Jordi Day.</p>
            <p>The icon merges the rose petals with the distinctive scout neckerchief.</p>
            `
        },
        {
            title: 'Ribbo',
            thumbnailImage: 'Images/Brand/MarcelPozo_BrandDesign_Ribbo.jpg',
            popupImage: 'Images/Brand/MarcelPozo_BrandDesign_Ribbo.jpg',
            year: '2019',
            description: `
            <p>Logotype for RIBBO, own product.</p>
            <p>The letter 'i' is shaped inspired by the most distinctive part of the device, transforming it into an icon that is both graphically and functionally repeated throughout the product.<br>
            The typography's style and form are based on key aspects such as the action of using the product, the essence of its qualities and the artistic background that guided its aesthetic development.</p>
            `
        },
        {
            title: 'Tavascan',
            thumbnailImage: 'Images/Brand/MarcelPozo_BrandDesign_Tavascan.jpg',
            popupImage: 'Images/Brand/MarcelPozo_BrandDesign_Tavascan.jpg',
            year: '2020',
            description: `
            <p>Logotype designer for Tavascan Estació d'Alta Muntanya, ski resort in the Pyrenees.</p>
            <p>This project involved the renovation of their previous logo, updating the original concept to align with modern aesthetics. The new design, with its clean shapes and well-balanced composition, offers a fresher, brighter look that enhances the resort's winter atmosphere.</p>
            `
        },
        {
            title: 'Nädd',
            thumbnailImage: 'Images/Brand/MarcelPozo_BrandDesign_Naedd.jpg',
            popupImage: 'Images/Brand/MarcelPozo_BrandDesign_Naedd.jpg',
            year: '2018',
            description: `
            <p>Imagotype for Nädd, own product.</p>
            <p>The isotype visually represents and emphasizes the device's unique shape. The product's name is a multilingual wordplay, while the letters in the logotype are designed to reflect different components and elements of the device.</p>
            `
        },
        {
            title: 'Campaments IPSI',
            thumbnailImage: 'Images/Brand/MarcelPozo_BrandDesign_CampamentsIPSI_0.jpg',
            popupImage: 'Images/Brand/MarcelPozo_BrandDesign_CampamentsIPSI_1.jpg',
            year: '2020',
            description: `
            <p>Imagotype designed for Campaments d'alta muntanya IPSI, summer camp in the Pyrenees.</p>
            <p>Its isotype represents the valley where the project takes place, along with a camping tent.<br>
            The styling of the shapes reflect the dynamism of the project, together with the projects intrinsic personal growth curve and the expression of feelings of indoors and outdoors.</p>
            `
        },
        {
            title: 'TrocPot',
            thumbnailImage: 'Images/Brand/MarcelPozo_BrandDesign_TrocPot.jpg',
            popupImage: 'Images/Brand/MarcelPozo_BrandDesign_TrocPot.jpg',
            year: '2020',
            description: `
            <p>Logotype designed for TrocPot, a start-up specialising in desserts sold in jars.</p>
            <p>The circular composition establishes a visual connection between the logo and the brand's products, reflecting the round shape of the glass jar containers.</p>
            `
        },
        {
            title: `L'Escletxa`,
            thumbnailImage: 'Images/Brand/MarcelPozo_BrandDesign_LEscletxa.jpg',
            popupImage: 'Images/Brand/MarcelPozo_BrandDesign_LEscletxa.jpg',
            year: '2019',
            description: `
            <p>Logotype for L'Escletxa, an emerging local radio station in Barcelona.</p>
            <p>The magenta 'X' serves as the logotype's icon and can also stand alone as a symbol of the radio station. Its design features a slit -an "escletxa" in Catalan- integrated into its shape.</p>
            `
        },
        {
            title: 'EMU',
            thumbnailImage: 'Images/Brand/MarcelPozo_BrandDesign_EMU_0.jpg',
            popupImage: 'Images/Brand/MarcelPozo_BrandDesign_EMU_1.jpg',
            year: '2017',
            description: `
            <p>Imagotype for EMU, a mountain and nature-focused pedagogy team.</p>
            <p>Shaped with the sharpness of precision and technique of outdoor activities, the isotype depicts a mountain yet tracing the shape of the Cassiopeia constellation.</p>
            `
        },
        {
            title: 'Ferrada Alins',
            thumbnailImage: 'Images/Brand/MarcelPozo_BrandDesign_FerradaAlins.jpg',
            popupImage: 'Images/Brand/MarcelPozo_BrandDesign_FerradaAlins.jpg',
            year: '2019',
            description: `
            <p>Imagotype designed for Ferrada Alins, via ferrata in the Pyrenees.</p>
            <p>Being the text appearing on the logo their website URL itself, the design shapes iron steps -icons of this kind of adventure routes- rising from 'Alins', name of the village where this via ferrata starts in.</p>
            `
        }
        // Add more brand projects as needed
    ];

    const illustrationProjects = [
        // Using same structure as product projects for now - you can replace content later
        {
            title: 'ARoS Museum',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_ARoSMuseum_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_ARoSMuseum_1.jpg',
            year: '2022',
            specifications: 'Fineliner'
        },
        {
            title: 'This is a candle',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_ThisIsACandle_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_ThisIsACandle_1.jpg',
            year: '2020',
            specifications: 'Soft pastels and fineliner'
        },
        {
            title: 'Helicòpteru',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_Helicopteru_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_Helicopteru_1.jpg',
            year: '2021',
            specifications: 'Marker'
        },
        {
            title: 'Dandelion. Wind.',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_DandelionWind_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_DandelionWind_1.jpg',
            year: '2021',
            specifications: 'Fineliner'
        },
        {
            title: 'Århus',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_Aarhus_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_Aarhus_1.jpg',
            year: '2022',
            specifications: 'Watercolours and fineliner'
        },
        {
            title: 'Aalen Postcard',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_AalenPostcard_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_AalenPostcard_1.jpg',
            year: '2018',
            specifications: 'Digital drawing'
        },
        {
            title: 'Barcelona 92',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_Barcelona92_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_Barcelona92_1.jpg',
            year: '2018',
            specifications: 'Markers and fineliner'
        },
        {
            title: 'The two of them I',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_TheTwoOfThem1_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_TheTwoOfThem1_1.jpg',
            year: '2023',
            specifications: 'Digital drawing'
        },
        {
            title: 'The two of them II',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_TheTwoOfThem2_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_TheTwoOfThem2_1.jpg',
            year: '2023',
            specifications: 'Digital drawing'
        },
        {
            title: 'The two of them III',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_TheTwoOfThem3_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_TheTwoOfThem3_1.jpg',
            year: '2023',
            specifications: 'Digital drawing'
        },
        {
            title: 'David',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_David_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_David_1.jpg',
            year: '2018',
            specifications: 'Markers'
        },
        {
            title: 'Sydney Opera House',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_SydneyOperaHouse_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_SydneyOperaHouse_1.jpg',
            year: '2018',
            specifications: 'Markers and fineliner'
        },
        {
            title: 'Prawn.',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_Prawn_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_Prawn_1.jpg',
            year: '2020',
            specifications: 'Fineliner'
        },
        {
            title: 'Triangle',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_Triangle_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_Triangle_1.jpg',
            year: '2020',
            specifications: 'Digital drawing'
        },
        {
            title: 'This is also a candle',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_ThisIsAlsoACandle_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_ThisIsAlsoACandle_1.jpg',
            year: '2020',
            specifications: 'Marker'
        },
        {
            title: 'Tandem',
            thumbnailImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_Tandem_0.jpg',
            popupImage: 'Images/Illustration/MarcelPozo_IllustrationDesign_Tandem_1.jpg',
            year: '2020',
            specifications: 'Digital drawing'
        },
        // Add more illustration projects as needed
    ];

    // Function to get the appropriate projects based on current page
    function getProjects() {
        switch(currentPage) {
            case 'product':
                return productProjects;
            case 'brand':
                return brandProjects;
            case 'illustration':
                return illustrationProjects;
            default:
                return productProjects;
        }
    }

    // Use the current projects based on the page
    const projects = getProjects();

    // Setup navigation links and active states
    const navLinks = document.querySelectorAll('.footer-nav .nav-link');
    navLinks.forEach(link => {
        const linkText = link.textContent.toLowerCase();
        if (linkText === 'product' || linkText === 'brand' || linkText === 'illustration') {
            link.href = `${linkText}.html`;
            if (currentPage === linkText) {
                link.classList.add('active');
            }
        }
    });

    // Create grid items
    projects.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.style.animationDelay = `${index * 0.1}s`;
        projectItem.addEventListener('click', () => openPopup(index));

        const img = document.createElement('img');
        img.src = project.thumbnailImage;
        img.alt = project.title;
        img.loading = 'lazy';

        const title = document.createElement('div');
        title.className = 'project-title';
        title.textContent = project.title;

        projectItem.appendChild(img);
        projectItem.appendChild(title);
        portfolioGrid.appendChild(projectItem);
    });

    // Popup functionality
    const popup = document.querySelector('.popup-overlay');
    const closeBtn = document.querySelector('.popup-close');
    const prevBtn = document.querySelector('.popup-nav.prev');
    const nextBtn = document.querySelector('.popup-nav.next');

    function openPopup(index) {
        currentProjectIndex = index;
        updatePopupContent();
        popup.style.display = 'flex';
    }

    function closePopup() {
        const overlay = document.querySelector('.popup-overlay');
        const popupContent = document.querySelector('.popup-content');
        const popupSecondary = document.querySelector('.popup-secondary');
        
        // Reset all scroll positions when closing
        if (overlay) {
            overlay.scrollTop = 0;
        }
        if (popupContent) {
            popupContent.scrollTop = 0;
        }
        if (popupSecondary) {
            popupSecondary.scrollTop = 0;
        }
        
        popup.style.display = 'none';
    }

    function updatePopupContent() {
        const project = projects[currentProjectIndex];
        
        // Update main image
        document.querySelector('.popup-image').innerHTML = `<img src="${project.popupImage}" alt="${project.title}">`;
        
        // Update info section
        const infoContainer = document.querySelector('.popup-info');
        infoContainer.innerHTML = `
            <div class="popup-header">
                <h2 class="popup-title">${project.title}</h2>
                ${project.slogan ? `
                    <div class="info-row">
                        <span class="info-label slogan-label">Slogan</span>
                        <span class="info-content slogan-content">${project.slogan}</span>
                    </div>
                ` : ''}
            </div>
            <div class="popup-info-content">

                ${project.description ? `
                    <div class="info-row">
                        <span class="info-label description-label">Description</span>
                        <span class="info-content">${project.description}</span>
                    </div>
                ` : ''}

                ${project.year ? `
                    <div class="info-row">
                        <span class="info-label">Year</span>
                        <span class="info-content">${project.year}</span>
                    </div>
                ` : ''}
                
                ${project.developedAt ? `
                    <div class="info-row">
                        <span class="info-label">Developed at</span>
                        <span class="info-content">${project.developedAt}</span>
                    </div>
                ` : ''}
                
                ${project.developedFor ? `
                    <div class="info-row">
                        <span class="info-label">Developed for</span>
                        <span class="info-content">${project.developedFor}</span>
                    </div>
                ` : ''}
                
                ${project.mentoring ? `
                    <div class="info-row">
                        <span class="info-label">Mentoring</span>
                        <span class="info-content">${project.mentoring}</span>
                    </div>
                ` : ''}
                
                ${project.materials ? `
                    <div class="info-row">
                        <span class="info-label">Materials</span>
                        <span class="info-content">${project.materials}</span>
                    </div>
                ` : ''}
                
                ${project.finishes ? `
                    <div class="info-row">
                        <span class="info-label">Finishes</span>
                        <div class="info-content">
                            ${project.finishes.text || ''}
                            ${project.finishes.colors ? `
                                <div class="color-swatches">
                                    ${project.finishes.colors.map(color => `
                                        <div class="color-swatch" style="background-color: ${color.hex}" title="${color.name} ${color.code}"></div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                ` : ''}

                ${project.specifications ? `
                    <div class="info-row">
                        <span class="info-label">Specifications</span>
                        <span class="info-content">${project.specifications}</span>
                    </div>
                ` : ''}
                
                ${project.dimensions ? `
                    <div class="info-row">
                        <span class="info-label">Dimensions</span>
                        ${typeof project.dimensions === 'string' 
                            ? `<span class="info-content">${project.dimensions}</span>`
                            : `<div class="info-content">
                                <img src="${project.dimensions.src}" alt="Dimensions" style="width: 100%; margin-top: 8px;">
                               </div>`
                        }
                    </div>
                ` : ''}

                ${project.modelsAndDimensions ? `
                    <div class="info-row">
                        <span class="info-label">Models and Dimensions</span>
                        ${typeof project.modelsAndDimensions === 'string' 
                            ? `<span class="info-content">${project.modelsAndDimensions}</span>`
                            : `<div class="info-content">
                                <img src="${project.modelsAndDimensions.src}" alt="modelsAndDimensions" style="width: 100%; margin-top: 8px;">
                               </div>`
                        }
                    </div>
                ` : ''}

                <div class="copyright-popup">
                    © 2025 Marcel Pozo. All rights reserved.
                </div>
            </div>
        `;
        
        // Handle secondary content
        const secondaryContainer = document.querySelector('.popup-secondary');
        if (!project.secondaryContent && !project.verse) {
            secondaryContainer.style.display = 'none';
        } else {
            secondaryContainer.style.display = 'block';
            secondaryContainer.innerHTML = `
                ${project.verse ? `
                    <div class="verse-content">${project.verse}</div>
                ` : ''}
                ${project.secondaryContent || ''}
            `;
        }
    }

    function navigate(direction) {
        currentProjectIndex = (currentProjectIndex + direction + projects.length) % projects.length;
        
        // Reset scroll position before updating content
        const overlay = document.querySelector('.popup-overlay');
        const popupContent = document.querySelector('.popup-content');
        const popupSecondary = document.querySelector('.popup-secondary');
        
        if (overlay) {
            overlay.scrollTop = 0;
        }
        if (popupContent) {
            popupContent.scrollTop = 0;
        }
        if (popupSecondary) {
            popupSecondary.scrollTop = 0;
        }
        
        updatePopupContent();
    }

    // Event listeners
    closeBtn.addEventListener('click', closePopup);
    prevBtn.addEventListener('click', () => navigate(-1));
    nextBtn.addEventListener('click', () => navigate(1));
    popup.addEventListener('click', (e) => {
        if (e.target === popup) closePopup();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!popup.style.display || popup.style.display === 'none') return;
        
        switch(e.key) {
            case 'Escape': closePopup(); break;
            case 'ArrowLeft': navigate(-1); break;
            case 'ArrowRight': navigate(1); break;
        }
    });

    // Remove hover cursor from popup content areas
    const popupContentAreas = document.querySelectorAll('.popup-content, .popup-info, .info-popup-content');
    
    popupContentAreas.forEach(area => {
        area.addEventListener('mouseenter', () => {
            cursor.classList.remove('cursor-hover');
        });
        
        area.addEventListener('mouseleave', (e) => {
            // Only add hover back if moving to a clickable element
            if (e.relatedTarget && e.relatedTarget.closest('.popup-overlay')) {
                cursor.classList.add('cursor-hover');
            }
        });
    });
});

// Separate cursor initialization function
function initializeCursor() {
    // Only initialize cursor if not a touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        return; // Exit if touch device
    }

    // Remove any existing cursors
    const existingCursor = document.querySelector('.custom-cursor');
    if (existingCursor) {
        existingCursor.remove();
    }

    // Create new cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Show cursor only when mouse moves
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            cursor.style.opacity = '1';  // Show cursor
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    });

    // Hide cursor when mouse leaves the window
    document.addEventListener('mouseout', () => {
        cursor.style.opacity = '0';
    });

    // Handle hover states
    const clickableElements = document.querySelectorAll(`
        .popup-overlay,                     /* Project popup overlay background */
        .info-popup-overlay,                /* About/Contact popup overlay background */
        .popup-nav.prev,                    /* Previous navigation arrow */
        .popup-nav.next,                    /* Next navigation arrow */
        .info-popup-close,                  /* Popup close buttons */
        .popup-close,                       /* Project popup close button */
        .pen-logo,                          /* Pen logo */
        .footer-logo-link,                  /* Footer logo */
        .nav-link,                          /* Navigation links */
        .mobile-menu-toggle,                /* Mobile menu button */
        .linkedin-link,                     /* LinkedIn icon */
        .contact-link                       /* Contact popup links */
    `);

    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });

    // Handle project thumbnails separately
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.portfolio-grid .project-item')) {
            cursor.classList.add('cursor-hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.portfolio-grid .project-item')) {
            cursor.classList.remove('cursor-hover');
        }
    });

    // Handle popup overlays separately to ensure they work
    document.addEventListener('mouseover', (e) => {
        if (e.target.matches('.popup-overlay, .info-popup-overlay')) {
            cursor.classList.add('cursor-hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.matches('.popup-overlay, .info-popup-overlay')) {
            cursor.classList.remove('cursor-hover');
        }
    });

    // Remove hover cursor from popup content
    const normalCursorAreas = document.querySelectorAll(`
        .popup-content,                     /* Project popup content */
        .popup-content img,                 /* Images inside popup */
        .popup-info,                        /* Project popup info section */
        .info-popup-content,                /* About/Contact popup content */
        .popup-info-content,                /* Project info content */
        .popup-secondary                    /* Secondary project content */
    `);
    
    normalCursorAreas.forEach(area => {
        area.addEventListener('mouseenter', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
}

// ABOUT and CONTACT Popups ------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Update selectors to get both desktop and mobile menu links
    const aboutLinks = document.querySelectorAll('.nav-link[href="#about"]');
    const contactLinks = document.querySelectorAll('.nav-link[href="#contact"]');
    const aboutPopup = document.querySelector('.about-popup');
    const contactPopup = document.querySelector('.contact-popup');
    const closeButtons = document.querySelectorAll('.info-popup-close');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    const overlay = document.createElement('div');
    overlay.className = 'info-popup-overlay';
    document.body.appendChild(overlay);
    
    let activePopup = null;

    function closeAllPopups() {
        aboutPopup.style.display = 'none';
        contactPopup.style.display = 'none';
        overlay.style.display = 'none';
        // Remove active class from all links
        aboutLinks.forEach(link => link.classList.remove('active'));
        contactLinks.forEach(link => link.classList.remove('active'));
        activePopup = null;
    }

    function togglePopup(popup, links) {
        if (activePopup === popup) {
            closeAllPopups();
        } else {
            closeAllPopups();
            popup.style.display = 'block';
            overlay.style.display = 'block';
            links.forEach(link => link.classList.add('active'));
            activePopup = popup;
            
            // Close mobile menu if open
            if (mobileMenu && mobileMenuToggle) {
                mobileMenu.style.display = 'none';
                mobileMenuToggle.textContent = '+';
                mobileMenuToggle.style.transform = 'none';
            }
        }
    }

    // Add click handlers to all About links (both desktop and mobile)
    aboutLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            togglePopup(aboutPopup, aboutLinks);
        });
    });

    // Add click handlers to all Contact links (both desktop and mobile)
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            togglePopup(contactPopup, contactLinks);
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', closeAllPopups);
    });

    overlay.addEventListener('click', closeAllPopups);

    document.addEventListener('click', function(e) {
        if (activePopup && !activePopup.contains(e.target) && 
            !e.target.closest('.nav-link') && 
            !e.target.closest('.mobile-menu-toggle')) {
            closeAllPopups();
        }
    });
});

