export const siteUrl = 'https://thecoolwater.github.io/CapitalRoyalServices/';

export function setPageMeta({ title, description }) {
  document.title = `${title} | Capital Royal Services`;
  updateMeta('description', description);
  updateMeta('og:title', `${title} | Capital Royal Services`, 'property');
  updateMeta('og:description', description, 'property');
  updateMeta('twitter:title', `${title} | Capital Royal Services`);
  updateMeta('twitter:description', description);
}

function updateMeta(name, content, attribute = 'name') {
  const selector = `meta[${attribute}="${name}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}
