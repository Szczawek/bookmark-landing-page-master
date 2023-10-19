import obj from "./question.json"
import Creator from "./que-container/Creator";
export default function Questions() {
  return (
    <section className="questions">
      <header className="introduction">
        <h2> Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </header>
      <div className="questions-container">
        {obj.map((e,index) => {
            return <Creator obj={e} key={index} />
        })}
      </div>
      <button className="que-btn btn-blue std">More info</button>
    </section>
  );
}
