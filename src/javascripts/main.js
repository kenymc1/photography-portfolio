// import 'bootstrap';
import '../styles/main.scss';

console.error('Hello world!');

const pictures = [
  {
    image: 'https://images.pexels.com/photos/3377538/pexels-photo-3377538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '1',
    color: 'full',
    direction: 'vertical',
    occasion: 'trip',
    location: 'turkey',
  },
  {
    image: 'https://images.pexels.com/photos/1953451/pexels-photo-1953451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '2',
    color: 'full',
    direction: 'vertical',
    occasion: 'wedding',
    location: 'california',
  },
  {
    image: 'https://images.pexels.com/photos/1684915/pexels-photo-1684915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '3',
    color: 'full',
    direction: 'horizontal',
    occasion: 'trip',
    location: 'california',
  },
  {
    image: 'https://images.pexels.com/photos/2822949/pexels-photo-2822949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '4',
    color: 'black/white',
    direction: 'vertical',
    occasion: 'trip',
    location: 'studio',
  },
  {
    image: 'https://images.pexels.com/photos/3381028/pexels-photo-3381028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '5',
    color: 'full',
    direction: 'vertical',
    occasion: 'trip',
    location: 'newYork',
  },
  {
    image: 'https://images.pexels.com/photos/1137745/pexels-photo-1137745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260/',
    id: '6',
    color: 'full',
    direction: 'vertical',
    occasion: 'trip',
    location: 'newYork',
  },
  {
    image: 'https://images.pexels.com/photos/245535/pexels-photo-245535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '7',
    color: 'full',
    direction: 'vertical',
    occasion: 'trip',
    location: 'turkey',
  },
  {
    image: 'https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '8',
    color: 'black/white',
    direction: 'horizontal',
    occasion: 'trip',
    location: 'turkey',
  },
  {
    image: 'https://images.pexels.com/photos/3359742/pexels-photo-3359742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '9',
    color: 'full',
    direction: 'vertical',
    occasion: 'trip',
    location: 'turkey',
  },
  {
    image: 'https://images.pexels.com/photos/3354675/pexels-photo-3354675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '10',
    color: 'full',
    direction: 'vertical',
    occasion: 'trip',
    location: 'studio',
  },
  {
    image: 'https://images.pexels.com/photos/3373054/pexels-photo-3373054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '11',
    color: 'full',
    direction: 'horizontal',
    occasion: 'trip',
    location: 'india',
  },
  {
    image: 'https://images.pexels.com/photos/1707402/pexels-photo-1707402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '12',
    color: 'full',
    direction: 'vertical',
    occasion: 'trip',
    location: 'india',
  },
  {
    image: 'https://images.pexels.com/photos/2774570/pexels-photo-2774570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '13',
    color: 'black/white',
    direction: 'vertical',
    occasion: 'trip',
    location: 'newYork',
  },
  {
    image: 'https://images.pexels.com/photos/2306920/pexels-photo-2306920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '14',
    color: 'black/white',
    direction: 'vertical',
    occasion: 'trip',
    location: 'newYork',
  },
  {
    image: 'https://images.pexels.com/photos/1020544/pexels-photo-1020544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '15',
    color: 'black/white',
    direction: 'horizontal',
    occasion: 'trip',
    location: 'newYork',
  },
  {
    image: 'https://images.pexels.com/photos/3359742/pexels-photo-3359742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '16',
    color: 'full',
    direction: 'vertical',
    occasion: 'trip',
    location: 'turkey',
  },
  {
    image: 'https://images.pexels.com/photos/3257375/pexels-photo-3257375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '17',
    color: 'full',
    direction: 'vertical',
    occasion: 'trip',
    location: 'newYork',
  },
  {
    image: 'https://images.pexels.com/photos/2462402/pexels-photo-2462402.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    id: '18',
    color: 'full',
    direction: 'vertical',
    occasion: 'trip',
    location: 'newYork',
  },
  {
    image: 'https://images.pexels.com/photos/3234167/pexels-photo-3234167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '19',
    color: 'full',
    direction: 'vertical',
    occasion: 'trip',
    location: 'turkey',
  },
  {
    image: 'https://images.pexels.com/photos/3361480/pexels-photo-3361480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '20',
    color: 'full',
    direction: 'vertical',
    occasion: 'trip',
    location: 'india',
  },
  {
    image: 'https://images.pexels.com/photos/949219/pexels-photo-949219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: '21',
    color: 'full',
    direction: 'horizontal',
    occasion: 'trip',
    location: 'turkey',
  },
];

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
};

const printCards = () => {
  let domString = '';
  for (let i = 0; i < pictures.length; i += 1) {
    domString += `

    <div class="col-m d-inline-flex offset-.5">
            <div class="profile">
              <img src=${pictures[i].image} class="images">
            </div>
    </div>
          `;
    printToDom(domString, 'card-place');
  }
};
$('#card-place').append(printCards(pictures));

printCards();


const sortCards = (e) => {
  const full = [];
  for (let i = 0; i < pictures.length; i += 1) {
    if (pictures[i].color === 'full') {
      full.push(pictures[i]);
      e.preventDefault();
    }
  }

  printCards();
};


document.getElementById('full').addEventListener('click', sortCards);
// document.getElementById('black/white').addEventListener('click', sortCards);
// document.getElementById('team2').addEventListener('click', sortCards);
// document.getElementById('gender').addEventListener('click', filterGender);

// $('body').on('click', '.close', () => {
//   util.printToDom('single-card', '');
//   multiPlanet.pic();
//   multiPlanet.event();
// });
