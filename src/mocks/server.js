import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// mocking server create
export const server = setupServer(...handlers);
