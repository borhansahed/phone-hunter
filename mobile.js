const searchMobileText = () => {
const searchInput = document.getElementById('search-input').value;

searchInput.value ='';
const url = `https://openapi.programming-hero.com/api/phones?search=${searchInput}`;
fetch(url)
.then(res => res.json())
.then(data => displayMobile(data.data))
}
const displayMobile = phones => {
 
   const div = document.getElementById('card-container');
   div.textContent='';
    phones.forEach(items => {
      
        const CardDiv = document.createElement('div')
        CardDiv.classList.add('phone-card')
        CardDiv.innerHTML=`
        <div class="col  w-75 h-100  mx-auto">
        <div class="card bg-dark shadow-lg text-white">
          <img src="${items.image}" class="card-img-top  mt-3 mx-auto " alt="...">
          <div class="card-body ms-3">
            <h5 class="card-title">${items.brand}</h5>
           <h6>${items.phone_name}</h6>
           <button onclick="searchPhoneDetails('${items.slug}')" class="btn btn-outline-secondary" data-bs-toggle="modal"  data-bs-target="#mymodal">Show More</button>
          </div>
        </div>
      </div>
     ` 
     div.appendChild(CardDiv);
     
      
    })
}

const searchPhoneDetails = id => {
  // console.log(id);
 const idUrl =`https://openapi.programming-hero.com/api/phone/${id}`;
 fetch(idUrl)
 .then(res =>res.json())
 .then(data => displayPhoneDetails(data.data))
}

const displayPhoneDetails = phone => {
  
 console.log(phone)
 console.log(phone.mainFeatures.sensors)
//  for(const sensors of  ){
//    console.log(sensors)
//  }
 
}