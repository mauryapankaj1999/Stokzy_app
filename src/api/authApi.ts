export const loginApi = async (data:any) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (
        data.email === 'admin@gmail.com' &&
        data.password === '123456'
      ) {

        resolve({
          success: true,
          token: 'DUMMY_TOKEN_123456789',
          user: {
            name: 'Pankaj',
            email: data.email,
          },
        });

      } else {

        reject({
          success: false,
          message: 'Invalid credentials',
        });

      }

    }, 1500);

  });

};