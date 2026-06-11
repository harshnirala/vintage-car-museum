/* ==========================================================================
   Dataset of Museum Vehicles & Halls
   ========================================================================== */
const carsData = {
    "benz-patent": {
        id: "benz-patent",
        name: "Benz Patent-Motorwagen",
        year: 1886,
        category: "pioneers",
        country: "Germany",
        flag: "🇩🇪",
        image: null,
        engine: "954cc Single-Cylinder",
        power: "0.75 HP",
        powerVal: 1,
        topSpeed: "10 mph",
        speedVal: 10,
        transmission: "Single-speed belt drive",
        weight: "584 lbs",
        weightVal: 584,
        description: "The world's first production automobile. Patented by Karl Benz in 1886, the Patent-Motorwagen was powered by a rear-mounted single-cylinder four-stroke engine and featured a steel-tube chassis with wire wheels.",
        hall: "Pioneers Gallery",
        timeline: [
            { year: "1885", event: "Karl Benz builds the first prototype of the three-wheeled Motorwagen." },
            { year: "1886", event: "Patent DRP 37435 is granted on January 29, officially registering the automobile." },
            { year: "1888", event: "Bertha Benz makes the historic first long-distance road trip (120 miles) to market the car." }
        ],
        soundSettings: {
            idleFreq: 8,
            revFreq: 22,
            soundType: "sawtooth",
            filterFreq: 80
        },
        blueprintSvg: `
            <svg viewBox="0 0 100 60" class="timeline-vector-svg" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="60" fill="rgba(197, 168, 92, 0.02)" stroke="rgba(197, 168, 92, 0.2)" stroke-dasharray="2 2"/>
                <circle cx="35" cy="40" r="14" fill="none" stroke="var(--gold)" stroke-width="0.8"/>
                <circle cx="35" cy="40" r="1.5" fill="none" stroke="var(--gold)"/>
                <line x1="35" y1="40" x2="35" y2="26" stroke="var(--gold)" stroke-width="0.4"/>
                <line x1="35" y1="40" x2="35" y2="54" stroke="var(--gold)" stroke-width="0.4"/>
                <line x1="35" y1="40" x2="21" y2="40" stroke="var(--gold)" stroke-width="0.4"/>
                <line x1="35" y1="40" x2="49" y2="40" stroke="var(--gold)" stroke-width="0.4"/>
                <line x1="35" y1="40" x2="25" y2="30" stroke="var(--gold)" stroke-width="0.4"/>
                <line x1="35" y1="40" x2="45" y2="50" stroke="var(--gold)" stroke-width="0.4"/>
                <line x1="35" y1="40" x2="45" y2="30" stroke="var(--gold)" stroke-width="0.4"/>
                <line x1="35" y1="40" x2="25" y2="50" stroke="var(--gold)" stroke-width="0.4"/>
                <circle cx="75" cy="45" r="9" fill="none" stroke="var(--gold)" stroke-width="0.8"/>
                <circle cx="75" cy="45" r="1" fill="none" stroke="var(--gold)"/>
                <path d="M 35 40 L 55 40 L 75 45 M 55 40 L 52 24 L 38 24 Z" fill="none" stroke="var(--gold)" stroke-width="1.2"/>
                <path d="M 75 45 L 70 20 L 65 20" fill="none" stroke="var(--gold)" stroke-width="0.8"/>
                <ellipse cx="45" cy="30" rx="3" ry="5" fill="none" stroke="var(--gold)" stroke-width="0.8"/>
                <text x="50" y="55" font-family="Cinzel" font-size="5" fill="var(--gold)" text-anchor="middle">BENZ PATENT SYSTEM • 1886</text>
            </svg>
        `
    },
    "ford-t": {
        id: "ford-t",
        name: "Ford Model T",
        year: 1908,
        category: "pioneers",
        country: "USA",
        flag: "🇺🇸",
        image: "images/ford_model_t.png",
        engine: "2.9L Sidevalve I4",
        power: "20 HP",
        powerVal: 20,
        topSpeed: "45 mph",
        speedVal: 45,
        transmission: "2-speed planetary",
        weight: "1,200 lbs",
        weightVal: 1200,
        description: "The car that put the world on wheels. The Model T was named the most influential car of the 20th century, introducing assembly-line mass production to the industrial world.",
        hall: "Pioneers Gallery",
        timeline: [
            { year: "1908", event: "First Model T rolls off the assembly line at Piquette Avenue, Detroit." },
            { year: "1913", event: "Ford introduces the revolutionary moving assembly line, slashing assembly time." },
            { year: "1927", event: "Production ends after 15,007,033 cars are made, marking the end of an era." }
        ],
        soundSettings: {
            idleFreq: 15,
            revFreq: 40,
            soundType: 'triangle',
            filterFreq: 110
        }
    },
    "rolls-phantom": {
        id: "rolls-phantom",
        name: "Rolls-Royce Phantom II",
        year: 1930,
        category: "golden-era",
        country: "United Kingdom",
        flag: "🇬🇧",
        image: "images/hero_car.png",
        engine: "7.7L Pushrod OHV I6",
        power: "120 HP",
        powerVal: 120,
        topSpeed: "85 mph",
        speedVal: 85,
        transmission: "4-speed manual",
        weight: "5,300 lbs",
        weightVal: 5300,
        description: "The pinnacle of interwar luxury. Standardized as the choice carriage for royalty and elites, this massive chassis was custom-bodied by the world's finest coachbuilders.",
        hall: "Golden Era Gallery",
        timeline: [
            { year: "1929", event: "The Phantom II is introduced as Rolls-Royce's ultimate custom chassis model." },
            { year: "1930", event: "Rolls-Royce releases the 'Continental' short-wheelbase sporting variant." },
            { year: "1936", event: "Final chassis is delivered, marking the end of the bespoke coachbuilt six-cylinder era." }
        ],
        soundSettings: {
            idleFreq: 18,
            revFreq: 48,
            soundType: 'sawtooth',
            filterFreq: 130
        }
    },
    "mercedes-gullwing": {
        id: "mercedes-gullwing",
        name: "Mercedes-Benz 300SL Gullwing",
        year: 1954,
        category: "golden-era",
        country: "Germany",
        flag: "🇩🇪",
        image: "images/gullwing_restored.png",
        engine: "3.0L Direct Injection I6",
        power: "240 HP",
        powerVal: 240,
        topSpeed: "163 mph",
        speedVal: 163,
        transmission: "4-speed manual",
        weight: "2,850 lbs",
        weightVal: 2850,
        description: "An engineering masterpiece. Featuring the world's first production gasoline direct-injection engine and iconic upward-opening doors necessitated by its high-sill spaceframe chassis.",
        hall: "Restoration Lab",
        timeline: [
            { year: "1952", event: "The W194 race car wins Le Mans and Carrera Panamericana, inspiring the road coupe." },
            { year: "1954", event: "The production 300SL Gullwing coupe debuts at the New York Auto Show, causing a global sensation." },
            { year: "1957", event: "Gullwing production ceases with 1,400 coupes built, succeeded by the open Roadster." }
        ],
        soundSettings: {
            idleFreq: 24,
            revFreq: 78,
            soundType: 'sawtooth',
            filterFreq: 160
        }
    },
    "jaguar-etype": {
        id: "jaguar-etype",
        name: "Jaguar E-Type Coupe",
        year: 1961,
        category: "speed-muscle",
        country: "United Kingdom",
        flag: "🇬🇧",
        image: "images/jaguar_etype.png",
        engine: "3.8L DOHC XK6 I6",
        power: "265 HP",
        powerVal: 265,
        topSpeed: "150 mph",
        speedVal: 150,
        transmission: "4-speed manual",
        weight: "2,900 lbs",
        weightVal: 2900,
        description: "Described by Enzo Ferrari as 'the most beautiful car ever made.' The E-Type combined gorgeous styling, high performance, and competitive pricing, defining the swinging sixties.",
        hall: "Speed & Muscle Gallery",
        timeline: [
            { year: "1961", event: "The E-Type launches at the Geneva Motor Show. Demand is so high that Jaguar drives a second car overnight to Geneva." },
            { year: "1964", event: "Engine displacement is increased to 4.2 liters, adding more torque and refinement." },
            { year: "1974", event: "Production concludes, leaving an unforgettable legacy in sports car design history." }
        ],
        soundSettings: {
            idleFreq: 26,
            revFreq: 88,
            soundType: 'sawtooth',
            filterFreq: 180
        }
    }
};
const hallsData = {
    "pioneers": {
        title: "Pioneers Gallery",
        desc: "The dawn of mobility. Explore the earliest brass-era carriages that replaced horses and introduced internal combustion to the masses.",
        cars: ["benz-patent", "ford-t"]
    },
    "golden-era": {
        title: "Golden Era Gallery",
        desc: "The peak of coachbuilt luxury and post-war racing innovations. Discover bespoke creations, royalty carriages, and high-society grand tourers.",
        cars: ["rolls-phantom", "mercedes-gullwing"]
    },
    "speed-muscle": {
        title: "Speed & Muscle Gallery",
        desc: "Power, aerodynamics, and performance. Relive the height of grand touring sports cars and high-displacement vehicles that defined road freedom in the 60s and 70s.",
        cars: ["jaguar-etype"]
    },
    "restoration": {
        title: "Restoration Lab",
        desc: "A behind-the-scenes look at metalwork, engine rebuilding, and upholstery. Watch our master mechanics return barn-finds back to concours elegance.",
        cars: ["mercedes-gullwing"]
    }
};

