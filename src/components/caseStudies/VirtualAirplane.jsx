import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../index.css';

// Layout & UI
import { CaseStudyLayout } from '../ui/CaseStudyLayout';
import { Section } from '../ui/Section';
import { HeroSection } from '../ui/HeroSection';
import { CaseStudyImage } from '../ui/CaseStudyImage';
import { FullBleed } from '../ui/FullBleed';
import { FeatureQuote } from '../ui/FeatureQuote';

// Assets
import vaHero from '../../assets/images/caseStudies/virtualAirplane/va-ipad-landscape.png';
import chairFlyingExample from '../../assets/images/caseStudies/virtualAirplane/chair-flying-example.jpg';
import chairFlyingVid from '../../assets/images/caseStudies/virtualAirplane/chair-flying-vid.jpeg';
import interfaceDesignOne from '../../assets/images/caseStudies/virtualAirplane/interface-design-one.png';
import inferfaceDesignTwo from '../../assets/images/caseStudies/virtualAirplane/interface-design-two.png';
import lessonOverlayFeatures from '../../assets/images/caseStudies/virtualAirplane/lesson-overlay-features.png';
import lessonPanelDocumentation from '../../assets/images/caseStudies/virtualAirplane/lesson-panel-documentation.png';
import lightsOn from '../../assets/images/caseStudies/virtualAirplane/lights-on.png';
import lightsOff from '../../assets/images/caseStudies/virtualAirplane/lights-off.png';
import activePause from '../../assets/images/caseStudies/virtualAirplane/active-pause.png';
import gracefulError from '../../assets/images/caseStudies/virtualAirplane/graceful-error-messages.png';
import lessonPanelSizing from '../../assets/images/caseStudies/virtualAirplane/lesson-panel-sizing.png';


// Data
import { caseStudies } from '../../data/caseStudies';

const transition = { duration: 0.6, ease: [0.4, 0, 0.2, 1] };
const thisCase = {
  slug: 'virtual-airplane',
  title: 'Designing Virtual Airplane',
  subtitle: 'Designing a Lesson Interface to bolster Pilot Safety',
  heroImage: vaHero,
  alt: 'Hero image for Virtual Airplane',
  caption: 'A screenshot from the training interface',
  role: 'Product/UX Designer',
  tools: 'Figma, React, Framer Motion',
  tags: ['Product Design','Aerospace', 'Boeing', 'Figma', 'User Research'],
};

{/* tags should go: type of design, type of industry, company/org name, tools used in order of importance */}

