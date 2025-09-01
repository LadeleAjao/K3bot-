const features = {
  starter: [
    {
      Headings: "5,000 Audience Management",
      Wordings:
        "Standard / custom attributes, advanced filters, segmentation, tags, notes, orders",
    },
    {
      Headings: "3 Users Access",
      Wordings: "Additional user @ ₦3000/year",
    },
    {
      Headings: "Unlimited Broadcasting",
      Wordings: "Via K3BOT Scheduler & APIs",
    },
    {
      Headings: "Advance Chatflow Builder",
      Wordings:
        "Collect data, trigger automation, route chats, integrate CRM, get alerts, write attributes, jump b/w flows",
    },
    {
      Headings: "Auto Message Campaigns",
      Wordings: "Trigger-based campaigns",
    },
    {
      Headings: "Chat Inbox",
      Wordings:
        "Role-based / round robin chats and lead assignment, quick replies, agent/team performance insights, marking important, tickets system",
    },
    {
      Headings: "Catalog Ordering",
      Wordings:
        "WhatsApp catalog, cart system, payment gateway, Shopify integration, shipping",
    },
    {
      Headings: "Calls Tracking",
      Wordings: "Up to 2 phones",
    },
    {
      Headings: "Integrations",
      Wordings:
        "Facebook, Instagram, Shopify, WooCommerce, Zoom, Google Sheet, 25 more...",
    },
    {
      Headings: "WhatsApp Charges",
      Wordings: "Marketing: ₦0.85, Utility & Authentication: ₦0.14",
    },
  ],

  starterPlus: [
    {
      Headings: "20,000 Audience Management",
      Wordings:
        "Standard / custom attributes, advanced filters, segmentation, tags, notes, orders",
    },
    {
      Headings: "6 Users Access",
      Wordings: "Additional user @ ₦3000/year",
    },
    {
      Headings: "Unlimited Broadcasting",
      Wordings: "Via K3BOT Scheduler & APIs, bulk campaign APIs",
    },
    {
      Headings: "Advance Chatflow Builder",
      Wordings:
        "Collect data, trigger automation, route chats, integrate CRM, get alerts, write attributes, jump b/w flows",
    },
    {
      Headings: "Auto Message Campaigns",
      Wordings: "Trigger-based campaigns",
    },
    {
      Headings: "Chat Inbox",
      Wordings:
        "Role-based / round robin chats and lead assignment, quick replies, agent/team performance insights, marking important, tickets system",
    },
    {
      Headings: "Catalog Ordering",
      Wordings:
        "WhatsApp catalog, cart system, payment gateway, Shopify integration, shipping",
    },
    {
      Headings: "Calls Tracking",
      Wordings: "Up to 5 phones",
    },
    {
      Headings: "Integrations",
      Wordings:
        "Facebook, Instagram, Shopify, WooCommerce, Zoom, Google Sheet, 25 more...",
    },
    {
      Headings: "WhatsApp Charges",
      Wordings: "Marketing: ₦0.85, Utility & Authentication: ₦0.14",
    },
  ],

  premium: [
    {
      Headings: "100,000 Audience Management",
      Wordings:
        "Standard / custom attributes, advanced filters, segmentation, tags, notes, orders",
    },
    {
      Headings: "20 Users Access",
      Wordings: "Additional user @ ₦2500/year",
    },
    {
      Headings: "Unlimited Broadcasting",
      Wordings: "Via K3BOT Scheduler & APIs, Bulk APIs",
    },
    {
      Headings: "Advance Chatflow Builder",
      Wordings:
        "Collect data, trigger automation, route chats, integrate CRM, get alerts, write attributes, jump b/w flows",
    },
    {
      Headings: "Auto Message Campaigns",
      Wordings: "Trigger-based campaigns",
    },
    {
      Headings: "Chat Inbox",
      Wordings:
        "Role-based / round robin chats and lead assignment, quick replies, agent/team performance insights, marking important, tickets system",
    },
    {
      Headings: "Catalog Ordering",
      Wordings:
        "WhatsApp catalog, cart system, payment gateway, Shopify integration, shipping",
    },
    {
      Headings: "Calls Tracking",
      Wordings: "Up to 20 phones",
    },
    {
      Headings: "Integrations",
      Wordings:
        "Facebook, Instagram, Shopify, WooCommerce, Zoom, Google Sheet, 25 more...",
    },
    {
      Headings: "WhatsApp Charges",
      Wordings: "Marketing: ₦0.85, Utility & Authentication: ₦0.14",
    },
  ],
};


