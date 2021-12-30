import { useState, useEffect } from 'react';
import './App.css';
import Section from './components/Section'
import NavBar from './components/NavBar'
import ScrollNavBar from './components/ScrollNavBar';

const App = () => {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.scrollY);
    }
  }, [])
  return (
    <div className="App">
    {offset === 0 && 
      <NavBar />
    }
    {offset !== 0 && 
      <ScrollNavBar />
    }
      <Section className="banner-section" />
      <div className='about-section'>
        <div className='about-img'>

        </div>
        <div className='about-txt'>
          <h3>About Jamaica Zoo </h3>
          <h1>Welcome to our Zoo...</h1>
          <p>
            We have a wide variety of animals. Some of our animals include Lions (born in Santa Cruz, St. Elizabeth), Llamas, Zebras, Monkeys, Crocodiles, and Toucans to name a few. We also have a petting area, in which our visitors have the option to take pictures with some of our smaller animals, such as our Ball Python Snake who’s given name is Peter, as well as Lizzy who is a baby green Iguana. Not to mention our pet crocodile “Sof” and a few more. We also have beautifully landscaped lawns, where our visitors can spread a blanket, relax and have a picnic.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className='animals-section'>
        <div className='animnals-txt'>
          <h3>Come For The Animals </h3>
          <h1>Stay To Relax & explore</h1>
          <p>
            Jamaica Zoo can be a place for fun and relaxation or as an educational facility. One can learn about the plants and the different animals by one of our well-trained tour guides who will gladly escort you around the property.
          </p>
          <p>
            We also have beautifully landscaped lawns, where our visitors can spread a blanket, relax and have a picnic. Visitors can also enjoy our tasty meals from our restaurant or grab something from our snack bar.  For the children, apart from the tour, we have a play area that consists of swings, slides, see-saws, and spring toys.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <Section className='cta-img' />
      <div className='animal-list__section'>
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
      <div className='buttons-section'>
        <button>Become a Member</button>
        <button>Make a Donation</button>
        <button>View Promotions</button>
        <button>See Our Gallery</button>
      </div>
    </div>
  );
}

export default App;
