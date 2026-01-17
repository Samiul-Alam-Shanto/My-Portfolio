export const projects = [
  {
    id: 1,
    title: "CareBridge",
    category: "On-Demand Healthcare Marketplace",
    description1:
      "A trusted caregiving platform connecting families with verified professionals for elderly care and medical support, bridging the gap between discovery and service delivery with operational transparency.",
    description2:
      "Engineered a robust Next.js 16 application utilizing React Context for global state management to handle complex Guest-to-User cart synchronization. The system features a geospatial booking engine using Leaflet, a secure server-side Stripe implementation to prevent revenue manipulation, and a granular 'Job Lifecycle' dashboard that tracks services from acceptance to completion.",
    challenges:
      "Overcame breaking changes in Next.js 16 regarding asynchronous Route Params and Edge Middleware limitations for Role-Based Access Control (RBAC). Solved critical data integrity issues by implementing server-side price recalculation for Stripe Intent creation, and engineered a custom MongoDB serialization layer to handle native ObjectId conflicts within React Server Components.",
    tags: [
      "Next.js 16",
      "MongoDB Native",
      "Stripe",
      "NextAuth v4",
      "React Context",
      "Tailwind CSS v4",
      "Leaflet Maps",
      "Framer Motion",
      "Axios Secure",
    ],
    image: "/Care_Bridge.png",
    link: "https://carebridge-seven.vercel.app/",
    github: "https://github.com/Samiul-Alam-Shanto/care-bridge.git",
    color: "from-emerald-900/20 to-stone-900",
  },
  {
    id: 2,
    title: "Decoriva",
    category: "Full-Stack Service Management Platform",
    description1:
      "A high-end decoration booking system featuring a 'Vogue-Editorial' aesthetic and a multi-tier role ecosystem for orchestrating luxury home and event styling services.",
    description2:
      "Architected a cutting-edge SPA using React 19 and Tailwind v4 to deliver an immersive, motion-rich user experience. The system integrates a persistent 'Cart Drawer' for seamless package shortlisting and utilizes a secure Express 5 backend with MongoDB Native drivers to handle complex business logic—from dynamic service filtering to real-time order status tracking and Stripe hosted payments.",
    challenges:
      "Faced critical security challenges in implementing granular Role-Based Access Control (RBAC) to prevent unauthorized mass-assignment updates, as well as overcoming MongoDB Strict Mode limitations for dynamic location filtering. Resolved these by engineering custom secure Axios interceptors for automatic token injection and deploying advanced Aggregation Pipelines to ensure robust, scalable data retrieval without an ORM.",
    tags: [
      "React",
      "Express.js",
      "MongoDB",
      "Node.js",
      "Tailwind CSS",
      "Firebase",
      "Stripe",
      "TanStack Query",
      "Framer Motion",
      "JWT",
      "DaisyUI",
    ],
    image: "/Decoriva.png",
    link: "https://decoriva.web.app/",
    github: "https://github.com/Samiul-Alam-Shanto/Decoriva-client.git",
    color: "from-blue-900/20 to-neutral-900",
  },

  {
    id: 3,
    title: "Eventoria",
    category: "Full-Stack SaaS Platform",
    description1:
      "A premium event orchestration platform featuring a Glassmorphic 'Dark Luxury' UI and a robust serverless architecture for seamless event discovery and management.",
    description2:
      "Engineered a decoupled architecture using Next.js 16 for a high-performance client and Express.js for a secure API, creating a frictionless experience for organizers. The platform integrates hybrid authentication and real-time data filtering, wrapped in an immersive, motion-enhanced interface designed to maximize user engagement.",
    challenges:
      "Faced complexities in synchronizing authentication states between the Next.js App Router and a standalone Express backend, as well as managing optimistic UI updates across a distributed system. Resolved these by implementing TanStack Query for efficient server-state caching and designing strict backend middleware to enforce data ownership and route security.",
    tags: [
      "Next.js 16",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TanStack Query",
      "Framer Motion",
    ],
    image: "/Eventoria.png",
    link: "https://eventoria-client.vercel.app",
    github: "https://github.com/Samiul-Alam-Shanto/Eventoria.git",
    color: "from-blue-900/20 to-neutral-900",
  },
  {
    id: 4,
    title: "TasteTribe",
    category: "Full-Stack Community Platform",
    description1:
      "A community-driven discovery platform designed to celebrate authentic local flavors through an inviting 'Warm & Rustic' UI and a robust, scalable MERN architecture.",
    description2:
      "Architected a decoupled MERN application with a dynamic React (Vite) client and a secure Express.js API. The platform integrates Firebase for streamlined authentication and leverages TanStack Query for declarative server-state management, ensuring a fluid and responsive user journey from discovery to contribution.",
    challenges:
      "Faced challenges in maintaining real-time UI synchronization with the backend state after user-driven mutations (e.g., creating or deleting reviews). Resolved these by architecting a robust caching strategy with TanStack Query, utilizing queryClient.invalidateQueries to declaratively refetch stale data. This ensured an optimistic and consistent user experience without complex client-side state management.",
    tags: [
      "React (Vite)",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TanStack Query",
      "Firebase",
      "React Awesome Reveal",
    ],
    image: "/TasteTribe.png",
    link: "https://taste-tribe-food.web.app/",
    github: "https://github.com/Samiul-Alam-Shanto/A10-Taste_Tribe_Client.git",
    color: "from-emerald-900/20 to-neutral-900",
  },
  {
    id: 5,
    title: "GreenNest",
    category: "Front-End Plant Care Platform",
    description1:
      "An elegant, full-stack platform designed to create a tranquil digital sanctuary for plant enthusiasts, featuring a curated e-commerce experience and expert care guides. The application is wrapped in a calm, minimalist UI with a focus on a seamless and performant user journey.",
    description2:
      "Engineered a client-centric architecture using React (Vite) for a highly interactive SPA experience and Firebase for a robust BaaS solution, handling secure authentication and real-time user profile management. The platform integrates a complex, stateful filtering engine for performant product discovery, all styled with a responsive, utility-first design system built with Tailwind CSS.",
    challenges:
      "Faced complexities in managing performant, multi-faceted filter state (live search, price range, categories, stock) without UI lag. Resolved this by architecting a client-side state management strategy using React's useState and useMemo hooks. useMemo was critical for memoizing the filtered and sorted results, preventing costly re-calculations on every render and ensuring a fluid experience. Another challenge was ensuring instantaneous UI updates for user profile changes (name/photo) without a page refresh, which was solved by augmenting the authentication context to optimistically update the local user state upon a successful API response, creating a seamless feedback loop.",
    tags: [
      "React (Vite)",
      "Firebase",
      "Tailwind CSS",
      "DaisyUI",
      "Framer Motion",
      "Swiper.js",
    ],
    image: "/GreenNest.png",
    link: "https://the-greennest.web.app",
    github: "https://github.com/Samiul-Alam-Shanto/A09-GreenNest.git",
    color: "from-purple-900/20 to-neutral-900",
  },
];
