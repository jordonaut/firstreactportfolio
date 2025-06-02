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

// Assets (placeholder - swap with actual imports when images available)
import gayCityHero from '../../assets/images/caseStudies/gayCity/gay-city-hero.png';
import q1 from '../../assets/images/caseStudies/gayCity/survey-data-q1.png';
import q3 from '../../assets/images/caseStudies/gayCity/survey-data-q3.png';
import notes from '../../assets/images/caseStudies/gayCity/facilitation-notes.jpg';
import iaSketch from '../../assets/images/caseStudies/gayCity/ia-sketch.jpg';
import sitemap from '../../assets/images/caseStudies/gayCity/sitemap.png';

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
          <h2 className="text-2xl font-semibold">Welcome to Non-Profits</h2>
          <p>
            I joined Gay City as a Communications Designer—hired to make flyers, event banners, and newsletters.
            But the biggest communication barrier was the one no one wanted to talk about: the website.
            It wasn’t mobile-friendly, barely editable, and riddled with broken components.
          </p>
          <p className="mt-4">
            It wasn’t just outdated—it had become a symbol of organizational burnout.
            No one knew how to fix it, and everyone was too tired to try. So I asked if I could.
          </p>
        </Section>

           <CaseStudyImage
                images={[
                    { src: q1, alt: "Data that was collected to understand the website", caption: "When I took on this task, I used the opportunity to actually hear from users not just about the website, but how they came to find Gay City in the first place." },
                    { src: q3, alt: "Data that was collected to understand the website", caption: "The data was clear: most people used the site for HIV/STI testing, and many were first-time visitors looking for queer resources." }
                    ]}
                        />

        <Section id="research" data-label="Research">
          <h2 className="text-2xl font-semibold">Listening First</h2>
          <p>
            I launched a user survey to over 10,000 past site visitors and received 600+ responses. The data was clear:
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>87% used the site for HIV/STI testing</li>
            <li>63% visited via mobile devices</li>
            <li>Most users bookmarked the scheduler and skipped everything else</li>
          </ul>
          <p className="mt-4">
            More importantly, many users said Gay City was their first queer touchpoint in Seattle.
            The site wasn’t just failing functionally—it was failing emotionally.
          </p>
        </Section>

        <Section id="design" data-label="Design">
            <h2 className="text-2xl font-semibold">From Friction to Flow</h2>

            <p>
                The biggest challenge wasn’t the tech stack—it was the disconnect between departments.
                Gay City’s teams had grown fragmented over time. Youth services, testing, arts programming, operations, and comms each had their own goals, their own audiences, and their own frustrations with how the website failed them.
            </p>
            <CaseStudyImage
                images={[
                    { src: notes, alt: "Data that was collected to understand the website", caption: "When I took on this task, I used the opportunity to actually hear from users not just about the website, but how they came to find Gay City in the first place." },
                    { src: iaSketch, alt: "Data that was collected to understand the website", caption: "The data was clear: most people used the site for HIV/STI testing, and many were first-time visitors looking for queer resources." }
                    ]}
                        />
            <p className="mt-4">
                I didn’t start with wireframes. I started with relationships.
                Over the course of several weeks, I met one-on-one with each department lead to understand their needs, their blockers, and how they wanted their work to be seen online.
                I listened for what they were trying to protect, what they felt invisible inside of, and where the old site had left them feeling abandoned.
            </p>

            <p className="mt-4">
                After building that foundation, I facilitated a full information architecture workshop—bringing everyone into the same room for the first time.
                It wasn’t always smooth. There were moments of tension, competing priorities, and longstanding frustrations.
                But having already earned some trust, I was able to hold space for the mess—and guide us toward shared clarity.
            </p>

            <p className="mt-4">
                From that process, I created mobile-first wireframes in Sketch that:
            </p>

            <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Centered testing access and health resources as the most-used feature</li>
                <li>Elevated youth and arts programming with dedicated, easy-to-update sections</li>
                <li>Established a unified brand tone that honored departmental voice without creating chaos</li>
            </ul>

            <CaseStudyImage
                                images={[
                  {
                    src: sitemap,
                    alt: "Sitemap of the proposed redesign, showing a clear hierarchy and flow of content",
                    caption: "The sitemap I created helped visualize the new structure, ensuring each department’s needs were met while keeping the user journey clear."
                  }
                ]}
                />
            </Section>

        <FeatureQuote subline="A signal that even in burnout and breakdown, alignment is still possible when care is part of the process."> 
                The site became more than a tool—it became a point of reconnection.
                A shared artifact we built together. </FeatureQuote>

        <Section id="development" data-label="Development">
          <h2 className="text-2xl font-semibold">No Dev? No Problem.</h2>
          <p>
            Our contracted developer disappeared midway through implementation. With no handoff or documentation, I opened up WordPress and taught myself enough PHP, HTML, and CSS to bring it to life.
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Built a custom child theme from scratch</li>
            <li>Restyled legacy components with CSS overrides</li>
            <li>Made the site mobile-first, accessible, and editable by staff</li>
            <li>Documented everything for future handoffs</li>
          </ul>
        </Section>

        <Section id="outcome" data-label="Outcome">
          <h2 className="text-2xl font-semibold">Quiet Launch, Big Impact</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>45% increase in online wellness donations</li>
            <li>Fewer phone calls asking how to book testing</li>
            <li>Staff gained edit access and digital autonomy</li>
            <li>The site no longer felt like an apology</li>
          </ul>
        </Section>

        <FeatureQuote subline="Design is a form of stewardship.">
          Sometimes when the people around you are too tired to dream again—
          you build the thing anyway.
        </FeatureQuote>

        <Section id="reflection" data-label="The Real Work">
        <h2 className="text-2xl font-semibold">The Real Work</h2>

        <p>
            This project changed how I think about design. It reminded me that craft isn’t always clean or quiet.
            Sometimes it means stepping in with steadiness when systems break—holding tension, rebuilding trust, and refusing to look away.
        </p>

        <p className="mt-4">
            I wasn’t hired to rebuild Gay City’s website. I wasn’t expected to carry the code, the architecture, or the emotional weight behind it.
            But when the developer disappeared and the org had no one else left to turn to, I chose to stay.
            Because that’s what the work required.
        </p>

        <p className="mt-4">
            Years later, the site is still online. The bones—the structure, the flow, the accessibility—are mine.
            And that matters, not because it looks impressive, but because it holds.
            It holds people. It holds purpose. It holds history.
        </p>

        <p className="mt-4">
            Since then, I’ve continued to build systems rooted in that same ethic: clarity, stability, and care under pressure.
            This portfolio framework is part of that practice—growing more modular, more expressive, and more intentional with every case study I add.
        </p>

        <p className="mt-4">
            The real work is rarely glamorous. It’s not always in the spotlight. But it’s there when it counts—quietly holding the line.
        </p>
        </Section>


      </CaseStudyLayout>
    </motion.div>
  );
}

export const gayCityMeta = {
  slug: 'gaycity',
  title: 'Gay City',
  subtitle: 'Coding Through Collapse to Restore a Queer Org’s Digital Lifeline',
  heroImage: gayCityHero,
  alt: 'Screenshot of redesigned Gay City homepage',
  caption: 'Homepage of the redesigned Gay City site, coded and launched solo.',
  role: 'Communications Designer → Front-End Dev',
  tools: 'Sketch, WordPress, HTML, CSS',
  tags: ['Web Design', 'WordPress', 'Nonprofit', 'LGBTQ+ Org', 'Accessibility'],
  component: GayCity,
  featured: true,
};