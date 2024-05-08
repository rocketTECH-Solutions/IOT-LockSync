import { FetchApi } from '@/common/helper/api';
import { LoginInterface } from '../(model-interface)/model';
import { toast } from 'sonner';

export const loginAction = async (data: LoginInterface) => {
  try {
    const res = await FetchApi.request('/api/auth', {
      method: 'POST',
      data,
    });
    if (res?.status === 200) {
      toast.success('Logged In');
      localStorage.setItem('user', JSON.stringify(res?.data));
    } else {
      toast.error(JSON.stringify(res?.error?.error));
    }

    return res;
  } catch (error: any) {
    toast.error(error.message);
  }
};
