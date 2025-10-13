# Student Find University - Page Description

## File Name
`Student-find-university.html`

## Page Title
Find University - APPLYLEAD

## Purpose
This page enables students to search, filter, and explore scholarship programs and joint program opportunities at universities. Students can switch between different program tiers, view programs in list or card format, and access detailed information about each opportunity.

## Main Features

### 1. Navigation Header
- Logo and student badge
- Main navigation menu:
  - Dashboard
  - Find University - Active page
  - Favorites (4)
  - My Applications (8)
  - Payment
- Messages, notifications, and profile dropdown

### 2. Tab System
Two main content tabs:
- **Scholarships Tab** (Default active)
- **Joint Program Tab**

### 3. Search and Filter Bar
**Scholarships Section:**
- Program Tier Dropdown: Guaranteed Scholarship Program, Elite Admission Program, Ivy Global Student Program, Joint Program
- Search input: "Search area of study (i.e business or accounting)"
- Search Now button
- View toggle: List View / Card View buttons

**Joint Program Section:**
- Program Type Dropdown: 2+2 Programs, 1+3 Programs, Joint Programs
- Search input: "Search joint programs (e.g., business, engineering)"
- Search Now button
- View toggle: List View / Card View buttons

### 4. Filter Sidebar
Advanced filtering options:
- **State Filter** (15 states): California, Florida, Illinois, Indiana, Massachusetts, Missouri, Montana, etc.
- **Cities Filter** (30 cities): New York, Los Angeles, Chicago, Boston, etc.
- **University Filter** (40 universities): Harvard, MIT, Stanford, etc.
- **School Types**: Public, Private, Community College
- **Tuition Range**: $0 - $100,000+ (slider)
- Reset Filters button

Each filter has:
- Collapsible dropdown with chevron icon
- Search box within filter
- Checkbox options
- Item count display

### 5. List View (Scholarships)
Table format displaying:
- **University of Arizona** (Grouped header with logo)
  - 1+3 Program: Tucson, AZ | Winter 2025 | 4 years | $35,000/year | Award: Up to $10,000
  - Joint MBA Program: Phoenix, AZ | Fall 2025 | 4 years | $12,000/semester | Award: Up to $8,000

- **Angelo State University** (Grouped header with logo)
  - 2+2 Program: San Angelo, TX | Fall 2025 | 4 years | $12,000/semester | Award: Up to $8,000

Table columns:
- Scholarship & Program Name
- Location
- Intake
- Duration
- Tuition Fee
- Award Value
- Actions (Favorite, Apply)

Features:
- Collapsible university groups (click to expand/collapse)
- University name links to details page
- Hover effects on rows

### 6. Card View (Scholarships)
Three detailed program cards:

**Card 1: University of Berkeley (Mockup for incomplete profile)**
- Ivy Global Student program
- Duration: 1 year
- Scholarship: Berkeley Undergraduate Scholarship / Haas Scholarships
- Intake: Winter 2025
- Tabs: Fees, Requirements, Course Detail
- Note: "Complete profile to view details"

**Card 2: Tiffin University**
- Guaranteed Scholarship program
- Duration: 4 years
- Scholarship: International Academic Scholarship / Green & Gold Grant
- Intake: Spring 2026
- Detailed tabs with full information:
  - **Fees**: Application fee ($100), Tuition ($25,000-$30,000/year), Books ($800), Scholarship (up to $30,000)
  - **Requirements**: Academic (GPA 3.7+), Language (IELTS 7.0, TOEFL 100, Duolingo 125), Documents
  - **Course Detail**: Program overview, core courses, duration, semester breakdown, specialization tracks

**Card 3: University of Arizona**
- Joint Program
- Duration: 4 years
- Program selector: 1+3 Program, 2+2 Program, Joint MBA Program
- Tabs: About Joint Program, Fees, Requirements, Course Detail
- Dynamic content based on selected program type

Each card includes:
- University logo (144x144px)
- School name (clickable to details page)
- Program type tags
- Duration
- Scholarship/Program dropdown selector
- Intake period dropdown
- Add to Favorites button
- Apply Now button
- Tabbed information sections

### 7. Joint Program Content
When Joint Program tab is active:
- Informational overview with three program types:
  - **2+2 Programs**: 2 years Vietnam + 2 years abroad
  - **1+3 Programs**: 1 year Vietnam + 3 years abroad
  - **Joint MBA Program**: Collaborative MBA with split coursework
- Table view with program listings
- Same filter sidebar
- Card view with joint program details

### 8. Program Details Modal
Appears when clicking program cards, showing:
- Program name and university
- Location and basic info
- Scholarship offer summary
- School summary
- Course structure (core courses, electives)
- Action buttons: Visit Official Website, Apply Now

### 9. AI Assistant Chat
Floating chat button with:
- Chat panel interface
- Message history
- Input field
- Simulated AI responses
- Context-aware help for finding programs

## UI Components
- Responsive table with horizontal scroll
- Card grid layout (responsive)
- Collapsible filter sections
- Tab navigation system
- Modal overlays
- Dropdown selectors (Select2 styled)
- Toggle buttons for view switching
- Grouped table rows with expand/collapse
- Lucide icons throughout
- Hover and focus states

## Color Scheme
- Primary Brand Color: #d82128 (Red)
- Background: #F9F9F9 (Light Gray)
- Card/Table backgrounds: White
- Active states: Red (#d82128)
- Inactive states: Gray
- Tags: Blue, Yellow, Green, Pink

## Target Users
- Students searching for scholarship opportunities
- Students exploring joint program options
- Students comparing multiple universities and programs
- Students ready to start applications

## Key Interactions
- Switch between Scholarships and Joint Program tabs
- Toggle between List View and Card View
- Filter by state, city, university, school type, tuition
- Search by area of study or program type
- Expand/collapse university groups in table
- Click university names to view detailed pages
- Select different scholarships/programs from dropdowns
- Switch between information tabs (Fees, Requirements, Course Detail)
- Add programs to favorites
- Apply to programs
- Chat with AI assistant

## Technical Stack
- Tailwind CSS for styling
- Select2 for enhanced dropdowns
- Lucide icons
- Vanilla JavaScript for interactivity
- Inter font family
- Responsive design with mobile support

## Special Features
- Dynamic content loading based on program selection
- Grouped table rows with collapsible sections
- Profile completion check (shows message if profile incomplete)
- Real-time search and filtering
- View persistence (remembers list/card preference)
- Tab state management
- Modal state management

## Data Displayed
- University information (name, logo, location)
- Program details (name, type, duration, intake)
- Financial information (tuition, fees, scholarships)
- Academic requirements (GPA, language tests)
- Course structure and curriculum
- Application deadlines
- Award values and coverage
