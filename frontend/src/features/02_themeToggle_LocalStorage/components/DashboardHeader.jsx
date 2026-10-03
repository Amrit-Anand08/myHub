import UserSection from "./UserSection";

export default function DashboardHeader() {
  return (
    <section className="dashboard-header">
      <div className="dashboard-header-content">
        <p className="dashboard-label">PERSONAL DASHBOARD</p>

        <h1>Welcome back, Amrit 👋</h1>

        <p className="dashboard-description">
          Manage your preferences and personalize your experience.
        </p>
      </div>

      <UserSection />
    </section>
  );
}
