import { notFound } from 'next/navigation';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/Footer';
import BlogDetailLayout from '@/components/BlogDetail/BlogDetailLayout';

import luxury3bhkData from '@/data/blogs/luxury-3bhk';
import LegacyOfDesign from '@/components/LegacyOfDesign/LegacyOfDefsign';

const blogRegistry = {
  'luxury-3bhk': luxury3bhkData,
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogRegistry[slug];
  if (!blog) return { title: 'Blog Not Found' };
  return {
    title: `${blog.title} | Neo Studio Blog`,
    description: blog.subtitle,
  };
}

export async function generateStaticParams() {
  return Object.keys(blogRegistry).map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogRegistry[slug];
  if (!blog) notFound();

  return (
    <main>
      <Header />
      <BlogDetailLayout blog={blog} />
      <LegacyOfDesign />
      <Footer />
    </main>
  );
}
