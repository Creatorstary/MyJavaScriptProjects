const aboutBtn = document.getElementById('aboutBtn');
const aboutInfo = document.getElementById('about');
const maincontent = document.querySelector('main');

if (aboutBtn && aboutInfo) {
    const showAbout = () => {
        maincontent.style.height = 'auto';
        maincontent.style.borderRadius = '25px';
        aboutInfo.style.visibility = 'visible';
    };

    const hideAbout = () => {
        aboutInfo.style.visibility = 'hidden';
        maincontent.style.height = '50px';
    };

    aboutBtn.addEventListener('mouseenter', showAbout);
    aboutBtn.addEventListener('mouseleave', showAbout);

    aboutInfo.addEventListener('mouseenter', showAbout);
    aboutInfo.addEventListener('mouseleave', hideAbout);
}
