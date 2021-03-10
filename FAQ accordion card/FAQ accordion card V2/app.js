// toggle the answers

const visible = document.querySelectorAll(".question")

visible.forEach((question) => question.addEventListener("click", () => {

    if(question.parentNode.classList.contains("active")){
        
        question.parentNode.classList.toggle("active")
    }
    else { //to avoid two active questions and answers
        visible.forEach(question => question.parentNode.classList.remove("active"))
        
        question.parentNode.classList.add("active")
    }
        

}))


        
        
       
    