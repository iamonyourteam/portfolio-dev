
import './App.css';
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Body from './components/body/Body'
import { useEffect} from 'react';

function App({Component, pageProps}) {

useEffect(() =>{ 
  const threeScript = document.createElement('script');
  threeScript.setAttribute("id", "threeScript");
  threeScript.setAttribute(
    "src", 
    "https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"
  );
  
  document.getElementsByTagName("head")[0].appendChild(threeScript);
  return() =>{ 
    if (threeScript) {
      threeScript.remove();
    }
  }
},[]);







  return (
    <div className="App">
<Nav/>
<Hero/>
<Body/>
<Footer/>


    </div>
  );
}

export default App;
