# Student Favorites - Page Description

## File Name
`Student-favorites.html`

## Page Title
Favorites - APPLYLEAD

## Purpose
This page allows students to view and manage their saved/favorited scholarship programs and universities. Students can filter, sort, and review detailed information about programs they are interested in applying to.

## Main Features

### 1. Navigation Header
- Logo and student badge
- Main navigation menu:
  - Dashboard
  - Find University
  - Favorites (4) - Active page
  - My Applications (8)
  - Payment
- Messages, notifications, and profile dropdown

### 2. Filter Section
Advanced filtering options:
- **Scholarship Type Filter**: All Scholarships, Merit-Based, Need-Based, Research, Entrance
- **Intake Period Filter**: All Intakes, Fall 2024, Winter 2025, Spring 2025, Summer 2025
- **Location Filter**: All Locations, Ontario, British Columbia, Alberta, Quebec
- Apply Filters button

### 3. Results Display
- Shows count of scholarships found (4 scholarships)
- Sort options: Most Relevant, Tuition (Low to High), Tuition (High to Low), Application Deadline

### 4. Program Cards Grid
Displays 4 program cards in responsive grid layout:

**Card 1: St. Clair College - Downtown Campus**
- 2-Year Undergraduate Diploma
- Tags: Popular, Fast Acceptance
- Location: Ontario, CAN (Windsor)
- Tuition: $15,200 USD
- Application fee: $92 USD
- Duration: 24 months

**Card 2: Capilano University - North Vancouver**
- 2-Year Undergraduate Diploma
- Tags: High Job Demand, Popular
- Location: British Columbia, CAN (North Vancouver)
- Tuition: $17,050 USD
- Application fee: $99 USD
- Duration: 24 months

**Card 3: University of Saskatchewan**
- 4-Year Bachelor's Degree
- Tags: Scholarships Available
- Location: Saskatchewan, CAN (Saskatoon)
- Tuition: $23,450 USD
- Application fee: $88 USD
- Duration: 36-48 months

**Card 4: University of British Columbia**
- Master's Degree
- Tags: Prime, Popular
- Location: British Columbia, CAN (Vancouver)
- Tuition: $27,850 USD
- Application fee: $123 USD
- Duration: 12 months

Each card includes:
- Institution logo
- Program type and duration
- Status tags (Popular, Fast Acceptance, etc.)
- Location and campus city
- Tuition and fees
- Details button
- Apply Now button

### 5. Program Details Modal
Comprehensive modal showing:
- **Scholarship Offer**: Summary about the scholarship, value, type, duration
- **School Summary**: University overview and rankings
- **Course Structure**: Core courses and elective options
- Action buttons: Visit Official Website, Apply Now

### 6. Success Prediction Modal
Shows acceptance prediction details:
- **Prediction Criteria**: Academic background match, English proficiency, application timing, document completeness
- **Intake Periods Analysis** (Expandable):
  - May 2026: Seat Availability (Very High), Turn Around Time (Very Fast), Conversion (High)
  - September 2026: Seat Availability (High), Turn Around Time (Fast), Conversion (Medium)
  - January 2027: Seat Availability (Medium), Turn Around Time (Normal), Conversion (High)
- Detailed explanations of metrics

### 7. AI Assistant Chat
Floating chat button with:
- Chat panel with message history
- Input field for questions
- Simulated AI responses
- Context-aware assistance for favorites and applications

## UI Components
- Responsive card grid (1-4 columns based on screen size)
- Filter dropdowns with custom styling
- Modal overlays for detailed information
- Collapsible accordion sections
- Status badges and tags
- Hover effects on interactive elements
- Lucide icons throughout

## Color Scheme
- Primary Brand Color: #d82128 (Red)
- Background: #F9F9F9 (Light Gray)
- Card backgrounds: White
- Status tags: Various colors (pink, green, yellow, blue, teal)
- Text: Gray scale

## Target Users
- Students who have saved programs they're interested in
- Students comparing multiple scholarship opportunities
- Students ready to apply to their favorited programs

## Key Interactions
- Click "Details" to view comprehensive program information
- Click "Apply Now" to start application process
- Filter and sort to narrow down options
- View success predictions for different intake periods
- Chat with AI assistant for guidance
- Click university names to view detailed school information

## Technical Stack
- Tailwind CSS for styling
- Lucide icons
- Vanilla JavaScript for modals and interactions
- Inter font family
- Responsive design with mobile support

## Data Displayed
- Program information (name, type, duration)
- University details (name, location, campus)
- Financial information (tuition, fees)
- Application requirements
- Scholarship details
- Success prediction metrics
