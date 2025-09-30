import EmbeddedPage from '@/components/EmbeddedPage'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default function MoreInfo({ frontmatter, content }: { frontmatter: any; content: string }) {
  return (
    <EmbeddedPage
      title={frontmatter.title}
      description={frontmatter.description}
      imageSrc="/images/more_info.jpg"
      imageAlt="More Information"
      iframeSrc="https://api.getaheadshot.net/widget/form/P3fiOKHq2PRWe6gDrAO4"
      iframeId="inline-P3fiOKHq2PRWe6gDrAO4"
      formId="P3fiOKHq2PRWe6gDrAO4"
      scriptSrc="https://api.getaheadshot.net/js/form_embed.js"
      pageTitle="More Info..."
      bodyText="When you provide your contact information, you will receive an email that will link you to the pricing page where you can make your appointment if you're ready. You will also be subscribed to the 'Get aHead Series' which is a series of emails that provides you with headshot tips."
    />
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'more_info.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}