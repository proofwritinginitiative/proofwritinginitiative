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
            <Eyebrow><span className="eyebrow-dot"></span> Free online course · Middle school</Eyebrow>
            <h1>Math is more than getting the answer<span className="headline-period">.</span></h1>
            <p className="hero-lede">Learn to explain <em>why</em> it works. We help young mathematicians build clear, confident proofs from ideas they already understand.</p>
            <div className="button-row">
              <a className="button" href="courses.html">Explore the course <span aria-hidden="true">↗</span></a>
              <a className="button button-quiet" href="register.html">Register for free</a>
            </div>
            <div className="hero-note"><span className="avatar-stack" aria-hidden="true"><span>D</span><span>W</span></span><span>Created and taught by student mathematicians</span></div>
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
            <Eyebrow>The current class</Eyebrow>
            <h2>Communication of Mathematical Reasoning</h2>
            <p>An approachable introduction to mathematical proof for middle school students. No previous proof-writing experience is needed.</p>
            <ArrowLink href="courses.html">See course details</ArrowLink>
          </div>
          <div className="teaser-facts">
            <div><span className="fact-icon">01</span><span><small>Format</small><strong>Online · Once a week</strong></span></div>
            <div><span className="fact-icon">02</span><span><small>Session</small><strong>Weeks of Oct 26–Nov 23</strong></span></div>
            <div><span className="fact-icon">03</span><span><small>Tuition</small><strong>Free</strong></span></div>
            <ArrowLink href="register.html" className="fact-register">Choose a class time</ArrowLink>
          </div>
        </section>

        <section className="home-bottom section-wrap">
          <div><Eyebrow>Learn together</Eyebrow><h2>Curiosity is a good place to start.</h2></div>
          <p>Ask questions, try ideas, and learn to make a mathematical argument someone else can follow.</p>
          <ArrowLink href="about.html">Meet the instructors</ArrowLink>
        </section>
      </main>
    </PageLayout>
  );
}

const outcomes = [
  ['01', 'Use definitions', 'See how precise definitions give a proof its starting point.'],
  ['02', 'Connect ideas', 'Build a logical path from assumptions to a conclusion.'],
  ['03', 'Write clearly', 'Organize an argument so another person can follow it.'],
  ['04', 'Revise reasoning', 'Find gaps and make a proof more complete.'],
];

