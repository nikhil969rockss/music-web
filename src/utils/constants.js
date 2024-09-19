import DummyContent from "@/components/CarouselPopup";
import Image from "next/image";

export const LandingPageHeading = "Master the Art of Music ";

export const LandingPageSubHeading = "From beginners to advanced musicians, our music school offers personalized lessons for every level."

export const CTA1 = "Get Started with a Free Lesson"
export const CTA2 = "Explore Our Courses"


//section-2 constants below

export const Heading = "Unlock the Musician in You."

export const subHeading = "Whether you're picking up an instrument for the first time or perfecting your craft, our tailored music lessons help you achieve your musical dreams."

// carousel data

export const carouselData = [
    {
    title: "Master the Strings.",
    
    category: "Guitar Lessons",
    src: "https://images.unsplash.com/photo-1567876520868-1fb3fef987fc?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent img={'https://images.unsplash.com/photo-1567619822659-2094d3ebef04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHN0cmluZ3N8ZW58MHx8MHx8fDI%3D'} />,
    },
    {
      category: "Piano Lessons",
      title: "Unlock the Keys to Greatness.",
      src: "https://images.unsplash.com/photo-1602879030257-f725a352fb32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGlhbm8lMjBsZXNzb258ZW58MHx8MHx8fDI%3D",
      content: <DummyContent img={'https://images.unsplash.com/photo-1610282594974-03cf1dacc68b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbm98ZW58MHx8MHx8fDI%3D'} />,
    },
    {
      category: "Vocal Training",
      title: "Elevate Your Voice.",
      src: "https://images.unsplash.com/photo-1643591734888-efa99a40dcb1?q=80&w=2856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent img={'https://images.unsplash.com/photo-1697549903797-11def37940e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZvY2FsfGVufDB8fDB8fHwy'} />,
    },

    {
      category: "Drum Lessons",
      title: "Find Your Rhythm.",
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ1bSUyMGxlc3NvbnxlbnwwfHwwfHx8Mg%3D%3D",
      content: <DummyContent img={'https://images.unsplash.com/photo-1553406624-739b610cf5c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ1bXxlbnwwfHwwfHx8Mg%3D%3D'} />,
    },
    {
      category: "Music Theory",
      title: "Understand the Language of Music.",
      src: "https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2ljJTIwdGhlb3J5fGVufDB8fDB8fHwy",
      content: <DummyContent img={'https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG11c2ljJTIwdGhlb3J5fGVufDB8fDB8fHwy'} />,
    },
    {
      category: "Songwriting",
      title: "Create Your Musical Story.",
      src: "https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNvbmclMjB3cml0aW5nfGVufDB8fDB8fHwy",
      content: <DummyContent img={'https://images.unsplash.com/photo-1612374650432-bc52666bb7ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29uZ3dyaXRpbmd8ZW58MHx8MHx8fDI%3D'} />,
    },
];

//sticky content data
  
export const stickyContent = [
  {
    title: "Personalized Learning Experience",
    description:
      "Receive one-on-one attention from our expert instructors. Every lesson is customized to your skill level and musical goals, ensuring that you get the most out of your learning experience. Whether you’re a beginner or a professional, we tailor the curriculum just for you.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxlYXJuaW5nJTIwZXhwZXJpZW5jZXxlbnwwfHwwfHx8Mg%3D%3D"
          width="300"
          height="300"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Interactive Group Sessions",
    description:
      "Engage in dynamic group classes where you can learn from and with your peers. Our interactive group sessions foster collaboration, creativity, and motivation. Perfect for building confidence and learning to play as part of an ensemble.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="300"
          height="300"
          
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Practice and learn in a space designed for creativity. Our school is equipped with top-quality instruments and professional-grade sound systems, giving you an immersive environment where you can focus on refining your skills and reaching your full potential.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFydCUyMGZhY2lsaXR5JTIwbXVzaWN8ZW58MHx8MHx8fDI%3D"
          width="300"
          height="300"

          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Performance Opportunities",
    description:
      "Showcase your progress through regular recitals and concerts. Gain valuable experience performing in front of an audience, building confidence and stage presence. These performances provide a real-world platform to celebrate your musical journey.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1594122230689-7f659cff55b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyZm9ybWFuY2UlMjBvcHB1dHVybml0eXxlbnwwfHwwfHx8Mg%3D%3D"
          width="300"
          height="300"

          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Flexible Lesson Scheduling",
    description:
      "Our flexible scheduling options ensure that learning music fits seamlessly into your life. With both in-person and virtual lessons available, you can choose the format that works best for you—whether you’re juggling school, work, or other commitments.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1514782831304-632d84503f6f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNjaGVkdWxlfGVufDB8fDB8fHwy"
          width="300"
          height="300"

          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  }
];

