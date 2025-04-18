
import MainLayout from "../../../components/sections/MainLayout";
import WorkExperience from "../../../components/sections/TechnicalWorkExperience";
import ExtracurricularExperience from "../../../components/sections/ExtracurricularExperience";
import { technicalWorkExperiences } from "@/constants/technicalWorkExperience";
import { extracurricularExperiences } from "@/constants/extracurricularExperience";

export default function Experience() {
  return (
    <MainLayout>
      <WorkExperience experiences={technicalWorkExperiences} />
      <ExtracurricularExperience experiences={extracurricularExperiences} />
    </MainLayout>
  );
}