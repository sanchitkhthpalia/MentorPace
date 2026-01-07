import React from 'react'
import BlogList from '@/components/Blog/BlogList'
import HeroSub from '@/components/SharedComponent/HeroSub'

const BlogPage = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/blog', text: 'Blog' },
  ]
  return (
    <>
      <HeroSub
        title='Blog'
        description='Read articles and resources about career development, mentorship insights, industry trends, and tips to advance your professional journey.'
        breadcrumbLinks={breadcrumbLinks}
      />
      <BlogList />
    </>
  )
}

export default BlogPage
