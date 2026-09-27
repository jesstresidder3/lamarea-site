/*
  Schema helpers for page builders (owner: foundation layout builder). Pass the result to
  <Base jsonLd={...}>. Organization is already added site-wide by the layout.

  faqJsonLd([{ question, answer }])            FAQPage for AnswerBlock and Accordion questions
  breadcrumbJsonLd([{ label, href }], siteUrl)  BreadcrumbList (Breadcrumbs renders its own, use one or the other)
*/
import { plain } from './text';

export interface QA { question: string; answer: string }

export function faqJsonLd(items: QA[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: plain(i.question),
      acceptedAnswer: { '@type': 'Answer', text: i.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { label: string; href?: string }[], siteUrl = 'https://www.lamarea.com.au') {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      // Trailing slash to match the canonicals (QA m12), unless the href carries a query or fragment.
      ...(c.href ? { item: new URL(/[?#]/.test(c.href) ? c.href : c.href.replace(/\/?$/, '/'), siteUrl).href } : {}),
    })),
  };
}
