import { useNavigate } from 'react-router-dom';
import '../../index.css';
import { motion } from 'framer-motion';
import { CaseStudyLayout } from '../ui/CaseStudyLayout';
import { Section } from '../ui/Section';

const transition = { duration: 0.6, ease: [0.4, 0, 0.2, 1] };

export default function VirtualAirplane() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={transition}
    >
      <CaseStudyLayout>
        <Section id="hero">
          <button
            onClick={() => navigate('/')}
            className="text-[var(--color-accent)] underline mb-4"
          >
            ← Back to Home
          </button>
          <header className="space-y-2">
            <h1 className="text-3xl font-bold">✈️ Virtual Airplane Learning System</h1>
            <p><strong>Role:</strong> UX/Product Designer, Design Systems Lead</p>
            <p><strong>Client:</strong> The Boeing Company (Virtual Airplane Program)</p>
            <p><strong>Tools:</strong> Figma, Storybook, Design Tokens</p>
          </header>
        </Section>

        <Section id="discovery">
          <h2 className="text-2xl font-semibold">🔍 Discovery</h2>
          <h3 className="text-xl font-semibold mt-4">Context</h3>
          <p>The Virtual Airplane is used to prepare pilots for certification and in-aircraft training. It supports self-paced learning and instructor-led sessions. For the design to succeed, it had to reduce friction, support flexible teaching styles, and accommodate the procedural rigor of real-world cockpit workflows.</p>

          <h3 className="text-xl font-semibold mt-4">Assumptions</h3>
          <p>The original design assumed pilots would follow a fixed lesson order. It also assumed the FCOM would be used separately—if at all—during training sessions. These assumptions didn’t reflect the reality: pilots needed the FCOM open constantly and navigated training materials based on what they were struggling with—not necessarily in the order we provided.</p>

          <h3 className="text-xl font-semibold mt-4">Research</h3>
          <p>I conducted interviews and collaborative working sessions with Boeing instructional designers, instructors, and commercial pilots. We observed how they used the Virtual Airplane during early training runs and noted the workarounds they developed—especially the constant toggling between the lesson content and the FCOM.</p>
          <p>We also engaged with instructors to understand how they teach through the platform and what flexibility they needed to adjust lesson order or point trainees to specific content on the fly. Usage analytics confirmed frequent toggling between browser tabs, validating that the split workflows were not just anecdotal but systemic.</p>
        </Section>

        <Section id="tradeoffs">
          <h2 className="text-2xl font-semibold">🧩 Design Tradeoffs</h2>

          <div className="space-y-6 mt-4">
            <div>
              <h3 className="text-xl font-semibold">Simulation Control vs. Focused Learning</h3>
              <p>Tradeoff: Pin simulation controls and key user settings in a fixed top panel, but use icon-based labels, muted color schemes, and consistent placement to visually separate them from learning content.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">FCOM Integration vs. Screen Real Estate</h3>
              <p>Tradeoff: Implement a collapsible split-view with responsive resizing, allowing pilots to view both lesson content and the FCOM side-by-side with adjustable space allocation.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Modular Navigation vs. Sequential Learning</h3>
              <p>Tradeoff: Group lessons by real-world systems while allowing instructors to sequence them for consistency when needed.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Fidelity to Aircraft Systems vs. Learnability</h3>
              <p>Tradeoff: Use aviation-informed language and structure without leaning into skeuomorphism—favor clean, modern patterns for usability.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">User Autonomy vs. Instructional Consistency</h3>
              <p>Tradeoff: Implement role-based interfaces—self-guided learners have open access, while instructors can lock lesson progression during live sessions.</p>
            </div>
          </div>
        </Section>

        <Section id="outcome">
          <h2 className="text-2xl font-semibold">✅ Outcome</h2>
          <p>The redesigned Lesson Panel launched during my tenure and was met with overwhelmingly positive feedback from instructors, pilots, and designers. It resolved key friction points around navigation, multitasking, and instructional flexibility.</p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Conducted follow-up research sessions to evaluate user engagement and effectiveness</li>
            <li>Planned to expand FCOM functionality with bookmarks and annotations</li>
            <li>Prepared to scale the redesigned panel across additional training environments</li>
            <li>Set the foundation for iterative updates based on rollout feedback</li>
          </ul>

          <p className="mt-4">While I transitioned off the project shortly after launch, the work created a strategic foundation that aligned more closely with how pilots learn—and how instructors teach—in high-stakes environments.</p>
        </Section>
      </CaseStudyLayout>
    </motion.div>
  );
}
