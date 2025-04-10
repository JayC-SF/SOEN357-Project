import { BackendResponse } from './BackendResponse';
interface Message {
  isUser: boolean;
  content: string | BackendResponse;
  timestamp: Date;
}

export default Message;
