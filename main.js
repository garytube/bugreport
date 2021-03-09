const backgroundVideo = document.querySelector('#background__video')
const screenOne = document.querySelector('#screen_one')
const screenTwo = document.querySelector('#screen_two')
const searchString = document.querySelector('.search__string')

const counter = document.querySelector('.counter')

const ECOSIA_COUNTER = "https://api.ecosia.org/v1/trees/count"
const PROXY = "https://corscors.herokuapp.com/"

const suchen = [
  'Dresscode Berghain',
  'Wie lange hat der Späti am Rosi geöffnet?',
  'Veganes Katzenfutter Berlin Mitte',
  'Bester Döner Neukölln',
  'Speisekarte Curry 36',
  'Sind Schrippen normale Brötchen?',
  'Passt eine 2x2m Matratze in die U-Bahn?',
  'Ist die Havel See oder Fluss',
  'Wie heißt der Alex Turm richtig?',
  'An welchem Flughafen kann man hier jetzt fliegen?',

]


const randomSearchString = () => {
  const suchText = suchen[Math.floor(Math.random() * suchen.length)];
  searchString.innerText = suchText
}

let trees = 0


fetch(PROXY + ECOSIA_COUNTER)
  .then(res => res.json())
  .then(data => {
    trees = data.count
    counter.innerText = chunks(trees)
    console.log("trees", trees)
  })

  .catch(_ => counter.innerText = '117868906')

/**
 * 
 * @param {number} number 
 * @returns 
 */
function chunks(number) {
  return number.toString().match(/.{1,3}/g).join('.')
}


function BroadSignPlay() {
  console.log("play")
  backgroundVideo.play()
  randomSearchString()
  showScreenOne()
  // setTimeout(() => {
  //   showScreenTwo()
  // }, 4000);
}

const showScreenOne = () => {
  screenOne.classList.add('screenOne')
}

const showScreenTwo = () => {
  screenOne.classList.remove('screenOne')
  screenTwo.classList.add('screenTwo')
}

if (typeof BroadSignObject === 'undefined') {
  BroadSignPlay()
}