window.onload = () => {
  console.log("Page loaded!"); // Check if onload event is triggered
  const c = setTimeout(() => {
  
    console.log("Timeout function executed!"); // Check if timeout function is executed
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

window.onload = () => {
  console.log("Page loaded!"); // Check if onload event is triggered
  const c = setTimeout(() => {
    console.log("Timeout function executed!"); // Check if timeout function is executed
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

