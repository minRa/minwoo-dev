// app/page.tsx
export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter">
          Minwoo Na
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Senior Frontend Engineer
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Building performant and accessible web experiences with React, Next.js, and TypeScript.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <h3 className="font-semibold">Frontend</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>React Hooks & Context</li>
              <li>Component Libraries</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <h3 className="font-semibold">Design Systems</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Tailwind CSS</li>
              <li>Material UI</li>
              <li>Figma Integration</li>
              <li>Component Architecture</li>
              <li>Theme Systems</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <h3 className="font-semibold">Best Practices</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Accessibility (WCAG 2.1)</li>
              <li>SEO Optimization</li>
              <li>Code Splitting</li>
              <li>Testing (Jest, React Testing Library)</li>
              <li>CI/CD Pipelines</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <a 
          href="/projects" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
        >
          View My Work →
        </a>
      </div>
    </div>
  );
}