// Merge dynamically downloaded CSV cars from global csvCarsData variable
if (typeof csvCarsData !== "undefined" && Array.isArray(csvCarsData)) {
    csvCarsData.forEach(car => {
        if (!carsData[car.id]) {
            // Dynamically assign premium category-specific and origin-specific representative images
            if (!car.image) {
                const country = car.country ? car.country.toLowerCase() : "";
                if (country === "usa") {
                    car.image = "images/us_muscle_classic.png";
                } else if (country === "japan") {
                    car.image = "images/japanese_classic_sedan.png";
                } else if (country === "germany") {
                    car.image = "images/gullwing_restored.png";
                } else if (country === "united kingdom") {
                    car.image = "images/jaguar_etype.png";
                } else {
                    car.image = "images/european_classic_touring.png";
                }
            }
            carsData[car.id] = car;
        }
        if (hallsData[car.category] && !hallsData[car.category].cars.includes(car.id)) {
            hallsData[car.category].cars.push(car.id);
        }
    });
}


// Global audio generator reference
let activeAudioEngine = null;
let heroAmbientEngine = null;

// Global filter and search state
let currentCategoryFilter = "all";
let currentSearchQuery = "";

/* ==========================================================================
   Web Audio API Engine Sound Synthesizer
   ========================================================================== */
class EngineSoundGenerator {
    constructor(carId) {
        this.carId = carId;
        this.ctx = null;
        this.isPlaying = false;
        this.oscillators = [];
        this.gainNodes = [];
        this.filterNode = null;
        
        const settings = carsData[carId].soundSettings;
        this.idleFreq = settings.idleFreq;
        this.revFreq = settings.revFreq;
        this.soundType = settings.soundType;
        this.filterFreqBase = settings.filterFreq;
    }

    start(volume = 0.4) {
        if (this.isPlaying) return;
        
        // Create audio context
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        
        // Low pass filter to create a deep, muffled exhaust rumble
        this.filterNode = this.ctx.createBiquadFilter();
        this.filterNode.type = 'lowpass';
        this.filterNode.frequency.setValueAtTime(this.filterFreqBase, this.ctx.currentTime);
        this.filterNode.connect(this.ctx.destination);
        
        // Master gain for fade in/out
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
        this.masterGain.connect(this.filterNode);
        
        // Fade in
        this.masterGain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + 0.2);

