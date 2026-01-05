# Mousiki - Music Studio Management System

A comprehensive React-based web application for managing music studios, designed for music teachers, schools, businesses, students, and parents.

## Overview

Mousiki is an all-in-one platform built specifically for music education. It addresses the unique challenges faced by music teachers and schools, from student management to payment tracking, all in one centralized system.

## Core Features

### For Music Teachers (Solo & Freelance)
- **Student Management** - Add & manage students with profiles, track instrument, level, and goals
- **Lesson Scheduling** - Create recurring & one-off lessons, avoid schedule conflicts
- **Online Classes** - Conduct live online lessons, share recordings & notes
- **Attendance Tracking** - Mark attendance per session with auto visibility for parents
- **Progress Tracking** - Track skills, grades, milestones, and performance history
- **Practice Assignments** - Share exercises, PDFs, audio/video materials
- **Payments & Invoicing** - Generate invoices, track paid/pending fees
- **Communication** - Centralized chat and announcements (no WhatsApp chaos)
- **Reports** - Monthly income reports and student engagement summaries

### For Music Schools & Academies
- **Multi-Teacher Management** - Assign teachers to classes with role-based access
- **Batch & Class Scheduling** - Group lessons by level/instrument
- **Central Student Database** - One system across all branches
- **Attendance & Performance Monitoring** - School-level dashboards
- **Fee Management** - Bulk invoicing and auto reminders
- **Parent Communication** - Notices, schedules, and progress updates
- **Online + Offline Hybrid Classes** - Central platform for both modes
- **Performance & Recitals** - Manage exams, recitals, and evaluations
- **Academy Analytics** - Revenue trends and student retention insights

### For Students
- **Lesson Calendar** - View upcoming & past lessons
- **Practice Materials** - Access notes, videos, and recordings
- **Progress Dashboard** - See improvement over time
- **Assignments** - Submit practice recordings
- **Communication** - Ask questions to teachers
- **Performance History** - Exam & recital records

### For Parents
- **Child Progress Tracking** - View attendance & performance
- **Class Schedule Visibility** - Know when lessons happen
- **Teacher Feedback** - Regular updates and insights
- **Fee & Invoice Access** - Transparent payments
- **Announcements** - Get notified about exams, holidays, recitals

## Key Benefits

? **All-in-One Platform** - One system for teachers, students & parents  
? **Hybrid Learning** - Works for online, offline & hybrid classes  
? **Music-Focused** - Built specifically for music education  
? **Save Time** - Automate admin tasks, payments, and reminders  
? **Scale Easily** - From 1 teacher to 100+ instructors  
? **Affordable** - Replace multiple subscriptions with one platform  

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kumarsundararam/mousikisite.git
cd mousikisite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder ready for deployment.

## Deploy

The static build can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Azure Static Web Apps

## Technology Stack

- **React 18** - Modern UI library
- **React Router** - Client-side routing and navigation
- **CSS3** - Custom styling with responsive design

## Project Structure

```
mousikisite/
??? public/
?   ??? index.html
??? src/
?   ??? pages/
?   ?   ??? Home.js              # Landing page with USPs
?   ?   ??? ForTeachers.js       # Solo/Freelance teacher features
?   ?   ??? ForSchools.js        # Academy management features
?   ?   ??? ForStudents.js       # Student portal features
?   ?   ??? ForParents.js        # Parent dashboard features
?   ?   ??? Teachers.js          # Teacher management (demo)
?   ?   ??? Students.js          # Student management (demo)
?   ?   ??? Schedule.js          # Lesson scheduling (demo)
?   ?   ??? Billing.js           # Billing system (demo)
?   ?   ??? Reports.js           # Analytics & reports (demo)
?   ?   ??? Pricing.js           # Pricing tiers
?   ?   ??? About.js             # About Mousiki
?   ?   ??? Contact.js           # Contact information
?   ??? App.js                   # Main application component
?   ??? App.css                  # Application styles
?   ??? index.js                 # React entry point
?   ??? index.css                # Global styles
??? package.json
??? .gitignore
??? README.md
```

## Website Structure

```
Home
?
?? Solutions
?   ?? For Teachers
?   ?? For Schools
?   ?? For Students
?   ?? For Parents
?
?? Pricing
?? About Mousiki
?? Contact
?? Dashboard (Demo)
    ?? Teachers
    ?? Students
    ?? Schedule
    ?? Billing
    ?? Reports
```

## Core Use Cases Addressed

### Teachers' Pain Points Solved
- ? Managing multiple students manually ? ? Centralized student management
- ? Missed payments & follow-ups ? ? Automated invoicing & reminders
- ? No centralized lesson history ? ? Complete lesson tracking
- ? Difficulty tracking progress ? ? Visual progress dashboards
- ? App/tool switching ? ? All-in-one platform

### Schools' Challenges Solved
- ? Managing multiple teachers & batches ? ? Multi-teacher coordination
- ? Manual fee collection ? ? Bulk invoicing & auto-reminders
- ? No performance visibility ? ? School-level analytics
- ? Parent communication overload ? ? Centralized announcements
- ? Scaling operations ? ? Multi-branch support

## Future Enhancements

- User authentication and role-based access control
- Real-time video conferencing integration
- Payment gateway integration
- Mobile app (iOS & Android)
- Practice recording and feedback system
- Advanced analytics and AI-powered insights
- Calendar synchronization (Google Calendar, Outlook)
- Email and SMS notifications
- White-label solution for enterprises
- API for third-party integrations

## License

This project is private and proprietary.

## Contact

For more information, visit our website or contact us at info@mousiki.com

---

**Mousiki** - Empowering music education through technology ??