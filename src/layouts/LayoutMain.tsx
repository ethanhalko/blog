import type {ReactNode} from 'react';

export default function LayoutMain<T extends ReactNode | ReactNode[]>({children}: {children: T }) {
  return(
    <>
      <div className="min-h-screen h-full w-full bg-neutral-50 p-16">
        <div className={'site-header mx-auto mb-8 flex flex-col'}>
          <h1 className={'text-6xl text-center mx-auto'}>What I'm Doing Right Now</h1>
          <sub className={'mx-auto my-6 italic font-light'}>By Ethan Halko</sub>
          <ul className={'flex mx-auto space-x-4 my-4'}>
            <li><div className={'i-akar-icons:home-alt1 text-2xl'} /></li>
            <li>
              <a href={'https://github.com/ethanhalko'} target={'_blank'}>
                <div className={'i-akar-icons:github-outline-fill text-2xl'} />
              </a>
            </li>
            <li>
              <a href={'https://www.linkedin.com/in/ethan-halko-1053a4102/'} target={'_blank'}>
                <div className={'i-akar-icons:linkedin-box-fill text-2xl'} />
              </a>
            </li>
            <li>
              <a href={'https://www.thingiverse.com/erthan/designs'} target={'_blank'}>
                <div className={'i-simple-icons:thingiverse text-2xl'} />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 mx-auto">
          <div className={'layout-content'}>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  )
}
