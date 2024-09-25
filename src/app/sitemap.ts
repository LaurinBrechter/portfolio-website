import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const base_url = 'https://laurin-brechter.com';

    console.log("base_url", base_url);

    return [
        {
            url: `${base_url}/`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1.0,
            alternates: {
                languages: {
                    en: `${base_url}/en`,
                    de: `${base_url}/de`
                }
            }
        },
        {
            url: `${base_url}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
            alternates: {
                languages: {
                    en: `${base_url}/en/blog`,
                    de: `${base_url}/de/blog`
                }
            }
        },
        {
            url: `${base_url}/testimonials`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
            alternates: {
                languages: {
                    en: `${base_url}/en/testimonials`,
                    de: `${base_url}/de/testimonials`
                }
            }
        }
    ]
}