export default function VirtualAirplane() {
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
          <h2 className="text-2xl font-semibold">Background</h2>

          <div className="md:flex md:items-center md:gap-6 my-12">
            <div className="md:w-2/3 space-y-4">
              <p>
                After the 737 MAX crashes, Boeing made pilot training a pillar of its safety commitments.
                Virtual Airplane was developed as a training tool to simulate cockpit procedures on iPads—standard issue in Boeing aircraft.
                The goal: help pilots build operational fluency before stepping into simulators.
              </p>
              <p>
                To keep us all safe, pilots have an incredible amount of information to memorize.
                Each aircraft model has its own series of procedures that pilots need to know almost instinctually, in order to ensure the safety of the crew and its cargo. Virtual Airplane was meant to help pilots build that muscle memory and get their reps in outside of the classroom.
              </p>
            </div>
            <div className="md:w-1/3 w-full mt-8 md:mt-0 flex justify-center">
              <CaseStudyImage
                images={[
                  { src: chairFlyingExample, alt: "Pilot using a cockpit poster during chair flying", caption: "Pilots often trained by pointing at printed cockpit posters to simulate task flow—known in aviation as 'chair flying." }
                ]}
              />
            </div>
          </div>

          <div className="md:flex md:items-center md:gap-6 my-12">
            <div className="md:w-1/3 w-full mt-8 md:mt-0 flex justify-center">
              <CaseStudyImage
                images={[
                  { src: chairFlyingVid, alt: "Chair flying demonstration from training video", caption: "Outside of the classroom, simple set ups can become quite elaborate (and humorous) based on the pilot's training needs." },
                ]}
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <p>
                In order to craft an accurate, reliable, trustworthy training tool, the team observed classroom sessions, interviewed student pilots, and worked closely with in-house instructors.
                Most of the time, pilots trained by pointing at static cockpit posters and flipping through manuals like the FCOM. The question became how do we allow the pilots to access all they needed to train?
              </p>
              <p>
                The lesson interface needed to reflect this real-world multitasking, not flatten it.
              </p>
            </div>
          </div>
        </Section>

        <FeatureQuote subline="We were making a tool to help them build muscle memory and procedural fluency before ever stepping into the simulator.">
          Virtual Airplane was more than a simulator, it was how pilots bridged theory and cockpit reality.
        </FeatureQuote>

        <Section id="designing-the-lesson-panel" data-label="Designing the Lesson Panel">
          <h2 className="text-2xl font-semibold">Designing the Lesson Overlay</h2>

          <CaseStudyImage
            images={[{
              src: interfaceDesignOne,
              alt: "Initial interface design of the Lesson Overlay",
              caption: "An early mockup of the redesigned Lesson Panel interface layered over the 3D Virtual Airplane simulation."
            }]}
          />

          <p className="mt-6">
            The Lesson Overlay wasn’t just another interface—it was the <strong>core entry point</strong> to the entire Virtual Airplane experience.
            Sitting on top of a real-time 3D flight simulation, the Lesson Panel guided pilots through training modules, procedural walkthroughs, and instructor-led lessons.
          </p>

          <p className="mt-4">
            Because the platform was designed to run on iPads—standard equipment in Boeing cockpits—the entire experience was <strong>streamed remotely using a custom web-based rendering stack</strong>. This allowed Virtual Airplane to deliver cockpit simulation and training content without requiring expensive local hardware or thick-client installations.
          </p>

          <p className="mt-4">
            Getting the Lesson Panel right meant creating a layer that felt as immediate, grounded, and predictable as the flight deck itself.
            Any friction in this interface risked disrupting the mental flow of the lesson. We designed it to feel quiet, stable, and precise—so that pilots could focus on their training, not on the tool delivering it.
          </p>

          <p className="mt-4">
            Early UET sessions revealed critical usability friction. Some pilots mistook the Verify arrow for a progression button, bypassing verification entirely. Others overlooked supplemental attachments in the Lesson Panel. We redesigned affordances, added clear attachment indicators, and iterated on the verify interaction—reducing mis-clicks and improving completion fidelity in subsequent test cycles.
          </p>

          <CaseStudyImage
            images={[{
              src: inferfaceDesignTwo,
              alt: "Second Iteration design of the Lesson Overlay", 
              caption: "Iterating on the Lesson Panel Design. This version was released with version 2.0 of the Virtual Airplane Experience."
            }]}
          />

          <p className="mt-4">
            Because this was a <strong>streaming experience</strong>, we needed a way for users to toggle out of full immersion.
            I added a theater mode button next to the close icon—offering flexibility to instructors without compromising flow.
          </p>
        </Section>

        <Section id="product-decisions" data-label="Product Decisions">
          <h2 className="text-2xl font-semibold">Product Decisions</h2>

          <p>
            The Lesson Panel wasn’t designed in isolation—it sat at the intersection of learning outcomes, instructor needs, and platform constraints.
          </p>

          <p className="mt-4">
            Feature prioritization balanced realism, instructional value, and technical feasibility:
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>
              We prioritized <strong>Active Pause</strong> and <strong>Focus Button</strong> early on, as they directly addressed instructional needs surfaced in UET sessions.
            </li>
            <li>
              <strong>All Lights On</strong> shipped after strong SME feedback on cockpit legibility.
            </li>
            <li>
              Features with lower instructional impact—such as advanced skinning or dynamic theming—were intentionally deferred to focus on core procedural flow.
            </li>
          </ul>

          <p className="mt-4">
            Each decision reflected ongoing collaboration between product, engineering, and test insights—ensuring that what shipped directly improved pilot learning outcomes.
          </p>
        </Section>

        <FullBleed
            imageA={lessonOverlayFeatures}
            altA="A sandbox view of the Lesson Overlay features"
            captionA="As the Lesson Panel evolved, I helped prototype and refine a growing set of overlay features. This sandbox view captured the complexity as needs expanded and the stack matured."

            imageB={lessonPanelDocumentation}
            altB="Documented view of the Lesson Panel system"
            captionB="To keep design and engineering aligned, I created a single source of truth—documenting each feature’s purpose, behavior, and technical implications for collaborative implementation."
          />


        <Section id="features" data-label="Features">
          <h2 className="text-2xl font-semibold">Key Features</h2>

          <div className="space-y-6 mt-4">
             <CaseStudyImage
                images={[
                  { src: lightsOff, alt: "Lights off in the cockpit simulator", caption: "The simulator was difficult to read in low light. I proposed a feature to simulate cockpit floodlights, which instantly improved legibility." },
                  { src: lightsOn, alt: "Lights on in the cockpit simulator", caption: "All Lights On feature dramatically improved cockpit legibility for training sessions."}
                ]}
              />
            <Feature title="All Lights On">
              SMEs and customers said they couldn’t read the simulator. I proposed a feature to simulate cockpit floodlights. It required dev tradeoffs due to streaming constraints, but it was a small fix with big impact—instantly improving legibility.
            </Feature>
             <CaseStudyImage
            images={[{
              src: activePause,
              alt: "Active Pause feature in the Virtual Airplane interface", 
              caption: "The Active Pause feature allowed instructors to pause the simulation without freezing all features, enabling continued exploration and interaction."
            }]}
          />
            <Feature title="Active Pause">
              Instructors needed a way to pause the sim without freezing every feature. I designed an Active Pause system that paused progression but still allowed exploration.
            </Feature>

             <CaseStudyImage
            images={[{
              src: lessonPanelSizing,
              alt: "Lesson Panel Sizing in the Virtual Airplane interface", 
              caption: "Lesson Panel Sizing was standardized to ensure visual consistency across training teams and devices."
            }]}
          />
            <Feature title="Lesson Panel Sizing">
              I standardized sizing to reduce friction and ensure visual consistency across training teams and devices.
            </Feature>

            <CaseStudyImage
              images={[{
                src: gracefulError,
                alt: "Graceful Error Handling in the Virtual Airplane interface",
                caption: "Graceful Error Handling provided clear feedback when the training flow was disrupted, ensuring users remained oriented."
              }]}
            />

            <Feature title="Graceful Error Handling">
              I designed the Lesson Panel to handle errors gracefully, providing clear feedback when the training flow was disrupted. This included fallback states and informative messages that kept users oriented.
              </Feature>
          </div>
        </Section>

        <Section id="tradeoffs" data-label="Tradeoffs">
          <h2 className="text-2xl font-semibold">Design Tradeoffs</h2>

          <div className="space-y-6 mt-4">
            <Feature title="Realism vs. Clarity">
              I advocated for aviation-aligned structure and vocabulary—not skeuomorphism—favoring focus over clutter.
            </Feature>
            <Feature title="FCOM Integration vs. Screen Space">
              We created a split-view so pilots could read procedures alongside active training.
            </Feature>
            <Feature title="Pilot Autonomy vs. Instructor Control">
              Role-aware views allowed trainees to explore and instructors to guide.
            </Feature>
          </div>
        </Section>

        <Section id="outcome" data-label="Outcomes">
          <h2 className="text-2xl font-semibold">Outcome</h2>

          <p>The redesign launched with Release 5.2 and was adopted across the Learner Solutions platform:</p>

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

// Reusable feature block
function Feature({ title, children }) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export const virtualAirplaneMeta = {
  slug: 'virtual-airplane',
  title: 'Virtual Airplane',
  subtitle: 'Redesigning the Lesson Panel to Reflect How Pilots Actually Learn',
  heroImage: vaHero,
  alt: 'Hero image for Virtual Airplane',
  caption: 'A screenshot from the training interface',
  role: 'Lead UX Designer',
  tools: 'Figma, React, Framer Motion',
  tags: ['Product Design','Aerospace', 'Boeing', 'Figma', 'User Research'],
  component: VirtualAirplane,
  featured: true,
};