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
      iframeSrc="https://GetaHeadShot.17hats.com/p#/embed/vhtnhdfkgghgzhwtbkcdpppvvzczxhft"
      iframeId="lc_contact_form"
      scriptSrc="https://GetaHeadShot.17hats.com/vendor/iframeSizer.min.js"
      iframeStyle={{
        width: '100%',
        border: 'none'
      }}
      iframeHeight="600px"
      pageTitle="More Info..."
      bodyText="Thank you for your interest in my product and services. Please fill out this form and I'll link you to my pricing page. I'll also send you some more information regarding my offerings. This small step gets you that much closer to a headshot that says 'wow.'"
    />
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'more_info.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}