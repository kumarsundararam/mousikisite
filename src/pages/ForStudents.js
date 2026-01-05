import React from 'react';
import { Link } from 'react-router-dom';

function ForStudents() {
  const needs = [
    { icon: '📚', title: 'Organized Materials', desc: 'All your sheet music, notes, and resources in one place', color: '#22c55e' },
    { icon: '📊', title: 'Track Progress', desc: 'See how much you\'ve improved and what to work on next', color: '#16a34a' },
    { icon: '🎯', title: 'Clear Goals', desc: 'Know exactly what you need to practice and achieve', color: '#10b981' },
    { icon: '💬', title: 'Easy Communication', desc: 'Quick access to your teacher for questions and feedback', color: '#059669' }
  ];

  const features = [
    {
      icon: '📅',
      color: '#22c55e',
      title: '1. Lesson Calendar',
      items: [
        'View all your upcoming lessons',
        'See past lesson history',
        'Get reminders before each class',
        'Know exactly when and where to show up',
        'Never miss a lesson again'
      ]
    },
    {
      icon: '📁',
      color: '#10b981',
      title: '2. Practice Materials',
      items: [
        'Access all sheet music and PDFs',
        'Watch video demonstrations',
        'Listen to reference recordings',
        'Download materials for offline practice',
        'Organized by lesson and topic'
      ]
    },
    {
      icon: '📊',
      color: '#16a34a',
      title: '3. Progress Dashboard',
      items: [
        'See your improvement over time',
        'Track skills you\'ve mastered',
        'View grades and feedback',
        'Set and achieve learning goals',
        'Celebrate milestones and achievements'
      ]
    },
    {
      icon: '📝',
      color: '#059669',
      title: '4. Assignments & Practice',
      items: [
        'View all your practice assignments',
        'Submit recordings of your practice',
        'Get feedback from your teacher',
        'Track which assignments are pending',
        'Build a practice routine'
      ]
    },
    {
      icon: '💬',
      color: '#22c55e',
      title: '5. Teacher Communication',
      items: [
        'Ask questions to your teacher',
        'Get quick responses',
        'Share your doubts and concerns',
        'Stay connected between lessons',
        'All conversations in one place'
      ]
    },
    {
      icon: '🏆',
      color: '#10b981',
      title: '6. Performance History',
      items: [
        'Track all your exams and recitals',
        'View performance evaluations',
        'Keep certificates and achievements',
        'Build your music portfolio',
        'Share accomplishments with friends'
      ]
    }
  ];

  const benefits = [
    { icon: '🎯', title: 'Stay Organized', desc: 'Everything in one place - no more lost sheet music or forgotten assignments', color: '#22c55e' },
    { icon: '📈', title: 'See Your Growth', desc: 'Track your progress and celebrate every milestone you achieve', color: '#16a34a' },
    { icon: '⏰', title: 'Never Miss a Lesson', desc: 'Automatic reminders keep you on track with your learning schedule', color: '#10b981' },
    { icon: '💡', title: 'Learn Better', desc: 'Access materials anytime, practice at your pace, get instant feedback', color: '#059669' }
  ];

  const testimonials = [
    { quote: 'I love seeing my progress charts! It motivates me to practice more.', name: 'Arjun, Age 14', color: '#22c55e' },
    { quote: 'Having all my sheet music in one app is so convenient. No more lost papers!', name: 'Diya, Age 12', color: '#16a34a' },
    { quote: 'The reminder notifications help me never miss a class. My mom loves it too!', name: 'Rohan, Age 10', color: '#10b981' }
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
            For Students 🎓
          </h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '0', opacity: 0.95, fontWeight: '300' }}>
            Your complete music learning journey in one place
          </p>
        </div>
        <div className="wave-background"></div>
      </div>

      {/* What Students Need */}
      <div className="card">
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #22c55e, #16a34a)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          What You Need to Succeed ✨
        </h2>
        <div className="grid">
          {needs.map((need, i) => (
            <div key={i} className="feature-card" style={{ 
              background: `linear-gradient(135deg, ${need.color}15, transparent)`, 
              borderTop: `4px solid ${need.color}` 
            }}>
              <div className="icon" style={{ fontSize: '3.5rem' }}>{need.icon}</div>
              <h3 style={{ color: need.color, fontWeight: '700' }}>{need.title}</h3>
              <p style={{ lineHeight: '1.8' }}>{need.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="card" style={{ background: 'linear-gradient(to bottom, #f0fff8, #ffffff)' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #22c55e, #16a34a)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          Mousiki Student Features 🎵
        </h2>
        
        {features.map((feature, index) => (
          <div key={index} style={{ 
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

      {/* Student Benefits */}
      <div className="card">
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #22c55e, #16a34a)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          Why Students Love Mousiki 💚
        </h2>
        <div className="grid">
          {benefits.map((benefit, i) => (
            <div key={i} className="feature-card" style={{ 
              background: `linear-gradient(135deg, ${benefit.color}15, transparent)`, 
              borderTop: `4px solid ${benefit.color}` 
            }}>
              <div className="icon" style={{ fontSize: '3.5rem' }}>{benefit.icon}</div>
              <h3 style={{ color: benefit.color, fontWeight: '700' }}>{benefit.title}</h3>
              <p style={{ lineHeight: '1.8' }}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Student Testimonials */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #f0fff8, #ffffff)' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #22c55e, #16a34a)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          What Students Say 💬
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
            Ready to Level Up Your Music Learning? 🚀
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95, fontWeight: '300' }}>
            Join thousands of students learning music on Mousiki
          </p>
          <button className="btn btn-creative" style={{ 
            background: 'white', 
            color: '#FF9800',
            fontWeight: '700',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            boxShadow: '0 4px 15px rgba(255,255,255,0.3)'
          }}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForStudents;
