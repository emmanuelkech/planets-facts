const overview = document.querySelector('.overview');
const structure = document.querySelector('.structure');
const geology = document.querySelector('.geology');
const mobileOverview = document.querySelector('.mobile-overview');
const mobileStructure = document.querySelector('.mobile-structure');
const mobileSurface = document.querySelector('.mobile-surface');

const overallContainer = document.querySelector('.overall-container');
const overviewContainer = document.querySelector('.overview-container');
const structureContainer = document.querySelector('.structure-container');
const geologyContainer = document.querySelector('.geology-container');

const planetImage = document.querySelector('.planet-image');
const planetInternal = document.querySelector('.planet-internal-image');
const planetGeology = document.querySelector('.planet-geology');

const toggler = document.querySelector('.navbar-toggler');
const mobileMenu = document.querySelector('.hamburger-menu');
const mobileMain = document.querySelector('.mobile-main');

toggler.addEventListener('click', () => {
    if (mobileMenu.style.display === 'none' && mobileMain.style.display === 'block') {
        mobileMenu.style.display = 'block';
        mobileMain.style.display = 'none';
    } else {
        mobileMenu.style.display = 'none';
        mobileMain.style.display = 'block';
    }


})

const OverviewClicked = () => {
    planetInternal.replaceWith(planetImage);
    planetGeology.style.display = 'none';
    if (overallContainer === structureContainer || geologyContainer) {
        structureContainer.replaceWith(overviewContainer);
        geologyContainer.replaceWith(overviewContainer);
        overviewContainer.style.display = 'block';
    };
}

const StructureCLicked = () => {
    planetImage.replaceWith(planetInternal);
    planetInternal.style.display = 'block';
    planetGeology.style.display = 'none';
    if (overallContainer === overviewContainer || structureContainer || geologyContainer) {
        overviewContainer.replaceWith(structureContainer);
        geologyContainer.replaceWith(structureContainer);
        structureContainer.style.display = 'block';
    };
}

const GeologyClicked = () => {
    planetGeology.style.display = 'block';
    planetInternal.replaceWith(planetImage);
    if (overallContainer === overviewContainer || structureContainer || geologyContainer) {
        overviewContainer.replaceWith(geologyContainer);
        structureContainer.replaceWith(geologyContainer);
        geologyContainer.style.display = 'block';
    }; 
}

overview.addEventListener('click', OverviewClicked);
mobileOverview.addEventListener('click', OverviewClicked);

structure.addEventListener('click', StructureCLicked);
mobileStructure.addEventListener('click', StructureCLicked);

geology.addEventListener('click', GeologyClicked);
mobileSurface.addEventListener('click', GeologyClicked);
