

import {  Helmet } from "react-helmet-async";
export default function MetaTags ({description ,keywords ,title, image_url,url }){
    return (
        <Helmet>
            <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta property="og:title" content={title} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description } />
                <meta property="og:image" content={image_url } />
                <meta property="og:url" content={url}/>
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US"/>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title"  content={title} />
                <meta name="twitter:description" content={description } />
                <meta name="twitter:image" content={image_url } />           
                <link rel="canonical" href={url} />
            </Helmet>
    )
}