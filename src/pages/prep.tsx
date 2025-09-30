import Layout from '@/components/Layout'
import Image from 'next/image'
import matter from 'gray-matter'
import { marked } from 'marked'
import fs from 'fs'
import path from 'path'

export default function Prep({ frontmatter, content }: { frontmatter: any; content: string }) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <div className="container mx-auto px-4 py-3 max-w-4xl">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Preparing for your session...
          </h1>
        </div>

        {/* Images Grid */}
        <div className="w-full bg-white pb-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/Prep/Chae.jpg"
                  alt="Chae professional headshot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/Prep/Kevin.jpg"
                  alt="Kevin professional headshot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/Prep/Greg.jpg"
                  alt="Greg professional headshot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/Prep/Sarah.jpg"
                  alt="Sarah professional headshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-gray-700 leading-relaxed">
          <style jsx>{`
            div :global(strong) {
              display: block;
              font-size: 1.25rem;
              font-weight: bold;
              color: #1f2937;
              margin-top: 2rem;
              margin-bottom: 1rem;
            }
            div :global(p) {
              margin-bottom: 1rem;
            }
          `}</style>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'prep.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const htmlContent = marked(content)
  return { props: { frontmatter: data, content: htmlContent } }
}