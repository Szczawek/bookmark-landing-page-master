export default function Dowland() {
  return (
    <section id="pricing" className="dowland">
      <header className="introduction">
        <h2>Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </header>
      <div className="browsers">
        <div className="browser-card">
          <header>
            <img src="images/logo-chrome.svg" alt="Chrome browser" />
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
          </header>
          <hr className="decoration" />
          <button className="btn-blue std">Add & Install Extension</button>
        </div>
        <div className="browser-card">
          <header>
            <img src="images/logo-firefox.svg" alt="Firefox browser" />
            <h3>Add to Firefox</h3>
            <p>Minimum version 55</p>
          </header>
          <hr className="decoration" />
          <button className="btn-blue std">Add & Install Extension</button>
        </div>
        <div className="browser-card">
          <header>
            <img src="images/logo-opera.svg" alt="Opera browser" />
            <h3>Add to Opera</h3>
            <p>Minimum version 46</p>
          </header>
          <hr className="decoration" />
          <button className="btn-blue std">Add & Install Extension</button>
        </div>
      </div>
    </section>
  );
}
