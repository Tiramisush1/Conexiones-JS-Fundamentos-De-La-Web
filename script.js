let elementChangeName = document.querySelector("#name"),
    elementConnection1 = document.querySelector("#connections-2"),
    elementConnection2 = document.querySelector ("#connections-500");

function changeName(){
    let name = "Martin Sandoval"
    elementChangeName.innerText = name
}

let count1 = 2,
    count2 =428;

    let removing = function (event){
        console.log(event.id)
        let parentFirst = event.closest("#request");
        if(event.id == "accept"){
            count1 --
            count2 ++
            elementConnection1.innerText = `${count1}`
            elementConnection2.innerText = `${count2}`
            parentFirst.remove()
        }
        else if(event.id === "closes"){
            count1--
            elementConnection1.innerText = `${count1}`
            parentFirst.remove()
        }
    }