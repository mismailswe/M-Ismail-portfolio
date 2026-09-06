import React from "react";
import {motion} from "framer-motion";
import {
  FiGithub,
  FiGitlab,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter
} from "react-icons/fi";
import "./socials.css";

const ICONS = {
  github: {icon: FiGithub, label: "GitHub"},
  linkedin: {icon: FiLinkedin, label: "LinkedIn"},
  gitlab: {icon: FiGitlab, label: "GitLab"},
  twitter: {icon: FiTwitter, label: "Twitter"},
  instagram: {icon: FiInstagram, label: "Instagram"}
};

const ORDER = ["github", "linkedin", "gitlab", "twitter", "instagram"];

/** Row of social icon links driven by `socialMediaLinks` in portfolio.js. */
export default function Socials({links, size = "md"}) {
  if (!links || !links.display) return null;

  const entries = ORDER.filter(key => links[key]).map(key => ({
    key,
    href: links[key],
    ...ICONS[key]
  }));

  if (links.gmail) {
    entries.push({
      key: "gmail",
      href: `mailto:${links.gmail}`,
      icon: FiMail,
      label: "Email"
    });
  }

  return (
    <div className={`socials socials--${size}`}>
      {entries.map(({key, href, icon: Icon, label}) => (
        <motion.a
          key={key}
          href={href}
          className="socials__link"
          target={key === "gmail" ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          whileHover={{y: -4}}
          whileTap={{scale: 0.92}}
          transition={{type: "spring", stiffness: 400, damping: 20}}
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
}
