import React from 'react'
import { Helmet } from 'react-helmet'
import { headerData } from '../../data/headerData'

function SEO({ 
  title = `${headerData.name} - ${headerData.title}`,
  description = headerData.description,
  image = headerData.image,
  url = headerData.siteUrl,
  keywords = headerData.keywords 
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:creator" content={headerData.twitterHandle} />
      
      <meta name="author" content={headerData.name} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}

export default SEO