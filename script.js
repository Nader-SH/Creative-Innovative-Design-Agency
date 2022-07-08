let containerDiv = document.querySelector("#container");
let  containerHeader = document.createElement("header");
let  container_Div_Name = document.createElement("div");
let  container_Div_List = document.createElement("div");


// ? header start ;


let  containerH2 = document.createElement("h2");
let containerUl = document.createElement("ul");

// ! all li 
let containerLi1 = document.createElement("a");
let containerLi2 = document.createElement("a");
let containerLi3 = document.createElement("a");
let containerLi4 = document.createElement("a");


containerDiv.appendChild(containerHeader);
containerHeader.appendChild(container_Div_Name);
containerHeader.appendChild(container_Div_List);
container_Div_List.appendChild(containerUl);
container_Div_Name .appendChild(containerH2);

containerUl.appendChild(containerLi1);
containerUl.appendChild(containerLi3);
containerUl.appendChild(containerLi4);


// ! className for all elements in the container;
containerHeader.className = "header";
containerH2.className = "logo";
container_Div_List.className = "header-right";

// ! content for the container elements in the header elements;
containerH2.textContent = "LOGO";
containerLi1.textContent = "Work";
containerLi3.textContent = "Services";
containerLi4.textContent = "Contact";


// ? div for the body elements;

let bodyDiv = document.createElement("div");
containerDiv.appendChild(bodyDiv);
let textContent1 = document.createElement("p");
let textContent2 = document.createElement("p");
let textContent3 = document.createElement("p");
bodyDiv.appendChild(textContent1);
bodyDiv.appendChild(textContent2);
bodyDiv.appendChild(textContent3);

textContent1.textContent = "Creative";
textContent2.textContent = "Innovative";
textContent3.textContent = "Design Agency";


bodyDiv.className = "bodyDiv";

let para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. "

let bodyDiv1 = document.createElement("div");

containerDiv.appendChild(bodyDiv1);
bodyDiv1.className = "bodyDiv1";
let textContent4 = document.createElement("p");
bodyDiv1.appendChild(textContent4);
textContent4.textContent = para;
textContent4.className = "textContent4";


// Work text  content with img ;

let workDiv = document.createElement("div");
let textContent5 = document.createElement("p");
textContent5.className = "textContent5";
textContent5.textContent = "Work";
workDiv.className = "workDiv";
containerDiv.appendChild(workDiv);
workDiv.appendChild(textContent5);


let  imgDiv = document.createElement("div");

let imgDiv1 = document.createElement("div");
let imgDiv2 = document.createElement("div");
let imgDiv3 = document.createElement("div");    
let imgDiv4 = document.createElement("div");
let imgDiv5 = document.createElement("div");
let imgDiv6 = document.createElement("div");

let  imgDivImage1 = document.createElement("img");
let  imgDivImage2 = document.createElement("img");
let  imgDivImage3 = document.createElement("img");
let  imgDivImage4 = document.createElement("img");
let  imgDivImage5 = document.createElement("img");
let  imgDivImage6 = document.createElement("img");

let imgDiv11 = document.createElement("div");
let imgDiv22 = document.createElement("div");
let imgDiv33 = document.createElement("div");
let imgDiv44 = document.createElement("div");
let imgDiv55 = document.createElement("div");
let imgDiv66 = document.createElement("div");

let imgDiv111 = document.createElement("a");
let imgDiv222 = document.createElement("a");
let imgDiv333 = document.createElement("a");
let imgDiv444 = document.createElement("a");
let imgDiv555 = document.createElement("a");
let imgDiv666 = document.createElement("a");



let textContentForImgDivNums = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."


imgDiv11.textContent = textContentForImgDivNums;
imgDiv22.textContent = textContentForImgDivNums;
imgDiv33.textContent = textContentForImgDivNums;
imgDiv44.textContent = textContentForImgDivNums;
imgDiv55.textContent = textContentForImgDivNums;
imgDiv66.textContent = textContentForImgDivNums;

