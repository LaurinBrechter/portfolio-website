import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    
    const base_url = 'https://laurin-brechter.com';
    
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    `/demos/hnsw`,
                ]
            }
        ],
        sitemap: `${base_url}/sitemap.xml`
    }
}