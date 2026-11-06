// Shared course facts keep Home, Course and Register in agreement.
export const session = {
  name: 'Winter 2026–27',
  dates: 'Weeks of December 14, 2026–January 11, 2027',
  format: 'Five weekly, one-hour classes on Zoom',
  deadline: 'December 14, 2026',
};
export const courses = [
  {
    id: 'elementary', title: 'Elementary Mathematics',
    label: 'Puzzle-based mathematical logic',
    audience: 'Recommended for grades 3–5',
    audienceDetail: 'Grades 3–5 are a recommendation, not an eligibility requirement.',
    description: 'Explore mathematical logic through puzzles, and learn to communicate the reasoning behind an answer.',
    monday: '7:00–8:00 p.m.', wednesday: '6:30–7:30 p.m.',
    background: 'No prerequisites',
    formId: 'o9DyQx',
    formVerified: true,
  },
  {
    id: 'cmr', title: 'Communication of Mathematical Reasoning',
    label: 'An introduction to proof writing · Cohort 3',
    audience: 'For more advanced middle-school students',
    audienceDetail: 'AMC 8 or MATHCOUNTS experience can help, but neither competition nor proof-writing experience is required.',
    description: 'Turn mathematical ideas into clear, convincing proofs. Learn to organize an argument and explain why each step works.',
    monday: '8:00–9:00 p.m.', wednesday: '7:30–8:30 p.m.',
    background: 'No proof-writing experience required',
    formId: 'bZZeDZ', formVerified: true,
  },
];
export const cmrOutcomes = [
  ['Planning and page layout', 'Plan a proof and organize its steps so the reasoning is easy to follow.'],
  ['Structural logic', 'Connect statements and justifications from the assumptions to the conclusion.'],
  ['Using visuals to support reasoning', 'Use diagrams or other visuals when they help explain a mathematical idea.'],
  ['Proof strategies', 'Try different approaches and choose one that fits the statement being proved.'],
];
