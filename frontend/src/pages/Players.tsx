export default function Players() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Players</h2>
        <button className="btn btn-primary">Add Player</button>
      </div>
      
      <div className="card">
        <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>
          No players yet. Add players to start building your roster.
        </p>
      </div>
    </div>
  );
}
