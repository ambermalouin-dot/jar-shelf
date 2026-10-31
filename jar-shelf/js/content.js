// Every word visitors see. Copied from docs/CONTENT.md.
// To change wording: edit docs/CONTENT.md first, then update it here to match.

export const SITE = {
  name: "The Jar Shelf",
  tagline: "A cozy shelf where you leave a note and find one you needed.",
};

// The 6 jars. "key" matches the jar names the database will use later.
export const JARS = [
  { key: "tonight", name: "Tonight's Jar", art: "./assets/svg/jars/jar-tonight.svg" },
  { key: "love", name: "Love & Relationships", art: "./assets/svg/jars/jar-love.svg" },
  { key: "family", name: "Family", art: "./assets/svg/jars/jar-family.svg" },
  { key: "work_school", name: "Work & School", art: "./assets/svg/jars/jar-work-school.svg" },
  { key: "worries", name: "Worries", art: "./assets/svg/jars/jar-worries.svg" },
  { key: "small_wins", name: "Small Wins", art: "./assets/svg/jars/jar-small-wins.svg" },
];

export const SHELF = {
  clusterButton: "Open the jars",
  tonightDateLine: "Tonight · {date}",
  promptChangesNote: "A new question every morning.",
  recordPlayerLabel: "Record Player",
};

export const HEADER = {
  lanternLabel: "Lantern: get help now",
  drawerLabel: "Drawer: settings, rules, and your notes",
};

export const NOTES = {
  keeperLabel: "from the shelf keeper",
  stampAlt: {
    moon: "moon stamp",
    teacup: "teacup stamp",
    fern: "fern stamp",
    star: "star stamp",
    crane: "paper crane stamp",
  },
};

// A word for the close buttons (not in CONTENT.md yet; add it there if you like).
export const UI = {
  close: "Close",
};

export const DRAWER = {
  houseRulesHeading: "House rules",
};

export const HOUSE_RULES = [
  { title: "Be kind.", text: "Everyone here is carrying something, even if their note is about something small." },
  { title: "Encourage, don't lecture.", text: "Replies are for support, not advice, debates, or judgment." },
  { title: "Stay anonymous.", text: "No names, usernames, phone numbers, emails, links, or anything that could identify you or someone else." },
  { title: "No hate or harassment.", text: "No slurs, attacks, or mocking anyone for who they are." },
  { title: "No threats.", text: "Notes that threaten anyone won't be posted." },
  { title: "Adults only.", text: "The Jar Shelf is for people 18 and older." },
  { title: "This isn't a crisis line.", text: "The site isn't watched live. If you need help now, open the Lantern." },
  { title: "Notes are read first.", text: "A real person reads every note and reply before it appears. Some won't be placed, and that's okay." },
  { title: "Report what feels wrong.", text: "If a note breaks these rules, tap Report. It's anonymous." },
];