        // Cylinders synthesis using multiple detuned oscillators
        const oscCount = 3;
        for (let i = 0; i < oscCount; i++) {
            const osc = this.ctx.createOscillator();
            osc.type = this.soundType;
            
            // Detune slightly to create a thick, organic chorus/vibration
            const detuneVal = (i - 1) * 8; // -8, 0, +8 cents
            osc.detune.setValueAtTime(detuneVal, this.ctx.currentTime);
            
            // Synthesize harmonics
            const multiplier = 1 + (i * 0.5); // 1x, 1.5x, 2x base frequency
            osc.frequency.setValueAtTime(this.idleFreq * multiplier, this.ctx.currentTime);
            
            const gNode = this.ctx.createGain();
            gNode.gain.setValueAtTime(0.25 / oscCount, this.ctx.currentTime);
            
            osc.connect(gNode);
            gNode.connect(this.masterGain);
            osc.start(0);
            
            this.oscillators.push(osc);
            this.gainNodes.push(gNode);
        }

        // LFO (Low Frequency Oscillator) to modulate frequency to simulate engine vibration
        this.lfo = this.ctx.createOscillator();
        this.lfo.frequency.setValueAtTime(7, this.ctx.currentTime); // 7 Hz vibration
        
        this.lfoGain = this.ctx.createGain();
        this.lfoGain.gain.setValueAtTime(3.5, this.ctx.currentTime); // frequency wobble width
        
        this.lfo.connect(this.lfoGain);
        this.lfoGain.connect(this.oscillators[0].frequency);
        this.lfo.start(0);

        this.isPlaying = true;
    }

    rev() {
        if (!this.isPlaying || !this.ctx) return;
        
        const now = this.ctx.currentTime;
        
        // Ramp up frequencies
        this.oscillators.forEach((osc, index) => {
            const multiplier = 1 + (index * 0.5);
            osc.frequency.cancelScheduledValues(now);
            osc.frequency.setValueAtTime(osc.frequency.value, now);
            osc.frequency.exponentialRampToValueAtTime(this.revFreq * multiplier, now + 1.0);
        });

        // Open up low pass filter (makes the sound brighter and louder)
        this.filterNode.frequency.cancelScheduledValues(now);
        this.filterNode.frequency.setValueAtTime(this.filterNode.frequency.value, now);
        this.filterNode.frequency.exponentialRampToValueAtTime(this.filterFreqBase * 2.8, now + 1.0);

        // Increase master gain
        this.masterGain.gain.cancelScheduledValues(now);
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
        this.masterGain.gain.linearRampToValueAtTime(0.65, now + 0.7);

        // Ramp down back to idle automatically after peak
        setTimeout(() => {
            if (!this.isPlaying || !this.ctx) return;
            const downNow = this.ctx.currentTime;
            
            this.oscillators.forEach((osc, index) => {
                const multiplier = 1 + (index * 0.5);
                osc.frequency.cancelScheduledValues(downNow);
                osc.frequency.setValueAtTime(osc.frequency.value, downNow);
                osc.frequency.exponentialRampToValueAtTime(this.idleFreq * multiplier, downNow + 1.5);
            });

            this.filterNode.frequency.cancelScheduledValues(downNow);
            this.filterNode.frequency.setValueAtTime(this.filterNode.frequency.value, downNow);
            this.filterNode.frequency.exponentialRampToValueAtTime(this.filterFreqBase, downNow + 1.5);

            this.masterGain.gain.cancelScheduledValues(downNow);
            this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, downNow);
            this.masterGain.gain.linearRampToValueAtTime(0.4, downNow + 1.2);
        }, 1200);
    }

    stop() {
        if (!this.isPlaying) return;

        const now = this.ctx.currentTime;
        this.masterGain.gain.cancelScheduledValues(now);
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
        this.masterGain.gain.linearRampToValueAtTime(0.0, now + 0.2);

        setTimeout(() => {
            try {
                this.oscillators.forEach(osc => osc.stop());
                if (this.lfo) this.lfo.stop();
                if (this.ctx) this.ctx.close();
            } catch (err) {
                console.warn("Audio stop error:", err);
            }
            this.oscillators = [];
            this.gainNodes = [];
            this.ctx = null;
            this.isPlaying = false;
        }, 250);
    }
}

/* ==========================================================================
   Page Initialization & Event Listeners
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    
    // Header background change and top bar transition on scroll
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
            document.body.classList.add("scrolled-past");
        } else {
            header.classList.remove("scrolled");
            document.body.classList.remove("scrolled-past");
        }
    });

    // Mobile nav toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
    
    // Close mobile nav when clicking a link
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            
            // Set active class
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Initialize Components
    initFloorMap();
    initCollectionGrid();
    initSpecsComparer();
    initRestorationSlider();
    initModalEvents();
    initHeroSoundToggle();
    initVisitorCounter();
    initFeaturedCar();
    initTimelineInteractivity();
});

function initVisitorCounter() {
    const visitorEl = document.getElementById("visitor-count");
    if (!visitorEl) return;
    
    let currentCount = 1180;
    const targetCount = 1248;
    const duration = 2000; // 2 seconds count-up
    const startTime = performance.now();
    
    function animateCount(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out quad formula
        const easeProgress = progress * (2 - progress);
        const count = Math.floor(currentCount + (targetCount - currentCount) * easeProgress);
        
        visitorEl.innerText = count.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(animateCount);
        } else {
            visitorEl.innerText = targetCount.toLocaleString();
            currentCount = targetCount;
            
            // Start the interval loops for dynamic increments
            startVisitorIncrements();
        }
    }
    
    requestAnimationFrame(animateCount);
    
    function startVisitorIncrements() {
        setInterval(() => {
            // Add a small increment (1 to 3 new visitors)
            const increment = Math.floor(Math.random() * 3) + 1;
            currentCount += increment;
            
            visitorEl.innerText = currentCount.toLocaleString();
            visitorEl.classList.remove("increment-pulse");
            void visitorEl.offsetWidth; // Trigger reflow to restart CSS animation
            visitorEl.classList.add("increment-pulse");
        }, 5000); // every 5 seconds
    }
}

function initHeroSoundToggle() {
    const toggleBtn = document.getElementById("hero-sound-toggle");
    const statusText = document.getElementById("hero-sound-status");
    
    if (!toggleBtn) return;
    
    toggleBtn.addEventListener("click", () => {
        if (!heroAmbientEngine) {
            // Start a low deep V8 rumble in the background using Rolls-Royce settings
            heroAmbientEngine = new EngineSoundGenerator("rolls-phantom");
            heroAmbientEngine.start(0.15); // soft background volume
            
            toggleBtn.classList.add("playing");
            statusText.innerText = "Ambient Engine: ON";
        } else {
            // Stop sound
            heroAmbientEngine.stop();
            heroAmbientEngine = null;
            
            toggleBtn.classList.remove("playing");
            statusText.innerText = "Ambient Engine: OFF";
        }
    });
}

/* ==========================================================================
   Interactive Floor Map Component
   ========================================================================== */
