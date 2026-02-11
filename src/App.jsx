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

      {/* Issue 2: Image without alt text */}
      <div className="a11y-test-section">
        <h2>Image Missing Alt Text</h2>
        <img src={reactLogo} />
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

      {/* Issue 6: Checkbox without proper labeling */}
      <div className="a11y-test-section">
        <h2>Unlabeled Checkbox</h2>
        <form>
          <input type="checkbox" />
          <span>Subscribe</span>
        </form>
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

      {/* Issue 12: Multiple H1s on page */}
      <div className="a11y-test-section">
        <h1>Another H1 Heading</h1>
        <p>Multiple H1s confuse assistive technology users.</p>
      </div>

      {/* Issue 13: Poor focus indicators */}
      <div className="a11y-test-section">
        <h2>Poor Focus Styles</h2>
        <button className="no-focus-button">No Focus Indicator</button>
        <a href="#" className="no-focus-link">Link Without Focus</a>
      </div>

      {/* Issue 14: Autoplaying media without controls */}
      <div className="a11y-test-section">
        <h2>Autoplaying Content</h2>
        <div className="autobanner">
          <marquee>🚨 This is automatically moving content 🚨</marquee>
        </div>
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
