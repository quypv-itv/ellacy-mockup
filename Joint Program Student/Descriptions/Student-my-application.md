# Student My Applications - Page Description

## File Name
`Student-my-application.html`

## Page Title
My Applications - APPLYLEAD

## Purpose
This page serves as the central hub for students to track and manage all their university applications. Students can view application progress, upload documents, communicate with counselors, and monitor payment status across multiple applications.

## Main Features

### 1. Navigation Header
- Logo and student badge
- Main navigation menu:
  - Dashboard
  - Find University
  - Favorites (4)
  - My Applications (8) - Active page
  - Payment
- Messages, notifications, and profile dropdown

### 2. Filter and Sort Controls
- **Status Filter Dropdown**: All Status, Initial Advising, Application In Progress, Submitted to School, School Response, Offered Letter Issued, Committed to School, Visa Application, Pre-Departure, Arrival, Rejected, Canceled
- **Sort Dropdown**: Most Recent, Deadline, Country
- **New Application Button**: Opens modal to start new application

### 3. Application Progress Table
Displays applications with visual progress tracking:

**Application Row Example: Tiffin University**
- University logo and name
- 9-stage progress journey visualization:
  1. Initial Advising (✓ Completed)
  2. Application In Progress (✓ Completed)
  3. Submitted to School (✓ Completed)
  4. School Response (Current - highlighted with ring)
  5. Offered Letter Issued (Pending)
  6. Committed to School (Pending)
  7. Visa Application (Pending)
  8. Pre-Departure (Pending)
  9. Arrival (Pending)
- Required Action: "Upload Docs" link

**Application Row Example: Angelo State University**
- Shows advanced progress (step 9 - Arrival)
- All previous steps completed with checkmarks
- Required Action: "Complete DS-160 Form"

Progress visualization features:
- Red line showing completed progress
- Gray line for remaining steps
- Checkmarks for completed stages
- Current stage highlighted with ring
- Step numbers for pending stages

### 4. New Application Modal
Form to start a new application:
- **Destination Country**: Dropdown (Australia, Canada, UK, USA)
- **Institution**: Dropdown (populated based on country)
- **Program**: Dropdown (populated based on institution)
- **Preferred Intake**: Fall 2025, Spring 2026, Fall 2026
- **Study Level**: Bachelor's, Master's, PhD
- **Language of Instruction**: English, French (optional)
- **Notes/Motivation**: Text area (optional)
- Action buttons: Cancel, Start Application

### 5. Application Detail Modals
Individual modals for each application showing:

**Program Information Section:**
- Program name
- Institution name
- Country
- Intake period
- Application status badge
- Last updated date

**Next Action Items:**
- Highlighted section with required actions
- List of pending tasks
- Document upload requirements

**Payment Status:**
- Initial consultation fee status
- Next payment due information
- Payment timeline

**Uploaded Files by Stage:**
- **Stage 1: Initial Advising** (Completed)
  - Personal Statement ✓
  - Academic Transcripts ✓
- **Stage 2: Docs Review** (Current)
  - English Test Results ✓
  - CV/Resume (Pending - highlighted)

**Feedback & Comments:**
- Academic Counselor messages with timestamps
- System notifications
- User avatar icons

**Document Checklist:**
- Academic transcripts (✓ Completed)
- English proficiency test results (✓ Completed)
- Personal statement (✓ Completed)
- Updated CV/Resume (⏳ In Progress)
- Letters of recommendation (○ Not Started)
- Portfolio (○ Not Started)
- Progress bar: "3/6 documents completed" with visual indicator

**Action Buttons:**
- Message Counselor
- Edit Application
- Upload Documents

### 6. Application Data Structure
Stores detailed information for 9 applications:
- Application ID 1-9
- Program names (BSc Computer Science, MSc Data Science, etc.)
- Universities (Tiffin, Melbourne, UBC, Auckland, Edinburgh, Manchester, etc.)
- Countries (USA, Australia, Canada, New Zealand, UK)
- Intake periods
- Current stage (1-9)
- Application status
- Required documents
- Completed documents
- Next actions

### 7. AI Assistant Chat
Floating chat button with:
- Chat panel interface
- Welcome message
- Message input field
- Send button
- Simulated AI responses
- Context-aware help for applications

## UI Components
- Responsive table with horizontal scroll
- Progress journey visualization with connecting lines
- Modal overlays with scrollable content
- Form inputs with validation
- Status badges (color-coded)
- Document cards with icons
- Collapsible sections
- Progress bars
- Avatar icons for users/counselors
- Lucide icons throughout
- Hover and focus states

## Color Scheme
- Primary Brand Color: #d82128 (Red)
- Background: #F9F9F9 (Light Gray)
- Table/Modal backgrounds: White
- Progress completed: Red (#d82128)
- Progress pending: Gray (#d1d5db)
- Status badges: Various colors based on stage
- Success: Green
- Warning: Yellow/Orange
- Info: Blue

## Application Stages
1. **Initial Advising**: First consultation and profile review
2. **Application In Progress**: Preparing application materials
3. **Submitted to School**: Application sent to university
4. **School Response**: Waiting for university decision
5. **Offered Letter Issued**: Acceptance letter received
6. **Committed to School**: Student accepted the offer
7. **Visa Application**: Applying for student visa
8. **Pre-Departure**: Final preparations before travel
9. **Arrival**: Student has arrived at university

## Target Users
- Students with active applications
- Students tracking multiple applications
- Students managing documents and deadlines
- Students communicating with counselors

## Key Interactions
- Filter applications by status
- Sort applications by various criteria
- Click "New Application" to start new application
- Click table rows to view detailed application information
- Upload documents for specific stages
- View and respond to counselor feedback
- Track document completion progress
- Message counselor directly
- Edit application details
- Monitor payment status

## Technical Stack
- Tailwind CSS for styling
- Lucide icons
- Vanilla JavaScript for modals and interactions
- Inter font family
- Responsive design with mobile support
- Data-driven application management

## Special Features
- Visual progress journey with 9 stages
- Stage-specific document organization
- Real-time progress tracking
- Document checklist with completion percentage
- Counselor feedback system
- Payment tracking integration
- Multi-application management
- Modal state management
- Form validation
- Dynamic content loading based on application ID

## Data Management
- Application metadata (ID, dates, status)
- Program and university information
- Document tracking (uploaded, pending, not started)
- Stage progression tracking
- Counselor communications
- Payment history
- Next action items
