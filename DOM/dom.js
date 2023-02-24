/* 
    getElementsByTagName
*/
// all li element
const liCollection = document.getElementsByTagName("li");
// console.log(liCollection);
for (const li of liCollection) {
  // console.log(li);
  // console.log(li.innerText);
}

// all heading
const headingCollection = document.getElementsByTagName("h1");
// console.log(liCollection);
for (const head of headingCollection) {
  // console.log(head);
  // console.log(head.innerText);
}

/*  
  getElementsByClassName
*/
const getClass = document.getElementsByClassName("db_list");
// console.log(getClass);


/* 
    getElementById
*/
const databases = document.getElementById("Database-container");
// console.log(databases);

// change perticular property
const changeDbList = document.getElementById("db-li");
// From MongoDB to Microsoft SQL Server
changeDbList.innerText = "Microsoft SQL Server";


/* 
    querySelectorAll
*/
const quarySelectorByID = document.querySelectorAll(".db_list");
// console.log(quarySelectorByID);
const quarySelectorByClass = document.querySelector(".db_list");
// console.log(quarySelectorByClass);