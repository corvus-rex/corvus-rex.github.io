"use client"
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [animateKey, setAnimateKey] = useState(0);

  // Re-trigger animation when section comes back into view
  useEffect(() => {
    if (inView) setAnimateKey((prev) => prev + 1);
  }, [inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    }),
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        delay,
      },
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const jellyBounce = {
    hidden: { opacity: 0, y: 50, rotate: -10, skewX: -5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: [0, 10, -10, 0],
      skewX: [0, 5, -5, 0],
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        type: "spring",
        stiffness: 120,
        damping: 8,
      },
    }),
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <motion.section
        id="hero"
        ref={ref}
        key={animateKey}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
        exit={{ opacity: 0, y: 50 }}
        className="py-12 w-full"
      >
        <div className="mx-auto w-full max-w-full space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={
                  (
                    <>
                      Hi, I&apos;m{" "}
                      <span className="bg-gradient-to-r from-blue-500 via-orange-500 to-purple-800 bg-clip-text text-transparent animate-gradient-pulse">
                        {DATA.name.split(" ")[0]}
                      </span>{" "}
                      👋
                    </>
                  ) as unknown as string
                }
              />

              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <Markdown className="prose max-w-full text-pretty font-sans text-lg dark:text-slate-200 dark:prose-invert">
                  {DATA.description}
                </Markdown>
              </BlurFade>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </motion.section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <motion.section
        id="work"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="flex min-h-0 flex-col gap-y-3"
      >
        <motion.h2 variants={fadeInUp} className="text-xl font-bold">
          Work Experience
        </motion.h2>

        {DATA.work.map((work, id) => (
          <motion.div
            key={work.company}
            variants={fadeInUp}
            custom={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <ResumeCard
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        id="education"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="flex min-h-0 flex-col gap-y-3"
      >
        <motion.h2 variants={fadeInUp} className="text-xl font-bold">
          Education
        </motion.h2>

        {DATA.education.map((education, id) => (
          <motion.div
            key={education.school}
            variants={fadeInUp}
            custom={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <ResumeCard
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="flex min-h-0 flex-col gap-y-3"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl font-bold"
        >
          Skills
        </motion.h2>

        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <motion.div
              key={skill}
              variants={jellyBounce}
              custom={id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <Badge key={skill}>{skill}</Badge>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="space-y-12 w-full py-12"
      >
        <motion.div variants={fadeInUp}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from simple websites to complex web applications.
                Here are a few of my favorites.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects.map((project, id) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              custom={id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section id="awards">
        <div className="space-y-12 w-full py-12">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: BLUR_FADE_DELAY * 12, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Awards
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Achievements & Recognition
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A collection of {DATA.awards.length} awards and recognitions
                I&apos;ve received throughout my career.
              </p>
            </div>
          </motion.div>

          {/* Awards Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: BLUR_FADE_DELAY * 12, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {DATA.awards.map((award, id) => (
              <motion.div
                key={award.title + award.dates}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: BLUR_FADE_DELAY * 15 + id * 0.05,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image */}
                {award.image && (
                  <div className="flex-shrink-0 w-full sm:w-56 h-44 rounded-xl overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col justify-between gap-3 flex-1">
                  <div className="space-y-2">
                    {/* Issuer + Date */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="rounded-full bg-muted px-2 py-0.5 font-medium">
                        {award.location}
                      </span>
                      <span>{award.dates}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-base leading-snug">
                      {award.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground">
                      {award.description}
                    </p>
                  </div>

                  {/* Links */}
                  {award.links && award.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {award.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium hover:bg-accent transition-colors"
                        >
                          {link.icon}
                          {link.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}