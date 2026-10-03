import UserActions from "./UserActions";

export default function UserProfile() {
  return (
    <div className="user-profile">
      <div className="profile-info">
        <div className="profile-avatar">A</div>

        <div>
          <h3>Amrit</h3>
          <p>Computer Science Engineer</p>
        </div>
      </div>

      <div className="profile-details">
        <div className="profile-detail">
          <span>Role</span>
          <strong>Developer</strong>
        </div>

        <div className="profile-detail">
          <span>Status</span>
          <strong className="status">
            <span className="status-dot"></span>
            Active
          </strong>
        </div>
      </div>

      <UserActions />
    </div>
  );
}
