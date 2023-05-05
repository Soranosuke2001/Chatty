import {
  LoadingIndicator,
  Chat,
  ChannelList,
  Channel,
  Window,
  MessageInput,
  MessageList,
  ChannelHeader,
  ChannelListMessengerProps,
  useChatContext,
} from "stream-chat-react";
import { useLoggedInAuth } from "../context/AuthContext";

export function Home() {
  const { user, streamChat } = useLoggedInAuth();

  if (streamChat == null) return <LoadingIndicator />;

  return (
    <Chat client={streamChat}>
      <ChannelList
        List={Channels}
        sendChannelsToList
        filters={{ members: { $in: [user.id] } }}
      />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
      </Channel>
    </Chat>
  );
}

function Channels({ loadedChannels }: ChannelListMessengerProps) {
  const { setActiveChannel, channel: activeChannel } = useChatContext()

  return <div className='w-60 flex flex-col gap-4 m-3 h-full'>
    
  </div>
}
