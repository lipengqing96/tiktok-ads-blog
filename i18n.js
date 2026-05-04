/**
 * Site copy: Chinese (default) and English.
 * Keys are referenced from index.html via data-i18n / data-i18n-html.
 */
(function () {
  window.I18N = {
    zh: {
      meta: {
        description:
          "TikTok 与 TikTok Ads 入门指南：平台特点、开户步骤、素材与落地页建议、指标与常见问题，以及官方充值入口说明。",
        title: "TikTok 营销指南 · TikTok Ads 介绍",
      },
      a11y: {
        mainNav: "主导航",
        openMenu: "打开菜单",
        langGroup: "语言",
      },
      nav: {
        about: "认识 TikTok",
        ads: "TikTok Ads",
        steps: "入门步骤",
        creative: "素材建议",
        metrics: "指标解读",
        faq: "常见问题",
        cta: "充值入口",
      },
      hero: {
        eyebrow: "短视频营销 · 全球触达",
        titleHtml:
          '用 TikTok Ads 把内容<span class="hero-highlight">变成增长</span>',
        lead:
          "本站面向想了解 TikTok 商业推广的个人与团队：从平台特点到广告账户与充值路径，帮助你更快上手。",
        ctaPrimary: "前往 TikTok Ads 充值",
        ctaSecondary: "先读介绍",
        disclosure:
          "本站含推广链接；若你通过本站链接完成指定行为，本站可能获得联盟佣金，不影响你的官方价格。",
        statLabel: "全球月活用户量级",
        statValue: "10 亿+",
        statNote: "数据来源为公开报道口径，仅作背景说明。",
      },
      about: {
        h2: "认识 TikTok",
        p1:
          "TikTok 是以短视频为核心的内容平台，用户通过竖屏信息流消费内容，算法根据兴趣分发。对品牌与创作者而言，这意味着有机会在相对短的时间内触达大量潜在受众，尤其适合新品曝光、活动造势与效果类投放的组合策略。",
        p2Html:
          "若你计划投放广告，通常会在 <strong>TikTok Ads（TikTok For Business）</strong> 中管理账户、创意与预算；充值与账单规则以 TikTok 官方当前说明为准，请以登录后台后的提示为准。",
      },
      ads: {
        h2: "TikTok Ads 能做什么",
        f1h: "多样广告形态",
        f1p:
          "信息流、挑战赛、品牌定制等多种形态，可按目标选择曝光、点击、转化等优化方式。",
        f2h: "定向与素材",
        f2p:
          "结合地域、兴趣、人群包与创意测试，持续迭代素材与落地页，提升投放效率。",
        f3h: "账户与结算",
        f3p:
          "在商务后台完成认证、绑定支付方式或预付充值；具体门槛与政策以官方为准。",
      },
      why: {
        h2: "为什么值得认真了解",
        p1:
          "短视频消费习惯已经深度渗透多个市场；提前理解平台逻辑与广告产品，有助于减少试错成本。本站目的是提供<strong>入门框架</strong>与<strong>可信入口</strong>，具体投放 ROI 取决于行业、素材、落地页与预算节奏。",
      },
      steps: {
        h2: "从 0 到首笔投放：常见路径",
        intro:
          "各地政策与界面可能更新，以下顺序帮助你理清「通常要先做什么」，实际以官方后台与客服指引为准。",
        s1h: "注册商务身份",
        s1p:
          "使用 TikTok For Business 完成广告主注册；准备好主体资质、联系邮箱与合规说明，便于一次通过审核。",
        s2h: "明确推广目标",
        s2p:
          "先定义 KPI（曝光、安装、线索、购买等），再选对应的推广系列类型；目标不一致会导致后续优化「越调越乱」。",
        s3h: "准备追踪与落地页",
        s3p:
          "为网站或应用配置 Pixel / SDK / MMP 等追踪方式（以官方支持列表为准），并确保落地页加载快、移动端可用。",
        s4h: "小额测试，再放大",
        s4p:
          "用多组素材做 A/B，观察成本与转化后再逐步加预算；避免首日用大预算「赌一条素材」。",
        s5h: "充值与账单",
        s5p:
          "在账户中绑定支付方式或按官方流程预付；发票、结算周期与退款规则以 TikTok 当前条款为准。",
      },
      creative: {
        h2: "素材与落地页：常被忽视的加分项",
        c1h: "短视频素材",
        c1l1: "前 1～3 秒给出清晰利益点或悬念，减少「划走」。",
        c1l2: "竖屏 9:16 为主，字幕尽量大，静音场景也能看懂。",
        c1l3: "同一卖点准备多种剪辑节奏与封面，方便算法找到最优组合。",
        c2h: "落地页与信任",
        c2l1: "首屏与广告承诺一致，避免「标题党」导致跳出率高。",
        c2l2: "突出退换货、隐私政策、客服入口，降低用户决策成本。",
        c2l3: "定期用手机实测加载速度与表单流程，修复失效链接。",
        calloutHtml:
          "<strong>合规提示：</strong>涉及特殊行业（金融、医疗、博彩等）时，素材与落地页往往有额外限制；投放前请查阅你所在市场的广告政策，必要时咨询官方支持。",
      },
      metrics: {
        h2: "读懂常见指标",
        pHtml:
          "不同广告目标下「好看」的指标不一样：做品牌曝光可能更关注覆盖与频次；做效果可能更关注<strong>单次转化成本</strong>、<strong>ROAS</strong> 与<strong>增量贡献</strong>（是否带来额外增量，而不是自然流量也能完成的转化）。建议固定每周复盘节奏：素材生命周期、受众饱和信号、以及季节性波动。",
      },
      faq: {
        h2: "常见问题",
        q1s: "个人账户能直接投 TikTok Ads 吗？",
        q1p:
          "通常需要以企业或符合条件的广告主身份开通商务账户；具体要求以注册流程中的说明为准。若你只有个人创作者身份，可先了解「创作者商业化」相关产品与政策是否匹配你的目标。",
        q2s: "充值后余额可以退吗？",
        q2p:
          "预付款与退款规则因地区、签约主体与活动条款而异，请在后台账单或帮助中心查阅最新说明，或联系官方支持获取书面答复。",
        q3s: "为什么投放前几天成本波动很大？",
        q3p:
          "新系列与学习期通常存在波动，算法在积累转化信号。若长期无转化，优先排查追踪是否准确、落地页是否顺畅、素材是否与受众匹配，而不是仅调高出价。",
        q4s: "如何防范钓鱼与假冒充值页面？",
        q4p:
          "请核对浏览器地址栏域名是否为 TikTok 官方或你书面确认的合作伙伴；不要通过陌生私信下载安装包或转账。本站按钮亦应在你确认目标域名可信后再使用。",
      },
      cta: {
        h2: "准备为 TikTok Ads 账户充值？",
        p:
          "点击下方按钮将前往 TikTok 官方广告相关流程（链接由你配置的邀请地址决定）。若你是首次开户，请按页面指引完成资质与支付方式设置。",
        button: "打开 TikTok Ads 充值 / 邀请链接",
        disclosureHtml:
          "<strong>透明说明：</strong>本站作者可能通过广告联盟获得邀请奖励。请始终核对域名是否为 TikTok 官方或你信任的合作伙伴页面，谨防钓鱼链接。",
      },
      footer: {
        brand: "TikTokGuide · 独立介绍页",
        note:
          "内容与数据仅供学习参考；TikTok、TikTok Ads 及相关标识归各自权利人所有。",
      },
    },
    en: {
      meta: {
        description:
          "Intro to TikTok and TikTok Ads: how the platform works, onboarding steps, creative and landing-page tips, metrics, FAQs, and official top-up guidance.",
        title: "TikTok Marketing Guide · TikTok Ads",
      },
      a11y: {
        mainNav: "Main navigation",
        openMenu: "Open menu",
        langGroup: "Language",
      },
      nav: {
        about: "About TikTok",
        ads: "TikTok Ads",
        steps: "Getting started",
        creative: "Creatives",
        metrics: "Metrics",
        faq: "FAQ",
        cta: "Top up",
      },
      hero: {
        eyebrow: "Short video · global reach",
        titleHtml:
          'Turn content into <span class="hero-highlight">growth</span> with TikTok Ads',
        lead:
          "For individuals and teams exploring TikTok for business: from how the platform works to ad accounts and top-up paths—so you can get started faster.",
        ctaPrimary: "Go to TikTok Ads top-up",
        ctaSecondary: "Read the overview",
        disclosure:
          "This site may use promotional links. If you complete certain actions through our links, we may earn an affiliate commission. This does not change official pricing for you.",
        statLabel: "Global MAU (order of magnitude)",
        statValue: "1B+",
        statNote: "Illustrative figure from public reporting; for background only.",
      },
      about: {
        h2: "About TikTok",
        p1:
          "TikTok is a short-form video platform where people consume a vertical, algorithmic feed. For brands and creators, that can mean reaching large audiences relatively quickly—useful for launches, campaigns, and performance objectives working together.",
        p2Html:
          "If you plan to advertise, you typically manage accounts, creatives, and budgets in <strong>TikTok Ads (TikTok For Business)</strong>. Top-up and billing rules follow TikTok’s current documentation—always confirm in the dashboard after you sign in.",
      },
      ads: {
        h2: "What TikTok Ads can do",
        f1h: "Many ad formats",
        f1p:
          "In-feed, branded challenges, and more—optimize for reach, clicks, conversions, or other goals that match your objective.",
        f2h: "Targeting & creatives",
        f2p:
          "Combine geography, interests, audience lists, and creative tests; iterate on ads and landing pages to improve efficiency.",
        f3h: "Account & billing",
        f3p:
          "Complete verification in the business dashboard and add a payment method or prepaid balance; eligibility and policies are defined by TikTok.",
      },
      why: {
        h2: "Why it’s worth learning properly",
        p1:
          "Short-video habits are entrenched across many markets; understanding the platform early helps reduce costly trial and error. This site offers a <strong>starter framework</strong> and <strong>trusted entry points</strong>. Actual ROI depends on your industry, creatives, landing pages, and budget pacing.",
      },
      steps: {
        h2: "From zero to your first campaigns",
        intro:
          "Policies and interfaces change by region. The sequence below is a practical checklist—always follow your dashboard and official support.",
        s1h: "Register your business identity",
        s1p:
          "Sign up via TikTok For Business as an advertiser; have entity documents, a contact email, and compliance details ready for a smoother review.",
        s2h: "Define your objective",
        s2p:
          "Set KPIs (reach, installs, leads, purchases, etc.) before picking campaign types—misaligned goals make optimization harder later.",
        s3h: "Set up tracking & landing pages",
        s3p:
          "Implement Pixel, SDK, or MMP tracking as supported, and make sure landing pages load fast and work on mobile.",
        s4h: "Test small, then scale",
        s4p:
          "Run A/B tests on creatives, watch cost and conversions, then increase budget—avoid betting your whole budget on one asset on day one.",
        s5h: "Top-up & statements",
        s5p:
          "Link a payment method or prepay per official flows; invoices, settlement cycles, and refunds follow TikTok’s current terms.",
      },
      creative: {
        h2: "Creatives & landing pages: easy wins",
        c1h: "Short video creatives",
        c1l1:
          "In the first 1–3 seconds, show a clear benefit or hook to reduce scroll-away.",
        c1l2:
          "Prefer vertical 9:16, large captions, and clarity even when sound is off.",
        c1l3:
          "Produce multiple cuts and covers for the same offer so the system can find the best mix.",
        c2h: "Landing pages & trust",
        c2l1:
          "Match the first screen to the ad promise—avoid clickbait that spikes bounce rate.",
        c2l2:
          "Surface returns, privacy policy, and support paths to lower decision friction.",
        c2l3:
          "Periodically test load speed and forms on real phones and fix broken links.",
        calloutHtml:
          "<strong>Compliance:</strong> regulated industries (finance, health, gambling, etc.) often have extra creative and landing-page rules—check policies for your market and contact official support if needed.",
      },
      metrics: {
        h2: "Reading common metrics",
        pHtml:
          'What “good” looks like depends on your goal: brand campaigns may focus on reach and frequency; performance campaigns often emphasize <strong>cost per conversion</strong>, <strong>ROAS</strong>, and <strong>incrementality</strong> (incremental outcomes beyond what organic traffic would deliver). Review weekly: creative fatigue, audience saturation, and seasonality.',
      },
      faq: {
        h2: "FAQ",
        q1s: "Can I run TikTok Ads with a personal account?",
        q1p:
          "You usually need a business or eligible advertiser account—requirements are shown during signup. If you’re only a creator, explore creator monetization products and policies to see if they fit your goal.",
        q2s: "Can I get a refund of my balance?",
        q2p:
          "Prepayment and refund rules vary by region, contracting entity, and offer terms. Check billing / help center or ask official support for a written answer.",
        q3s: "Why are costs so volatile in the first days?",
        q3p:
          "New campaigns and learning phases fluctuate while the system gathers signals. If conversions stay absent, check tracking, landing pages, and audience fit before only raising bids.",
        q4s: "How do I avoid phishing or fake top-up pages?",
        q4p:
          "Verify the domain in your browser bar is TikTok official or a partner you confirmed in writing. Don’t install apps or wire money from unsolicited messages. Only use this site’s buttons after you trust the destination.",
      },
      cta: {
        h2: "Ready to add funds to TikTok Ads?",
        p:
          "The button below opens TikTok’s ad flows (URL is set by your configured referral link). If you’re new, follow on-page steps for verification and payment setup.",
        button: "Open TikTok Ads top-up / invite link",
        disclosureHtml:
          "<strong>Transparency:</strong> the author may earn referral rewards via affiliate programs. Always verify domains against TikTok official or partners you trust—watch for phishing.",
      },
      footer: {
        brand: "TikTokGuide · independent overview",
        note:
          "Content is for learning only. TikTok, TikTok Ads, and related marks belong to their respective owners.",
      },
    },
  };
})();
