import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileFirstName = (state: StateSchema) => state.profile?.profileData?.firstName || '';