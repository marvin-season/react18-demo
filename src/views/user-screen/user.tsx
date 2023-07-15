interface User {
  id: string | number;
  name: string;
  address: string;
  [hh: string]: string | number;
}

interface UserProps {
  user: User;
}

const UserComp = ({ user }: UserProps) => {
  return (
    <>
      <div>
        {user.id} == {user.name}
      </div>
    </>
  );
};

export default UserComp;
