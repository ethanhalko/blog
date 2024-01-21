import {useEffect, useState} from 'react';
import {Transition} from '@headlessui/react';
import Post from '../components/Post/Post.tsx';
import LayoutMain from '../layouts/LayoutMain.tsx';

export default function BlogPage() {
  const [showContent, setShowContent] = useState(false);
  const [pagePosts, setPagePosts] = useState<Record<string, string>[]>([]);
  const pageNumber = 1;
  const getPageData = async () => {
    const {default: posts} = await import(`../blog-pages/${pageNumber}.json`);
    setPagePosts(posts);
  }

  useEffect(() => {
    getPageData();
  }, []);

  const posts = pagePosts.map((post) => Post(post));

  return (
    <LayoutMain showContent={showContent}>
      <div className={`mx-auto text-center ${showContent ? 'my-8' : 'my-16'}`}>
        <a className={'cursor-pointer text-2xl underline'}
           onClick={() => setShowContent(!showContent)}
           aria-label={showContent ? 'Hide Blog' : 'Show Blog'}>
          {showContent ? 'Hide Your Blog Please' : 'Show Me Your Blog Please'}
        </a>
      </div>
      <Transition
        show={showContent}
        enter="transition-transform duration-500"
        enterFrom="translate-y-full"
        enterTo=""
        leave="transition-transform duration-150"
        leaveFrom=""
        leaveTo="translate-y-full"
      >
        <div className="max-w-4xl mx-auto">
          <div className={'layout-content'}>
            <main>{posts}</main>
          </div>
        </div>
      </Transition>
    </LayoutMain>
  )
}
