import { MdOutlineArrowOutward } from "react-icons/md"

export type ExperienceProps = {
  company: string,
  companyURL: string,
  title: string,
  description?: string,
  tools?: string[],
}

export default function ExperienceSection({
  company, companyURL, title, description, tools
}: ExperienceProps) {
  return (
    <div className="w-full divide-current mb-8">
      <a
        href={companyURL}
        className="flex flex-row group w-fit"
      >
        <strong className="text-xl">{company}</strong>
        <MdOutlineArrowOutward
          size={16}
          className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition self-center"
        />
      </a>

      <hr />
      <p className="text-lg">{title}</p>
      {description ? <p>{description}</p> : <></>}
      {tools ? <p>{tools.map(t => <span key={t} className="opacity-50 hover:opacity-100 mr-1">{t}</span>)}</p> : <></>}
    </div>
  )
}
