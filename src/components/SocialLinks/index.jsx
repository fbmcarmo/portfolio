import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa"

export default function SocialLinks() {
  const socials = [
    {
      icon: <FaGithub />,
      url: "https://github.com/fbmcarmo",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com/in/fbmcarmo",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/fbmcarmo",
      label: "Instagram",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:bruno0moreira@gmail.com",
      label: "Email",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/5585996188130",
      label: "WhatsApp",
    },
  ]

  return (
    <div className="flex gap-6 items-center">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-gray-400 text-xl hover:text-[#ff6aa2] transition"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
