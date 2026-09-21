export const siteConfig = {
  navigation: [
    { name: 'الرئيسية', href: '/' },
    { name: 'الخدمات', href: '#services' },
    { name: 'المشاريع', href: '#projects' },
    { name: 'كيف نعمل', href: '#process' },
    { name: 'من نحن', href: '#about' },
    { name: 'تواصل معنا', href: '#contact' },
  ],
  capabilities: [
    { title: 'Web Applications', icon: 'monitor' },
    { title: 'E-commerce', icon: 'shopping-cart' },
    { title: 'SaaS Platforms', icon: 'cloud' },
    { title: 'Admin Dashboards', icon: 'layout-dashboard' },
    { title: 'Custom Software', icon: 'code' },
    { title: 'API & Backend Systems', icon: 'database' },
  ],
  services: [
    {
      number: '01',
      title: 'منصات ويب',
      description: 'منصات ويب سريعة ومرنة مصممة حول احتياجات عملك.',
      icon: 'monitor',
    },
    {
      number: '02',
      title: 'التجارة الإلكترونية',
      description: 'متاجر إلكترونية احترافية تركز على تجربة المستخدم والتحويل.',
      icon: 'shopping-cart',
    },
    {
      number: '03',
      title: 'منصات SaaS',
      description: 'منصات SaaS قابلة للتوسع مع بنية تقنية مصممة للنمو.',
      icon: 'cloud',
    },
    {
      number: '04',
      title: 'برمجيات مخصصة',
      description: 'حلول برمجية مخصصة للمشكلات التي لا تحلها الحلول الجاهزة.',
      icon: 'code',
    },
  ],
  process: [
    {
      number: '01',
      title: 'اكتشاف الفكرة',
      description: 'نفهم الفكرة، المشكلة، والمستخدم المستهدف.',
      icon: 'lightbulb',
    },
    {
      number: '02',
      title: 'التصميم',
      description: 'نحوّل المتطلبات إلى تجربة واضحة وواجهة مصممة بعناية.',
      icon: 'palette',
    },
    {
      number: '03',
      title: 'التطوير',
      description: 'نبني المنتج باستخدام تقنيات حديثة وبنية قابلة للتوسع.',
      icon: 'code-xml',
    },
    {
      number: '04',
      title: 'الإطلاق والنمو',
      description: 'نطلق المنتج ونستمر في تطويره بناءً على الاستخدام والاحتياجات.',
      icon: 'rocket',
    },
  ],
  technologies: [
    { name: 'Vue', icon: 'img/vue.svg' },
    { name: 'Nuxt', icon: 'img/nuxt.svg' },
    { name: 'React', icon: 'img/react.svg' },
    { name: 'Node.js', icon: 'img/node.svg' },
    { name: 'Laravel', icon: 'img/laravel.svg' },
    { name: 'TypeScript', icon: 'img/typescript.svg' },
    { name: 'Tailwind CSS', icon: 'img/tailwind.svg' },
    { name: 'PostgreSQL', icon: 'img/postgres.svg' },
    { name: 'AWS', icon: 'img/aws.svg' },
  ],
  projects: [
    {
      id: 'falbid',
      name: 'Falbid',
      category: 'منصة تجارة إلكترونية',
      description: 'منصة متخصصة في المزادات والتجارة الإلكترونية مع تجربة مستخدم متكاملة.',
      technologies: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind'],
      image: '/img/falbid-mockup.png', // We'll create CSS mockups if not available
      featured: true,
    },
    {
      id: 'project-2',
      name: 'متجر زهور',
      category: 'متجر إلكتروني',
      description: 'منصة تجارة إلكترونية متكاملة مع نظام إدارة المخزون',
      image: '/img/project-2.png',
      featured: false,
    },
    {
      id: 'project-3',
      name: 'نظام إدارة المشاريع',
      category: 'لوحة تحكم SaaS',
      description: 'لوحة تحكم متكاملة لإدارة المشاريع والفرق بكفاءة',
      image: '/img/project-3.png',
      featured: false,
    }
  ],
  socials: [
    { name: 'X', icon: 'twitter', href: '#' },
    { name: 'LinkedIn', icon: 'linkedin', href: '#' },
    { name: 'YouTube', icon: 'youtube', href: '#' },
  ],
  contact: {
    email: 'hello@edix.com',
    phone: '+20 100 123 4567',
    whatsapp: '+201001234567'
  }
}
