import axios from 'axios';

export default axios.create({
  baseURL: 'https://70c5b72c-65db-4a66-ba01-3e14763157e8.mock.pstmn.io/',
  timeout: 5000,
});
