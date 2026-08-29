export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}

export interface GithubSnapshot {
  login: string;
  public_repos: number;
  followers: number;
  html_url: string;
  repos: GithubRepo[];
}

const CACHE_KEY = "vizz-github-snapshot";
const CACHE_MS = 1000 * 60 * 10;

export async function fetchGithubSnapshot(username: string): Promise<GithubSnapshot | null> {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached) as { at: number; data: GithubSnapshot };
      if (Date.now() - parsed.at < CACHE_MS) return parsed.data;
    }
  } catch {
    /* ignore */
  }

  try {
    const [userRes, repoRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
    ]);
    if (!userRes.ok || !repoRes.ok) return null;

    const user = (await userRes.json()) as {
      login: string;
      public_repos: number;
      followers: number;
      html_url: string;
    };
    const repos = ((await repoRes.json()) as GithubRepo[]).filter((r) => !r.fork).slice(0, 4);

    const data: GithubSnapshot = {
      login: user.login,
      public_repos: user.public_repos,
      followers: user.followers,
      html_url: user.html_url,
      repos,
    };

    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }));
    } catch {
      /* ignore */
    }
    return data;
  } catch {
    return null;
  }
}
