import EmbeddedPage from '@/components/EmbeddedPage'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function Consultation({ frontmatter, content }: { frontmatter: any; content: string }) {
  return (
    <EmbeddedPage
      title={frontmatter.title}
      description={frontmatter.description}
      pageTitle="Make a consultation appointment..."
      imageSrc="/images/schedule.jpg"
      imageAlt="Schedule Your Consultation"
      iframeSrc="https://api.getaheadshot.net/booking/7qqSQHMd0oRtOIdwhlu5/sv/68c1d42776a8d8911d7918e4"
      iframeId="68c1d42776a8d8911d7918e4_1758058241318"
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
  let frontmatter = {
    title: 'Consultation Appointment',
    description: 'Schedule a consultation appointment to discuss your photography needs and plan your session.'
  }

  try {
    const filePath = path.join(process.cwd(), 'content', 'consultation.md')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    frontmatter = { ...frontmatter, ...data }
  } catch (error) {
    // File doesn't exist, use defaults
  }

  return { props: { frontmatter, content: '' } }
}