# PulseReview: IT Performance Governance & Strategic Alignment

PulseReview is a high-fidelity performance management portal designed to align individual contributions with strategic corporate objectives. Inspired by IT industry standards (OKR, Sprint Themes, SAP Performance Models), it provides a rigorous hierarchical workflow for goal setting and validation.

## 🚀 core Philosophy
Unlike traditional binary reviews (Yes/No), PulseReview operates on a **Parent-Child Governance Model**:
1.  **Manager defines the "WHAT"** (Strategic Themes / Parent Goals).
2.  **Employee delivers the "HOW"** (Subthemes / Execution Updates).
3.  **Governance ensures "ALIGNMENT"** (Audit-ready Validation Loop).

---

## 🛠️ Tech Stack
-   **Frontend**: React 19 (Vite)
-   **Routing**: React Router 7
-   **Backend**: Supabase (PostgreSQL with RLS)
-   **Styling**: Premium Vanilla CSS (Glassmorphism & Vibrant Design)

---

## 🔑 Role-Based Access Control (RBAC)

### 👨💼 Manager Portal
-   **Authority Console**: Create and delegate Strategic Themes to direct reports.
-   **Validation Engine**: Review employee subthemes with "Approve", "Reject", or "Return for Revision" actions.
-   **Monthly Input**: Record the 4 core binary performance metrics for each team member.
-   **Team Analytics**: Real-time YES rate and submission tracking.

### 👨💻 Employee Portal
-   **Dashboard**: View active strategic directives assigned by the manager.
-   **Execution Updates**: Add detailed Subthemes (Achievements, Blockers, Learning) under assigned goals.
-   **Reflections**: Track validation status in real-time.

### 🏢 HR Dashboard
-   **Global Oversight**: Monitor validation progress across the entire organization.
-   **Organization Stats**: Departmental contribution density and historical trends.
-   **Reporting**: Export monthly performance outcomes for audit.

---

## 🔄 End-to-End Workflow Example

### Phase 1: Strategic Direction (Manager)
-   *Manager* logs in and creates a Theme: **"Architecture Modernization"**.
-   *Manager* assigns this theme to **Supun** (Tech Lead).

### Phase 2: Execution Update (Employee)
-   *Supun* logs in and sees **"Architecture Modernization"** assigned to him.
-   *Supun* clicks "+ Add Subtheme" and records:
    - **Title**: "Implemented API Caching Layer"
    - **Evidence**: "Reduced latency by 45% using Redis implementation."
-   *Supun* clicks "Submit Monthly Subtheme".

### Phase 3: Validation (Manager)
-   *Manager* sees a "Pending Review" notification for Supun.
-   *Manager* reviews the entry and clicks **"Approve"**.
-   The entry is now locked and recorded in the monthly report.

---

## 📦 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- Supabase Account

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Database Schema
The database requires the following core tables:
- `profiles`: User roles and management hierarchy.
- `themes`: Hierarchical goals and subthemes.
- `monthly_reviews`: Binary outcome tracking.
- `review_cycles`: Time-period management (Monthly/Quarterly).

---

## 📜 Business Rules
- **Rule 1: Mandatory Mapping**: No subtheme can be created without a parent Strategic Theme.
- **Rule 2: Audit Integrity**: Once a Manager approves an entry, it is locked for the current cycle.
- **Rule 3: Hierarchy Enforcement**: Only a designated Manager can validate their direct reports' data.

---

## 👔 Project Architecture
```text
src/
├── App.jsx        # Core Logic & Portal Routing
├── index.html     # Entry Point
├── index.css      # Design System & UI Components
└── assets/        # Visual Identity Assets
```

---
*Developed as a high-fidelity IT industry standard performance portal.*
