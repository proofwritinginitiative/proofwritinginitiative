import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import danielPhoto from '../images/daniel.webp';
import watsonPhoto from '../images/watson.jpeg';
import { courses, session, cmrOutcomes } from './course-data.js';
import './styles.css';

const pages = {
  'index.html': { key: 'home', title: 'Proofs 4 All | Free Online Math Courses' },
  'courses.html': { key: 'courses', title: 'Course | Proofs 4 All' },
  'about.html': { key: 'about', title: 'About | Proofs 4 All' },
  'register.html': { key: 'register', title: 'Register | Proofs 4 All' },
  'contact.html': { key: 'contact', title: 'Contact | Proofs 4 All' },
};
const navigation = [
  ['home', 'Home', 'index.html'], ['courses', 'Course', 'courses.html'],
  ['about', 'About', 'about.html'], ['register', 'Register', 'register.html'],
  ['contact', 'Contact', 'contact.html'],
];

function Brand({ footer = false }) {
  return <a className={`brand${footer ? ' footer-brand' : ''}`} href="index.html" aria-label="Proofs 4 All home"><span className="brand-mark" aria-hidden="true">4</span><span>Proofs <span className="brand-four">4</span> All<span className="brand-dot">.</span></span></a>;
}
function Header({ active }) {
  const menuRef = useRef(null);
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && menuRef.current?.open) {
        menuRef.current.open = false;
        menuRef.current.querySelector('summary')?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);
  return <header className="site-header"><div className="header-inner">
    <Brand />
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.filter(([key]) => key !== 'register').map(([key, label, href]) => <a key={key} href={href} aria-current={active === key ? 'page' : undefined}>{label}</a>)}</nav>
    <a className="button button-small header-cta" href="register.html" aria-current={active === 'register' ? 'page' : undefined}>Register</a>
    <details className="mobile-menu" ref={menuRef}><summary aria-label="Navigation menu"><span className="menu-label">Menu</span><span className="menu-lines" aria-hidden="true"><i /><i /></span></summary><nav aria-label="Mobile navigation">{navigation.map(([key, label, href]) => <a key={key} href={href} aria-current={active === key ? 'page' : undefined}>{label}</a>)}</nav></details>
  </div></header>;
}
function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><div className="footer-about"><Brand footer /><p>Free math courses. Shared curiosity.{' '}<br />Room to grow as a thinker.</p><p className="footer-description">A student-led program for elementary and middle-school learners.</p></div><div className="footer-links"><nav aria-label="Footer navigation">{navigation.map(([key, label, href]) => <a key={key} href={href}>{label}</a>)}</nav><a className="footer-privacy" href="register.html#privacy">Registration & privacy</a></div></div><div className="footer-bottom"><span>Online, over Zoom · Free to attend</span></div></footer>;
}
function PageLayout({ active, children }) {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header active={active} />{children}<Footer /></>;
}
function TextLink({ href, children, className = '' }) {
  return <a className={`text-link ${className}`.trim()} href={href}>{children}</a>;
}
function Status({ children = 'Registration open' }) {
  return <span className="status"><span aria-hidden="true" />{children}</span>;
}
function Schedule({ course }) {
  return <div className="schedule"><div><span>Monday</span><strong>{course.monday}</strong></div><span className="schedule-or">or</span><div><span>Wednesday</span><strong>{course.wednesday}</strong></div><p>All times EST · One meeting per week</p></div>;
}
function Puzzle() {
  return <div className="puzzle-board"><div className="puzzle-heading"><span>A little room for wonder</span><span className="puzzle-square" aria-hidden="true" /></div><h2>Can you see{' '}<br />why this is a square?</h2><div className="square-puzzle" aria-hidden="true">{['one', 'three', 'five', 'three', 'three', 'five', 'five', 'five', 'five'].map((color, index) => <span key={index} className={`puzzle-tile tile-${color}`} />)}</div><p className="puzzle-equation"><span>1</span><b>+</b><span>3</span><b>+</b><span>5</span><b>=</b><strong>3²</strong></p><details className="puzzle-reveal"><summary>Look for the pattern<span aria-hidden="true">+</span></summary><p>Start with one square. Add an L of three, then an L of five. Each new odd number builds the next square. Here, nine small squares make a 3 × 3 square.</p></details></div>;
}
function CourseCard({ course }) {
  return <article className={`course-card course-card-${course.id}`}><div className="course-card-top"><p className="course-audience">{course.audience}</p><span className="course-symbol" aria-hidden="true">{course.id === 'elementary' ? '◇' : '∴'}</span></div><p className="course-label">{course.label}</p><h3>{course.title}</h3><p className="course-description">{course.description}</p><Schedule course={course} /><div className="course-card-actions"><a className="button" href={`register.html#${course.id}`}>Register for {course.id === 'elementary' ? 'elementary' : 'CMR'}</a><TextLink href={`courses.html#${course.id}`}>Explore this course</TextLink></div></article>;
}
function HomePage() {
  return <PageLayout active="home"><main id="main-content" tabIndex="-1">
    <section className="home-hero section-wrap"><div className="home-copy"><p className="section-kicker">Free online math courses</p><h1>There’s more to math than the answer.</h1><p className="hero-lede">Learn to explain why math works. From playful logic puzzles to your first proof, build the confidence to share your reasoning.</p><div className="hero-actions"><a className="button" href="courses.html">Find your course</a><TextLink href="about.html">Meet the people behind it</TextLink></div><div className="hero-footnote"><span aria-hidden="true" className="small-spark">✳</span><p>For curious elementary and middle-school students.{' '}<br />Student-led. Free to attend.</p></div></div><Puzzle /></section>
    <section className="session-strip" aria-label="Upcoming session"><div className="section-wrap"><Status /><p><strong>{session.name}</strong><span>{session.dates}</span></p><p className="strip-format">Five weeks<span>One hour a week · On Zoom</span></p></div></section>
    <section className="courses-preview section-wrap"><div className="section-heading"><div><p className="section-kicker">Two ways to begin</p><h2>Find a good place{' '}<br />for your curiosity.</h2></div><p>Start with puzzle-based logic or take your next step into proof writing. Both courses are free, with Monday and Wednesday meeting options.</p></div><div className="course-card-grid">{courses.map(course => <CourseCard key={course.id} course={course} />)}</div></section>
    <section className="origin-section section-wrap"><div><p className="section-kicker">Students helping students</p><h2>We remember{' '}<br />the first “why?”</h2></div><div><p>Proofs 4 All was started by high school students at the North Carolina School of Science and Mathematics who remember how difficult proof writing felt in middle school.</p><p>We help math-interested students get started with reasoning and proofs—skills that can support them throughout their mathematical journeys.</p><TextLink href="about.html">Our purpose and our founders</TextLink></div></section>
  </main></PageLayout>;
}
function CourseOverview({ course }) {
  return <div className={`course-detail course-detail-${course.id}`} id={course.id}><div className="course-detail-header"><div><p className="course-label">{course.label}</p><h2>{course.title}</h2><p className="course-detail-description">{course.description}</p></div><span className="detail-symbol" aria-hidden="true">{course.id === 'elementary' ? '◇' : '∴'}</span></div><div className="course-detail-body"><div><h3>A good fit for</h3><p className="audience-heading">{course.audience}</p><p>{course.audienceDetail}</p><p className="prerequisite">{course.background}</p><a className="button" href={`register.html#${course.id}`}>Register for {course.id === 'elementary' ? 'elementary' : 'CMR'}</a></div><div className="course-facts"><h3>Your weekly class</h3><Schedule course={course} /><dl><div><dt>Session</dt><dd>{session.dates}</dd></div><div><dt>Format</dt><dd>{session.format}</dd></div><div><dt>Cost</dt><dd>Free</dd></div></dl></div></div></div>;
}
function CoursePage() {
  return <PageLayout active="courses"><main id="main-content" tabIndex="-1">
    <section className="page-intro section-wrap"><p className="section-kicker">Our courses</p><h1>Learn to think it through.{' '}<br />Then explain it.</h1><p>Two free courses for young mathematicians, from puzzle-based logic to the structure of a proof.</p><div className="page-intro-bottom"><Status /><span>{session.name} · Five weekly classes on Zoom</span></div><nav className="section-nav" aria-label="Course sections"><a href="#elementary">Elementary Mathematics</a><a href="#cmr">Communication of Mathematical Reasoning</a></nav></section>
    <section className="course-details section-wrap" aria-label="Available courses"><CourseOverview course={courses[0]} /><div className="elementary-learning"><h3>Small puzzles. Clear reasoning.</h3><p>Students use puzzle-based logic exercises to explore mathematical ideas and practice communicating logical reasoning. “Elementary” describes the intended students; no prior knowledge is needed.</p></div><CourseOverview course={courses[1]} /></section>
    <section className="outcomes-section section-wrap"><div className="section-heading"><div><p className="section-kicker">Inside CMR</p><h2>What students learn</h2></div><p>Proof writing is about making your reasoning visible, one well-supported step at a time.</p></div><ul className="outcome-list">{cmrOutcomes.map(([title, description], index) => <li key={title}><span className="outcome-mark" aria-hidden="true">{['↳', '∴', '△', '∵'][index]}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ul></section>
    <section className="how-section"><div className="how-inner section-wrap"><div><p className="section-kicker">One hour, every week</p><h2>A little technique.{' '}<br />A lot of practice.</h2><p>Each CMR class brings a new opportunity to put reasoning into words, using handouts written by the teachers.</p></div><div className="class-breakdown"><div className="time-track" aria-label="Approximately one third technical skills and two thirds practice"><span /><span /></div><ol><li><span className="duration">~20 <small>min</small></span><div><h3>Technical skills</h3><p>Work through the technical ideas involved in writing proofs.</p></div></li><li><span className="duration">~40 <small>min</small></span><div><h3>Practice</h3><p>Practice proof-writing skills with teacher-written handouts.</p></div></li></ol></div></div></section>
    <section className="course-notes section-wrap"><div><h2>Planning ahead</h2><p>Registration closes {session.deadline} for both meeting options. Classes meet during the holiday weeks, too. Choose one weekly meeting option; you do not need to attend both.</p><p>Monday classes: December 14, 21, 28 and January 4, 11.{' '}<br />Wednesday classes: December 16, 23, 30 and January 6, 13.</p><p>Classes run repeatedly throughout the year. <TextLink href="contact.html">Contact us with scheduling questions.</TextLink></p></div><div className="future-course"><p className="section-kicker">Future course · Not yet open</p><h3>LaTeX for Mathematicians</h3><p>Typeset equations, proofs, and problem sets.</p></div></section>
  </main></PageLayout>;
}
function AboutPage() {
  return <PageLayout active="about"><main id="main-content" tabIndex="-1"><section className="page-intro about-intro section-wrap"><div><p className="section-kicker">About Proofs 4 All</p><h1>Big ideas begin{' '}<br />with a little help.</h1><p>We help students prepare for the proof-based reasoning at the heart of advanced mathematics.</p></div><div className="about-motif" aria-hidden="true"><span /><span /><span /><span /></div></section><section className="purpose-section section-wrap"><h2>Our purpose</h2><div><p>Proofs 4 All began with high school students at the North Carolina School of Science and Mathematics who remember how difficult proof writing felt in middle school.</p><p>Today, our free online courses give younger students a place to explore logical reasoning and help middle-school students get started with proofs. The aim is simple: learn to communicate not just an answer, but why it works.</p></div></section><section className="team-section section-wrap"><div className="section-heading"><div><p className="section-kicker">The people behind the program</p><h2>Founders and instructors</h2></div></div><div className="team-grid"><article className="team-card"><div className="portrait-wrap"><img src={danielPhoto} alt="Daniel Dimitrov" width="480" height="600" /></div><div className="team-info"><p className="team-role">Founder and instructor</p><h3>Daniel Dimitrov</h3><p>Daniel is a junior at NCSSM-Durham, a three-time AIME qualifier, and a coach for his middle school’s MATHCOUNTS team.</p></div></article><article className="team-card"><div className="portrait-wrap"><img src={watsonPhoto} alt="Watson Houck" width="480" height="600" /></div><div className="team-info"><p className="team-role">Co-founder and instructor</p><h3>Watson Houck</h3><p>Watson is a junior at NCSSM-Durham and a three-time AIME qualifier. He has participated in math competitions since elementary school and attended PROMYS in 2026.</p></div></article></div></section><section className="closing-callout section-wrap"><div><p className="section-kicker">Bring your curiosity</p><h2>There’s a place to start.</h2></div><a className="button" href="courses.html">Explore the courses</a></section></main></PageLayout>;
}
function TallyEmbed({ formId, title }) {
  const iframeRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const embedUrl = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;
  useEffect(() => {
    const scriptUrl = 'https://tally.so/widgets/embed.js';
    // Tally must initialize the iframe before navigation to register dynamic sizing.
    // https://developers.tally.so/widgets/examples/react
    const initialize = () => {
      if (window.Tally?.loadEmbeds) {
        window.Tally.loadEmbeds();
        return;
      }
      // Keep the form usable if the widget fails; the direct link also stays visible.
      const iframe = iframeRef.current;
      if (iframe && !iframe.hasAttribute('src')) {
        iframe.height = '900';
        iframe.src = iframe.dataset.tallySrc;
      }
    };
    if (window.Tally?.loadEmbeds) {
      initialize();
      return;
    }
    let script = document.querySelector(`script[src="${scriptUrl}"]`);
    const isNewScript = !script;
    if (!script) {
      script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
    }
    const onLoad = () => {
      script.dataset.tallyLoadState = 'loaded';
      initialize();
    };
    const onError = () => {
      script.dataset.tallyLoadState = 'failed';
      initialize();
    };
    if (script.dataset.tallyLoadState) {
      initialize();
      return;
    }
    script.addEventListener('load', onLoad, { once: true });
    script.addEventListener('error', onError, { once: true });
    if (isNewScript) document.body.appendChild(script);
    return () => {
      script.removeEventListener('load', onLoad);
      script.removeEventListener('error', onError);
    };
  }, [formId]);
  return <div className="tally-embed-card">{!loaded && <p className="form-loading" role="status">Loading the form…</p>}<iframe ref={iframeRef} data-tally-src={embedUrl} loading="lazy" width="100%" height="200" title={title} onLoad={(event) => { if (event.currentTarget.hasAttribute('src')) setLoaded(true); }} /><p className="form-fallback">Having trouble with the form? <a href={`https://tally.so/r/${formId}`} target="_blank" rel="noopener noreferrer">Open it directly on Tally<span className="visually-hidden"> (opens a new tab)</span></a>.</p></div>;
}

function PrivacyNotice() {
  return <section className="privacy-section section-wrap" id="privacy"><div><p className="section-kicker">For parents and guardians</p><h2>Before sharing{' '}<br />your information</h2></div><div><p>A parent or guardian should complete registration and provide the contact email used for course communication. Please share only what the form asks for; do not include a child’s home address, birth date, or other sensitive details in open-ended answers.</p><p>Registration forms are hosted by Tally. Opening an embedded form connects your browser to Tally; submitting it sends your answers to that service and the course organizers. Read <a href="https://tally.so/help/privacy-policy" target="_blank" rel="noopener noreferrer">Tally’s privacy policy<span className="visually-hidden"> (opens a new tab)</span></a>.</p><p>We plan to teach over Zoom and use Google Classroom for CMR materials. We are reviewing which accounts students can use and will share access instructions with parents before classes begin.</p><p>Registration information is used to organize classes and contact families. Responses are stored in Tally and a restricted Google Sheets workbook. The authorized course team is Daniel Dimitrov, Watson Houck, Gavin, and adult overseer Dr. William Davis. Registration records will be deleted after the course ends.</p><p>To ask about your child’s information, request access or deletion, or withdraw from the course, email <a href="mailto:proofwritinginitiative@gmail.com">proofwritinginitiative@gmail.com</a>. Please describe your request without including sensitive student information.</p></div></section>;
}
function selectedCourseFromHash() {
  const id = window.location.hash.slice(1);
  return courses.some(course => course.id === id) ? id : 'cmr';
}
function RegisterPage() {
  const [selectedId, setSelectedId] = useState(selectedCourseFromHash);
  const [openFormId, setOpenFormId] = useState(null);
  const selected = courses.find(course => course.id === selectedId);
  useEffect(() => {
    const onHashChange = () => {
      if (courses.some(course => `#${course.id}` === window.location.hash)) setSelectedId(selectedCourseFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    if (window.location.hash === '#privacy') requestAnimationFrame(() => document.getElementById('privacy')?.scrollIntoView());
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return <PageLayout active="register"><main id="main-content" tabIndex="-1"><section className="page-intro register-intro section-wrap"><p className="section-kicker">Join a course</p><h1>A good next step{' '}<br />starts here.</h1><p>Choose your course below. A parent or guardian should complete registration for their student.</p><div className="page-intro-bottom"><Status /><span>Both courses are free · Registration closes {session.deadline}</span></div></section><section className="registration-section section-wrap" aria-label="Course registration"><nav className="course-picker" aria-label="Choose a registration form">{courses.map(course => <a key={course.id} href={`#${course.id}`} className={`course-choice course-choice-${course.id}`} aria-current={selectedId === course.id ? 'true' : undefined} onClick={() => setSelectedId(course.id)}><span>{course.id === 'elementary' ? 'Recommended for grades 3–5' : 'Advanced middle-school students'}</span><strong>{course.title}</strong><span className="choice-state">{selectedId === course.id ? 'Selected' : 'Choose course'}<span aria-hidden="true">{selectedId === course.id ? '✓' : '+'}</span></span></a>)}</nav><div className="registration-layout" id={selected.id}><aside className={`registration-aside registration-aside-${selected.id}`}><p className="section-kicker">Your course</p><h2>{selected.title}</h2><p>{selected.audience}</p><Schedule course={selected} /><dl><div><dt>Dates</dt><dd>{session.dates}</dd></div><div><dt>Format</dt><dd>{session.format}</dd></div><div><dt>Cost</dt><dd>Free</dd></div></dl><p className="schedule-note">Choose one weekly meeting option. Classes also meet during both holiday weeks. Registration closes {session.deadline} for all sections.</p><TextLink href={`courses.html#${selected.id}`}>Read the course details</TextLink></aside><div className="registration-form-area" key={selected.id}>{selected.formId ? <><div className="before-form"><span className="form-step" aria-hidden="true">✳</span><h2>Parent or guardian registration</h2><p>Please have a parent or guardian complete this form. Use an email address where they can receive course information.</p><p>Before continuing, read the <a href="#privacy">registration and privacy information</a>. The form is provided by Tally.</p>{!selected.formVerified && <p className="form-update-note">The form currently shows the previous session’s meeting times. <a href="contact.html">Contact us for the new session</a> before submitting.</p>}<button className="button" type="button" aria-expanded={openFormId === selected.id} aria-controls="course-registration-form" onClick={() => setOpenFormId(openFormId === selected.id ? null : selected.id)}>{openFormId === selected.id ? 'Hide' : 'Open'} {selected.id === 'cmr' ? 'CMR' : 'elementary'} registration form</button></div><div id="course-registration-form">{openFormId === selected.id && <TallyEmbed formId={selected.formId} title={`Proofs 4 All ${selected.title} registration form`} />}</div>{selected.id === 'cmr' && <p className="form-note">After CMR registration, we’ll email class information to the parent or guardian. Confirm your student’s account arrangements with us before joining Google Classroom.</p>}</> : <div className="registration-pending"><span className="form-step" aria-hidden="true">◇</span><h2>Elementary registration</h2><p>The elementary course is open for registration. Its online form is being connected. Please contact us for the registration pathway.</p><p>A parent or guardian should get in touch. There’s no need to include a child’s personal details in the initial message.</p><a className="button" href="contact.html">Contact us about registration</a></div>}</div></div></section><PrivacyNotice /></main></PageLayout>;
}
function ContactPage() {
  const [formOpen, setFormOpen] = useState(false);
  return <PageLayout active="contact"><main id="main-content" tabIndex="-1"><section className="page-intro section-wrap"><p className="section-kicker">Let’s talk</p><h1>Questions are{' '}<br />a good beginning.</h1><p>Ask about a course, scheduling, registration, or your child’s information. We’re happy to help.</p></section><section className="contact-layout section-wrap"><aside><h2>Get in touch</h2><p>We’ll reply to the email you provide. You can also email <a className="contact-email" href="mailto:proofwritinginitiative@gmail.com">proofwritinginitiative@gmail.com</a>.</p><p>Parents and guardians: please send messages on your student’s behalf and avoid sharing sensitive student information.</p><div className="contact-help"><h3>Looking for a course?</h3><p>Find the times, recommended background, and what each class covers.</p><TextLink href="courses.html">View course details</TextLink></div></aside><div className="contact-form-area"><div className="before-form"><span className="form-step" aria-hidden="true">✳</span><h2>Send us a message</h2><p>Our contact form is hosted by Tally. Opening it connects your browser to Tally; your message and contact details are sent when you submit.</p><p><a href="https://tally.so/help/privacy-policy" target="_blank" rel="noopener noreferrer">Read Tally’s privacy policy<span className="visually-hidden"> (opens a new tab)</span></a>.</p><button className="button" type="button" aria-expanded={formOpen} aria-controls="contact-message-form" onClick={() => setFormOpen(!formOpen)}>{formOpen ? 'Hide contact form' : 'Open contact form'}</button></div><div id="contact-message-form">{formOpen && <TallyEmbed formId="yXX4Rg" title="Proofs 4 All contact form" />}</div></div></section></main></PageLayout>;
}
const routeComponents = { home: HomePage, courses: CoursePage, about: AboutPage, register: RegisterPage, contact: ContactPage };
const filename = window.location.pathname.split('/').pop() || 'index.html';
const page = pages[filename] ?? pages['index.html'];
const App = routeComponents[page.key];
document.title = page.title;
createRoot(document.getElementById('root')).render(<App />);
