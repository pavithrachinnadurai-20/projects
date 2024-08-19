//selecting popup box popup overlay

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.querySelector(".add-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
    })

    //seleecting cancel button
    var cancelpopup=document.getElementById("cancel-popup")
    cancelpopup.addEventListener("click",function(event){
        event.preventDefault()
        popupoverlay.style.display="none"
    popupbox.style.display="none"
    })

    //select container,add-book,book-name-input,book-author-input,book-description-input
    var container=document.querySelector(".container")
    var addbook=document.getElementById("add-book")
    var booknameinput=document.getElementById("book-name-input")
    var bookauthorinput=document.getElementById("book-author-input")
    var bookdescription=document.getElementById("book-description-input")

    addbook.addEventListener("click",function(event){
        event.preventDefault()
        var div=document.createElement("div")
        div.setAttribute("class","book-container")
        div.innerHTML=`<h2>${booknameinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescription.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
        container.append(div)
        popupoverlay.style.display="none"
    popupbox.style.display="none"
    })

    function deletebook(event)
    {
        event.target.parentElement.remove()
    }