import EmbeddedPage from '@/components/EmbeddedPage'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function Consult({ frontmatter, content }: { frontmatter: any; content: string }) {
  return (
    <EmbeddedPage
      title={frontmatter.title}
      description={frontmatter.description}
      pageTitle="Schedule a Consultation"
      imageSrc="/images/schedule.jpg"
      imageAlt="Schedule Your Consultation"
      iframeSrc="https://api.getaheadshot.net/booking/kevin-elwell-photography,-llc-1w583dfiyrjh/sv/68c1d42776a8d8911d7918e4?heightMode=full&showHeader=false"
      iframeId="68c1d42776a8d8911d7918e4_1764261806204"
      scriptSrc="https://api.getaheadshot.net/js/form_embed.js"
      iframeStyle={{
        width: '100%',
        border: 'none',
        overflow: 'hidden'
      }}
      iframeHeight="600px"
    />
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'consult.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}
