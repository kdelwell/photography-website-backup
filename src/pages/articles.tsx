import { useState } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface ArticlesProps {
  frontmatter: { title: string; description: string }
  content: string
}

const Articles = ({ frontmatter }: ArticlesProps) => {
  // Sample articles data - you can later move this to a content management system or markdown files
  const articles = [
    {
      id: 'expression-currency-photography',
      title: 'Expression is the Currency of Photography',
      excerpt: 'The ability to convey emotions through photography—a currency more valuable than any technical prowess or artistic finesse. Mastery of light, camera technique, and composition are undoubtedly essential skills. However, without the ability to elicit genuine emotion and...',
      image: '/images/Articles/Expression.jpeg',
      date: '2024-01-15',
      author: 'Kevin Elwell',
      readTime: '5 min read'
    },
    {
      id: 'add-color-to-brand',
      title: 'Need to Add Color to Your Brand?',
      excerpt: 'Color is undeniably powerful in businesses the ability to captivate the eye, commanding attention amidst the endless void of things vying for customers\' attention. While the potential of color to craft images that not only catch the eye but also leave a lasting...',
      image: '/images/Articles/Color.jpg',
      date: '2024-01-10',
      author: 'Kevin Elwell',
      readTime: '4 min read'
    },
    {
      id: 'which-side-face-better',
      title: 'Which Side of My Face is Better?',
      excerpt: 'The question of which side of the face is more flattering is a common inquiry that arises during my photography sessions. There are patterns that emerge when considering human preferences and anatomy. Statistically, a majority of...',
      image: '/images/Articles/Side.webp',
      date: '2024-01-05',
      author: 'Kevin Elwell',
      readTime: '3 min read'
    },
    {
      id: 'glasses-or-no-glasses',
      title: 'Glasses or No Glasses?',
      excerpt: 'When it comes to the age-old question of whether to wear glasses or go without during a headshot session, the decision can impact you\'re known for wearing glasses, there\'s no reason to abandon them during your photo shoot. In fact, it\'s advisable to keep them on...',
      image: '/images/Articles/Glasses.webp',
      date: '2023-12-28',
      author: 'Kevin Elwell',
      readTime: '4 min read'
    },
    {
      id: 'off-with-their-head',
      title: 'Off With Their Head!',
      excerpt: '"Why did you chop off the top of my head?" It\'s a question I encounter frequently when delivering images to my clients. Ironically, many of these same clients initially expressed preferences for a specific framing photographer after seeing my website images...',
      image: '/images/Articles/Heads.jpg',
      date: '2023-12-20',
      author: 'Kevin Elwell',
      readTime: '6 min read'
    },
    {
      id: 'sands-of-time',
      title: 'The Sands of Time',
      excerpt: 'There\'s definitely time, aiming to mark on all of us. These snapshots I\'ve captured over the past few years, show what truthfully, what honestly, does to all of us and how it serve as poignant reminders of this inevitable reality. We cannot escape the dramatic...',
      image: '/images/Articles/Time.webp',
      date: '2023-12-15',
      author: 'Kevin Elwell',
      readTime: '5 min read'
    }
  ]

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-wide">
                Articles & Insights
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Professional photography tips, industry insights, and creative inspiration to help you capture your best image.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Article Image */}
                  <div className="relative h-64 bg-gray-200">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    {/* Meta Information */}
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{article.author}</span>
                    </div>

                    {/* Article Title */}
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      {article.title}
                    </h2>

                    {/* Article Excerpt */}
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Read More Link */}
                    <Link
                      href={
                        article.id === 'expression-currency-photography' ? '/articles/expression' :
                        article.id === 'add-color-to-brand' ? '/articles/color' :
                        article.id === 'which-side-face-better' ? '/articles/face' :
                        article.id === 'glasses-or-no-glasses' ? '/articles/glasses' :
                        article.id === 'off-with-their-head' ? '/articles/heads' :
                        article.id === 'sands-of-time' ? '/articles/time' :
                        `https://getaheadshot.net/articles/${article.id}`
                      }
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors duration-200"
                      {...(article.id !== 'expression-currency-photography' && article.id !== 'add-color-to-brand' && article.id !== 'which-side-face-better' && article.id !== 'glasses-or-no-glasses' && article.id !== 'off-with-their-head' && article.id !== 'sands-of-time' && {
                        target: "_blank",
                        rel: "noopener noreferrer"
                      })}
                    >
                      read more
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready for Your Professional Headshot?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Apply these insights to your own photography session. Let's create images that truly represent your professional brand.
            </p>
            <a
              href="/more_info"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-200 inline-flex items-center"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'articles.md')
  let frontmatter = { title: 'Articles & Insights', description: 'Professional photography tips, industry insights, and creative inspiration.' }

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    frontmatter = { ...frontmatter, ...data }
  } catch (error) {
    // File doesn't exist, use defaults
  }

  return { props: { frontmatter, content: '' } }
}

export default Articles