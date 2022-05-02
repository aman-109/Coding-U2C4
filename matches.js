// write js code here corresponding to matches.html

var matchData=JSON.parse(localStorage.getItem("schedule"))
 displayData(matchData)


//  document.querySelector("#filterVenue").addEventListener("change",sortFun);

 var favArr=[]



function displayData(matchData){
matchData.forEach(function(elem){

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
   
    var fav=document.createElement("td")
    fav.innerText="Add as Favourites"
    fav.style.color="green"
    fav.style.cursor="pointer"
    fav.addEventListener("click",function(){
        favFunction(elem);
    })
   
   
   
    tr.append(td1,td2,td3,td4,td5,fav)
   
    document.querySelector("tbody").append(tr)

})

}

function favFunction(elem){
    // console.log(elem)

    favArr.push(elem)
    localStorage.setItem("favourites",JSON.stringify(favArr))
    
}


// function sortFun(){
//     var selector =document.querySelector("#filterVenue").value

//     if(selector=="mumbai"){
//             console.log("hi")
//     }
    
// }