// ---------------------------------------------------------------------
// LANTERN. [VERIFY every number before launch.]
// "text" is the line from CONTENT.md. "actions" are the tap-to-call and
// tap-to-text buttons (tel: starts a call, sms: opens a text message).
// ---------------------------------------------------------------------
export const LANTERN = {
  header: "If you need someone right now",
  intro: "These are free, confidential, and open 24/7 unless noted. You don't have to be in crisis to reach out.",
  resources: [
    {
      emergency: true,
      text: "If you or someone else is in danger right now, call 911.",
      actions: [{ label: "Call 911", href: "tel:911" }],
    },
    {
      name: "988 Suicide & Crisis Lifeline",
      text: "Call or text 988, or chat at 988lifeline.org.",
      actions: [
        { label: "Call 988", href: "tel:988" },
        { label: "Text 988", href: "sms:988" },
        { label: "Chat at 988lifeline.org", href: "https://988lifeline.org", external: true },
      ],
    },
    {
      name: "Veterans Crisis Line",
      text: "Call 988 and press 1, or text 838255.",
      actions: [
        { label: "Call 988", href: "tel:988" },
        { label: "Text 838255", href: "sms:838255" },
      ],
    },
    {
      name: "Crisis Text Line",
      text: "Text HOME to 741741.",
      actions: [{ label: "Text HOME to 741741", href: "sms:741741?&body=HOME" }],
    },
    {
      name: "The Trevor Project",
      detail: "LGBTQ+ young people under 25",
      text: "Call 1-866-488-7386 or text START to 678-678.",
      actions: [
        { label: "Call 1-866-488-7386", href: "tel:18664887386" },
        { label: "Text START to 678-678", href: "sms:678678?&body=START" },
      ],
    },
    {
      name: "National Domestic Violence Hotline",
      text: "Call 1-800-799-7233 or text START to 88788.",
      actions: [
        { label: "Call 1-800-799-7233", href: "tel:18007997233" },
        { label: "Text START to 88788", href: "sms:88788?&body=START" },
      ],
    },
    {
      name: "RAINN National Sexual Assault Hotline",
      text: "Call 1-800-656-4673.",
      actions: [{ label: "Call 1-800-656-4673", href: "tel:18006564673" }],
    },
    {
      name: "SAMHSA National Helpline",
      detail: "mental health and substance use support and referrals",
      text: "Call 1-800-662-4357.",
      actions: [{ label: "Call 1-800-662-4357", href: "tel:18006624357" }],
    },
  ],
  footer: "The Jar Shelf isn't a crisis service and isn't watched live. These people are trained to help, and they want to hear from you.",
  // Amber: type the date you last checked every number, like "March 3, 2027".
  // While this is empty, the "Last checked" line stays hidden.
  lastChecked: "",
  lastCheckedLabel: "Last checked: {date}",
};

// The 30 prompts for Tonight's Jar.
export const PROMPTS = [
  "What's something you're carrying today that no one knows about?",
  "What made you smile this week, even a little?",
  "What do you wish someone would say to you right now?",
  "What's a small thing that got you through today?",
  "What are you tired of pretending about?",
  "What's something you forgave yourself for?",
  "Who do you miss tonight?",
  "What's a worry you're ready to set down for one night?",
  "What's something you're proud of that you haven't told anyone?",
  "What does rest look like for you right now?",
  "What's a memory that still feels warm?",
  "What's something you're learning about yourself lately?",
  "What's a question you wish someone would ask you?",
  "What's one kind thing you did for yourself today?",
  "What's something hard you're getting through, slowly?",
  "What would you tell a younger you tonight?",
  "What's a place where you feel safe?",
  "What are you hoping for, even if it feels unlikely?",
  "What's something you said yes to that you wish you'd said no to?",
  "What made today heavier than it needed to be?",
  "What's a song, smell, or sound that feels like home?",
  "What do you need more of right now?",
  "What's something you're letting go of?",
  "Who made you feel seen recently?",
  "What's a fear you've never said out loud?",
  "What's a tiny win from this week?",
  "What do you wish people understood about you?",
  "What's something you're grateful for that's easy to overlook?",
  "What's keeping you up tonight?",
  "What would make tomorrow a little easier?",
];

// TEMPORARY sample notes so you can see the unfolding animation.
// They are the "shelf keeper" starter notes from CONTENT.md.
// Phase 3 removes these and loads real notes from the database.
export const SAMPLE_NOTES = [
  {
    id: "sample-1",
    stamp: "teacup",
    is_keeper: true,
    body: "Families are complicated. You can love people and still need space from them. Both can be true.",
  },
  {
    id: "sample-2",
    stamp: "moon",
    is_keeper: true,
    body: "Some days the most productive thing you'll do is get through the day. That counts.",
  },
  {
    id: "sample-3",
    stamp: "fern",
    is_keeper: true,
    body: "I drank water, answered one email I'd been avoiding, and went to bed before midnight. Small, but mine.",
  },
];
