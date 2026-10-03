import UserProfile from "./UserProfile";

export default function UserSection() {
  return (
    <section className="user-section">
      <div className="section-heading">
        <span className="section-number">01</span>

        <div>
          <h2>User Preferences</h2>

          <p>Customize your dashboard according to your preference.</p>
        </div>
      </div>

      <UserProfile />
    </section>
  );
}