imgDiv1.appendChild(imgDiv11);
imgDiv2.appendChild(imgDiv22);
imgDiv3.appendChild(imgDiv33);
imgDiv4.appendChild(imgDiv44);
imgDiv5.appendChild(imgDiv55);  
imgDiv6.appendChild(imgDiv66);
// <td>&rarr;</td> // ! for arrow
imgDiv111.textContent = `See Project`;
imgDiv222.textContent = "See Project";
imgDiv333.textContent = "See Project";
imgDiv444.textContent = "See Project";  
imgDiv555.textContent = "See Project";
imgDiv666.textContent = "See Project"; 

imgDiv111.className = "imgDiv111";
imgDiv222.className = "imgDiv111";
imgDiv333.className = "imgDiv111";
imgDiv444.className = "imgDiv111";
imgDiv555.className = "imgDiv111";
imgDiv666.className = "imgDiv111";  

imgDiv11.appendChild(imgDiv111);
imgDiv22.appendChild(imgDiv222);
imgDiv33.appendChild(imgDiv333);
imgDiv44.appendChild(imgDiv444);
imgDiv55.appendChild(imgDiv555);
imgDiv66.appendChild(imgDiv666); 



imgDivImage1.className = "imgDivImage";
imgDivImage2.className = "imgDivImage";
imgDivImage3.className = "imgDivImage"; 
imgDivImage4.className = "imgDivImage"; 
imgDivImage5.className = "imgDivImage"; 
imgDivImage6.className = "imgDivImage"; 

imgDiv11.className = "overlay";
imgDiv22.className = "overlay";
imgDiv33.className = "overlay"; 
imgDiv44.className = "overlay"; 
imgDiv55.className = "overlay"; 
imgDiv66.className = "overlay";

imgDiv.appendChild(imgDiv1);
imgDiv.appendChild(imgDiv2);
imgDiv.appendChild(imgDiv3);
imgDiv.appendChild(imgDiv4);
imgDiv.appendChild(imgDiv5);
imgDiv.appendChild(imgDiv6);

imgDiv1.className = "imgDivAll";
imgDiv2.className = "imgDivAll";
imgDiv3.className = "imgDivAll";
imgDiv4.className = "imgDivAll";    
imgDiv5.className = "imgDivAll";    
imgDiv6.className = "imgDivAll"; 

imgDivImage1.src = "./imgde/1.png";
imgDivImage2.src = "./imgde/2.png";
imgDivImage3.src = "./imgde/3.png";
imgDivImage4.src = "./imgde/4.png";
imgDivImage5.src = "./imgde/5.png";
imgDivImage6.src = "./imgde/6.png";



imgDiv1.appendChild(imgDivImage1);
imgDiv2.appendChild(imgDivImage2);
imgDiv3.appendChild(imgDivImage3);
imgDiv4.appendChild(imgDivImage4);
imgDiv5.appendChild(imgDivImage5);
imgDiv6.appendChild(imgDivImage6);



imgDiv.className = "imgDiv";
containerDiv.appendChild(imgDiv);

// !  end 


let servicesDiv = document.createElement("div");
let servicesDivP = document.createElement("p");

servicesDivP.textContent = "Services";
servicesDiv.className = "servicesDiv";
servicesDiv.appendChild(servicesDivP);
containerDiv.appendChild(servicesDiv);

let servicesDivPara = document.createElement("div");

let servicesDivPara1 = document.createElement("div");
let servicesDivPara2 = document.createElement("div");
let servicesDivPara3 = document.createElement("div");
let servicesDivPara4 = document.createElement("div");  

let servicesDivParah11 = document.createElement("p");
let servicesDivParah22 = document.createElement("p");
let servicesDivParah33 = document.createElement("p");
let servicesDivParah44 = document.createElement("p"); 

servicesDivParah11.textContent = "Graphic Design";
servicesDivParah22.textContent = "Product Design";
servicesDivParah33.textContent = "Web Design";
servicesDivParah44.textContent = "Video Editing";

servicesDivParah11.className = "title";
servicesDivParah22.className = "title";
servicesDivParah33.className = "title";
servicesDivParah44.className = "title";

let servicesDivParah111 = document.createElement("p");
let servicesDivParah222 = document.createElement("p");
let servicesDivParah333 = document.createElement("p");
let servicesDivParah444 = document.createElement("p");

let servicesDivParah1111 = document.createElement("a");
let servicesDivParah2222 = document.createElement("a");
let servicesDivParah3333 = document.createElement("a");
let servicesDivParah4444 = document.createElement("a");

