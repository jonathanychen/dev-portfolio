import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="flex flex-row">
        <a
          href="mailto:jonathanyangchen@gmail.com"
          className="mx-2 hover:opacity-50 hover:scale-105 transition"
          rel="noreferrer"
        >
          <FaEnvelope size={32} />
        </a>
        <a
          href="https://github.com/jonathanychen"
          className="mx-2 hover:opacity-50 hover:scale-105 transition"
          rel="noreferrer"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-y-chen/"
          className="mx-2 hover:opacity-50 hover:scale-105 transition"
          rel="noreferrer"
        >
          <FaLinkedin size={32} />
        </a>
      </div>

    </>
  )
}
