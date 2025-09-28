import { resumeData } from "@/data/resume";
import { Header } from "@/components/resume/Header";
import { Summary } from "@/components/resume/Summary";
import { Experiences } from "@/components/resume/Experiences";
import { Projects } from "@/components/resume/Projects";
import { Education } from "@/components/resume/Education";
import { Skills } from "@/components/resume/Skills";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <main className="resume-page">
      <div className="mx-auto grid w-full max-w-4xl gap-12 rounded-3xl border border-white/10 bg-[#222222]/10 p-8 shadow-[0_40px_140px_-60px_rgba(0,0,0,0.85)] ring-1 ring-white/10 backdrop-blur-2xl sm:p-12">
        <Header
          data={{ ...resumeData, photo: `${basePath}${resumeData.photo}` }}
        />
        <Summary summary={resumeData.summary} />
        <Experiences experiences={resumeData.experiences} />
        <Projects projects={resumeData.projects} />
        <Education education={resumeData.education} />
        <Skills skills={resumeData.skills} />
      </div>
    </main>
  );
}
