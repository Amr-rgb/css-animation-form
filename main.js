const expand = (label) => {
  label.parentNode.classList.add("active");
};

const shrink = (input) => {
  if (!input.value) {
    input.parentNode.classList.remove("active");
    console.log(input.value);
  }
};
