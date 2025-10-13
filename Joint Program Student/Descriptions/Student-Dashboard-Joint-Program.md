# Student Dashboard – Joint Program (1+3 & 2+2) Documentation

This document summarizes the structure, behaviors, and reusable patterns implemented in `Students/htmls/Student-Dashboard-Joint-Program.html`. It’s meant to enable easy enhancement and reuse across the app.

## Overview
- Purpose: Present transfer pathways and joint MBA options to students with clean tab switching and informative popups.
- Tech stack: Plain HTML + Tailwind-style utility classes, Lucide icons, vanilla JS for interactions.
- Key UX elements:
  - Tabs to toggle between 1+3 and 2+2 program content.
  - “Learn More” popups for transfer programs and joint MBA programs.

## File Paths
- HTML view: `Students/htmls/Student-Dashboard-Joint-Program.html`
- This doc: `Students/Descriptions/Student-Dashboard-Joint-Program.md`

## Tabs – 1+3 and 2+2
- Tab buttons (top-right of the Program Information section):
  - Button classes: `program-tab px-4 py-2 rounded-md text-sm font-medium ...`
  - Active tab styles: `bg-red-600 text-white`
  - Inactive tab styles: `text-gray-600 hover:text-gray-900`
  - Handlers:
    - `onclick="switchTab('1plus3')"`
    - `onclick="switchTab('2plus2')"`
- Content containers:
  - `#program-1plus3` (default visible)
  - `#program-2plus2` (default hidden via `hidden` class)
- JS function used:
```js
function switchTab(program) {
  // Hide all content
  document.getElementById('program-1plus3').classList.add('hidden');
  document.getElementById('program-2plus2').classList.add('hidden');

  // Show selected content
  document.getElementById('program-' + program).classList.remove('hidden');

  // Update tab styles
  const tabs = document.querySelectorAll('.program-tab');
  tabs.forEach(tab => {
    tab.classList.remove('bg-red-600', 'text-white');
    tab.classList.add('text-gray-600', 'hover:text-gray-900');
  });

  // Style active tab (relies on click event target)
  event.target.classList.remove('text-gray-600', 'hover:text-gray-900');
  event.target.classList.add('bg-red-600', 'text-white');
}
```
- Note: The tab identifiers avoid `+` characters (using `1plus3`, `2plus2`) to keep DOM queries/IDs simple.

## Transfer Program Popups (1+3 and 2+2)
- Trigger buttons embedded within each tab’s content.
- Handler: `showProgramDetails(programType)` where `programType` is `'1plus3'` or `'2plus2'`.
- Popup container elements:
  - `#program-popup` (wrapper to show/hide)
  - `#popup-title`
  - `#popup-content`
- Core JS:
```js
function showProgramDetails(programType) {
  const popup = document.getElementById('program-popup');
  const title = document.getElementById('popup-title');
  const content = document.getElementById('popup-content');

  if (programType === '1plus3') {
    title.textContent = 'ASU 1+3 Program - Detailed Information';
    content.innerHTML = /* HTML string with structure/requirements/costs */;
  } else if (programType === '2plus2') {
    title.textContent = 'ASU 2+2 Program - Detailed Information';
    content.innerHTML = /* HTML string with structure/requirements/costs */;
  }

  popup.classList.remove('hidden');
  lucide.createIcons();
}

function closeProgramDetails() {
  document.getElementById('program-popup').classList.add('hidden');
}
```
- Content includes program structure, academic requirements, and cost breakdowns.

## MBA Popups (Fast-Track Joint MBA, Executive Joint MBA)
- Trigger buttons and handlers:
  - Fast-Track: within “Fast-Track Joint MBA” card
    - Button: `Learn More`
    - Handler: `onclick="showMBADetails('fast-track')"`
  - Executive: within “Executive Joint MBA” card
    - Button: `Learn More`
    - Handler: `onclick="showMBADetails('executive')"`
- Uses the same popup container elements as transfer programs (`#program-popup`, `#popup-title`, `#popup-content`).
- English content is injected at runtime. Key sections include:
  - Why MBA / Why Executive MBA
  - Program structure or schedule
  - Costs and ROI / Investment & Value
  - Entry requirements / Who it’s for
  - Concentrations (for Executive program)
- Core JS:
```js
function showMBADetails(mbaType) {
  const popup = document.getElementById('program-popup');
  const title = document.getElementById('popup-title');
  const content = document.getElementById('popup-content');

  if (mbaType === 'fast-track') {
    title.textContent = 'Fast-Track Joint MBA - Program Details';
    content.innerHTML = /* HTML string: Why MBA, 18-month structure, costs & ROI, who it's for */;
  } else if (mbaType === 'executive') {
    title.textContent = 'Executive Joint MBA - Program Details';
    content.innerHTML = /* HTML string: Why Executive MBA, weekend/online schedule, investment & value, entry requirements, concentrations */;
  }

  popup.classList.remove('hidden');
  lucide.createIcons();
}
```

## Icon System
- Uses Lucide icons via `data-lucide` attributes.
- After dynamic HTML injection, call `lucide.createIcons()` to render icons.

## Styling Conventions
- Tailwind-style utilities throughout.
- Visibility toggling via `hidden` class.
- Color accents: red theme (`bg-red-600`, `text-red-600`, etc.).

## Known Constraints / Notes
- Avoid `+` in DOM IDs and data attributes. Use `1plus3` and `2plus2` consistently.
- Tab highlight uses the click `event.target` inside `switchTab`. If needed, make it more robust by passing the element directly or scoping via dataset.
- Popups use string-based HTML injection; keep content sanitized and avoid user-generated input in these strings.

## Enhancement Ideas
- Extract popup content into separate JSON/JS modules for easier maintenance and localization.
- Replace `event.target` in `switchTab` with a parameter or use `currentTarget` for reliability.
- Add keyboard accessibility for tabs (ArrowLeft/ArrowRight, Enter/Space to activate).
- Persist last selected tab in `localStorage`.
- Convert to a small component with data-driven sections (e.g., render from a config object).
- Add analytics hooks for tab and popup interactions.

## Quick Reference – IDs and Hooks
- Tabs:
  - Buttons: `onclick="switchTab('1plus3')"`, `onclick="switchTab('2plus2')"`
  - Containers: `#program-1plus3`, `#program-2plus2`
- Popups (shared): `#program-popup`, `#popup-title`, `#popup-content`
- Transfer popups: `showProgramDetails('1plus3'|'2plus2')`
- MBA popups: `showMBADetails('fast-track'|'executive')`

## Content Summary (English)
- 1+3 and 2+2 transfer programs include:
  - Program structure by year(s)
  - Academic requirements (GPA, English tests, credits)
  - Cost breakdown and total program costs
- Fast-Track Joint MBA (18 months):
  - Why MBA (salary uplift, network, leadership, global perspective)
  - Structure: 6 months foundation (VN), 6 months international specialization, 6 months capstone
  - Costs & ROI: Tuition + living; projected ROI timeframe
  - Who it’s for: 2–5 years experience, full-time availability, English requirements
- Executive Joint MBA (24 months):
  - Why Executive MBA (work while studying, executive peers, immediate application, global credential)
  - Schedule: Saturdays on-campus, bi-monthly online Sundays, 2-week residency
  - Investment & Value: Tuition & residency trips; expected salary uplift
  - Entry requirements: 5+ years management, leadership role, company sponsorship preferred, English requirements
