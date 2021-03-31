//using selectors inside the element
// traversing the dom
const Btns = document.querySelectorAll(".question-btn")
const Texts = document.querySelectorAll(".question")

Btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
       const question =  e.currentTarget.parentElement.parentElement
       Texts.forEach((item)=> {
        if(item !== question) {
            item.classList.remove("show-text")
        } else {
            question.classList.toggle("show-text")
        }
    })
      
    })
})



