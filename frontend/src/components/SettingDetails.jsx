const details = {
  account: {
    title: "Account",
    description:
      "This is your account settings. You can update your personal information, change your password, and manage your account preferences here.",
  },
  notifications: {
    title: "Notifications",
    description:
      "This is your notification settings. You can manage your notification preferences, such as email notifications, push notifications, and other communication preferences.",
  },
  language: {
    title: "Language",
    description:
      "This is your language settings. You can select your preferred language and manage your language preferences here.",
  },
};

function SettingDetails({ setting }) {
  const settingDetails = details[setting];

  if (!settingDetails) {
    return null;
  }
  return (
    <div className="settings-content-items">
      <header className="settings-content-header">
        <h1>{settingDetails.title}</h1>
      </header>

      <section className="settings-content-body">
        <p>{settingDetails.description}</p>
      </section>
    </div>
  );
}

export default SettingDetails;
