import EmbeddedPage from '@/components/EmbeddedPage'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function Corporate({ frontmatter, content }: { frontmatter: any; content: string }) {
  return (
    <EmbeddedPage
      title={frontmatter.title}
      description={frontmatter.description}
      imageSrc="/images/schedule.jpg"
      imageAlt="Schedule Your Corporate Session"
      iframeSrc="https://api.getaheadshot.net/booking/7qqSQHMd0oRtOIdwhlu5/sv/68c1d42576a8d8a6867917b1"
      iframeId="68c1d42576a8d8a6867917b1_1758058241318"
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
  const filePath = path.join(process.cwd(), 'content', 'corporate.md')
  let frontmatter = {
    title: 'Corporate Booking',
    description: 'Schedule your corporate headshot session with professional photography services.'
  }

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    frontmatter = { ...frontmatter, ...data }
  } catch (error) {
    // File doesn't exist, use defaults
  }

  return { props: { frontmatter, content: '' } }
}