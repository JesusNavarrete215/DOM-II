// Your code goes here

// * `mouseover` completed
// * `keydown` completed
// * `wheel` completed
// * `load` completed
// * `focus` & `blur` completed
// * `resize`
// * `scroll` completed
// * `select`
// * `dblclick` completed
// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`
//mouseover
let mouse = document.querySelector('header');
mouse.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
mouse.addEventListener("mouseover", function( event ) {
  event.target.style.color = "orange";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

//keydown
window.addEventListener('keydown', checkKeyPress, false)
function checkKeyPress(key){
    if (key.keyCode == '65'){
        alert("Thank you for choosing Fun Buss")
    }
}
//wheel
function zoom(event) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      // Zoom in
      scale *= event.deltaY * -2;
    }
    else {
      // Zoom out
      scale /= event.deltaY * 2;
    }
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 2);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('img');
  document.onwheel = zoom;



//load
window.addEventListener("load",function(){
    alert("Loaded!")
})

//blur & focus - you will need to click out of the browser for the event to occur

function pause() {
  document.body.classList.add('paused');
  log.textContent = 'Fun Bus';
}

function play() {
  document.body.classList.remove('paused');
  log.textContent = 'Lets Go Travel!';
}

const log = document.querySelector('h1');

window.addEventListener('blur', pause);
window.addEventListener('focus', play);

//resize


//scroll
window.addEventListener('scroll', () => {
     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
     const scrolled = window.scrollY;
   

    if(Math.ceil(scrolled) === scrollable){
        alert('You\'ve reached the bottom!');
    }
});

//select

//dblclick

const card = document.querySelector('.btn');

card.addEventListener('dblclick', function (event){
    card.style.background = 'black'
});

