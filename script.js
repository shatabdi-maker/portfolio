const nameText = "Shatabdee Talukder";
  let i = 0;

  function typeWriter() {
    if (i < nameText.length) {
      document.getElementById("typewriter").innerHTML += nameText.charAt(i);
      i++;
      setTimeout(typeWriter, 200); // typing speed
    }
  }

  window.onload = typeWriter;