let servicesDivParah11111 = document.createElement("p");
let servicesDivParah22222 = document.createElement("p");
let servicesDivParah33333 = document.createElement("p");
let servicesDivParah44444 = document.createElement("p");

let textForPService  = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ";
servicesDivParah11111.textContent =textForPService;
servicesDivParah22222.textContent =textForPService;
servicesDivParah33333.textContent =textForPService;
servicesDivParah44444.textContent =textForPService;

servicesDivParah11111.className = "servicesDivParah11111";
servicesDivParah22222.className = "servicesDivParah11111";
servicesDivParah33333.className = "servicesDivParah11111";
servicesDivParah44444.className = "servicesDivParah11111";

servicesDivParah1111.className = "servicesDivParah1111";
servicesDivParah2222.className = "servicesDivParah1111";
servicesDivParah3333.className = "servicesDivParah1111";
servicesDivParah4444.className = "servicesDivParah1111";


servicesDivPara1.appendChild(servicesDivParah11);
servicesDivPara2.appendChild(servicesDivParah22);
servicesDivPara3.appendChild(servicesDivParah33);
servicesDivPara4.appendChild(servicesDivParah44);

servicesDivPara.appendChild(servicesDivPara1);
servicesDivPara.appendChild(servicesDivPara2);
servicesDivPara.appendChild(servicesDivPara3);
servicesDivPara.appendChild(servicesDivPara4);

servicesDivPara1.appendChild(servicesDivParah11111);
servicesDivPara2.appendChild(servicesDivParah22222);
servicesDivPara3.appendChild(servicesDivParah33333);
servicesDivPara4.appendChild(servicesDivParah44444);


servicesDivPara1.appendChild(servicesDivParah1111);
servicesDivPara2.appendChild(servicesDivParah2222);
servicesDivPara3.appendChild(servicesDivParah3333);
servicesDivPara4.appendChild(servicesDivParah4444);

servicesDivParah1111.textContent = "See Details";
servicesDivParah2222.textContent = "See Details";
servicesDivParah3333.textContent = "See Details";
servicesDivParah4444.textContent = "See Details";

servicesDivParah1111.href = "#";
servicesDivParah2222.href = "#";
servicesDivParah3333.href = "#";
servicesDivParah4444.href = "#";


servicesDivPara1.appendChild(servicesDivParah111);
servicesDivPara2.appendChild(servicesDivParah222);
servicesDivPara3.appendChild(servicesDivParah333);
servicesDivPara4.appendChild(servicesDivParah444); 

servicesDivParah111.textContent = "Starting at $350";
servicesDivParah222.textContent = "Starting at $350";
servicesDivParah333.textContent = "Starting at $350";
servicesDivParah444.textContent = "Starting at $350";   

servicesDivParah111.className = "servicesDivParah111";
servicesDivParah222.className = "servicesDivParah111";
servicesDivParah333.className = "servicesDivParah111";
servicesDivParah444.className = "servicesDivParah111";


servicesDivPara1.className = 'servicesDivPara1';
servicesDivPara2.className = 'servicesDivPara1';
servicesDivPara3.className = 'servicesDivPara1';
servicesDivPara4.className = 'servicesDivPara1';

servicesDivPara.className = "servicesDivPara";
containerDiv.appendChild(servicesDivPara);

// ?? end


let  ourTeamDivTitle = document.createElement("div");
let ourTeamDivTitleP = document.createElement("p");
ourTeamDivTitle.appendChild(ourTeamDivTitleP);
ourTeamDivTitle.className = "ourTeamDivTitle";
ourTeamDivTitleP.textContent = "Our Team";

let teamDivTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
let ourTeamDivPara = document.createElement("p");
ourTeamDivPara.textContent = teamDivTitle;
let teamDivTitleParagraph = document.createElement("div");

teamDivTitleParagraph.className = "bodyDiv1";
ourTeamDivPara.className = "textContent4";

teamDivTitleParagraph.appendChild(ourTeamDivPara);
containerDiv.appendChild(ourTeamDivTitle);
containerDiv.appendChild(teamDivTitleParagraph);

// ? title end 

let ourTeamDivImg = document.createElement("div");

