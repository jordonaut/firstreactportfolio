// src/pages/caseStudies/DesignSystems.jsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../index.css';

// Layout & UI
import { CaseStudyLayout } from '../ui/CaseStudyLayout';
import { Section } from '../ui/Section';
import { HeroSection } from '../ui/HeroSection';
import { CaseStudyImage } from '../ui/CaseStudyImage';
import { FeatureQuote } from '../ui/FeatureQuote';

// Assets 
import designSystemsHero from '../../assets/images/caseStudies/designSystems/design-systems-hero.png';
import componentAudit from '../../assets/images/caseStudies/designSystems/component-audit.png';
import tableRedesign from '../../assets/images/caseStudies/designSystems/table-redesign.png';
import tableAnnotations from '../../assets/images/caseStudies/designSystems/table-annotations-upclose.png';
import tablesInFigma from '../../assets/images/caseStudies/designSystems/tables-in-figma.png';
import lessonViewBefore from '../../assets/images/caseStudies/designSystems/lesson-view-before-upclose.png';
import lessonTablesAfter from '../../assets/images/caseStudies/designSystems/lesson-tables.png';
import selectedViewAnnotations from '../../assets/images/caseStudies/designSystems/selected-view-with-annotations.png';
import chipsConsolidation from '../../assets/images/caseStudies/designSystems/chips-consolodation.png';
import statusChips from '../../assets/images/caseStudies/designSystems/status-chips.png';
import studentLessonChips from '../../assets/images/caseStudies/designSystems/student-lesson-chips.png';
import darkModeColors from '../../assets/images/caseStudies/designSystems/dark-mode-colors.png';

const thisCase = {
  slug: 'design-systems',
  title: 'Scaling the Boeing Training Solutions Design System',
  subtitle: 'Building Cohesion Across Boeing Training Tools',
  heroImage: designSystemsHero,
  alt: 'Design System architecture diagram',
  caption: 'A cross-product component architecture built to scale with Boeing’s training tools.',
  role: 'Product Designer → Design Systems Lead',
  tools: 'Figma, GitLab, Material UI',
  tags: ['Product Design', 'Design Systems', 'Enterprise UX', 'Boeing', 'Figma'],
};

