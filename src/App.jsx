import Header from "./Header";
import Manager from "./Manager";
import Features from "./Features";
import Dowland from "./Dowland";
import Questions from "./Questions";
import Login from "./Login";
import Footer from "./Footer";
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Manager />
        <Features />
        <Dowland />
        <Questions />
        <Login />
      </main>
        <Footer />
    </>
  );
}
