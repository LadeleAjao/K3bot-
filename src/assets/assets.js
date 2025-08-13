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
        "Facebook, Instagram, Shopify, WooCommerce, Indiamart, JustDial, TradeIndia, Zoom, Google Sheet, 25 more...",
    },
    {
      Headings: "WhatsApp Charges",
      Wordings: "Marketing: 85 paisa, Utility & Authentication: 14 paisa",
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
        "Facebook, Instagram, Shopify, WooCommerce, Indiamart, JustDial, TradeIndia, Zoom, Google Sheet, 25 more...",
    },
    {
      Headings: "WhatsApp Charges",
      Wordings: "Marketing: 85 paisa, Utility & Authentication: 14 paisa",
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
        "Facebook, Instagram, Shopify, WooCommerce, Indiamart, JustDial, TradeIndia, Zoom, Google Sheet, 25 more...",
    },
    {
      Headings: "WhatsApp Charges",
      Wordings: "Marketing: 85 paisa, Utility & Authentication: 14 paisa",
    },
  ],
};

export const PricingPlan = {
  annually: {
    starter: {
      price: 1500,
      features: features.starter,
    },
    starterPlus: {
      price: 3000,
      features: features.starterPlus,
    },
    premium: {
      price: 7000,
      features: features.premium,
    },
  },
  quarterly: {
    starter: {
      price: 450,
      features: features.starter,
    },
    starterPlus: {
      price: 900,
      features: features.starterPlus,
    },
    premium: {
      price: 2200,
      features: features.premium,
    },
  },
};

export const faq = {
  faqs: [
    {
      heading: "How does K3BOT charge me?",
      body: "Instead of charging on a per-message basis, WhatsApp charges you based on Conversations. A WhatsApp conversation is defined as a 24-hour period starting from the first business message sent to the user. During this 24-hour conversation period, you can exchange any number of messages with the user, and you will only be charged once for that period.\n\nThe cost of a conversation depends on the type of conversation initiated by your business or user. Below are the charges and details for different conversation types:\n\nMarketing conversation (₦0.85): include promotional, announcement messages\nUtility conversations (₦0.14): include transactional, follow up and update messages\nAuthentication conversation (₦0.14): include one-time-passcode (OTP) messages\n\nThe above conversation charges are deducted from your K3BOT prepaid wallet.",
    },
    {
      heading: "How does WhatsApp messaging charges work?",
      body: "Instead of charging on a per-message basis, WhatsApp charges you based on Conversations. A WhatsApp conversation is defined as a 24-hour period starting from the first business message sent to the user. During this 24-hour conversation period, you can exchange any number of messages with the user, and you will only be charged once for that period.\n\nThe cost of a conversation depends on the type of conversation initiated by your business or user. Below are the charges and details for different conversation types:\n\nMarketing conversation (₦0.85): include promotional, announcement messages\nUtility conversations (₦0.14): include transactional, follow up and update messages\nAuthentication conversation (₦0.14): include one-time-passcode (OTP) messages\n\nThe above conversation charges are deducted from your K3BOT prepaid wallet.",
    },
    {
      heading:
        "Is there any charge on using WhatsApp payment (with Razorpay / PayU) offered by WhatsApp APIs?",
      body: "K3BOT offers you to collect payments from users using WhatsApp Payment APIs. K3BOT executives will assist you in integrating WhatsApp API with your RazorPay or PayU account. There is no separate charge for using this feature with K3BOT.",
    },
    {
      heading: "Can I use an existing WhatsApp number with K3BOT?",
      body: "Yes, you can use your existing WhatsApp application number or existing WhatsApp API number with K3BOT. For WhatsApp application number: You may need to delete the WhatsApp account for the number you want to apply the APIs for. Account can be deleted from WhatsApp Settings under the WhatsApp application. For WhatsApp API number: If the number is being used by another Business API, you still can get it migrated to K3BOT after getting the 2 Factor Authorization (2FA) pin disabled from your current BSP. Once migrated to WhatsApp Business API and linked to K3BOT, the number can be accessed on K3BOT (dashboard and mobile app) only. If it is a virtual number that is tied to K3BOT, then normal voice calls can be made as usual, but WhatsApp voice and video calls cannot be supported via WhatsApp Business API.",
    },
    {
      heading: "How to add/recharge WhatsApp credit balance?",
      body: "You can add a balance of ₦5000 or above from your dashboard under App settings > WhatsApp credit.",
    },
    {
      heading: "How can I see my credit usage?",
      body: "You can view your WhatsApp API credit usage in your dashboard under App Settings > WhatsApp credits. In the section you may see credits usage every month by conversation type & country wise.",
    },
    {
      heading: "What is the minimum credit balance to be maintained?",
      body: "There is no such minimum balance required, but your WhatsApp API will stop working once the credit balance reaches ₦0.",
    },
    {
      heading: "Can I get a refund?",
      body: "Subscription charges and WhatsApp conversation charges are non-refundable. You are eligible to request a refund only if the WhatsApp API fails to start on the dashboard.",
    },
  ],
};

export const plans = {
  starter: features.starter,
  starterPlus: features.starterPlus,
  premium: features.premium,
};
