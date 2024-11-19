import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = 'Vaughn Gavin - Senior Software Engineer & CTO',
  description = 'Senior Software Engineer and CTO specializing in full-stack development, cloud architecture, and technical leadership.',
  keywords = 'software engineer, CTO, full stack developer, technical leader, cloud architecture',
  image = '/og-image.jpg', // Add your OG image
  url = 'https://vaughngavin.com' // Replace with your actual domain
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />


      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Vaughn Gavin" />
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Vaughn Gavin",
            "jobTitle": "Senior Software Engineer & CTO",
            "url": "${url}",
            "sameAs": [
              "https://github.com/vogong",
              "https://linkedin.com/in/vaughngavin",
            ]
          }
        `}
      </script>
    </Helmet>
  )
}

export default SEO
