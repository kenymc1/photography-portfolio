// import 'bootstrap';
import '../styles/main.scss';

console.error('Hello world!');

const allPictures = [
  {
    image: 'https://images.pexels.com/photos/3377538/pexels-photo-3377538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '1',
    color: 'full',
    orientation: 'portrait',
    occasion: 'trip',
    location: 'california',
  },
  {
    image: 'https://images.pexels.com/photos/1953451/pexels-photo-1953451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '2',
    color: 'full',
    orientation: 'portrait',
    occasion: 'wedding',
    location: 'california',
  },
  {
    image: 'https://images.pexels.com/photos/1684915/pexels-photo-1684915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '3',
    color: 'full',
    orientation: 'landscape',
    occasion: 'trip',
    location: 'turkey',
  },
  {
    image: 'https://images.pexels.com/photos/2822949/pexels-photo-2822949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '4',
    color: 'b/w',
    orientation: 'portrait',
    occasion: 'studio',
    location: 'california',
  },
  {
    image: 'https://images.pexels.com/photos/3381028/pexels-photo-3381028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '5',
    color: 'full',
    orientation: 'portrait',
    occasion: 'trip',
    location: 'newYork',
  },
  {
    image: 'https://images.pexels.com/photos/1137745/pexels-photo-1137745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260/',
    id: '6',
    color: 'full',
    orientation: 'landscape',
    occasion: 'trip',
    location: 'newYork',
  },
  {
    image: 'https://images.pexels.com/photos/245535/pexels-photo-245535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '7',
    color: 'full',
    orientation: 'portrait',
    occasion: 'trip',
    location: 'turkey',
  },
  {
    image: 'https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '8',
    color: 'b/w',
    orientation: 'landscape',
    occasion: 'studio',
    location: 'california',
  },
  {
    image: 'https://images.pexels.com/photos/3494648/pexels-photo-3494648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '9',
    color: 'full',
    orientation: 'portrait',
    occasion: 'trip',
    location: 'turkey',
  },
  {
    image: 'https://images.pexels.com/photos/3354675/pexels-photo-3354675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '10',
    color: 'full',
    orientation: 'portrait',
    occasion: 'studio',
    location: 'studio',
  },
  {
    image: 'https://images.pexels.com/photos/3373054/pexels-photo-3373054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '11',
    color: 'full',
    orientation: 'landscape',
    occasion: 'trip',
    location: 'india',
  },
  {
    image: 'https://images.pexels.com/photos/1707402/pexels-photo-1707402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '12',
    color: 'full',
    orientation: 'landscape',
    occasion: 'trip',
    location: 'india',
  },
  {
    image: 'https://images.pexels.com/photos/2774570/pexels-photo-2774570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '13',
    color: 'b/w',
    orientation: 'landscape',
    occasion: 'trip',
    location: 'newYork',
  },
  {
    image: 'https://images.pexels.com/photos/2306920/pexels-photo-2306920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '14',
    color: 'b/w',
    orientation: 'landscape',
    occasion: 'trip',
    location: 'newYork',
  },
  {
    image: 'https://images.pexels.com/photos/1020544/pexels-photo-1020544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '15',
    color: 'b/w',
    orientation: 'landscape',
    occasion: 'trip',
    location: 'newYork',
  },
  {
    image: 'https://images.pexels.com/photos/3359742/pexels-photo-3359742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '16',
    color: 'full',
    orientation: 'portrait',
    occasion: 'trip',
    location: 'california',
  },
  {
    image: 'https://images.pexels.com/photos/3257375/pexels-photo-3257375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '17',
    color: 'full',
    orientation: 'portrait',
    occasion: 'wedding',
    location: 'newYork',
  },
  {
    image: 'https://images.pexels.com/photos/2462402/pexels-photo-2462402.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    id: '18',
    color: 'full',
    orientation: 'portrait',
    occasion: 'wedding',
    location: 'newYork',
  },
  {
    image: 'https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '19',
    color: 'full',
    orientation: 'portrait',
    occasion: 'trip',
    location: 'turkey',
  },
  {
    image: 'https://images.pexels.com/photos/3361480/pexels-photo-3361480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '20',
    color: 'full',
    orientation: 'portrait',
    occasion: 'trip',
    location: 'india',
  },
  {
    image: 'https://images.pexels.com/photos/949219/pexels-photo-949219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '21',
    color: 'full',
    orientation: 'landscape',
    occasion: 'wedding',
    location: 'turkey',
  },
];

let visiblePictures = [...allPictures];

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
};

const printCards = () => {
  let domString = '';
  for (let i = 0; i < visiblePictures.length; i += 1) {
    domString += `

    <div class="col-m d-inline-flex offset-.5">
            <div class="profile">
              <img src=${visiblePictures[i].image} class="images">
            </div>
    </div>
          `;
    printToDom(domString, 'card-place');
  }
};
$('#card-place').append(printCards(visiblePictures));

printCards();

// const portCards = () => {
//   console.log('port');
//   visiblePictures = allPictures.filter((picture) => picture.orientation === 'portrait');
//   printCards();
// };

const landCards = () => {
  console.log('land');
  visiblePictures = allPictures.filter((picture) => picture.orientation === 'landscape');
  printCards();
};

const sortCards = () => {
  console.log('test');
  visiblePictures = allPictures.filter((picture) => picture.color === 'b/w');
  printCards();
};
const fullColorCards = () => {
  console.log('test');
  visiblePictures = allPictures.filter((picture) => picture.color === 'full');
  printCards();
};

const studioCards = () => {
  console.log('test');
  visiblePictures = allPictures.filter((picture) => picture.occasion === 'studio');
  printCards();
};

const tripCards = () => {
  console.log('test');
  visiblePictures = allPictures.filter((picture) => picture.occasion === 'trip');
  printCards();
};

const weddingCards = () => {
  console.log('test');
  visiblePictures = allPictures.filter((picture) => picture.occasion === 'wedding');
  printCards();
};

const yorkCards = () => {
  console.log('test');
  visiblePictures = allPictures.filter((picture) => picture.location === 'newYork');
  printCards();
};

const californiaCards = () => {
  console.log('test');
  visiblePictures = allPictures.filter((picture) => picture.location === 'california');
  printCards();
};

const indiaCards = () => {
  console.log('test');
  visiblePictures = allPictures.filter((picture) => picture.location === 'india');
  printCards();
};

const turkeyCards = () => {
  console.log('test');
  visiblePictures = allPictures.filter((picture) => picture.location === 'turkey');
  printCards();
};


// document.getElementById('port').addEventListener('click', portCards);
document.getElementById('land').addEventListener('click', landCards);
document.getElementById('blackWhite').addEventListener('click', sortCards);
document.getElementById('full').addEventListener('click', fullColorCards);
document.getElementById('stu').addEventListener('click', studioCards);
document.getElementById('trip').addEventListener('click', tripCards);
document.getElementById('wedd').addEventListener('click', weddingCards);
document.getElementById('york').addEventListener('click', yorkCards);
document.getElementById('california').addEventListener('click', californiaCards);
document.getElementById('india').addEventListener('click', indiaCards);
document.getElementById('turkey').addEventListener('click', turkeyCards);
