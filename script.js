function addText() {
    //get the text input value by its id

    let text = document.getElementById("textid");
    //remove empty spaces in the string
    let textValue = text.value.trim();
    // check if the value is empty string
    if (textValue == "") {
        alert("please enter some text");
        return false;
    }

    //create a h1 tag
    let newh1 = document.createElement("h1");

    //style the new h1 
    newh1.style.color = "white";
    newh1.style.fontSize = "50px";
    newh1.style.margin = "10px";

    //add text to the h1 element from the input tag

    newh1.innerText = textValue;
    // get the parent id 

    let parent = document.getElementById("displaybox");

    //append the new h1 to the parent

    parent.appendChild(newh1);

    // delect text from the input box
    text.value = "";

}

let imgbutton = document.getElementById("addimagebutton");
imgbutton.addEventListener("click", function () {

    //create new img tag
    let newPicture = document.createElement("img");

    //get  the name of the picture
    let imgname = document.getElementById("imgname");
    //trim the spaces
    let imgValue = imgname.value.trim();
    //set the src attributes using the name entered in the input box
    newPicture.src = imgValue + ".png"

    //set the src attribute
    // newPicture.src = "1.png","2.png";

    //set the style
    newPicture.style.width = "200px";
    newPicture.style.height = "200px";
    newPicture.style.margin = "10px";

    //set the alt attributes
    newPicture.alt = "my picture";

    //get the parent id
    let parent = document.getElementById("displaybox");

    //apend the new img to the parent
    parent.appendChild(newPicture);

}

)

let addButton = document.getElementById("addbutton");
addButton.addEventListener("click", function () {

    //get the button input value by its id
    let button = document.getElementById("buttonid");

    //remove empty spaces in the string
    let buttonValue = button.value.trim();

    // check if the value is empty string
    if (buttonValue == "") {
        alert("create a new button first");
        return false;
    }
    //create a button tag element
    let newButton = document.createElement("button");

    //add class to the button
    newButton.classList.add("btn", "btn-danger");

    //style the created button element
    newButton.style.width = "200px";
    newButton.style.height = "50px";
    newButton.style.margin = "50px";
    newButton.style.textAlign = "center";


    //add text to the button element from the input tag
    newButton.innerText = buttonValue;


    // get the parent id
    let parent = document.getElementById("displaybox");

    //append the new button to the parent
    parent.appendChild(newButton);

    // delect text from the input box
    button.value = "";





})