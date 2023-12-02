import DOMPurify from 'dompurify';
export default function Post(postData: Record<string, string>) {
  return(
    <div key={postData.created_at}>
      <h1>{postData.title}</h1>
      <sub>Published: {postData.created_at}</sub>
      { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(postData.content) }} /> }
    </div>
  )
}
