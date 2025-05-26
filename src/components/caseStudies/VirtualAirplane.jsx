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
            <p><strong>Role:</strong> UX/Product Designer</p>
            <p><strong>Client:</strong> The Boeing Company</p>
            <p><strong>Tools:</strong> Figma, HTML/CSS, Prototype Spec, Internal UX Testing</p>
          </header>
        </Section>

        <Section id="discovery">
          <h2 className="text-2xl font-semibold">🔍 Discovery</h2>
          <p>After the 737 MAX crashes, Boeing made pilot training a pillar of its safety commitments. Virtual Airplane was developed as a training tool to simulate cockpit procedures on iPads—standard issue in Boeing aircraft. The goal: help pilots build operational fluency before stepping into simulators.</p>
          <p>I led the redesign of the Lesson Panel—the main interface for navigating lessons. The original version functioned like a checklist, but pilots don’t think in checklists. They jump between systems, reference procedures, and need flexibility based on what they’re struggling with in the moment.</p>
          <p>We observed training sessions, interviewed student pilots, and worked closely with instructors. Most of the time, pilots trained by pointing at static cockpit posters and flipping through manuals like the FCOM. The lesson interface needed to reflect this real-world multitasking, not flatten it.</p>
        </Section>

        <Section id="features">
          <h2 className="text-2xl font-semibold">🛠 Key Features</h2>

          <div className="space-y-6 mt-4">
            <div>
              <h3 className="text-xl font-semibold">All Lights On</h3>
              <p>SMEs and customers said they couldn’t read the simulator. I proposed a feature to simulate cockpit floodlights. It required dev tradeoffs due to streaming constraints, but it was a small fix with big impact—instantly improving legibility.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Focus Button</h3>
              <p>Users often got lost in the simulation’s 3D space. I introduced a refocus button to reorient them back to the original view. It meant creating global camera logic, but once released, it drastically improved navigation and task completion.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Active Pause</h3>
              <p>Instructors needed a way to pause the sim without freezing every feature. I designed an Active Pause system that paused progression but still allowed exploration—paired with a discreet notification system in the Lesson Panel.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Lesson Panel Sizing</h3>
              <p>The original panel was too small and inconsistent across teams. After testing, I standardized it to half-screen height and created documentation that multiple teams adopted. It reduced confusion and scrolling friction for trainees.</p>
            </div>
          </div>
        </Section>

        <Section id="tradeoffs">
          <h2 className="text-2xl font-semibold">🧩 Design Tradeoffs</h2>

          <div className="space-y-6 mt-4">
            <div>
              <h3 className="text-xl font-semibold">Realism vs. Clarity</h3>
              <p>Some teams wanted the interface to look like a real cockpit. I advocated for aviation-aligned structure and vocabulary, not skeuomorphism—favoring focus over clutter.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">FCOM Integration vs. Screen Space</h3>
              <p>Pilots needed the FCOM constantly, but it's dense. We built a split-view with adjustable width so pilots could see it beside the Lesson Panel—without needing a second screen.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Pilot Autonomy vs. Instructor Control</h3>
              <p>We implemented role-aware views: pilots got open navigation, while instructors could lock pacing and drive the lesson forward in real-time.</p>
            </div>
          </div>
        </Section>

        <Section id="outcome">
          <h2 className="text-2xl font-semibold">✅ Outcome</h2>
          <p>The Lesson Panel redesign launched in Release 5.2. Feedback from instructors and trainees was overwhelmingly positive. It became the foundation for multiple other interfaces across the Learner Solutions platform.</p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Reduced user confusion through standardization and clear focus tools</li>
            <li>Improved instructional flexibility via role-aware controls</li>
            <li>Increased trainee engagement by integrating the FCOM contextually</li>
            <li>Adopted as a model by other Boeing design teams</li>
          </ul>

          <p className="mt-4">Sometimes good design is invisible. Sometimes it’s a button that just says “Lights On.”</p>
        </Section>
      </CaseStudyLayout>
    </motion.div>
  );
}
