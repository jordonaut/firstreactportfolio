// src/pages/caseStudies/GayCity.jsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../index.css';

// Layout & UI
import { CaseStudyLayout } from '../ui/CaseStudyLayout';
import { Section } from '../ui/Section';
import { HeroSection } from '../ui/HeroSection';
import { CaseStudyImage } from '../ui/CaseStudyImage';
import { FeatureQuote } from '../ui/FeatureQuote';
import { FullBleed } from '../ui/FullBleed';
import { PullQuote } from '../ui/PullQuote';

// Assets
import gayCityHero from '../../assets/images/caseStudies/gayCity/gay-city-hero.png';
import q1 from '../../assets/images/caseStudies/gayCity/survey-data-q1.png';
import q3 from '../../assets/images/caseStudies/gayCity/survey-data-q3.png';
import notes from '../../assets/images/caseStudies/gayCity/facilitation-notes.jpg';
import iaSketch from '../../assets/images/caseStudies/gayCity/ia-sketch.jpg';
import sitemap from '../../assets/images/caseStudies/gayCity/sitemap.png';
import staging1 from '../../assets/images/caseStudies/gayCity/staging-1.png';
import staging2 from '../../assets/images/caseStudies/gayCity/staging-2.png';
import staging3 from '../../assets/images/caseStudies/gayCity/staging-3.png';
import staging4 from '../../assets/images/caseStudies/gayCity/staging-4.png';
import staging5 from '../../assets/images/caseStudies/gayCity/staging-5.png';
import staging6 from '../../assets/images/caseStudies/gayCity/staging-6.png';
import splash from '../../assets/images/caseStudies/gayCity/testing-splash.png';
import tech from '../../assets/images/caseStudies/gayCity/testing-tech.png';
import testingMobile from '../../assets/images/caseStudies/gayCity/testing-mobile.png';

const thisCase = {
  slug: 'gay-city',
  title: 'Rebuilding Gay City’s Website',
  subtitle: 'Coding Through Collapse to Restore a Queer Org’s Digital Lifeline',
  heroImage: gayCityHero,
  alt: 'Screenshot of redesigned Gay City homepage',
  caption: 'Homepage of the redesigned Gay City site, coded and launched solo.',
  role: 'Communications Designer → Front-End Dev',
  tools: 'Sketch, WordPress, HTML, CSS',
  tags: ['Web Design', 'WordPress', 'Nonprofit', 'LGBTQ+ Org', 'Accessibility'],
};

