function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const topOffset = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset - 70,
        behavior: 'smooth'
      });
    }
  }


  const animationContainer1 = document.getElementById('lottie-container1');
  const animationData1 = 'https://lottie.host/f4608271-1ff6-4016-87ce-a7fc71093534/tozNwgzC1Q.json';

  const animation1 = lottie.loadAnimation({
    container: animationContainer1,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationData1,
  });

  const animationContainer2 = document.getElementById('lottie-container2');
  const animationData2 = 'https://lottie.host/37dc955b-047e-4c00-be84-b7061eba8c9f/dWbnlzwzZS.json';

  const animation2 = lottie.loadAnimation({
    container: animationContainer2,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationData2,
  });

  const animationContainer3 = document.getElementById('lottie-container3');
  const animationData3 = 'https://lottie.host/846f1af4-9825-4035-902f-986d3ed9e711/OyDcD7M7OG.json';

  const animation3 = lottie.loadAnimation({
    container: animationContainer3,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationData3,
    speed: 0.5,
  }) ;

  const animationContainer4 = document.getElementById('lottie-container4');
  const animationData4 = 'https://lottie.host/ced46f6d-5c84-450a-afd1-20a67568c734/pVzzr1Xnfd.json';

  const animation4 = lottie.loadAnimation({
    container: animationContainer4,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationData4,
    speed: 0.5,
  }) ;

  const animationContainer5 = document.getElementById('lottie-container5');
  const animationData5 = 'https://lottie.host/b8267e94-5051-4d7b-be4f-60e8b6fb9163/QZG6KoRNwb.json';

  const animation5 = lottie.loadAnimation({
    container: animationContainer5,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationData5,
    speed: 0.5,
  }) ;


  document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('newsContainer');
    const newsItems = document.querySelectorAll('.news-item');
    const cloneNewsItems = Array.from(newsItems).map(newsItem => newsItem.cloneNode(true));


    cloneNewsItems.forEach(clone => container.appendChild(clone));


    let scrollAmount = 1;
    const delay = 50; 
    let scrollInterval; 

    function startScroll() {
      scrollInterval = setInterval(() => {
        container.scrollLeft += scrollAmount;
        if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
          container.scrollLeft = 0;
          container.appendChild(container.firstElementChild.cloneNode(true)); 
        }
      }, delay);
    }

    function stopScroll() {
      clearInterval(scrollInterval);
    }

    container.addEventListener('mouseenter', stopScroll);
    container.addEventListener('mouseleave', startScroll);

    startScroll();
  });

  function openLink(url) {
    window.open(url, '_blank');
  }