import { createRoot } from 'react-dom/client';
import danielPhoto from '../images/daniel.webp';
import watsonPhoto from '../images/watson.jpeg';
import './styles.css';

const pages = {
  'index.html': { key: 'home', title: 'Proof Writing Initiative | Free Proof Writing Course' },
  'courses.html': { key: 'courses', title: 'Course | Proof Writing Initiative' },
  'about.html': { key: 'about', title: 'About | Proof Writing Initiative' },
  'register.html': { key: 'register', title: 'Register | Proof Writing Initiative' },
  'contact.html': { key: 'contact', title: 'Contact | Proof Writing Initiative' },
};

function Header({ active }) {
  const links = [
    ['home', 'Home', 'index.html'],
    ['courses', 'Course', 'courses.html'],
    ['about', 'About', 'about.html'],
    ['contact', 'Contact', 'contact.html'],
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="index.html" aria-label="Proof Writing Initiative home">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span>Proof Writing <span className="brand-light">Initiative</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([key, label, href]) => (
            <a key={key} href={href} aria-current={active === key ? 'page' : undefined}>{label}</a>
          ))}
        </nav>
        <a className="button button-small header-cta" href="register.html" aria-current={active === 'register' ? 'page' : undefined}>Register <span aria-hidden="true">↗</span></a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><span></span><span></span></summary>
          <nav aria-label="Mobile navigation">
            {[...links, ['register', 'Register', 'register.html']].map(([key, label, href]) => (
              <a key={key} href={href} aria-current={active === key ? 'page' : undefined}>{label}</a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <a className="brand footer-brand" href="index.html"><span className="brand-mark" aria-hidden="true">P</span><span>Proof Writing Initiative</span></a>
          <p>Free mathematics courses for curious young thinkers.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="index.html">Home</a>
          <a href="courses.html">Course</a>
          <a href="about.html">About</a>
          <a href="register.html">Register</a>
          <a href="contact.html">Contact</a>
        </nav>
        <span className="footer-note">Math makes sense when you can explain why.</span>
      </div>
    </footer>
  );
}

function PageLayout({ active, children }) {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header active={active} />{children}<Footer /></>;
}

function Eyebrow({ children, className = '' }) {
  return <p className={`eyebrow ${className}`.trim()}>{children}</p>;
}

function ArrowLink({ href, children, className = '' }) {
  return <a className={`text-link ${className}`.trim()} href={href}>{children}<span aria-hidden="true"> ↗</span></a>;
}

function HomePage() {
  return (
    <PageLayout active="home">
      <main id="main-content">
        <section className="home-hero section-wrap">
          <div className="home-copy">
            <h1>Learn to explain why math works<span className="headline-period">.</span></h1>
            <p className="hero-lede">The Proof Writing Initiative was started by high school students at the North Carolina School of Science and Mathematics who remember how difficult proof writing felt in middle school. We help math-interested middle schoolers get started with proofs—a skill that can support them throughout their mathematical journeys.</p>
          </div>
          <div className="proof-visual" aria-label="An example of turning a definition into a proof">
            <div className="visual-topline"><span>THE PROOF DESK</span><span>01 / 03</span></div>
            <div className="visual-rule"></div>
            <Eyebrow>Start with a definition</Eyebrow>
            <p className="visual-question">How do we know a number is even?</p>
            <div className="proof-step"><span className="step-index">01</span><p>Let <i>m</i> be an even integer.</p></div>
            <div className="proof-step"><span className="step-index">02</span><p>By definition, <i>m = 2k</i> for some integer <i>k</i>.</p></div>
            <div className="proof-conclusion"><span>THEREFORE</span><strong><i>m</i> is divisible by 2.</strong><span className="conclusion-check">✓</span></div>
            <div className="visual-caption">A proof connects what we know to what we want to show.</div>
            <span className="visual-sticker" aria-hidden="true">WHY<br />IT<br />WORKS</span>
          </div>
          <div className="hero-decoration" aria-hidden="true"></div>
        </section>

        <section className="course-teaser section-wrap">
          <div className="teaser-intro">
            <Eyebrow>Current course</Eyebrow>
            <h2>Communication of Mathematical Reasoning</h2>
            <p>An introduction to proof writing for middle schoolers. AMC 8 or MATHCOUNTS experience can help, but neither competition nor proof-writing experience is required.</p>
          </div>
          <div className="teaser-actions">
            <a className="button button-quiet" href="courses.html">Course details <span aria-hidden="true">↗</span></a>
            <a className="button" href="register.html">Register <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

const outcomes = [
  ['01', 'Planning and page layout', 'Plan a proof and organize its steps so the reasoning is easy to follow.'],
  ['02', 'Structural logic', 'Connect statements and justifications from the assumptions to the conclusion.'],
  ['03', 'Using visuals to support reasoning', 'Use diagrams or other visuals when they help explain a mathematical idea.'],
  ['04', 'Proof strategies', 'Try different approaches and choose one that fits the statement being proved.'],
];

function CoursePage() {
  return (
    <PageLayout active="courses">
      <main id="main-content">
        <section className="page-intro section-wrap">
          <h1>Communication of <span>Mathematical Reasoning</span></h1>
        </section>

        <section className="session-band">
          <div className="session-band-inner">
            <div className="session-main"><span className="live-badge"><i></i> FALL 2026 · OPEN FOR REGISTRATION</span><h2>Course at a glance</h2><a className="button button-light" href="register.html">Register for this session <span aria-hidden="true">↗</span></a></div>
            <table className="session-data"><tbody>
              <tr><th scope="row">Who it’s for</th><td>Middle school students interested in math</td></tr>
              <tr><th scope="row">Helpful background</th><td>AMC 8 or MATHCOUNTS experience is helpful, not required</td></tr>
              <tr><th scope="row">Proof-writing experience</th><td>Not required</td></tr>
              <tr><th scope="row">Session</th><td>Fall 2026 · Weeks of Oct 26–Nov 23</td></tr>
              <tr><th scope="row">Meeting options</th><td>Monday 8:00–9:30 p.m. or Wednesday 7:00–8:30 p.m. Eastern</td></tr>
              <tr><th scope="row">Format</th><td>Online · One meeting per week</td></tr>
              <tr><th scope="row">Availability</th><td>Classes run repeatedly throughout the year</td></tr>
              <tr><th scope="row">Cost</th><td>Free</td></tr>
            </tbody></table>
          </div>
        </section>

        <section className="section-wrap outcomes-section">
          <h2>What students learn</h2>
          <div className="outcome-grid">
            {outcomes.map(([number, title, description]) => <article className="outcome-card" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </section>

        <section className="how-section">
          <div className="how-inner section-wrap"><h2>How classes work</h2><ol className="process-list"><li><span>30 min</span><div><strong>Technical ideas</strong><p>Work through the technical ideas involved in writing proofs.</p></div></li><li><span>60 min</span><div><strong>Practice</strong><p>Practice proof-writing skills with handouts written by the teachers.</p></div></li></ol></div>
        </section>

        <section className="roadmap-section">
          <div className="section-wrap"><div className="roadmap-heading"><div><Eyebrow>Planned courses · Not open for registration</Eyebrow><h2>Future courses</h2></div></div><div className="roadmap-grid"><article><h3>Elementary Mathematics</h3><p>Reasoning and proof for younger mathematicians.</p></article><article><h3>LaTeX for Mathematicians</h3><p>Typeset equations, proofs, and problem sets.</p></article></div></div>
        </section>
      </main>
    </PageLayout>
  );
}

function AboutPage() {
  return (
    <PageLayout active="about">
      <main id="main-content">
        <section className="page-intro about-intro section-wrap"><Eyebrow>About the initiative</Eyebrow><h1>Our purpose</h1><p>We help students prepare for the proof-based reasoning at the heart of advanced mathematics.</p></section>
        <section className="team-section section-wrap"><h2>Founders and instructors</h2>
          <div className="team-grid">
            <article className="team-card"><img src={danielPhoto} alt="Daniel Dimitrov" /><div className="team-info"><span>FOUNDER · INSTRUCTOR</span><h3>Daniel Dimitrov</h3><p>Daniel is a junior at NCSSM-Durham, a three-time AIME qualifier, and a coach for his middle school’s MATHCOUNTS team.</p></div></article>
            <article className="team-card"><img src={watsonPhoto} alt="Watson Houck" /><div className="team-info"><span>CO-FOUNDER · INSTRUCTOR</span><h3>Watson Houck</h3><p>Watson is a junior at NCSSM-Durham and a three-time AIME qualifier. He has participated in math competitions since elementary school and attended PROMYS in 2026.</p></div></article>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

function RegistrationForm() {
  return (
    <form className="form-card" action="https://formspree.io/f/mnpjvnqb" method="POST">
      <input type="hidden" name="_subject" value="New Class Registration - Proof Writing Initiative" />
      <div className="form-grid">
        <label>Student name<input type="text" name="student_name" autoComplete="name" required /></label>
        <label>Student email<input type="email" name="email" autoComplete="email" required /></label>
        <label>Parent/guardian email <span className="optional">Optional</span><input type="email" name="guardian_email" /></label>
        <label>Current grade<select name="grade" defaultValue="" required><option value="" disabled>Select grade</option><option value="5">5th grade or below</option><option value="6">6th grade</option><option value="7">7th grade</option><option value="8">8th grade</option></select></label>
        <label>Home state <span className="optional">Optional</span><input type="text" name="home_state" autoComplete="address-level1" /></label>
        <label>Course<select name="course" defaultValue="" required><option value="" disabled>Select a course</option><option value="Communication of Mathematical Reasoning">Communication of Mathematical Reasoning: Fall 2026</option></select></label>
        <label className="form-wide">Preferred class time <span className="field-note">Eastern Time</span><select name="class_time" defaultValue="" required><option value="" disabled>Select a time</option><option value="Monday 8:00–9:30 PM Eastern">Monday, 8:00–9:30 PM Eastern</option><option value="Wednesday 7:00–8:30 PM Eastern">Wednesday, 7:00–8:30 PM Eastern</option></select></label>
        <label className="form-wide">Previous proof-writing experience<select name="proof_writing_experience" defaultValue="" required><option value="" disabled>Select an option</option><option value="None">No previous experience</option><option value="Some">Some experience</option><option value="Experienced">I have written proofs before</option></select></label>
      </div>
      <div className="form-submit-row"><p>Your information is used to follow up about this class.</p><button className="button" type="submit">Submit registration <span aria-hidden="true">↗</span></button></div>
    </form>
  );
}

function RegisterPage() {
  return (
    <PageLayout active="register">
      <main id="main-content">
        <section className="form-page-intro section-wrap"><Eyebrow>Join the class</Eyebrow><h1>Take your first step into <span>proof.</span></h1><p>Register for the free Communication of Mathematical Reasoning course.</p></section>
        <section className="registration-layout section-wrap">
          <aside className="registration-aside"><div className="aside-card"><span className="live-badge"><i></i> FALL 2026 SESSION</span><h2>Communication of Mathematical Reasoning</h2><dl><div><dt>Dates</dt><dd>Weeks of Oct 26–Nov 23</dd></div><div><dt>Meeting options</dt><dd>Monday 8:00–9:30 p.m. or Wednesday 7:00–8:30 p.m. Eastern</dd></div><div><dt>Format</dt><dd>Online · One meeting per week</dd></div><div><dt>Cost</dt><dd>Free</dd></div></dl><p>Sessions run repeatedly throughout the year. After you register, we’ll email class information and a Google Classroom invitation.</p></div><ArrowLink href="courses.html">Read about the course</ArrowLink></aside>
          <RegistrationForm />
        </section>
      </main>
    </PageLayout>
  );
}

function ContactPage() {
  return (
    <PageLayout active="contact">
      <main id="main-content">
        <section className="form-page-intro section-wrap"><h1>Questions?</h1><p>Feel free to contact us.</p><ArrowLink className="contact-course-link" href="courses.html">Course details</ArrowLink></section>
        <section className="contact-layout section-wrap">
          <form className="form-card contact-form" action="https://formspree.io/f/mppqrzvw" method="POST">
            <input type="hidden" name="_subject" value="New Contact Message - Proof Writing Initiative" />
            <label>Name<input type="text" name="name" autoComplete="name" placeholder="Your name" required /></label>
            <label>Email<input type="email" name="email" autoComplete="email" placeholder="you@example.com" required /></label>
            <label>What can we help with?<select name="subject" defaultValue="" required><option value="" disabled>Select a topic</option><option value="Course registration">Course registration</option><option value="Course information">Course information</option><option value="General question">General question</option><option value="Other">Other</option></select></label>
            <label>Message<textarea name="message" rows="5" placeholder="How can we help?" required></textarea></label>
            <div className="form-submit-row"><p>We’ll reply to the email you provide.</p><button className="button" type="submit">Send message <span aria-hidden="true">↗</span></button></div>
          </form>
        </section>
      </main>
    </PageLayout>
  );
}

const routeComponents = { home: HomePage, courses: CoursePage, about: AboutPage, register: RegisterPage, contact: ContactPage };
const filename = window.location.pathname.split('/').pop() || 'index.html';
const page = pages[filename] ?? pages['index.html'];
const App = routeComponents[page.key];
document.title = page.title;
createRoot(document.getElementById('root')).render(<App />);
