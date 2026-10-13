import { CircleUserRound, BellRing, Globe } from "lucide-react";
import { useState } from "react";
import SettingDetails from "../components/SettingDetails";

function SettingPage() {
  const [activeSetting, setActiveSetting] = useState(() =>
    window.innerWidth > 768 ? "account" : null,
  );
  return (
    <main className="dashboard settings-page">
      <aside className="settings-menu">
        <header className="dashboard-header">
          <h1>SETTINGS</h1>
        </header>

        <div className="settings-menu-sections">
          <button
            type="button"
            className={`section-item ${activeSetting === "account" ? "active" : ""}`}
            onClick={() =>
              setActiveSetting((current) =>
                current === "account" ? null : "account",
              )
            }
          >
            <span className="section-icon">
              <CircleUserRound />
            </span>
            <span className="section-name">Account</span>
          </button>

          <button
            type="button"
            className="section-item"
            onClick={() =>
              setActiveSetting((current) =>
                current === "notifications" ? null : "notifications",
              )
            }
          >
            <span className="section-icon">
              <BellRing />
            </span>
            <span className="section-name">Notifications</span>
          </button>

          <button
            type="button"
            className="section-item"
            onClick={() =>
              setActiveSetting((current) =>
                current === "language" ? null : "language",
              )
            }
          >
            <span className="section-icon">
              <Globe />
            </span>
            <span className="section-name">Languages</span>
          </button>
        </div>
      </aside>

      {activeSetting && (
        <section className="settings-content">
          <SettingDetails setting={activeSetting} />
        </section>
      )}
    </main>
  );
}

export default SettingPage;