// section 4 data

export const cardData = [{
  category: "Alumni Success Stories",
  title: "Hear from Our Graduates",
  description: "Discover the journeys of our former students who are now successful musicians, performers, and educators. Their achievements inspire the next generation of talent.",

},
  {
    category: "Community Engagement",
    title: "Be Part of a Musical Community",
    description: "Our school isn’t just about learning—it’s about belonging. Join a vibrant community of music lovers, participate in collaborative projects, and connect with peers who share your passion.",

  },
  {
    category: "Parent Involvement Programs",
    title: "Support for Young Musicians",
    description: "We encourage parents to get involved in their child’s musical development. Through regular updates, progress reports, and family-inclusive events, we keep parents informed and engaged.",

  },
  {
    category: "Music Camps and Workshops",
    title: "Intensive Learning Opportunities",
    description: "Experience immersive music camps and workshops where students dive deep into their craft, work with guest artists, and collaborate in new ways. Ideal for those looking to push their boundaries.",

  },
  {
    category: "Music Therapy Programs",
    title: "Healing Through Music",
    description: "Our music therapy sessions offer a unique way to connect and heal through sound. Perfect for individuals looking to explore the therapeutic power of music in a supportive environment.",

  },
  {
    category: "Instrument Rental Services",
    title: "Play Without the Commitment",
    description: "Don’t have an instrument yet? No problem! We offer affordable instrument rental options so you can start learning without the upfront investment in expensive gear.",

  },
]

// testimonials Data 
export const testimonials = [
  {
    quote:
      "The atmosphere at Harmonics Music School is truly special. I’ve always wanted to learn how to play the piano, but I was nervous about starting as an adult beginner. The teachers here are incredibly patient and make learning fun and engaging. They tailor each lesson to my pace, and I’ve made so much progress without feeling overwhelmed. I can’t recommend them enough!",
    name: "– Emily W.",
    title: "",
  },
  {
    quote:
      "My son has been taking guitar lessons here for over a year, and I’m amazed at how much he’s learned! The instructors are not only talented musicians but also fantastic educators who really know how to connect with young learners. They make the lessons exciting and keep him motivated. Plus, the regular recitals give him a chance to show off his skills, which has boosted his confidence tremendously.",
    name: "– David M.",
    title: "",
  },
  {
    quote: "I’ve attended both in-person and online lessons at Harmonics Music School, and both experiences have been top-notch. The online platform is super easy to use, and the quality of instruction doesn’t drop at all—it feels like you’re in the room with your teacher! The flexibility to choose between online and in-person lessons has made it so much easier to fit music into my life. It’s the best of both worlds!",
    name: "– Anna K.",
    title: "",
  },
  {
    quote:
      "What really sets this school apart is the sense of community. You’re not just coming here for lessons; you’re joining a supportive, creative family. The group workshops and jam sessions are so much fun, and they’ve really helped me grow as a musician. Everyone, from the instructors to the fellow students, is encouraging and collaborative. It’s a great place to not only improve your skills but also make friends and share your passion for music.",
    name: "– Jack R.",
    title: "",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "",
  },
];

//our courses data 

