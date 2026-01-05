import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Students() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Emma Williams',
      age: 12,
      instrument: 'Piano',
      teacher: 'Sarah Johnson',
      level: 'Intermediate',
      parentEmail: 'parent1@email.com',
      status: 'Active',
      attendance: 95,
      progress: 85
    },
    {
      id: 2,
      name: 'Noah Brown',
      age: 15,
      instrument: 'Guitar',
      teacher: 'Michael Chen',
      level: 'Advanced',
      parentEmail: 'parent2@email.com',
      status: 'Active',
      attendance: 88,
      progress: 92
    },
    {
      id: 3,
      name: 'Olivia Davis',
      age: 10,
      instrument: 'Violin',
      teacher: 'Emily Rodriguez',
      level: 'Beginner',
      parentEmail: 'parent3@email.com',
      status: 'Active',
      attendance: 98,
      progress: 78
    },
    {
      id: 4,
      name: 'Liam Martinez',
      age: 14,
      instrument: 'Drums',
      teacher: 'Sarah Johnson',
      level: 'Intermediate',
      parentEmail: 'parent4@email.com',
      status: 'Active',
      attendance: 90,
      progress: 88
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    instrument: '',
    teacher: '',
    level: 'Beginner',
    parentEmail: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: students.length + 1,
      ...formData,
      status: 'Active',
      attendance: 100,
      progress: 0
    };
    setStudents([...students, newStudent]);
    setFormData({ name: '', age: '', instrument: '', teacher: '', level: 'Beginner', parentEmail: '' });
    setShowForm(false);
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return '#22c55e';
      case 'Intermediate': return '#f59e0b';
      case 'Advanced': return '#ec4899';
      default: return '#667eea';
    }
  };

  const getInstrumentEmoji = (instrument) => {
    const emojis = {
      'Piano': '🎹',
      'Guitar': '🎸',
      'Violin': '🎻',
      'Drums': '🥁',
      'Voice': '🎤',
      'Flute': '🎶',
      'Saxophone': '🎷'
    };
    return emojis[instrument] || '🎵';
  };

  const totalStudents = students.length;
  const avgAttendance = (students.reduce((sum, s) => sum + s.attendance, 0) / students.length).toFixed(1);
  const avgProgress = (students.reduce((sum, s) => sum + s.progress, 0) / students.length).toFixed(1);

  return (
    <div className="page">
      <div className="card hero-animated" style={{ 
        background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #10b981 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '2rem'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h1 style={{ 
                fontSize: '2.5rem', 
                marginBottom: '0.5rem',
                fontWeight: '800',
                color: 'white'
              }}>
                🎓 Student Management
              </h1>
              <p style={{ fontSize: '1.1rem', opacity: 0.9, fontWeight: '300' }}>
                Manage enrollments, track progress, and monitor attendance
              </p>
            </div>
            <button 
              className="btn btn-creative" 
              onClick={() => setShowForm(!showForm)}
              style={{ 
                background: 'white', 
                color: '#22c55e',
                fontWeight: '700',
                padding: '1rem 2rem',
                fontSize: '1.1rem'
              }}
            >
              {showForm ? '✕ Cancel' : '+ Add New Student'}
            </button>
          </div>
        </div>
        <div className="wave-background"></div>
      </div>

      <div className="grid" style={{ marginBottom: '2rem' }}>
        <div className="stats-card" style={{ 
          textAlign: 'center', 
          padding: '2rem',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(34, 197, 94, 0.15)',
          border: '2px solid #22c55e20'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎓</div>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: '#22c55e', marginBottom: '0.5rem' }}>
            {totalStudents}
          </div>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: '600' }}>Total Students</p>
        </div>

        <div className="stats-card" style={{ 
          textAlign: 'center', 
          padding: '2rem',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(102, 126, 234, 0.15)',
          border: '2px solid #667eea20'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>✅</div>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: '#667eea', marginBottom: '0.5rem' }}>
            {avgAttendance}%
          </div>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: '600' }}>Avg Attendance</p>
        </div>

        <div className="stats-card" style={{ 
          textAlign: 'center', 
          padding: '2rem',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(236, 72, 153, 0.15)',
          border: '2px solid #ec489920'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📈</div>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: '#ec4899', marginBottom: '0.5rem' }}>
            {avgProgress}%
          </div>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: '600' }}>Avg Progress</p>
        </div>
      </div>

      {showForm && (
        <div className="card" style={{ 
          marginBottom: '2rem',
          background: 'linear-gradient(to bottom, #f0fff8, #ffffff)',
          border: '2px solid #22c55e20'
        }}>
          <h3 style={{ 
            marginBottom: '2rem',
            fontSize: '1.8rem',
            color: '#22c55e',
            fontWeight: '700'
          }}>
            ➕ Add New Student
          </h3>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>👤</span> Student Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  required
                />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>🎂</span> Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Age"
                  min="3"
                  max="100"
                  required
                />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>🎵</span> Instrument
                </label>
                <select
                  name="instrument"
                  value={formData.instrument}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Instrument</option>
                  <option value="Piano">🎹 Piano</option>
                  <option value="Guitar">🎸 Guitar</option>
                  <option value="Violin">🎻 Violin</option>
                  <option value="Drums">🥁 Drums</option>
                  <option value="Voice">🎤 Voice</option>
                  <option value="Flute">🎶 Flute</option>
                  <option value="Saxophone">🎷 Saxophone</option>
                </select>
              </div>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>👨‍🏫</span> Teacher
                </label>
                <select
                  name="teacher"
                  value={formData.teacher}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Teacher</option>
                  <option value="Sarah Johnson">Sarah Johnson</option>
                  <option value="Michael Chen">Michael Chen</option>
                  <option value="Emily Rodriguez">Emily Rodriguez</option>
                </select>
              </div>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>📊</span> Level
                </label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>📧</span> Parent Email
                </label>
                <input
                  type="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleInputChange}
                  placeholder="parent@example.com"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn" style={{ 
              marginTop: '1.5rem',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #22c55e, #16a34a)'
            }}>
              ✅ Add Student
            </button>
          </form>
        </div>
      )}

      <div className="card">
        <h3 style={{ 
          marginBottom: '2rem',
          fontSize: '1.8rem',
          color: '#22c55e',
          fontWeight: '700'
        }}>
          👥 Enrolled Students ({students.length})
        </h3>
        <div className="grid">
          {students.map(student => (
            <div key={student.id} className="feature-card" style={{ 
              background: 'linear-gradient(135deg, #22c55e10, transparent)',
              border: '2px solid #22c55e20',
              borderTop: `4px solid ${getLevelColor(student.level)}`,
              padding: '2rem'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  borderRadius: '50%', 
                  background: `linear-gradient(135deg, ${getLevelColor(student.level)}, ${getLevelColor(student.level)}dd)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  margin: '0 auto 1rem',
                  color: 'white',
                  fontWeight: '700'
                }}>
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem', color: '#22c55e', fontWeight: '700' }}>
                  {student.name}
                </h4>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>
                  {getInstrumentEmoji(student.instrument)} {student.instrument} • Age {student.age}
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#666' }}>👨‍🏫 Teacher:</span>
                  <strong>{student.teacher}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#666' }}>📊 Level:</span>
                  <strong style={{ color: getLevelColor(student.level) }}>{student.level}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#666' }}>✅ Attendance:</span>
                  <strong style={{ color: student.attendance >= 90 ? '#22c55e' : student.attendance >= 75 ? '#f59e0b' : '#ef4444' }}>
                    {student.attendance}%
                  </strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#666' }}>📈 Progress:</span>
                  <strong style={{ color: '#ec4899' }}>{student.progress}%</strong>
                </div>
              </div>

              <div style={{ 
                padding: '0.75rem',
                borderRadius: '10px',
                background: '#22c55e15',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{ color: '#22c55e', fontWeight: '700', fontSize: '1rem' }}>
                  ✅ {student.status}
                </span>
              </div>

              <button className="btn" style={{ 
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                background: 'linear-gradient(135deg, #22c55e, #16a34a)'
              }}>
                View Full Profile →
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ 
        marginTop: '2rem',
        background: 'linear-gradient(135deg, #f0fff8, #fff8f0)'
      }}>
        <h3 style={{ 
          marginBottom: '1.5rem',
          fontSize: '1.8rem',
          color: '#22c55e',
          fontWeight: '700'
        }}>
          ⚡ Quick Actions
        </h3>
        <div className="grid">
          <Link to="/schedule" className="feature-card" style={{ 
            background: 'white',
            borderTop: '4px solid #667eea',
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
            <h4 style={{ color: '#667eea', fontWeight: '700', marginBottom: '0.5rem' }}>Class Schedule</h4>
            <p>View and manage lesson schedules</p>
          </Link>

          <Link to="/billing" className="feature-card" style={{ 
            background: 'white',
            borderTop: '4px solid #f59e0b',
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💳</div>
            <h4 style={{ color: '#f59e0b', fontWeight: '700', marginBottom: '0.5rem' }}>Billing & Payments</h4>
            <p>Track fees and generate invoices</p>
          </Link>

          <Link to="/reports" className="feature-card" style={{ 
            background: 'white',
            borderTop: '4px solid #ec4899',
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
            <h4 style={{ color: '#ec4899', fontWeight: '700', marginBottom: '0.5rem' }}>Progress Reports</h4>
            <p>Analyze student performance</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Students;
