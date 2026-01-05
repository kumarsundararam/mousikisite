import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Pricing() {
  const { t } = useLanguage();

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
            {t('pricing.hero.title')}
          </h1>
          <p style={{ fontSize: '1.3rem', fontWeight: '300', opacity: 0.95 }}>
            {t('pricing.hero.subtitle')}
          </p>
        </div>
        <div className="wave-background"></div>
      </div>

      {/* Pricing Cards */}
      <div className="grid" style={{ marginTop: '3rem' }}>
        {/* Solo Teacher Plan */}
        <div className="card" style={{ 
          textAlign: 'center', 
          border: '3px solid #667eea20',
          borderTop: '6px solid #667eea',
          transition: 'all 0.3s ease',
          position: 'relative'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
            <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.8rem', fontWeight: '800' }}>
              {t('pricing.solo.title')}
            </h3>
            <div style={{ fontSize: '3.5rem', fontWeight: '900', color: '#667eea', marginBottom: '0.5rem' }}>
              {t('pricing.solo.price')}<span style={{ fontSize: '1.5rem', fontWeight: '400', color: '#666' }}>{t('pricing.solo.period')}</span>
            </div>
            <p style={{ marginBottom: '0', color: '#666', fontWeight: '600' }}>{t('pricing.solo.description')}</p>
          </div>
          <ul style={{ textAlign: 'left', lineHeight: '2.5', listStyle: 'none', paddingLeft: 0, marginBottom: '2rem' }}>
            <li>✓ Up to 30 students</li>
            <li>✓ Student management</li>
            <li>✓ Lesson scheduling</li>
            <li>✓ Online classes</li>
            <li>✓ Attendance tracking</li>
            <li>✓ Progress tracking</li>
            <li>✓ Payments & invoicing</li>
            <li>✓ Practice assignments</li>
            <li>✓ Parent communication</li>
          </ul>
          <button className="btn" style={{ width: '100%', padding: '1rem' }}>{t('pricing.solo.cta')}</button>
        </div>

        {/* Professional Plan */}
        <div className="card" style={{ 
          textAlign: 'center', 
          border: '3px solid #764ba2',
          borderTop: '6px solid #764ba2',
          position: 'relative', 
          background: 'linear-gradient(to bottom, #f8f9ff, #ffffff)',
          transform: 'scale(1.05)',
          boxShadow: '0 20px 60px rgba(118, 75, 162, 0.3)'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '-20px', 
            right: '20px', 
            background: 'linear-gradient(135deg, #22c55e, #16a34a)', 
            color: 'white', 
            padding: '0.6rem 1.5rem', 
            borderRadius: '25px', 
            fontSize: '0.9rem', 
            fontWeight: '800',
            boxShadow: '0 4px 15px rgba(34, 197, 94, 0.4)'
          }}>
            ⭐ {t('pricing.professional.badge')}
          </div>
          <div style={{ marginBottom: '2rem', marginTop: '1rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
            <h3 style={{ color: '#764ba2', marginBottom: '1rem', fontSize: '1.8rem', fontWeight: '800' }}>
              {t('pricing.professional.title')}
            </h3>
            <div style={{ fontSize: '3.5rem', fontWeight: '900', color: '#764ba2', marginBottom: '0.5rem' }}>
              {t('pricing.professional.price')}<span style={{ fontSize: '1.5rem', fontWeight: '400', color: '#666' }}>{t('pricing.professional.period')}</span>
            </div>
            <p style={{ marginBottom: '0', color: '#666', fontWeight: '600' }}>{t('pricing.professional.description')}</p>
          </div>
          <ul style={{ textAlign: 'left', lineHeight: '2.5', listStyle: 'none', paddingLeft: 0, marginBottom: '2rem' }}>
            <li>✓ Up to 100 students</li>
            <li>✓ All Solo features</li>
            <li>✓ Advanced analytics</li>
            <li>✓ Custom branding</li>
            <li>✓ Bulk operations</li>
            <li>✓ Priority support</li>
            <li>✓ API access</li>
          </ul>
          <button className="btn" style={{ 
            width: '100%', 
            padding: '1rem',
            background: 'linear-gradient(135deg, #764ba2, #667eea)',
            fontSize: '1.1rem',
            fontWeight: '700'
          }}>
            {t('pricing.professional.cta')}
          </button>
        </div>

        {/* School Plan */}
        <div className="card" style={{ 
          textAlign: 'center', 
          border: '3px solid #f59e0b20',
          borderTop: '6px solid #f59e0b',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏫</div>
            <h3 style={{ color: '#f59e0b', marginBottom: '1rem', fontSize: '1.8rem', fontWeight: '800' }}>
              {t('pricing.school.title')}
            </h3>
            <div style={{ fontSize: '3.5rem', fontWeight: '900', color: '#f59e0b', marginBottom: '0.5rem' }}>
              {t('pricing.school.price')}<span style={{ fontSize: '1.5rem', fontWeight: '400', color: '#666' }}>{t('pricing.school.period')}</span>
            </div>
            <p style={{ marginBottom: '0', color: '#666', fontWeight: '600' }}>{t('pricing.school.description')}</p>
          </div>
          <ul style={{ textAlign: 'left', lineHeight: '2.5', listStyle: 'none', paddingLeft: 0, marginBottom: '2rem' }}>
            <li>✓ Unlimited students</li>
            <li>✓ Multi-teacher management</li>
            <li>✓ Role-based access</li>
            <li>✓ Batch scheduling</li>
            <li>✓ Multi-branch support</li>
            <li>✓ Academy analytics</li>
            <li>✓ Performance & recitals</li>
            <li>✓ Bulk invoicing</li>
            <li>✓ Dedicated support</li>
          </ul>
          <button className="btn" style={{ 
            width: '100%', 
            padding: '1rem',
            background: 'linear-gradient(135deg, #f59e0b, #ea580c)'
          }}>
            {t('pricing.school.cta')}
          </button>
        </div>
      </div>

      {/* Enterprise */}
      <div className="card hero-animated" style={{ 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white', 
        marginTop: '3rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏢</div>
          <h2 style={{ 
            marginBottom: '1rem', 
            color: 'white',
            fontSize: '2.5rem',
            fontWeight: '800',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            {t('pricing.enterprise.title')}
          </h2>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem', opacity: 0.95, fontWeight: '300' }}>
            {t('pricing.enterprise.description')}
          </p>
          <button className="btn btn-creative" style={{ 
            background: 'white', 
            color: '#667eea',
            fontWeight: '700',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem'
          }}>
            {t('pricing.enterprise.cta')}
          </button>
        </div>
        <div className="floating-notes"></div>
      </div>

      {/* Features Comparison */}
      <div className="card" style={{ marginTop: '3rem' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          {t('pricing.comparison.title')}
        </h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Solo Teacher</th>
              <th>Professional</th>
              <th>Music School</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Number of Students</strong></td>
              <td>Up to 30</td>
              <td>Up to 100</td>
              <td><strong>Unlimited</strong></td>
            </tr>
            <tr>
              <td><strong>Teachers</strong></td>
              <td>1</td>
              <td>1</td>
              <td><strong>Unlimited</strong></td>
            </tr>
            <tr>
              <td><strong>Online Classes</strong></td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td><strong>Progress Tracking</strong></td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td><strong>Payments & Invoicing</strong></td>
              <td>✓</td>
              <td>✓</td>
              <td>✓ <em>(Bulk)</em></td>
            </tr>
            <tr>
              <td><strong>Multi-Branch Support</strong></td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
            </tr>
            <tr>
              <td><strong>Analytics</strong></td>
              <td>Basic</td>
              <td><strong>Advanced</strong></td>
              <td><strong>Academy-level</strong></td>
            </tr>
            <tr>
              <td><strong>Support</strong></td>
              <td>Email</td>
              <td><strong>Priority</strong></td>
              <td><strong>Dedicated</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* FAQ */}
      <div className="card" style={{ marginTop: '3rem', background: 'linear-gradient(to bottom, #f8f9ff, #ffffff)' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '800'
        }}>
          {t('pricing.faq.title')}
        </h2>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* FAQ items */}
        </div>
      </div>

      {/* CTA */}
      <div className="card hero-animated" style={{ 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 50%, #EF6C00 100%)', 
        color: 'white', 
        marginTop: '3rem',
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
            {t('pricing.cta.title')}
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95, fontWeight: '300' }}>
            {t('pricing.cta.description')}
          </p>
          <button className="btn btn-creative" style={{ 
            background: 'white', 
            color: '#FF9800',
            fontWeight: '700',
            padding: '1.2rem 3rem',
            fontSize: '1.2rem',
            boxShadow: '0 4px 15px rgba(255,255,255,0.3)'
          }}>
            {t('pricing.cta.button')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
