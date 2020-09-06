let backgroundColor = undefined;
let isButtonClicked = false;
  
(function () {
  let headerOne = document.getElementById("hey");
  let headerTwo = document.querySelector("h2");
  let headerThree = document.querySelector("h3");
  const button = document.querySelector("#hello");
  

  document.addEventListener("binary", (e) => {
    console.log("hello");
    headerOne.textContent = e.detail.binarytext;
    headerOne.style.color = e.detail.color;
  });

  document.addEventListener("change", (ev) => {
    headerTwo.textContent = ev.detail.textForTwo;
    headerThree.textContent = ev.detail.textForThree;
    headerTwo.style.color = ev.detail.textColor;
    headerThree.style.color = ev.detail.textColor;
  });

  button.addEventListener("click", () => {
    const theEvent = new CustomEvent("binary", {
      detail: {
        binarytext:
          "01010100 01101000 01101001 01110011 00100000 01101001 01110011 00100000 01110100 01101000 01100101 00100000 01010011 01101001 01110100 01100101 00100001",
        color: "red",
      },
    });

    const chainEvent = new CustomEvent("change", {
      detail: {
        textForTwo: "something happened to the header",
        textForThree: "I think it says 'This is the Site!' CLICK BUTTON AGAIN!",
        textColor: "black",
      },
    });

    backgroundColor && (document.body.style.backgroundColor = backgroundColor);

    isButtonClicked = !isButtonClicked;
    if (isButtonClicked) {
        backgroundColor = "green";
      } else {
        backgroundColor = "aquamarine";
      }
    document.dispatchEvent(theEvent);
    document.dispatchEvent(chainEvent);  
    
  });
})();
