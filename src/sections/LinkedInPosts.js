import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiHeart,
  FiLinkedin,
  FiMessageCircle
} from "react-icons/fi";
import {linkedinSection, socialMediaLinks} from "../portfolio";
import SectionHeading from "../components/ui/SectionHeading";
import {EASE, stagger, viewport} from "../lib/motion";
import "./LinkedInPosts.css";

const MAX_POSTS = 5;

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function truncateText(text, limit = 280) {
  if (!text || text.length <= limit) return text;
  return `${text.slice(0, limit).trim()}…`;
}

function PostCard({post}) {
  return (
    <motion.article
      className="li-post glass lift"
      variants={{
        hidden: {opacity: 0, y: 28},
        show: {opacity: 1, y: 0, transition: {duration: 0.65, ease: EASE}}
      }}
    >
      <header className="li-post__head">
        <span className="li-post__avatar" aria-hidden="true">
          <FiLinkedin />
        </span>
        <div className="li-post__meta">
          <span className="li-post__author">{post.author || "Muhammad Ismail"}</span>
          <time className="li-post__date" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>
      </header>

      <p className="li-post__text">{truncateText(post.text)}</p>

      {post.tags?.length ? (
        <ul className="li-post__tags">
          {post.tags.map(tag => (
            <li className="chip" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      ) : null}

      <footer className="li-post__foot">
        <div className="li-post__stats">
          {post.reactions != null ? (
            <span className="li-post__stat">
              <FiHeart aria-hidden="true" />
              {post.reactions}
            </span>
          ) : null}
          {post.comments != null ? (
            <span className="li-post__stat">
              <FiMessageCircle aria-hidden="true" />
              {post.comments}
            </span>
          ) : null}
        </div>

        <a
          className="li-post__link"
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on LinkedIn
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </footer>
    </motion.article>
  );
}

export default function LinkedInPosts() {
  const [posts, setPosts] = useState(linkedinSection.posts || []);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`${process.env.PUBLIC_URL || ""}/linkedin-posts.json`)
      .then(res => (res.ok ? res.json() : null))
      .then(data => {
        if (cancelled || !data?.posts?.length) return;
        setPosts(data.posts.slice(0, MAX_POSTS));
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoaded(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!linkedinSection.display) return null;

  const visiblePosts = posts.slice(0, MAX_POSTS);
  const profileUrl = linkedinSection.profileUrl || socialMediaLinks.linkedin;

  return (
    <section
      className="section linkedin-posts"
      id="linkedin"
      aria-labelledby="linkedin-heading"
    >
      <div className="shell">
        <SectionHeading
          index="05b"
          eyebrow="LinkedIn"
          title={linkedinSection.title}
          subtitle={linkedinSection.subtitle}
        />

        <motion.div
          className="li-posts__grid"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {visiblePosts.map(post => (
            <PostCard key={post.id || post.url} post={post} />
          ))}
        </motion.div>

        {!loaded && visiblePosts.length === 0 ? (
          <p className="li-posts__loading lead" aria-live="polite">
            Loading latest posts…
          </p>
        ) : null}

        <motion.div
          className="li-posts__cta-wrap"
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.6}}
          transition={{duration: 0.55, ease: EASE}}
        >
          <a
            className="li-posts__profile btn btn--ghost"
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin aria-hidden="true" />
            Follow on LinkedIn
            <FiExternalLink aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
