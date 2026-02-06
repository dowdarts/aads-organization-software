export default function Sponsors() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Sponsors</h2>
        <button className="btn btn-primary">Add Sponsor</button>
      </div>
      
      <div className="card">
        <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>
          No sponsors yet. Start scouting and adding sponsors.
        </p>
      </div>
    </div>
  );
}
