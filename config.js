module.exports = {
  // ============================================
  // EDIT THIS FILE TO CONFIGURE YOUR PSEO SITE
  // ============================================

  // Site basics
  siteName: "SEO Mentor",
  domain: "seomentorpro.com",
  niche: "SEO mentorship programs",
  nicheDescription: "Learn SEO from experts with structured mentorship programs designed to grow your organic traffic",

  // Primary modifiers — the main variable (cities, categories, etc.)
  primaryModifiers: [
    "beginners",
    "freelancers",
    "agency owners",
    "e-commerce brands",
    "B2B companies",
    "content creators",
    "startups",
    "local businesses",
    "bloggers",
    "SaaS companies",
  ],

  // Secondary modifiers — subcategories or filters
  secondaryModifiers: [
    "for technical SEO",
    "for link building",
    "for content strategy",
    "for local SEO",
    "for programmatic SEO",
  ],

  // Which content types to generate
  contentTypes: {
    directoryItem: true,   // Individual program reviews
    listicle: true,        // Roundups (e.g. "Best SEO Mentorship Programs for Beginners")
    comparison: true,      // Versus comparisons
    blog: true,            // SEO guides and tutorials
  },

  // Example items for directory entries
  directoryItems: [
    "Authority Hacker Pro",
    "Gotch SEO Academy",
    "SEO That Works",
    "The Blueprint Training",
    "Surfer SEO Course",
  ],

  // Blog topic ideas
  blogTopics: [
    "How to Choose the Right SEO Mentorship Program",
    "SEO Mentorship vs Self-Learning: What Works Faster",
    "How Long Does It Take to See SEO Results",
    "The ROI of Investing in an SEO Mentor",
    "Technical SEO Checklist for Beginners",
  ],

  // Design
  colors: {
    primary: "#7c3aed",
    accent: "#6d28d9",
  },

  // Analytics (add your GA4 measurement ID)
  analytics: {
    gaId: "",
  },
};
