# University Profile

## Overview
The University Profile page allows university administrators to view and edit their institution's information, contact details, and program offerings on the ApplyLead platform.

## Key Features

### Header Section
- **University Branding**: Displays the university logo and name
- **Navigation Menu**: Quick access to all main sections (Scholarships, Universities, Student)
- **Back to Dashboard**: Easy navigation back to the main dashboard

### Profile Management

#### 1. University Logo
- **Current Logo Display**: Shows the current university logo
- **Logo Upload**:
  - Supports JPG, PNG, and GIF formats
  - Maximum file size: 2MB
  - Preview before saving

#### 2. Basic Information
- **University Name**: Official name of the institution
- **Short Description**: Brief overview of the university
- **Location**: Physical address and campus information
- **Website**: Official university website URL
- **Established Year**: Year the university was founded
- **Total Students**: Current student population
- **International Students**: Number of international students

#### 3. Contact Information
- **Email**: Primary contact email
- **Phone**: Contact number
- **Address**: Full mailing address
- **Social Media Links**:
  - Facebook
  - Twitter
  - LinkedIn
  - Instagram
  - YouTube

#### 4. Program Details
- **Program Name**: Name of the degree program
- **Program Level**: Undergraduate/Graduate/Doctoral
- **Duration**: Program length
- **Language of Instruction**: Primary teaching language
- **Tuition Fees**: Cost information
- **Scholarship Availability**: Details about available scholarships

### Form Controls
- **Save Changes**: Submit updates to the profile
- **Cancel**: Discard changes and return to previous state
- **Form Validation**: Ensures all required fields are completed

## User Flows

### Updating Profile Information
1. Navigate to the Profile page
2. Make desired changes to any field
3. Click "Save Changes" to update
4. System confirms successful update

### Uploading a New Logo
1. Click "Change Logo" button
2. Select an image file (JPG, PNG, or GIF)
3. System validates the file
4. Click "Save Changes" to apply the new logo

## Technical Details
- **Form Handling**: Client-side validation with server-side processing
- **Image Processing**: Automatic resizing and optimization of uploaded logos
- **Responsive Design**: Fully functional on desktop and tablet devices
- **Security**: Protected endpoints for profile updates

## Error Handling
- **Validation Errors**: Clear error messages for invalid inputs
- **Upload Errors**: Specific messages for file type/size issues
- **Connection Issues**: Graceful handling of network problems

## Design System
- **Colors**: Primary red (#d82128), white, and grayscale palette
- **Typography**: Inter font family for consistency
- **Form Elements**: Consistent styling for inputs, buttons, and labels
- **Spacing**: Uniform padding and margins for visual harmony
