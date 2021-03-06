  
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
const results= document.getElementById('results');

const displayFoundingResults = result => {
  results.style.display=result;
}
// result founding number 
const result= document.getElementById('result');





  
  const searchMobileText = () => {

const searchText = searchInput.value;

searchInput.value ='';
div.textContent='';
newModalDiv.textContent='';
phoneDetailsFooter.innerHTML='';


const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;


fetch(url)
.then(res => res.json())
.then(data => displayMobile(data.data))
}


const displayMobile = phones => {
 const phoneItems =phones.slice(0,20)
 console.log(phoneItems);
 

 
 if( phoneItems.length <=0){
   
    result.innerText="";
    return displayFoundingResults('block')
  
  
 
  // result.innerText="";
  // return displayFoundingResults('block')

}

// if(){
 
//     return displayFoundingResults('block')--
//    }
   
    phoneItems.forEach(items => {
    
    //  if(!items.phone_name || !items.brand){
       
    //  }
     

     displayFoundingResults('none')
    if(items){
      result.innerHTML=` <h4  class="text-white text-center ">${phoneItems.length} results found</h4>`;
    }
    
        const CardDiv = document.createElement('div')
        CardDiv.classList.add('phone-card')
        CardDiv.innerHTML=`
        <div class="col  mx-auto mb-2">
         <div class="card bg-dark shadow-lg text-white">
          <img src="${items.image}" class="card-img-top  mt-3 mx-auto " alt="...">
          <div class="card-body ms-5">
            <h5 class="card-title fw-bold">${items.phone_name}</h5>
           <h6 class="fw-bold">${items.brand}</h6>
           <button onclick="searchPhoneDetails('${items.slug}')" class="btn btn-outline-secondary" id="#modal-js">Show Details</button>
          </div>
         </div>
        
      </div>
     ` 
     div.appendChild(CardDiv);
     
      
    })
   
  }
    
 

// const showMoreButtonDiv = document.createElement('div');
// showMoreButtonDiv.classList.add('show-more')
//      showMoreButtonDiv.innerHTML =`
//      <div class=" " >

//      <button class=" btn btn-outline-secondary text-center">Show More</button>

 
//      </div>
    
//      `
//      div.appendChild(showMoreButtonDiv);
     
// const footer = document.createElement('div');
// footer.classList.add('footer-text')
//     footer.innerHTML =`
//    <footer class="text-white ">
//     <p class="fs-bold mx-auto">Copyright&copy;1995-2022 MOBILE HOUSE All Rights Reserved.</p>
//    </footer>

    
//      `
//      div.appendChild(footer);
     




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
//  for(const sensorItems of sensor)
//  console.log(sensorItems);


 
  // player details div value 
    modalDiv.textContent='';
 
 
 
  newModalDiv.classList.add('phone-details')
  
  newModalDiv.innerHTML=
  ` <div class="row  row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2   bg-dark shadow-lg text-white ">
              <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5  ">
               <h4 class="card-title ms-4 fw-bold"> ${phone.brand}</h4>
               <h4 class="card-title ms-4 fw-bold"> ${phone.name}</h4>
           
                <img src="${phone.image}" class="card-img-top  mt-3 ms-4 " alt="...">
                <div class="card-body ms-3">
                 
                <h5></h5>
                <p>${phone.releaseDate ? phone.releaseDate:'Coming soon'}</p>
                <button class="btn btn-outline-secondary" data-bs-toggle="modal"  data-bs-target="#mymodal">Buy Now</button>
                
                </div>
            
              </div> 
              <div class="col-12  col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7 text-white">
              
                
                <div class=" card-body overflow-hidden ">

               
                 <h5 class="fw-bold"> Specifications </h5>
                 <hr> 
                 <p>.<span>Storage</span> : ${features.storage}</p>
                 <p><span>.Chipset</span> : ${features.chipSet} </p>
                 <p><span>.DisplaySize :</span> ${features.displaySize}</p>
                 <p><span>.Memory :</span> ${features.memory}</p>
                 <p><span>.Sensors</span> : ${sensor}</p>
                 <p><span>.Bluetooh</span> : ${phone.others?.Bluetooth ?phone.others.Bluetooth:'No'}</p>
                 <p><span>.GPS</span> : ${phone.others?.GPS ?phone.others.GPS:'No' }</p>
                 <p><span>.USB</span> : ${phone.others?.USB ?phone.others.USB:'No'}</p>
                 <p><span>.Radio</span> : ${phone.others?.Radio ? phone.others.Radio:'No'}</p>
                 <p><span>.NFC</span> : ${phone.others?.NFC ?phone.others.NFC:'No'}</p>
                 <p><span>.WLAN</span> : ${phone.others?.WLAN ?phone.others.WLAN:'No'}</p>
                    
                 
                
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
result.innerText="";
div.textContent='';
 
  }                
              
              
                
                
               
                
                 
                 
                 
               
               
