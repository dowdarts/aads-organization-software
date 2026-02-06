export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        <div className="card">
          <h3>Events</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#007bff' }}>0</p>
          <p style={{ color: '#666' }}>Total events</p>
        </div>
        
        <div className="card">
          <h3>Players</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#28a745' }}>0</p>
          <p style={{ color: '#666' }}>Total players</p>
        </div>
        
        <div className="card">
          <h3>Sponsors</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#ffc107' }}>0</p>
          <p style={{ color: '#666' }}>Total sponsors</p>
        </div>
        
        <div className="card">
          <h3>Forms</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#17a2b8' }}>0</p>
          <p style={{ color: '#666' }}>Total forms</p>
        </div>
      </div>
    </div>
  );
}