function CoursePage() {
  return (
    <PageLayout active="courses">
      <main id="main-content">
        <section className="page-intro section-wrap">
          <Eyebrow>One current course · Free</Eyebrow>
          <h1>Communication of <span>Mathematical Reasoning</span></h1>
          <p>An online course for middle school students ready to explore how mathematical ideas fit together—and how to prove they work.</p>
        </section>

        <section className="session-band">
          <div className="session-band-inner">
            <div className="session-main"><span className="live-badge"><i></i> OPEN FOR REGISTRATION</span><h2>Build your first mathematical arguments.</h2><p>Learn with examples, discussion, guided practice, and thoughtful feedback.</p><a className="button button-light" href="register.html">Register for this session <span aria-hidden="true">↗</span></a></div>
            <div className="session-data">
              <div><span>WHO</span><strong>Middle school students</strong></div>
              <div><span>WHEN</span><strong>Weeks of Oct 26–Nov 23</strong></div>
              <div><span>MEETINGS</span><strong>Monday or Wednesday · Eastern</strong></div>
              <div><span>EXPERIENCE</span><strong>No proof background needed</strong></div>
              <div><span>COST</span><strong>Free</strong></div>
            </div>
          </div>
        </section>

        <section className="section-wrap outcomes-section">
          <div className="section-heading-row"><div><Eyebrow>What students learn</Eyebrow><h2>Reason carefully.<br />Write with purpose.</h2></div><p>Students practice the building blocks of rigorous mathematical communication—and gain confidence in explaining their thinking.</p></div>
          <div className="outcome-grid">
            {outcomes.map(([number, title, description]) => <article className="outcome-card" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </section>

        <section className="how-section">
          <div className="how-inner section-wrap"><div><Eyebrow>How class works</Eyebrow><h2>Ideas become arguments through practice.</h2><p>Each class introduces a concept, explores problems together, and gives students time to write and strengthen their reasoning.</p></div><ol className="process-list"><li><span>01</span><div><strong>Explore</strong><p>Start with a question, example, or definition.</p></div></li><li><span>02</span><div><strong>Reason</strong><p>Try approaches and connect ideas step by step.</p></div></li><li><span>03</span><div><strong>Explain</strong><p>Write a complete argument and improve it with feedback.</p></div></li></ol></div>
        </section>

        <section className="faq-section section-wrap">
          <div className="faq-heading"><Eyebrow>Good to know</Eyebrow><h2>Before you register</h2><p>New to proofs? That’s expected. We start with the basics.</p></div>
          <div className="faq-list">
            <details><summary>Who is this class for?</summary><p>Middle school students who enjoy math and are curious about why ideas work. MATHCOUNTS or AMC 8 experience can help, but it is not a requirement.</p></details>
            <details><summary>Do I need to know how to write proofs already?</summary><p>No. We introduce the language and structure of proof step by step. Students should be willing to think through a challenging problem and explain their ideas.</p></details>
            <details><summary>When are the classes?</summary><p>The session runs during the weeks of October 26 through November 23. Choose a weekly Monday or Wednesday meeting time in Eastern Time when you register.</p></details>
            <details><summary>How much does it cost?</summary><p>The course is free.</p></details>
          </div>
        </section>

        <section className="roadmap-section">
          <div className="section-wrap"><div className="roadmap-heading"><div><Eyebrow>On the horizon</Eyebrow><h2>More math, in time.</h2></div><p>These courses are planned and are not open for registration yet.</p></div><div className="roadmap-grid"><article><span>PLANNED COURSE</span><h3>Elementary Mathematics</h3><p>Reasoning and proof for younger mathematicians.</p></article><article><span>PLANNED COURSE</span><h3>LaTeX for Mathematicians</h3><p>Typeset equations, proofs, and problem sets.</p></article></div></div>
        </section>
      </main>
    </PageLayout>
  );
}

function AboutPage() {
  return (
    <PageLayout active="about">
      <main id="main-content">
        <section className="page-intro about-intro section-wrap"><Eyebrow>About the initiative</Eyebrow><h1>Young students deserve room to <span>think deeply.</span></h1><p>We make proof-based mathematics approachable, challenging, and free—so students can explore beyond the standard curriculum.</p></section>
        <section className="mission-strip"><div className="section-wrap mission-inner"><span className="mission-mark" aria-hidden="true">“</span><div><Eyebrow>Our purpose</Eyebrow><h2>Proof is a way to understand, not just a way to get the answer.</h2></div><p>We help students ask better questions, test ideas, and explain why a mathematical claim must be true.</p></div></section>
        <section className="team-section section-wrap"><div className="section-heading-row"><div><Eyebrow>Student-led · Instructor-taught</Eyebrow><h2>Meet your instructors.</h2></div><p>We know what it’s like to meet proof for the first time. We’re here to make that first step feel possible.</p></div>
          <div className="team-grid">
            <article className="team-card"><img src={danielPhoto} alt="Daniel Dimitrov" /><div className="team-info"><span>FOUNDER · INSTRUCTOR</span><h3>Daniel Dimitrov</h3><p>Daniel is a junior at NCSSM-Durham, a three-time AIME qualifier, and a coach for his middle school’s MATHCOUNTS team.</p></div></article>
            <article className="team-card"><img src={watsonPhoto} alt="Watson Houck" /><div className="team-info"><span>CO-FOUNDER · INSTRUCTOR</span><h3>Watson Houck</h3><p>Watson is a junior at NCSSM-Durham and a three-time AIME qualifier. He has participated in math competitions since elementary school and attended PROMYS in 2026.</p></div></article>
          </div>
        </section>
        <section className="about-cta section-wrap"><div><Eyebrow>Explore with us</Eyebrow><h2>Ready to meet mathematics from a new angle?</h2></div><a className="button" href="courses.html">See the course <span aria-hidden="true">↗</span></a></section>
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
        <label>Course<select name="course" defaultValue="" required><option value="" disabled>Select a course</option><option value="Communication of Mathematical Reasoning">Communication of Mathematical Reasoning: Weeks of Oct 26–Nov 23</option><option value="" disabled>Elementary Mathematics (planned)</option><option value="" disabled>LaTeX for Mathematicians (planned)</option></select></label>
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
          <aside className="registration-aside"><div className="aside-card"><span className="live-badge"><i></i> CURRENT SESSION</span><h2>Communication of Mathematical Reasoning</h2><dl><div><dt>Dates</dt><dd>Weeks of Oct 26–Nov 23</dd></div><div><dt>Monday option</dt><dd>8:00–9:30 PM Eastern</dd></div><div><dt>Wednesday option</dt><dd>7:00–8:30 PM Eastern</dd></div><div><dt>Cost</dt><dd>Free</dd></div></dl><p>You’ll receive class information and a Google Classroom invitation by email.</p></div><ArrowLink href="courses.html">Read about the course</ArrowLink></aside>
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
        <section className="form-page-intro section-wrap"><Eyebrow>Get in touch</Eyebrow><h1>Questions? <span>We’re listening.</span></h1><p>Students, parents, and educators are welcome to reach out.</p></section>
        <section className="contact-layout section-wrap">
          <div className="contact-copy"><div className="contact-art" aria-hidden="true"><span>?</span><i></i><i></i><i></i></div><h2>Need a course detail?</h2><p>Find the schedule, class overview, and answers to common questions on the course page.</p><ArrowLink href="courses.html">View course information</ArrowLink></div>
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