export default function GayCity() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      <button
        onClick={() => navigate(-1)}
        className="md:hidden text-[var(--color-accent)] underline mb-4"
      >
        ← Back to Projects
      </button>

      <CaseStudyLayout>
        <motion.div layoutId={`card-${thisCase.slug}`}>
          <HeroSection
            title={thisCase.title}
            subtitle={thisCase.subtitle}
            image={thisCase.heroImage}
            alt={thisCase.alt}
            caption={thisCase.caption}
            role={thisCase.role}
            tools={thisCase.tools}
            tags={thisCase.tags}
          />
        </motion.div>

        <Section id="background" data-label="Background">
          <h2 className="text-2xl font-semibold">Welcome to Nonprofits</h2>
          <p>
            I joined Gay City as a Communications Designer—initially brought on to make flyers, event banners, and newsletters. But the loudest communication problem wasn’t on paper. It was online.
          </p>
          <p className="mt-4">
            The website was broken.
            Not metaphorically—functionally. It wasn’t mobile-friendly. It wasn’t editable. And it wasn’t meeting the needs of the queer community it was built for.
          </p>
          <p className="mt-4">
            No one was maintaining it. No one could.
            The team was burned out. The tool was brittle. And yet every week, hundreds of users still relied on it to access health services, youth programs, and community.
          </p>
          <p className="mt-4">
            I wasn’t hired to fix the website.
            But I asked if I could.
          </p>
        </Section>

        <CaseStudyImage
          images={[
            {
              src: q1,
              alt: "Bar graph showing how users first heard about Gay City",
              caption:
                "46% of users found Gay City through word of mouth. This confirmed what many already knew—connection, not algorithms, drove engagement. The website needed to honor that trust, not undermine it."
            },
            {
              src: q3,
              alt: "Bar graph showing frequency of website visits",
              caption:
                "Weekly usage was high, with 38% of respondents returning regularly. These weren’t one-time visitors—they were returning users with unmet needs. The site had to perform as a core part of their care infrastructure."
            }
          ]}
        />

        <Section id="research" data-label="Research">
            <h2 className="text-2xl font-semibold">Research: Listening First</h2>
            <p>
                I started by listening—not just to staff, but to the public. A community survey reached over 10,000 past site users and returned more than 600 responses.
            </p>

            <p className="mt-4">
                The data revealed deep loyalty—but also deep friction:
            </p>

            <ul className="ml-0 mt-2 space-y-4 text-[var(--color-text)]">
                <li>
                <span className="text-xl font-bold text-[var(--color-accent)]">46%</span> of users first heard about Gay City through <strong>word of mouth</strong>—not search, not social.
                </li>
                <li>
                <span className="text-xl font-bold text-[var(--color-accent)]">38%</span> visited the site <strong>weekly</strong>, and another <strong>36%</strong> monthly.
                </li>
                <li>
                <span className="text-xl font-bold text-[var(--color-accent)]">34%</span> rated their satisfaction at <strong>5/10 or lower</strong>.
                </li>
                <li>
                Only <span className="text-xl font-bold text-[var(--color-accent)]">5%</span> said finding information was “very easy.”
                </li>
            </ul>

            <p className="mt-4">
                Qualitative interviews echoed this disorientation and doubt:
            </p>

             <PullQuote align='right' attribution="Program staff (interview)">
                We were sending people to a broken website because we didn’t know where else to point them.
            </PullQuote>

            <PullQuote attribution="Community member (interview)">
                I just wanted to know if they were still open. I ended up messaging a friend to ask.
            </PullQuote>

            <p className="mt-4">
                These weren’t just usability concerns. They were signs of <strong>lost trust</strong>.
                People weren’t confident they’d find what they needed—so they stopped trying. Staff weren’t confident they could maintain or update content—so they stopped trying, too.
            </p>

            <p className="mt-4">
                The site had stopped serving as a guide. It had become a gate.
            </p>
            </Section>

            <Section id="design" data-label="Design">
               <h2 className="text-2xl font-semibold">Design: From Friction to Flow</h2>
                
                <p>
                    The hardest part of the redesign wasn’t the interface—it was the interface between departments.
                    Gay City’s teams had grown fragmented over time. Youth services, testing, arts programming, and admin each had their own goals—and their own frustrations with how the site failed them.
                </p>

                <p className="mt-4">
                    I didn’t begin with wireframes. I began with relationships.
                    Over several weeks, I met one-on-one with every department lead. I listened. I mapped their pain points. And I asked the quiet questions that sometimes get skipped:
                    <em>“Where are you feeling invisible?”</em> <em>“What are you tired of explaining?”</em>
                </p>

                <p className="mt-4">
                    Those conversations became the foundation for a live information architecture workshop—the first time some teams had sat together to talk about the site in years.
                    There were competing priorities, sure. But there was also alignment: everyone wanted the site to feel trustworthy again.
                </p>

                <CaseStudyImage
                    images={[
                    {
                        src: notes,
                        alt: "Facilitation notes from IA workshop",
                        caption:
                        "Facilitation notes from a cross-department IA workshop. Each sticky represents a different stakeholder’s pain point or priority."
                    },
                    {
                        src: iaSketch,
                        alt: "Mobile-first wireframes sketched in Sketch app",
                        caption:
                        "Early wireframes explored how to surface high-demand content—like testing hours—while still making space for community and art."
                    }
                    ]}
                />

                <p className="mt-4">
                    With trust reestablished, I created mobile-first wireframes in Sketch that:
                </p>

                <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>Surfaced testing access and health services as the primary entry point</li>
                    <li>Elevated youth and arts programming into visible, accessible sections</li>
                    <li>Created a unified tone and visual structure that reflected the org’s care work</li>
                </ul>

                <p className="mt-4">
                    This wasn’t just a content reorg—it was a signal: that people mattered, that services were reachable, and that digital infrastructure could rebuild trust.
                </p>
                </Section>
                <CaseStudyImage
                    images={[
                        {
                            src: sitemap,
                            alt: "Sitemap of the redesigned website after the staff meeting turned IA workshop",
                            caption:
                            "Sitemap of the redesigned website after the staff meeting turned IA workshop. The new structure prioritized user needs and organizational goals."
                        },
                        ]}></CaseStudyImage>

                        <Section id="development" data-label="Development">
                        <h2 className="text-2xl font-semibold">Development: Making It Work</h2>

                        <p>
                            Gay City had originally planned to contract a developer. But midway through the project, the handoff never came.
                            No codebase. No documentation. No plan.
                        </p>

                        <p className="mt-4">
                            With launch approaching and no dev on deck, I opened up WordPress.
                            I studied the Divi builder. I combed through message boards. I read up on accessibility, mobile responsiveness, and what little documentation existed.
                            Then—I built it.
                        </p>

                        <p className="mt-4">
                            I wrote custom CSS and structured HTML directly within the Divi framework to override legacy styles.
                            I refactored layouts to ensure they rendered properly on mobile—especially important given the <strong>63%</strong> of users accessing the site via phones and tablets.
                            And I created a structure that was editable by staff—not just devs—so the site wouldn’t collapse again.
                        </p>

                        <ul className="list-disc ml-6 mt-4 space-y-2">
                            <li>Refactored layouts using semantic HTML and CSS inside the Divi framework</li>
                            <li>Created mobile-first overrides to support majority mobile users</li>
                            <li>Wrote scoped CSS to restore brand consistency and clarity</li>
                            <li>Documented everything for future maintenance and staff onboarding</li>
                        </ul>

                        <p className="mt-4">
                            I didn’t touch the PHP. But I did everything else the site needed to stand again.
                            I made it responsive. I made it maintainable. And I made it trustworthy—on the front end, where users were watching.
                        </p>
                        </Section>

            <CaseStudyImage
                images={[
                    {
                    src: staging1,
                    alt: "Screenshot of staging site with new homepage layout",
                    caption: "Staging site showing the new homepage layout, with clear navigation and accessible content."
                    },
                    {
                    src: staging2,
                    alt: "Screenshot of staging site with new program sections",
                    caption: "Staging site showing the new program sections, including youth and arts programming."
                    },
                    {
                    src: staging3,
                    alt: "Screenshot of staging site with new testing access information",
                    caption: "Staging site showing the new testing access information, prominently featured for easy access."
                    },
                ]}
            />
            <CaseStudyImage
                images={[
                    {
                    src: staging4,
                    alt: "Screenshot of staging site for the Wellness center",
                    caption: "The Wellness Center was one of the most important parts of Gay City's site for both staff and community members."
                    }
                ]}
            />
        <Section id="outcome" data-label="Outcome">
            <h2 className="text-2xl font-semibold">Outcome: A Quiet Launch That Held</h2>

            <p>
                We didn’t do a big launch. There wasn’t a press release or a ribbon-cutting Zoom.
                We just updated the DNS and watched the site go live.
            </p>

            <p className="mt-4">
                But in the months that followed, the impact was clear:
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2">
                <li><strong>45%</strong> increase in online wellness donations</li>
                <li>Fewer phone calls asking how to book testing</li>
                <li>Program teams gained direct access to edit their own content</li>
                <li>The site no longer felt like an apology—it became a promise</li>
            </ul>

            <p className="mt-4">
                For users, the site became a reliable entry point to health, culture, and connection.
                For staff, it became a system they could trust—and touch—again.
            </p>
            </Section>
            <CaseStudyImage
                images={[
                    {
                        src: splash,
                        alt: "Screen Capture of the Testing splash page",
                        caption: "The Testing splash page, designed to be clear and accessible for users seeking health services."
                    },
                    {
                        src: tech,
                        alt: "Screenshot of the Testing page on mobile",
                        caption: "The Testing page on mobile, ensuring accessibility for users on all devices."
                    },
                ]}/>

            <FeatureQuote subline="Sometimes when the people around you are too tired to dream again—you build the thing anyway.">
                Design is a form of stewardship.
            </FeatureQuote>

            <Section id="reflection" data-label="Reflection">
            <h2 className="text-2xl font-semibold">Reflection: The Real Work</h2>
            <p>
                I wasn’t hired to rebuild Gay City’s website. I wasn’t expected to carry the code, the architecture, or the emotional weight behind it.
                But when the path forward vanished and the team had no one left to turn to—I chose to stay.
                Because that’s what the work required.
            </p>

            <p className="mt-4">
                Years later, the site is still online. The bones—the structure, the flow, the accessibility—are mine.
                And that matters. Not because it looks impressive.
                But because it holds.
            </p>

            <p className="mt-4">
                It holds people. It holds purpose. It holds history.
                And it did so at a time when trust had been lost—not just in the website, but in what Gay City could still be.
            </p>

            <p className="mt-4">
                Since then, I’ve continued building systems rooted in the same ethic:
                clarity, stability, and care under pressure.
                This very portfolio framework is part of that practice—growing more modular, more expressive, more intentional with every story I add.
            </p>
            </Section>

      </CaseStudyLayout>
    </motion.div>
  );
}

export const gayCityMeta = {
  slug: 'gay-city',
  title: 'Gay City',
  subtitle: 'Coding Through Complexity to Restore a Queer Org’s Digital Lifeline',
  heroImage: gayCityHero,
  alt: 'Screenshot of redesigned Gay City homepage',
  caption: 'Homepage of the redesigned Gay City site, coded and launched solo.',
  role: 'Communications Designer → Front-End Dev',
  tools: 'Sketch, WordPress, HTML, CSS',
  tags: ['Web Design', 'WordPress', 'Nonprofit', 'LGBTQ+ Org', 'Accessibility'],
  component: GayCity,
  featured: true,
};