export default function DesignSystems() {
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
          <h2 className="text-2xl font-semibold">The Challenge: Scaling Design at Boeing</h2>
          <p>
            By 2023, Boeing’s Training Solutions ecosystem had expanded to serve thousands of pilots and instructors worldwide. But the design language behind these products hadn’t kept pace.
          </p>
          <p className="mt-4">
            Each team was building its own components. Patterns drifted. Inconsistencies surfaced in critical workflows—from training overlays to lesson creation. The cost wasn’t just visual polish. It was velocity, trust, and product quality.
          </p>
          <p className="mt-4">
            After getting to a good place with the Lesson Overlay, I asked to take on a broader role: leading the design system effort across Boeing Training Solutions. The goal? Create a shared foundation that would scale with our growing product ecosystem.
          </p>
        </Section>
        <FeatureQuote subline="Designing products is one thing—designing the system that designs products is another.">
          Good systems encode shared decisions, trade-offs, and team values.
        </FeatureQuote>

        <CaseStudyImage
          images={[{
            src: componentAudit,
            alt: "Component audit results",
            caption: "Initial audit revealed fragmentation across core UX primitives—tables, chips, dropdowns, and token usage."
          }]}
        />

        <Section id="process" data-label="Process">
          <h2 className="text-2xl font-semibold">Process: From Audit to Architecture</h2>
          <p>
            We began with a full component audit across Virtual Airplane, Lesson Builder, and emerging tools. Partnering with engineering, design, and product leads, we mapped:
          </p>
          <p className="mt-4">
            The audit surfaced critical friction points:
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Multiple conflicting table patterns</li>
            <li>Inconsistent chips with no clear guidelines</li>
            <li>Token drift and missing design/engineering parity</li>
            <li>Teams independently solving similar interaction problems</li>
          </ul>
        </Section>

        <Section id="architecture" data-label="System Architecture">
          <h2 className="text-2xl font-semibold">Building Shared Foundations</h2>
          <p>
            With the audit in hand, I helped lead architecture decisions across our top priority components—creating the shared patterns that would ultimately serve as the foundation for Boeing’s evolving Training Solutions UX.
          </p>

          <Feature title="Table Components">
            We defined a max column count, clarified flexible vs. fixed cell rules, and documented spacing and selection controls. These changes reduced engineering inconsistencies and improved UX clarity.
          </Feature>

          <CaseStudyImage images={[{ src: tableRedesign, alt: "Table redesign overview", caption: "Table redesign established unified behaviors for cell structure, spacing, and selection—aligned to real-world data complexity." }]} />

          <CaseStudyImage images={[{ src: tableAnnotations, alt: "Table component annotations", caption: "Detailed table annotations clarified interaction rules for designers and engineers." }]} />

          <CaseStudyImage images={[{ src: tablesInFigma, alt: "Table components in Figma", caption: "Shared Figma components enabled flexible reuse across Virtual Airplane, Lesson Builder, and future products." }]} />
        </Section>

        <CaseStudyImage images={[{ src: lessonViewBefore, alt: "Lesson table before redesign", caption: "Before redesign: fragmented table patterns and visual inconsistencies disrupted user flow." }]} />

        <CaseStudyImage images={[{ src: lessonTablesAfter, alt: "Lesson table after redesign", caption: "After redesign: consistent spacing, clearer interactions, improved usability." }]} />

        <Feature title="Chips Consolidation">
          I led the consolidation of multiple chip variants—including Status Chips, Selection Chips, and legacy patterns—into a unified component architecture. We defined sizing, spacing, color tokens, and behavior across light and dark themes, ensuring that chips scaled consistently across Training Solutions products.
          <CaseStudyImage images={[{ src: chipsConsolidation, alt: "Chips consolidation view", caption: "Chips consolidation defined unified guidelines for size, spacing, color, and behavior." }]} />
          <CaseStudyImage images={[{ src: statusChips, alt: "Status Chips example", caption: "Standardized Status Chips—used consistently across Virtual Airplane and Lesson Builder." }]} />
          <CaseStudyImage images={[{ src: studentLessonChips, alt: "Chips in Student Lesson view", caption: "Final Chips implementation in real product context—Student Lesson view." }]} />
        </Feature>

        <Feature title="Design System Flexibility">
          To future-proof the system, we also introduced flexible theming support through token architecture—enabling consistent light and dark modes across products without fragmenting component structure.
          <CaseStudyImage images={[{ src: darkModeColors, alt: "Dark mode color tokens", caption: "Dark mode tokens extended system flexibility across Training Solutions products." }]} />
        </Feature>

        <Section id="outcome" data-label="Outcomes">
          <h2 className="text-2xl font-semibold">Outcomes</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Shared Design System now used across Virtual Airplane, Lesson Builder, and new LS products</li>
            <li>Increased velocity for new product development</li>
            <li>Reduced QA issues caused by pattern inconsistencies</li>
            <li>Improved engineering/design alignment and trust</li>
            <li>Foundation for broader scaling across Boeing training tools</li>
          </ul>

          <p className="mt-4">
            Design system work should be invisible when it’s working well. At Boeing, this effort gave our teams the clarity and confidence to move faster—without sacrificing cohesion.
          </p>

          <p className="mt-4">
            Scaling design is about more than components. It’s about building shared trust across products, patterns, and the people behind them.
          </p>
        </Section>

        
      </CaseStudyLayout>
    </motion.div>
  );
}

function Feature({ title, children }) {
  return (
    <div className="space-y-4 my-8">
      <h3 className="text-xl font-semibold text-[var(--color-accent)]">{title}</h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

export const designSystemsMeta = {
  slug: 'design-systems',
  title: 'Scaling the Boeing Training Solutions Design System',
  subtitle: 'Building Cohesion Across Boeing Training Tools',
  heroImage: designSystemsHero,
  alt: 'Design System architecture diagram',
  caption: 'A cross-product component architecture built to scale with Boeing’s training tools.',
  role: 'Product Designer → Design Systems Lead',
  tools: 'Figma, GitLab, Material UI',
  tags: ['Product Design', 'Design Systems', 'Enterprise UX', 'Boeing', 'Figma'],
  component: DesignSystems,
  featured: true,
};
