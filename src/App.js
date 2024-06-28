import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import PicotGenerator from './components/PicotGenerator';

function App() {
  return (
    <div className="App font-serif">
      <Helmet>
        <title>PICOT Question Generator</title>
        <meta name='description' content='Need help with your PICOT question for nursing? Check out 
          our free PICOT question generator and get your result in just a few clicks!' />
        <meta name="keywords" content="PICOT Question Generator" />
      </Helmet>
      <PicotGenerator />
  
    </div>
  );
}

export default App;
