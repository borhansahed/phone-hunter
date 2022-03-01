const searchMobileText = () => {
const searchInput = document.getElementById('search-input').value;

searchInput.value ='';
const url = `https://openapi.programming-hero.com/api/phones?search=${searchInput}`;
fetch(url)
.then(res => res.json())
.then(data => displayMobile(data.data))
}
const displayMobile = phone => {
   const div = document.getElementById('card-container');
    phone.forEach(items => {
        const CardDiv = document.createElement('div')
        CardDiv.classList.add('phone-card')
        CardDiv.innerHTML=`
        <div class="col  w-75 h-100  mx-auto">
        <div class="card bg-light">
          <img src="${items.image}" class="card-img-top  mt-3 mx-auto" alt="...">
          <div class="card-body ms-2">
            <h5 class="card-title">${items.brand}</h5>
           <h6>${items.phone_name}</h6>
           <button class="btn btn-outline-secondary">Show More</button>
          </div>
        </div>
      </div>
     ` 
     div.appendChild(CardDiv);
     
        console.log(items)
    })
}