
function toggleMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className.indexOf("responsive") === -1) {
        x.className += " responsive";
    } else {
        x.className = x.className.replace(" responsive", "");
    }
}


function toggleMenu() {
    var menuPopup = document.getElementById("menuPopup");
    if (menuPopup.style.display === "block") {
      menuPopup.style.display = "none";
    } else {
      menuPopup.style.display = "block";
    }
  }
  
  // Close the pop-up menu when clicking outside of it
  document.addEventListener("click", function(event) {
    var menuPopup = document.getElementById("menuPopup");
    var menuIcon = document.querySelector(".menu");
    if (event.target !== menuPopup && event.target !== menuIcon) {
      menuPopup.style.display = "none";
    }
  });
  

// Scrolls to top of the site when the home button is pressed
function scrollToTop() {
    window.scrollTo(0, 0);
}

        // JavaScript function to scroll to the target image
        function scrollToFourth() {
            const targetImage = document.getElementById("discover-target-image");
            if (targetImage) {
                targetImage.scrollIntoView({ behavior: "smooth" });
            }
        }

         // JavaScript function to scroll to the target image
         function scrollToSeventh() {
            const targetImage = document.getElementById("shopnow-target-image");
            if (targetImage) {
                targetImage.scrollIntoView({ behavior: "smooth" });
            }
        }

// Code for purchase pop up, allows it to be closed and opened
       { const dialog = document.querySelector('.purchase-overview');
        const openButton = dialog.nextElementSibling;
        const closeButton = dialog.querySelector('sl-button[slot="footer"]');
      
        openButton.addEventListener('click', () => dialog.show());
        closeButton.addEventListener('click', () => dialog.hide());
    }
 

    (function() {
        "use strict";
      

        // Carousel javascript
        var carousel = document.getElementsByClassName('carousel')[0],
            slider = carousel.getElementsByClassName('carousel__slider')[0],
            items = carousel.getElementsByClassName('carousel__slider__item'),
            prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
            nextBtn = carousel.getElementsByClassName('carousel__next')[0];
        
        var width, height, totalWidth, margin = 20,
            currIndex = 0,
            interval, intervalTime = 4000;
        
        function init() {
            resize();
            move(Math.floor(items.length / 2));
            bindEvents();
            timer();
        }
        
        function resize() {
            width = Math.max(window.innerWidth * .25, 275),
            height = window.innerHeight * .5,
            totalWidth = width * items.length;
          
            slider.style.width = totalWidth + "px";
          
            for(var i = 0; i < items.length; i++) {
                let item = items[i];
                item.style.width = (width - (margin * 2)) + "px";
                item.style.height = height + "px";
            }
        }
        
        function move(index) {
          
            if(index < 1) index = items.length;
            if(index > items.length) index = 1;
            currIndex = index;
          
            for(var i = 0; i < items.length; i++) {
                let item = items[i],
                    box = item.getElementsByClassName('item__3d-frame')[0];
                if(i == (index - 1)) {
                    item.classList.add('carousel__slider__item--active');
                    box.style.transform = "perspective(1200px)"; 
                } else {
                  item.classList.remove('carousel__slider__item--active');
                    box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
                }
            }
          
            slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
        }
        
        function timer() {
            clearInterval(interval);    
            interval = setInterval(() => {
              move(++currIndex);
            }, intervalTime);    
        }
        
        function prev() {
          move(--currIndex);
          timer();
        }
        
        function next() {
          move(++currIndex);    
          timer();
        }
        
        
        function bindEvents() {
            window.onresize = resize;
            prevBtn.addEventListener('click', () => { prev(); });
            nextBtn.addEventListener('click', () => { next(); });    
        }
        init();
      })();

      
// Scrolling interaction

      const img = document.getElementById('thirdpage-img');
      let isScrolling = false;
      let timer;
      
      window.addEventListener('scroll', () => {
        if (!isScrolling) {
          isScrolling = true;
          img.style.animation = 'wobble 1s infinite';
        }
      
        clearTimeout(timer);
        timer = setTimeout(() => {
          isScrolling = false;
          img.style.animation = '';
        }, 50);
      });

      
     