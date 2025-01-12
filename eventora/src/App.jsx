import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Header, Footer, CarousalSlider, Title, DiscoverIcons, ExploreOptions,Container,CardSlide} from './Components/index'





function App() {
  const [count, setCount] = useState(0)
  const slides = [
    { url: "https://images.pexels.com/photos/18465378/pexels-photo-18465378/free-photo-of-man-in-traditional-clothing-with-golden-hat-in-festival.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { url: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { url: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  
  ];
 

  return (
    <div>

    <Header/>
    <div className="w-[100%]">
            <CarousalSlider slides={slides} CarouselTitle='Discover Unforgettable Events' CarouselDescrip='A place where experiences come to life' />
        
      </div>
      <Container className='w-[100%] mt-12 lg:mt-20 '>
      <Title text={"Explore event that matches your vibe!!"}/>
      <ExploreOptions/>
      </Container>

      <Container className='mt-16'>
        <Title text={"Discover Events"}/>
        <CardSlide/>
      </Container>

      <Container className=''>
        <Title text={"Events for You"}/>
        <CardSlide/>
      </Container>
      

      <Footer/>
    </div>
  )
}

export default App
