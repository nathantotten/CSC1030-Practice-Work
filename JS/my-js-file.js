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
    addListItem(myList, "Working with members of the public of all ages");
    addListItem(myList, "Providing customers with assistance when necessary – critically being approachable and friendly no matter what I was currently doing");
    addListItem(myList, "Dealing with any general queries relating to the store or helping customers to locate items or other members of staff who might be better suited to assist them");
    addListItem(myList, "Managing my priorities to ensure I performed my contracted duties as well as providing the assistance above – ensuring that I was able to complete the work allocated to me as well as assisting customers on an ad-hoc basis");
    addListItem(myList, "Working with my team lead, his line manager & my colleagues to help them get the allocated jobs completed on time and to a high standard – learning as I went to do the job better");

    contentDiv.appendChild(myList);

    addParagraph("I pride myself in being able to adapt to change and use my initiative to find new, creative and more efficient ways to do things – I would typically throw myself into new tasks and my enthusiasm has been commented on as being a positive asset.");
    addParagraph("I work well in a team and get along very well with others, I’m easy going & relaxed and work hard to get jobs completed on time and to a very high standard. I enjoy my work and working with others, particularly the feeling we get when we collectively work well together and do a great job, with happy customers to show for it – I take great pride in everything I do.");
}


//Refresh the page contents for "Skills & Qualities".
function skillsAndQualities() {
    clearDiv();
    //Alter the heading.
    addHeading("Skills & Qualities");

    var skillsList = document.createElement("ul");

    addListItem(skillsList, "Relationship development – with both other colleagues and customers");
    addListItem(skillsList, "Cash handling – I’m dependable and honest");
    addListItem(skillsList, "Organization skills – I manage conflicting priorities well and know how to manage my time to get the most important jobs completed on time");
    addListItem(skillsList, "Product Knowledge – I throw myself into whatever I do, frequently researching topics after my shift ends");
    addListItem(skillsList, "Empathetic and genuine – I am a good listener, like to help others and work well in groups and teams ");
    addListItem(skillsList, "Cash register operations – I feel very comfortable working with customers and point of sale cash / card payment systems ");
    addListItem(skillsList, "Complaint and query handling – I’ve had experience dealing with irate customers, and know how to listen and de-escalate the situation ");
    addListItem(skillsList, "Outstanding communication – I’m a good communicator, I find that listening and knowing when to comment is a great skill to have -	Outstanding communication – I’m a good communicator, I find that listening and knowing when to comment is a great skill to have ");
    addListItem(skillsList, "Key holder experience – I have been trusted to lock up and set alarms at the end of shifts ");
    addListItem(skillsList, "Mathematics and Problem Solving – my course content both at GCSE, A level and in my degree means I’m very comfortable with maths including mental arithmetic under pressure");
    addListItem(skillsList, "Use of software to enhance productivity – I’ve very comfortable around computers, POS equipment and IT / Software systems, I train quickly and can be trusted to use them correctly. ");

    contentDiv.appendChild(skillsList);
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