export interface LinkItem {
  label: string;
  description?: string;
  href: string;
  kind: 'internal' | 'external' | 'email';
  featured?: boolean;
}

export interface LinkGroup {
  heading: string;
  description?: string;
  links: LinkItem[];
}

export const itOperationsLinks: LinkItem[] = [
  {
    label: 'Interactive reporting demo',
    description: 'Watch every reported figure reconcile against included sample data.',
    href: 'https://demo.zerobeatlabs.org/reconcile',
    kind: 'external',
    featured: true,
  },
  {
    label: 'IT Reporting Workflow Sprint',
    description: 'A fixed-scope reporting system built from sanitized operational exports.',
    href: 'https://zerobeatlabs.org/#sprint',
    kind: 'internal',
  },
  {
    label: 'Why “just summarize the files” fails',
    description: 'The specific failure mode and the method that fixes it.',
    href: 'https://zerobeatlabs.org/writing/why-summarizing-files-fails-for-it-operations-reports/',
    kind: 'internal',
  },
  {
    label: 'Getting value from AI without production credentials',
    description: 'Why export-based, read-only automation is a useful and safer starting point.',
    href: 'https://zerobeatlabs.org/writing/ai-value-without-production-credentials/',
    kind: 'internal',
  },
  {
    label: 'NIST AI Resource Center',
    description: 'Independent guide to the AI Risk Management Framework and supporting resources.',
    href: 'https://airc.nist.gov/',
    kind: 'external',
  },
  {
    label: 'OWASP GenAI Security Project',
    description: 'Independent guidance on security risks in generative-AI applications.',
    href: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
    kind: 'external',
  },
];

export const localBusinessLinks: LinkItem[] = [
  {
    label: 'Get a free website preview',
    description: 'See a mobile-first direction for your business before deciding what to build.',
    href: 'https://web.zerobeatlabs.org/',
    kind: 'external',
    featured: true,
  },
  {
    label: 'Improve your local ranking on Google',
    description: 'Independent guidance from Google Business Profile Help.',
    href: 'https://support.google.com/business/answer/7091?hl=en',
    kind: 'external',
  },
];

export const contactLinks: LinkItem[] = [
  {
    label: 'Book a 10-minute call',
    description: 'Opens the ZeroBeatLabs booking page in Google Calendar.',
    href: 'https://calendar.app.google/ZzgzTAhCFCk1oxBH8',
    kind: 'external',
    featured: true,
  },
  {
    label: 'Email ZeroBeatLabs',
    description: 'hello@zerobeatlabs.org',
    href: 'mailto:hello@zerobeatlabs.org',
    kind: 'email',
  },
];

export const businessProfileLinks: LinkItem[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/zerobeatlabs', kind: 'external' },
  { label: 'Substack', href: 'https://substack.com/@zerobeatlabs', kind: 'external' },
  { label: 'YouTube', href: 'https://www.youtube.com/@zerobeatlabs', kind: 'external' },
  { label: 'GitHub', href: 'https://github.com/zerobeatlabs', kind: 'external' },
];
