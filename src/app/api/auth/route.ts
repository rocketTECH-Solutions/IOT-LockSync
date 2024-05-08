import { NextRequest, NextResponse } from 'next/server';

const user = [
  {
    email: 'r@r.com',
    password: '12345678',
    locations: [],
    devices: [],
  },
  {
    email: 'a@a.com',
    password: '12345678',
    locations: [],
    devices: [],
  },
];

export const POST = async (req: NextRequest) => {
  const { email, password } = await req?.json();

  if (!email || !password) {
    return NextResponse.json(
      {
        statusCode: 400,
        error: 'Invalid Credentials',
      },
      {
        status: 400,
      }
    );
  }

  const userExist = user.find(
    (item) => item.email === email && item.password === password
  );
  if (!userExist) {
    return NextResponse.json(
      {
        statusCode: 404,
        error: 'User Not Found',
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(
    {
      status: 200,
      data: userExist,
    },
    {
      status: 200,
    }
  );
};
