import './App.css'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Header from './components/Header';
import SocialButtons from './components/SocialButtons';

function App() {
  return (
    <>
      <header>
        <Header name='Lucas da silva' description='Desenvolvedor Web'/>
      </header>
      <div>
        <SocialButtons />
      </div>
    </>
  )
}

export default App
