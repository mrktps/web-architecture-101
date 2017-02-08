
document.addEventListener("DOMContentLoaded", function(e) {

  const link = document.createElement('link');
      link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Fira+Mono:400,700|Fira+Sans:300,300i,400,400i,500,500i,700,700i');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('media', 'screen');
      
      document.querySelector('html > head').appendChild(link);
      
      document.body.classList.add('loaded');
      
      document.addEventListener("scroll", function(event) {
        if(window.scrollY < 1) document.body.classList.add('sticky');
      });
      
      window.addEventListener("hashchange", function() {        
        document.body.classList.remove('sticky');
        
        recursivelyOpenClosestDetails(document.getElementById(location.hash.slice(1)));
        
        function recursivelyOpenClosestDetails(element) {
          const closestDetails = element.parentElement.closest('details');
          
          try {
            closestDetails.setAttribute('open', 'true');
          } catch(e) { return false }
          
          recursivelyOpenClosestDetails(closestDetails);
        }
        
      }, false);
  
  const toggleTOCWrappers = document.querySelectorAll('.toggle-toc-wrapper');
  for(let i = 0; i < toggleTOCWrappers.length; i++) {
    toggleTOCWrappers[i].innerHTML = `<button class="toggle-toc" id="toggle-toc${i}" data-a11y-toggle="sidenav" data-toc-hide="‹ Close Table of Contents" data-toc-show="Open Table of Contents ›">Open Table of Contents ›</button>`;
  }
  
  const toggleTocs = document.querySelectorAll('.toggle-toc');
  for(let i = 0; i < toggleTocs.length; i++) {
    toggleTocs[i].addEventListener('click', function(e) {
      handleToggleTocClick();
    });
  }
  
  if(localStorage.getItem('toc-shown')) {
    document.getElementById('sidenav').setAttribute('data-a11y-toggle-open', 'true');
    document.getElementById('sidenav').setAttribute('aria-hidden','false');
    handleToggleTocClick();
  }
  
  function handleToggleTocClick() {
    if(document.body.classList.contains('toc-shown')) {
      document.body.classList.remove('toc-shown');
      localStorage.removeItem('toc-shown');
    } else {
      document.body.classList.add('toc-shown');
      localStorage.setItem('toc-shown','1');
    }
    for(let i = 0; i < toggleTocs.length; i++) {
      toggleTocs[i].innerHTML = document.body.classList.contains('toc-shown') ? toggleTocs[i].dataset.tocHide : toggleTocs[i].dataset.tocShow;
    }
  }
  
  // when the sticky close button is clicked, on mobile, scroll it into view
  document.getElementById('toggle-toc0').addEventListener('click', function(e) {
    if(window.outerWidth > 640) return; // ignore if not mobile
    setTimeout(function(){ // tiny delay for the DOM to re-render
      window.scrollTo({ // smoothly scroll to the top of the #fold (pagetitle, content)
        'behavior': 'smooth', // not safe at all to use today http://caniuse.com/#feat=css-scroll-behavior
        'left': 0,
        'top': document.getElementById('fold').offsetTop
      });
    },160);
  });
  
});