import { useNavigate } from 'react-router-dom';
import '../../index.css';
import { motion } from 'framer-motion';
import { CaseStudyLayout } from '../ui/CaseStudyLayout';
import { Section } from '../ui/Section';

const transition = { duration: 0.6, ease: [0.4, 0, 0.2, 1] };

export default function VirtualAirplaneCDU() {
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
            <h1 className="text-3xl font-bold">✈️ Virtual Airplane CDU</h1>
            <p><strong>Role:</strong> Lead Product Designer</p>
            <p><strong>Client:</strong> The Boeing Company (Virtual Airplane Program)</p>
            <p><strong>Tools:</strong> Figma, prototyping, design systems</p>
          </header>
        </Section>

        <Section id="overview">
          <h2 className="text-2xl font-semibold">🛠 Overview</h2>
          <p>
            The Virtual Airplane CDU (Computer Display Unit) is a digital replica of the aircraft CDU used in Boeing's full simulator environments. I was brought on to design this feature from scratch as part of the Virtual Airplane platform, enabling student pilots to practice FMC interaction within a streaming, iPad-based system.
          </p>
          <p className="mt-4">
            The challenge: different instructors taught different navigation paths, and pilots had multiple valid ways to enter the same data. The CDU needed to reflect that flexibility while providing helpful feedback without interrupting the learning experience.
          </p>
        </Section>

        <Section id="discovery">
          <h2 className="text-2xl font-semibold">🔍 Discovery</h2>
          <h3 className="text-xl font-semibold mt-4">Context</h3>
          <p>
            Instructors used the CDU to walk students through critical FCOM-based operations. Pilots were already familiar with the hardware, so expectations for realism were high. However, because the CDU was accessed on an iPad and rendered remotely, interaction fidelity and guidance both required thoughtful handling.
          </p>

          <h3 className="text-xl font-semibold mt-4">Instructor Variability</h3>
          <p>
            There was no single \"correct\" path to complete a task. Input sequences varied widely. The first prototype attempted to highlight every key step-by-step—only to be rejected as \"childlike\" and \"condescending.\" Instructors wanted flexibility; trainees wanted clarity.
          </p>

          <h3 className="text-xl font-semibold mt-4">Design Implications</h3>
          <p>
            The CDU needed to support multiple workflows, validate input accuracy regardless of sequence, and provide error handling that was instructional—not punitive. Notification design also had to be screen-aware, especially considering streaming delays and sound issues.
          </p>
        </Section>

        <Section id="design-decisions">
          <h2 className="text-2xl font-semibold">💡 Design Decisions</h2>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              <strong>Flexible Input Recognition:</strong> Any valid navigation path was accepted, mimicking how real CDUs work and allowing instructors to teach their preferred methods.
            </li>
            <li>
              <strong>Error Feedback:</strong> Instead of modal interruptions, I created a lightweight notification system that offered corrections without halting flow.
            </li>
            <li>
              <strong>Sound Indicators:</strong> We added a visual cue when sound played, in case iPad audio was muted—crucial in instructor-led environments.
            </li>
            <li>
              <strong>Notification Constraints:</strong> Notifications were capped to half the screen height and positioned based on interaction context. This system was later adopted across other modules.
            </li>
            <li>
              <strong>Guided vs. Free Play:</strong> Initial launch focused on guided scenarios; before handoff, I began prototyping a “free play mode” to support full instructor autonomy.
            </li>
          </ul>
        </Section>

        <Section id="tradeoffs">
          <h2 className="text-2xl font-semibold">🧩 Design Tradeoffs</h2>

          <div className="space-y-6 mt-4">
            <div>
              <h3 className="text-xl font-semibold">Fidelity vs. Learnability</h3>
              <p>We preserved the CDU’s exact layout and screen logic—but minimized hand-holding. Feedback appeared only when inputs failed validation, maintaining realism.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Screen Space vs. Feedback</h3>
              <p>The CDU lives inside a constrained iPad viewport. Notification design had to be compact, non-blocking, and highly legible even in mirrored display setups.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Error Correction vs. Confidence</h3>
              <p>We framed errors as gentle nudges, not mistakes. Inputs were allowed to fail without punishment—just like a training sim—with real-time suggestions instead of blocks.</p>
            </div>
          </div>
        </Section>

        <Section id="outcome">
          <h2 className="text-2xl font-semibold">✅ Outcome</h2>
          <p>The CDU launched successfully as a core part of the Virtual Airplane platform. Feedback from instructors and Boeing’s learning team was overwhelmingly positive, with many highlighting its flexibility, realism, and clarity.</p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Supported multiple instructor workflows by accepting diverse input sequences</li>
            <li>Introduced a scalable notification system now used across the platform</li>
            <li>Addressed auditory accessibility with streaming-aware design patterns</li>
            <li>Set groundwork for an upcoming \"free play mode\" to enhance instructor control</li>
          </ul>

          <p className="mt-4">This wasn’t just a UI—it was a behavioral training tool. The CDU brought human-centered design into one of aviation’s most rigid systems, without sacrificing the rigor pilots expect.</p>
        </Section>
      </CaseStudyLayout>
    </motion.div>
  );
}
