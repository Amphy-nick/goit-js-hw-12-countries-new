import './sass/main.scss';
import markupCountryCard from './templates/markupCountryCard.hbs'
import { refs } from './js/refs'
import debounce from 'lodash.debounce';
console.log(markupCountryCard)
// console.log(refs.inputSearchCountry)
// let value = "";
// function makeInputValue(e){
//    value = refs.inputSearchCountry.value;
// }


// fetch("https://restcountries.eu/rest/v2/name/Switzerland").then(response =>{
// console.log(response)
// return response.json()
// }).then(result => {console.log(result)})
// .catch(error => console.log(error))
let value = "Ukraine"   
  const d = () => {
     return fetch(`https://restcountries.eu/rest/v2/name/Ukraine`)
   .then(console.log(value)).then(r => r.json())
   .then(s =>console.log(s))
      .catch(error => console.log(error))
  }

      const itemGallery = d.map(markupCountryCard).join('');
console.log(itemGallery)
      // ListPushCounries.insertAdjacentHTML('beforeend',itemGallery );
   
   