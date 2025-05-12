import { useNavigate } from 'react-router-dom';
import '../../index.css';

export default function VirtualAirplane() {
  const navigate = useNavigate();

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8 text-[var(--color-text)]">
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

      <section>
        <h2 className="text-2xl font-semibold">Strategic Opportunity Identification</h2>
        <p>
          During my tenure as a UX/Product Designer at Boeing's Virtual Airplane program, I identified a significant strategic opportunity that had been overlooked in the organization's approach to learning systems architecture...
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Strategic Systems Approach</h2>

        <div className="space-y-4 mt-4">
          <h3 className="text-xl font-semibold">Architectural Assessment & Vision Development</h3>
          <p>
            With executive buy-in secured, I led a thorough audit of the existing ecosystem, applying a sophisticated systems thinking approach rather than merely cataloging UI elements...
          </p>

          <h3 className="text-xl font-semibold">Design System Foundation & Governance</h3>
          <ul className="list-disc ml-5">
            <li><strong>Foundation Layer:</strong> Core design tokens defining fundamental visual properties with semantic naming aligned to educational contexts</li>
            <li><strong>Component Layer:</strong> A library of consistent, accessible interface elements optimized for learning scenarios</li>
            <li><strong>Pattern Layer:</strong> Standardized solutions for common learning workflows and assessment processes</li>
          </ul>
          <p>
            Crucially, I didn't just deliver design assets—I established governance principles and contribution models that ensured long-term sustainability...
          </p>

          <h3 className="text-xl font-semibold">Integrated Table Architecture</h3>
          <p>
            The assessment and progress tracking features of the learning platform relied heavily on tabular information displays...
          </p>

          <h3 className="text-xl font-semibold">Strategic Color System Implementation</h3>
          <p>
            Recognizing color as a critical educational signifier, I developed a semantic color system that moved beyond aesthetic choices to support cognitive processing during learning...
          </p>

          <h3 className="text-xl font-semibold">Dark Mode as Operational Enhancement</h3>
          <p>
            The implementation of dark mode across the learning platform demonstrated the architectural integrity of our system...
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Organizational Impact & Legacy</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>🚀 Product development velocity increased as teams leveraged consistent components</li>
          <li>🤝 Cross-functional collaboration improved through shared design language</li>
          <li>🎯 The platform's educational efficacy was enhanced by removing interface friction</li>
        </ul>
        <p className="mt-4">
          Perhaps most significantly, the project established design systems thinking as a strategic capability within the organization...
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Leadership Reflection</h2>
        <p>
          This initiative demonstrated my ability to identify strategic opportunities, develop sophisticated system architectures, and drive cross-functional change within complex organizations...
        </p>
        <p className="mt-2">
          The success of this project illustrates my philosophy that truly effective design systems balance rigorous system thinking with deep domain understanding...
        </p>
      </section>
    </main>
  );
}
