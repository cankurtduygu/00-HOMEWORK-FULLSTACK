const getUserData = async() => {

    const response = await fetch("https://randomuser.me/api/");

    if(response.status >=200 && response.status <300){
            const data = await response.json();
            printUserData(data);
    } else {
        throw new Error("url hatali");
    }
}

getUserData();


const printUserData = (userData) => {

    const userDiv = document.querySelector("article");
    userDiv.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${userData.results[0].picture.large}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">
    ${userData.results[0].name.title} 
    ${userData.results[0].name.first}  
    ${userData.results[0].name.last}</h5>
    <p class="card-text">${userData.results[0].email}</p>
    <p class="card-text">${userData.results[0].phone}</p>
    <button class="btn btn-primary">Change User</button>
  </div>
</div>`;

const button = document.querySelector("button");
 button.addEventListener("click", () => {  
    getUserData();

 });


}

