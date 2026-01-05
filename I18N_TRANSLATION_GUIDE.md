# Mousiki i18n Complete Translation Guide

## Summary

This guide contains all translation keys needed to complete internationalization for all Mousiki pages.

## Pages Status

? **Completed:**
- Home.js
- Pricing.js  
- Contact.js
- App.js (Navigation)

? **Needs Translation:**
- About.js
- ForTeachers.js
- ForSchools.js
- ForStudents.js
- ForParents.js
- Teachers.js (Dashboard)
- Students.js (Dashboard)
- Schedule.js (Dashboard)
- Billing.js (Dashboard)
- Reports.js (Dashboard)

## How to Translate a Page

### Step 1: Import useLanguage Hook
```javascript
import { useLanguage } from '../contexts/LanguageContext';

function MyPage() {
  const { t } = useLanguage();
  // ...rest of component
}
```

### Step 2: Replace Hardcoded Text
```javascript
// Before:
<h1>Welcome to Mousiki</h1>

// After:
<h1>{t('page.section.key')}</h1>
```

### Step 3: Add Translations to JSON Files

Add the same keys to all 4 locale files:
- `src/i18n/locales/en-US.json`
- `src/i18n/locales/en-IN.json`
- `src/i18n/locales/fr-FR.json`
- `src/i18n/locales/ar-SA.json`

## Complete Translation Keys Required

###  About.js Keys (Add to JSON files)

```json
"about": {
  "hero": {
    "title": "About Mousiki ??",
    "subtitle": "Empowering music education through technology"
  },
  "ourStory": {
    "title": "Our Story ??",
    "para1": "Mousiki was born from a simple observation...",
    "para2": "We talked to hundreds of music teachers...",
    "para3": "That's when we decided to build Mousiki...",
    "para4": "Today, Mousiki helps hundreds of music teachers..."
  },
  "mission": {
    "title": "Our Mission ??",
    "text": "To empower music educators with technology..."
  },
  "values": {
    "title": "Our Values ??",
    "musicEducation": {
      "title": "Focus on Music Education",
      "desc": "We're laser-focused on solving problems..."
    },
    "simplicity": {
      "title": "Simplicity First",
      "desc": "Technology should make life easier..."
    },
    "transparency": {
      "title": "Transparency",
      "desc": "Clear communication between teachers..."
    },
    "improvement": {
      "title": "Continuous Improvement",
      "desc": "We listen to our users and constantly evolve..."
    },
    "quality": {
      "title": "Quality Education",
      "desc": "We believe every student deserves access..."
    },
    "empowerment": {
      "title": "Empowerment",
      "desc": "We empower teachers to focus on what they do best..."
    }
  },
  "whyChoose": {
    "title": "Why Choose Mousiki? ??",
    "builtForMusic": {
      "title": "Built for Music",
      "desc": "Unlike generic platforms, Mousiki is designed..."
    },
    "allInOne": {
      "title": "All-in-One Solution",
      "desc": "Stop paying for multiple subscriptions..."
    },
    "worksYourWay": {
      "title": "Works Your Way",
      "desc": "Whether you teach online, offline, or both..."
    },
    "scales": {
      "title": "Scales With You",
      "desc": "From solo teacher to multi-branch academy..."
    },
    "easyToUse": {
      "title": "Easy to Use",
      "desc": "No technical knowledge required..."
    },
    "greatSupport": {
      "title": "Great Support",
      "desc": "We're here to help. Our support team..."
    }
  },
  "numbers": {
    "title": "Mousiki in Numbers ??",
    "teachers": "Music Teachers",
    "schools": "Music Schools",
    "students": "Active Students",
    "lessons": "Lessons Conducted"
  },
  "team": {
    "title": "Our Team ??????????",
    "para1": "We're a passionate team of musicians...",
    "para2": "Every feature in Mousiki is built with input..."
  },
  "cta": {
    "title": "Want to Learn More? ??",
    "description": "We'd love to hear from you and show you...",
    "contactUs": "Contact Us",
    "viewPricing": "View Pricing"
  }
}
```

### ForTeachers.js / ForSchools.js / ForStudents.js / ForParents.js Keys

These pages have similar structures. Add specific translations for each page's features, problems, and testimonials.