export const coursesData = [
  {
    id: 1,
    courseName: "Beginner’s Guide to Music",
    description: "Perfect for newcomers, this course introduces the basics of music theory, rhythm, and melody.",
    topic: "Introduction to notes, scales, and simple rhythms.",
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmVnaW5uZXIlRTIlODAlOTlzJTIwR3VpZGUlMjB0byUyME11c2ljfGVufDB8fDB8fHwy"
  },
  {
    id: 2,
    courseName: " Guitar Fundamentals",
    description: "Learn the basics of playing the guitar, from chords to strumming techniques.",
    topic: "Open chords, barre chords, fingerpicking, and basic scales.",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1519640350407-953bc0614f4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEd1aXRhciUyMEZ1bmRhbWVudGFsc3xlbnwwfHwwfHx8Mg%3D%3D"
  },
  {
    id: 3,
    courseName: "Piano for Beginners",
    description: "Explore the fundamentals of piano playing, including hand positioning, scales, and simple songs.",
    topic: "Basic scales, sight-reading, and beginner songs.",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1507417869387-f868beebf2f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fFBpYW5vJTIwZm9yJTIwQmVnaW5uZXJzfGVufDB8fDB8fHwy"
  },
  {
    id: 4,
    courseName: "Vocal Training",
    description: "Improve your singing voice with vocal techniques, breath control, and pitch exercises.",
    topic: "Vocal warm-ups, pitch training, breath control, and harmonization.",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1579870946215-8284f1a47c9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFZvY2FsfGVufDB8fDB8fHwy"
  },
  {
    id: 5,
    courseName: "Music Production and Recording",
    description: "Learn the fundamentals of producing and recording music using modern software and equipment.",
    topic: "DAW software (like Logic Pro, Ableton), mixing, mastering, and sound engineering.",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1563330232-57114bb0823c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TXVzaWMlMjBQcm9kdWN0aW9uJTIwYW5kJTIwUmVjb3JkaW5nfGVufDB8fDB8fHwy"
  },
  {
    id: 6,
    courseName: " Advanced Music Theory",
    description: "Dive deeper into complex music theory, including harmonics, counterpoint, and advanced chord progressions.",
    topic: " Modes, chromatic scales, advanced harmony, and analysis.",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1466428996289-fb355538da1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEFkdmFuY2VkJTIwTXVzaWMlMjBUaGVvcnl8ZW58MHx8MHx8fDI%3D"
  },
  {
    id: 7,
    courseName: "Drums & Percussion Masterclass",
    description: "Master the art of rhythm and percussion, from basic beats to advanced drumming techniques.",
    topic: "Rudiments, time signatures, syncopation, and complex rhythms.",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1708961465136-e24550f3acd5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fERydW1zJTIwJTI2JTIwUGVyY3Vzc2lvbiUyME1hc3RlcmNsYXNzfGVufDB8fDB8fHwy"
  },
  { id: 8,
    courseName: "Songwriting and Composition",
    description: "Learn to craft melodies, write lyrics, and compose original music.",
    topic: "Song structure, lyric writing, melodic composition, and arrangement.",
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1593698054589-8c14bb66d2d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U29uZ3dyaXRpbmd8ZW58MHx8MHx8fDI%3D"
  },
  {
    id: 9,
    courseName: "Jazz Improvisation",
    description: "Explore the world of jazz with improvisational techniques and musical expression.",
    topic: "Scales for improvisation, jazz standards, chord progressions, and soloing.",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1541804627596-3b5b9ef58c93?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEphenolMjBJbXByb3Zpc2F0aW9ufGVufDB8fDB8fHwy"
  },
  {
    id: 10,
    courseName: "Music History and Appreciation",
    description: "Study the evolution of music across genres and cultures, and develop an understanding of music appreciation.",
    topic: "Classical, jazz, rock, pop, and world music history.",
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1492284163710-4eef97892705?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fE11c2ljJTIwSGlzdG9yeSUyMGFuZCUyMEFwcHJlY2lhdGlvbnxlbnwwfHwwfHx8Mg%3D%3D"
  },

]