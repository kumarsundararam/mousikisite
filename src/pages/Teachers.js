import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Teachers() {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      instrument: 'Piano',
      experience: '15 years',
      email: 'sarah.j@mousiki.com',
      phone: '(555) 123-4567',
      status: 'Active',
      students: 28,
      rating: 4.9
    },
    {
      id: 2,
      name: 'Michael Chen',
      instrument: 'Guitar',
      experience: '10 years',
      email: 'michael.c@mousiki.com',
      phone: '(555) 234-5678',
      status: 'Active',
      students: 35,
      rating: 4.8
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      instrument: 'Violin',
      experience: '12 years',
      email: 'emily.r@mousiki.com',
      phone: '(555) 345-6789',
      status: 'Active',
      students: 22,
      rating: 5.0
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    instrument: '',
    experience: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTeacher = {
      id: teachers.length + 1,
      ...formData,
      status: 'Active',
      students: 0,
      rating: 0
    };
    setTeachers([...teachers, newTeacher]);
    setFormData({ name: '', instrument: '', experience: '', email: '', phone: '' });
    setShowForm(false);
  };

  // Calculate stats
  const totalTeachers = teachers.length;
  const totalStudents = teachers.reduce((sum, t) => sum + t.students, 0);
  const avgRating = (teachers.reduce((sum, t) => sum + t.rating, 0) / teachers.length).toFixed(1);

  return (
    <div className="page">
      {/* Hero Section */}
      <div className="card hero-animated" style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
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
                👨‍🏫 Teacher Management
              </h1>
              <p style={{ fontSize: '1.1rem', opacity: 0.9, fontWeight: '300' }}>
                Manage your teaching staff and their performance
              </p>
            </div>
            <button 
              className="btn btn-creative" 
              onClick={() => setShowForm(!showForm)}
              style={{ 
                background: 'white', 
                color: '#667eea',
                fontWeight: '700',
                padding: '1rem 2rem',
                fontSize: '1.1rem'
              }}
            >
              {showForm ? '✕ Cancel' : '+ Add New Teacher'}
            </button>
          </div>
        </div>
        <div className="wave-background"></div>
      </div>

      {/* Stats Cards */}
      <div className="grid" style={{ marginBottom: '2rem' }}>
        <div className="stats-card" style={{ 
          textAlign: 'center', 
          padding: '2rem',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(102, 126, 234, 0.15)',
          border: '2px solid #667eea20'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>👨‍🏫</div>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: '#667eea', marginBottom: '0.5rem' }}>
            {totalTeachers}
          </div>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: '600' }}>Total Teachers</p>
        </div>

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
          boxShadow: '0 10px 40px rgba(245, 158, 11, 0.15)',
          border: '2px solid #f59e0b20'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>⭐</div>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: '#f59e0b', marginBottom: '0.5rem' }}>
            {avgRating}
          </div>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: '600' }}>Average Rating</p>
        </div>
      </div>

      {/* Add Teacher Form */}
      {showForm && (
        <div className="card" style={{ 
          marginBottom: '2rem',
          background: 'linear-gradient(to bottom, #f8f9ff, #ffffff)',
          border: '2px solid #667eea20'
        }}>
          <h3 style={{ 
            marginBottom: '2rem',
            fontSize: '1.8rem',
            color: '#667eea',
            fontWeight: '700'
          }}>
            ➕ Add New Teacher
          </h3>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>👤</span> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., John Smith"
                  required
                />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>🎵</span> Instrument/Specialty
                </label>
                <input
                  type="text"
                  name="instrument"
                  value={formData.instrument}
                  onChange={handleInputChange}
                  placeholder="e.g., Piano, Guitar, Vocals"
                  required
                />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>⏱️</span> Experience
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="e.g., 10 years"
                  required
                />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>📧</span> Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="teacher@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>📞</span> Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn" style={{ 
              marginTop: '1.5rem',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #667eea, #764ba2)'
            }}>
              ✅ Add Teacher
            </button>
          </form>
        </div>
      )}

      {/* Teachers Grid */}
      <div className="card">
        <h3 style={{ 
          marginBottom: '2rem',
          fontSize: '1.8rem',
          color: '#667eea',
          fontWeight: '700'
        }}>
          👥 Current Teachers
        </h3>
        <div className="grid">
          {teachers.map(teacher => (
            <div key={teacher.id} className="feature-card" style={{ 
              background: 'linear-gradient(135deg, #667eea10, transparent)',
              border: '2px solid #667eea20',
              borderTop: '4px solid #667eea',
              padding: '2rem'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  margin: '0 auto 1rem',
                  color: 'white',
                  fontWeight: '700'
                }}>
                  {teacher.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.3rem', color: '#667eea', fontWeight: '700' }}>
                  {teacher.name}
                </h4>
                <p style={{ color: '#666', fontSize: '1rem' }}>🎵 {teacher.instrument}</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#666' }}>⏱️ Experience:</span>
                  <strong>{teacher.experience}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#666' }}>🎓 Students:</span>
                  <strong style={{ color: '#22c55e' }}>{teacher.students}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#666' }}>⭐ Rating:</span>
                  <strong style={{ color: '#f59e0b' }}>{teacher.rating}/5.0</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#666' }}>📧 Email:</span>
                  <span style={{ fontSize: '0.9rem' }}>{teacher.email}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#666' }}>📞 Phone:</span>
                  <span>{teacher.phone}</span>
                </div>
              </div>

              <div style={{ 
                padding: '0.75rem',
                borderRadius: '10px',
                background: teacher.status === 'Active' ? '#22c55e15' : '#ef444415',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{ 
                  color: teacher.status === 'Active' ? '#22c55e' : '#ef4444',
                  fontWeight: '700',
                  fontSize: '1.05rem'
                }}>
                  {teacher.status === 'Active' ? '✅' : '❌'} {teacher.status}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <button className="btn" style={{ 
                  padding: '0.75rem',
                  fontSize: '0.95rem',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)'
                }}>
                  View Details
                </button>
                <button className="btn btn-secondary" style={{ 
                  padding: '0.75rem',
                  fontSize: '0.95rem'
                }}>
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card" style={{ 
        marginTop: '2rem',
        background: 'linear-gradient(135deg, #f8f9ff, #fff0f8)'
      }}>
        <h3 style={{ 
          marginBottom: '1.5rem',
          fontSize: '1.8rem',
          color: '#667eea',
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
            <h4 style={{ color: '#667eea', fontWeight: '700', marginBottom: '0.5rem' }}>View Schedule</h4>
            <p>Check teacher schedules and availability</p>
          </Link>

          <Link to="/students" className="feature-card" style={{ 
            background: 'white',
            borderTop: '4px solid #22c55e',
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
            <h4 style={{ color: '#22c55e', fontWeight: '700', marginBottom: '0.5rem' }}>Manage Students</h4>
            <p>View and assign students to teachers</p>
          </Link>

          <Link to="/reports" className="feature-card" style={{ 
            background: 'white',
            borderTop: '4px solid #f59e0b',
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
            <h4 style={{ color: '#f59e0b', fontWeight: '700', marginBottom: '0.5rem' }}>Performance Reports</h4>
            <p>Analyze teacher effectiveness and outcomes</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
