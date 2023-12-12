import type {ReactNode} from 'react';
import NavIcon from '../components/NavIcon.tsx';

const links = [
  {content: 'Go Home', label: 'Home', icon: 'i-akar-icons:home-alt1', path: '/'},
  {content: 'About Me', label: 'About', icon: 'i-akar-icons:face-happy', path: '/about'},
  {content: 'Github', label: 'See my Github Profile', icon: 'i-akar-icons:github-outline-fill', path: 'https://github.com/ethanhalko', newTab: true},
  {content: 'LinkedIn', label: 'See my LinkedIn Profile', icon: 'i-akar-icons:github-outline-fill', path: 'https://github.com/ethanhalko', newTab: true},
  {content: 'Thingiverse', label: 'See my Thingiverse Profile', icon: 'i-simple-icons:thingiverse', path: 'https://www.thingiverse.com/erthan/designs', newTab: true},
]

const linkNodes = links.map((link) => {
  return (
    <li>
      <NavIcon {...link} />
    </li>
  )
})

export default function LayoutMain<T extends ReactNode | ReactNode[]>({children}: { children: T }) {
  return (
    <>
      <div className="min-h-screen h-full w-full bg-neutral-50 px-8 pt-8 pb-16">
        <div className={'site-header mx-auto flex flex-col'}>
          <h1 className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mx-auto'}>
            What I'm Doing Right Now
          </h1>
          <sub className={'mx-auto my-6 italic font-light'}>By Ethan Halko</sub>
          <ul className={'flex mx-auto space-x-4 my-4'}>
            {linkNodes}
          </ul>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className={'layout-content'}>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  )
}



