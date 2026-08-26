// AI Mentor Knowledge Base & Response Engine Patterns

export const SUGGESTED_QUESTIONS = [
  'Why did you recommend React?',
  'Can I skip JavaScript basics?',
  'What should I learn next?',
  'I am finding this topic difficult.',
  'How do I build a portfolio project for this?',
  'What are common interview questions on this topic?'
];

export const TOPIC_EXPLANATIONS_DB = {
  'web-p1-t1': {
    why: "You are beginning your Web Development journey. HTML5 and CSS3 are the essential visual building blocks of the web. Understanding semantic structure and CSS layout algorithms (Flexbox & Grid) is fundamental before learning JavaScript or UI frameworks.",
    prereqCheck: "No prerequisites required - perfect starting point."
  },
  'web-p2-t1': {
    why: "Since you already have HTML and CSS knowledge, JavaScript is the natural next step. It transforms static pages into dynamic, interactive applications and is required before touching modern frameworks.",
    prereqCheck: "Builds upon your HTML/CSS foundations."
  },
  'web-p3-t1': {
    why: "React is currently the most popular frontend library in the industry. It uses declarative component-based architecture and Virtual DOM diffing to build scalable, reactive user interfaces with reusable building blocks.",
    prereqCheck: "Requires solid understanding of ES6 JavaScript (destructuring, arrow functions, array methods) and DOM events."
  },
  'web-p4-t1': {
    why: "Node.js allows you to use your existing JavaScript skills on the server side. Express provides a lightweight, minimalist framework for building scalable RESTful APIs.",
    prereqCheck: "Leverages your asynchronous JavaScript knowledge (Promises & async/await)."
  },
  'ai-p1-t1': {
    why: "NumPy provides high-performance N-dimensional array processing implemented in C. All modern machine learning frameworks (PyTorch, TensorFlow, Scikit-Learn) are built on top of vectorized array concepts.",
    prereqCheck: "Basic Python syntax."
  },
  'ai-p3-t1': {
    why: "PyTorch has become the primary framework for modern Deep Learning research and industry applications. Its dynamic computation graph and Pythonic syntax make building neural networks intuitive.",
    prereqCheck: "Requires matrix algebra, gradients, and basic ML concepts."
  },
  'dsa-p1-t1': {
    why: "The Two-Pointer and Sliding Window techniques allow reducing brute-force O(N²) time complexity down to linear O(N) time for a huge category of array and string problems.",
    prereqCheck: "Basic array indexing and loop constructs."
  },
  'dsa-p3-t1': {
    why: "Dynamic Programming optimizes overlapping recursive subproblems through memoization and tabulation. It is the most frequently tested advanced topic in tier-1 technical interviews.",
    prereqCheck: "Requires strong comfort with recursion and tree/graph state transitions."
  }
};
