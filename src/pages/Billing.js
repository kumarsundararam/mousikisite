import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Billing() {
  const [invoices, setInvoices] = useState([
    { id: 'INV-001', student: 'Emma Williams', amount: 240, dueDate: '2026-01-15', status: 'Paid', paidDate: '2026-01-10', method: 'Card' },
    { id: 'INV-002', student: 'Noah Brown', amount: 180, dueDate: '2026-01-20', status: 'Pending', paidDate: null, method: 'Pending' },
    { id: 'INV-003', student: 'Olivia Davis', amount: 240, dueDate: '2026-01-18', status: 'Overdue', paidDate: null, method: 'Pending' },
    { id: 'INV-004', student: 'Liam Martinez', amount: 200, dueDate: '2026-01-22', status: 'Paid', paidDate: '2026-01-21', method: 'Bank Transfer' },
    { id: 'INV-005', student: 'Emma Williams', amount: 240, dueDate: '2026-02-15', status: 'Pending', paidDate: null, method: 'Pending' }
  ]);

  const totalRevenue = invoices.filter(i => i.status === 'Paid').reduce((sum, i) => sum + i.amount, 0);
  const pendingAmount = invoices.filter(i => i.status === 'Pending').reduce((sum, i) => sum + i.amount, 0);
  const overdueAmount = invoices.filter(i => i.status === 'Overdue').reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="page">
      {/* Hero Section */}
      <div className="card hero-animated" style={{ 
        background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 50%, #fb923c 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '2rem'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '800', color: 'white' }}>
                💳 Billing & Payments
              </h1>
              <p style={{ fontSize: '1.1rem', opacity: 0.9, fontWeight: '300' }}>
                Manage invoices, track payments, and monitor revenue
              </p>
            </div>
            <button className="btn btn-creative" style={{ background: 'white', color: '#f59e0b', fontWeight: '700', padding: '1rem 2rem', fontSize: '1.1rem' }}>
              + Create Invoice
            </button>
          </div>
        </div>
        <div className="wave-background"></div>
      </div>

      {/* Stats Cards */}
      <div className="grid" style={{ marginBottom: '2rem' }}>
        <div className="stats-card" style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 40px rgba(34, 197, 94, 0.15)', border: '2px solid #22c55e20' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>💰</div>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: '#22c55e', marginBottom: '0.5rem' }}>${totalRevenue.toLocaleString()}</div>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: '600', marginBottom: '0.5rem' }}>Revenue This Month</p>
          <p style={{ color: '#22c55e', fontSize: '0.95rem' }}>↑ 12% from last month</p>
        </div>
        <div className="stats-card" style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 40px rgba(245, 158, 11, 0.15)', border: '2px solid #f59e0b20' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>⏳</div>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: '#f59e0b', marginBottom: '0.5rem' }}>${pendingAmount.toLocaleString()}</div>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: '600', marginBottom: '0.5rem' }}>Pending</p>
          <p style={{ color: '#666', fontSize: '0.95rem' }}>{invoices.filter(i => i.status === 'Pending').length} unpaid invoices</p>
        </div>
        <div className="stats-card" style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 40px rgba(239, 68, 68, 0.15)', border: '2px solid #ef444420' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>⚠️</div>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: '#ef4444', marginBottom: '0.5rem' }}>${overdueAmount.toLocaleString()}</div>
          <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: '600', marginBottom: '0.5rem' }}>Overdue</p>
          <p style={{ color: '#ef4444', fontSize: '0.95rem' }}>{invoices.filter(i => i.status === 'Overdue').length} overdue invoices</p>
        </div>
      </div>

      {/* Invoices Grid */}
      <div className="card">
        <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: '#f59e0b', fontWeight: '700' }}>
          📄 Recent Invoices ({invoices.length})
        </h3>
        <div className="grid">
          {invoices.map(invoice => (
            <div key={invoice.id} className="feature-card" style={{ 
              background: `linear-gradient(135deg, ${
                invoice.status === 'Paid' ? '#22c55e10' : 
                invoice.status === 'Overdue' ? '#ef444410' : '#f59e0b10'
              }, transparent)`,
              border: `2px solid ${
                invoice.status === 'Paid' ? '#22c55e20' : 
                invoice.status === 'Overdue' ? '#ef444420' : '#f59e0b20'
              }`,
              borderTop: `4px solid ${
                invoice.status === 'Paid' ? '#22c55e' : 
                invoice.status === 'Overdue' ? '#ef4444' : '#f59e0b'
              }`,
              padding: '2rem'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#333', marginBottom: '0.25rem' }}>{invoice.id}</h4>
                    <p style={{ color: '#666', fontSize: '0.95rem' }}>🎓 {invoice.student}</p>
                  </div>
                  <div style={{ 
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    background: invoice.status === 'Paid' ? '#22c55e15' : invoice.status === 'Overdue' ? '#ef444415' : '#f59e0b15',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    color: invoice.status === 'Paid' ? '#22c55e' : invoice.status === 'Overdue' ? '#ef4444' : '#f59e0b'
                  }}>
                    {invoice.status === 'Paid' ? '✅' : invoice.status === 'Overdue' ? '❌' : '⏳'} {invoice.status}
                  </div>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: invoice.status === 'Paid' ? '#22c55e' : invoice.status === 'Overdue' ? '#ef4444' : '#f59e0b' }}>
                    ${invoice.amount}
                  </div>
                </div>

                <div style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#666' }}>📅 Due Date:</span>
                    <strong>{new Date(invoice.dueDate).toLocaleDateString()}</strong>
                  </div>
                  {invoice.paidDate && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ color: '#666' }}>✅ Paid Date:</span>
                      <strong style={{ color: '#22c55e' }}>{new Date(invoice.paidDate).toLocaleDateString()}</strong>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#666' }}>💳 Method:</span>
                    <strong>{invoice.method}</strong>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <button className="btn" style={{ padding: '0.75rem', fontSize: '0.95rem', background: 'linear-gradient(135deg, #f59e0b, #ea580c)' }}>
                  View Details
                </button>
                <button className="btn btn-secondary" style={{ padding: '0.75rem', fontSize: '0.95rem' }}>
                  {invoice.status === 'Paid' ? 'Receipt' : 'Send Reminder'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="card" style={{ marginTop: '2rem', background: 'linear-gradient(to bottom, #fff8f0, #ffffff)' }}>
        <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem', color: '#f59e0b', fontWeight: '700' }}>
          💳 Accepted Payment Methods
        </h3>
        <div className="grid">
          <div className="feature-card" style={{ background: 'white', borderTop: '4px solid #667eea', padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>💳</div>
            <h4 style={{ color: '#667eea', marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: '700' }}>Credit/Debit Card</h4>
            <p>Accept all major cards securely</p>
          </div>
          <div className="feature-card" style={{ background: 'white', borderTop: '4px solid #22c55e', padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🏦</div>
            <h4 style={{ color: '#22c55e', marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: '700' }}>Bank Transfer</h4>
            <p>Direct bank payments & ACH</p>
          </div>
          <div className="feature-card" style={{ background: 'white', borderTop: '4px solid #f59e0b', padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>💵</div>
            <h4 style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: '700' }}>Cash</h4>
            <p>In-person cash payments</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card" style={{ marginTop: '2rem', background: 'linear-gradient(135deg, #fff8f0, #fff0f8)' }}>
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem', color: '#f59e0b', fontWeight: '700' }}>⚡ Quick Actions</h3>
        <div className="grid">
          <Link to="/students" className="feature-card" style={{ background: 'white', borderTop: '4px solid #22c55e', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
            <h4 style={{ color: '#22c55e', fontWeight: '700', marginBottom: '0.5rem' }}>Student Payments</h4>
            <p>View payment history per student</p>
          </Link>
          <Link to="/reports" className="feature-card" style={{ background: 'white', borderTop: '4px solid #ec4899', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
            <h4 style={{ color: '#ec4899', fontWeight: '700', marginBottom: '0.5rem' }}>Revenue Reports</h4>
            <p>Analyze financial performance</p>
          </Link>
          <Link to="/schedule" className="feature-card" style={{ background: 'white', borderTop: '4px solid #06b6d4', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
            <h4 style={{ color: '#06b6d4', fontWeight: '700', marginBottom: '0.5rem' }}>Billing Schedule</h4>
            <p>Set up recurring billing</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Billing;
