import EmbeddedPage from '@/components/EmbeddedPage'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function Seekers({ frontmatter, content }: { frontmatter: any; content: string }) {
  return (
    <EmbeddedPage
      title={frontmatter.title}
      description={frontmatter.description}
      pageTitle="Schedule Your Discounted Session"
      imageSrc="/images/schedule.jpg"
      imageAlt="Schedule Your Session"
      iframeSrc="https://GetaHeadShot.17hats.com/p#/scheduling/xkxxhgphchftdkkcbsndwkpzvntrzfpn?embed=true&tp=false&hide_desc=false"
      iframeId="hats_scheduler"
      scriptSrc="https://GetaHeadShot.17hats.com/vendor/iframeSizer.min.js"
      iframeStyle={{
        margin: '20px',
        width: '100%',
        border: 'none',
        overflow: 'hidden'
      }}
      iframeHeight="600px"
    />
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'seekers.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}
