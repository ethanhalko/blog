import { useEffect, useState } from 'react'
import Post from './components/Post/Post.tsx';
import LayoutMain from './layouts/LayoutMain.tsx';
function App() {
  const [pagePosts, setPagePosts] = useState<Record<string, string>[]>([]);
  const pageNumber = 1;
  const getPageData = async () => {
    const { default: posts } = await import(`./pages/${pageNumber}.json`);
    setPagePosts(posts);
  }

  useEffect(() => {
    getPageData();
  }, []);

  const posts = pagePosts.map((post) => Post(post));

  return (
    <LayoutMain>
      <div className="flex flex-col mx-auto">
        { posts }
      </div>
    </LayoutMain>
  )
}

export default App
