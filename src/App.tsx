import reactLogo from '/handshake.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container text-center py-5">
      {/* Logo */}
      <div className="mb-4">
        <img
          src={reactLogo}
          className="img-fluid"
          alt="React logo"
          style={{ height: '10em', transition: 'filter 0.3s' }}
          onMouseOver={(e) =>
            (e.currentTarget.style.filter = 'drop-shadow(0 0 2em #61dafbaa)')
          }
          onMouseOut={(e) => (e.currentTarget.style.filter = 'none')}
        />
      </div>

      {/* Heading */}
      <h1 className="mb-4">Online Saving and Loan</h1>

      {/* Card Example */}
      <div className="card p-4 mx-auto shadow" style={{ maxWidth: '500px' }}>
        <p className="text-muted mb-0">
          Welcome to our online saving and loan platform.
        </p>
      </div>

    </div>
  )
}

export default App