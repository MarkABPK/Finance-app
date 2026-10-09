import { CircleUserRound, BellRing, Globe } from "lucide-react";

function SettingPage() {
  return (
    <main className="dashboard settings-page">
      <aside className="settings-menu">
        <header className="dashboard-header">
          <h1>SETTINGS</h1>
        </header>

        <div className="settings-menu-sections">
          <button type="button" className="section-item">
            <span className="section-icon">
              <CircleUserRound />
            </span>
            <span className="section-name">Account</span>
          </button>

          <button type="button" className="section-item">
            <span className="section-icon">
              <BellRing />
            </span>
            <span className="section-name">Notifications</span>
          </button>

          <button type="button" className="section-item">
            <span className="section-icon">
              <Globe />
            </span>
            <span className="section-name">Languages</span>
          </button>
        </div>
      </aside>

      <section className="settings-content">
        <header className="settings-content-header">
          <h1>Account</h1>
        </header>
        <div className="settings-content-body">
          <p>
            This is your account settings. You can update your personal
            information, change your password, and manage your account
            preferences here.
          </p>
        </div>
      </section>
    </main>
  );
}

export default SettingPage;
