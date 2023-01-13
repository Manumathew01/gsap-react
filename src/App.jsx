import './App.scss';
import Image from './assets/minifuse2.jpg';
import { useRef, useEffect } from 'react';
import gsap, { Power2 } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

const tl = gsap.timeline();
gsap.registerPlugin(CSSRulePlugin);

function App() {
  const container = useRef(null);
  const image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule('.img-container:after');

  useEffect(() => {
    console.log(image, container);
    tl.to(container.current, { duration: 0, visibility: 'visible' })
      .to(imageReveal, {
        duration: 1.4,
        width: '0%',
        ease: Power2.easeInOut,
      })
      .from(image.current, {
        duration: 1.4,
        scale: 1.6,
        ease: Power2.easeInOut,
        delay: -2.7,
      });
  }, []);

  return (
    <section className="main">
      <p>GSAP IMAGE REVEAL</p>
      <div className="container" ref={container}>
        <>
          <div className="img-container">
            <img src={Image} alt="minifuse2" ref={image} />
          </div>
        </>
      </div>
    </section>
  );
}

export default App;
