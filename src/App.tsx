import { useEffect, useState } from 'react'
import './App.css'
import Post from './Post';
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
    <div className="min-h-screen h-full bg-neutral-50">
      { posts }
    </div>
  )
}

export default App
