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

export const data = [
    {
    title: "Master the Strings.",
    
    category: "Guitar Lessons",
    src: "https://images.unsplash.com/photo-1567876520868-1fb3fef987fc?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Piano Lessons",
      title: "Unlock the Keys to Greatness.",
      src: "https://images.unsplash.com/photo-1602879030257-f725a352fb32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGlhbm8lMjBsZXNzb258ZW58MHx8MHx8fDI%3D",
      content: <DummyContent />,
    },
    {
      category: "Vocal Training",
      title: "Elevate Your Voice.",
      src: "https://images.unsplash.com/photo-1643591734888-efa99a40dcb1?q=80&w=2856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },

    {
      category: "Drum Lessons",
      title: "Find Your Rhythm.",
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ1bSUyMGxlc3NvbnxlbnwwfHwwfHx8Mg%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Music Theory",
      title: "Understand the Language of Music.",
      src: "https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2ljJTIwdGhlb3J5fGVufDB8fDB8fHwy",
      content: <DummyContent />,
    },
    {
      category: "Songwriting",
      title: "Create Your Musical Story.",
      src: "https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNvbmclMjB3cml0aW5nfGVufDB8fDB8fHwy",
      content: <DummyContent />,
    },
];
  
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