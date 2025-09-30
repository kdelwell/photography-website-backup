import EmbeddedPage from '@/components/EmbeddedPage'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function Schedule({ frontmatter, content }: { frontmatter: any; content: string }) {
  return (
    <EmbeddedPage
      title={frontmatter.title}
      description={frontmatter.description}
      imageSrc="/images/schedule.jpg"
      imageAlt="Schedule Your Session"
      iframeSrc="https://api.getaheadshot.net/booking/kevin-elwell-photography,-llc-1w583dfiyrjh/sc/68c1d42576a8d83fcd791805?heightMode=fixed&showHeader=true"
      iframeId="68c1d42576a8d83fcd791805_1758058241318"
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
  const filePath = path.join(process.cwd(), 'content', 'schedule.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}