export const PricingPlan = {
  monthly: {
    starter: {
      price: 30000,
      features: features.starter,
    },
    starterPlus: {
      price: 40000,
      features: features.starterPlus,
    },
    premium: {
      price: 100000,
      features: features.premium,
    },
  },
  quarterly: {
    starter: {
      price: 28000,
      features: features.starter,
    },
    starterPlus: {
      price: 38000,
      features: features.starterPlus,
    },
    premium: {
      price: 93000,
      features: features.premium,
    },
  },
};

export const faq = {
  faqs: [
    {
      heading: "How does K3BOT charge me?",
      body: "WhatsApp charges you based on Conversations, not per message. A WhatsApp conversation is defined as a 24-hour period starting from the first business message sent to the user. Within this 24-hour conversation period, you can exchange unlimited messages with the user, but you will only be charged once for that period.\n\nThe cost of a conversation depends on the type of conversation initiated by your business or the user. Below are the charges and details for different conversation types:\n\nMarketing conversation (₦0.85): includes promotional, announcement messages\nUtility conversations (₦0.14): includes transactional, follow-up, and update messages\nAuthentication conversation (₦0.14): includes one-time passcode (OTP) messages\n\nThe above conversation charges are deducted from your K3BOT prepaid wallet.",
    },
    {
      heading: "How do WhatsApp messaging charges work?",
      body: "WhatsApp charges you based on Conversations. A WhatsApp conversation is defined as a 24-hour period starting from the first business message sent to the user. During this period, you can exchange unlimited messages with the user and will only be charged once for that conversation.\n\nCharges vary by conversation type:\n\nMarketing conversation (₦0.85): includes promotional, announcement messages\nUtility conversations (₦0.14): includes transactional, follow-up, and update messages\nAuthentication conversation (₦0.14): includes one-time passcode (OTP) messages\n\nThese charges are automatically deducted from your K3BOT prepaid wallet.",
    },
    {
      heading: "Is there any charge for using WhatsApp payment with K3BOT?",
      body: "K3BOT allows you to collect payments from users directly through WhatsApp Payment APIs. Our team will assist you in integrating WhatsApp Payments with your preferred Nigerian payment gateway (such as Paystack or Flutterwave). There is no additional fee from K3BOT for using this feature.",
    },
    {
      heading: "Can I use an existing WhatsApp number with K3BOT?",
      body: "Yes, you can use your existing WhatsApp number with K3BOT. For a regular WhatsApp number: you may need to delete your WhatsApp account for that number before applying for the API. For an existing WhatsApp API number: if the number is with another provider, it can be migrated to K3BOT once the 2 Factor Authentication (2FA) PIN is disabled by your current provider. After migration, the number will work on K3BOT (dashboard and mobile app) only. Normal voice calls will still work, but WhatsApp voice and video calls are not supported via the API.",
    },
    {
      heading: "How to add/recharge WhatsApp credit balance?",
      body: "You can add a balance of ₦5,000 or above from your K3BOT dashboard under App Settings > WhatsApp Credit.",
    },
    {
      heading: "How can I see my credit usage?",
      body: "You can check your WhatsApp API credit usage from your dashboard under App Settings > WhatsApp Credits. You can also view detailed usage by month, conversation type, and country.",
    },
    {
      heading: "What is the minimum credit balance to be maintained?",
      body: "There is no required minimum balance, but your WhatsApp API will stop working once your credit balance reaches ₦0.",
    },
    {
      heading: "Can I get a refund?",
      body: "Subscription charges and WhatsApp conversation charges are non-refundable. Refunds are only possible if the WhatsApp API fails to start on the dashboard.",
    },
  ],
};


export const plans = {
  starter: features.starter,
  starterPlus: features.starterPlus,
  premium: features.premium,
};
