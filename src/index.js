import './sass/main.scss';
import { alert, notice, info, success, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import  debounce  from 'lodash.debounce';
import  fetchCountries from './js/fetchCountries';
import menuMrpTemplate from "./templates/markupCountryCard.hbs"
 import refs from './js/refs'

 refs.inputSearchCountry.addEventListener('input', debounce(onInputSearch, 2000))

 function onInputSearch(e) {
  let searchQuery = e.target.value
  refs.listPushCounries.innerHTML = ''
  e.target.value = ''

  fetchCountries(searchQuery)
  .then(searchResults)
  .catch(err => console.log(err))
  }

const needMoreLetters = 'Too many matches found. Please enter a more specific query.' 

function searchResults(data) {
  if (data.length >= 10) {
      return error(needMoreLetters)
  } else if (data.length < 10 && data.length > 1) {
      renderCollection(data)
  } else {
      refs.listPushCounries.insertAdjacentHTML('beforeend', menuMrpTemplate(data))
  }
  
}

function createCountiesList({name}) {
  const searchItemMarkup = `<li class="countries-item">${name}</li>`
  refs.listPushCounries.insertAdjacentHTML('beforeend', searchItemMarkup)
}

function renderCollection(data) {
  data.forEach(el => createCountiesList(el))
}