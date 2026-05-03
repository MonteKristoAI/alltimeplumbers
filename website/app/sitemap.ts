import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alltimeplumbers.com';
  
  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'monthly' },
    { url: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/services/drain-cleaning', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/services/water-heater', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/services/leak-repair', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/services/repipe', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/services/emergency', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/areas/san-diego', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/reviews', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/book', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/legal/terms', priority: 0.5, changeFrequency: 'yearly' },
    { url: '/legal/privacy', priority: 0.5, changeFrequency: 'yearly' },
  ] as const;

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
