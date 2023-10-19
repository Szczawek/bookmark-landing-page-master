export default function Manager() {
  return (
    <section className="introduce">
      <header>
        <h1>
          A Simple Bookmark <br /> Manager
        </h1>
        <p className="description">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="panel">
          <button className="btn-blue std">Get it on Chrome</button>
          <button className="std">Get it on Firefox</button>
        </div>
      </header>
      <div className="img-container">
        <img src="./images/illustration-hero.svg" alt="decoration" />
      </div>
    </section>
  );
}
