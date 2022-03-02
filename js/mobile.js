  
  
  
  const searchMobileText = () => {
const searchInput = document.getElementById('search-input');const searchText = searchInput.value;

searchInput.value ='';
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
            <h5 class="card-title">${items.phone_name}</h5>
           <h6>${items.brand}</h6>
           <button onclick="searchPhoneDetails('${items.slug}')" class="btn btn-outline-secondary" id="#modal-js">Show Details</button>
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
 
 modalDiv.textContent='';
  const newModalDiv =document.createElement('div')
  newModalDiv.classList.add('phone-details')
  newModalDiv.innerHTML=
  ` <div class="row d-flex  align-items-center   bg-dark shadow-lg text-white ">
              <div class="col-5 ">
               <h4 class="card-title ms-4"> ${phone.brand}    ${phone.name }</h4>
               <hr>
                <img src="${phone.image}" class="card-img-top  mt-3 ms-4 " alt="...">
                <div class="card-body ms-3">
                 
                <h5></h5>
                <p>${phone.releaseDate}</p>
                <button class="btn btn-outline-secondary" data-bs-toggle="modal"  data-bs-target="#mymodal">Buy Now</button>
                
                </div>
            
              </div> 
              <div class="col-md-7  text-white">
              
                
                <div class="card-body ">

               
                 <h5> Specifications </h5>
                 <hr> 
                 <p>.<span>Storage</span> : ${features.storage}</p>
                 <p><span>.Chipset :</span> ${features.chipSet}</p>
                 <p><span>.DisplaySize :</span> ${features.displaySize}</p>
                 <p><span>.Memory :</span> ${features.memory}</p>
                 <p><span>.sensors</span> : ${features.sensors}</p>
                 <p>.Bluetooh : ${phone.others.Bluetooth}</p>
                 <p>.GPS : ${phone.others.GPS}</p>
                 <p>.USB : ${phone.others.USB}</p>
                 <p>.Radio : ${phone.others.Radio}</p>
                 <p>.NFC : ${phone.others.NFC}</p>
                 <p>.WLAN : ${phone.others.WLAN}</p>
                    
                 
                
               </div>
                </div>
              
              </div>
      </div> 


`

                
              
              
                
                
               
                
                 
                 
                 
               
               
modalDiv.appendChild(newModalDiv);
 
  
   
 

 
}