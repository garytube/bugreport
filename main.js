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

 let trees = 117868906

fetch(PROXY + ECOSIA_COUNTER)
.then(res => res.json())
.then(data => {
  trees = data.count
  counter.innerText = trees
})

.catch(_ => counter.innerText = '117868906')


function BroadSignPlay() {
  backgroundVideo.play()
  randomSearchString()
  showScreenOne()
setTimeout(() => {
  showScreenTwo()
}, 4000);
}

const showScreenOne = () => {
  screenOne.classList.add('screenOne')
  setTimeout(() => screenOne.classList.remove('screenOne'), 4000);
}

const showScreenTwo = () => {
  screenTwo.classList.add('screenTwo')
}

if (typeof BroadSignObject === 'undefined') {
  BroadSignPlay()
}