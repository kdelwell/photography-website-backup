import EmbeddedPage from '@/components/EmbeddedPage'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function Schedule({ frontmatter, content }: { frontmatter: any; content: string }) {
  return (
    <EmbeddedPage
      title={frontmatter.title}
      description={frontmatter.description}
      pageTitle="Choose a time and a session that works for you"
      imageSrc="/images/schedule.jpg"
      imageAlt="Schedule Your Session"
      iframeSrc="https://GetaHeadShot.17hats.com/p#/scheduling/hnzpzgpvzhxgnndvtcpcnkhgsrbswchz?embed=true&tp=false&hide_desc=false"
      iframeId="hats_scheduler"
      scriptSrc="https://GetaHeadShot.17hats.com/vendor/iframeSizer.min.js"
      iframeStyle={{
        margin: '20px',
        width: '100%',
        border: 'none'
      }}
      iframeHeight="600px"
    />
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'schedule.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}