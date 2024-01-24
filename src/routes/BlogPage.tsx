import {useEffect, useState} from 'react';
import {Transition} from '@headlessui/react';
import Post from '../components/Post/Post.tsx';
import LayoutMain from '../layouts/LayoutMain.tsx';
import Contact from '../components/Contact.tsx';

export default function BlogPage() {
  const [showContent, setShowContent] = useState<string | undefined>(undefined);
  const [pagePosts, setPagePosts] = useState<Record<string, string>[]>([]);
  const pageNumber = 1;
  const getPageData = async () => {
    const {default: posts} = await import(`../blog-pages/${pageNumber}.json`);
    setPagePosts(posts);
  }

  function setView(view: string) {
    if (showContent === view) {
      setShowContent(undefined);

      return;
    }

    setShowContent(view);
  }

  useEffect(() => {
    getPageData();
  }, []);

  const posts = pagePosts.map((post) => Post(post));

  return (
    <LayoutMain showContent={!!showContent}>
      <div className={`mx-auto text-center grid grid-cols-2 my-2 text-2xl`}>
        <a className={`cursor-pointer hover:underline ${showContent === 'blog' && 'underline'}`} onClick={() => setView('blog')}>Blog</a>
        <a className={`cursor-pointer hover:underline ${showContent === 'contact' && 'underline'}`} onClick={() => setView('contact')}>Contact</a>
      </div>
      <Transition
        show={!!showContent}
        enter="transition-transform duration-500"
        enterFrom="translate-y-full"
        enterTo=""
        leave="transition-transform duration-150"
        leaveFrom=""
        leaveTo="translate-y-full"
      >
        <div className="max-w-4xl mx-auto">
          <Transition
            show={showContent === 'contact'}
            enter="transition-transform duration-150 delay-200"
            enterFrom="translate-x-[200%]"
            leave="transition-transform duration-150"
            leaveTo={showContent && 'translate-x-[200%]'}
          >
            <div className={'layout-content'}>
              <main><Contact/></main>
            </div>
          </Transition>
          <Transition
            show={showContent === 'blog'}
            enter="transition-transform duration-150 delay-200"
            enterFrom="-translate-x-[200%]"
            leave="transition-transform duration-150"
            leaveTo={showContent && '-translate-x-[200%]'}
          >
            <div className={'layout-content'}>
              <main>{posts}</main>
            </div>
          </Transition>
        </div>
      </Transition>
    </LayoutMain>
  )
}
