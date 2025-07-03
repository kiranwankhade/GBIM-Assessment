import logo from './logo.svg';
import './App.css';
import { useDisclosure } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import CallModal from './Components/CallModal';
import ViewSection from './Components/ViewSection';
import OfferSection from './Components/OfferSection'
import DesignBoundary from './Components/DesignBoundary';
import Footer from './Components/Footer';
import CreativeProcess from './Components/CreativeProcess';
import AIPowered from './Components/AIPowered';
import FeaturedWork from './Components/FeaturedWork';
import QuestionsAnswers from './Components/QuestionsAnswers';

function App() {
  const disclosure = useDisclosure();
  return (
    <>
       <Navbar onCallClick={disclosure.onOpen} />
       <CallModal isOpen={disclosure.isOpen} onClose={disclosure.onClose} />
       <ViewSection/>
       <OfferSection />
       <DesignBoundary/>
       <CreativeProcess/>
       <AIPowered/>
       <FeaturedWork/>
       <QuestionsAnswers/>
       <Footer/>
    </>
  );
}

export default App;
