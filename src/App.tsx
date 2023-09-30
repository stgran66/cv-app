import { Header } from './components/Header';
import { HeroSection } from './components/Hero';
import { ServicesSection } from './components/Services';

function App() {
  return (
    <div className='min-h-[100vh] bg-bgPrimary'>
      <div
        className={`h-[980px] bg-[url('./assets/images/hero-bg-image.png'),_url('./assets/images/hero-bg.png')] bg-no-repeat 
        bg-[position:right_169px_bottom,_left_top]`}
      >
        <div className='w-[1170px] mx-auto'>
          <Header />
          <HeroSection />
        </div>
      </div>
      <div className='w-[1170px] mx-auto'>
        <ServicesSection />
      </div>
    </div>
  );
}

export default App;
