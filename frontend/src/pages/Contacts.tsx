export default function Contacts() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Contacts</h2>
        <button className="btn btn-primary">Add Contact</button>
      </div>
      
      <div className="card">
        <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>
          No contacts yet. Add contacts to manage your network.
        </p>
      </div>
    </div>
  );
}
