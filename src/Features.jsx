import { useState } from "react";
import pageObj from "./carts.json";

export default function Features() {
  const [page, setPage] = useState(pageObj[0]);
  const [active, setActive] = useState("tab-1");
  function uploadPage(pageName) {
    setPage(pageObj.find((e) => e["name"] == pageName));
  }
  return (
    <section id="features" className="features">
      <header className="introduction">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </header>
      <ul className="panel-pages">
        <li>
          <button
            className={active == "tab-1" ? "active-page" : ""}
            onClick={() => {
              setActive("tab-1");
              uploadPage("bookmarking");
            }}>
            Simple Bookmarking
          </button>
        </li>
        <li>
          <button
            className={active == "tab-2" ? "active-page" : ""}
            onClick={() => {
              setActive("tab-2");
              uploadPage("searching");
            }}>
            Speedy Searching
          </button>
        </li>
        <li>
          <button
            className={active == "tab-3" ? "active-page" : ""}
            onClick={() => {
              setActive("tab-3");
              uploadPage("sharing");
            }}>
            Easy Sharing
          </button>
        </li>
      </ul>
      <div className="page">
        <div>
          <img src={page["img"]} alt="decoration" />
        </div>
        <header>
          <h2>{page["title"]}</h2>
          <p>{page["paragraph"]}</p>
          <button className="std btn-blue">More info</button>
        </header>
      </div>
    </section>
  );
}
