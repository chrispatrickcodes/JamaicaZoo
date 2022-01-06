import { useState, useEffect } from 'react';
import './App.css';
import Section from './components/Section'
import NavBar from './components/NavBar'
import ScrollNavBar from './components/ScrollNavBar';
import parrots from './assets/parrots.jpg';
import zebras from './assets/zebras.jpg';
import croc from './assets/croc.jpg';



const App = () => {

  const [offset, setOffset] = useState(0);

  const [imagePath, setImagePath] = useState(croc);

  const bannerImages = [
    croc,
    parrots,
    zebras
  ];

  let i = 0;

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.scrollY);
    }
    const interval = setInterval(() => {
      i++;
      if(i === bannerImages.length)
        i = 0;
      setImagePath(bannerImages[i]);
    }, 10000);
  }, [])
  return (
    <div className="App">
      {offset === 0 &&
        <NavBar />
      }
      {offset !== 0 &&
        <ScrollNavBar />
      }
      <Section id='banner-section' imgCount={3} img={imagePath} className="section banner-section" />
      <div className='section about-section'>
        <div className='about-img'>

        </div>
        <div className='about-txt'>
          <h1>About Jamaica Zoo </h1>
          <h3>Welcome to our Zoo...</h3>
          <p>
            We have a wide variety of animals. Some of our animals include Lions (born in Santa Cruz, St. Elizabeth), Llamas, Zebras, Monkeys, Crocodiles, and Toucans to name a few. We also have a petting area, in which our visitors have the option to take pictures with some of our smaller animals, such as our Ball Python Snake who’s given name is Peter, as well as Lizzy who is a baby green Iguana. Not to mention our pet crocodile “Sof” and a few more. We also have beautifully landscaped lawns, where our visitors can spread a blanket, relax and have a picnic.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className='section animals-section'>
        <div className='animnals-txt'>
          <h1>Come For The Animals </h1>
          <h3>Stay To Relax & explore</h3>
          <p>
            Jamaica Zoo can be a place for fun and relaxation or as an educational facility. One can learn about the plants and the different animals by one of our well-trained tour guides who will gladly escort you around the property.
          </p>
          <p>
            We also have beautifully landscaped lawns, where our visitors can spread a blanket, relax and have a picnic. Visitors can also enjoy our tasty meals from our restaurant or grab something from our snack bar.  For the children, apart from the tour, we have a play area that consists of swings, slides, see-saws, and spring toys.
          </p>
          <button>Learn More</button>
        </div>
        <Section className='section cta-img' />
      </div>
      <div className='section animal-list__section'>
        <ul className='animal-list1'>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
        </ul>
        <ul className='animal-list2'>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
        </ul>
        <ul className='animal-list1'>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
          <li>lorem ipsum test</li>
        </ul>
        <div className='animal-list__img'>

        </div>
      </div>
      <div className='section buttons-section'>
        <div className='buttons-ctr'>
          <button>Become a Member</button>
          <button>Make a Donation</button>
          <button>View Promotions</button>
          <button>See Our Gallery</button>
        </div>
      </div>
    </div>
  );
}

export default App;
