export default function Events() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Events</h2>
        <button className="btn btn-primary">Create Event</button>
      </div>
      
      <div className="card">
        <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>
          No events yet. Create your first event to get started.
        </p>
      </div>
    </div>
  );
}
