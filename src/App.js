import Category from './components/Category';
import Delivery from './components/Delivery';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Meal from './components/Meal';
import NewsLetter from './components/NewsLetter';
import TopNav from './components/TopNav';
import TopPick from './components/TopPick';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPick/>
      <Meal/>
      <Category/>
      <NewsLetter/>
      <Footer/>
     
    </div>
  );
}

export default App;
