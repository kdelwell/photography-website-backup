import Layout from '@/components/Layout'
import Image from 'next/image'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { useEffect, useState } from 'react'

export default function About({ frontmatter, content }: { frontmatter: any; content: string }) {
  const [scrollY, setScrollY] = useState(0)
  const [activeCard, setActiveCard] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const toggleCard = (cardId: string) => {
    setActiveCard(activeCard === cardId ? null : cardId)
  }

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      {/* Hero image section - static on mobile, parallax on desktop */}
      <div className="relative w-full h-[400px] md:h-[1000px] lg:h-[1200px] overflow-hidden">
        {/* Mobile static image */}
        <div className="block md:hidden absolute inset-0">
          <Image 
            src="/images/AboutMe/Roles.jpeg" 
            alt="Professional Photography Services"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Desktop parallax image */}
        <div 
          className="hidden md:block absolute w-full h-[140%]"
          style={{
            top: '-10%',
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <Image 
            src="/images/AboutMe/Roles.jpeg" 
            alt="Professional Photography Services"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        
        {/* Overlay text */}
        <div className="absolute inset-0 flex items-start justify-center pt-[22%] md:pt-[19%] px-4">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight">
            <span className="md:hidden">Everything you always<br />wanted to know<br />about your photographer</span>
            <span className="hidden md:inline">Everything you always wanted to know<br />about your photographer</span>
          </h1>
        </div>
      </div>
      
      {/* 2x2 image grid full width with no gaps */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* First row */}
          <div 
            className="relative aspect-[4/3] group cursor-pointer overflow-hidden"
            onClick={() => toggleCard('career')}
          >
            <Image 
              src="/images/AboutMe/Career.jpg" 
              alt="Career Photography"
              fill
              className="object-cover object-top transition-all duration-500 md:group-hover:opacity-45 md:group-hover:grayscale"
              style={{
                opacity: activeCard === 'career' ? 0.45 : undefined,
                filter: activeCard === 'career' ? 'grayscale(100%)' : undefined,
                transform: activeCard === 'career' ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            <div className={`absolute inset-0 flex items-center justify-center px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 transition-opacity duration-500 ${
              activeCard === 'career' ? 'opacity-100' : 'opacity-0'
            } md:group-hover:opacity-100`}>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 md:p-6">
                <p className="text-black text-center text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-relaxed" style={{fontFamily: 'Verdana, Geneva, sans-serif'}}>
                  I'm on my third career after time in Aerospace and the Intelligence Community. I worked on the F-15, F-16, F-18, and F-22, then consulted at the NRO on satellite programs. Photography began as a side hustle but outpaced my day job, so I went full time. Now, I get to make people laugh and look great in front of my camera. It's a dream come true to run my own business—rewarding, creative, and challenging in all the right ways.
                </p>
              </div>
            </div>
            {/* Mobile tap indicator */}
            <div className={`absolute top-4 right-4 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded md:hidden transition-opacity duration-300 ${
              activeCard === 'career' ? 'opacity-0' : 'opacity-80'
            }`}>
              Tap to read
            </div>
          </div>
          <div 
            className="relative aspect-[4/3] group cursor-pointer overflow-hidden"
            onClick={() => toggleCard('cycling')}
          >
            <Image 
              src="/images/AboutMe/Cycling.jpg" 
              alt="Cycling Photography"
              fill
              className="object-cover object-top transition-all duration-500 md:group-hover:opacity-45 md:group-hover:grayscale"
              style={{
                opacity: activeCard === 'cycling' ? 0.45 : undefined,
                filter: activeCard === 'cycling' ? 'grayscale(100%)' : undefined,
                transform: activeCard === 'cycling' ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            <div className={`absolute inset-0 flex items-center justify-center px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 transition-opacity duration-500 ${
              activeCard === 'cycling' ? 'opacity-100' : 'opacity-0'
            } md:group-hover:opacity-100`}>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 md:p-6">
                <p className="text-black text-center text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-relaxed" style={{fontFamily: 'Verdana, Geneva, sans-serif'}}>
                  I've always had a thing for bikes. As a kid, it was a Schwinn Sting-Ray. In my thirties, I got into road bikes and set a goal to ride a century. After losing loved ones to cancer, I found the Pan Mass Challenge—a 200-mile ride to raise money for cancer research. After my dad passed from a rare cancer, the cause became personal. I rode 11 times and raised over $104,000 for Dana-Farber. The people, the purpose—it's one of the most meaningful things I've ever done.
                </p>
              </div>
            </div>
            {/* Mobile tap indicator */}
            <div className={`absolute top-4 right-4 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded md:hidden transition-opacity duration-300 ${
              activeCard === 'cycling' ? 'opacity-0' : 'opacity-80'
            }`}>
              Tap to read
            </div>
          </div>
          
          {/* Second row */}
          <div 
            className="relative aspect-[4/3] group cursor-pointer overflow-hidden"
            onClick={() => toggleCard('family')}
          >
            <Image 
              src="/images/AboutMe/Family.jpg" 
              alt="Family Photography"
              fill
              className="object-cover object-top transition-all duration-500 md:group-hover:opacity-45 md:group-hover:grayscale"
              style={{
                opacity: activeCard === 'family' ? 0.45 : undefined,
                filter: activeCard === 'family' ? 'grayscale(100%)' : undefined,
                transform: activeCard === 'family' ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            <div className={`absolute inset-0 flex items-center justify-center px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 transition-opacity duration-500 ${
              activeCard === 'family' ? 'opacity-100' : 'opacity-0'
            } md:group-hover:opacity-100`}>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 md:p-6">
                <p className="text-black text-center text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-relaxed" style={{fontFamily: 'Verdana, Geneva, sans-serif'}}>
                  I met my wife Adrienne over 20 years ago and knew right away she was the one. We married on New Year's Eve and later chose domestic adoption to grow our family. Our first son, Zachary, came from Ohio—he's on the Spectrum and a daily blessing. Jacob came from a local couple seeking a family with Zach. Now we're busy with high school, middle school, sports, and band. It's a full, joyful life, and being a Dad is the role I cherish most.
                </p>
              </div>
            </div>
            {/* Mobile tap indicator */}
            <div className={`absolute top-4 right-4 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded md:hidden transition-opacity duration-300 ${
              activeCard === 'family' ? 'opacity-0' : 'opacity-80'
            }`}>
              Tap to read
            </div>
          </div>
          <div 
            className="relative aspect-[4/3] group cursor-pointer overflow-hidden"
            onClick={() => toggleCard('photog')}
          >
            <Image 
              src="/images/AboutMe/Photog.jpg" 
              alt="Professional Photography"
              fill
              className="object-cover object-top transition-all duration-500 md:group-hover:opacity-45 md:group-hover:grayscale"
              style={{
                opacity: activeCard === 'photog' ? 0.45 : undefined,
                filter: activeCard === 'photog' ? 'grayscale(100%)' : undefined,
                transform: activeCard === 'photog' ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            <div className={`absolute inset-0 flex items-center justify-center px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 transition-opacity duration-500 ${
              activeCard === 'photog' ? 'opacity-100' : 'opacity-0'
            } md:group-hover:opacity-100`}>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 md:p-6">
                <p className="text-black text-center text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-relaxed" style={{fontFamily: 'Verdana, Geneva, sans-serif'}}>
                  I've always been fascinated by cameras and how they work—from chemistry to electrons. I earned the photography merit badge as a scout but didn't buy my first real camera until my thirties. I found myself drawn to photos of people, which led to a passion for headshot photography. I now study under Peter Hurley, the best in the world, and launched my business in 2019. It has become a rewarding journey for both me and my family.
                </p>
              </div>
            </div>
            {/* Mobile tap indicator */}
            <div className={`absolute top-4 right-4 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded md:hidden transition-opacity duration-300 ${
              activeCard === 'photog' ? 'opacity-0' : 'opacity-80'
            }`}>
              Tap to read
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'about.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}