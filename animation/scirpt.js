let block = document.querySelector(".block");
let block2 = document.querySelector(".block2");

let text = "HelloWorld";

for (let i of text) {
  let span = document.createElement("span");
  span.innerHTML = i;
  block.append(span);
//   block2.append(span)
}
for (let i of text) {
  let span = document.createElement("span");
  span.innerHTML = i;
  span.classList.add("opacticy")
  block2.append(span);
}

block.onmouseenter = () => {
  let arr = event.target.children;
  let arr2 = block2.children

  for (let i = 0; i < arr.length; i++) {
    arr[i].style.transitionDelay = `0.${i}s`;
    arr[i].classList.add("activeSpan");
    
    arr2[i].style.transitionDelay = `0.${i}s`;
    arr2[i].classList.remove("opacticy");
    arr2[i].classList.add("activeSpan");

    console.log(arr2[i]);
  }
};

block.onmouseleave = () => {
  let arr = event.target.children;
  let arr2 = block2.children

  for (let i = 0; i < arr.length; i++) {
    arr[i].style.transitionDelay = `0.${i}s`;
    arr[i].classList.remove("activeSpan");

    arr2[i].classList.add("opacticy");
    arr2[i].style.transitionDelay = `0.${i}s`;
    arr2[i].classList.remove("activeSpan");

  }
};


