export const authPaths = {
  '/auth/sign-in': {
    post: {
      tags: ['Authentication'],
      description: 'Parmito o acesso a conta.',
      responses: {
        '200': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AuthSignInOutputOK',
              },
            },
          },
        },
        '400': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/$400',
              },
            },
          },
        },
        '401': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/$401',
              },
            },
          },
        },
        '500': {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/$500',
              },
            },
          },
        },
      },
    },
  },
};

export const authSchemas = {
  AuthSignInOutputOK: {
    type: 'object',
    properties: {
      message: {
        type: 'string',
      },
      token: {
        type: 'string',
      },
      refreshToken: {
        type: 'string',
      },
    },
  },
};
