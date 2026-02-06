export default function Forms() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Forms</h2>
        <button className="btn btn-primary">Create Form</button>
      </div>
      
      <div className="card">
        <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>
          No forms yet. Create questionnaires, registration forms, and more.
        </p>
      </div>
    </div>
  );
}
