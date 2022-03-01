  
  
  
  const searchMobileText = () => {
const searchInput = document.getElementById('search-input');const searchText = searchInput.value;

// searchInput.value ='';
const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
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
           <button onclick="searchPhoneDetails('${items.slug}')" class="btn btn-outline-secondary" data-bs-toggle="modal"  data-bs-target="#mymodal">Show Details</button>
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
  const features =phone.mainFeatures;
  console.log(features)
  const sensor = features.sensors;
  const modalDiv =document.getElementById('modal-js')
  // console.log(sensor)
 
   const newModalDiv =document.createElement('div')
   newModalDiv.classList.add('modal-container')
   newModalDiv.innerHTML=` <div class="modal " id="mymodal"  tabindex="-1">
   <div class="modal-dialog modal-dialog-centered ">
   <div class="modal-content  bg-dark h-100">
     <div class="modal-header text-white border-0">
       <h5 class="modal-title">${phone.brand}</h5>
       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
     <div class="modal-body ">
       <div class="container-fluid">
         <div class="row">
           <div class="col-md-4 text-white">
           <img src="${phone.image}" alt="">
             <p></p>
           </div>
           <div class="col-md-4 ms-auto text-white">.col-md-4 .ms-auto</div>
         </div>
       <p></p>
     </div>
     <div class="modal-footer border-0">
       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       <button type="button" class="btn btn-primary">Buy</button>
     </div>
   </div>
 </div>  
   </div>`
 modalDiv.appendChild(newModalDiv);
   
 

 
}