// write js code here corresponding to favourites.html


var favArr=JSON.parse(localStorage.getItem("favourites"))
displayData(favArr)

function displayData(favArr){
favArr.forEach(function(elem,index){

    var tr=document.createElement("tr")

    var td1=document.createElement("td")
    td1.innerText=elem.matchNum
   
   
    var td2=document.createElement("td")
    td2.innerText=elem.teamA
   
    var td3=document.createElement("td")
    td3.innerText=elem.teamB
   
    var td4=document.createElement("td")
    td4.innerText=elem.date
   
    var td5=document.createElement("td")
    td5.innerText=elem.venue
   

    var dlt =document.createElement("td")
    dlt.innerText="DELETE"
    dlt.style.color="red"
    dlt.style.cursor="pointer"
    dlt.addEventListener("click",function(){
        dltFun(elem,index)
    })
 
   
    tr.append(td1,td2,td3,td4,td5,dlt)
   
    document.querySelector("tbody").append(tr)

})

}

function dltFun(elem,index){
   favArr.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favArr))
    window.location.reload();
}


