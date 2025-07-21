import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return (
    <main
      className=""
      style={{
        background: "url('/images/bg-main.svg')",
        backgroundSize: "cover",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Rating</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>

        {/* List of resumes */}
        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
