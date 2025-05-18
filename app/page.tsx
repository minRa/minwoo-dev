// app/page.tsx
export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">{"Hi, I'm Minwoo Na"}</h1>
      <p className="text-lg text-gray-700">
        A Frontend Developer with 4+ years experience building performant and user-friendly apps using React, Next.js, and TypeScript.
      </p>
      <a href="/projects" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        View My Work →
      </a>
    </div>
  );
}