// Curated Domain Curricula for LearnPath AI

export const DOMAINS = [
  {
    id: 'web-dev',
    name: 'Full Stack Web Development',
    icon: 'Globe',
    description: 'Master modern frontend, scalable backends, database architecture, and production deployment.',
    popularSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Next.js'],
    defaultDurationMonths: 3,
    phases: [
      {
        phaseNumber: 1,
        phaseName: 'Frontend Fundamentals',
        description: 'Establish deep mastery over semantic markup, modern CSS layouts, responsive design, and DOM essentials.',
        topics: [
          {
            id: 'web-p1-t1',
            name: 'Semantic HTML5 & Modern CSS3',
            description: 'Semantic tags, accessibility (a11y), CSS Flexbox, CSS Grid layouts, custom properties, and fluid typography.',
            duration: '8 hours',
            difficulty: 'Beginner',
            prerequisites: [],
            type: 'Course',
            skillTag: 'HTML/CSS',
            resource: {
              title: 'Modern HTML & CSS Deep Dive',
              platform: 'MDN Web Docs & Interactive Guides',
              format: 'Interactive Tutorial',
              summary: 'Complete guide to building modern, accessible, and responsive layouts without framework bloat.'
            },
            project: {
              title: 'Responsive Developer Portfolio',
              brief: 'Build a fully responsive personal landing page featuring CSS Grid cards, dark/light theme switcher, and accessible forms.',
              deliverable: 'Clean semantic HTML + CSS codebase with 100% lighthouse accessibility score.'
            },
            quiz: [
              {
                question: 'Which CSS layout model is best suited for 2-dimensional grid layouts?',
                options: ['CSS Flexbox', 'CSS Grid', 'Float layouts', 'Position absolute'],
                correctIndex: 1,
                explanation: 'CSS Grid is designed for 2D layouts (rows and columns), whereas Flexbox is primarily 1D.'
              }
            ],
            whyThisReason: 'HTML and CSS are the non-negotiable bedrock of all web applications. Mastering semantic structure and layout models prevents brittle UI bugs later.',
            remedialTopics: [
              {
                id: 'web-rem-html-basics',
                name: 'HTML Elements & CSS Selectors Refresher',
                description: 'Step-by-step visual breakdown of box-model, selectors, and tag semantics.',
                duration: '3 hours',
                difficulty: 'Beginner',
                type: 'Course',
                skillTag: 'HTML Basics'
              }
            ],
            alternativeOptions: [
              {
                name: 'Modern CSS Frameworks & Utility Systems',
                description: 'Explore utility-first architecture and modern CSS modules.',
                duration: '6 hours'
              }
            ]
          },
          {
            id: 'web-p1-t2',
            name: 'Responsive Design & Mobile-First UX',
            description: 'Media queries, responsive image sets (srcset), fluid viewport units, touch targets, and mobile UX patterns.',
            duration: '6 hours',
            difficulty: 'Beginner',
            prerequisites: ['HTML/CSS'],
            type: 'Project',
            skillTag: 'Responsive UX',
            resource: {
              title: 'Mobile-First Layout Patterns',
              platform: 'web.dev by Google',
              format: 'Guide & Code Labs',
              summary: 'Industry patterns for dynamic viewport sizing and fluid container queries.'
            },
            project: {
              title: 'Multi-device SaaS Landing Page',
              brief: 'Design and build a responsive landing page that adapts seamlessly across mobile (375px), tablet (768px), and ultra-wide displays.',
              deliverable: 'Tested responsive web layout with fluid typography and hamburger navigation.'
            },
            whyThisReason: 'Over 60% of all web traffic is mobile. Starting with mobile-first constraints guarantees robust, high-performance user interfaces.'
          }
        ]
      },
      {
        phaseNumber: 2,
        phaseName: 'Core JavaScript Mastery',
        description: 'From lexical scope and closures to asynchronous programming, Fetch API, and modern ES6+ standards.',
        topics: [
          {
            id: 'web-p2-t1',
            name: 'JavaScript Fundamentals & Data Types',
            description: 'Primitive types, objects, arrays, functions, scope chains, execution context, and higher-order array methods (map/filter/reduce).',
            duration: '12 hours',
            difficulty: 'Beginner',
            prerequisites: ['HTML/CSS'],
            type: 'Course',
            skillTag: 'JavaScript',
            resource: {
              title: 'JavaScript: The Hard Parts Explained',
              platform: 'JavaScript.info & Frontend Masters',
              format: 'Interactive Course',
              summary: 'Deep dive into memory allocation, closures, call stack, and functional methods.'
            },
            project: {
              title: 'Interactive Expense & Budget Tracker',
              brief: 'Create an in-browser budget tracker with real-time calculations, filtering by category, and local storage state.',
              deliverable: 'Pure vanilla JS web application without external libraries.'
            },
            quiz: [
              {
                question: 'Which method returns a new array with elements that pass a provided test?',
                options: ['forEach()', 'filter()', 'find()', 'map()'],
                correctIndex: 1,
                explanation: '`filter()` creates a shallow copy of a portion of a given array, filtered down to just the elements that pass the test implemented by the provided function.'
              }
            ],
            whyThisReason: 'JavaScript is the engine of the web. Understanding functional methods and memory models is mandatory before touching UI frameworks.',
            remedialTopics: [
              {
                id: 'web-rem-js-variables',
                name: 'Variables, Loops & Functions Sandbox',
                description: 'Hands-on beginner exercises with console debugging and step-by-step logic tracing.',
                duration: '4 hours',
                difficulty: 'Beginner',
                type: 'Course',
                skillTag: 'JS Basics'
              }
            ]
          },
          {
            id: 'web-p2-t2',
            name: 'DOM Manipulation, Events & Async JS',
            description: 'Event delegation, event loop, Promises, async/await, Fetch API, error handling, and JSON manipulation.',
            duration: '10 hours',
            difficulty: 'Intermediate',
            prerequisites: ['JavaScript'],
            type: 'Project',
            skillTag: 'Async JS & DOM',
            resource: {
              title: 'Mastering the Browser Event Loop & Async API',
              platform: 'FreeCodeCamp & Dev.to',
              format: 'Video & Sandbox Lab',
              summary: 'Understanding microtasks, macrotasks, HTTP requests, and DOM rendering lifecycle.'
            },
            project: {
              title: 'Live Weather & Forecast Hub',
              brief: 'Build an app fetching real-time weather data from OpenWeather API with debounced search and asynchronous error states.',
              deliverable: 'Async JavaScript application handling loading spinners, error toasts, and cached responses.'
            },
            whyThisReason: 'Modern web applications constantly communicate with REST APIs asynchronously. Async/await mastery prevents race conditions.'
          }
        ]
      },
      {
        phaseNumber: 3,
        phaseName: 'Frontend Frameworks (React)',
        description: 'Declarative UI, component lifecycle, hooks, state management, and modern component patterns.',
        topics: [
          {
            id: 'web-p3-t1',
            name: 'React Components, Props & JSX',
            description: 'Component architecture, JSX syntax, unidirectional data flow, props validation, and conditional rendering.',
            duration: '8 hours',
            difficulty: 'Intermediate',
            prerequisites: ['JavaScript', 'Async JS & DOM'],
            type: 'Course',
            skillTag: 'React Basics',
            resource: {
              title: 'Official React Documentation (react.dev)',
              platform: 'React Core Team Docs',
              format: 'Interactive Documentation',
              summary: 'Thinking in React: from state decomposition to component hierarchy.'
            },
            project: {
              title: 'Interactive Kanban Task Board',
              brief: 'Build a modular Trello-style board with columns, card items, and dynamic column state.',
              deliverable: 'Reusable React component tree with clean props passing.'
            },
            whyThisReason: 'React powers the majority of modern frontend industry roles. Component-driven architecture accelerates scalable UI creation.',
            remedialTopics: [
              {
                id: 'web-rem-js-recap',
                name: 'JavaScript ES6 Destructuring & Arrow Functions Recap',
                description: 'Targeted refresher on object destructuring, spread operators, and array methods essential for React.',
                duration: '3 hours',
                difficulty: 'Beginner',
                type: 'Course',
                skillTag: 'ES6 Syntax'
              }
            ],
            alternativeOptions: [
              {
                name: 'Vue.js 3 Composition API Essentials',
                description: 'Learn modern Vue 3 reactive system and single-file components.',
                duration: '8 hours'
              },
              {
                name: 'Svelte 5 Runes & Reactive Architecture',
                description: 'Compile-time reactivity with zero virtual DOM overhead.',
                duration: '7 hours'
              }
            ]
          },
          {
            id: 'web-p3-t2',
            name: 'React Hooks & State Architecture',
            description: 'useState, useEffect, useRef, useMemo, useCallback, custom hooks, and context API for global state.',
            duration: '14 hours',
            difficulty: 'Intermediate',
            prerequisites: ['React Basics'],
            type: 'Course',
            skillTag: 'React Hooks',
            resource: {
              title: 'Advanced React Patterns & Custom Hooks',
              platform: 'EpicReact / React Training',
              format: 'Code Workshop',
              summary: 'Eliminating unnecessary re-renders, managing side effects, and creating scalable custom hooks.'
            },
            project: {
              title: 'E-Commerce Storefront with Cart State',
              brief: 'Build an online storefront with catalog filtering, persistent cart drawer via Context API, and checkout simulation.',
              deliverable: 'Production-ready React e-commerce frontend with custom hooks for localStorage and data fetching.'
            },
            whyThisReason: 'Hooks are the standard paradigm in modern React. Writing clean custom hooks decouples business logic from UI rendering.'
          }
        ]
      },
      {
        phaseNumber: 4,
        phaseName: 'Backend & Database Architecture',
        description: 'Server runtime with Node.js, Express REST APIs, authentication (JWT/Bcrypt), and MongoDB database modeling.',
        topics: [
          {
            id: 'web-p4-t1',
            name: 'Node.js & Express RESTful API Development',
            description: 'Node runtime, modules, Express middleware pipeline, routing, request validation, error handlers, and CORS.',
            duration: '12 hours',
            difficulty: 'Intermediate',
            prerequisites: ['JavaScript', 'Async JS & DOM'],
            type: 'Course',
            skillTag: 'Node.js & Express',
            resource: {
              title: 'Production REST APIs with Express & Node',
              platform: 'O’Reilly / Nodejs.org',
              format: 'Guide & Code Repository',
              summary: 'Building secure, scalable API endpoints with structured controller-service architecture.'
            },
            project: {
              title: 'RESTful API for Course Management',
              brief: 'Design a REST API with CRUD operations, input sanitization, and structured HTTP status codes.',
              deliverable: 'Tested Express server with Postman documentation.'
            },
            whyThisReason: 'Full stack developers must understand server-side compute, HTTP protocols, headers, and API contracts.'
          },
          {
            id: 'web-p4-t2',
            name: 'Database Modeling with MongoDB & Mongoose',
            description: 'NoSQL schema design, Mongoose models, aggregation pipelines, indexes, relations, and data validation.',
            duration: '10 hours',
            difficulty: 'Intermediate',
            prerequisites: ['Node.js & Express'],
            type: 'Course',
            skillTag: 'MongoDB',
            resource: {
              title: 'MongoDB University: Schema Design Patterns',
              platform: 'MongoDB Academy',
              format: 'Video & Labs',
              summary: 'One-to-many and many-to-many relationship modeling and performance indexing in document databases.'
            },
            project: {
              title: 'Database Schema & Aggregation Pipeline',
              brief: 'Implement a MongoDB data layer for social posts, user comments, and aggregated analytics.',
              deliverable: 'Mongoose schema models with pre-save hooks and indexing.'
            },
            whyThisReason: 'Efficient data modeling prevents database bottlenecks and ensures data integrity at scale.'
          },
          {
            id: 'web-p4-t3',
            name: 'Authentication, Authorization & JWT Security',
            description: 'Password hashing with bcrypt, JSON Web Tokens (JWT), HTTP-only cookies, protected routes, and role-based access.',
            duration: '8 hours',
            difficulty: 'Advanced',
            prerequisites: ['Node.js & Express', 'MongoDB'],
            type: 'Assessment',
            skillTag: 'Web Security',
            resource: {
              title: 'OWASP Web Security & JWT Best Practices',
              platform: 'OWASP Foundation',
              format: 'Security Handbook',
              summary: 'Guarding against XSS, CSRF, SQL/NoSQL injection, and implementing token rotation.'
            },
            project: {
              title: 'Secure Auth Microservice',
              brief: 'Build an authentication gateway featuring refresh token rotation, email verification mocks, and password reset flows.',
              deliverable: 'End-to-end secure authentication API with automated integration tests.'
            },
            whyThisReason: 'Security cannot be an afterthought. Proper authentication and authorization is expected in every professional codebase.'
          }
        ]
      },
      {
        phaseNumber: 5,
        phaseName: 'Capstone Project & Production Deployment',
        description: 'End-to-end integration, state management, CI/CD pipelines, Docker containerization, and cloud deployment.',
        topics: [
          {
            id: 'web-p5-t1',
            name: 'Full Stack SaaS Capstone Application',
            description: 'Integrate React frontend with Express/MongoDB backend, real-time WebSockets notifications, and Stripe payment sandbox.',
            duration: '24 hours',
            difficulty: 'Advanced',
            prerequisites: ['React Hooks', 'Node.js & Express', 'MongoDB', 'Web Security'],
            type: 'Project',
            skillTag: 'Full Stack Integration',
            resource: {
              title: 'Architecting Full Stack Production Apps',
              platform: 'FullStackOpen (University of Helsinki)',
              format: 'Full Degree-Level Course',
              summary: 'Modern software engineering principles, monorepos, state machines, and end-to-end testing.'
            },
            project: {
              title: 'Collaborative Real-time Workspace App',
              brief: 'Build a production-grade web app (e.g. Notion or Linear clone) with collaborative editing, user authentication, and data analytics.',
              deliverable: 'Complete full stack web application hosted on Vercel/Render with continuous deployment.'
            },
            whyThisReason: 'Building a complex end-to-end project proves your ability to connect frontend architecture with backend data pipelines.'
          }
        ]
      }
    ]
  },
  {
    id: 'ai-ml',
    name: 'Artificial Intelligence & Machine Learning',
    icon: 'Brain',
    description: 'From mathematical foundations and Scikit-Learn to deep learning, PyTorch, Transformers, and LLM applications.',
    popularSkills: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-Learn', 'PyTorch', 'TensorFlow', 'NLP', 'Computer Vision'],
    defaultDurationMonths: 4,
    phases: [
      {
        phaseNumber: 1,
        phaseName: 'Mathematical & Python Foundations',
        description: 'Linear algebra, multivariate calculus, probability & statistics, and vectorized computing with NumPy.',
        topics: [
          {
            id: 'ai-p1-t1',
            name: 'Python for Scientific Computing & NumPy Vectorization',
            description: 'Array broadcasting, matrix dot products, indexing, performance profiling, and mathematical functions.',
            duration: '10 hours',
            difficulty: 'Beginner',
            prerequisites: [],
            type: 'Course',
            skillTag: 'NumPy & Python',
            resource: {
              title: 'NumPy Quickstart & Computational Thinking',
              platform: 'NumPy.org & Stanford CS231n',
              format: 'Interactive Notebooks',
              summary: 'Mastering N-dimensional arrays, vectorization, and computational complexity.'
            },
            project: {
              title: 'Vectorized Linear Regression from Scratch',
              brief: 'Implement cost function, gradient descent, and predictions purely using NumPy matrix math.',
              deliverable: 'Jupyter notebook with loss curve visualizations and performance benchmarks.'
            },
            quiz: [
              {
                question: 'Why is vectorization in NumPy significantly faster than Python loops?',
                options: ['It uses C-level contiguous memory and SIMD hardware instructions', 'It runs in the cloud', 'It converts code to Java', 'It skips memory allocation entirely'],
                correctIndex: 0,
                explanation: 'NumPy arrays are stored in contiguous memory blocks and invoke low-level optimized C/Fortran SIMD vector instructions.'
              }
            ],
            whyThisReason: 'Vectorized computing in NumPy is the foundation of all machine learning libraries and tensor frameworks.',
            remedialTopics: [
              {
                id: 'ai-rem-py-syntax',
                name: 'Python Lists, Loops & Functions Refresher',
                description: 'Quick brush up on core Python list comprehensions and math operators.',
                duration: '3 hours',
                difficulty: 'Beginner',
                type: 'Course',
                skillTag: 'Python Basics'
              }
            ]
          },
          {
            id: 'ai-p1-t2',
            name: 'Essential Mathematics: Linear Algebra & Calculus',
            description: 'Eigenvalues, dot products, matrix transformations, partial derivatives, chain rule, and optimization algorithms.',
            duration: '12 hours',
            difficulty: 'Intermediate',
            prerequisites: ['NumPy & Python'],
            type: 'Course',
            skillTag: 'ML Math',
            resource: {
              title: 'Mathematics for Machine Learning',
              platform: 'Imperial College London / Coursera',
              format: 'Interactive Math Lab',
              summary: 'Intuitive geometric understanding of vectors, matrices, gradients, and multivariate calculus.'
            },
            project: {
              title: '2D Gradient Descent Visualizer',
              brief: 'Build an interactive Python script showing how learning rate affects convergence on non-convex loss surfaces.',
              deliverable: 'Matplotlib 3D animation of gradient descent optimization trajectories.'
            },
            whyThisReason: 'Without understanding gradients and vectors, neural networks appear as magic black boxes and debugging training failures becomes impossible.'
          }
        ]
      },
      {
        phaseNumber: 2,
        phaseName: 'Classical Machine Learning',
        description: 'Supervised and unsupervised algorithms, feature engineering, cross-validation, and Scikit-Learn.',
        topics: [
          {
            id: 'ai-p2-t1',
            name: 'Supervised Learning Algorithms',
            description: 'Linear & Logistic Regression, Decision Trees, Random Forests, Gradient Boosted Trees (XGBoost/LightGBM), and SVMs.',
            duration: '16 hours',
            difficulty: 'Intermediate',
            prerequisites: ['NumPy & Python', 'ML Math'],
            type: 'Course',
            skillTag: 'Scikit-Learn',
            resource: {
              title: 'Hands-On Machine Learning with Scikit-Learn',
              platform: 'O’Reilly (Aurélien Géron)',
              format: 'Textbook & GitHub Codebase',
              summary: 'Comprehensive guide to building predictive pipelines, cross-validation, and hyperparameter tuning.'
            },
            project: {
              title: 'Customer Churn Prediction Engine',
              brief: 'Build an end-to-end ML pipeline with imputation, one-hot encoding, feature scaling, and XGBoost classification.',
              deliverable: 'Evaluated model achieving >88% ROC-AUC with precision-recall trade-off analysis.'
            },
            whyThisReason: 'Tabular data in industry is overwhelmingly solved with gradient boosted trees and classical algorithms before considering heavy deep learning.'
          },
          {
            id: 'ai-p2-t2',
            name: 'Model Evaluation, Bias-Variance & Metrics',
            description: 'Confusion matrix, precision, recall, F1-score, ROC-AUC, cross-validation strategies, overfitting vs underfitting.',
            duration: '8 hours',
            difficulty: 'Intermediate',
            prerequisites: ['Scikit-Learn'],
            type: 'Assessment',
            skillTag: 'ML Evaluation',
            resource: {
              title: 'Applied Machine Learning Diagnostics',
              platform: 'Google Developers Machine Learning Crash Course',
              format: 'Video & Interactive Labs',
              summary: 'Detecting data leakage, class imbalance techniques (SMOTE), and diagnostic metrics.'
            },
            project: {
              title: 'Fraud Detection Imbalance Benchmark',
              brief: 'Evaluate model resilience on highly skewed datasets using stratified K-fold cross validation.',
              deliverable: 'Comparative metric dashboard analyzing false-positive vs false-negative costs.'
            },
            whyThisReason: 'A model with 99% accuracy on an imbalanced dataset can be entirely useless. Understanding evaluation metrics is critical.'
          }
        ]
      },
      {
        phaseNumber: 3,
        phaseName: 'Deep Learning & Neural Networks (PyTorch)',
        description: 'Multi-layer perceptrons, backpropagation, CNNs for computer vision, RNNs/LSTMs, and PyTorch ecosystem.',
        topics: [
          {
            id: 'ai-p3-t1',
            name: 'PyTorch Tensors, Autograd & Neural Net Architecture',
            description: 'PyTorch tensor ops, automatic differentiation with `torch.autograd`, `nn.Module`, optimizers, and custom training loops.',
            duration: '14 hours',
            difficulty: 'Intermediate',
            prerequisites: ['Scikit-Learn', 'ML Math'],
            type: 'Course',
            skillTag: 'PyTorch',
            resource: {
              title: 'Deep Learning with PyTorch: Zero to Mastery',
              platform: 'learnpytorch.io',
              format: 'Interactive Book & Code',
              summary: 'From raw tensor tensors to building modular neural network architectures in PyTorch.'
            },
            project: {
              title: 'Custom Multi-Layer Neural Network from Scratch',
              brief: 'Build and train a custom neural network on Fashion-MNIST with early stopping and learning rate scheduling.',
              deliverable: 'PyTorch script showing training/validation curves and confusion matrix.'
            },
            whyThisReason: 'PyTorch is the undisputed primary research and production framework in modern AI development.'
          },
          {
            id: 'ai-p3-t2',
            name: 'Convolutional Neural Networks (CNNs) & Computer Vision',
            description: 'Convolutions, pooling, batch normalization, transfer learning with ResNet, data augmentation, and object classification.',
            duration: '12 hours',
            difficulty: 'Advanced',
            prerequisites: ['PyTorch'],
            type: 'Project',
            skillTag: 'Computer Vision',
            resource: {
              title: 'CS231n: Deep Learning for Computer Vision',
              platform: 'Stanford University',
              format: 'Lecture Series & Assignments',
              summary: 'Spatial hierarchy, receptive fields, and fine-tuning state-of-the-art vision models.'
            },
            project: {
              title: 'Medical Image Classification with Transfer Learning',
              brief: 'Fine-tune a pretrained ResNet-50 / EfficientNet on chest X-ray scans to detect anomalies with Grad-CAM heatmap visualization.',
              deliverable: 'Trained model inference pipeline outputting predicted disease probability with attention heatmaps.'
            },
            whyThisReason: 'Transfer learning allows applying multi-million dollar pretrained architectures to custom small-scale domain problems.'
          }
        ]
      },
      {
        phaseNumber: 4,
        phaseName: 'Modern GenAI, Transformers & LLMs',
        description: 'Self-attention mechanism, Transformers architecture, fine-tuning, Retrieval-Augmented Generation (RAG), and LangChain.',
        topics: [
          {
            id: 'ai-p4-t1',
            name: 'Transformers, Attention & HuggingFace Ecosystem',
            description: 'Self-attention formulas, encoder-decoder architectures, tokenization, HuggingFace transformers, and model inference.',
            duration: '16 hours',
            difficulty: 'Advanced',
            prerequisites: ['PyTorch'],
            type: 'Course',
            skillTag: 'Transformers & NLP',
            resource: {
              title: 'Hugging Face NLP Course',
              platform: 'huggingface.co/learn',
              format: 'Interactive Tutorials',
              summary: 'Tokenizers, Datasets, Trainer API, and deploying models to Hugging Face Hub.'
            },
            project: {
              title: 'Custom Domain Sentiment & NER Pipeline',
              brief: 'Fine-tune a RoBERTa model for domain-specific entity extraction and sentiment scoring.',
              deliverable: 'Deployed HuggingFace Space with interactive Gradio interface.'
            },
            whyThisReason: 'Transformers represent the fundamental breakthrough driving all modern generative AI, ChatGPT, and multimodal systems.'
          },
          {
            id: 'ai-p4-t2',
            name: 'Production RAG (Retrieval-Augmented Generation) & LLM Agents',
            description: 'Vector databases (Chroma/Pinecone), embedding models, chunking strategies, hybrid search, and LangChain/LlamaIndex pipelines.',
            duration: '18 hours',
            difficulty: 'Advanced',
            prerequisites: ['Transformers & NLP'],
            type: 'Project',
            skillTag: 'RAG & LLMs',
            resource: {
              title: 'Building Enterprise-Ready LLM & RAG Systems',
              platform: 'DeepLearning.AI & LangChain Docs',
              format: 'Hands-on Specialization',
              summary: 'Vector embeddings, query transformations, re-ranking, and hallucination reduction.'
            },
            project: {
              title: 'AI Enterprise Knowledge Assistant',
              brief: 'Build a full RAG system indexing complex PDF documentation, answering user queries with cited source passages.',
              deliverable: 'Production RAG application with vector search, contextual compression, and streaming responses.'
            },
            whyThisReason: 'RAG is the primary commercial pattern for applying Large Language Models to private proprietary business data.'
          }
        ]
      }
    ]
  },
  {
    id: 'data-science',
    name: 'Data Science & Business Analytics',
    icon: 'BarChart3',
    description: 'Transform raw data into actionable intelligence with SQL, Pandas, statistical modeling, machine learning, and interactive dashboards.',
    popularSkills: ['Python', 'SQL', 'Pandas', 'Seaborn', 'Statistics', 'PowerBI', 'Tableau', 'Scikit-Learn', 'A/B Testing'],
    defaultDurationMonths: 3,
    phases: [
      {
        phaseNumber: 1,
        phaseName: 'Data Extraction & Wrangling',
        description: 'Advanced SQL queries, window functions, relational joins, Pandas data manipulation, and cleaning missing data.',
        topics: [
          {
            id: 'ds-p1-t1',
            name: 'Advanced SQL & Relational Data Extraction',
            description: 'Complex joins, GROUP BY aggregations, Window functions (RANK, ROW_NUMBER, LAG/LEAD), CTEs, and subqueries.',
            duration: '10 hours',
            difficulty: 'Beginner',
            prerequisites: [],
            type: 'Course',
            skillTag: 'SQL',
            resource: {
              title: 'Mastering Modern SQL for Analytics',
              platform: 'Mode Analytics & LeetCode Database',
              format: 'Interactive Query Practice',
              summary: 'Hands-on query optimization, window calculations, and cohorts analysis.'
            },
            project: {
              title: 'E-Commerce Cohort Retention Analysis',
              brief: 'Write SQL queries calculating monthly user retention, churn rates, and lifetime value across customer acquisition channels.',
              deliverable: 'SQL script generating multi-month retention matrix and revenue breakdown.'
            },
            whyThisReason: 'Over 80% of enterprise analytics begins with querying relational data warehouses using SQL.'
          },
          {
            id: 'ds-p1-t2',
            name: 'Data Cleaning & Transformation with Pandas',
            description: 'DataFrames, Series, handling nulls/outliers, datetime manipulations, string methods, grouping, and reshaping (pivot/melt).',
            duration: '12 hours',
            difficulty: 'Beginner',
            prerequisites: ['SQL'],
            type: 'Course',
            skillTag: 'Pandas',
            resource: {
              title: 'Python for Data Analysis by Wes McKinney',
              platform: 'O’Reilly',
              format: 'Textbook & Notebooks',
              summary: 'Written by the creator of Pandas: optimal memory techniques, indexing, and vector data manipulation.'
            },
            project: {
              title: 'Messy Real-World Data Cleaning Pipeline',
              brief: 'Take a dirty multi-source dataset, resolve inconsistent dates, missing values, and categorical anomalies.',
              deliverable: 'Automated Python cleaning script outputting verified, tidy data.'
            },
            whyThisReason: 'Data scientists spend up to 70% of their time cleaning and wrangling data before modeling.'
          }
        ]
      },
      {
        phaseNumber: 2,
        phaseName: 'Exploratory Analysis & Statistical Inference',
        description: 'Descriptive statistics, hypothesis testing, A/B testing, correlation vs causation, and visualization with Seaborn.',
        topics: [
          {
            id: 'ds-p2-t1',
            name: 'Exploratory Data Analysis (EDA) & Data Storytelling',
            description: 'Univariate/bivariate analysis, distribution plots, heatmaps, boxplots, pairplots, and identifying actionable patterns.',
            duration: '10 hours',
            difficulty: 'Intermediate',
            prerequisites: ['Pandas'],
            type: 'Project',
            skillTag: 'EDA & Visualization',
            resource: {
              title: 'Storytelling with Data',
              platform: 'Cole Nussbaumer Knaflic Guide',
              format: 'Practical Case Studies',
              summary: 'Designing charts that clearly communicate findings to business stakeholders without visual clutter.'
            },
            project: {
              title: 'Financial Market & Housing Trends EDA',
              brief: 'Conduct a thorough exploratory analysis identifying key predictive indicators for asset price fluctuations.',
              deliverable: 'Visual analytical report containing publication-grade Seaborn & Plotly charts.'
            },
            whyThisReason: 'EDA allows uncovering hidden anomalies, understanding correlations, and crafting compelling narratives from numbers.'
          },
          {
            id: 'ds-p2-t2',
            name: 'Applied Statistics & A/B Experimentation',
            description: 'Normal distributions, Central Limit Theorem, confidence intervals, p-values, t-tests, ANOVA, and A/B test sample sizing.',
            duration: '12 hours',
            difficulty: 'Intermediate',
            prerequisites: ['Pandas'],
            type: 'Course',
            skillTag: 'Statistics & A/B Testing',
            resource: {
              title: 'Practical Statistics for Data Scientists',
              platform: 'Peter Bruce & Andrew Bruce (O’Reilly)',
              format: 'Book & Statistical Code',
              summary: 'How to avoid false positives, calculate statistical power, and run statistically sound experiments.'
            },
            project: {
              title: 'Product Feature A/B Test Evaluation',
              brief: 'Analyze experimental vs control conversion rates, calculate p-values and minimum detectable effects to recommend launch decision.',
              deliverable: 'Executive summary report with statistical significance confidence intervals.'
            },
            whyThisReason: 'A/B testing is the gold standard used by tech companies (Uber, Netflix, Airbnb) to make data-driven product decisions.'
          }
        ]
      },
      {
        phaseNumber: 3,
        phaseName: 'Predictive Modeling & Business Intelligence',
        description: 'Regression, classification, clustering for customer segmentation, and interactive BI dashboards (Streamlit / Tableau).',
        topics: [
          {
            id: 'ds-p3-t1',
            name: 'Machine Learning for Predictive Analytics',
            description: 'Linear/Ridge regression, logistic classification, decision trees, random forests, and k-means clustering.',
            duration: '14 hours',
            difficulty: 'Intermediate',
            prerequisites: ['EDA & Visualization', 'Statistics & A/B Testing'],
            type: 'Course',
            skillTag: 'Predictive ML',
            resource: {
              title: 'Applied Predictive Analytics with Python',
              platform: 'Kaggle Learn / DataCamp',
              format: 'Micro-Courses & Competitions',
              summary: 'Feature engineering, cross-validation, and deploying predictive regression models.'
            },
            project: {
              title: 'Customer Segmentation with K-Means & RFM',
              brief: 'Cluster customer purchasing patterns using Recency, Frequency, and Monetary (RFM) modeling to guide marketing campaigns.',
              deliverable: 'Cluster visualization map with actionable persona breakdowns.'
            },
            whyThisReason: 'Predictive models allow organizations to forecast revenue, prevent churn, and optimize inventory.'
          },
          {
            id: 'ds-p3-t2',
            name: 'Interactive Analytics App with Streamlit',
            description: 'Building web dashboards, interactive parameter sliders, dynamic Plotly charts, and deploying data apps.',
            duration: '10 hours',
            difficulty: 'Intermediate',
            prerequisites: ['Predictive ML'],
            type: 'Project',
            skillTag: 'BI & Streamlit',
            resource: {
              title: 'Streamlit Documentation & Showcase',
              platform: 'Streamlit.io',
              format: 'Guide & Code Labs',
              summary: 'Turn Python scripts into shareable web applications in minutes.'
            },
            project: {
              title: 'Executive Sales Intelligence Dashboard',
              brief: 'Build an interactive dashboard enabling executives to filter regional sales, forecast trends, and download insights.',
              deliverable: 'Live deployed Streamlit application with interactive filters and charts.'
            },
            whyThisReason: 'Data insights provide zero value if decision-makers cannot explore and interact with the findings easily.'
          }
        ]
      }
    ]
  },
  {
    id: 'python-backend',
    name: 'Python Mastery & Backend Engineering',
    icon: 'Code',
    description: 'Master clean OOP, asynchronous programming, high-performance APIs with FastAPI, database ORMs, and production deployment.',
    popularSkills: ['Python', 'OOP', 'FastAPI', 'AsyncIO', 'SQLAlchemy', 'PostgreSQL', 'Docker', 'Pytest', 'Celery'],
    defaultDurationMonths: 3,
    phases: [
      {
        phaseNumber: 1,
        phaseName: 'Python Architecture & Advanced OOP',
        description: 'Object-oriented design, magic methods, decorators, context managers, generators, and type hinting.',
        topics: [
          {
            id: 'py-p1-t1',
            name: 'Object-Oriented Python & Design Patterns',
            description: 'Classes, inheritance, polymorphism, abstract base classes, dataclasses, properties, and SOLID principles.',
            duration: '10 hours',
            difficulty: 'Beginner',
            prerequisites: [],
            type: 'Course',
            skillTag: 'Python OOP',
            resource: {
              title: 'Fluent Python: Clear, Concise, and Effective Programming',
              platform: 'Luciano Ramalho (O’Reilly)',
              format: 'Book & Code Examples',
              summary: 'Mastering the Python data model, descriptors, and idiomatic clean code.'
            },
            project: {
              title: 'Extensible Banking & Transaction System',
              brief: 'Implement an OOP domain model handling accounts, interest calculations, transaction audits, and custom exceptions.',
              deliverable: 'Clean, type-annotated Python package adhering to SOLID principles.'
            },
            whyThisReason: 'Professional software engineering requires structured, maintainable object-oriented architectures.'
          },
          {
            id: 'py-p1-t2',
            name: 'Generators, Decorators & Context Managers',
            description: 'Yield statement, memory-efficient iterators, custom function decorators with `functools.wraps`, and contextlib.',
            duration: '8 hours',
            difficulty: 'Intermediate',
            prerequisites: ['Python OOP'],
            type: 'Course',
            skillTag: 'Advanced Python',
            resource: {
              title: 'Python Beyond the Basics',
              platform: 'Real Python',
              format: 'Interactive In-depth Guides',
              summary: 'Writing memory-efficient generators and reusable timing/logging decorators.'
            },
            project: {
              title: 'Custom File Streaming & Audit Logger Utility',
              brief: 'Build a memory-safe log parsing engine processing gigabyte-sized log files using generator pipelines.',
              deliverable: 'Reusable Python utility library with automated unit tests.'
            },
            whyThisReason: 'Understanding generators prevents out-of-memory errors when processing massive datasets or streams.'
          }
        ]
      },
      {
        phaseNumber: 2,
        phaseName: 'AsyncIO & High-Performance APIs (FastAPI)',
        description: 'Event loop concurrency, Pydantic schemas, dependency injection, and REST API development with FastAPI.',
        topics: [
          {
            id: 'py-p2-t1',
            name: 'AsyncIO Concurrency & Non-Blocking I/O',
            description: 'async/await syntax, asyncio event loop, tasks, gathering coroutines, thread pools, and async HTTP clients (httpx).',
            duration: '10 hours',
            difficulty: 'Intermediate',
            prerequisites: ['Advanced Python'],
            type: 'Course',
            skillTag: 'AsyncIO',
            resource: {
              title: 'Async Techniques & Examples in Python',
              platform: 'Real Python / Python Docs',
              format: 'Code Walkthrough',
              summary: 'Handling thousands of concurrent network connections without blocking the CPU.'
            },
            project: {
              title: 'Concurrent Real-Time Crypto Price Aggregator',
              brief: 'Build an asynchronous service fetching price feeds from 5 different exchanges simultaneously via AsyncIO.',
              deliverable: 'High-throughput async Python service with benchmark comparisons vs synchronous code.'
            },
            whyThisReason: 'Modern web servers must handle thousands of concurrent requests efficiently through non-blocking asynchronous I/O.'
          },
          {
            id: 'py-p2-t2',
            name: 'FastAPI Framework & Pydantic Data Validation',
            description: 'Route handlers, Pydantic data models, dependency injection system, OpenAPI auto-docs, and middleware.',
            duration: '12 hours',
            difficulty: 'Intermediate',
            prerequisites: ['AsyncIO'],
            type: 'Project',
            skillTag: 'FastAPI',
            resource: {
              title: 'Official FastAPI Tutorial (tiangolo.com)',
              platform: 'FastAPI Documentation',
              format: 'Interactive Docs',
              summary: 'Type-hinted, high-performance API design with automatic Swagger docs and validation.'
            },
            project: {
              title: 'Digital Bookstore & Inventory REST API',
              brief: 'Build a complete REST API with query filtering, pagination, validation schemas, and automated documentation.',
              deliverable: 'FastAPI application with 100% test coverage.'
            },
            whyThisReason: 'FastAPI is currently the fastest-growing modern Python web framework due to its speed, typing, and developer ergonomics.'
          }
        ]
      },
      {
        phaseNumber: 3,
        phaseName: 'Database ORM, Background Workers & Production',
        description: 'SQLAlchemy 2.0, Alembic migrations, PostgreSQL, Celery/Redis background tasks, and Docker containerization.',
        topics: [
          {
            id: 'py-p3-t1',
            name: 'SQLAlchemy 2.0 ORM & PostgreSQL Migrations',
            description: 'Declarative models, relationship mapping, session management, async database drivers (asyncpg), and Alembic versioning.',
            duration: '12 hours',
            difficulty: 'Advanced',
            prerequisites: ['FastAPI'],
            type: 'Course',
            skillTag: 'SQLAlchemy & Postgres',
            resource: {
              title: 'SQLAlchemy 2.0 Unified Tutorial',
              platform: 'SQLAlchemy Documentation',
              format: 'Official Manual & Labs',
              summary: 'Modern typed queries, connection pooling, and resilient transaction management.'
            },
            project: {
              title: 'Multi-Tenant Subscription Management Service',
              brief: 'Model relational schemas for users, organizations, and billing tiers with automated Alembic database migrations.',
              deliverable: 'Production database persistence layer with connection pooling.'
            },
            whyThisReason: 'Reliable database interactions require structured ORM modeling and reproducible schema migration scripts.'
          },
          {
            id: 'py-p3-t2',
            name: 'Background Task Processing with Celery & Redis',
            description: 'Asynchronous task queues, worker pools, scheduled cron jobs, task retries, and rate limiting with Redis message broker.',
            duration: '10 hours',
            difficulty: 'Advanced',
            prerequisites: ['SQLAlchemy & Postgres'],
            type: 'Project',
            skillTag: 'Celery & Redis',
            resource: {
              title: 'Distributed Task Queues with Celery',
              platform: 'Celery Project Manual',
              format: 'Architecture Guide',
              summary: 'Decoupling heavy compute tasks (PDF exports, email notifications) from fast HTTP request cycles.'
            },
            project: {
              title: 'Async Invoice Generator & Email Dispatcher',
              brief: 'Offload PDF generation and automated email dispatches to a Celery worker queue with Redis.',
              deliverable: 'FastAPI + Celery + Redis integrated microservice.'
            },
            whyThisReason: 'Offloading long-running jobs to background workers ensures web endpoints respond in under 50ms.'
          }
        ]
      }
    ]
  },
  {
    id: 'java-backend',
    name: 'Java Enterprise & Spring Boot',
    icon: 'Layers',
    description: 'Master Java 17+, object-oriented architecture, Spring Boot 3, Hibernate/JPA, Microservices, and Cloud Security.',
    popularSkills: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'Microservices', 'PostgreSQL', 'Docker', 'JUnit', 'Kafka'],
    defaultDurationMonths: 4,
    phases: [
      {
        phaseNumber: 1,
        phaseName: 'Core Java 17+ & Modern Concurrency',
        description: 'OOP, generics, Collections framework, Lambdas, Streams API, Records, and multi-threaded concurrency.',
        topics: [
          {
            id: 'java-p1-t1',
            name: 'Core Java OOP, Generics & Collections Framework',
            description: 'Interfaces, abstract classes, polymorphism, custom exceptions, Generics, List/Set/Map internals, and equals/hashCode contracts.',
            duration: '14 hours',
            difficulty: 'Beginner',
            prerequisites: [],
            type: 'Course',
            skillTag: 'Core Java',
            resource: {
              title: 'Effective Java by Joshua Bloch',
              platform: 'Addison-Wesley',
              format: 'Industry Standard Book',
              summary: 'Best practices for writing robust, clean, and maintainable Java code.'
            },
            project: {
              title: 'Custom Generic Data Structure & Cache Engine',
              brief: 'Implement a thread-safe LRU Cache with generic keys/values using Java Collections.',
              deliverable: 'Tested Java library with JUnit 5 test suite.'
            },
            whyThisReason: 'Java powers the world’s most critical enterprise backends. Deep knowledge of memory and collections is essential.'
          },
          {
            id: 'java-p1-t2',
            name: 'Modern Java: Streams API, Lambdas & Records',
            description: 'Functional interfaces, stream operations (map, filter, collect, flatMap), Optional pattern, and Java Records immutable data carriers.',
            duration: '10 hours',
            difficulty: 'Intermediate',
            prerequisites: ['Core Java'],
            type: 'Course',
            skillTag: 'Java Streams',
            resource: {
              title: 'Modern Java in Action',
              platform: 'Manning Publications',
              format: 'Book & Interactive Code',
              summary: 'Functional-style programming in modern Java versions.'
            },
            project: {
              title: 'Stream Analytics on High-Volume Transaction Logs',
              brief: 'Process millions of records to compute revenue summaries, grouping by region and currency via parallel streams.',
              deliverable: 'Java application with performance benchmarking.'
            },
            whyThisReason: 'Streams and Records reduce verbose boilerplate and enable declarative data processing.'
          }
        ]
      },
      {
        phaseNumber: 2,
        phaseName: 'Spring Boot 3 & REST Architecture',
        description: 'Inversion of Control (IoC), Dependency Injection (DI), Spring MVC, REST controllers, and Spring Data JPA.',
        topics: [
          {
            id: 'java-p2-t1',
            name: 'Spring Boot Framework & Dependency Injection',
            description: 'Spring container, Beans, @Component, @Service, @Autowired, application properties, and Spring Boot auto-configuration.',
            duration: '14 hours',
            difficulty: 'Intermediate',
            prerequisites: ['Core Java', 'Java Streams'],
            type: 'Course',
            skillTag: 'Spring Boot',
            resource: {
              title: 'Spring Boot in Action & Official Spring Guides',
              platform: 'spring.io/guides',
              format: 'Official Tutorials & Workshops',
              summary: 'Rapid application development with Spring Boot starter modules.'
            },
            project: {
              title: 'Healthcare Patient Management REST API',
              brief: 'Build a Spring Boot REST API with DTO mapping (MapStruct), global exception handling (@ControllerAdvice), and validation (@Valid).',
              deliverable: 'Complete Spring Boot application with Swagger OpenAPI documentation.'
            },
            whyThisReason: 'Spring Boot is the dominant backend framework across Fortune 500 enterprises and financial institutions.'
          },
          {
            id: 'java-p2-t2',
            name: 'Spring Data JPA & Hibernate Persistence',
            description: 'Entity relationships (@OneToMany, @ManyToMany), Lazy vs Eager loading, Spring Data Repository interfaces, and JPQL queries.',
            duration: '12 hours',
            difficulty: 'Intermediate',
            prerequisites: ['Spring Boot'],
            type: 'Course',
            skillTag: 'Hibernate & JPA',
            resource: {
              title: 'High-Performance Java Persistence by Vlad Mihalcea',
              platform: 'Authoritative Guide',
              format: 'Book & Interactive Labs',
              summary: 'Avoiding N+1 query problems, optimizing JDBC batching, and transaction isolation levels.'
            },
            project: {
              title: 'Banking Ledger Database Persistence Layer',
              brief: 'Implement ACID transactional money transfers between accounts with pessimistic locking to prevent race conditions.',
              deliverable: 'Spring Data JPA persistence module with unit & integration tests.'
            },
            whyThisReason: 'Database operations in enterprise applications must guarantee transactional consistency and zero data corruption.'
          }
        ]
      },
      {
        phaseNumber: 3,
        phaseName: 'Microservices & Enterprise Security',
        description: 'Spring Security, JWT authorization, API Gateways, Eureka service discovery, and Apache Kafka messaging.',
        topics: [
          {
            id: 'java-p3-t1',
            name: 'Spring Security & OAuth2/JWT Implementation',
            description: 'SecurityFilterChain, UserDetailsService, BCrypt, role-based access control (RBAC), and stateless JWT filter pipelines.',
            duration: '12 hours',
            difficulty: 'Advanced',
            prerequisites: ['Spring Boot', 'Hibernate & JPA'],
            type: 'Assessment',
            skillTag: 'Spring Security',
            resource: {
              title: 'Spring Security Masterclass',
              platform: 'Baeldung / Spring Academy',
              format: 'In-Depth Course',
              summary: 'Securing microservices endpoints and managing sessionless authentication.'
            },
            project: {
              title: 'Enterprise Single Sign-On (SSO) Auth Gateway',
              brief: 'Build a secure authentication service with refresh tokens and role-based permissions for admin, manager, and user tiers.',
              deliverable: 'Secured Spring Boot backend service with integration test suite.'
            },
            whyThisReason: 'Security is paramount in enterprise software. Spring Security provides comprehensive enterprise-grade protections.'
          },
          {
            id: 'java-p3-t2',
            name: 'Microservices Architecture & Event Streaming with Kafka',
            description: 'Spring Cloud Gateway, OpenFeign client, resilience patterns (Circuit Breaker), and asynchronous event messaging with Apache Kafka.',
            duration: '18 hours',
            difficulty: 'Advanced',
            prerequisites: ['Spring Security'],
            type: 'Project',
            skillTag: 'Microservices & Kafka',
            resource: {
              title: 'Building Microservices with Spring Cloud & Kafka',
              platform: 'O’Reilly & Confluent Developer',
              format: 'Architecture Labs',
              summary: 'Event-driven microservices architecture, schema registry, and idempotent consumers.'
            },
            project: {
              title: 'Event-Driven Ride-Hailing Platform',
              brief: 'Implement decoupled microservices (Ride Request, Driver Dispatch, Billing) communicating asynchronously over Apache Kafka topics.',
              deliverable: 'Docker Compose orchestrated multi-service architecture.'
            },
            whyThisReason: 'Enterprise architectures scale horizontally through decoupled event-driven microservices.'
          }
        ]
      }
    ]
  },
  {
    id: 'dsa-prep',
    name: 'Data Structures & Algorithms (DSA)',
    icon: 'Cpu',
    description: 'Master time/space complexity, core linear and non-linear data structures, dynamic programming, and technical interview patterns.',
    popularSkills: ['Arrays', 'Strings', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming', 'Recursion', 'Binary Search', 'Big-O'],
    defaultDurationMonths: 2,
    phases: [
      {
        phaseNumber: 1,
        phaseName: 'Complexity & Linear Data Structures',
        description: 'Big-O notation, Two-Pointer technique, Sliding Window, Arrays, Strings, Hash Tables, and Linked Lists.',
        topics: [
          {
            id: 'dsa-p1-t1',
            name: 'Big-O Analysis, Two Pointers & Sliding Window',
            description: 'Time and space complexity analysis, amortized complexity, fast/slow pointer pattern, and dynamic sliding window algorithms.',
            duration: '10 hours',
            difficulty: 'Beginner',
            prerequisites: [],
            type: 'Course',
            skillTag: 'Two Pointers & Sliding Window',
            resource: {
              title: 'Grokking the Coding Interview: Patterns for Coding Questions',
              platform: 'DesignGurus / NeetCode',
              format: 'Visual Algorithm Patterns',
              summary: 'Mastering algorithmic patterns that solve 80% of array/string interview problems.'
            },
            project: {
              title: 'Algorithm Pattern Problem Set (15 Problems)',
              brief: 'Solve canonical problems: 3Sum, Container With Most Water, Longest Substring Without Repeating Characters, Minimum Window Substring.',
              deliverable: 'Clean solutions with documented time/space complexity derivations.'
            },
            whyThisReason: 'Pattern recognition is the key to solving unseen algorithmic interview problems rapidly.'
          },
          {
            id: 'dsa-p1-t2',
            name: 'Linked Lists, Stacks & Monotonic Queues',
            description: 'Singly and doubly linked lists, fast/slow pointer cycle detection, stack evaluation, and monotonic stack patterns.',
            duration: '10 hours',
            difficulty: 'Intermediate',
            prerequisites: ['Two Pointers & Sliding Window'],
            type: 'Course',
            skillTag: 'Stacks & Linked Lists',
            resource: {
              title: 'Data Structures Visualizer & LeetCode Practice',
              platform: 'Visualgo / LeetCode',
              format: 'Interactive Data Structures',
              summary: 'Reversing lists in-place, detecting cycles, and using stacks for expression parsing.'
            },
            project: {
              title: 'Browser Navigation History & Daily Temperatures Solver',
              brief: 'Implement a browser history doubly-linked list engine and solve Next Greater Element with monotonic stack in O(N).',
              deliverable: 'Tested data structure implementations.'
            },
            whyThisReason: 'Stacks and pointer manipulation are tested heavily in initial screening rounds.'
          }
        ]
      },
      {
        phaseNumber: 2,
        phaseName: 'Trees, Heaps & Graph Traversals',
        description: 'Binary Search Trees, Heaps/Priority Queues, Breadth-First Search (BFS), Depth-First Search (DFS), and Topological Sort.',
        topics: [
          {
            id: 'dsa-p2-t1',
            name: 'Binary Trees, BSTs & Priority Queues',
            description: 'Tree traversals (in-order, pre-order, post-order, level-order), lowest common ancestor, min/max heaps, and top-K elements pattern.',
            duration: '14 hours',
            difficulty: 'Intermediate',
            prerequisites: ['Stacks & Linked Lists'],
            type: 'Course',
            skillTag: 'Trees & Heaps',
            resource: {
              title: 'Binary Tree Mastery & Heap Internals',
              platform: 'NeetCode.io & MIT OpenCourseWare',
              format: 'Video Lectures & Problem Sets',
              summary: 'Recursive thinking, level-order BFS, and heap data structure implementations.'
            },
            project: {
              title: 'Real-Time Top-K Stream Leaderboard',
              brief: 'Build a min-heap streaming leaderboard maintaining top 100 gamers from 1,000,000 continuous score updates.',
              deliverable: 'Optimal O(N log K) leaderboard algorithm with stress tests.'
            },
            whyThisReason: 'Hierarchical data structures like trees and heaps model databases, file systems, and priority scheduling.'
          },
          {
            id: 'dsa-p2-t2',
            name: 'Graph Theory: BFS, DFS, Dijkstra & Union-Find',
            description: 'Adjacency lists/matrices, connected components, cycle detection, shortest path with Dijkstra, and Disjoint Set Union (DSU).',
            duration: '16 hours',
            difficulty: 'Advanced',
            prerequisites: ['Trees & Heaps'],
            type: 'Project',
            skillTag: 'Graph Algorithms',
            resource: {
              title: 'Algorithms by Robert Sedgewick (Princeton)',
              platform: 'Coursera / Princeton',
              format: 'Degree-Level Course',
              summary: 'Graph representations, topological sorting, and minimum spanning trees.'
            },
            project: {
              title: 'Flight Route Optimization & Social Network Path Finder',
              brief: 'Implement Dijkstra shortest path for cheapest airline routes and find connected user clusters via Union-Find.',
              deliverable: 'Graph analysis suite with visual benchmarks.'
            },
            whyThisReason: 'Social networks, recommendation engines, and map routing are fundamentally modeled as graphs.'
          }
        ]
      },
      {
        phaseNumber: 3,
        phaseName: 'Dynamic Programming & Mock Assessments',
        description: 'Memoization vs Tabulation, 1D/2D DP, Knapsack problems, Interval DP, and FAANG interview simulations.',
        topics: [
          {
            id: 'dsa-p3-t1',
            name: 'Dynamic Programming (1D, 2D & Knapsack Patterns)',
            description: 'State transition equations, base cases, climbing stairs, coin change, longest common subsequence (LCS), and 0/1 knapsack.',
            duration: '20 hours',
            difficulty: 'Advanced',
            prerequisites: ['Trees & Heaps', 'Graph Algorithms'],
            type: 'Course',
            skillTag: 'Dynamic Programming',
            resource: {
              title: 'Demystifying Dynamic Programming',
              platform: 'Errichto & Striver SDE Sheet',
              format: 'Visual DP Pattern Guide',
              summary: 'Breaking complex problems into overlapping subproblems with optimal substructure.'
            },
            project: {
              title: 'DP Master Problem Set (20 Problems)',
              brief: 'Master Longest Increasing Subsequence, Edit Distance, Word Break, House Robber, and Target Sum.',
              deliverable: 'Documented solutions showing recurrence relations and space-optimized tabulation.'
            },
            whyThisReason: 'Dynamic programming separates top-tier candidates during tier-1 technical interviews.'
          },
          {
            id: 'dsa-p3-t2',
            name: 'FAANG-Style Mock Coding Assessment & Timed Simulator',
            description: 'Full 45-minute timed coding rounds under strict constraints, edge cases testing, and communication frameworks.',
            duration: '10 hours',
            difficulty: 'Advanced',
            prerequisites: ['Dynamic Programming'],
            type: 'Assessment',
            skillTag: 'Technical Interviewing',
            resource: {
              title: 'Cracking the Coding Interview Framework',
              platform: 'Gayle Laakmann McDowell Guide',
              format: 'Timed Assessment Simulator',
              summary: 'Structured communication: clarify, think out loud, design, write clean code, test edge cases.'
            },
            project: {
              title: 'Comprehensive 3-Round Mock Assessment',
              brief: 'Complete 3 full-length timed mock tests evaluating array manipulation, tree traversal, and dynamic programming.',
              deliverable: 'Detailed score report with speed, accuracy, and space/time breakdown.'
            },
            whyThisReason: 'Performing under timed interview pressure requires deliberate rehearsal and structured communication.'
          }
        ]
      }
    ]
  }
];
