import { MdOutlineArrowOutward } from "react-icons/md";

export type EducationProps = {
  schoolName: string,
  schoolURL: string,
  degree: string,
  dates: string,
  gpa?: string,
}

export default function EducationSection({
  schoolName,
  schoolURL,
  degree,
  dates,
  gpa,
}: EducationProps) {
  return (
    <div className="w-full divide-current mb-8">
      <a href={schoolURL} className="flex flex-row group w-fit">
        <strong className="text-xl">
          {schoolName}
        </strong>
        <MdOutlineArrowOutward
          size={16}
          className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
        />
      </a>
      <hr />
      <p className="text-lg">{degree}</p>
      <p>{dates}</p>
      {gpa ? <p>{gpa}</p> : <></>}
    </div>
  )
}
