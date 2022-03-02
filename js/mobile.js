  
  // mobileserch input 
  const searchInput = document.getElementById('search-input');
  // show display mobile card 
  const div = document.getElementById('card-container');
  
  
  // player details div
    const modalDiv =document.getElementById('modal-js');
  // player details create div
 const newModalDiv =document.createElement('div');
  // player details footer
  const phoneDetailsFooter =document.createElement('footer');

//  search result finding error


const displayFoundingResults = results => {
  const searchFoundoingResults = document.getElementById('results').style.display=results;
}




  
  const searchMobileText = () => {

const searchText = searchInput.value;

searchInput.value ='';
newModalDiv.textContent='';
phoneDetailsFooter.innerHTML='';


const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;


fetch(url)
.then(res => res.json())
.then(data => displayMobile(data.data.slice(0,20)))
}
const displayMobile = phones => {
 
 if(!phones[0]){
  return displayFoundingResults('block');
}
   displayFoundingResults('none')
   div.textContent='';
    phones.forEach(items => {
      
        const CardDiv = document.createElement('div')
        CardDiv.classList.add('phone-card')
        CardDiv.innerHTML=`
        <div class="col  w-75   mx-auto ">
         <div class="card bg-dark shadow-lg text-white">
          <img src="${items.image}" class="card-img-top  mt-3 mx-auto " alt="...">
          <div class="card-body ms-3">
            <h5 class="card-title fw-bold">${items.phone_name}</h5>
           <h6 class="fw-bold">${items.brand}</h6>
           <button onclick="searchPhoneDetails('${items.slug}')" class="btn btn-outline-secondary" id="#modal-js">Show Details</button>
          </div>
         </div>
        
      </div>
     ` 
     div.appendChild(CardDiv);
     
      
    })
    

const showMoreButtonDiv = document.createElement('div');
showMoreButtonDiv.classList.add('show-more')
     showMoreButtonDiv.innerHTML =`
     <div class=" " >

     <button class=" btn btn-outline-secondary text-center">Show More</button>
     </div>
    
     `
     div.appendChild(showMoreButtonDiv);
     
const footer = document.createElement('div');
footer.classList.add('footer-text')
    footer.innerHTML =`
    <footer class="text-white ">
    <p class="fs-bold">Copyright&copy;1995-2022 MOBILE HOUSE All Rights Reserved.</p>
 </footer>
    
     `
     div.appendChild(footer);
     

}


const searchPhoneDetails = id => {
  // console.log(id);
 const idUrl =`https://openapi.programming-hero.com/api/phone/${id}`;
 fetch(idUrl)
 .then(res =>res.json())
 .then(data => displayPhoneDetails(data.data))
}

const displayPhoneDetails = phone => {
  
  const features =phone.mainFeatures;
 
  const sensor = features.sensors;

  // player details div value 
    modalDiv.textContent='';
 
 
 
  newModalDiv.classList.add('phone-details')
  
  newModalDiv.innerHTML=
  ` <div class="row  d-flex  align-items-center   bg-dark shadow-lg text-white ">
              <div class="col-5 ">
               <h4 class="card-title ms-4 fw-bold"> ${phone.brand}    ${phone.name }</h4>
               <hr>
                <img src="${phone.image}" class="card-img-top  mt-3 ms-4 " alt="...">
                <div class="card-body ms-3">
                 
                <h5></h5>
                <p>${phone.releaseDate ? phone.releaseDate:'Coming soon'}</p>
                <button class="btn btn-outline-secondary" data-bs-toggle="modal"  data-bs-target="#mymodal">Buy Now</button>
                
                </div>
            
              </div> 
              <div class="col-md-7  text-white">
              
                
                <div class="card-body overflow-hidden ">

               
                 <h5 class="fw-bold"> Specifications </h5>
                 <hr> 
                 <p>.<span>Storage</span> : ${features.storage}</p>
                 <p>.Chipset : ${features.chipSet} </p>
                 <p><span>.DisplaySize :</span> ${features.displaySize}</p>
                 <p><span>.Memory :</span> ${features.memory}</p>
                 <p><span>.sensors</span> : ${features.sensors}</p>
                 <p>.Bluetooh : ${phone.others?.Bluetooth ?phone.others.Bluetooth:'No'}</p>
                 <p>.GPS : ${phone.others?.GPS ?phone.others.GPS:'No' }</p>
                 <p>.USB : ${phone.others?.USB ?phone.others.USB:'No'}</p>
                 <p>.Radio : ${phone.others?.Radio ? phone.others.Radio:'No'}</p>
                 <p>.NFC : ${phone.others?.NFC ?phone.others.NFC:'No'}</p>
                 <p>.WLAN : ${phone.others?.WLAN ?phone.others.WLAN:'No'}</p>
                    
                 
                
               </div>
                </div>
              
              </div>
      </div> 


`

modalDiv.appendChild(newModalDiv);

phoneDetailsFooter.innerHTML =`
<footer class="text-white text-center">
<p class="fs-bold">Copyright&copy;1995-2022 MOBILE HOUSE All Rights Reserved.</p>
</footer>

`
modalDiv.appendChild(phoneDetailsFooter)

div.textContent='';
 
  }                
              
              
                
                
               
                
                 
                 
                 
               
               
