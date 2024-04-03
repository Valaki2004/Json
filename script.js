console.log("Helló")
url = "https://jsonplaceholder.typicode.com/posts"
console.log(url)

xhttp = new XMLHttpRequest()

xhttp.open("get",url,true)
// CRUD - post,get,update,delete
xhttp.send()