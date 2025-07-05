
import MainLayout from "../../../components/sections/MainLayout";
import WorkExperience from "../../../components/sections/TechnicalWorkExperience";
import ExtracurricularExperience from "../../../components/sections/ExtracurricularExperience";
import { technicalWorkExperiences } from "@/constants/technicalWorkExperience";
import { extracurricularExperiences } from "@/constants/extracurricularExperience";

export default function Experience() {
  return (
    <MainLayout>
      <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[color:var(--heading)] mb-4">Experience</h1>
        </div>
      <WorkExperience experiences={technicalWorkExperiences} />
      <ExtracurricularExperience experiences={extracurricularExperiences} />
    </MainLayout>
  );
}