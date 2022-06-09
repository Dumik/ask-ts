import { ProfileContainer } from 'components/Profile';
import { PrivateLayout } from 'layouts';

export const ProfilePage = () => {
  return (
    <PrivateLayout>
      <ProfileContainer />
    </PrivateLayout>
  );
};
