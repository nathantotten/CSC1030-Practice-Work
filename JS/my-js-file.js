const headingElement = document.getElementById("head01");
const contentDiv = document.getElementById("content-scrollable");

function clearDiv() {
    contentDiv.innerHTML = "";
}

function addHeading(headingText) {
    var heading1 = document.createElement("h1");
    heading1.innerHTML = headingText;
    contentDiv.appendChild(heading1);
}

function addParagraph(paraText) {
    //Create the paragraph.
    var para1 = document.createElement("p");

    //Add content to the paragraph.
    para1.innerHTML = paraText;

    //Finally, append the element to the desired parent.
    contentDiv.appendChild(para1);
}

function addListItem(parentId, itemText) {
    var listNode = document.createElement("li");
    var nodeText = document.createTextNode(itemText);
    listNode.appendChild(nodeText);
    parentId.appendChild(listNode);
}

//Refresh the page contents for "About Me".
function aboutMe() {

    clearDiv();

    //Alter the heading.
    addHeading("About Me");

    //Add Paras.
    addParagraph("I am a highly motivated, outgoing and friendly first-year student at Queen’s University Belfast studying Computer Science. Despite the pandemic I am greatly enjoying student life and my course - I have had a passion for IT & Computing from an early age but find that I frequently have spare time throughout the week, evenings and weekends which I would like to occupy with part-time work if possible. Not only would this supplement my modestly low income, but I greatly enjoy working with people and find the experiences gained worthwhile and rewarding – I would prefer to work than sit and do nothing essentially.");
    addParagraph("I have 4 months previous work experience (prior to the pandemic) working in a well-known high street retail environment over the demanding Christmas and New Year period which gave me invaluable experience in the following areas:");

    var myList = document.createElement("ul");
    
    addListItem(myList, "Working different shift patterns including very early morning and late at night");
    
    contentDiv.appendChild(myList);
}


//Refresh the page contents for "Skills & Qualities".
function skillsAndQualities() {
    clearDiv();
    //Alter the heading.
    addHeading("Skills & Qualities");
}


//Refresh the page contents for "Employment History".
function employment() {
    clearDiv();
    //Alter the heading.
    addHeading("Employment History");
}


//Refresh the page contents for "Education".
function education() {
    clearDiv();
    //Alter the heading.
    addHeading("Education");
}


//Refresh the page contents for "Hobbies & Interests".
function interests() {
    clearDiv();
    //Alter the heading.
    addHeading("Hobbies & Interests");
}


//Refresh the page contents for "Contact Me".
function contact() {
    clearDiv();
    //Alter the heading.
    addHeading("Contact Me");
}