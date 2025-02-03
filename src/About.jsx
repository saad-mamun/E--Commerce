
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context/ProductContext';
const About = () => {

  const {myName} = useGlobalContext()
  

    const data = {
      name: "Tech E-commerce",
    };

  return (
    <>
      {myName}
      <HeroSection myData={data}/>
    </>
  )
}

export default About