function initFloorMap() {
    const svgMap = document.getElementById("interactive-museum-svg");
    const halls = svgMap.querySelectorAll(".museum-hall");
    
    halls.forEach(hall => {
        hall.addEventListener("click", () => {
            // Remove active class from all halls
            halls.forEach(h => h.classList.remove("active"));
            
            // Add active class to clicked hall
            hall.classList.add("active");
            
            const category = hall.getAttribute("data-category");
            updateHallInfoPanel(category);
        });
    });
    
    // Initialize with first hall
    updateHallInfoPanel("pioneers");
}

function updateHallInfoPanel(category) {
    const hall = hallsData[category];
    if (!hall) return;
    
    document.getElementById("hall-title").innerText = hall.title;
    document.getElementById("hall-desc").innerText = hall.desc;
    
    const carsContainer = document.getElementById("hall-cars-container");
    carsContainer.innerHTML = "";
    
    // Limit sidebar entries to 8 items to prevent overflow
    hall.cars.slice(0, 8).forEach(carId => {
        const car = carsData[carId];
        if (!car) return;
        
        const item = document.createElement("div");
        item.className = "hall-car-item";
        
        let thumbHTML = "";
        if (car.image) {
            thumbHTML = `<img class="hall-car-thumb" src="${car.image}" alt="${car.name}">`;
        } else {
            thumbHTML = `
            <div class="hall-car-thumb hall-car-thumb-placeholder">
                <svg viewBox="0 0 100 40" class="placeholder-car-svg" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 28 C 10 28, 15 28, 17 28 C 19 25, 23 25, 25 28 C 35 28, 65 28, 75 28 C 77 25, 81 25, 83 28 C 85 28, 90 28, 90 28 C 92 28, 93 27, 93 25 C 93 22, 91 18, 86 16 C 82 14, 75 14, 70 14 C 65 14, 60 10, 50 10 C 40 10, 35 12, 30 14 C 20 16, 12 18, 10 22 C 8 24, 8 28, 10 28 Z" fill="none" stroke="#c5a85c" stroke-width="1.5" stroke-linejoin="round"/>
                    <circle cx="21" cy="28" r="4" fill="none" stroke="#c5a85c" stroke-width="1.5"/>
                    <circle cx="79" cy="28" r="4" fill="none" stroke="#c5a85c" stroke-width="1.5"/>
                </svg>
            </div>`;
        }
        
        item.innerHTML = `
            ${thumbHTML}
            <div class="hall-car-details">
                <h4>${car.name}</h4>
                <p>${car.year} &bull; ${car.engine}</p>
            </div>
        `;
        item.addEventListener("click", () => {
            openCarSpotlight(carId);
        });
        carsContainer.appendChild(item);
    });
}

/* ==========================================================================
   Collection Grid Component
   ========================================================================== */
function initCollectionGrid() {
    const grid = document.getElementById("cars-grid");
    if (!grid) return;
    
    // Render all cars
    renderCollectionGrid();
    
    // Set up search listener
    const searchInput = document.getElementById("car-search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearchQuery = e.target.value;
            renderCollectionGrid();
        });
    }
    
    // Set up filter click listeners
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            currentCategoryFilter = btn.getAttribute("data-filter");
            renderCollectionGrid();
        });
    });
}

