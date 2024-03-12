import LayoutMain from '../layouts/LayoutMain.tsx';

export default function About() {
  return (
    <LayoutMain>
      <div id="about-page" className={'mt-8 mx-auto text-center'}>
        <h1 className={'text-3xl my-8'}>About Me:</h1>

        <p>My name is Ethan.</p>

        <p>I have too many hobbies.</p>

        <p>My favourite food is Froot Loops.</p>

        <p>My favourite drink is water.</p>

        <p>My favourite band is Talk Talk.</p>
      </div>
    </LayoutMain>
  );
}
