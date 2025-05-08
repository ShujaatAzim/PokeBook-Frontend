const url = import.meta.env.NODE_ENV === 'production'
    ? 'https://pb-backend.shujaatazim.com'
    : 'http://localhost:3000';
// where does it get this info?
export default url;
