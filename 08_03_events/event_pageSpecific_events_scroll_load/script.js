/*DOMContentLoaded  */
document.addEventListener('DOMContentLoaded',function(){
    h1=document.querySelector('section>h1');
    p=document.querySelector('section>p');
    firts_cards=document.querySelector('.firts_cards');
    second_cards=document.querySelector('.second_cards');
    cards=document.querySelector('.cards');
     h1.addEventListener('animationend', function() {
       // Execute this code after the h1 animation ends
       p.style.display = 'block'; // Display the p element after h1 animation ends
       p.classList.add('p_animation'); // Adding a class to trigger animation on p
     });
    p.addEventListener('animationend', function() {
      // Execute this code after the p animation ends
      // Add any further actions you want to perform after both animations end
      cards.style.display = 'flex'; // Display the cards element after p animation ends
      firts_cards.classList.add('firts_cards_animation');
    });
  })
  /* scroll event */
  
  let prevScrollPos = window.pageYOffset;
  
  function back_color() {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos) {
          // Scrolling down
          document.body.style.backgroundColor = '#9bf081';
      } else {
          // Scrolling up
          document.body.style.backgroundColor = ''; // Remove background color
      }
      prevScrollPos = currentScrollPos;
  }
  window.addEventListener('scroll',function(){
    back_color()
  })
  