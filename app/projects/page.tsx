// app/projects/page.tsx
export default async function ProjectsPage() {
  const res = await fetch('https://api.github.com/users/MinRa/repos', {
    cache: 'no-store', // SSR
  });
  const repos = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">GitHub Projects</h1>
      <ul className="space-y-4">
        {repos.map((repo: any) => (
          <li key={repo.id}>
            <a href={repo.html_url} className="text-blue-600 text-xl hover:underline" target="_blank">
              {repo.name}
            </a>
            {repo.description && <p className="text-gray-600">{repo.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
