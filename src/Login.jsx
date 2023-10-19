import { useState } from "react";

export default function Login() {
  const [inp, setInp] = useState(false);
  const [open, setOpen] = useState(true);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <header>
        <p>35,000+ ALREADY JOINED</p>
        <h2> Stay up-to-date with what we’re doing</h2>
      </header>
      <div>
        <label className={!open ? "valid" : ""} htmlFor="login-inp">
          <input
            onChange={(e) => {
              setOpen(true);
              setInp(e.target.checkValidity());
            }}
            placeholder="Enter your email address"
            required
            id="login-inp"
            type="email"
          />
          {!open && <small>Whoops, make sure it's an email</small>}
        </label>
        <button
          onClick={() => setOpen(inp)}
          className="std btn-red"
          type="submit">
          Contact Us
        </button>
      </div>
    </form>
  );
}
