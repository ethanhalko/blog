import DOMPurify from 'dompurify';
import formatRelative from 'date-fns/formatRelative';

import './Post.css'
export default function Post(postData: Record<string, string>) {
  const publishedDate =  formatRelative((new Date(postData.created_at)), Date.now());

  return(
    <div key={postData.created_at} className={'my-8 post'}>
      <section>
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl">{postData.title}</h1>
        <h2 className={'text-xs italic font-extralight text-center mt-4 mb-2'}>Published { publishedDate }</h2>
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(postData.content) }} /> }
      </section>
      <hr className="border-t-2 py-2"/>
    </div>
  )
}