function renderCollectionGrid() {
    const grid = document.getElementById("cars-grid");
    if (!grid) return;
    grid.innerHTML = "";
    
    const query = currentSearchQuery.toLowerCase().trim();
    let renderedCount = 0;
    
    // Filter matches based on category and search query
    const matches = [];
    Object.keys(carsData).forEach(carId => {
        const car = carsData[carId];
        
        // Apply category filter
        if (currentCategoryFilter !== "all" && car.category !== currentCategoryFilter) {
            return;
        }
        
        // If query is empty, hide CSV database entries (starts with csv-) to optimize initial load
        const isCsvCar = carId.startsWith("csv-");
        if (!query && isCsvCar) {
            return;
        }
        
        // Apply search query filter
        if (query) {
            const matchesName = car.name.toLowerCase().includes(query);
            const matchesDesc = car.description.toLowerCase().includes(query);
            const matchesYear = car.year.toString().includes(query);
            const matchesEngine = car.engine.toLowerCase().includes(query);
            const matchesCategory = car.category.toLowerCase().includes(query);
            const matchesHall = car.hall.toLowerCase().includes(query);
            const matchesCountry = car.country.toLowerCase().includes(query);
            
            if (!matchesName && !matchesDesc && !matchesYear && !matchesEngine && !matchesCategory && !matchesHall && !matchesCountry) {
                return;
            }
        }
        
        matches.push(car);
    });
    
    // Sort so the 4 featured masterpieces (non-CSV) always come first
    matches.sort((a, b) => {
        const aIsCsv = a.id.startsWith("csv-");
        const bIsCsv = b.id.startsWith("csv-");
        if (aIsCsv && !bIsCsv) return 1;
        if (!aIsCsv && bIsCsv) return -1;
        return 0;
    });
    
    // Limit CSV search results to top 24 matches to prevent DOM lag
    let csvCount = 0;
    const finalCars = [];
    for (const car of matches) {
        if (car.id.startsWith("csv-")) {
            if (csvCount >= 24) continue;
            csvCount++;
        }
        finalCars.push(car);
    }
    
    finalCars.forEach(car => {
        renderedCount++;
        
        const card = document.createElement("div");
        card.className = "car-card glass-panel";
        
        // Premium gold silhouette placeholder if car image is null
        let imageHTML = "";
        if (car.image) {
            imageHTML = `<img class="car-card-img" src="${car.image}" alt="${car.name}">`;
        } else {
            imageHTML = `
            <div class="car-card-placeholder">
                <svg viewBox="0 0 100 40" class="placeholder-car-svg" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 28 C 10 28, 15 28, 17 28 C 19 25, 23 25, 25 28 C 35 28, 65 28, 75 28 C 77 25, 81 25, 83 28 C 85 28, 90 28, 90 28 C 92 28, 93 27, 93 25 C 93 22, 91 18, 86 16 C 82 14, 75 14, 70 14 C 65 14, 60 10, 50 10 C 40 10, 35 12, 30 14 C 20 16, 12 18, 10 22 C 8 24, 8 28, 10 28 Z" fill="none" stroke="#c5a85c" stroke-width="1.2" stroke-linejoin="round"/>
                    <circle cx="21" cy="28" r="3.5" fill="none" stroke="#c5a85c" stroke-width="1.2"/>
                    <circle cx="79" cy="28" r="3.5" fill="none" stroke="#c5a85c" stroke-width="1.2"/>
                    <path d="M38 14 L42 11 L60 11 L66 14" fill="none" stroke="#c5a85c" stroke-width="0.8" stroke-dasharray="2 1"/>
                </svg>
                <span class="placeholder-text">Database Registry</span>
            </div>`;
        }
        
        card.innerHTML = `
            <div class="car-card-img-wrap">
                ${imageHTML}
                <div class="headlight-glow"></div>
                <div class="card-tag">${car.hall}</div>
                
                <!-- Hover Specs Overlay -->
                <div class="card-hover-overlay">
                    <div class="card-overlay-specs">
                        <div class="card-overlay-item country">
                            <span class="flag">${car.flag}</span>
                            <span class="val">${car.country}</span>
                        </div>
                        <div class="card-overlay-item">
                            <span class="label">Year</span>
                            <span class="val">${car.year}</span>
                        </div>
                        <div class="card-overlay-item">
                            <span class="label">Power</span>
                            <span class="val">${car.power}</span>
                        </div>
                        <div class="card-overlay-item">
                            <span class="label">Speed</span>
                            <span class="val">${car.topSpeed}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="car-card-body">
                <span class="car-card-year">${car.year}</span>
                <h3 class="car-card-title">${car.name}</h3>
                <p class="car-card-desc">${car.description}</p>
                <div class="car-card-specs">
                    <div class="card-spec-item">
                        Engine
                        <span>${car.engine.split(' ')[0]}</span>
                    </div>
                    <div class="card-spec-item">
                        Top Speed
                        <span>${car.topSpeed}</span>
                    </div>
                </div>
                <button class="card-action-btn" id="inspect-${car.id}">Inspect Detail</button>
            </div>
        `;
        
        // Add click listener
        card.querySelector(".card-action-btn").addEventListener("click", () => {
            openCarSpotlight(car.id);
        });
        
        grid.appendChild(card);
    });
    
    // Empty state message
    if (renderedCount === 0) {
        const noResults = document.createElement("div");
        noResults.className = "no-results-msg glass-panel";
        noResults.innerHTML = `
            <h3>No Legends Found</h3>
            <p>We couldn't find any classic cars matching "${currentSearchQuery}". Try adjusting your terms or category filter.</p>
            <button class="btn btn-secondary btn-small" id="clear-search-btn">Reset Search</button>
        `;
        grid.appendChild(noResults);
        
        document.getElementById("clear-search-btn").addEventListener("click", () => {
            const searchInput = document.getElementById("car-search-input");
            if (searchInput) searchInput.value = "";
            currentSearchQuery = "";
            renderCollectionGrid();
        });
    }
}

/* ==========================================================================
   Specs Comparison Component
   ========================================================================== */
function initSpecsComparer() {
    const select1 = document.getElementById("car-select-1");
    const select2 = document.getElementById("car-select-2");
    
    // Populate select lists
    select1.innerHTML = "";
    select2.innerHTML = "";
    
    // Sort all car keys by production year ascending
    const sortedCarIds = Object.keys(carsData).sort((a, b) => {
        return carsData[a].year - carsData[b].year;
    });
    
    sortedCarIds.forEach(carId => {
        const car = carsData[carId];
        
        const opt1 = document.createElement("option");
        opt1.value = carId;
        opt1.text = `${car.name} (${car.year})`;
        select1.appendChild(opt1);
        
        const opt2 = document.createElement("option");
        opt2.value = carId;
        opt2.text = `${car.name} (${car.year})`;
        select2.appendChild(opt2);
    });
    
    // Set default values (diff cars)
    const default1 = sortedCarIds.includes("rolls-phantom") ? "rolls-phantom" : sortedCarIds[0];
    const default2 = sortedCarIds.includes("mercedes-gullwing") ? "mercedes-gullwing" : sortedCarIds[1];
    
    select1.value = default1;
    select2.value = default2;
    
    // Event listeners
    select1.addEventListener("change", updateComparison);
    select2.addEventListener("change", updateComparison);
    
    // Trigger first update
    updateComparison();
}

