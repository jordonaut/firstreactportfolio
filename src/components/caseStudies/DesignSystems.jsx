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
import lessonTablesAfter from '../../assets/images/caseStudies/designSystems/selected-view-with-annotations.png';
import chipsConsolidation from '../../assets/images/caseStudies/designSystems/chips-consolodation.png';
import statusChips from '../../assets/images/caseStudies/designSystems/status-chips.png';
import studentLessonChips from '../../assets/images/caseStudies/designSystems/student-lesson-chips.png';
import darkModeColors from '../../assets/images/caseStudies/designSystems/dark-mode-colors.png';
import lessonTables from '../../assets/images/caseStudies/designSystems/lesson-tables.png';

const thisCase = {
  slug: 'design-systems',
  title: 'Scaling the Boeing Training Solutions Design System',
  subtitle: 'Building Cohesion Through Design Governance',
  heroImage: designSystemsHero,
  alt: 'Design System architecture diagram',
  caption: 'A cross-product component architecture built to scale with Boeing training tools.',
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

        <Section id="context" data-label="Context">
          <h2 className="text-2xl font-semibold">A thriving product ecosystem with invisible cracks</h2>
          <p>
            Walking into Boeing's Training Solutions office in 2023 felt like stepping into a thriving startup—except this "startup" was serving thousands of pilots and flight instructors across commercial aviation. Virtual Airplane was mature and scaling. Lesson Builder was gaining traction with training organizations. New products were in development.
          </p>
          <p className="mt-4">
            But if you looked closely, something was off. A dropdown in Virtual Airplane worked differently than one in Lesson Builder. Table interactions varied between products. Status indicators used different colors, different shapes, different meanings. Each team had their own Figma library, their own component naming conventions, their own way of solving the same problems.
          </p>
          <p className="mt-4">
            It wasn't malicious—it was natural. When teams move fast and work in silos, design languages drift. The cost shows up later: in longer development cycles, in user confusion, in the small paper cuts that erode trust in your products.
          </p>
          <p className="mt-4">
            I'd just finished a successful run with Virtual Airplane's Lesson Overlay—my primary project that had gotten to a good place with clear user impact and team alignment. With that deliverable stable, I found myself with bandwidth to think bigger. I raised my hand. "What if I took on the design system work?" I asked my manager. "What if we fixed this properly?"
          </p>
        </Section>
        <CaseStudyImage images={[{ src: componentAudit, alt: "Component Audit document clip", caption: "When I noticed the inconsistencies, I started with a component audit to lay it all out." }]} />
        <Section id="chips" data-label="The First Signal">
          <h2 className="text-2xl font-semibold">The first signal: Chips everywhere</h2>
          <p>
            My entry point into the design system work wasn’t a grand strategy document — it was a simple chip.
          </p>
          <p className="mt-4">
            While working on a cross-product view, I noticed that status chips looked different in every product. Curious, I pulled them into a Figma board. Seven variants stared back at me — each created for a slightly different use case, with no shared logic behind them.
          </p>
          <p className="mt-4">
            I started digging. The deeper I looked, the more fragmentation I uncovered. What seemed like a simple inconsistency was a symptom of a larger issue: teams were solving the same problems in isolation, without shared processes or patterns.
          </p>
          <p className="mt-4">
            That was my "aha" moment. We didn’t just need better components — we needed a better way of thinking and working together. I raised my hand to lead that effort.
          </p>

          <CaseStudyImage images={[{ src: chipsConsolidation, alt: "Chips consolidation view", caption: "The consolidation exercise revealed that most variations were arbitrary—surface differences hiding the same underlying patterns." }]} />

          <CaseStudyImage images={[{ src: statusChips, alt: "Status Chips example", caption: "Status chips in their natural habitat—clear, consistent, purposeful." }]} />

          <CaseStudyImage images={[{ src: studentLessonChips, alt: "Chips in Student Lesson view", caption: "The true test: chips working seamlessly in real product contexts, feeling native rather than imposed." }]} />
        </Section>

        <Section id="realization" data-label="The Real Problem">
          <h2 className="text-2xl font-semibold">It wasn't a design problem—it was a process problem</h2>
          <p>
            The chips audit was illuminating—but it pointed to a deeper truth. We weren’t lacking components; we were lacking alignment. I started having coffee chats with engineers, designers, and product managers across teams.
          </p>
          <p className="mt-4">
            The same story emerged: everyone wanted consistency, but nobody had time to coordinate it. "We just need to ship this feature," was the common refrain. "We'll standardize it later." But later never came.
          </p>
          <p className="mt-4">
            The problem wasn’t technical—it was organizational. We needed shared processes for making design decisions. We needed regular touchpoints. We needed a way to turn individual expertise into collective wisdom.
          </p>
        </Section>

        <Section id="governance" data-label="Building the Foundation">
          <h2 className="text-2xl font-semibold">Starting with people, not pixels</h2>
          <p>
            Before I touched a single component, I started a weekly meeting. "Design System Sync," I called it—30 minutes every Tuesday at 2 PM. No agenda beyond "What are we building, and how should we build it together?"
          </p>
          <p className="mt-4">
            The first few meetings were awkward. Engineers weren't sure why they were there. Designers came with pixel-perfect mockups expecting immediate approval. Product managers worried about timeline impacts.
          </p>
          <p className="mt-4">
            But gradually, something shifted. We started having real conversations about trade-offs. Engineers flagged accessibility issues before they shipped. Designers started thinking about edge cases. Product managers began seeing the system as infrastructure, not overhead.
          </p>

          <Feature title="The Rhythm of Collaboration">
            <p>
              Our Tuesday meetings developed a natural rhythm. First, we'd review what shipped the previous week—celebrating wins and capturing learnings. Then we'd look ahead at what was coming—identifying shared patterns and potential conflicts.
            </p>
            <p className="mt-4">
              The magic happened in the middle: when someone would say "Wait, we solved this same problem last month" or "What if we approached it like this instead?" These weren't formal design reviews—they were conversations about craft.
            </p>
          </Feature>

          <Feature title="Documentation as a Design Tool">
            <p>
              Every decision we made got documented—not in lengthy specification documents, but in the components themselves. Figma became our shared language. Usage guidelines lived next to visual examples. Implementation notes sat alongside design rationale.
            </p>
            <p className="mt-4">
              This wasn't documentation for documentation's sake. It was a way to make our thinking visible to each other, to create a paper trail of decisions that future team members could understand and build on.
            </p>
          </Feature>
        </Section>

        <Section id="components" data-label="A Harder Test">
          <h2 className="text-2xl font-semibold">A harder test: Tables across the ecosystem</h2>
          <p>
            With the success of consolidating chips, teams began to trust the process and each other. That set us up to tackle a bigger challenge: tables.
          </p>
          <p className="mt-4">
            Every product used tables, but no two implemented them the same way. Some had zebra striping, others didn’t. Selection states varied. Column sorting behaved differently. Users were getting confused jumping between products.
          </p>
          <p className="mt-4">
            In our Tuesday sync, I put the problem on the table (pun intended). "We have 47 different table implementations. What if we had one really good one instead?"
          </p>
          <p className="mt-4">
            What followed was three weeks of intense collaboration. Engineers explained technical constraints. Designers advocated for user needs. Product managers highlighted business requirements. We prototyped, tested, iterated, and argued — in the best possible way.
          </p>

          <CaseStudyImage images={[{ src: tableRedesign, alt: "Table redesign overview", caption: "The final table design wasn't a compromise—it was synthesis. Every team got what they needed, but in a way that felt cohesive across products." }]} />

          <CaseStudyImage images={[{ src: lessonTables, alt: "Lesson Table Documentation", caption: "It was important to create clear documentation of the changes we were making, not just for fidelity, but so everyone could be on the same page." }]} />

          

          <Feature title="Before and After">
             <CaseStudyImage images={[{ src: tablesInFigma, alt: "Table components in Figma", caption: "The Figma library became a living repository of institutional knowledge—components that told the story of how we think about data." }]} />
            <p>
              The transformation was dramatic. Lesson Builder's old tables felt cluttered and inconsistent. Users couldn't predict how interactions would work. The new design brought clarity and confidence—every click felt intentional.
            </p>

            <CaseStudyImage images={[
              { src: lessonViewBefore, alt: "Lesson table before redesign", caption: "Before: Inconsistent spacing, unclear interaction patterns, visual chaos that made complex tasks feel harder than they were." }, 
              { src: lessonTablesAfter, alt: "Lesson table after redesign", caption: "After: Clean hierarchy, predictable interactions, the kind of design that gets out of the user's way." }
            ]} />
            <CaseStudyImage images={[{ src: tableAnnotations, alt: "Table component annotations", caption: "Our annotations captured not just what the component looked like, but why it worked that way—the decisions that led to the design." }]} />
          </Feature>
        </Section>

        <Section id="theming" data-label="Future-Proofing">
          <h2 className="text-2xl font-semibold">Building for tomorrow's problems</h2>
          <p>
            One of my favorite moments came during a discussion about dark mode. Someone asked, "Do we need this now?" and one of our senior engineers responded, "No, but we should build like we do."
          </p>
          <p className="mt-4">
            That's when you know a design system is working—when teams start thinking systemically, considering future needs alongside current ones. We built our token architecture to support theming from the start, even though we didn't have immediate plans to use it.
          </p>

          <CaseStudyImage images={[{ src: darkModeColors, alt: "Dark mode color tokens", caption: "Good architecture is invisible until you need it—then it makes impossible things feel inevitable." }]} />
        </Section>

        <Section id="impact" data-label="What Changed">
          <h2 className="text-2xl font-semibold">Beyond the components</h2>
          <p>
            Six months after starting this work—from first noticing inconsistent chips to leading a cross-team governance process—the impact was clear.
          </p>
          <p className="mt-4">
            Designers started asking, "Is there a pattern for this?" before building something new. Engineers began proposing component improvements during implementation. Product managers started thinking about features in terms of system-wide impact.
          </p>
          <p className="mt-4">
            The Tuesday syncs evolved from my initiative to everyone's expectation. Teams started requesting them for their own projects. The process had become part of the culture.
          </p>

          <Feature title="The Numbers">
            <p>
              The quantitative impact was significant. Component development time dropped by roughly 50%. Cross-team inconsistencies decreased dramatically. QA cycles shortened as teams began catching pattern violations earlier in the process.
            </p>
            <p className="mt-4">
              But the qualitative changes mattered more. Teams started talking to each other differently. Design became a collaborative discipline rather than a handoff process. The system wasn't just a library of components—it was a shared way of thinking.
            </p>
          </Feature>

          <Feature title="Spreading Beyond Boeing Training">
            <p>
              The most gratifying moment came when teams outside Training Solutions started asking about our process. "How do you make design decisions together?" became a common question. The governance model we'd built started influencing other parts of Boeing's digital organization.
            </p>
            <p className="mt-4">
              That's when I knew we'd built something lasting. Not just components that would eventually be deprecated, but processes that would outlive any individual product or person.
            </p>
          </Feature>
        </Section>

        <Section id="reflection" data-label="What I Learned">
          <h2 className="text-2xl font-semibold">Systems thinking in practice</h2>
          <p>
            Design systems aren't really about design—they're about systems. They're about creating shared understanding across different disciplines, different timelines, different priorities. The components are just the artifact of that understanding.
          </p>
          <p className="mt-4">
            The hardest part wasn't making things look consistent. It was helping teams think consistently. It was building trust across silos. It was turning individual craft into collective capability.
          </p>
          <p className="mt-4">
            If I had to do it again, I'd start with the people side even sooner. The best design systems aren't imposed—they're grown. They emerge from teams that have learned to see their work as part of something larger than themselves.
          </p>
          <p className="mt-4">
            That's the real work of design systems: not standardizing pixels, but aligning perspectives. Creating the conditions where good design decisions happen naturally, consistently, collaboratively.
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
  subtitle: 'Building Cohesion Through Design Governance',
  heroImage: designSystemsHero,
  alt: 'Design System architecture diagram',
  caption: 'A cross-product component architecture built to scale with Boeing training tools.',
  role: 'Product Designer → Design Systems Lead',
  tools: 'Figma, GitLab, Material UI',
  tags: ['Product Design', 'Design Systems', 'Enterprise UX', 'Boeing', 'Figma'],
  component: DesignSystems,
  featured: true,
};
