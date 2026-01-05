import React from 'react';
import { Link } from 'react-router-dom';

function ForTeachers() {
  const problems = [
    { icon: '📚', title: 'Manual Student Management', desc: 'Tracking multiple students across different notebooks and spreadsheets' },
    { icon: '💸', title: 'Missed Payments', desc: 'Chasing payments and forgetting follow-ups' },
    { icon: '📝', title: 'No Lesson History', desc: 'Struggling to remember what was taught in previous sessions' },
    { icon: '📊', title: 'Progress Tracking', desc: 'Difficult to track and show student progress over time' },
    { icon: '💬', title: 'Communication Chaos', desc: 'Switching between WhatsApp groups, emails, and calls' },
    { icon: '📅', title: 'Scheduling Conflicts', desc: 'Double bookings and confusion about lesson times' }
  ];

  const features = [
    {
      icon: '👨‍🎓',
      color: '#667eea',
      title: '1. Student Management',
      items: [
        'Add & manage student profiles',
        'Track instrument, level, batch, and goals',
        'Store contact details for students & parents',
        'View complete student history',
        'Organize by batches or individual lessons'
      ]
    },
    {
      icon: '📅',
      color: '#f59e0b',
      title: '2. Lesson Scheduling',
      items: [
        'Create recurring weekly lessons',
        'Schedule one-off sessions',
        'Avoid double bookings automatically',
        'Send automated reminders to students',
        'Handle rescheduling and cancellations'
      ]
    },
    {
      icon: '💻',
      color: '#ec4899',
      title: '3. Online Classes',
      items: [
        'Conduct live online lessons',
        'Share screen and demonstrate techniques',
        'Record sessions for later review',
        'Share lesson notes and materials',
        'Works seamlessly with offline classes'
      ]
    },
    {
      icon: '✅',
      color: '#22c55e',
      title: '4. Attendance Tracking',
      items: [
        'Mark attendance per session',
        'Auto visibility for parents',
        'Track attendance patterns',
        'Generate attendance reports',
        'Identify irregular students'
      ]
    },
    {
      icon: '📈',
      color: '#8b5cf6',
      title: '5. Progress Tracking',
      items: [
        'Track skills, grades, and milestones',
        'Performance history per student',
        'Visual progress charts',
        'Set and track learning goals',
        'Share progress with parents'
      ]
    },
    {
      icon: '📝',
      color: '#06b6d4',
      title: '6. Practice Assignments',
      items: [
        'Share exercises and sheet music',
        'Upload PDFs, audio, and video',
        'Set practice goals and deadlines',
        'Students submit recordings',
        'Provide feedback on submissions'
      ]
    },
    {
      icon: '💳',
      color: '#f59e0b',
      title: '7. Payments & Invoicing',
      items: [
        'Generate professional invoices',
        'Track paid and pending fees',
        'Send automated payment reminders',
        'Accept online payments',
        'Monthly income reports'
      ]
    },
    {
      icon: '💬',
      color: '#667eea',
      title: '8. Communication',
      items: [
        'Send announcements to all students',
        'Individual messaging with students & parents',
        'No more WhatsApp chaos',
        'Centralized communication history',
        'Schedule-based notifications'
      ]
    },
    {
      icon: '📊',
      color: '#ec4899',
      title: '9. Reports & Analytics',
      items: [
        'Monthly income summary',
        'Student engagement metrics',
        'Attendance reports',
        'Payment collection status',
        'Growth tracking over time'
      ]
    }
  ];

  const testimonials = [
    { quote: 'Mousiki saved me 10+ hours every week. No more Excel sheets and WhatsApp groups!', name: 'Priya S., Piano Teacher', color: '#667eea' },
    { quote: 'My students\' parents love seeing real-time progress. It builds trust and retention.', name: 'Rahul M., Guitar Instructor', color: '#f59e0b' },
    { quote: 'Payment collection is so much easier now. Auto-reminders are a game changer!', name: 'Anjali K., Vocal Coach', color: '#22c55e' }
  ];

  return (
    <div className="page">
      {/* Hero Section with animated gradient */}
      <div className="card hero-animated" style={{ 
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '1rem', 
            color: 'white',
            fontWeight: '800',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            For Music Teachers 👨‍🏫
          </h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '0', opacity: 0.95, fontWeight: '300' }}>
            Stop juggling WhatsApp, Excel, Google Meet, and email. Manage everything in one place.
          </p>
        </div>
        <div className="wave-background"></div>
      </div>

      {/* Core Problems Section */}
      <div className="card">
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem', 
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #ef4444, #dc2626)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          Problems You Face Daily ⚠️

        </h2>
        <div className="grid">
          {problems.map((problem, i) => (
            <div key={i} className="feature-card" style={{ background: 'linear-gradient(135deg, #ef444410, transparent)', borderLeft: '4px solid #ef4444' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{problem.icon}</div>
              <h4 style={{ color: '#ef4444', fontWeight: '700', marginBottom: '0.5rem' }}>{problem.title}</h4>
              <p>{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Section */}
      <div className="card" style={{ background: 'linear-gradient(to bottom, #f8f9ff, #ffffff)' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #22c55e, #16a34a)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          How Mousiki Solves This ✨
        </h2>
        
        {features.map((feature, index) => (
          <div key={index} className="feature-section" style={{ 
            marginBottom: '3rem', 
            padding: '2rem', 
            borderRadius: '20px', 
            background: `linear-gradient(135deg, ${feature.color}10, transparent)`,
            border: `2px solid ${feature.color}20`
          }}>
            <div className="icon" style={{ fontSize: '4rem', marginBottom: '1rem' }}>{feature.icon}</div>
            <h3 style={{ color: feature.color, marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: '700' }}>{feature.title}</h3>
            <ul style={{ lineHeight: '2.2', listStyle: 'none', paddingLeft: 0 }}>
              {feature.items.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>✓ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Teacher Success Stories */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #fff8f0, #ffffff)' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          What Teachers Say 💬
        </h2>
        <div className="grid">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="feature-card" style={{ 
              background: `linear-gradient(135deg, ${testimonial.color}15, transparent)`, 
              borderTop: `4px solid ${testimonial.color}`,
              padding: '2rem',
              overflow: 'hidden'
            }}>
              <div style={{ 
                fontSize: '2rem', 
                marginBottom: '1rem',
                textAlign: 'center',
                lineHeight: '1',
                letterSpacing: '0.1rem'
              }}>
                ⭐⭐⭐⭐⭐
              </div>
              <p style={{ 
                fontStyle: 'italic', 
                marginBottom: '1.5rem', 
                fontSize: '1.1rem', 
                lineHeight: '1.8',
                textAlign: 'center'
              }}>
                "{testimonial.quote}"
              </p>
              <p style={{ 
                fontWeight: '700', 
                color: testimonial.color,
                textAlign: 'center',
                marginBottom: '0'
              }}>
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="card hero-animated" style={{ 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 50%, #EF6C00 100%)', 
        color: 'white',
        boxShadow: '0 20px 60px rgba(255, 152, 0, 0.4)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ 
            marginBottom: '1rem', 
            color: 'white',
            fontSize: '2.5rem',
            fontWeight: '800',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Ready to Simplify Your Teaching? 🚀
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95, fontWeight: '300' }}>
            Join hundreds of music teachers who've taken control of their teaching business
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-creative" style={{ 
              background: 'white', 
              color: '#FF9800',
              fontWeight: '700',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              boxShadow: '0 4px 15px rgba(255,255,255,0.3)'
            }}>
              Start Free Trial
            </button>
            <Link to="/pricing" className="btn btn-creative-outline" style={{ 
              background: 'transparent', 
              border: '3px solid white', 
              color: 'white',
              textDecoration: 'none',
              fontWeight: '700',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem'
            }}>
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForTeachers;
