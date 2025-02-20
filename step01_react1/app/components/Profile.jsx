const Profile = (props) => {
    const {name, email} = props;
  return (
    <div>
        <div>Profile</div>
        <div>{name}</div>
        <div>{email}</div>
    </div>
  )
}

export default Profile