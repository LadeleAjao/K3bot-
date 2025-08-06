
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

export const plans = {
  starter: features.starter,
  starterPlus: features.starterPlus,
  premium: features.premium,
};
