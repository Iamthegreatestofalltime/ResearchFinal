"use client";

// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const floatShape = {
  animate: {
    y: [0, -20, 0],
    x: [0, 20, 0],
    transition: { duration: 6, ease: "easeInOut", repeat: Infinity },
  },
};

export default function Home() {
  const [heroRef, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const sections = [
    {
      title: "Part 1: Brainstorming",
      content: (
        <>
          <h3 className="font-semibold">Personal Growth</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <strong>Skills to Develop:</strong> Advanced deep learning
              techniques, scalable MLOps pipelines, public speaking,
              leadership.
            </li>
            <li>
              <strong>Experiences:</strong> Leading cross-functional AI
              projects, presenting at international conferences, mentoring
              junior engineers.
            </li>
            <li>
              <strong>Values:</strong> Integrity, continuous learning,
              collaboration, social impact, work-life balance.
            </li>
          </ul>

          <h3 className="font-semibold mt-4">Career Aspirations</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <strong>Field:</strong> Machine Learning Engineering at
              top-tier tech firms or innovative AI startups.
            </li>
            <li>
              <strong>Education Path:</strong> BS in Computer Science →
              MS in Computer Science with focus in generative AI at a
              grad school → certifications (AWS, TensorFlow).
            </li>
            <li>
              <strong>Experience:</strong> Summer internships, research
              assistantships, industry co-op programs.
            </li>
            <li>
              <strong>Work Environment:</strong> innovation-driven,
              passionate teams with high expectations for each other.
            </li>
            <li>
              <strong>Work-Life Balance:</strong> In the beginning I
              don’t care about my work life balance much. In my 30s I will
              want more work-life balance though.
            </li>
          </ul>

          <h3 className="font-semibold mt-4">Location & Lifestyle</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <strong>Residence:</strong> Urban loft in a tech hub (e.g.,
              San Francisco or Austin), proximity to research labs and
              networking events.
            </li>
            <li>
              <strong>Lifestyle:</strong> Regular travel for conferences,
              active community involvement (STEM outreach), hobbies like
              skiing and motorcycling.
            </li>
            <li>
              <strong>Financial Goals:</strong> $130k–150k total
              compensation by year 5, savings plan for early home purchase,
              disciplined investment portfolio growth.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Part 2: Cohesive Vision",
      content: (
        <>
          <p>
            <strong>A Day in the Life:</strong> Wake up at 7 AM in a modern
            loft, review overnight model performance metrics, code MLOps
            pipeline improvements, lead a stand-up meeting, mentor interns
            in the afternoon, end the work day at around 6, go home and do
            my hobbies or work on a passion project.
          </p>
          <p>
            <strong>Challenges & Opportunities:</strong> Balancing rapid
            skill growth with burnout prevention, leveraging open-source
            contributions and speaking engagements to build reputation.
          </p>
          <p>
            <strong>Definition of Success:</strong> Tangible impact through
            deployed models that improve user experience, strong leadership
            presence, and maintained personal wellness.
          </p>
        </>
      ),
    },
    {
      title: "Part 3: Research — Masters in Computer Science",
      content: (
        <>
          <h3 className="font-semibold">Academics & Programs</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <strong>Majors & Minors:</strong> MS in Computer Science,
              with a math minor.
            </li>
            <li>
              <strong>Reputation:</strong> Top 50 CS program, known for AI
              and human-computer interaction research.
            </li>
            <li>
              <strong>Research Opportunities:</strong> AI Lab
              assistantships, funded thesis projects on MLE, summer
              research grants.
            </li>
            <li>
              <strong>Internships & Co-ops:</strong> Partnerships with local
              tech firms, career fairs, dedicated co-op office facilitating
              placements.
            </li>
            <li>
              <strong>Study Abroad:</strong> Exchange with TU Munich AI
              program, semester-long research collaboration in Europe.
            </li>
            <li>
              <strong>Class Structure:</strong> Mix of small seminars (15
              students) and larger lectures (100+), student-to-faculty ratio
              13:1.
            </li>
          </ul>

          <h3 className="font-semibold mt-4">Campus Life & Surroundings</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <strong>Campus Setting:</strong> Mid-sized campus in
              Bloomington, IN—a college town with vibrant social scene.
            </li>
            <li>
              <strong>Student Body:</strong> Diverse cohort with
              international representation (20%), active cultural clubs.
            </li>
            <li>
              <strong>Organizations:</strong> AI Club, HackIU hackathons,
              intramural sports.
            </li>
            <li>
              <strong>Housing:</strong> Luddy LLC
            </li>
            <li>
              <strong>Dining:</strong> Multiple meal plans.
            </li>
          </ul>

          <h3 className="font-semibold mt-4">Logistics & Support</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <strong>Cost & Aid:</strong> Tuition $30k/year,
              assistantships available covering full tuition plus stipend,
              merit scholarships.
            </li>
            <li>
              <strong>Career Services:</strong> Dedicated AI career
              advisors, 98% placement within six months, strong alumni
              network in Silicon Valley and Chicago.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Part 4: Visual/Tactile Representation",
      content: (
        <>
          <div className="mt-4 space-x-4">
            <Link href="https://alex-lotkov-portfolio.vercel.app/">
              <Button>View Portfolio</Button>
            </Link>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>10-Year Reflection</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="relative overflow-hidden">
        {/* Floating Background Shapes */}
        <motion.div
          className="absolute top-10 left-[-100px] w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          variants={floatShape}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-10 right-[-100px] w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
          variants={floatShape}
          animate="animate"
        />

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 text-center px-6"
        >
          <AnimatePresence>
            {inView && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                  Alex's Future
                </h1>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                  A 10-Year Reflection, combining self-discovery, research, and
                  creativity.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom fade overlay */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent dark:from-gray-900" />
        </section>

        {/* Content Sections with Scroll Animation */}
        <div className="space-y-20 py-20 px-4 lg:px-32">
          {sections.map((sec, idx) => {
            const [ref, view] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });
            return (
              <section key={idx} ref={ref} className="relative">
                <motion.div
                  initial="hidden"
                  animate={view ? "visible" : "hidden"}
                  variants={fadeInUp}
                  custom={idx + 1}
                >
                  <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader>
                      <h2 className="text-3xl font-bold text-indigo-600">
                        {sec.title}
                      </h2>
                    </CardHeader>
                    <CardContent className="text-gray-700 dark:text-gray-200 space-y-4">
                      {sec.content}
                    </CardContent>
                  </Card>
                </motion.div>
              </section>
            );
          })}
        </div>

        {/* Footer with Animated Separator */}
        <footer className="py-12 bg-gray-100 dark:bg-gray-800 text-center">
          <motion.hr
            className="max-w-md mx-auto border-t-2 border-indigo-300"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2 }}
          />
        </footer>
      </main>
    </>
  );
}
