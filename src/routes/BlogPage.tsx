import {useEffect, useState} from 'react';
import Post from '../components/Post/Post.tsx';
import LayoutMain from '../layouts/LayoutMain.tsx';
import {createClient} from '@sanity/client';

export default function BlogPage() {
  const [pagePosts, setPagePosts] = useState<Record<string, string>[]>([]);

  const client = createClient({
    projectId: 'r63foj8o',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-03-11',
  });

  useEffect(() => {
    client.fetch('*[_type == "post"]').then(res => {
      setPagePosts(res);
    }).catch(e => {
      console.error(e);
    });
  }, []);

  const posts = pagePosts.map((p) => <Post key={p._id} postData={p}/>);

  return (
    <LayoutMain>
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
        <div className={'layout-content mt-16'}>
          <main>{posts}</main>
        </div>
      </div>
    </LayoutMain>
  )
}