ourTeamDivImg.className = "teamDivImgForAll";

let ourTeamDivImgContainer1 = document.createElement("div");
let ourTeamDivImgContainer2 = document.createElement("div");
let ourTeamDivImgContainer3 = document.createElement("div");
let ourTeamDivImgContainer4 = document.createElement("div");


ourTeamDivImgContainer1.className = "imgDivAll";
ourTeamDivImgContainer2.className = "imgDivAll";
ourTeamDivImgContainer3.className = "imgDivAll";
ourTeamDivImgContainer4.className = "imgDivAll";


let ourTeamDivImgContainer11 = document.createElement("div");
let ourTeamDivImgContainer22 = document.createElement("div");
let ourTeamDivImgContainer33 = document.createElement("div");
let ourTeamDivImgContainer44 = document.createElement("div");

ourTeamDivImgContainer11.className = "overlay";
ourTeamDivImgContainer22.className = "overlay";
ourTeamDivImgContainer33.className = "overlay";
ourTeamDivImgContainer44.className = "overlay";

let ourTeamDivParagraph1 = document.createElement("p");
let ourTeamDivParagraph2 = document.createElement("p");
let ourTeamDivParagraph3 = document.createElement("p");
let ourTeamDivParagraph4 = document.createElement("p");

ourTeamDivParagraph1.textContent = "Jhon Doe";
ourTeamDivParagraph2.textContent = "Jhon Doe";
ourTeamDivParagraph3.textContent = "Jhon Doe";
ourTeamDivParagraph4.textContent = "Jhon Doe";


let ourTeamDivParagraph11 = document.createElement("p");
let ourTeamDivParagraph22 = document.createElement("p");
let ourTeamDivParagraph33 = document.createElement("p");
let ourTeamDivParagraph44 = document.createElement("p");

ourTeamDivParagraph11.textContent = "Digital Marketing Manager";
ourTeamDivParagraph22.textContent = "Digital Marketing Manager";
ourTeamDivParagraph33.textContent = "Digital Marketing Manager";
ourTeamDivParagraph44.textContent = "Digital Marketing Manager";


let ourTeamDivImg1 = document.createElement("img");
let ourTeamDivImg2 = document.createElement("img");
let ourTeamDivImg3 = document.createElement("img");
let ourTeamDivImg4 = document.createElement("img");

ourTeamDivImg1.className = "imgDivImage";
ourTeamDivImg2.className = "imgDivImage";
ourTeamDivImg3.className = "imgDivImage";
ourTeamDivImg4.className = "imgDivImage";

ourTeamDivImg1.src ="./ourTeam/1.png";
ourTeamDivImg2.src ="./ourTeam/2.png";
ourTeamDivImg3.src ="./ourTeam/3.png";
ourTeamDivImg4.src ="./ourTeam/4.png";


ourTeamDivImg1.className = "teamPhotos";
ourTeamDivImg2.className = "teamPhotos";
ourTeamDivImg3.className = "teamPhotos";
ourTeamDivImg4.className = "teamPhotos";



ourTeamDivImgContainer1.appendChild(ourTeamDivImgContainer11);
ourTeamDivImgContainer2.appendChild(ourTeamDivImgContainer22);
ourTeamDivImgContainer3.appendChild(ourTeamDivImgContainer33);
ourTeamDivImgContainer4.appendChild(ourTeamDivImgContainer44);


ourTeamDivImgContainer1.appendChild(ourTeamDivImg1);
ourTeamDivImgContainer2.appendChild(ourTeamDivImg2);
ourTeamDivImgContainer3.appendChild(ourTeamDivImg3);
ourTeamDivImgContainer4.appendChild(ourTeamDivImg4);
// !  

ourTeamDivImgContainer11.appendChild(ourTeamDivParagraph1);
ourTeamDivImgContainer22.appendChild(ourTeamDivParagraph2);
ourTeamDivImgContainer33.appendChild(ourTeamDivParagraph3);
ourTeamDivImgContainer44.appendChild(ourTeamDivParagraph4);

