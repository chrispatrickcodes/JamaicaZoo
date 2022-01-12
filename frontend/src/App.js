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
  const [animalCount, setAnimalCount] = useState(0);
  const [speciesCount, setSpeciesCount] = useState(0);
  const [acreCount, setAcreCount] = useState(0);


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
      if (i === bannerImages.length)
        i = 0;
      setImagePath(bannerImages[i]);
    }, 10000);

    let count = 0;
    const animalInterval = setInterval(() => {
      count++;
      if(count <  133){
      setAnimalCount(count);
      } else {
        clearInterval(animalInterval);
      }
    }, 20);

    let count2 = 0;
    const speciesInterval = setInterval(() => {
      count2++;
      if(count2 <  31){
      setSpeciesCount(count2);
      } else {
        clearInterval(speciesInterval);
      }
    }, 100);

    let count3 = 0;
    const acreInterval = setInterval(() => {
      count3++;
      if(count3 <  101){
      setAcreCount(count3);
      } else {
        clearInterval(acreInterval);
      }
    }, 30);
  }, []);


  const handleBannerRadioClick = (e) => {
    let index = e.id;
    setImagePath(bannerImages[index - 1]);
  }


  return (
    <div className="App">
      {offset === 0 &&
        <NavBar />
      }
      {offset !== 0 &&
        <ScrollNavBar />
      }
      <Section id='banner-section' handleBannerRadioClick={handleBannerRadioClick} imgCount={3} img={imagePath} className="section banner-section" />
      <div className='section about-section'>
        <div className='about-img'>

        </div>
        <div className='about-txt'>
          {/* <h1>About Jamaica Zoo </h1> */}
          <h1>Welcome to our Zoo!</h1>
          <p>
            We have a wide variety of animals. Some of our animals include Lions (born in Santa Cruz, St. Elizabeth), Llamas, Zebras, Monkeys, Crocodiles, and Toucans to name a few. We also have a petting area, in which our visitors have the option to take pictures with some of our smaller animals, such as our Ball Python Snake who’s given name is Peter, as well as Lizzy who is a baby green Iguana. Not to mention our pet crocodile “Sof” and a few more. We also have beautifully landscaped lawns, where our visitors can spread a blanket, relax and have a picnic.
          </p>
          <button>Learn More</button>
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
        </div>
      </div>
      <div className='section buttons-section'>
        <div className='buttons-ctr'>
          <div className='button-ctr'>
            <div className='button' id='bam-button'>
            </div>
            <a className='button-link' href="#">
              Become a Member
            </a>
          </div>
          <div className='button-ctr'>
            <div className='button' id='mad-button'>
            </div>
            <a className='button-link' href="#">
              Make a Donation
            </a>
          </div>
          <div className='button-ctr'>
            <div className='button' id='vp-button'>
            </div>
            <a className='button-link' href="#">
              View Promotions
            </a>
          </div>
          <div className='button-ctr'>
            <div className='button' id='sog-button'>
            </div>
            <a className='button-link' href="#">
              See Our Gallery
            </a>
          </div>
        </div>
      </div>
      <div className='section animal-list__section'>
        <div className='stats-header'>
          <div className='stat-ctr'>
            <h2>Animals</h2>
            <h3>{animalCount}</h3>
          </div>
          <div className='stat-ctr'>
            <h2>Species</h2>
            <h3>{speciesCount}</h3>
          </div>
          <div className='stat-ctr'>
            <h2>Acres</h2>
            <h3>{acreCount}</h3>
          </div>
        </div>
        <div className='gallery-ctr'>
          <div id='gi1'>
            <div id='gi8' className="gallery-img">
              <span className='hover-overlay'></span>

            </div>
            <div id='gi4' className="gallery-img">
              <span className='hover-overlay'></span>

            </div>
          </div>
          <div id='gi2' className="gallery-img">
            <span className='hover-overlay'></span>

          </div>
          <div id='gi3' className="gallery-img">
            <span className='hover-overlay'></span>

          </div>
          <div id='gi5' className="gallery-img">
            <span className='hover-overlay'></span>

          </div>
          <div id='gi6' className="gallery-img">
            <span className='hover-overlay'></span>

          </div>
          <div id='gi7' className="gallery-img">
            <span className='hover-overlay'></span>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
