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

      {/* New Accessibility Issues for Testing */}

      {/* Issue 1: Button with no text content and no aria-label */}
      <div className="a11y-test-section">
        <h2>Button Without Accessible Name</h2>
        <button className="icon-only-button">⭐</button>
      </div>

      {/* Issue 3: Link with poor color contrast */}
      <div className="a11y-test-section">
        <h2>Low Contrast Link</h2>
        <a href="#" className="low-contrast-link">This link is hard to read</a>
      </div>

      {/* Issue 4: Invalid heading hierarchy */}
      <div className="a11y-test-section">
        <h1>Heading Hierarchy Issue</h1>
        <h3>Skipped H2 - this should be H2</h3>
        <p>Invalid heading structure affects screen reader users.</p>
      </div>

      {/* Issue 5: Form input without label */}
      <div className="a11y-test-section">
        <h2>Input Without Label</h2>
        <input type="text" placeholder="Your name" />
        <button>Submit</button>
      </div>

      {/* Issue 7: Empty link */}
      <div className="a11y-test-section">
        <h2>Empty Link</h2>
        <a href="#" className="empty-link"></a>
      </div>

      {/* Issue 8: Button with no visible text and no aria-label */}
      <div className="a11y-test-section">
        <h2>Icon Button Without Labels</h2>
        <button className="icon-btn">💾</button>
        <button className="icon-btn">🗑️</button>
        <button className="icon-btn">✏️</button>
      </div>

      {/* Issue 9: Select without label */}
      <div className="a11y-test-section">
        <h2>Select Without Label</h2>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>

      {/* Issue 10: Non-semantic buttons */}
      <div className="a11y-test-section">
        <h2>Divs Used as Buttons</h2>
        <div className="fake-button" role="button">Click Me</div>
        <div className="fake-button" role="button" onClick={() => {}}>Fake Button 2</div>
      </div>

      {/* Issue 11: Missing required attributes */}
      <div className="a11y-test-section">
        <h2>Input Missing Required Attributes</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" />
      </div>

      {/* Issue 15: Table without caption and headers */}
      <div className="a11y-test-section">
        <h2>Table Without Semantics</h2>
        <table className="no-headers-table">
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
            </tr>
            <tr>
              <td>Data 3</td>
              <td>Data 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
<!-- Test comment to trigger webhook -->
<!-- Another test comment to retrigger webhook -->
<!-- Debug webhook with better logging -->
<!-- Final test with debug logging -->
<!-- Another webhook trigger test -->
<!-- Test with Playwright installed -->
<<!-- Ready for Playwright scan -->
<!-- Ready for Dokploy rebuild -->
<!-- Test after Playwright global install fix -->
<!-- Test with BrowserBase support -->
