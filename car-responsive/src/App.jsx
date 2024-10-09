import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import CarList from './components/CarList/CarList';
import Testimonial from './components/Testimolial/Testimonial';
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner';
import Footer from './components/Footer/Footer';

const App = () => {
  // Dark Mood
  const [theme , setTheme] = React.useState
  (localStorage.getItem("theme")?
   localStorage.getItem("theme"): "light"
);

const element = document.documentElement;
useEffect(() => {
  if(theme == "dark"){
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }else{
    element.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
},[theme])
  return (
    <div >
     <Navbar theme={theme} setTheme={setTheme}/>
     <Hero theme={theme}/>
     <About />
     <Services />
     <CarList />
     <Testimonial />
     <AppStoreBanner />
     <Footer />
    </div>
  )
}

export default App