Example structure:
```json
"forTeachers": {
  "hero": {
    "title": "For Music Teachers ?????",
    "subtitle": "Stop juggling WhatsApp, Excel, Google Meet..."
  },
  "problems": {
    "title": "Problems You Face Daily ??",
    "manual": {
      "title": "Manual Student Management",
      "desc": "Tracking multiple students across..."
    }
    // ... more problems
  },
  "solutions": {
    "title": "How Mousiki Solves This ?"
  },
  "testimonials": {
    "title": "What Teachers Say ??",
    "testimonial1": {
      "quote": "Mousiki saved me 10+ hours every week...",
      "name": "Priya S., Piano Teacher"
    }
    // ... more testimonials
  },
  "cta": {
    "title": "Ready to Simplify Your Teaching? ??",
    "description": "Join hundreds of music teachers..."
  }
}
```

### Dashboard Pages (Teachers.js, Students.js, Schedule.js, Billing.js, Reports.js)

```json
"dashboard": {
  "teachers": {
    "title": "Teachers Dashboard ?????",
    "stats": {
      "total": "Total Teachers",
      "students": "Total Students",
      "rating": "Average Rating"
    },
    "addTeacher": "Add New Teacher",
    "viewDetails": "View Details"
  },
  "students": {
    "title": "Students Dashboard ??",
    "stats": {
      "total": "Total Students",
      "attendance": "Avg Attendance",
      "progress": "Avg Progress"
    },
    "addStudent": "Add New Student",
    "viewProfile": "View Profile"
  },
  "schedule": {
    "title": "Lesson Schedule ??",
    "today": "Today's Lessons",
    "upcoming": "Upcoming Lessons",
    "addLesson": "Schedule New Lesson"
  },
  "billing": {
    "title": "Payments & Billing ??",
    "pendingPayments": "Pending Payments",
    "paidThisMonth": "Paid This Month",
    "generateInvoice": "Generate Invoice"
  },
  "reports": {
    "title": "Analytics & Reports ??",
    "overview": "Overview",
    "revenue": "Revenue",
    "attendance": "Attendance",
    "progress": "Progress"
  }
}
```

## Quick Reference: Common Patterns

### Buttons
```javascript
{t('common.getStarted')}
{t('common.learnMore')}
{t('common.contactUs')}
{t('common.viewPricing')}
{t('common.startFreeTrial')}
{t('common.scheduleDemo')}
```

### Navigation
```javascript
{t('nav.home')}
{t('nav.about')}
{t('nav.pricing')}
{t('nav.contact')}
{t('nav.forTeachers')}
{t('nav.forSchools')}
{t('nav.forStudents')}
{t('nav.forParents')}
```

### Hero Sections
```javascript
<h1>{t('pageName.hero.title')}</h1>
<p>{t('pageName.hero.subtitle')}</p>
```

### Features
```javascript
{features.map((feature, i) => (
  <div key={i}>
    <h3>{t(`pageName.features.${feature.key}.title`)}</h3>
    <p>{t(`pageName.features.${feature.key}.desc`)}</p>
  </div>
))}
```

## Implementation Priority

1. **High Priority** (Customer-facing):
   - About.js
   - ForTeachers.js
   - ForSchools.js
   - ForStudents.js
   - ForParents.js

2. **Medium Priority** (Dashboard):
   - Teachers.js
   - Students.js
   - Schedule.js
   - Billing.js
   - Reports.js

## Testing Checklist

After translating each page:
- [ ] Switch to English (US) - verify all text displays
- [ ] Switch to English (India) - verify currency and context
- [ ] Switch to French - verify French translations
- [ ] Switch to Arabic - verify RTL layout and Arabic text
- [ ] Check that no hardcoded text remains
- [ ] Verify buttons and links work in all languages

## Notes

- Keep emojis in the text - they're universal!
- For currencies, use the appropriate symbol per locale
- Indian version should reference "India" instead of generic terms
- Arabic needs RTL support (already configured in LanguageContext)
- Always add the SAME keys to ALL 4 locale files

## File Locations

Translation Files:
- `src/i18n/locales/en-US.json`
- `src/i18n/locales/en-IN.json`
- `src/i18n/locales/fr-FR.json`
- `src/i18n/locales/ar-SA.json`

Components to Update:
- All files in `src/pages/` directory

Context:
- `src/contexts/LanguageContext.js` (already configured)
- `src/components/LanguageSelector.js` (already created)

## Example: Complete Page Translation

See `Contact.js` for a complete example of a fully translated page.

Key steps:
1. Import `useLanguage` hook
2. Get `t` function from hook  
3. Replace ALL hardcoded strings with `t('key.path')`
4. Add corresponding keys to all 4 JSON files
5. Test in all 4 languages

---

**Last Updated:** Generated for Mousiki i18n implementation
**Version:** 1.0
**Status:** Home, Pricing, Contact, Navigation completed. Remaining pages need translation.
