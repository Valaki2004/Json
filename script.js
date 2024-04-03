console.log("Helló")
url = "https://jsonplaceholder.typicode.com/posts"
console.log(url)
data=[]
oszlopok = ["name","age","address","job","hobby"]

function render(){
    container = document.getElementsByClassName("container")[0]
    container.innerHTML=""

    sor = document.createElement('div')
    sor.className="row"

    for(const oszlop of oszlopok){
        cella = document.createElement('div')
        cella.className= "col"
        cella.innerHTML=oszlop
        sor.appendChild(cella)
    }

    container.appendChild(sor)
}

xhttp = new XMLHttpRequest()

// xhttp.onreadystatechanges = function(){
//    if (xhttp.readyState == 4&& xhttp.status == 200){
//  }
//}

xhttp.onload = function()
    data = JSON.parse(xhttp.response)



xhttp.open("get",url,true)
// CRUD - post,get,update,delete
xhttp.send()