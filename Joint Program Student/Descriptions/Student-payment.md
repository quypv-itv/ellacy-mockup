# Student Payment - Page Description

## File Name
`Student-payment.html`

## Page Title
Payment Center - APPLYLEAD

## Purpose
This page serves as the central payment management hub where students can view outstanding payments, track transaction history, upload payment receipts, and manage their financial obligations related to university applications and services.

## Main Features

### 1. Navigation Header
- Logo and student badge
- Main navigation menu:
  - Dashboard
  - Find University
  - Favorites (4)
  - My Applications (8)
  - Payment - Active page
- Messages, notifications, and profile dropdown

### 2. Payment Due Alert
Prominent alert banner at top:
- Red background highlighting urgency
- Alert icon
- Due date information: "You have a payment due on April 15, 2025"
- "View Details" button
- Dismissible or persistent based on payment status

### 3. Outstanding Payments Card
Displays current payment obligations:

**Left Section - Payment Breakdown:**
- **Total Due Amount**: $125 USD (large, prominent display)
- Itemized breakdown:
  - Application Fee: $50 USD
  - Counseling Package: $75 USD

**Right Section - Payment Actions:**
- Due Date: April 15, 2025
- **Upload Receipt Button**: Opens modal for receipt submission
- Helper text: "We'll verify your payment within 24 hours"

### 4. Upload Receipt Modal
Modal for submitting payment proof:
- **Drag & Drop Zone**: Visual upload area
- **File Selector**: Browse files button
- **Supported Formats**: PDF, DOC, DOCX (Max 5MB)
- **File Info Display**: Shows selected file name
- **Action Buttons**: Cancel, Upload Receipt
- **Validation**: Enables submit button only when file is selected

### 5. Transaction History Section
Comprehensive payment record display:

**Header Controls:**
- Section title: "Transaction History"
- **Filter Button**: Filter transactions by type, date, status
- **Export Button**: Download transaction history

**Transaction Cards:**
Each transaction shows:
- **Transaction 1** (Paid):
  - Title: "Application Fee - Canada Fall Intake"
  - Status badge: Green "Paid"
  - Date: March 30, 2025
  - Amount: $75 USD
  - Payment method: Visa •••• 4242
  - Actions: View Receipt, Download

- **Transaction 2** (Pending):
  - Title: "Counseling Package - Basic"
  - Status badge: Yellow "Pending"
  - Date: March 28, 2025
  - Amount: $75 USD
  - Payment method: Bank Transfer

- **Transaction 3** (Failed):
  - Title: "Document Processing Fee"
  - Status badge: Red "Failed"
  - Date: March 25, 2025
  - Amount: $50 USD
  - Payment method: Card Declined

Transaction features:
- Color-coded status badges
- Payment method icons
- Action buttons (View Receipt, Download)
- Chronological ordering
- Expandable details

### 6. Payment Modal (Hidden by default)
Complete payment processing interface:

**Amount Summary:**
- Total Amount: $125 USD
- Itemized breakdown
- Visual summary card

**Payment Method Selection:**
- **Credit/Debit Card**: Visa/Mastercard logos
- **PayPal**: Fast and secure payment
- **Bank Transfer**: Direct bank transfer
- Radio button selection
- Method descriptions

**Card Details Form** (when card selected):
- Card Number: Input with formatting
- Expiry Date: MM/YY format
- CVC: 3-digit security code
- Card brand detection

**Security Notice:**
- Lock icon
- "Secure payment processed by Stripe"

**Action Button:**
- "Pay $125 USD" button
- Disabled until form is valid

### 7. AI Assistant Chat
Floating chat button with:
- Chat panel interface
- Welcome message: "I'm here to help you with payments and any questions you might have"
- Message input field
- Send button
- Simulated AI responses
- Context-aware help for payment issues

## UI Components
- Alert banners with icons
- Payment summary cards
- Upload modal with drag-and-drop
- Transaction cards with status badges
- Payment method selector (radio buttons)
- Form inputs with validation
- Modal overlays
- File upload interface
- Progress indicators
- Lucide icons throughout
- Hover and focus states

## Color Scheme
- Primary Brand Color: #d82128 (Red)
- Background: #F9F9F9 (Light Gray)
- Card backgrounds: White
- Alert: Red (#fecaca background, #dc2626 text)
- Success/Paid: Green (#10b981)
- Pending: Yellow (#f59e0b)
- Failed: Red (#ef4444)
- Text: Gray scale

## Payment Status Types
- **Paid**: Green badge - Payment successfully processed
- **Pending**: Yellow badge - Payment awaiting verification
- **Failed**: Red badge - Payment unsuccessful
- **Overdue**: Red badge - Payment past due date
- **Refunded**: Blue badge - Payment refunded to student

## Target Users
- Students with outstanding payments
- Students tracking payment history
- Students submitting payment receipts
- Students making online payments

## Key Interactions
- View payment due alert and details
- Click "Upload Receipt" to submit payment proof
- Drag and drop or browse to select receipt file
- Submit receipt for verification
- Filter transaction history by criteria
- Export transaction history as PDF/CSV
- View individual transaction receipts
- Download transaction receipts
- Select payment method (card, PayPal, bank transfer)
- Enter payment details and process payment
- Chat with AI assistant for payment help

## Technical Stack
- Tailwind CSS for styling
- Lucide icons
- Vanilla JavaScript for modals and interactions
- Inter font family
- File upload handling
- Form validation
- Payment gateway integration (Stripe mentioned)
- Responsive design with mobile support

## Special Features
- **Receipt Upload System**: Students can submit payment proof for manual verification
- **24-hour Verification**: Clear expectation for receipt processing time
- **Multiple Payment Methods**: Card, PayPal, Bank Transfer options
- **Transaction Filtering**: Filter by type, date, status
- **Export Functionality**: Download complete payment history
- **Real-time Status Updates**: Payment status reflects immediately
- **Secure Payment Processing**: Stripe integration with security notice
- **Payment Reminders**: Alert system for due dates

## Data Management
- Outstanding payment amounts
- Payment breakdowns (itemized)
- Transaction history records
- Payment methods used
- Receipt uploads
- Payment status tracking
- Due dates and deadlines
- Payment verification status

## Security Features
- Secure payment gateway (Stripe)
- Encrypted card information
- PCI compliance
- Receipt verification process
- Payment confirmation emails (implied)
- Secure file upload

## Form Validation
- File type validation (PDF, DOC, DOCX)
- File size validation (Max 5MB)
- Card number validation
- Expiry date validation
- CVC validation
- Required field checks
- Real-time validation feedback

## Accessibility
- Keyboard navigation
- Screen reader support
- Clear error messages
- High contrast status badges
- Focus indicators
- ARIA labels
