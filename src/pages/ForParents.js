import React from 'react';
import { Link } from 'react-router-dom';

function ForParents() {
  const problems = [
    { icon: '👀', title: 'No Visibility', desc: 'You don\'t know what\'s happening in lessons or how your child is progressing' },
    { icon: '📊', title: 'Unclear Progress', desc: 'Hard to tell if your child is actually improving or just going through the motions' },
    { icon: '💸', title: 'Payment Confusion', desc: 'Manual fee reminders, unclear invoices, and payment tracking hassles' },
    { icon: '💬', title: 'Communication Gap', desc: 'Difficult to reach the teacher or get regular updates' }
  ];

  const features = [
    {
      icon: '📊',
      color: '#ec4899',
      title: '1. Child Progress Tracking',
      items: [
        'View real-time attendance records',
        'See performance evaluations and grades',
        'Track skill development over time',
        'Monitor practice consistency',
        'Access detailed progress reports'
      ]
    },
    {
      icon: '📅',
      color: '#db2777',
      title: '2. Class Schedule Visibility',
      items: [
        'Know exactly when lessons happen',
        'Get calendar reminders',
        'View upcoming and past classes',
        'Track attendance patterns',
        'No more missed lessons'
      ]
    },
    {
      icon: '💬',
      color: '#f472b6',
      title: '3. Teacher Feedback',
      items: [
        'Receive regular updates from teacher',
        'Get detailed feedback on progress',
        'Know what to practice at home',
        'Understand strengths and areas for improvement',
        'Direct communication with instructor'
      ]
    },
    {
      icon: '💳',
      color: '#ec4899',
      title: '4. Fee & Invoice Access',
      items: [
        'Transparent payment history',
        'Clear, itemized invoices',
        'Automatic payment reminders',
        'Online payment options',
        'No more manual tracking'
      ]
    },
    {
      icon: '📢',
      color: '#db2777',
      title: '5. Announcements & Updates',
      items: [
        'Get notified about exams and recitals',
        'Know about holidays and schedule changes',
        'Receive important announcements',
        'Event reminders and preparation tips',
        'Never miss important information'
      ]
    }
  ];

  const benefits = [
    { icon: '👁️', title: 'Complete Visibility', desc: 'See exactly what\'s happening in your child\'s music education. No more guessing or wondering.', color: '#ec4899' },
    { icon: '💰', title: 'Track Investment', desc: 'Understand if your investment is paying off with clear progress metrics and feedback.', color: '#db2777' },
    { icon: '📋', title: 'Financial Clarity', desc: 'Transparent billing, easy payments, and clear records. Know exactly what you\'re paying for.', color: '#ec4899' },
    { icon: '🤝', title: 'Strong Partnership', desc: 'Build a better relationship with teachers through regular communication and transparency.', color: '#db2777' },
    { icon: '📱', title: 'Stay Connected', desc: 'Access everything from your phone, anytime, anywhere. No need to call or email.', color: '#ec4899' },
    { icon: '⏰', title: 'Save Time', desc: 'Automated reminders and notifications mean less time managing schedules and payments.', color: '#db2777' }
  ];

  const testimonials = [
    { quote: 'Finally, I can see my daughter\'s progress! The teacher feedback is so detailed and helpful.', name: 'Meera S., Parent', color: '#ec4899' },
    { quote: 'Payment tracking is so easy now. I love getting automated reminders and clear invoices.', name: 'Rajesh K., Parent', color: '#db2777' },
    { quote: 'The transparency has built so much trust. I know my son is in good hands and actually learning.', name: 'Priya M., Parent', color: '#f472b6' }
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
            For Parents 👨‍👩‍👧‍👦
          </h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '0', opacity: 0.95, fontWeight: '300' }}>
            Track your child's music journey with complete transparency
          </p>
        </div>
        <div className="wave-background"></div>
      </div>

      {/* Parent Problems */}
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
          Common Parent Concerns ⚠️

        </h2>
        <div className="grid">
          {problems.map((problem, i) => (
            <div key={i} className="feature-card" style={{ 
              background: 'linear-gradient(135deg, #ef444410, transparent)', 
              borderLeft: '4px solid #ef4444' 
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{problem.icon}</div>
              <h4 style={{ color: '#ef4444', fontWeight: '700', marginBottom: '0.5rem' }}>{problem.title}</h4>
              <p>{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Section */}
      <div className="card" style={{ background: 'linear-gradient(to bottom, #fff0f8, #ffffff)' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #ec4899, #db2777)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          Mousiki for Parents ✨
        </h2>
        
        {features.map((feature, index) => (
          <div key={index} className="feature-section" style={{ 
            marginBottom: '2.5rem', 
            padding: '2rem', 
            borderRadius: '20px', 
            background: `linear-gradient(135deg, ${feature.color}10, transparent)`,
            border: `2px solid ${feature.color}20`
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{feature.icon}</div>
            <h3 style={{ color: feature.color, marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: '700' }}>
              {feature.title}
            </h3>
            <ul style={{ lineHeight: '2.2', listStyle: 'none', paddingLeft: 0 }}>
              {feature.items.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>✓ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="card">
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #ec4899, #db2777)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          Benefits for Parents ✨
        </h2>
        <div className="grid">
          {benefits.map((benefit, i) => (
            <div key={i} className="feature-card" style={{ 
              background: `linear-gradient(135deg, ${benefit.color}10, transparent)`, 
              borderTop: `4px solid ${benefit.color}` 
            }}>
              <div className="icon" style={{ fontSize: '3.5rem' }}>{benefit.icon}</div>
              <h3 style={{ color: benefit.color, fontWeight: '700' }}>{benefit.title}</h3>
              <p style={{ lineHeight: '1.8' }}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #fff0f8, #ffffff)' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #ec4899, #db2777)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          What Parents Say 💬
        </h2>
        <div className="grid">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="feature-card" style={{ 
              background: `linear-gradient(135deg, ${testimonial.color}10, transparent)`, 
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

      {/* How It Works Section */}
      <div className="card">
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #ec4899, #db2777)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          How It Works 🔄
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {[
            { step: 1, title: 'Sign Up', desc: 'Create your parent account when your child enrolls', color: '#ec4899' },
            { step: 2, title: 'Get Access', desc: 'Receive login credentials to track your child\'s progress', color: '#db2777' },
            { step: 3, title: 'Stay Informed', desc: 'View updates, attendance, and progress anytime', color: '#f472b6' },
            { step: 4, title: 'Communicate', desc: 'Message teachers and stay engaged in the learning journey', color: '#ec4899' }
          ].map((item, i) => (
            <div key={i} className="feature-card" style={{ 
              textAlign: 'center', 
              padding: '2rem',
              background: `linear-gradient(135deg, ${item.color}10, transparent)`,
              borderTop: `4px solid ${item.color}`
            }}>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '900', 
                marginBottom: '1rem', 
                color: item.color,
                width: '80px',
                height: '80px',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(135deg, ${item.color}20, transparent)`,
                borderRadius: '50%'
              }}>
                {item.step}
              </div>
              <h4 style={{ marginBottom: '0.5rem', color: item.color, fontWeight: '700' }}>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
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
            Want This Visibility for Your Child's Music Education? 🎯
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95, fontWeight: '300' }}>
            Ask your music teacher or school about Mousiki
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
              Learn More
            </button>
            <Link to="/contact" className="btn btn-creative-outline" style={{ 
              background: 'transparent', 
              border: '3px solid white', 
              color: 'white',
              textDecoration: 'none',
              fontWeight: '700',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem'
            }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForParents;
