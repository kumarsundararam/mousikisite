import React from 'react';
import { Link } from 'react-router-dom';

function ForSchools() {
  const problems = [
    { icon: '👥', title: 'Multi-Teacher Coordination', desc: 'Difficulty managing multiple teachers and their schedules' },
    { icon: '💸', title: 'Manual Fee Collection', desc: 'Time-consuming bulk invoicing and payment tracking' },
    { icon: '📊', title: 'No Performance Visibility', desc: 'Cannot track teacher performance or student progress at scale' },
    { icon: '💬', title: 'Parent Communication Overload', desc: 'Hundreds of parent queries and updates to manage' },
    { icon: '📈', title: 'Scaling Operations', desc: 'Growth limited by manual administrative processes' },
    { icon: '🏢', title: 'Multi-Branch Management', desc: 'No unified system across different locations' }
  ];

  const features = [
    {
      icon: '👨‍🏫',
      color: '#f59e0b',
      title: '1. Multi-Teacher Management',
      items: [
        { title: 'Teacher Profiles', desc: 'Manage all teacher information in one place' },
        { title: 'Role-Based Access', desc: 'Admins, teachers, and support staff with appropriate permissions' },
        { title: 'Class Assignments', desc: 'Assign teachers to specific classes and batches' },
        { title: 'Performance Tracking', desc: 'Monitor teacher effectiveness and student outcomes' }
      ]
    },
    {
      icon: '📅',
      color: '#ea580c',
      title: '2. Batch & Class Scheduling',
      items: [
        { title: 'Group Lessons', desc: 'Organize by instrument, level, or age group' },
        { title: 'Time Slot Management', desc: 'Avoid conflicts across all teachers and rooms' },
        { title: 'Batch Scheduling', desc: 'Schedule recurring classes for entire batches' },
        { title: 'Resource Allocation', desc: 'Manage classrooms and instrument availability' }
      ]
    },
    {
      icon: '🗄️',
      color: '#fb923c',
      title: '3. Central Student Database',
      items: [
        { title: 'Unified System', desc: 'One database across all branches' },
        { title: 'Student History', desc: 'Complete learning journey in one place' },
        { title: 'Easy Transfers', desc: 'Move students between batches or teachers' },
        { title: 'Advanced Search', desc: 'Find students by name, level, instrument, or teacher' }
      ]
    },
    {
      icon: '💳',
      color: '#f59e0b',
      title: '4. Fee Management & Billing',
      items: [
        { title: 'Bulk Invoicing', desc: 'Generate hundreds of invoices in seconds' },
        { title: 'Payment Tracking', desc: 'Track paid, pending, and overdue fees' },
        { title: 'Auto Reminders', desc: 'Automated payment reminders to parents' },
        { title: 'Revenue Reports', desc: 'Financial insights across all branches' }
      ]
    },
    {
      icon: '🎭',
      color: '#ea580c',
      title: '5. Performance & Recitals',
      items: [
        { title: 'Event Management', desc: 'Organize exams, recitals, and performances' },
        { title: 'Student Evaluation', desc: 'Track performance and provide feedback' },
        { title: 'Certificate Generation', desc: 'Issue certificates and achievements' },
        { title: 'Parent Invitations', desc: 'Notify parents of upcoming events' }
      ]
    },
    {
      icon: '📊',
      color: '#fb923c',
      title: '6. Academy Analytics',
      items: [
        { title: 'Revenue Trends', desc: 'Track income and growth over time' },
        { title: 'Student Retention', desc: 'Identify and prevent dropouts' },
        { title: 'Teacher Performance', desc: 'Compare effectiveness across faculty' },
        { title: 'Branch Comparison', desc: 'Analyze performance across locations' }
      ]
    },
    {
      icon: '🌐',
      color: '#f59e0b',
      title: '7. Multi-Branch Support',
      items: [
        { title: 'Centralized Control', desc: 'Manage all locations from one dashboard' },
        { title: 'Branch-Level Reports', desc: 'Individual performance metrics per branch' },
        { title: 'Resource Sharing', desc: 'Share teachers and resources across branches' },
        { title: 'Standardized Operations', desc: 'Consistent policies and procedures' }
      ]
    },
    {
      icon: '📢',
      color: '#ea580c',
      title: '8. Communication Hub',
      items: [
        { title: 'Mass Announcements', desc: 'Send updates to all parents at once' },
        { title: 'Individual Messages', desc: 'Direct communication with specific parents' },
        { title: 'Teacher-Admin Chat', desc: 'Internal staff communication' },
        { title: 'Notification Center', desc: 'All messages in one organized place' }
      ]
    },
    {
      icon: '🔐',
      color: '#fb923c',
      title: '9. Security & Access Control',
      items: [
        { title: 'Role Permissions', desc: 'Control who can access what data' },
        { title: 'Audit Logs', desc: 'Track all system changes and activities' },
        { title: 'Data Backup', desc: 'Automatic backups and data protection' },
        { title: 'Privacy Compliance', desc: 'GDPR and data protection compliant' }
      ]
    }
  ];

  const testimonials = [
    { name: 'Harmony Music Academy', quote: 'We scaled from 2 to 8 branches using Mousiki. It is the backbone of our operations.', color: '#f59e0b' },
    { name: 'Melodia School of Music', quote: 'Fee collection improved by 40%. Parents love the transparency and communication.', color: '#ea580c' },
    { name: 'Raga Music Institute', quote: 'Managing 25 teachers was chaos. Mousiki brought order and efficiency.', color: '#fb923c' }
  ];

  return (
    <div className="page">
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
            For Music Schools & Academies 🏫
          </h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '0', opacity: 0.95, fontWeight: '300' }}>
            Manage multiple teachers, batches, and branches from one centralized platform
          </p>
        </div>
        <div className="wave-background"></div>
      </div>

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
          Challenges Music Schools Face ⚠️
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

      <div className="card" style={{ background: 'linear-gradient(to bottom, #fff8f0, #ffffff)' }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          Mousiki for Music Schools ✨
        </h2>

        {features.map((feature, index) => (
          <div key={index} className="feature-section" style={{
            marginBottom: '3rem',
            padding: '2.5rem',
            borderRadius: '20px',
            background: `linear-gradient(135deg, ${feature.color}10, transparent)`,
            border: `2px solid ${feature.color}20`
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{feature.icon}</div>
            <h3 style={{ color: feature.color, marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: '700' }}>
              {feature.title}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {feature.items.map((item, i) => (
                <div key={i} style={{
                  padding: '1rem',
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}>
                  <h4 style={{ color: feature.color, marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                    ✓ {item.title}
                  </h4>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#666' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ background: 'linear-gradient(135deg, #fff8f0, #ffffff)' }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          Success Stories 💬
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
            Ready to Scale Your Music Academy? 🚀
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95, fontWeight: '300' }}>
            Join leading music schools already using Mousiki
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
              Schedule a Demo
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

export default ForSchools;
