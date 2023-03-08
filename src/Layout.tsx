import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

export default function Layout() {
  return (
    <>
      <main>
        {/* Header */}
        <header className="header">
          <Header />
        </header>

        {/* Content */}
        <div className="content px-4 flex">
          <div className="sidebar flex-none w-44 rounded-r-3xl shadow-xxl">
            <Menu />
          </div>

          <div className="container mx-auto px-4 grow flex-auto">Container</div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <Footer />
        </footer>
      </main>
    </>
  );
}
