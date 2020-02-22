let forms = document.getElementsByTagName("form")
let buttonsNext = document.getElementsByClassName("btn-next")
let buttonsBack = document.getElementsByClassName("btn-previous")
let formsStep = document.getElementsByClassName("form-step")
let steps = document.getElementsByClassName("step")
let separators = document.getElementsByClassName("separator")
let finalMessageWrapper = document.querySelector(".final-message-wrapper")
console.log(finalMessageWrapper)

for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener("submit", function(e) {
    e.preventDefault()
  })
}

for (let j = 0; j < buttonsNext.length; j++) {
  buttonsNext[j].addEventListener("click", function() {
    showStepForm(j)
  })
}

for (let k = 0; k < buttonsBack.length; k++) {
  buttonsBack[k].addEventListener("click", function() {
    showPreviousForm(k)
  })
}

function showStepForm(index) {
  formsStep[index].classList.remove("active")
  if (index === 2) {
    showFinalMessage()
    setStepActive(index)
    fillStepAndSeparator(index)
  } else {
    formsStep[index + 1].classList.add("active")
    setStepActive(index + 1)
    fillStepAndSeparator(index)
  }
}

function showPreviousForm(index) {
  console.log(index)
  formsStep[index + 1].classList.remove("active")
  formsStep[index].classList.add("active")
  setStepActive(index)
  removeActive(index + 1)
  removeFillFromSeparator(index)
}

function fillStepAndSeparator(index) {
  steps[index].classList.remove("active")
  steps[index].classList.add("fill")
  separators[index].classList.add("fill")
}

function setStepActive(index) {
  if (steps[index].classList.contains("fill")) {
    steps[index].classList.remove("fill")
  }
  steps[index].classList.add("active")
}

function removeActive(index) {
  steps[index].classList.remove("active")
}
function removeFillFromSeparator(index) {
  console.log("Quebra aqui?")
  separators[index].classList.remove("fill")
}

function showFinalMessage() {
  finalMessageWrapper.classList.add("active")
}
//console.log(form)