ourTeamDivImgContainer11.appendChild(ourTeamDivParagraph11);
ourTeamDivImgContainer22.appendChild(ourTeamDivParagraph22);
ourTeamDivImgContainer33.appendChild(ourTeamDivParagraph33);
ourTeamDivImgContainer44.appendChild(ourTeamDivParagraph44);
// !
ourTeamDivImgContainer1.appendChild(ourTeamDivImg1);
ourTeamDivImgContainer2.appendChild(ourTeamDivImg2);
ourTeamDivImgContainer3.appendChild(ourTeamDivImg3);
ourTeamDivImgContainer4.appendChild(ourTeamDivImg4);

ourTeamDivImg.appendChild(ourTeamDivImgContainer1);
ourTeamDivImg.appendChild(ourTeamDivImgContainer2);
ourTeamDivImg.appendChild(ourTeamDivImgContainer3);
ourTeamDivImg.appendChild(ourTeamDivImgContainer4);


containerDiv.appendChild(ourTeamDivImg);

// ? end 

// ? contact start 

let contactDiv = document.createElement('div');

contactDiv.className = 'contactDiv';
let contactDivPara = document.createElement('p');
contactDivPara.textContent = 'Contact';
contactDivPara.className = 'contact';

let contactDivEmail = document.createElement('p');
let contactDivnumber = document.createElement('p');

contactDivEmail.textContent = "contact@website.com";
contactDivEmail.className = "contactDivEmail";

contactDivnumber.textContent = "+0 1234 5678 910";
contactDivnumber.className = "contactDivNumber";

// !!!!
contactDiv.appendChild(contactDivPara);
contactDiv.appendChild(contactDivEmail);
contactDiv.appendChild(contactDivnumber);
// !!!!

let contactScialMidea = document.createElement('div');
let contactScialMidea1 = document.createElement('a');
let contactScialMidea2 = document.createElement('a');
let contactScialMidea3 = document.createElement('a');
let contactScialMidea4 = document.createElement('a');
let contactScialMidea5 = document.createElement('a');
let contactScialMidea6 = document.createElement('a');

contactScialMidea1.textContent = "Twitter";
contactScialMidea2.textContent = "LinkedIn";
contactScialMidea3.textContent = "Dribbble";
contactScialMidea4.textContent = "YouTube";
contactScialMidea5.textContent = "Instagram";
contactScialMidea6.textContent = "Facebook";

contactScialMidea.className = "contactScialMidea"

contactScialMidea1.className = "contactScialMideaATag";
contactScialMidea2.className = "contactScialMideaATag";
contactScialMidea3.className = "contactScialMideaATag";
contactScialMidea4.className = "contactScialMideaATag";
contactScialMidea5.className = "contactScialMideaATag";
contactScialMidea6.className = "contactScialMideaATag";

contactScialMidea1.href = "#";
contactScialMidea2.href = "#";
contactScialMidea3.href = "#";
contactScialMidea4.href = "#";
contactScialMidea5.href = "#";
contactScialMidea6.href = "#";

contactScialMidea.appendChild(contactScialMidea1);
contactScialMidea.appendChild(contactScialMidea2);
contactScialMidea.appendChild(contactScialMidea3);
contactScialMidea.appendChild(contactScialMidea4);
contactScialMidea.appendChild(contactScialMidea5);
contactScialMidea.appendChild(contactScialMidea6);

contactDiv.appendChild(contactScialMidea);
containerDiv.appendChild(contactDiv);
//? end 

let fotterDiv = document.createElement("div");
fotterDiv.className = "fotterDiv";

let fotterDiv1 = document.createElement("div");
fotterDiv1.className = "fotterDiv1";

let fotterCreatives = document.createElement("p");
fotterCreatives.textContent = "2022 Creatives";
fotterCreatives.className = "fotterCreatives";

let fotterPrivacyPolicy = document.createElement("p");
fotterPrivacyPolicy.textContent = "Privacy Policy";
fotterPrivacyPolicy.className = "fotterPrivacyPolicy";

let fotterConditions = document.createElement("p");
fotterConditions.className = "fotterConditions";
fotterConditions.textContent = "Terms and Conditions";

fotterDiv.appendChild(fotterCreatives);


fotterDiv1.appendChild(fotterPrivacyPolicy);
fotterDiv1.appendChild(fotterConditions);

containerDiv.appendChild(fotterDiv1);
containerDiv.appendChild(fotterDiv);