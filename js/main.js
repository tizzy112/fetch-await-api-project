//fetching from cat api
let catData;

async function getCat() {
  //here using the try and catch
  
  try {
    //fetching from cat api
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10" //endpoint
    );
    //here is converting response to json
    catData = await response.json()
    //rendering catData to our interface using destructuring
    
    updateUi();
    //setting the results gotten from the cat api to data
    // console.log(catData, "catData");
    // return results;
  } catch (error) {
    //here is catching error
    console.log(error, "error");
  }
}


getCat();
console.log(catData, "data");

const catContainer = document.querySelector(".catContainer");

const updateUi = () => {
  for (let cat of catData) {
    const cardBody = document.createElement("div");
    cardBody.classList.add("cat-card");
    console.log(cat, "cat here");
    cardBody.innerHTML = `
<img src="${cat.url}"
alt=""
/>
<div class="cat-card-content">
<div>
  <p>Name:</p>
  <p>${cat.id}</p>
</div>
<div>
  <p>Age:</p>
  <p>${cat.height}</p>
</div>
<div>
  <p>Breed:</p>
  <p>Persian</p>
</div>
<div>
  <p>Color:</p>
  <p>Honey brown</p>
</div>
</div>
`;

    catContainer.appendChild(cardBody);
  }
}
/*
.then(catData =>{
    const {height, Name, img, Breed, color } = catData;
    cardBody.getElementById('catHeight').innerText =height;
    cardBody.getElementById('catImg').innerText =img;
    cardBody.getElementById('catName').innerText =Name;

}) */
//rendering catData to our interface using destructuring


/*
let catCard = document.getElementsByClassName('cat-card');
catCard.style.display='flex';
catCard.style.flexDirection ='row';
catCard.style.border= 'solid blueviolet';
catCard.style.padding='5px';
catCard.style.borderRadius = '10px';
catCard.style.textAlign ='center';

cardBody.appendChild(catCard); */