function updateComparison() {
    const val1 = document.getElementById("car-select-1").value;
    const val2 = document.getElementById("car-select-2").value;
    
    const car1 = carsData[val1];
    const car2 = carsData[val2];
    
    if (!car1 || !car2) return;
    
    // Render previews (supporting gold silhouette placeholder if image is null)
    const img1HTML = car1.image 
        ? `<img class="compare-img" src="${car1.image}" alt="${car1.name}">`
        : `<div class="compare-img compare-img-placeholder">
             <svg viewBox="0 0 100 40" class="placeholder-car-svg" xmlns="http://www.w3.org/2000/svg">
                 <path d="M10 28 C 10 28, 15 28, 17 28 C 19 25, 23 25, 25 28 C 35 28, 65 28, 75 28 C 77 25, 81 25, 83 28 C 85 28, 90 28, 90 28 C 92 28, 93 27, 93 25 C 93 22, 91 18, 86 16 C 82 14, 75 14, 70 14 C 65 14, 60 10, 50 10 C 40 10, 35 12, 30 14 C 20 16, 12 18, 10 22 C 8 24, 8 28, 10 28 Z" fill="none" stroke="#c5a85c" stroke-width="1.2" stroke-linejoin="round"/>
                 <circle cx="21" cy="28" r="3.5" fill="none" stroke="#c5a85c" stroke-width="1.2"/>
                 <circle cx="79" cy="28" r="3.5" fill="none" stroke="#c5a85c" stroke-width="1.2"/>
                 <path d="M38 14 L42 11 L60 11 L66 14" fill="none" stroke="#c5a85c" stroke-width="0.8" stroke-dasharray="2 1"/>
             </svg>
             <span class="compare-placeholder-tag">Database Registry</span>
           </div>`;
           
    const img2HTML = car2.image 
        ? `<img class="compare-img" src="${car2.image}" alt="${car2.name}">`
        : `<div class="compare-img compare-img-placeholder">
             <svg viewBox="0 0 100 40" class="placeholder-car-svg" xmlns="http://www.w3.org/2000/svg">
                 <path d="M10 28 C 10 28, 15 28, 17 28 C 19 25, 23 25, 25 28 C 35 28, 65 28, 75 28 C 77 25, 81 25, 83 28 C 85 28, 90 28, 90 28 C 92 28, 93 27, 93 25 C 93 22, 91 18, 86 16 C 82 14, 75 14, 70 14 C 65 14, 60 10, 50 10 C 40 10, 35 12, 30 14 C 20 16, 12 18, 10 22 C 8 24, 8 28, 10 28 Z" fill="none" stroke="#c5a85c" stroke-width="1.2" stroke-linejoin="round"/>
                 <circle cx="21" cy="28" r="3.5" fill="none" stroke="#c5a85c" stroke-width="1.2"/>
                 <circle cx="79" cy="28" r="3.5" fill="none" stroke="#c5a85c" stroke-width="1.2"/>
                 <path d="M38 14 L42 11 L60 11 L66 14" fill="none" stroke="#c5a85c" stroke-width="0.8" stroke-dasharray="2 1"/>
             </svg>
             <span class="compare-placeholder-tag">Database Registry</span>
           </div>`;

    document.getElementById("compare-preview-1").innerHTML = `
        ${img1HTML}
        <h3>${car1.name}</h3>
        <p>${car1.hall}</p>
    `;
    
    document.getElementById("compare-preview-2").innerHTML = `
        ${img2HTML}
        <h3>${car2.name}</h3>
        <p>${car2.hall}</p>
    `;
    
    // Determine winners for highlighting
    const speedWinner = car1.speedVal > car2.speedVal ? 1 : (car2.speedVal > car1.speedVal ? 2 : 0);
    const powerWinner = car1.powerVal > car2.powerVal ? 1 : (car2.powerVal > car1.powerVal ? 2 : 0);
    const weightWinner = car1.weightVal < car2.weightVal ? 1 : (car2.weightVal < car1.weightVal ? 2 : 0); // Lighter weight wins
    const ageWinner = car1.year < car2.year ? 1 : (car2.year < car1.year ? 2 : 0); // Older car wins age legacy
    
    // Draw matrix table
    const table = document.getElementById("compare-spec-table");
    table.innerHTML = `
        <thead>
            <tr>
                <th>Attribute</th>
                <th>${car1.name}</th>
                <th>${car2.name}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="spec-name">Production Year</td>
                <td class="spec-value ${ageWinner === 1 ? 'winner' : ''}">${car1.year}</td>
                <td class="spec-value ${ageWinner === 2 ? 'winner' : ''}">${car2.year}</td>
            </tr>
            <tr>
                <td class="spec-name">Engine Spec</td>
                <td class="spec-value">${car1.engine}</td>
                <td class="spec-value">${car2.engine}</td>
            </tr>
            <tr>
                <td class="spec-name">Horsepower</td>
                <td class="spec-value ${powerWinner === 1 ? 'winner' : ''}">${car1.power}</td>
                <td class="spec-value ${powerWinner === 2 ? 'winner' : ''}">${car2.power}</td>
            </tr>
            <tr>
                <td class="spec-name">Top Speed</td>
                <td class="spec-value ${speedWinner === 1 ? 'winner' : ''}">${car1.topSpeed}</td>
                <td class="spec-value ${speedWinner === 2 ? 'winner' : ''}">${car2.topSpeed}</td>
            </tr>
            <tr>
                <td class="spec-name">Weight</td>
                <td class="spec-value ${weightWinner === 1 ? 'winner' : ''}">${car1.weight}</td>
                <td class="spec-value ${weightWinner === 2 ? 'winner' : ''}">${car2.weight}</td>
            </tr>
            <tr>
                <td class="spec-name">Transmission</td>
                <td class="spec-value">${car1.transmission}</td>
                <td class="spec-value">${car2.transmission}</td>
            </tr>
        </tbody>
    `;
}

/* ==========================================================================
   Before/After Restoration Slider Component
   ========================================================================== */
function initRestorationSlider() {
    const slider = document.getElementById("restoration-slider");
    const afterContainer = document.getElementById("slider-after-container");
    const handle = document.getElementById("slider-drag-handle");
    
    let isDragging = false;
    
    // Mouse down inside handle/container
    slider.addEventListener("mousedown", (e) => {
        isDragging = true;
        updateSliderPosition(e);
    });
    
    // Touch start inside container
    slider.addEventListener("touchstart", (e) => {
        isDragging = true;
        updateSliderPosition(e.touches[0]);
    });
    
    // Mouse move/up on window to prevent handle getting stuck
    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        updateSliderPosition(e);
    });
    
    window.addEventListener("mouseup", () => {
        isDragging = false;
    });
    
    // Touch move/end on window
    window.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        updateSliderPosition(e.touches[0]);
    });
    
    window.addEventListener("touchend", () => {
        isDragging = false;
    });

    function updateSliderPosition(e) {
        const rect = slider.getBoundingClientRect();
        // Calculate horizontal offset position percentage (0 to 100)
        let offsetX = e.clientX - rect.left;
        let percentage = (offsetX / rect.width) * 100;
        
        // Constrain boundaries
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;
        
        // Update CSS widths
        afterContainer.style.width = `${percentage}%`;
        handle.style.left = `${percentage}%`;
    }
}

/* ==========================================================================
   Spotlight Detail Modal Component
   ========================================================================== */
