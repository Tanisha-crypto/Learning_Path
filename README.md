# 🚀 LearnPath AI — AI Personalized Learning Path Recommender

> An intelligent, adaptive AI learning mentor that crafts personalized roadmaps with curated courses, hands-on projects, assessments, and real-time mentor guidance.

---

## 🌟 Key Features

### 1. 🎯 Intake Calibration & Goal Profiling
- Assess career goals, domain preferences, current level (*Beginner*, *Intermediate*, *Advanced*), weekly learning commitment, and target duration.
- **Smart Prerequisite Detection**: Enter existing skills (e.g. `HTML`, `CSS`, `Python`, `SQL`) to automatically fast-track and skip known modules.
- **1-Click Quick Demo Presets**: Test instantly with presets like *Full Stack Web Dev*, *AI & ML Engineer*, *DSA Interview Prep*, *Data Science & BI*, and *Java Enterprise*.

### 2. 🗺️ Multi-Phase Personalized Roadmap & Timeline
- Interactive vertical timeline organized into logical phases (Foundations → Core Frameworks → Backend Architecture → Capstone Projects).
- Detailed topic cards showing:
  - Estimated hours & difficulty badges
  - Syllabus preview & links
  - Hands-on project briefs with acceptance criteria
  - Interactive skill check quiz
  - Completion toggle with auto-updating metrics

### 3. 💡 "Why this?" Pedagogical Explainability
- Every topic features a **"Why this?"** button.
- Displays an AI-generated pedagogical justification explaining why the topic was recommended at this specific point in the sequence, how it maps to your target goal, and how prerequisites link together.

### 4. 🔄 Adaptive Feedback & Dynamic Recalibration
- **👍 Helpful**: Logs mastery and reinforces high-affinity topic pacing.
- **👎 Too difficult**: Dynamically injects dedicated **Prerequisite Booster Modules** right before challenging topics (e.g., adds JS ES6 revision if React is too hard).
- **🔄 Alternative**: Swaps technologies to modern alternatives (e.g., Vue.js/Svelte instead of React; FastAPI instead of Express).

### 5. 📊 Real-Time Student Dashboard
- **Overall Progress Percentage**: Real-time recalculation of completed vs remaining modules.
- **Current Learning Phase**: Active focus spotlight.
- **Recommended Next Action Card**: Direct 1-click CTA for the immediate next topic.
- **Acquired Skills Inventory**: Visual badges of verified competencies.
- **Daily Streak Counter**: 🔥 Gamified practice tracker.
- **Phase Breakdown Bars**: Visual progress indicators across all roadmap phases.

### 6. 🤖 Context-Aware AI Learning Mentor
- Floating/docked chat assistant embedded across the entire application.
- Aware of user's active goal, current level, completed milestones, and recent feedback triggers.
- Suggested prompt pills:
  - *"Why did you recommend React?"*
  - *"Can I skip JavaScript basics?"*
  - *"What should I learn next?"*
  - *"I am finding this topic difficult."*
  - *"Give me a quiz on this topic."*

---

## 📚 Supported Curricula Domains

1. **Full Stack Web Development** (HTML/CSS → JavaScript ES6+ & DOM → React Hooks → Node.js & Express → MongoDB → SaaS Capstone)
2. **Artificial Intelligence & Machine Learning** (NumPy & Vectorization → ML Math & Gradients → Scikit-Learn → PyTorch & CNNs → Transformers & RAG)
3. **Data Science & Business Analytics** (Advanced SQL → Pandas & Cleaning → EDA & Seaborn → Applied Statistics & A/B Testing → Predictive ML & Streamlit)
4. **Python Mastery & Backend Engineering** (OOP & Design Patterns → Generators & AsyncIO → FastAPI → SQLAlchemy & Postgres → Celery & Redis)
5. **Java Enterprise & Spring Boot** (Core Java OOP & Generics → Streams API & Records → Spring Boot 3 → Hibernate JPA → Microservices & Kafka)
6. **Data Structures & Algorithms (DSA)** (Two Pointers & Sliding Window → Stacks & Linked Lists → Trees & Heaps → Graphs & Dijkstra → Dynamic Programming & Mock Interviews)

---

## 🛠️ Technology Stack

- **Frontend Framework**: React + Vite
- **Language**: JavaScript (ES6+)
- **Styling**: Pure **Vanilla CSS** (No Tailwind CSS) with CSS Custom Properties, Glassmorphism, CSS Grid/Flexbox, and responsive typography.
- **Iconography**: Lucide React
- **Animations & Effects**: Canvas Confetti, CSS Keyframe Animations & Glow Pulses
- **Data Persistence**: Browser `localStorage`

---

## 📁 Project Structure

```
Amlified/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── styles/
│   │   ├── variables.css          # Design tokens & dark space theme
│   │   ├── animations.css         # Keyframes & glow transitions
│   │   ├── navbar.css             # Sticky navigation header
│   │   ├── landing.css            # Hero, stats ticker & feature grid
│   │   ├── profile.css            # Profile assessment intake form
│   │   ├── roadmap.css            # Roadmap timeline & topic cards
│   │   ├── dashboard.css          # Dashboard metrics & next action spotlight
│   │   ├── assistant.css          # AI chat drawer & prompt pills
│   │   └── modal.css              # Explanations, syllabus & quiz popups
│   ├── data/
│   │   ├── domainsData.js         # Comprehensive 6-domain curricula
│   │   ├── mockProfiles.js        # 1-click test demo profiles
│   │   └── aiResponses.js         # AI knowledge base & explanations
│   ├── services/
│   │   ├── recommendationEngine.js # Personalization, prerequisites & adaptation logic
│   │   └── aiMentorService.js      # Context-aware chat response generator
│   └── components/
│       ├── common/
│       │   ├── Navbar.jsx
│       │   └── Footer.jsx
│       ├── landing/
│       │   ├── HeroSection.jsx
│       │   ├── FeaturesGrid.jsx
│       │   ├── PresetShowcase.jsx
│       │   └── LandingView.jsx
│       ├── profile/
│       │   └── LearnerProfileForm.jsx
│       ├── roadmap/
│       │   ├── TopicCard.jsx
│       │   ├── PhaseTimeline.jsx
│       │   ├── ExplanationModal.jsx
│       │   ├── ResourceModal.jsx
│       │   └── RoadmapView.jsx
│       ├── dashboard/
│       │   ├── StatsOverview.jsx
│       │   ├── NextActionCard.jsx
│       │   ├── SkillInventory.jsx
│       │   └── DashboardView.jsx
│       └── assistant/
│           └── AIAssistantChat.jsx
```

---

## ⚡ Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

Open your browser and navigate to the printed local URL (e.g. `http://localhost:5173` or `http://localhost:5174`).

### 3. Build for Production
```bash
npm run build
```
