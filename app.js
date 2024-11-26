let input = document.querySelector("input");
let btn = document.querySelector("#push");
let tasks = document.querySelector(".tasks");


btn.addEventListener("click", ()=>{
    if(input.value == ""){
        alert("Please enter the task");
    }else{
        tasks.innerHTML += `<div class='task'>
        <span class="taskname">${input.value}</span>
        <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
        </div> `
        
        input.value = "";

        var currTask = document.querySelectorAll(".delete");
        for(var i=0; i<currTask.length; i++){
            currTask[i].onclick = function(){
                this.parentNode.remove()
            }
        }

        var task = document.querySelectorAll(".task");
        for(var i=0; i<task.length; i++){
            task[i].onclick = function(){
                this.classList.toggle("complete");
            }
        }
        // let delBtn = document.querySelectorAll(".delete");
        // for(btn of delBtn ){
        //     btn.addEventListener("click", ()=>{
        //        console.log("press");
        //        btn.parentNode.remove();
        //     })
        // }
    }
})



input.addEventListener("keypress", (event)=>{
    if(event.key == "Enter"){
        if(input.value == ""){
            alert("Please enter the task");
        }else{
            tasks.innerHTML += `<div class='task'>
            <span class="taskname">${input.value}</span>
            <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
            </div> `
            
            input.value = "";
    
            var currTask = document.querySelectorAll(".delete");
            for(var i=0; i<currTask.length; i++){
                currTask[i].onclick = function(){
                    this.parentNode.remove()
                }
            }
    
            var task = document.querySelectorAll(".task");
            for(var i=0; i<task.length; i++){
                task[i].onclick = function(){
                    this.classList.toggle("complete");
                }
            }
            // let delBtn = document.querySelectorAll(".delete");
            // for(btn of delBtn ){
            //     btn.addEventListener("click", ()=>{
            //        console.log("press");
            //        btn.parentNode.remove();
            //     })
            // }
        }
    }
})


