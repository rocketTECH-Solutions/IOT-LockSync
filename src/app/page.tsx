'use client';
import { useStorage } from '@/common/hooks/useLocalStorage';

export default function Home() {
  const { getItem } = useStorage();
  const data = getItem('user');
  return <div>Logged in user a - {data?.email || ''}</div>;
}
