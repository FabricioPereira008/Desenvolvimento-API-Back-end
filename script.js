
    function logSubmit(event) {
        const task = document.getElementById("campot")
        result.textContent = task.value;
        event.preventDefault();
      }
    const result = document.getElementById("result");
    const form = document.getElementById("form");
    
    form.addEventListener("submit", logSubmit);