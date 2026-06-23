export type Language = 'ja' | 'en' | 'zh-CN' | 'zh-TW';

export type SectionId = 'home' | 'about' | 'services' | 'strengths' | 'company' | 'contact';

export const languages: Array<{ code: Language; label: string }> = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' },
];

export const sectionIds: SectionId[] = [
  'home',
  'about',
  'services',
  'strengths',
  'company',
  'contact',
];

const sharedFooterCopyright = '© 2025 SANWA Co., Ltd. All Rights Reserved.';

export const translations = {
  ja: {
    meta: {
      companyName: '三和株式会社',
      logo: 'SANWA',
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      strengths: 'Strengths',
      company: 'Company',
      contact: 'Contact',
    },
    common: {
      menu: 'メニュー',
      close: '閉じる',
      language: '言語',
      sectionLabel: 'SANWA Co., Ltd.',
    },
    hero: {
      eyebrow: 'EC Operations / Pet Products / Cross-border Business',
      title: '人と商品をつなぎ、新しい価値を届ける。',
      positioning: '日本発のEC運営力で、アジアの市場と商品をつなぐ。',
      subtitle: 'EC運営とペット用品の輸出入を中心に、国境を越えたビジネスを支援します。',
      primaryCta: '事業内容を見る',
      secondaryCta: 'お問い合わせ',
      facts: ['Founded in 2025', 'Shin-Osaka, Japan', 'EC Operations', 'Pet Products', 'Cross-Border Business'],
      visualTitle: 'SANWA BUSINESS FIELD',
      visualCaption: 'From Japan to Asia',
    },
    about: {
      label: 'About',
      title: '新大阪から、アジア市場を見据えた事業展開を。',
      philosophy: '誠実な運営と確かな商品理解で、長く信頼される流通をつくる。',
      body: [
        '三和株式会社は、2025年に新大阪で設立された企業です。EC運営を軸に、オンライン販売と商品流通をつなぐ事業を展開しています。',
        'ペット用品の輸出入、海外市場向けの商品展開、オンライン販売支援を通じて、国内外の事業者に実務的なサポートを提供します。',
        '日本国内だけでなく、アジア市場を視野に入れた柔軟な事業展開を目指しています。',
      ],
      highlights: ['EC運営', '商品流通', 'アジア市場'],
    },
    services: {
      label: 'Services',
      title: '事業内容',
      description: 'オンライン販売と商品流通をつなぎ、国内外の市場に合わせた事業推進を支援します。',
      items: [
        {
          title: 'EC運営',
          description:
            'オンラインショップの運営、商品ページ制作、SNS連携、販売導線の改善まで、日々の運営品質を高めます。',
          tags: ['Store Operation', 'Product Page', 'SNS', 'Sales Flow'],
        },
        {
          title: 'ペット用品の輸出入',
          description:
            '日本および海外市場に向けたペット用品の輸出入、商品選定、販売展開を一貫して支援します。',
          tags: ['Pet Products', 'Import / Export', 'Selection', 'Market Entry'],
        },
        {
          title: 'クロスボーダービジネス',
          description:
            '中国、日本、東南アジア市場を中心に、商品流通とオンライン販売をつなぐ事業を展開します。',
          tags: ['Japan', 'China', 'Southeast Asia', 'Online Sales'],
        },
      ],
    },
    strengths: {
      label: 'Strengths',
      title: '私たちの強み',
      description: '市場理解、地域ネットワーク、実務に強いEC運営体制を組み合わせ、事業の前進を支えます。',
      items: [
        {
          title: '日本市場への理解',
          description:
            '国内消費者の品質意識や購買行動を踏まえ、商品展開と販売導線を丁寧に設計します。',
          keywords: ['品質意識', '購買導線', '信頼形成'],
        },
        {
          title: 'アジア圏とのネットワーク',
          description:
            '日本、中国、東南アジアを視野に入れた流通と販売の接点づくりを支援します。',
          keywords: ['地域連携', '商品流通', '市場展開'],
        },
        {
          title: '小回りの利くEC運営体制',
          description:
            '変化の速いオンライン市場に合わせ、少人数ならではの柔軟さで改善を重ねます。',
          keywords: ['迅速対応', '継続改善', '運営実務'],
        },
      ],
    },
    company: {
      label: 'Company',
      title: '会社情報',
      description: '基本情報を簡潔に整理し、信頼できる取引の出発点を明確にします。',
      rows: [
        ['会社名', '三和株式会社'],
        ['設立', '2025年'],
        ['所在地', '日本・新大阪'],
        ['事業内容', 'EC運営、ペット用品の輸出入、クロスボーダービジネス'],
        ['対応言語', '日本語 / English / 简体中文 / 繁體中文'],
      ],
    },
    contact: {
      label: 'Contact',
      title: 'お問い合わせ',
      description: '事業提携、商品展開、EC運営に関するご相談は、下記メールアドレスよりご連絡ください。',
      note: '通常2〜3営業日以内にご返信いたします。',
      emailLabel: 'メール',
      phoneLabel: '電話',
      addressLabel: '所在地',
      email: 'info@example.com',
      phone: 'Coming soon',
      address: '日本・新大阪',
      cta: 'メールで問い合わせる',
    },
    footer: {
      companyName: '三和株式会社',
      location: '日本・新大阪',
      email: 'info@example.com',
      copyright: sharedFooterCopyright,
    },
  },
  en: {
    meta: {
      companyName: 'SANWA Co., Ltd.',
      logo: 'SANWA',
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      strengths: 'Strengths',
      company: 'Company',
      contact: 'Contact',
    },
    common: {
      menu: 'Menu',
      close: 'Close',
      language: 'Language',
      sectionLabel: 'SANWA Co., Ltd.',
    },
    hero: {
      eyebrow: 'EC Operations / Pet Products / Cross-border Business',
      title: 'Connecting people and products to deliver new value.',
      positioning: 'Japan-based e-commerce operations connecting products with Asian markets.',
      subtitle:
        'We support borderless business through e-commerce operations and the import and export of pet products.',
      primaryCta: 'View Services',
      secondaryCta: 'Contact Us',
      facts: ['Founded in 2025', 'Shin-Osaka, Japan', 'EC Operations', 'Pet Products', 'Cross-Border Business'],
      visualTitle: 'SANWA BUSINESS FIELD',
      visualCaption: 'From Japan to Asia',
    },
    about: {
      label: 'About',
      title: 'Building flexible business opportunities from Shin-Osaka to Asia.',
      philosophy: 'We create trusted distribution through sincere operations and a deep understanding of products.',
      body: [
        'SANWA Co., Ltd. was established in Shin-Osaka in 2025. With e-commerce operations at our core, we connect online sales with product distribution.',
        'Through pet product import and export, overseas product development, and online sales support, we provide practical support for businesses in Japan and abroad.',
        'We aim to build flexible business opportunities not only in Japan, but also across growing Asian markets.',
      ],
      highlights: ['E-commerce', 'Distribution', 'Asian Markets'],
    },
    services: {
      label: 'Services',
      title: 'Our Services',
      description:
        'We connect online sales with product distribution and help businesses move with confidence across domestic and international markets.',
      items: [
        {
          title: 'E-commerce Operations',
          description:
            'We improve day-to-day store quality, from online store operations and product pages to social channels and sales flows.',
          tags: ['Store Operation', 'Product Page', 'SNS', 'Sales Flow'],
        },
        {
          title: 'Pet Product Import and Export',
          description:
            'We support pet product import/export, product selection, and market development for Japan and overseas markets.',
          tags: ['Pet Products', 'Import / Export', 'Selection', 'Market Entry'],
        },
        {
          title: 'Cross-border Business',
          description:
            'We develop businesses that connect product distribution with online sales, focusing on China, Japan, and Southeast Asia.',
          tags: ['Japan', 'China', 'Southeast Asia', 'Online Sales'],
        },
      ],
    },
    strengths: {
      label: 'Strengths',
      title: 'Our Strengths',
      description:
        'We combine market understanding, regional networks, and hands-on e-commerce operations to support practical business growth.',
      items: [
        {
          title: 'Understanding of the Japanese Market',
          description:
            'We design product launches and sales flows with care, reflecting local expectations for quality and trust.',
          keywords: ['Quality Mindset', 'Purchase Flow', 'Trust'],
        },
        {
          title: 'Network Across Asia',
          description:
            'We help create practical links between distribution and sales across Japan, China, and Southeast Asia.',
          keywords: ['Regional Links', 'Distribution', 'Market Growth'],
        },
        {
          title: 'Agile E-commerce Operations',
          description:
            'Our compact operating structure allows us to respond quickly and keep improving in fast-moving online markets.',
          keywords: ['Fast Response', 'Improvement', 'Operations'],
        },
      ],
    },
    company: {
      label: 'Company',
      title: 'Company Profile',
      description: 'A clear overview of our basic company information and business fields.',
      rows: [
        ['Company Name', 'SANWA Co., Ltd.'],
        ['Established', '2025'],
        ['Location', 'Shin-Osaka, Japan'],
        ['Business', 'E-commerce operations, pet product import/export, cross-border business'],
        ['Languages', '日本語 / English / 简体中文 / 繁體中文'],
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Contact Us',
      description:
        'For partnership inquiries, product development, or e-commerce operations, please contact us by email.',
      note: 'We usually reply within 2 to 3 business days.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      addressLabel: 'Address',
      email: 'info@example.com',
      phone: 'Coming soon',
      address: 'Shin-Osaka, Japan',
      cta: 'Send Email',
    },
    footer: {
      companyName: 'SANWA Co., Ltd.',
      location: 'Shin-Osaka, Japan',
      email: 'info@example.com',
      copyright: sharedFooterCopyright,
    },
  },
  'zh-CN': {
    meta: {
      companyName: '三和株式会社',
      logo: 'SANWA',
    },
    nav: {
      home: '首页',
      about: '关于我们',
      services: '业务内容',
      strengths: '公司优势',
      company: '公司信息',
      contact: '联系我们',
    },
    common: {
      menu: '菜单',
      close: '关闭',
      language: '语言',
      sectionLabel: '三和株式会社',
    },
    hero: {
      eyebrow: '电商运营 / 宠物产品 / 跨境业务',
      title: '连接人与商品，传递新的价值。',
      positioning: '以日本电商运营能力，连接亚洲市场与优质商品。',
      subtitle: '以电商运营和宠物产品进出口为核心，支持跨越国境的商业发展。',
      primaryCta: '查看业务内容',
      secondaryCta: '联系我们',
      facts: ['Founded in 2025', 'Shin-Osaka, Japan', 'EC Operations', 'Pet Products', 'Cross-Border Business'],
      visualTitle: 'SANWA BUSINESS FIELD',
      visualCaption: 'From Japan to Asia',
    },
    about: {
      label: '关于我们',
      title: '从新大阪出发，面向亚洲市场灵活拓展。',
      philosophy: '以诚实运营与商品理解，建立长期可信赖的流通连接。',
      body: [
        '三和株式会社成立于2025年，总部位于日本新大阪。公司以电商运营为核心，连接线上销售与商品流通。',
        '我们开展宠物产品进出口、面向海外市场的商品拓展以及线上销售支持，为国内外企业提供务实支持。',
        '我们不仅关注日本国内市场，也以亚洲市场为视野，致力于灵活而稳健的业务发展。',
      ],
      highlights: ['电商运营', '商品流通', '亚洲市场'],
    },
    services: {
      label: '业务内容',
      title: '业务内容',
      description: '我们连接线上销售与商品流通，支持企业在国内外市场中稳健推进业务。',
      items: [
        {
          title: '电商运营',
          description: '从线上店铺运营、商品页面制作到SNS联动和销售路径优化，提升日常运营品质。',
          tags: ['店铺运营', '商品页面', 'SNS', '销售路径'],
        },
        {
          title: '宠物产品进出口',
          description: '面向日本及海外市场，支持宠物产品的进出口、商品选品与销售拓展。',
          tags: ['宠物产品', '进出口', '商品选品', '市场拓展'],
        },
        {
          title: '跨境电商相关业务',
          description: '以中国、日本、东南亚市场为中心，开展连接商品流通与线上销售的业务。',
          tags: ['日本', '中国', '东南亚', '线上销售'],
        },
      ],
    },
    strengths: {
      label: '公司优势',
      title: '我们的优势',
      description: '结合市场理解、区域网络和务实的电商运营体制，支持业务稳步向前。',
      items: [
        {
          title: '理解日本市场',
          description: '基于日本消费者对品质与信赖的重视，细致设计商品推广与销售路径。',
          keywords: ['品质意识', '购买路径', '信赖建立'],
        },
        {
          title: '亚洲区域网络',
          description: '面向日本、中国及东南亚市场，协助建立商品流通与销售之间的连接。',
          keywords: ['区域连接', '商品流通', '市场拓展'],
        },
        {
          title: '灵活的电商运营体制',
          description: '以小而精的团队结构，快速应对线上市场变化，持续优化运营表现。',
          keywords: ['快速响应', '持续改善', '运营实务'],
        },
      ],
    },
    company: {
      label: '公司信息',
      title: '公司信息',
      description: '清晰整理公司基本信息，为可靠合作建立明确起点。',
      rows: [
        ['公司名称', '三和株式会社'],
        ['成立时间', '2025年'],
        ['所在地', '日本・新大阪'],
        ['业务内容', '电商运营、宠物产品进出口、跨境电商相关业务'],
        ['支持语言', '日本語 / English / 简体中文 / 繁體中文'],
      ],
    },
    contact: {
      label: '联系我们',
      title: '联系我们',
      description: '关于业务合作、商品拓展或电商运营相关咨询，请通过以下邮箱联系我们。',
      note: '我们通常会在2～3个工作日内回复。',
      emailLabel: '邮箱',
      phoneLabel: '电话',
      addressLabel: '地址',
      email: 'info@example.com',
      phone: 'Coming soon',
      address: '日本・新大阪',
      cta: '发送邮件',
    },
    footer: {
      companyName: '三和株式会社',
      location: '日本・新大阪',
      email: 'info@example.com',
      copyright: sharedFooterCopyright,
    },
  },
  'zh-TW': {
    meta: {
      companyName: '三和株式会社',
      logo: 'SANWA',
    },
    nav: {
      home: '首頁',
      about: '關於我們',
      services: '業務內容',
      strengths: '公司優勢',
      company: '公司資訊',
      contact: '聯絡我們',
    },
    common: {
      menu: '選單',
      close: '關閉',
      language: '語言',
      sectionLabel: '三和株式会社',
    },
    hero: {
      eyebrow: '電商營運 / 寵物產品 / 跨境業務',
      title: '連結人與商品，傳遞新的價值。',
      positioning: '以日本電商營運能力，連結亞洲市場與優質商品。',
      subtitle: '以電商營運與寵物產品進出口為核心，支援跨越國境的商業發展。',
      primaryCta: '查看業務內容',
      secondaryCta: '聯絡我們',
      facts: ['Founded in 2025', 'Shin-Osaka, Japan', 'EC Operations', 'Pet Products', 'Cross-Border Business'],
      visualTitle: 'SANWA BUSINESS FIELD',
      visualCaption: 'From Japan to Asia',
    },
    about: {
      label: '關於我們',
      title: '從新大阪出發，面向亞洲市場靈活拓展。',
      philosophy: '以誠實營運與商品理解，建立長期可信賴的流通連結。',
      body: [
        '三和株式会社成立於2025年，總部位於日本新大阪。公司以電商營運為核心，連結線上銷售與商品流通。',
        '我們推動寵物產品進出口、面向海外市場的商品拓展以及線上銷售支援，為國內外企業提供務實支援。',
        '我們不僅關注日本國內市場，也以亞洲市場為視野，致力於靈活且穩健的業務發展。',
      ],
      highlights: ['電商營運', '商品流通', '亞洲市場'],
    },
    services: {
      label: '業務內容',
      title: '業務內容',
      description: '我們連結線上銷售與商品流通，支援企業在國內外市場中穩健推進業務。',
      items: [
        {
          title: '電商營運',
          description: '從線上店鋪營運、商品頁面製作到SNS聯動和銷售路徑優化，提升日常營運品質。',
          tags: ['店鋪營運', '商品頁面', 'SNS', '銷售路徑'],
        },
        {
          title: '寵物產品進出口',
          description: '面向日本及海外市場，支援寵物產品的進出口、商品選品與銷售拓展。',
          tags: ['寵物產品', '進出口', '商品選品', '市場拓展'],
        },
        {
          title: '跨境電商相關業務',
          description: '以中國、日本、東南亞市場為中心，推動連結商品流通與線上銷售的業務。',
          tags: ['日本', '中國', '東南亞', '線上銷售'],
        },
      ],
    },
    strengths: {
      label: '公司優勢',
      title: '我們的優勢',
      description: '結合市場理解、區域網絡和務實的電商營運體制，支援業務穩步向前。',
      items: [
        {
          title: '理解日本市場',
          description: '基於日本消費者對品質與信賴的重視，細緻設計商品推廣與銷售路徑。',
          keywords: ['品質意識', '購買路徑', '信賴建立'],
        },
        {
          title: '亞洲區域網絡',
          description: '面向日本、中國及東南亞市場，協助建立商品流通與銷售之間的連結。',
          keywords: ['區域連結', '商品流通', '市場拓展'],
        },
        {
          title: '靈活的電商營運體制',
          description: '以小而精的團隊結構，快速應對線上市場變化，持續優化營運表現。',
          keywords: ['快速回應', '持續改善', '營運實務'],
        },
      ],
    },
    company: {
      label: '公司資訊',
      title: '公司資訊',
      description: '清晰整理公司基本資訊，為可靠合作建立明確起點。',
      rows: [
        ['公司名稱', '三和株式会社'],
        ['成立時間', '2025年'],
        ['所在地', '日本・新大阪'],
        ['業務內容', '電商營運、寵物產品進出口、跨境電商相關業務'],
        ['支援語言', '日本語 / English / 简体中文 / 繁體中文'],
      ],
    },
    contact: {
      label: '聯絡我們',
      title: '聯絡我們',
      description: '關於業務合作、商品拓展或電商營運相關諮詢，請透過以下電子郵件聯絡我們。',
      note: '我們通常會在2～3個工作日內回覆。',
      emailLabel: '電子郵件',
      phoneLabel: '電話',
      addressLabel: '地址',
      email: 'info@example.com',
      phone: 'Coming soon',
      address: '日本・新大阪',
      cta: '發送郵件',
    },
    footer: {
      companyName: '三和株式会社',
      location: '日本・新大阪',
      email: 'info@example.com',
      copyright: sharedFooterCopyright,
    },
  },
} as const;

export type Translation = (typeof translations)[Language];
