import { MdOutlineArrowOutward, MdOutlineFileDownload } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="my-10">
      <div className="min-w-[40vw] mb-[10vh]">
        <div className="flex flex-col mb-[5vh]">
          <h1>
            <strong className="text-4xl">Jonathan Chen</strong>
          </h1>
          <h3 className="text-2xl my-[1vh]">Backend Software Engineer</h3>
          <p>
            Interested in building efficient, scalable services.
          </p>

          <div className="underline text-md flex flex-row group w-fit">
            <a
              href="Jonathan_Chen_Resume.pdf"
              download="Jonathan_Chen_Resume.pdf"
              className="group-hover:opacity-50"
            >
              Resume
            </a>
            <MdOutlineFileDownload className="self-center ml-1 group-hover:opacity-50" />
          </div>
        </div>
      </div>

      <div className="text-lg -top-[10vw]" id="education">
        EDUCATION
      </div>

      <EducationSection schoolName="Columbia University"
        schoolURL="https://www.columbia.edu/"
        degree="Master of Science in Computer Science"
        dates="September 2025 - May 2027" />

      <EducationSection schoolName="Northeastern University"
        schoolURL="https://www.northeastern.edu/"
        degree="Bachelor of Science in Computer Science"
        dates="August 2021 - December 2024"
        gpa="GPA: 3.95/4.0" />

      <div className="text-lg -top-[10vw]" id="experience">
        EXPERIENCE
      </div>

      <ExperienceSection company="Databricks"
        companyURL="https://www.databricks.com/"
        title="Incoming Software Engineer Intern" />

      <ExperienceSection company="Stripe"
        companyURL="https://www.stripe.com/"
        title="Software Engineer Intern"
        tools={["Ruby", "Java"]} />

      <ExperienceSection company="Amazon"
        companyURL="https://www.amazon.com/"
        title="Software Engineer Intern"
        tools={["Java", "Spring Boot", "AWS"]} />

      <ExperienceSection company="Klaviyo"
        companyURL="https://www.klaviyo.com/"
        title="Software Engineer Co-op"
        tools={["Python", "Django", "Terraform", "AWS"]} />

      <ExperienceSection company="Pacific Northwest National Laboratory"
        companyURL="https://www.pnnl.gov/"
        title="Software Engineer Intern"
        tools={["Python", "React", "TypeScript", "AWS", "Docker", "GitLab"]} />

      <ExperienceSection company="Instawork"
        companyURL="https://www.instawork.com/"
        title="Software Engineer Co-op"
        tools={["Python", "Django", "FastAPI", "Pydantic", "JavaScript", "PostgreSQL"]} />

      <div className="w-full divide-current mb-8">
        <a
          href="https://www.khoury.northeastern.edu/"
          className="flex flex-row group w-fit"
        >
          <strong className="text-xl">
            Khoury College of Computer Sciences
          </strong>
          <MdOutlineArrowOutward
            size={16}
            className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
          />
        </a>
        <hr />
        <div className="mb-[1vh]">
          <p className="text-lg flex flex-row hover group">
            Teaching Assistant –{" "}
            <a
              href="https://4700.network/docs/syllabus/"
              className="underline ml-1"
            >
              CS4700
            </a>
            <MdOutlineArrowOutward
              size={16}
              className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
            />
          </p>
          <p>
            Helping students learn about computer networking.
          </p>
          <p>
            <span className="opacity-50 hover:opacity-100">Golang</span>{" "}
            <span className="opacity-50 hover:opacity-100">Python</span>{" "}
          </p>
        </div>

        <div className="mb-[1vh]">
          <p className="text-lg flex flex-row hover group">
            Teaching Assistant –{" "}
            <a
              href="https://course.ccs.neu.edu/cs3500/"
              className="underline ml-1"
            >
              CS3500
            </a>
            <MdOutlineArrowOutward
              size={16}
              className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
            />
          </p>
          <p>
            Aiding students with the principles of object-oriented
            programming.
          </p>
          <p>
            <span className="opacity-50 hover:opacity-100">Java</span>{" "}
            <span className="opacity-50 hover:opacity-100">IntelliJ</span>{" "}
          </p>
        </div>
      </div>

      <div className="text-lg -top-[10vw]" id="extracurriculars">
        EXTRACURRICULARS
      </div>

      <div className="w-full divide-current" id="extracurriculars">
        <a
          href="https://generatenu.com/"
          className="flex flex-row group w-fit"
        >
          <strong className="text-xl">Generate</strong>
          <MdOutlineArrowOutward
            size={16}
            className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
          />
        </a>
        <hr />

        <div className="mb-[1vh]">
          <p className="text-lg flex flex-row hover group">
            Technical Lead –
            <a href="https://www.apprenta.co/" className="underline ml-1">
              Apprenta
            </a>
            <MdOutlineArrowOutward
              size={16}
              className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
            />
          </p>
          <p>
            Leading development on a scholarship platform for aspiring medical
            professionals currently enrolled in community college.
          </p>
          <p>
            <span className="opacity-50 hover:opacity-100">TypeScript</span>{" "}
            <span className="opacity-50 hover:opacity-100">React</span>{" "}
            <span className="opacity-50 hover:opacity-100">GraphQL</span>{" "}
            <span className="opacity-50 hover:opacity-100">PostgreSQL</span>{" "}
          </p>
        </div>

        <div className="mb-[1vh]">
          <p className="text-lg">Software Engineer – Couplet</p>
          <p>
            Created a mobile app that connects people through shared interests
            in events rather than superficial swipes
          </p>
          <p>
            <span className="opacity-50 hover:opacity-100">TypeScript</span>{" "}
            <span className="opacity-50 hover:opacity-100">ReactNative</span>{" "}
            <span className="opacity-50 hover:opacity-100">Golang</span>{" "}
            <span className="opacity-50 hover:opacity-100">GORM</span>{" "}
            <span className="opacity-50 hover:opacity-100">PostgreSQL</span>
          </p>
        </div>
      </div>
    </main >
  );
}
