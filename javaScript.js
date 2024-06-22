

function changeIcon(x) {
    let icon = document.getElementById("menueIcon");
    icon.classList.toggle("fa-xmark");
  }







  // for beacome a donner scroll button 

window.addEventListener('scroll', function() {
  let stickButton = document.getElementById('scroll_show');
  if (window.scrollY > 0) { // Check if the page is scrolled
      stickButton.style.display = 'block'; // Show the button
     
  } else { // Page is scrolled back to the top
      stickButton.style.display = 'none'; // Hide the button
  }
});






// for changing the background color 

  function myFunction() {
    let menu = document.getElementById("menue-display");
    let rightMenuBg = document.getElementById('right-menu-bg');

    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
      rightMenuBg.style.backgroundColor = '#5e62d1';
      // menu.addEventListener('onscroll',scrollDown);
    } else {
      menu.style.display = "none";
      rightMenuBg.style.backgroundColor = '#e0e2ee'; // Reset background color
    }

    changeIcon(); // Call the function to change the icon
  }

  // Array of background colors
  const colors = ['#47a96f', '#dbed83', '#5fecc8', '#f9ae65'];

  // Array of text colors corresponding to background colors
  // const textColors = ['#dc856a', '#ffd196', '#5e62d1', '#3c6d79'];

  // Function to change background color and text color
  function changeColor() {
      const colorContainer = document.getElementById('sec5_bg');
      const randomIndex = Math.floor(Math.random() * colors.length);
      const randomColor = colors[randomIndex];
      // const textColor = textColors[randomIndex];
      colorContainer.style.backgroundColor = randomColor;
      colorContainer.style.color = textColor;
  }

  // Call the function every 2 seconds
  setInterval(changeColor, 2000);

//   wao script

new WOW().init();