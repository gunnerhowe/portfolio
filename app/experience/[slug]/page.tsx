// [slug]/page.tsx
import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { formatDate, getExperiencePosts } from 'app/experience/utils';
import { baseUrl } from 'app/sitemap';

export async function generateStaticParams() {
  let posts = getExperiencePosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getExperiencePosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    startDate: startTime,
    endDate: endTime,
    company,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      startTime,
      endTime,
      url: `${baseUrl}/experience/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Projects({ params }) {
  let post = getExperiencePosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProjectsPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.startDate,
            dateModified: post.metadata.startDate,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/projects/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-1 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.startDate)} - {formatDate(post.metadata.endDate)}
        </p>
      </div>
      <div className="flex justify-between items-center mt-2 mb-1 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {post.metadata.company}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}

