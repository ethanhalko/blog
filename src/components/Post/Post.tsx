import DOMPurify from 'dompurify';
import formatRelative from 'date-fns/formatRelative';

import './Post.css'
export default function Post(postData: Record<string, string>) {
  const publishedDate =  formatRelative((new Date(postData.created_at)), Date.now());

  return(
    <div key={postData.created_at} className={'my-8'}>
      <section>
        <h1 className="text-center text-3xl">{postData.title}</h1>
        <h5 className={'text-xs italic font-extralight text-center my-4'}>Published: { publishedDate }</h5>
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(postData.content) }} /> }
      </section>
      <hr className="border-t-2 py-2"/>
    </div>
  )
}
