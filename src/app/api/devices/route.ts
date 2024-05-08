import { NextRequest, NextResponse } from 'next/server';

const devices = [
  {
    id: 1,
    name: 'Device 1',
  },
  {
    id: 2,
    name: 'Device 2',
  },
  {
    id: 3,
    name: 'Device 3',
  },
];

export const GET = async () => {
  return NextResponse.json(
    {
      status: 200,
      data: devices,
    },
    {
      status: 200,
    }
  );
};
