import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

function Home() {
  const { t } = useLanguage();

  const usps = [
   { icon: '🎯', titleKey: 'home.whyMouseki.allInOne.title', descKey: 'home.whyMouseki.allInOne.desc', color: '#667eea' },
    { icon: '🌐', titleKey: 'home.whyMouseki.hybridLearning.title', descKey: 'home.whyMouseki.hybridLearning.desc', color: '#764ba2' },
    { icon: '🎵', titleKey: 'home.whyMouseki.musicFocused.title', descKey: 'home.whyMouseki.musicFocused.desc', color: '#f093fb' },
    { icon: '⏰', titleKey: 'home.whyMouseki.saveTime.title', descKey: 'home.whyMouseki.saveTime.desc', color: '#667eea' },
    { icon: '📈', titleKey: 'home.whyMouseki.scale.title', descKey: 'home.whyMouseki.scale.desc', color: '#764ba2' },
    { icon: '💰', titleKey: 'home.whyMouseki.affordable.title', descKey: 'home.whyMouseki.affordable.desc', color: '#f093fb' }
  ];

  const teacherFeatures = [
    { icon: '👨‍🎓', titleKey: 'home.forTeachers.features.studentManagement.title', descKey: 'home.forTeachers.features.studentManagement.desc' },
    { icon: '📅', titleKey: 'home.forTeachers.features.lessonScheduling.title', descKey: 'home.forTeachers.features.lessonScheduling.desc' },
    { icon: '💻', titleKey: 'home.forTeachers.features.onlineClasses.title', descKey: 'home.forTeachers.features.onlineClasses.desc' },
    { icon: '📊', titleKey: 'home.forTeachers.features.progressTracking.title', descKey: 'home.forTeachers.features.progressTracking.desc' },
    { icon: '📝', titleKey: 'home.forTeachers.features.practiceAssignments.title', descKey: 'home.forTeachers.features.practiceAssignments.desc' },
    { icon: '💳', titleKey: 'home.forTeachers.features.paymentsInvoicing.title', descKey: 'home.forTeachers.features.paymentsInvoicing.desc' }
  ];

  const schoolFeatures = [
    { icon: '👨‍🏫', titleKey: 'home.forSchools.features.multiTeacher.title', descKey: 'home.forSchools.features.multiTeacher.desc' },
    { icon: '📚', titleKey: 'home.forSchools.features.batchScheduling.title', descKey: 'home.forSchools.features.batchScheduling.desc' },
    { icon: '🗄️', titleKey: 'home.forSchools.features.centralDatabase.title', descKey: 'home.forSchools.features.centralDatabase.desc' },
    { icon: '💳', titleKey: 'home.forSchools.features.feeManagement.title', descKey: 'home.forSchools.features.feeManagement.desc' },
    { icon: '🎭', titleKey: 'home.forSchools.features.performanceRecitals.title', descKey: 'home.forSchools.features.performanceRecitals.desc' },
    { icon: '📈', titleKey: 'home.forSchools.features.academyAnalytics.title', descKey: 'home.forSchools.features.academyAnalytics.desc' }
  ];

  const studentFeatures = [
    { icon: '📅', titleKey: 'home.forStudents.features.lessonCalendar.title', descKey: 'home.forStudents.features.lessonCalendar.desc' },
    { icon: '📁', titleKey: 'home.forStudents.features.practiceMaterials.title', descKey: 'home.forStudents.features.practiceMaterials.desc' },
    { icon: '📊', titleKey: 'home.forStudents.features.progressDashboard.title', descKey: 'home.forStudents.features.progressDashboard.desc' },
    { icon: '📝', titleKey: 'home.forStudents.features.assignments.title', descKey: 'home.forStudents.features.assignments.desc' }
  ];

  const parentFeatures = [
    { icon: '📊', titleKey: 'home.forParents.features.progressTracking.title', descKey: 'home.forParents.features.progressTracking.desc' },
    { icon: '📅', titleKey: 'home.forParents.features.classSchedule.title', descKey: 'home.forParents.features.classSchedule.desc' },
    { icon: '💬', titleKey: 'home.forParents.features.teacherFeedback.title', descKey: 'home.forParents.features.teacherFeedback.desc' },
    { icon: '💳', titleKey: 'home.forParents.features.feeInvoices.title', descKey: 'home.forParents.features.feeInvoices.desc' }
  ];

  return (
    <div className="page">
      <div className="card hero-animated" style={{ 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', padding: '2rem' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '1.5rem', 
            color: 'white',
            fontWeight: '800',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            lineHeight: '1.2'
          }}>
            {t('home.hero.title')}
          </h1>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.8', marginBottom: '1.5rem', opacity: 0.95, fontWeight: '300' }}>
            {t('home.hero.subtitle')}
          </p>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9, fontWeight: '300' }}>
            {t('home.hero.description')}
          </p>
          <button className="btn btn-creative" style={{ 
            padding: '1.2rem 3rem', 
            fontSize: '1.3rem', 
            background: 'white', 
            color: '#FF9800',
            fontWeight: '700',
            boxShadow: '0 8px 30px rgba(255,255,255,0.3)',
            transform: 'scale(1.05)'
          }}>
            {t('common.startFreeTrial')} 🚀
          </button>
        </div>
        <div className="wave-background"></div>
      </div>

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
          {t('home.whyMouseki.title')}
        </h2>
        <div className="grid">
          {usps.map((usp, i) => (
            <div key={i} className="feature-card creative-value-card" style={{ 
              background: `linear-gradient(135deg, ${usp.color}15, transparent)`, 
              borderTop: `4px solid ${usp.color}` 
            }}>
              <div className="icon" style={{ fontSize: '4rem' }}>{usp.icon}</div>
              <h3 style={{ color: usp.color, fontWeight: '700', fontSize: '1.3rem' }}>{t(usp.titleKey)}</h3>
              <p style={{ lineHeight: '1.8' }}>{t(usp.descKey)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: '3rem', background: 'linear-gradient(to bottom, #f8f9ff, #ffffff)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800',
            marginBottom: '0.5rem'
          }}>
            👨‍🏫 {t('home.forTeachers.title')}
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>{t('home.forTeachers.subtitle')}</p>
        </div>
        <div className="grid">
          {teacherFeatures.map((feature, i) => (
            <div key={i} className="why-card" style={{ 
              padding: '2rem', 
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #667eea10, transparent)',
              border: '2px solid #667eea30'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h4 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '700' }}>{t(feature.titleKey)}</h4>
              <p style={{ lineHeight: '1.7' }}>{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/for-teachers" className="btn" style={{ 
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: '700'
          }}>
            {t('common.learnMore')}
          </Link>
        </div>
      </div>

      <div className="card" style={{ marginTop: '3rem', background: 'linear-gradient(to bottom, #fff8f0, #ffffff)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800',
            marginBottom: '0.5rem'
          }}>
            🏫 {t('home.forSchools.title')}
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>{t('home.forSchools.subtitle')}</p>
        </div>
        <div className="grid">
          {schoolFeatures.map((feature, i) => (
            <div key={i} className="why-card" style={{ 
              padding: '2rem', 
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #f59e0b10, transparent)',
              border: '2px solid #f59e0b30'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h4 style={{ color: '#f59e0b', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '700' }}>{t(feature.titleKey)}</h4>
              <p style={{ lineHeight: '1.7' }}>{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/for-schools" className="btn" style={{ 
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #f59e0b, #ea580c)'
          }}>
            {t('common.learnMore')}
          </Link>
        </div>
      </div>

      <div className="card" style={{ marginTop: '3rem', background: 'linear-gradient(to bottom, #f0fff8, #ffffff)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #22c55e, #16a34a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800',
            marginBottom: '0.5rem'
          }}>
            🎓 {t('home.forStudents.title')}
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>{t('home.forStudents.subtitle')}</p>
        </div>
        <div className="grid">
          {studentFeatures.map((feature, i) => (
            <div key={i} className="why-card" style={{ 
              padding: '2rem', 
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #22c55e10, transparent)',
              border: '2px solid #22c55e30'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h4 style={{ color: '#22c55e', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '700' }}>{t(feature.titleKey)}</h4>
              <p style={{ lineHeight: '1.7' }}>{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/for-students" className="btn" style={{ 
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #22c55e, #16a34a)'
          }}>
            {t('common.learnMore')}
          </Link>
        </div>
      </div>

      <div className="card" style={{ marginTop: '3rem', background: 'linear-gradient(to bottom, #fff0f8, #ffffff)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #ec4899, #db2777)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800',
            marginBottom: '0.5rem'
          }}>
            👨‍👩‍👧‍👦 {t('home.forParents.title')}
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>{t('home.forParents.subtitle')}</p>
        </div>
        <div className="grid">
          {parentFeatures.map((feature, i) => (
            <div key={i} className="why-card" style={{ 
              padding: '2rem', 
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #ec489910, transparent)',
              border: '2px solid #ec489930'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h4 style={{ color: '#ec4899', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '700' }}>{t(feature.titleKey)}</h4>
              <p style={{ lineHeight: '1.7' }}>{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/for-parents" className="btn" style={{ 
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #ec4899, #db2777)'
          }}>
            {t('common.learnMore')}
          </Link>
        </div>
      </div>

      <div className="card hero-animated" style={{ 
        marginTop: '3rem', 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 50%, #EF6C00 100%)', 
        color: 'white',
        boxShadow: '0 20px 60px rgba(255, 152, 0, 0.4)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ position: 'relative', zIndex: 2, padding: '2rem' }}>
          <h2 style={{ 
            marginBottom: '1.5rem', 
            color: 'white',
            fontSize: '2.5rem',
            fontWeight: '800',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            {t('home.cta.title')}
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.95, fontWeight: '300' }}>
            {t('home.cta.description')}
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-creative" style={{ 
              background: 'white', 
              color: '#FF9800',
              fontWeight: '700',
              padding: '1.2rem 3rem',
              fontSize: '1.2rem',
              boxShadow: '0 4px 15px rgba(255,255,255,0.3)'
            }}>
              {t('common.startFreeTrial')}
            </button>
            <Link to="/pricing" className="btn btn-creative-outline" style={{ 
              background: 'transparent', 
              border: '3px solid white', 
              color: 'white',
              textDecoration: 'none',
              fontWeight: '700',
              padding: '1.2rem 3rem',
              fontSize: '1.2rem'
            }}>
              {t('common.viewPricing')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
