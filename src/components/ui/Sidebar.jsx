import { Link, useLocation } from 'react-router-dom';

const caseStudies = [
  {
    category: 'Boeing Case Studies',
    children: [
      {
        title: 'Virtual Airplane',
        path: '/virtual-airplane',
        anchors: ['#discovery', '#tradeoffs', '#outcome'],
      },
      {
        title: 'Computer Display Unit',
        path: '/virtual-airplane-cdu',
        anchors: ['#overview', '#discovery', '#design-decisions', '#tradeoffs', '#outcome'],
      },
      {
        title: 'Design System',
        path: '/design-system',
        anchors: ['#overview', '#components', '#impact'],
      },
    ],
  },
  {
    category: 'Gay City',
    path: '/gay-city',
    anchors: ['#overview', '#approach', '#impact'],
  },
  {
    category: 'Velocity Dance Center',
    path: '/velocity-dance',
    anchors: ['#overview', '#process', '#results'],
  },
];

export function CaseStudySidebar() {
  const location = useLocation();

  return (
    <aside className="sticky top-10 space-y-6 text-sm text-[var(--color-text-secondary)]">
      {caseStudies.map((section, i) => (
        <div key={i}>
          <h3 className="font-bold text-[var(--color-text)] mb-2">
            {section.category}
          </h3>
          {section.children ? (
            section.children.map((child, j) => (
              <div key={j} className="ml-2 mb-4">
                <Link
                  to={child.path}
                  className={`block font-medium ${location.pathname === child.path ? 'text-[var(--color-accent)]' : ''}`}
                >
                  {child.title}
                </Link>
                {location.pathname === child.path && (
                  <ul className="ml-4 mt-1 space-y-1 border-l border-[var(--color-surface)] pl-2">
                    {child.anchors.map((anchor, k) => (
                      <li key={k}>
                        <a href={anchor} className="hover:underline">
                          {anchor.replace('#', '').replace(/-/g, ' ')}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <div className="ml-2">
              <Link
                to={section.path}
                className={`block font-medium ${location.pathname === section.path ? 'text-[var(--color-accent)]' : ''}`}
              >
                {section.category}
              </Link>
              {location.pathname === section.path && (
                <ul className="ml-4 mt-1 space-y-1 border-l border-[var(--color-surface)] pl-2">
                  {section.anchors.map((anchor, l) => (
                    <li key={l}>
                      <a href={anchor} className="hover:underline">
                        {anchor.replace('#', '').replace(/-/g, ' ')}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
