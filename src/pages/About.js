import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  // Helper function to check if image exists, otherwise use placeholder
  const getImage = (path, fallback = null) => {
    try {
      return `/images/${path}`;
    } catch {
      return fallback;
    }
  };

  return (
    <div className="page">
      {/* Hero Section with animated gradient and optional background image */}
      <div className="card hero-animated" style={{ 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '1rem', 
            color: 'white',
            fontWeight: '800',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            About Mousiki 🎵
          </h1>
          <p style={{ fontSize: '1.4rem', marginBottom: '0', opacity: 0.95, fontWeight: '300' }}>
            Empowering music education through technology
          </p>
        </div>
        <div className="wave-background"></div>
      </div>

      {/* Our Story with creative layout and optional images */}
      <div className="card creative-card" style={{ 
        background: 'linear-gradient(to bottom right, #ffffff, #fff8f0)',
        borderLeft: '6px solid #FF9800'
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #FF9800, #F57C00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          Our Story 📖
        </h2>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          fontSize: '1.15rem', 
          lineHeight: '2', 
          color: '#444' 
        }}>
          <p style={{ marginBottom: '2rem', paddingLeft: '2rem', borderLeft: '4px solid #FF9800' }}>
            <strong style={{ color: '#FF9800', fontSize: '1.3rem' }}>💡</strong> Mousiki was born from a simple observation: music teachers spend more time managing admin tasks than actually teaching music. Between juggling WhatsApp groups, Excel spreadsheets, payment tracking, and Google Meet links, the joy of teaching gets lost in the chaos.
          </p>
          <p style={{ marginBottom: '2rem', paddingLeft: '2rem', borderLeft: '4px solid #F57C00' }}>
            <strong style={{ color: '#F57C00', fontSize: '1.3rem' }}>👂</strong> We talked to hundreds of music teachers and discovered they were all facing the same challenges - no visibility into student progress, missed payments, communication overload, and difficulty scaling their teaching practice.
          </p>
          <p style={{ marginBottom: '2rem', paddingLeft: '2rem', borderLeft: '4px solid #EF6C00' }}>
            <strong style={{ color: '#EF6C00', fontSize: '1.3rem' }}>🚀</strong> That's when we decided to build Mousiki - a platform specifically designed for music education. Not a generic LMS adapted for music, but a system built from the ground up understanding the unique needs of music teachers, schools, students, and parents.
          </p>
          <p style={{ paddingLeft: '2rem', borderLeft: '4px solid #22c55e', fontWeight: '600', color: '#22c55e' }}>
            <strong style={{ fontSize: '1.3rem' }}>🌟</strong> Today, Mousiki helps hundreds of music teachers and schools manage thousands of students, bringing transparency, efficiency, and joy back to music education.
          </p>
        </div>
      </div>

      {/* Mission with artistic design */}
      <div className="card" style={{ 
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="floating-notes"></div>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          fontSize: '2.5rem',
          fontWeight: '800',
          color: 'white',
          textShadow: '0 2px 10px rgba(0,0,0,0.2)',
          position: 'relative',
          zIndex: 2
        }}>
          Our Mission 🎯
        </h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <p style={{ 
            fontSize: '1.4rem', 
            lineHeight: '2', 
            fontStyle: 'italic',
            fontWeight: '300',
            textShadow: '0 2px 5px rgba(0,0,0,0.2)'
          }}>
            "To empower music educators with technology that simplifies operations, enhances learning outcomes, and brings transparency to every stakeholder in the music education journey."
          </p>
        </div>
      </div>

      {/* Core Values with vibrant cards */}
      <div className="card">
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #FF9800, #F57C00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          Our Values 🎼
        </h2>
        <div className="grid">
          <div className="feature-card creative-value-card" style={{ background: 'linear-gradient(135deg, #FF980015, #FF980005)', borderTop: '4px solid #FF9800' }}>
            <div className="icon" style={{ fontSize: '4rem' }}>🎵</div>
            <h3 style={{ color: '#FF9800', fontWeight: '700' }}>Focus on Music Education</h3>
            <p>We're laser-focused on solving problems specific to music teaching and learning.</p>
          </div>
          <div className="feature-card creative-value-card" style={{ background: 'linear-gradient(135deg, #f59e0b15, #f59e0b05)', borderTop: '4px solid #f59e0b' }}>
            <div className="icon" style={{ fontSize: '4rem' }}>✨</div>
            <h3 style={{ color: '#f59e0b', fontWeight: '700' }}>Simplicity First</h3>
            <p>Technology should make life easier, not more complicated. We design for simplicity.</p>
          </div>
          <div className="feature-card creative-value-card" style={{ background: 'linear-gradient(135deg, #ec489915, #ec489905)', borderTop: '4px solid #ec4899' }}>
            <div className="icon" style={{ fontSize: '4rem' }}>🔍</div>
            <h3 style={{ color: '#ec4899', fontWeight: '700' }}>Transparency</h3>
            <p>Clear communication between teachers, students, and parents builds trust and better outcomes.</p>
          </div>
          <div className="feature-card creative-value-card" style={{ background: 'linear-gradient(135deg, #22c55e15, #22c55e05)', borderTop: '4px solid #22c55e' }}>
            <div className="icon" style={{ fontSize: '4rem' }}>📈</div>
            <h3 style={{ color: '#22c55e', fontWeight: '700' }}>Continuous Improvement</h3>
            <p>We listen to our users and constantly evolve based on their feedback and needs.</p>
          </div>
          <div className="feature-card creative-value-card" style={{ background: 'linear-gradient(135deg, #8b5cf615, #8b5cf605)', borderTop: '4px solid #8b5cf6' }}>
            <div className="icon" style={{ fontSize: '4rem' }}>🏆</div>
            <h3 style={{ color: '#8b5cf6', fontWeight: '700' }}>Quality Education</h3>
            <p>We believe every student deserves access to quality music education with proper tracking and support.</p>
          </div>
          <div className="feature-card creative-value-card" style={{ background: 'linear-gradient(135deg, #ef444415, #ef444405)', borderTop: '4px solid #ef4444' }}>
            <div className="icon" style={{ fontSize: '4rem' }}>💪</div>
            <h3 style={{ color: '#ef4444', fontWeight: '700' }}>Empowerment</h3>
            <p>We empower teachers to focus on what they do best - teaching and inspiring students.</p>
          </div>
        </div>
      </div>

      {/* Why Mousiki with creative icons */}
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
          Why Choose Mousiki? 🤔
        </h2>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="why-card" style={{ 
              padding: '2rem', 
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #667eea10, transparent)',
              border: '2px solid #667eea30',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎻</div>
              <h4 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: '700' }}>Built for Music</h4>
              <p style={{ lineHeight: '1.8' }}>Unlike generic platforms, Mousiki is designed specifically for music education with features that matter to music teachers.</p>
            </div>
            <div className="why-card" style={{ 
              padding: '2rem', 
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #f59e0b10, transparent)',
              border: '2px solid #f59e0b30',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
              <h4 style={{ color: '#f59e0b', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: '700' }}>All-in-One Solution</h4>
              <p style={{ lineHeight: '1.8' }}>Stop paying for multiple subscriptions. Everything you need is in one platform.</p>
            </div>
            <div className="why-card" style={{ 
              padding: '2rem', 
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #ec489910, transparent)',
              border: '2px solid #ec489930',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎶</div>
              <h4 style={{ color: '#ec4899', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: '700' }}>Works Your Way</h4>
              <p style={{ lineHeight: '1.8' }}>Whether you teach online, offline, or both - Mousiki adapts to your teaching style.</p>
            </div>
            <div className="why-card" style={{ 
              padding: '2rem', 
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #22c55e10, transparent)',
              border: '2px solid #22c55e30',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
              <h4 style={{ color: '#22c55e', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: '700' }}>Scales With You</h4>
              <p style={{ lineHeight: '1.8' }}>From solo teacher to multi-branch academy, Mousiki grows with your business.</p>
            </div>
            <div className="why-card" style={{ 
              padding: '2rem', 
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #8b5cf610, transparent)',
              border: '2px solid #8b5cf630',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👌</div>
              <h4 style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: '700' }}>Easy to Use</h4>
              <p style={{ lineHeight: '1.8' }}>No technical knowledge required. If you can use WhatsApp, you can use Mousiki.</p>
            </div>
            <div className="why-card" style={{ 
              padding: '2rem', 
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #06b6d410, transparent)',
              border: '2px solid #06b6d430',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
              <h4 style={{ color: '#06b6d4', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: '700' }}>Great Support</h4>
              <p style={{ lineHeight: '1.8' }}>We're here to help. Our support team understands music education and is always ready to assist.</p>
            </div>
          </div>
        </div>
      </div>

      {/* By The Numbers with animated counters */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #f8f9ff, #fff0f8)' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #FF9800, #F57C00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          Mousiki in Numbers 🔢
        </h2>
        <div className="grid">
          <div className="stats-card" style={{ 
            textAlign: 'center', 
            padding: '3rem 2rem',
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(102, 126, 234, 0.15)',
            border: '2px solid #667eea20',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ fontSize: '4rem', fontWeight: '900', color: '#667eea', marginBottom: '0.5rem' }}>500+</div>
            <p style={{ fontSize: '1.2rem', color: '#666', fontWeight: '600' }}>🎓 Music Teachers</p>
          </div>
          <div className="stats-card" style={{ 
            textAlign: 'center', 
            padding: '3rem 2rem',
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(245, 158, 11, 0.15)',
            border: '2px solid #f59e0b20',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ fontSize: '4rem', fontWeight: '900', color: '#f59e0b', marginBottom: '0.5rem' }}>50+</div>
            <p style={{ fontSize: '1.2rem', color: '#666', fontWeight: '600' }}>🏫 Music Schools</p>
          </div>
          <div className="stats-card" style={{ 
            textAlign: 'center', 
            padding: '3rem 2rem',
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(236, 72, 153, 0.15)',
            border: '2px solid #ec489920',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ fontSize: '4rem', fontWeight: '900', color: '#ec4899', marginBottom: '0.5rem' }}>10,000+</div>
            <p style={{ fontSize: '1.2rem', color: '#666', fontWeight: '600' }}>🎶 Active Students</p>
          </div>
          <div className="stats-card" style={{ 
            textAlign: 'center', 
            padding: '3rem 2rem',
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(34, 197, 94, 0.15)',
            border: '2px solid #22c55e20',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ fontSize: '4rem', fontWeight: '900', color: '#22c55e', marginBottom: '0.5rem' }}>100,000+</div>
            <p style={{ fontSize: '1.2rem', color: '#666', fontWeight: '600' }}>📚 Lessons Conducted</p>
          </div>
        </div>
      </div>

      {/* Team with creative layout and optional team photo */}
      <div className="card" style={{ 
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', padding: '2rem', position: 'relative', zIndex: 2 }}>
          <h2 style={{ 
            marginBottom: '2rem',
            fontSize: '2.5rem',
            fontWeight: '800',
            color: 'white',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Our Team 👩‍🎤👨‍🎤
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '2', marginBottom: '2rem', fontWeight: '300', color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
            We're a passionate team of <strong style={{ fontWeight: '700' }}>musicians</strong>, <strong style={{ fontWeight: '700' }}>educators</strong>, and <strong style={{ fontWeight: '700' }}>technologists</strong> who believe in the power of music education. Our diverse backgrounds in music, teaching, and software development allow us to build a product that truly understands your needs.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '2', fontWeight: '300', color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
            Every feature in Mousiki is built with input from real music teachers and tested in actual classrooms. We're not just building software - we're building a better future for music education.
          </p>
        </div>
      </div>

      {/* Contact CTA with vibrant design */}
      <div className="card" style={{ 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 50%, #EF6C00 100%)', 
        color: 'white',
        boxShadow: '0 20px 60px rgba(255, 152, 0, 0.4)'
      }}>
        <h2 style={{ 
          marginBottom: '1rem', 
          color: 'white',
          fontSize: '2.5rem',
          fontWeight: '800',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>
          Want to Learn More? 🤗
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95, fontWeight: '300' }}>
          We'd love to hear from you and show you how Mousiki can transform your music teaching
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn btn-creative" style={{ 
            background: 'white', 
            color: '#FF9800', 
            textDecoration: 'none',
            fontWeight: '700',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            boxShadow: '0 4px 15px rgba(255,255,255,0.3)',
            transition: 'all 0.3s ease'
          }}>
            Contact Us
          </Link>
          <Link to="/pricing" className="btn btn-creative-outline" style={{ 
            background: 'transparent', 
            border: '3px solid white', 
            color: 'white', 
            textDecoration: 'none',
            fontWeight: '700',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease'
          }}>
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
