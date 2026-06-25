import type { Language } from '../i18n/translations';

export type ServiceItem = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type HomeContent = {
  meta: {
    title: string;
    logo: string;
    companyName: string;
  };
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    visualLabel: string;
    visualTitle: string;
    visualItems: string[];
  };
  services: {
    label: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
  values: {
    label: string;
    title: string;
    items: ValueItem[];
  };
  about: {
    label: string;
    title: string;
    body: string;
    points: string[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
    cta: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    email: string;
    phone: string;
    phoneHref: string;
    address: string;
  };
  footer: {
    services: string;
    company: string;
    contact: string;
    copyright: string;
  };
};

const serviceImages = {
  crossBorder: '/images/service-cross-border-3d.png',
  marketplace: '/images/service-marketplace-3d.png',
  pet: '/images/service-pet-3d.png',
};

export const homeContent: Record<Language, HomeContent> = {
  ja: {
    meta: {
      title: '三和株式会社 | SANWA',
      logo: 'SANWA',
      companyName: '三和株式会社',
    },
    nav: {
      home: 'ホーム',
      services: '事業内容',
      about: '会社紹介',
      contact: 'お問い合わせ',
      cta: 'お問い合わせ',
    },
    hero: {
      eyebrow: 'SANWA Co., Ltd. / Shin-Osaka / EC & Trade',
      title: '日本とアジアをつなぐ、\nECビジネスを支える。',
      subtitle:
        '三和株式会社は、EC運営とペット用品の輸出入を中心に、日本とアジア市場をつなぐ事業を展開しています。',
      primaryCta: '事業内容を見る',
      secondaryCta: 'お問い合わせ',
      visualLabel: '事業領域',
      visualTitle: 'EC運営、ペット用品の輸出入、越境ビジネスを一つずつ丁寧に。',
      visualItems: ['EC運営', 'ペット用品の輸出入', 'クロスボーダービジネス'],
    },
    services: {
      label: '事業内容',
      title: 'やわらかく、確かな事業支援。',
      description:
        'デジタル販売と商品理解をつなぎ、ブランドが次の市場へ進むための運営基盤を整えます。',
      items: [
        {
          title: '越境EC支援',
          description:
            'TikTok、Amazon などのプラットフォーム運営を支援し、商品がより広い市場へ届く流れをつくります。',
          tags: ['越境EC', '販路設計', '市場展開'],
          image: serviceImages.crossBorder,
          imageAlt: 'TikTok と Amazon の3Dモニターアイコン',
        },
        {
          title: '日本モール運営',
          description:
            '楽天、Yahoo! Japan など日本主要モールの店舗運営、商品ページ改善、販売導線づくりを支援します。',
          tags: ['店舗運営', '商品ページ', '販売支援'],
          image: serviceImages.marketplace,
          imageAlt: '楽天と Yahoo! Japan の3Dモニターアイコン',
        },
        {
          title: 'ペット用品・ライフスタイル',
          description:
            'ペット用品と暮らしに寄り添う商品の選定、販売、ブランド化を丁寧にサポートします。',
          tags: ['ペット用品', '商品選定', 'ブランド化'],
          image: serviceImages.pet,
          imageAlt: '犬と猫の3Dモニターアイコン',
        },
      ],
    },
    values: {
      label: '大切にしていること',
      title: '私たちが大切にしていること',
      items: [
        { title: '日本市場への理解', description: '国内市場の品質意識や購買導線を踏まえ、販売設計を丁寧に整えます。' },
        { title: 'アジア圏とのネットワーク', description: '日本とアジア市場を視野に、商品流通とオンライン販売をつなぎます。' },
        { title: '小回りの利くEC運営体制', description: '変化の速いオンライン市場に合わせ、柔軟で実務的な改善を重ねます。' },
        { title: 'わかりやすい進行管理', description: '複雑な越境運営を整理し、相談しやすい形で進めます。' },
      ],
    },
    about: {
      label: '会社紹介',
      title: 'SANWAについて',
      body:
        '三和株式会社は、日本を拠点とする総合運営会社です。越境EC、日本モール運営、ペット用品とライフスタイル製品を中心に、安定・丁寧・長期視点の運営支援を行っています。',
      points: ['日本・新大阪', '2025年設立', 'EC運営', 'ペット用品・ライフスタイル'],
    },
    contact: {
      label: 'お問い合わせ',
      title: '一緒に、次の市場へ。',
      description:
        '日本モール運営、越境EC支援、ペット用品関連の協業をご検討中でしたら、まずはお気軽にご相談ください。',
      cta: 'お問い合わせ',
      emailLabel: 'メール',
      phoneLabel: '電話',
      addressLabel: '所在地',
      email: 'sanwa0401@outlook.com',
      phone: '06-6732-9050',
      phoneHref: '0667329050',
      address: '大阪府大阪市東淀川区東中島１－５－７ 新大阪コスモビル４０２号室',
    },
    footer: {
      services: '事業内容',
      company: '会社紹介',
      contact: 'お問い合わせ',
      copyright: '© 2025 SANWA Co., Ltd. 無断転載を禁じます。',
    },
  },
  en: {
    meta: {
      title: 'SANWA Co., Ltd.',
      logo: 'SANWA',
      companyName: 'SANWA Co., Ltd.',
    },
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      cta: 'Contact Us',
    },
    hero: {
      eyebrow: 'SANWA Co., Ltd. / Cross-border EC / Pet Products',
      title: 'Connecting Japan and Asia\nthrough EC business.',
      subtitle:
        'SANWA Co., Ltd. supports EC operations and pet product trading, connecting products and markets across Japan and Asia.',
      primaryCta: 'View Services',
      secondaryCta: 'Contact Us',
      visualLabel: 'Business Field',
      visualTitle: 'EC operations, pet product trading, and cross-border business, handled carefully step by step.',
      visualItems: ['EC Operations', 'Pet Product Trading', 'Cross-border Business'],
    },
    services: {
      label: 'Services',
      title: 'Light, focused business support.',
      description:
        'We connect digital sales with product understanding, creating a clear operating base for brands entering new markets.',
      items: [
        {
          title: 'Cross-border E-commerce',
          description:
            'We support platform operations on TikTok, Amazon, and other channels so products can reach broader markets.',
          tags: ['Cross-border', 'Sales Channels', 'Market Entry'],
          image: serviceImages.crossBorder,
          imageAlt: 'TikTok and Amazon 3D monitor icon',
        },
        {
          title: 'Japan Marketplace Operations',
          description:
            'We support store operations, product page improvement, and sales flows on Rakuten, Yahoo! Japan, and other marketplaces.',
          tags: ['Store Operations', 'Product Pages', 'Sales Support'],
          image: serviceImages.marketplace,
          imageAlt: 'Rakuten and Yahoo Japan 3D monitor icon',
        },
        {
          title: 'Pet Lifestyle & Products',
          description:
            'We help with product selection, sales operations, and brand-building around pet and lifestyle products.',
          tags: ['Pet Products', 'Selection', 'Branding'],
          image: serviceImages.pet,
          imageAlt: 'Dog and cat 3D monitor icon',
        },
      ],
    },
    values: {
      label: 'Values',
      title: 'What we care about',
      items: [
        { title: 'Understanding Japan', description: 'We design sales flows with care for local quality expectations and purchase behavior.' },
        { title: 'Asia-focused Network', description: 'We connect product distribution with online sales across Japan and Asian markets.' },
        { title: 'Agile EC Operations', description: 'We keep improving with a practical structure suited to fast-moving online markets.' },
        { title: 'Clear Project Flow', description: 'We organize cross-border operations into a clear and easy-to-discuss process.' },
      ],
    },
    about: {
      label: 'About',
      title: 'About SANWA',
      body:
        'SANWA Co., Ltd. is an operations company based in Japan, focused on cross-border e-commerce, Japan marketplace operations, and pet lifestyle products. We believe good products deserve stable, careful, long-term support.',
      points: ['Shin-Osaka, Japan', 'Founded in 2025', 'E-commerce Operations', 'Pet Lifestyle Products'],
    },
    contact: {
      label: 'Contact',
      title: 'Let us move to the next market together.',
      description:
        'If you are looking for Japan marketplace operations, cross-border e-commerce support, or pet product partnerships, please contact us.',
      cta: 'Contact Us',
      emailLabel: 'Email',
      phoneLabel: 'Tel',
      addressLabel: 'Address',
      email: 'sanwa0401@outlook.com',
      phone: '06-6732-9050',
      phoneHref: '0667329050',
      address:
        'Room 402, Shin-Osaka Cosmo Building, 1-5-7 Higashinakajima, Higashiyodogawa-ku, Osaka-shi, Osaka, Japan',
    },
    footer: {
      services: 'Services',
      company: 'Company',
      contact: 'Contact',
      copyright: '© 2025 SANWA Co., Ltd. All Rights Reserved.',
    },
  },
  'zh-CN': {
    meta: {
      title: '三和株式会社 | SANWA',
      logo: 'SANWA',
      companyName: '三和株式会社',
    },
    nav: {
      home: '首页',
      services: '业务',
      about: '关于',
      contact: '联系',
      cta: '联系我们',
    },
    hero: {
      eyebrow: 'SANWA Co., Ltd. / 新大阪 / 电商与贸易',
      title: '连接日本与亚洲，\n支持电商业务成长。',
      subtitle:
        '三和株式会社主要从事电商运营及宠物产品进出口，致力于连接日本与亚洲市场。',
      primaryCta: '查看业务内容',
      secondaryCta: '联系我们',
      visualLabel: '业务领域',
      visualTitle: '从电商运营、宠物产品进出口到跨境业务，我们一步一步细致推进。',
      visualItems: ['电商运营', '宠物产品进出口', '跨境电商相关业务'],
    },
    services: {
      label: '业务内容',
      title: '轻盈、清晰、可靠的业务支持。',
      description: '我们连接线上销售与产品理解，帮助品牌建立进入下一市场的运营基础。',
      items: [
        {
          title: '跨境电商支持',
          description: '支持 TikTok、Amazon 等平台运营，帮助产品进入更广阔的市场。',
          tags: ['跨境电商', '销售渠道', '市场拓展'],
          image: serviceImages.crossBorder,
          imageAlt: 'TikTok 与 Amazon 的 3D 显示器图标',
        },
        {
          title: '日本平台运营',
          description: '支持 Rakuten、Yahoo! Japan 等日本主流平台的店铺运营、页面优化和销售路径设计。',
          tags: ['店铺运营', '商品页面', '销售支持'],
          image: serviceImages.marketplace,
          imageAlt: 'Rakuten 与 Yahoo! Japan 的 3D 显示器图标',
        },
        {
          title: '宠物用品与生活方式',
          description: '围绕宠物用品与生活方式产品，提供选品、运营和品牌化支持。',
          tags: ['宠物用品', '商品选品', '品牌化'],
          image: serviceImages.pet,
          imageAlt: '小狗与小猫的 3D 显示器图标',
        },
      ],
    },
    values: {
      label: '价值观',
      title: '我们重视的事',
      items: [
        { title: '理解日本市场', description: '结合日本市场的品质意识与购买路径，细致设计销售方案。' },
        { title: '连接亚洲市场', description: '面向日本及亚洲市场，连接商品流通与线上销售。' },
        { title: '灵活电商运营', description: '以务实的运营体制，持续应对线上市场变化。' },
        { title: '清晰推进流程', description: '将复杂的跨境运营整理为更容易沟通和执行的流程。' },
      ],
    },
    about: {
      label: '关于我们',
      title: '关于 SANWA',
      body:
        '三和株式会社是一家位于日本的综合运营公司，专注于跨境电商、日本平台运营、宠物用品与生活方式产品。我们相信好的产品需要稳定、细致、长期的运营支持，也相信商业可以更简单、更温和、更可靠。',
      points: ['日本・新大阪', '成立于 2025 年', '电商运营', '宠物用品与生活方式'],
    },
    contact: {
      label: '联系我们',
      title: '一起走向下一个市场。',
      description: '如果你正在寻找日本平台运营、跨境电商支持或宠物用品相关合作，欢迎联系我们。',
      cta: '联系我们',
      emailLabel: '邮箱',
      phoneLabel: '电话',
      addressLabel: '地址',
      email: 'sanwa0401@outlook.com',
      phone: '06-6732-9050',
      phoneHref: '0667329050',
      address: '大阪府大阪市东淀川区东中岛1-5-7 新大阪Cosmo大楼402室',
    },
    footer: {
      services: '业务',
      company: '公司',
      contact: '联系',
      copyright: '© 2025 SANWA Co., Ltd. 版权所有。',
    },
  },
  'zh-TW': {
    meta: {
      title: '三和株式會社 | SANWA',
      logo: 'SANWA',
      companyName: '三和株式會社',
    },
    nav: {
      home: '首頁',
      services: '業務',
      about: '關於',
      contact: '聯絡',
      cta: '聯絡我們',
    },
    hero: {
      eyebrow: 'SANWA Co., Ltd. / 新大阪 / 電商與貿易',
      title: '連接日本與亞洲，\n支持電商業務成長。',
      subtitle:
        '三和株式會社主要從事電商營運及寵物產品進出口，致力於連接日本與亞洲市場。',
      primaryCta: '查看業務內容',
      secondaryCta: '聯絡我們',
      visualLabel: '業務領域',
      visualTitle: '從電商營運、寵物產品進出口到跨境業務，我們一步一步細緻推進。',
      visualItems: ['電商營運', '寵物產品進出口', '跨境電商相關業務'],
    },
    services: {
      label: '業務內容',
      title: '輕盈、清晰、可靠的業務支援。',
      description: '我們連接線上銷售與產品理解，協助品牌建立進入下一個市場的營運基礎。',
      items: [
        {
          title: '跨境電商支援',
          description: '支援 TikTok、Amazon 等平台營運，協助產品進入更廣闊的市場。',
          tags: ['跨境電商', '銷售渠道', '市場拓展'],
          image: serviceImages.crossBorder,
          imageAlt: 'TikTok 與 Amazon 的 3D 顯示器圖示',
        },
        {
          title: '日本平台營運',
          description: '支援 Rakuten、Yahoo! Japan 等日本主流平台的店鋪營運、頁面優化與銷售路徑設計。',
          tags: ['店鋪營運', '商品頁面', '銷售支援'],
          image: serviceImages.marketplace,
          imageAlt: 'Rakuten 與 Yahoo! Japan 的 3D 顯示器圖示',
        },
        {
          title: '寵物用品與生活風格',
          description: '圍繞寵物用品與生活風格產品，提供選品、營運與品牌化支援。',
          tags: ['寵物用品', '商品選品', '品牌化'],
          image: serviceImages.pet,
          imageAlt: '小狗與小貓的 3D 顯示器圖示',
        },
      ],
    },
    values: {
      label: '價值觀',
      title: '我們重視的事',
      items: [
        { title: '理解日本市場', description: '結合日本市場的品質意識與購買路徑，細緻設計銷售方案。' },
        { title: '連接亞洲市場', description: '面向日本及亞洲市場，連接商品流通與線上銷售。' },
        { title: '靈活電商營運', description: '以務實的營運體制，持續應對線上市場變化。' },
        { title: '清晰推進流程', description: '將複雜的跨境營運整理為更容易溝通和執行的流程。' },
      ],
    },
    about: {
      label: '關於我們',
      title: '關於 SANWA',
      body:
        '三和株式會社是一家位於日本的綜合營運公司，專注於跨境電商、日本平台營運、寵物用品與生活風格產品。我們相信好的產品需要穩定、細緻、長期的營運支援，也相信商業可以更簡單、更溫和、更可靠。',
      points: ['日本・新大阪', '成立於 2025 年', '電商營運', '寵物用品與生活風格'],
    },
    contact: {
      label: '聯絡我們',
      title: '一起走向下一個市場。',
      description: '如果你正在尋找日本平台營運、跨境電商支援或寵物用品相關合作，歡迎與我們聯絡。',
      cta: '聯絡我們',
      emailLabel: '電子郵件',
      phoneLabel: '電話',
      addressLabel: '地址',
      email: 'sanwa0401@outlook.com',
      phone: '06-6732-9050',
      phoneHref: '0667329050',
      address: '大阪府大阪市東淀川區東中島1-5-7 新大阪Cosmo大樓402室',
    },
    footer: {
      services: '業務',
      company: '公司',
      contact: '聯絡',
      copyright: '© 2025 SANWA Co., Ltd. 版權所有。',
    },
  },
};
