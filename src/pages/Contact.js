import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('contact.form.successMessage'));
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <div className="card hero-animated" style={{ 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '1rem',
            fontWeight: '800',
            color: 'white',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            {t('contact.hero.title')}
          </h1>
          <p style={{ fontSize: '1.3rem', fontWeight: '300', opacity: 0.95 }}>
            {t('contact.hero.subtitle')}
          </p>
        </div>
        <div className="wave-background"></div>
        <div className="floating-notes"></div>
      </div>

      {/* Contact Info Cards */}
      <div className="grid" style={{ marginTop: '3rem' }}>
        <div className="feature-card" style={{ 
          background: 'linear-gradient(135deg, #667eea10, transparent)',
          borderTop: '4px solid #667eea',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>📍</div>
          <h3 style={{ marginBottom: '1.5rem', color: '#667eea', fontWeight: '700', fontSize: '1.3rem' }}>
            {t('contact.location')}
          </h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', margin: '0.3rem 0' }}>{t('contact.contactInfo.address1')}</p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', margin: '0.3rem 0' }}>{t('contact.contactInfo.address2')}</p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', margin: '0.3rem 0' }}>{t('contact.contactInfo.address3')}</p>
        </div>
        
        <div className="feature-card" style={{ 
          background: 'linear-gradient(135deg, #22c55e10, transparent)',
          borderTop: '4px solid #22c55e',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>📞</div>
          <h3 style={{ marginBottom: '1.5rem', color: '#22c55e', fontWeight: '700', fontSize: '1.3rem' }}>
            {t('contact.phone')}
          </h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', margin: '0.3rem 0' }}>
            <strong>Main:</strong> {t('contact.contactInfo.mainPhone')}
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', margin: '0.3rem 0' }}>
            <strong>Support:</strong> {t('contact.contactInfo.supportPhone')}
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', margin: '0.3rem 0' }}>{t('contact.contactInfo.phoneHours')}</p>
        </div>
        
        <div className="feature-card" style={{ 
          background: 'linear-gradient(135deg, #f59e0b10, transparent)',
          borderTop: '4px solid #f59e0b',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>📧</div>
          <h3 style={{ marginBottom: '1.5rem', color: '#f59e0b', fontWeight: '700', fontSize: '1.3rem' }}>
            {t('contact.email')}
          </h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', margin: '0.3rem 0' }}>
            <strong>Info:</strong> {t('contact.contactInfo.infoEmail')}
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', margin: '0.3rem 0' }}>
            <strong>Support:</strong> {t('contact.contactInfo.supportEmail')}
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', margin: '0.3rem 0' }}>
            <strong>Sales:</strong> {t('contact.contactInfo.salesEmail')}
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="card" style={{ 
        marginTop: '3rem',
        background: 'linear-gradient(to bottom, #f8f9ff, #ffffff)'
      }}>
        <h2 style={{ 
          marginBottom: '2rem',
          textAlign: 'center',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          {t('contact.form.title')}
        </h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="form-group">
            <label style={{ 
              fontSize: '1.1rem', 
              fontWeight: '600', 
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>👤</span> {t('contact.form.name')}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t('contact.form.namePlaceholder')}
              required
              style={{ fontSize: '1rem' }}
            />
          </div>
          
          <div className="form-group">
            <label style={{ 
              fontSize: '1.1rem', 
              fontWeight: '600', 
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>📧</span> {t('contact.form.email')}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t('contact.form.emailPlaceholder')}
              required
              style={{ fontSize: '1rem' }}
            />
          </div>
          
          <div className="form-group">
            <label style={{ 
              fontSize: '1.1rem', 
              fontWeight: '600', 
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>📝</span> {t('contact.form.subject')}
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder={t('contact.form.subjectPlaceholder')}
              required
              style={{ fontSize: '1rem' }}
            />
          </div>
          
          <div className="form-group">
            <label style={{ 
              fontSize: '1.1rem', 
              fontWeight: '600', 
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>💬</span> {t('contact.form.message')}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t('contact.form.messagePlaceholder')}
              required
              rows="6"
              style={{ fontSize: '1rem' }}
            />
          </div>
          
          <button type="submit" className="btn" style={{ 
            width: '100%',
            padding: '1.2rem',
            fontSize: '1.2rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #667eea, #764ba2)'
          }}>
            {t('contact.form.send')}
          </button>
        </form>
      </div>

      {/* Business Hours */}
      <div className="card" style={{ 
        marginTop: '3rem', 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #fff8f0, #ffffff)'
      }}>
        <h2 style={{ 
          marginBottom: '2.5rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          {t('contact.hours.title')}
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div className="feature-card" style={{ 
            padding: '2rem',
            background: 'linear-gradient(135deg, #667eea10, transparent)',
            borderTop: '4px solid #667eea'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📅</div>
            <p style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#667eea' }}>
              {t('contact.hours.weekdays')}
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>{t('contact.hours.weekdaysTime')}</p>
          </div>
          
          <div className="feature-card" style={{ 
            padding: '2rem',
            background: 'linear-gradient(135deg, #22c55e10, transparent)',
            borderTop: '4px solid #22c55e'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎉</div>
            <p style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#22c55e' }}>
              {t('contact.hours.saturday')}
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>{t('contact.hours.saturdayTime')}</p>
          </div>
          
          <div className="feature-card" style={{ 
            padding: '2rem',
            background: 'linear-gradient(135deg, #ef444410, transparent)',
            borderTop: '4px solid #ef4444'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚫</div>
            <p style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#ef4444' }}>
              {t('contact.hours.sunday')}
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>{t('contact.hours.closed')}</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="card hero-animated" style={{ 
        marginTop: '3rem',
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
            {t('contact.cta.title')}
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95, fontWeight: '300' }}>
            {t('contact.cta.description')}
          </p>
          <button className="btn btn-creative" style={{ 
            background: 'white', 
            color: '#FF9800',
            fontWeight: '700',
            padding: '1.2rem 3rem',
            fontSize: '1.2rem',
            boxShadow: '0 4px 15px rgba(255,255,255,0.3)'
          }}>
            {t('common.scheduleDemo')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
