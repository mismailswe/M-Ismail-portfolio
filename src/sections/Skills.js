import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {FiBarChart2, FiCode} from "react-icons/fi";
import {skillsSection, techStack} from "../portfolio";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import {EASE, stagger, viewport} from "../lib/motion";
import "./Skills.css";

const TABS = [
  {id: "software", label: "Software Engineering", icon: FiCode},
  {id: "data", label: "Data Science & ML", icon: FiBarChart2}
];

const SOFTWARE_ORDER = [
  "Frontend",
  "Backend",
  "Databases",
  "Cloud & Deployment",
  "Tools & Others"
];

function buildGroups(tab) {
  const byCategory = skillsSection.skillsByCategory || {};

  if (tab === "software") {
    return SOFTWARE_ORDER.filter(name => byCategory[name]).map(name => ({
      name,
      items: byCategory[name]
    }));
  }

  const ds = byCategory["Data Science & ML"] || {};
  return Object.keys(ds).map(name => ({name, items: ds[name]}));
}

export default function Skills() {
  const [tab, setTab] = useState("software");

  if (!skillsSection.display) return null;

  const groups = buildGroups(tab);

  return (
    <section className="section skills" id="skills">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="Toolbox"
          title={
            <>
              The stack I <span className="grad-text">build with</span>
            </>
          }
          subtitle="Two disciplines, one toolkit — production web engineering on one side, applied data science and machine learning on the other."
        />

        <Reveal className="skills__tabs" delay={0.05}>
          {TABS.map(({id, label, icon: Icon}) => (
            <button
              key={id}
              type="button"
              className={`skills__tab ${tab === id ? "is-active" : ""}`}
              onClick={() => setTab(id)}
              aria-pressed={tab === id}
            >
              {tab === id && (
                <motion.span
                  className="skills__tab-bg"
                  layoutId="skills-tab-bg"
                  transition={{type: "spring", stiffness: 350, damping: 30}}
                />
              )}
              <span className="skills__tab-inner">
                <Icon />
                {label}
              </span>
            </button>
          ))}
        </Reveal>

        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={tab}
            className="skills__grid"
            variants={stagger(0.07)}
            initial="hidden"
            animate="show"
            exit={{opacity: 0, y: -12, transition: {duration: 0.22}}}
          >
            {groups.map(group => (
              <motion.article
                className="skill-group glass lift"
                key={group.name}
                variants={{
                  hidden: {opacity: 0, y: 24},
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {duration: 0.55, ease: EASE}
                  }
                }}
              >
                <header className="skill-group__head">
                  <h3>{group.name}</h3>
                  <span className="skill-group__count">
                    {group.items.length}
                  </span>
                </header>

                <ul className="skill-group__list">
                  {group.items.map(item => (
                    <li className="skill-pill" key={item.skillName}>
                      <img
                        src={item.src}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        width="22"
                        height="22"
                      />
                      <span>{item.skillName}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {techStack.viewSkillBars && (
          <div className="proficiency">
            <Reveal className="proficiency__head">
              <h3>Proficiency</h3>
              <p className="lead">
                Where my time actually goes, measured across the last few years
                of delivery work.
              </p>
            </Reveal>

            <motion.ul
              className="proficiency__list"
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {techStack.experience.map(item => (
                <motion.li
                  key={item.Stack}
                  className="bar"
                  variants={{
                    hidden: {opacity: 0, y: 18},
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {duration: 0.5, ease: EASE}
                    }
                  }}
                >
                  <div className="bar__top">
                    <span className="bar__label">{item.Stack}</span>
                    <span className="bar__value">
                      {item.progressPercentage}
                    </span>
                  </div>
                  <div className="bar__track">
                    <motion.span
                      className="bar__fill"
                      initial={{width: 0}}
                      whileInView={{width: item.progressPercentage}}
                      viewport={{once: true, amount: 0.6}}
                      transition={{duration: 1.2, ease: EASE, delay: 0.15}}
                    />
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        )}
      </div>
    </section>
  );
}
