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

// Assets (placeholder - swap with actual imports when images available)
import gayCityHero from '../../assets/images/caseStudies/gayCity/gay-city-hero.png';

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
          <h2 className="text-2xl font-semibold">Not the Job I Was Hired For</h2>
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
          <h2 className="text-2xl font-semibold">From IA Workshop to Wireframes</h2>
          <p>
            I gathered stakeholders across programs and facilitated a live information architecture workshop.
            Each department had competing needs, but shared pain.
          </p>
          <p className="mt-4">
            With Sketch, I built mobile-first wireframes that:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Highlighted testing hours and scheduler links</li>
            <li>Created space for youth programming and art events</li>
            <li>Unified brand tone across a cleaner layout</li>
          </ul>
        </Section>

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

        <Section id="reflection" data-label="Reflection">
          <h2 className="text-2xl font-semibold">The Real Work</h2>
          <p>
            Years later, the site’s still online. The bones—the IA, the styles, the structure—are mine.
            I wasn’t hired to do this. I didn’t even know if I should.
            But I did it because queer infrastructure matters.
          </p>
          <p className="mt-4">
            You make it work. You make it gentle. You make it home.
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