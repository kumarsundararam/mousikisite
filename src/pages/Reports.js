import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Reports() {
  const [selectedReport, setSelectedReport] = useState('overview');

  const instrumentData = [
    { instrument: 'Piano', students: 45, color: '#667eea', emoji: '🎹' },
    { instrument: 'Guitar', students: 38, color: '#22c55e', emoji: '🎸' },
    { instrument: 'Violin', students: 22, color: '#ec4899', emoji: '🎻' },
    { instrument: 'Drums', students: 15, color: '#f59e0b', emoji: '🥁' },
    { instrument: 'Voice', students: 7, color: '#06b6d4', emoji: '🎤' }
  ];

  return (
    <div className="page">
      <div className="card hero-animated" style={{ 
        background: 'linear-gradient(135deg, #ec4899 0%, #db2777 50%, #f472b6 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '2rem'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '800', color: 'white' }}>
            📊 Reports & Analytics
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, fontWeight: '300' }}>
            Track performance, analyze trends, and make data-driven decisions
          </p>
        </div>
        <div className="wave-background"></div>
      </div>

      <div className="grid" style={{ marginBottom: '2rem' }}>
        <div className="stats-card" style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.15)', border: '2px solid #667eea20' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎓</div>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: '#667eea', marginBottom: '0.5rem' }}>127</div>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: '600', marginBottom: '0.5rem' }}>Total Students</p>
          <p style={{ color: '#22c55e', fontSize: '0.95rem' }}>↑ 8 new this month</p>
        </div>
        <div className="stats-card" style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 40px rgba(34, 197, 94, 0.15)', border: '2px solid #22c55e20' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>👨‍🏫</div>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: '#22c55e', marginBottom: '0.5rem' }}>12</div>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: '600', marginBottom: '0.5rem' }}>Active Teachers</p>
          <p style={{ color: '#666', fontSize: '0.95rem' }}>All teaching this week</p>
        </div>
        <div className="stats-card" style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 40px rgba(245, 158, 11, 0.15)', border: '2px solid #f59e0b20' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📅</div>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: '#f59e0b', marginBottom: '0.5rem' }}>342</div>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: '600', marginBottom: '0.5rem' }}>Lessons This Month</p>
          <p style={{ color: '#22c55e', fontSize: '0.95rem' }}>↑ 96% attendance rate</p>
        </div>
      </div>

      <div className="card" style={{ background: 'linear-gradient(to bottom, #f8f9ff, #ffffff)' }}>
        <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: '#ec4899', fontWeight: '700' }}>
          🎵 Enrollment by Instrument
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {instrumentData.map(item => (
            <div key={item.instrument} className="feature-card" style={{ 
              padding: '1.5rem',
              background: `linear-gradient(135deg, ${item.color}10, transparent)`,
              border: `2px solid ${item.color}20`,
              borderLeft: `6px solid ${item.color}`
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '2.5rem' }}>{item.emoji}</div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#333', marginBottom: '0.25rem' }}>
                      {item.instrument}
                    </h4>
                    <p style={{ color: '#666', fontSize: '0.95rem', margin: 0 }}>
                      {item.students} students ({((item.students / 127) * 100).toFixed(1)}%)
                    </p>
                  </div>
                </div>
                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: '900', 
                  color: item.color 
                }}>
                  {item.students}
                </div>
              </div>
              <div style={{ 
                height: '12px', 
                background: '#f0f0f0', 
                borderRadius: '6px',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  height: '100%', 
                  width: `${(item.students / 127) * 100}%`, 
                  background: `linear-gradient(90deg, ${item.color}, ${item.color}dd)`,
                  transition: 'width 0.5s ease'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: '#ec4899', fontWeight: '700' }}>
          📈 Student Progress Overview
        </h3>
        <div className="grid">
          {[
            { level: 'Beginner', students: 54, percentage: 42.5, progress: 'Good', color: '#22c55e', emoji: '🌱' },
            { level: 'Intermediate', students: 48, percentage: 37.8, progress: 'Excellent', color: '#f59e0b', emoji: '🌿' },
            { level: 'Advanced', students: 25, percentage: 19.7, progress: 'Outstanding', color: '#ec4899', emoji: '🌳' }
          ].map(item => (
            <div key={item.level} className="feature-card" style={{ 
              textAlign: 'center',
              background: `linear-gradient(135deg, ${item.color}10, transparent)`,
              borderTop: `4px solid ${item.color}`,
              padding: '2rem'
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{item.emoji}</div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: '700', color: item.color, marginBottom: '1rem' }}>
                {item.level}
              </h4>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: item.color, marginBottom: '0.5rem' }}>
                {item.students}
              </div>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1rem' }}>
                students ({item.percentage}%)
              </p>
              <div style={{ 
                padding: '0.75rem',
                borderRadius: '10px',
                background: `${item.color}15`,
                fontWeight: '700',
                color: item.color
              }}>
                ✨ {item.progress}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem', background: 'linear-gradient(135deg, #fff0f8, #f0fff8)' }}>
        <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: '#ec4899', fontWeight: '700' }}>
          💡 Performance Insights
        </h3>
        <div className="grid">
          <div className="feature-card" style={{ background: 'white', borderLeft: '4px solid #22c55e', padding: '1.5rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
            <h4 style={{ color: '#22c55e', fontWeight: '700', marginBottom: '0.5rem' }}>Attendance</h4>
            <p style={{ fontSize: '2rem', fontWeight: '900', color: '#22c55e', marginBottom: '0.5rem' }}>96%</p>
            <p>Average attendance rate across all lessons</p>
          </div>
          <div className="feature-card" style={{ background: 'white', borderLeft: '4px solid #667eea', padding: '1.5rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⭐</div>
            <h4 style={{ color: '#667eea', fontWeight: '700', marginBottom: '0.5rem' }}>Satisfaction</h4>
            <p style={{ fontSize: '2rem', fontWeight: '900', color: '#667eea', marginBottom: '0.5rem' }}>4.8/5</p>
            <p>Average student & parent satisfaction rating</p>
          </div>
          <div className="feature-card" style={{ background: 'white', borderLeft: '4px solid #f59e0b', padding: '1.5rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📈</div>
            <h4 style={{ color: '#f59e0b', fontWeight: '700', marginBottom: '0.5rem' }}>Progress Rate</h4>
            <p style={{ fontSize: '2rem', fontWeight: '900', color: '#f59e0b', marginBottom: '0.5rem' }}>87%</p>
            <p>Students meeting or exceeding progress goals</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem', background: 'linear-gradient(to bottom, #f8f9ff, #ffffff)', border: '2px solid #ec489920' }}>
        <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: '#ec4899', fontWeight: '700' }}>
          📄 Generate Custom Report
        </h3>
        <div style={{ maxWidth: '600px' }}>
          <div className="form-group">
            <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>📋</span> Report Type
            </label>
            <select style={{ fontSize: '1rem' }}>
              <option>Revenue Report</option>
              <option>Attendance Report</option>
              <option>Student Progress Report</option>
              <option>Teacher Performance Report</option>
              <option>Instrument Popularity Report</option>
              <option>Retention Analysis</option>
            </select>
          </div>
          <div className="form-group">
            <label style={{ fontSize: '1.05rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>📆</span> Date Range
            </label>
            <select style={{ fontSize: '1rem' }}>
              <option>This Week</option>
              <option>This Month</option>
              <option>Last 3 Months</option>
              <option>This Year</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn" style={{ 
              flex: 1,
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #ec4899, #db2777)'
            }}>
              ✅ Generate Report
            </button>
            <button className="btn btn-secondary" style={{ padding: '1rem 2rem' }}>
              📥 Export
            </button>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem', background: 'linear-gradient(135deg, #fff0f8, #f8f9ff)' }}>
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem', color: '#ec4899', fontWeight: '700' }}>⚡ Quick Actions</h3>
        <div className="grid">
          <Link to="/students" className="feature-card" style={{ background: 'white', borderTop: '4px solid #22c55e', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
            <h4 style={{ color: '#22c55e', fontWeight: '700', marginBottom: '0.5rem' }}>Student Analytics</h4>
            <p>View detailed student performance</p>
          </Link>
          <Link to="/teachers" className="feature-card" style={{ background: 'white', borderTop: '4px solid #667eea', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👨‍🏫</div>
            <h4 style={{ color: '#667eea', fontWeight: '700', marginBottom: '0.5rem' }}>Teacher Reports</h4>
            <p>Analyze teacher effectiveness</p>
          </Link>
          <Link to="/billing" className="feature-card" style={{ background: 'white', borderTop: '4px solid #f59e0b', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💳</div>
            <h4 style={{ color: '#f59e0b', fontWeight: '700', marginBottom: '0.5rem' }}>Financial Reports</h4>
            <p>Revenue and payment analytics</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Reports;
