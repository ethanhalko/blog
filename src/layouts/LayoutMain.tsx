import type {ReactNode} from 'react';
import NavIcon from '../components/NavIcon.tsx';


const links = [
  {content: 'Go Home', label: 'Home', icon: 'i-akar-icons:home-alt1', path: '/'},
  {content: 'About Me', label: 'About', icon: 'i-akar-icons:face-happy', path: '/about'},
  {content: 'Contact', label: 'Contact', icon: 'i-akar-icons:envelope', path: '/contact'},
  {content: 'Github', label: 'See my Github Profile', icon: 'i-akar-icons:github-outline-fill', path: 'https://github.com/ethanhalko', newTab: true},
  {content: 'LinkedIn', label: 'See my LinkedIn Profile', icon: 'i-akar-icons:linkedin-box-fill', path: 'https://www.linkedin.com/in/ethan-halko-1053a4102/', newTab: true},
  {content: 'Thingiverse', label: 'See my Thingiverse Profile', icon: 'i-simple-icons:thingiverse', path: 'https://www.thingiverse.com/erthan/designs', newTab: true},
]

const linkNodes = links.map((link) => {
  return (
    <li key={link.path}>
      <NavIcon {...link} />
    </li>
  )
})

export default function LayoutMain<T extends ReactNode | ReactNode[]>({children}: { children: T}) {
  return (
    <>
      <div className="min-h-screen h-full flex flex-col w-full bg-neutral-50 px-8 pt-8 pb-16">
        <div className={'site-header flex flex-col content-center justify-center mt-8'}>
          <h1 className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mx-auto'}>
            Ethan Halko Dot Com
          </h1>
          <ul className={'flex mx-auto space-x-4 mt-12'}>
            {linkNodes}
          </ul>
          {children}
        </div>
      </div>
    </>
  )
}



