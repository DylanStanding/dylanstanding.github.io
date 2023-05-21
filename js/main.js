document.addEventListener("DOMContentLoaded", function () {
    // Add fade-out class to the welcome image and links after 3 seconds of idle time
    var timeout;
    function startTimer() {
      timeout = setTimeout(function () {
        document.querySelector(".welcome").classList.add("fade-out");
        var links = document.querySelectorAll("a");
        links.forEach(function (link) {
          link.classList.add("fade-out");
        });
      }, 3000);
    }
  
    function resetTimer() {
      clearTimeout(timeout);
      document.querySelector(".welcome").classList.remove("fade-out");
      var links = document.querySelectorAll("a");
      links.forEach(function (link) {
        link.classList.remove("fade-out");
      });
      startTimer();
    }
  
    startTimer();
  
    // Reset the timer when there is any user activity
    document.addEventListener("mousemove", resetTimer);
    document.addEventListener("keydown", resetTimer);
  });
  