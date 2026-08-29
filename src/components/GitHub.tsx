import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../lib/icons";
import { CONTACT } from "../lib/constants";
import { fetchGithubSnapshot, type GithubSnapshot } from "../lib/github";

export default function GitHub() {
  const [data, setData] = useState<GithubSnapshot | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchGithubSnapshot("vizz-10").then((snap) => {
      if (cancelled) return;
      if (snap) setData(snap);
      else setFailed(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-20" aria-labelledby="github-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl border border-white/6 overflow-hidden p-8 sm:p-10"
          style={{ background: "#0c0c18" }}
        >
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at top right, rgba(124,58,237,0.08) 0%, transparent 60%)",
            }}
          />

          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <GithubIcon size={24} className="text-white/40" />
                <span className="section-label">What I'm Building</span>
              </div>

              <h2 id="github-heading" className="font-display font-800 text-2xl sm:text-3xl text-white mb-3">
                Explore my code, experiments
                <br className="hidden sm:block" />
                and projects.
              </h2>

              <p className="text-[#8888aa] max-w-lg mb-6">
                Public GitHub activity is loaded live when the API is available. If it is not, this
                section stays a simple link — no invented stats.
              </p>

              {data && (
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="px-4 py-3 rounded-xl border border-white/8">
                    <p className="text-2xl font-display font-800 text-white">{data.public_repos}</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/30">Public repos</p>
                  </div>
                  <div className="px-4 py-3 rounded-xl border border-white/8">
                    <p className="text-2xl font-display font-800 text-white">{data.followers}</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/30">Followers</p>
                  </div>
                </div>
              )}

              {data?.repos.length ? (
                <ul className="space-y-2 mb-6">
                  {data.repos.map((repo) => (
                    <li key={repo.id}>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 rounded-xl border border-white/6 px-4 py-3 hover:border-white/15 transition-colors"
                      >
                        <div>
                          <p className="text-sm text-white font-medium">{repo.name}</p>
                          <p className="text-xs text-white/35 mt-0.5 line-clamp-1">
                            {repo.description || "No description"}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono text-white/30 whitespace-nowrap">
                          {repo.language ?? "—"} · {repo.stargazers_count}★
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}

              {failed && (
                <p className="text-xs font-mono text-white/25 mb-6">
                  GitHub API unavailable right now — visit the profile directly.
                </p>
              )}

              <div className="flex items-center gap-2 text-xs font-mono text-white/25">
                <span className="w-2 h-2 rounded-full bg-[#4ade80]" />
                github.com/vizz-10
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-[#7c3aed] to-[#4f8ef7] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity glow-violet"
              >
                <GithubIcon size={18} />
                Visit GitHub
                <ExternalLink size={14} className="ml-auto opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-xs font-mono text-white/15 text-center">Live data when GitHub responds</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
