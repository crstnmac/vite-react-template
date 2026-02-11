import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Choo Choo! This is an example of a Vite + React app running on Railway.</p>
      </div>
      <button className="inaccessible-button">Click Me</button>
      
      {/* Accessibility Issues Below */}
      
      {/* Issue 1: Image without alt text */}
      <div className="a11y-test-section">
        <h2>Image Without Alt Text</h2>
        <img src={reactLogo} />
      </div>
      
      {/* Issue 2: Empty link */}
      <div className="a11y-test-section">
        <a href="#" className="empty-link">Click Here</a>
      </div>
      
      {/* Issue 3: Invalid heading hierarchy */}
      <div className="a11y-test-section">
        <h1>Invalid Heading Hierarchy</h1>
        <h3>This should be h2 not h3</h3>
        <p>Skipping h2 is an accessibility violation</p>
      </div>
      
      {/* Issue 4: Input without label */}
      <div className="a11y-test-section">
        <input type="text" placeholder="Enter your name" />
        <button className="submit-button">Submit</button>
      </div>
      
      {/* Issue 5: Button without accessible name */}
      <div className="a11y-test-section">
        <button className="icon-button">★</button>
      </div>
      
      {/* Issue 6: Missing form attributes */}
      <div className="a11y-test-section">
        <form>
          <input type="checkbox" />
          <span>Subscribe to newsletter</span>
        </form>
      </div>
      
      {/* Issue 7: Poor color contrast link */}
      <div className="a11y-test-section">
        <a href="#" className="low-contrast-link">This link has poor contrast</a>
      </div>
      
      {/* Issue 8: Missing lang attribute on HTML would be caught here */}
      <div className="a11y-test-section">
        <h1>Document Without Language</h1>
        <p>This page might be missing proper language declaration</p>
      </div>
    </>
  )
}

export default App