function initModalEvents() {
    const modal = document.getElementById("car-spotlight-modal");
    const closeBtn = document.getElementById("modal-close-trigger");
    
    // Close on trigger click
    closeBtn.addEventListener("click", () => {
        closeCarSpotlight();
    });
    
    // Close on background click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeCarSpotlight();
        }
    });
    
    // Close on escape key
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeCarSpotlight();
        }
    });
}

function openCarSpotlight(carId) {
    const car = carsData[carId];
    if (!car) return;
    
    // Duck ambient background sound if running
    if (heroAmbientEngine && heroAmbientEngine.isPlaying && heroAmbientEngine.ctx) {
        const now = heroAmbientEngine.ctx.currentTime;
        heroAmbientEngine.masterGain.gain.cancelScheduledValues(now);
        heroAmbientEngine.masterGain.gain.setValueAtTime(heroAmbientEngine.masterGain.gain.value, now);
        heroAmbientEngine.masterGain.gain.linearRampToValueAtTime(0.02, now + 0.2);
    }
    
    // Stop any existing engine sound
    if (activeAudioEngine) {
        activeAudioEngine.stop();
        activeAudioEngine = null;
    }
    
    const container = document.getElementById("modal-body-container");
    
    const mediaHTML = car.image
        ? `<img class="modal-main-img" src="${car.image}" alt="${car.name}">`
        : (car.blueprintSvg
            ? `<div class="modal-main-img modal-main-img-blueprint">${car.blueprintSvg}</div>`
            : `<div class="modal-main-img modal-main-img-placeholder">
                 <svg viewBox="0 0 100 40" class="placeholder-car-svg" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10 28 C 10 28, 15 28, 17 28 C 19 25, 23 25, 25 28 C 35 28, 65 28, 75 28 C 77 25, 81 25, 83 28 C 85 28, 90 28, 90 28 C 92 28, 93 27, 93 25 C 93 22, 91 18, 86 16 C 82 14, 75 14, 70 14 C 65 14, 60 10, 50 10 C 40 10, 35 12, 30 14 C 20 16, 12 18, 10 22 C 8 24, 8 28, 10 28 Z" fill="none" stroke="#c5a85c" stroke-width="1.2" stroke-linejoin="round"/>
                     <circle cx="21" cy="28" r="3.5" fill="none" stroke="#c5a85c" stroke-width="1.2"/>
                     <circle cx="79" cy="28" r="3.5" fill="none" stroke="#c5a85c" stroke-width="1.2"/>
                     <path d="M38 14 L42 11 L60 11 L66 14" fill="none" stroke="#c5a85c" stroke-width="0.8" stroke-dasharray="2 1"/>
                 </svg>
                 <span class="modal-placeholder-tag">Database Registry</span>
               </div>`);

    container.innerHTML = `
        <div class="modal-media-col">
            ${mediaHTML}
            
            <div class="engine-sound-card">
                <div class="engine-info">
                    <h4>Engine Sound Simulator</h4>
                    <p>${car.engine} Virtual Exhaust</p>
                </div>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <!-- Visual equalizer bars -->
                    <div class="equalizer" id="equalizer-display">
                        <div class="eq-bar"></div>
                        <div class="eq-bar"></div>
                        <div class="eq-bar"></div>
                        <div class="eq-bar"></div>
                    </div>
                    
                    <button class="audio-btn" id="audio-start-btn" aria-label="Listen to engine sound">
                        <!-- Play Icon SVG -->
                        <svg id="play-svg-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <button class="btn btn-primary" id="audio-rev-btn" style="width: 100%; display: none;">Rev Engine</button>
        </div>
        
        <div class="modal-details-col">
            <span class="modal-car-year">${car.year}</span>
            <h2 class="modal-car-title">${car.name}</h2>
            <div class="modal-car-hall">${car.hall}</div>
            
            <!-- Tabs in modal -->
            <div class="modal-tabs">
                <button class="modal-tab-btn active" data-tab="tab-story">The Story</button>
                <button class="modal-tab-btn" data-tab="tab-specs">Specifications</button>
                <button class="modal-tab-btn" data-tab="tab-timeline">Timeline</button>
            </div>
            
            <!-- Story Tab Content -->
            <div class="modal-tab-content active" id="tab-story">
                <p style="color: var(--text-primary); font-size: 1rem; margin-bottom: 20px;">${car.description}</p>
                <p style="color: var(--text-muted); font-size: 0.9rem;">
                    Every curve of its body panels holds historical significance. Our curatorial department has verified the numbers-matching authentication of this vehicle, and it is displayed under optimal humidity controls inside its respective museum wing.
                </p>
            </div>
            
            <!-- Specs Tab Content -->
            <div class="modal-tab-content" id="tab-specs">
                <table class="specs-table">
                    <tr>
                        <td class="spec-label">Engine Layout</td>
                        <td class="spec-val">${car.engine}</td>
                    </tr>
                    <tr>
                        <td class="spec-label">Max Output</td>
                        <td class="spec-val">${car.power}</td>
                    </tr>
                    <tr>
                        <td class="spec-label">Maximum Speed</td>
                        <td class="spec-val">${car.topSpeed}</td>
                    </tr>
                    <tr>
                        <td class="spec-label">Gearbox System</td>
                        <td class="spec-val">${car.transmission}</td>
                    </tr>
                    <tr>
                        <td class="spec-label">Total Mass</td>
                        <td class="spec-val">${car.weight}</td>
                    </tr>
                </table>
            </div>
            
            <!-- Timeline Tab Content -->
            <div class="modal-tab-content" id="tab-timeline">
                <div class="history-timeline-modal">
                    ${car.timeline.map(item => `
                        <div class="history-timeline-modal-item">
                            <div class="modal-item-title">${item.year}</div>
                            <div class="modal-item-desc">${item.event}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Set up modal tab click events
    const tabBtns = container.querySelectorAll(".modal-tab-btn");
    const tabContents = container.querySelectorAll(".modal-tab-content");
    
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));
            
            btn.classList.add("active");
            const targetTab = btn.getAttribute("data-tab");
            container.querySelector(`#${targetTab}`).classList.add("active");
        });
    });
    
    // Audio engine bindings
    const audioBtn = container.querySelector("#audio-start-btn");
    const revBtn = container.querySelector("#audio-rev-btn");
    const playIcon = container.querySelector("#play-svg-icon");
    const eq = container.querySelector("#equalizer-display");
    
    audioBtn.addEventListener("click", () => {
        if (!activeAudioEngine) {
            // Start engine sound
            activeAudioEngine = new EngineSoundGenerator(carId);
            activeAudioEngine.start();
            
            // Show equalizer and rev button
            eq.classList.add("playing");
            revBtn.style.display = "block";
            
            // Swap icon to stop (square)
            playIcon.innerHTML = `<rect x="4" y="4" width="16" height="16"/>`;
        } else {
            // Stop sound
            activeAudioEngine.stop();
            activeAudioEngine = null;
            
            // Hide equalizer and rev button
            eq.classList.remove("playing");
            revBtn.style.display = "none";
            
            // Swap icon back to play (triangle)
            playIcon.innerHTML = `<polygon points="5 3 19 12 5 21"/>`;
        }
    });
    
    revBtn.addEventListener("click", () => {
        if (activeAudioEngine) {
            activeAudioEngine.rev();
        }
    });
    
    // Open modal overlay
    const modal = document.getElementById("car-spotlight-modal");
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background body scroll
}

