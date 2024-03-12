import LayoutMain from '../layouts/LayoutMain.tsx';
import Contact from '../components/Contact.tsx';

export default function About() {
  return (
    <LayoutMain>
      <div id="contact" className={'mt-8 mx-auto text-center w-1/3'}>
        <h1 className={'text-3xl my-8'}>Contact Me:</h1>
        <Contact/>
      </div>
    </LayoutMain>
  );
}
