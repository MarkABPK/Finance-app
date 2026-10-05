import {
  Home,
  CircleUserRound,
  BellRing,
  Globe,
  CircleChevronRight,
} from "lucide-react";

function SettingPage() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>SETTINGS</h1>
      </header>
      <section className="section-list">
        <button type="button" className="section-item">
          <span className="section-icon">
            <Home />
          </span>
          <span className="section-name">Home</span>
          <CircleChevronRight className="section-chevron" />
        </button>

        <button type="button" className="section-item">
          <span className="section-icon">
            <CircleUserRound />
          </span>
          <span className="section-name">Account</span>
          <CircleChevronRight className="section-chevron" />
        </button>

        <button type="button" className="section-item">
          <span className="section-icon">
            <BellRing />
          </span>
          <span className="section-name">Notifications</span>
          <CircleChevronRight className="section-chevron" />
        </button>

        <button type="button" className="section-item">
          <span className="section-icon">
            <Globe />
          </span>
          <span className="section-name">Languages</span>
          <CircleChevronRight className="section-chevron" />
        </button>
      </section>
    </main>
  );
}
export default SettingPage;