function closeCarSpotlight() {
    // Stop any running synthesizer
    if (activeAudioEngine) {
        activeAudioEngine.stop();
        activeAudioEngine = null;
    }
    
    // Restore ambient background sound if running
    if (heroAmbientEngine && heroAmbientEngine.isPlaying && heroAmbientEngine.ctx) {
        const now = heroAmbientEngine.ctx.currentTime;
        heroAmbientEngine.masterGain.gain.cancelScheduledValues(now);
        heroAmbientEngine.masterGain.gain.setValueAtTime(heroAmbientEngine.masterGain.gain.value, now);
        heroAmbientEngine.masterGain.gain.linearRampToValueAtTime(0.15, now + 0.3);
    }
    
    const modal = document.getElementById("car-spotlight-modal");
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Restore background body scroll
}

function initFeaturedCar() {
    const visualContainer = document.getElementById("gullwing-3d-visual");
    const perspectiveContainer = visualContainer ? visualContainer.querySelector(".featured-car-perspective-container") : null;
    const spinTrigger = document.getElementById("featured-360-trigger");
    const spinText = document.getElementById("featured-360-text");
    const soundTrigger = document.getElementById("featured-sound-trigger");
    const soundText = document.getElementById("featured-sound-text");
    const playIcon = document.getElementById("featured-play-icon");
    const eq = document.getElementById("featured-eq-display");
    
    if (!visualContainer || !perspectiveContainer) return;
    
    // 1. 3D Perspective Tilt on Hover
    visualContainer.addEventListener("mousemove", (e) => {
        const rect = visualContainer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Calculate tilt angles based on mouse offset (-15deg to +15deg range)
        const rotateX = -((mouseY / rect.height) - 0.5) * 30;
        const rotateY = ((mouseX / rect.width) - 0.5) * 30;
        
        perspectiveContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    visualContainer.addEventListener("mouseleave", () => {
        // Reset tilt smoothly
        perspectiveContainer.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
    
    // 2. 360 Spin auto animation
    spinTrigger.addEventListener("click", () => {
        perspectiveContainer.classList.add("auto-spin");
        spinTrigger.disabled = true;
        spinText.innerText = "Rotating 360°...";
        
        setTimeout(() => {
            perspectiveContainer.classList.remove("auto-spin");
            spinTrigger.disabled = false;
            spinText.innerText = "360° View";
        }, 2500); // matches the CSS keyframe duration (2.5s)
    });
    
    // 3. Audio engine integration
    soundTrigger.addEventListener("click", () => {
        const isGullwingRunning = activeAudioEngine && activeAudioEngine.carId === "mercedes-gullwing";
        
        if (!isGullwingRunning) {
            // Stop any other active car sound
            if (activeAudioEngine) {
                activeAudioEngine.stop();
            }
            
            // Duck ambient background sound if running
            if (heroAmbientEngine && heroAmbientEngine.isPlaying && heroAmbientEngine.ctx) {
                const now = heroAmbientEngine.ctx.currentTime;
                heroAmbientEngine.masterGain.gain.cancelScheduledValues(now);
                heroAmbientEngine.masterGain.gain.setValueAtTime(heroAmbientEngine.masterGain.gain.value, now);
                heroAmbientEngine.masterGain.gain.linearRampToValueAtTime(0.02, now + 0.2);
            }
            
            // Start Gullwing engine sound
            activeAudioEngine = new EngineSoundGenerator("mercedes-gullwing");
            activeAudioEngine.start(0.4);
            
            // UI state active
            soundTrigger.classList.add("playing");
            eq.classList.add("playing");
            soundText.innerText = "Stop Engine";
            playIcon.innerHTML = `<rect x="4" y="4" width="16" height="16"/>`;
        } else {
            // Stop audio
            activeAudioEngine.stop();
            activeAudioEngine = null;
            
            // Restore ambient background sound if running
            if (heroAmbientEngine && heroAmbientEngine.isPlaying && heroAmbientEngine.ctx) {
                const now = heroAmbientEngine.ctx.currentTime;
                heroAmbientEngine.masterGain.gain.cancelScheduledValues(now);
                heroAmbientEngine.masterGain.gain.setValueAtTime(heroAmbientEngine.masterGain.gain.value, now);
                heroAmbientEngine.masterGain.gain.linearRampToValueAtTime(0.15, now + 0.3);
            }
            
            // UI state idle
            soundTrigger.classList.remove("playing");
            eq.classList.remove("playing");
            soundText.innerText = "Listen to Engine";
            playIcon.innerHTML = `<polygon points="5 3 19 12 5 21"/>`;
        }
    });
}

function initTimelineInteractivity() {
    const contents = document.querySelectorAll(".timeline-content");
    contents.forEach(content => {
        content.addEventListener("click", (e) => {
            // Prevent collapsing when clicking inside the expanded tray
            if (e.target.closest(".timeline-expanded-tray")) {
                return;
            }
            content.classList.toggle("expanded");
        });
    });
}
