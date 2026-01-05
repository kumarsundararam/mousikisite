import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Schedule() {
  const [lessons, setLessons] = useState([
    { id: 1, student: 'Emma Williams', teacher: 'Sarah Johnson', instrument: 'Piano', day: 'Monday', time: '3:00 PM', duration: '60 min', status: 'Scheduled', color: '#667eea' },
    { id: 2, student: 'Noah Brown', teacher: 'Michael Chen', instrument: 'Guitar', day: 'Tuesday', time: '4:00 PM', duration: '45 min', status: 'Scheduled', color: '#22c55e' },
    { id: 3, student: 'Olivia Davis', teacher: 'Emily Rodriguez', instrument: 'Violin', day: 'Wednesday', time: '3:30 PM', duration: '60 min', status: 'Scheduled', color: '#ec4899' },
    { id: 4, student: 'Emma Williams', teacher: 'Sarah Johnson', instrument: 'Piano', day: 'Thursday', time: '3:00 PM', duration: '60 min', status: 'Completed', color: '#667eea' },
    { id: 5, student: 'Liam Martinez', teacher: 'Sarah Johnson', instrument: 'Drums', day: 'Friday', time: '5:00 PM', duration: '45 min', status: 'Scheduled', color: '#f59e0b' }
  ]);

  const [showForm, setShowForm] = useState(false);

  const getInstrumentEmoji = (instrument) => {
    const emojis = { 'Piano': '🎹', 'Guitar': '🎸', 'Violin': '🎻', 'Drums': '🥁', 'Voice': '🎤' };
    return emojis[instrument] || '🎵';
  };

  const thisWeekScheduled = lessons.filter(l => l.status === 'Scheduled').length;
  const thisWeekCompleted = lessons.filter(l => l.status === 'Completed').length;
  const thisWeekCancelled = lessons.filter(l => l.status === 'Cancelled').length;

  return (
    <div className="page">
      {/* Hero Section */}
      <div className="card hero-animated" style={{ 
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '2rem'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '800', color: 'white' }}>
                📅 Lesson Schedule
              </h1>
              <p style={{ fontSize: '1.1rem', opacity: 0.9, fontWeight: '300' }}>
                Manage lesson times, track attendance, and avoid conflicts
              </p>
            </div>
            <button className="btn btn-creative" onClick={() => setShowForm(!showForm)}
              style={{ background: 'white', color: '#06b6d4', fontWeight: '700', padding: '1rem 2rem', fontSize: '1.1rem' }}>
              {showForm ? '✕ Cancel' : '+ Schedule New Lesson'}
            </button>
          </div>
        </div>
        <div className="wave-background"></div>
      </div>

      {/* Stats Cards */}
      <div className="grid" style={{ marginBottom: '2rem' }}>
        <div className="stats-card" style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 40px rgba(6, 182, 212, 0.15)', border: '2px solid #06b6d420' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📅</div>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: '#06b6d4', marginBottom: '0.5rem' }}>{thisWeekScheduled}</div>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: '600' }}>Scheduled This Week</p>
        </div>
        <div className="stats-card" style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 40px rgba(34, 197, 94, 0.15)', border: '2px solid #22c55e20' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>✅</div>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: '#22c55e', marginBottom: '0.5rem' }}>{thisWeekCompleted}</div>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: '600' }}>Completed</p>
        </div>
        <div className="stats-card" style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 40px rgba(239, 68, 68, 0.15)', border: '2px solid #ef444420' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>❌</div>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: '#ef4444', marginBottom: '0.5rem' }}>{thisWeekCancelled}</div>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: '600' }}>Cancelled</p>
        </div>
      </div>

      {/* Add Lesson Form */}
      {showForm && (
        <div className="card" style={{ marginBottom: '2rem', background: 'linear-gradient(to bottom, #f0f9ff, #ffffff)', border: '2px solid #06b6d420' }}>
          <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: '#06b6d4', fontWeight: '700' }}>➕ Schedule New Lesson</h3>
          <form>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>🎓</span> Student
                </label>
                <select required>
                  <option value="">Select Student</option>
                  <option>Emma Williams</option>
                  <option>Noah Brown</option>
                </select>
              </div>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>👨‍🏫</span> Teacher
                </label>
                <select required>
                  <option value="">Select Teacher</option>
                  <option>Sarah Johnson</option>
                  <option>Michael Chen</option>
                </select>
              </div>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>📆</span> Day
                </label>
                <select required>
                  <option value="">Select Day</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                </select>
              </div>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>⏰</span> Time
                </label>
                <input type="time" required />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>⏱️</span> Duration
                </label>
                <select required>
                  <option>30 minutes</option>
                  <option>45 minutes</option>
                  <option>60 minutes</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn" style={{ marginTop: '1.5rem', padding: '1rem 2.5rem', fontSize: '1.1rem', fontWeight: '700', background: 'linear-gradient(135deg, #06b6d4, #0891b2)' }}>
              ✅ Schedule Lesson
            </button>
          </form>
        </div>
      )}

      {/* Weekly Calendar View */}
      <div className="card">
        <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: '#06b6d4', fontWeight: '700' }}>📆 This Week's Schedule</h3>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
            <div key={day} className="feature-card" style={{ background: 'linear-gradient(135deg, #06b6d410, transparent)', border: '2px solid #06b6d420', padding: '1.5rem' }}>
              <h4 style={{ color: '#06b6d4', fontWeight: '700', marginBottom: '1rem', textAlign: 'center' }}>{day}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {lessons.filter(l => l.day === day).map(lesson => (
                  <div key={lesson.id} style={{ padding: '0.75rem', borderRadius: '8px', background: `${lesson.color}15`, borderLeft: `4px solid ${lesson.color}` }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: lesson.color, marginBottom: '0.25rem' }}>{lesson.time}</div>
                    <div style={{ fontSize: '0.85rem', marginBottom: '0.25rem' }}>{getInstrumentEmoji(lesson.instrument)} {lesson.student}</div>
                    <div style={{ fontSize: '0.75rem', color: '#666' }}>{lesson.teacher}</div>
                  </div>
                ))}
                {lessons.filter(l => l.day === day).length === 0 && (
                  <div style={{ padding: '1rem', textAlign: 'center', color: '#999', fontSize: '0.9rem' }}>No lessons</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card" style={{ marginTop: '2rem', background: 'linear-gradient(135deg, #f0f9ff, #fff0f8)' }}>
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem', color: '#06b6d4', fontWeight: '700' }}>⚡ Quick Actions</h3>
        <div className="grid">
          <Link to="/students" className="feature-card" style={{ background: 'white', borderTop: '4px solid #22c55e', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
            <h4 style={{ color: '#22c55e', fontWeight: '700', marginBottom: '0.5rem' }}>Student List</h4>
            <p>View all enrolled students</p>
          </Link>
          <Link to="/teachers" className="feature-card" style={{ background: 'white', borderTop: '4px solid #667eea', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👨‍🏫</div>
            <h4 style={{ color: '#667eea', fontWeight: '700', marginBottom: '0.5rem' }}>Teacher Availability</h4>
            <p>Check teacher schedules</p>
          </Link>
          <Link to="/reports" className="feature-card" style={{ background: 'white', borderTop: '4px solid #ec4899', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
            <h4 style={{ color: '#ec4899', fontWeight: '700', marginBottom: '0.5rem' }}>Attendance Reports</h4>
            <p>Track lesson attendance</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
