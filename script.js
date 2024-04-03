console.log("Helló")
url = "https://jsonplaceholder.typicode.com/posts"
console.log(url)

xhttp = new XMLHttpRequest()

// xhttp.onreadystatechanges = function(){
//    if (xhttp.readyState == 4&& xhttp.status == 200){
 //       console.logC
  //  }
//}

xhttp.onload = function()
    data = JSON.parse

xhttp.open("get",url,true)
// CRUD - post,get,update,delete
xhttp.send()