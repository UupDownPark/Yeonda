import { useChatList } from '@/hooks/chat/useChatList';
import ChatList from '@/components/chat/ChatList';

const ChatListPage = () => {
  const { chatList, error } = useChatList();

  return (
    <>
      <section>
        <p className='mb-[1.375rem] ml-[1.6rem] font-bold'>메세지</p>
      </section>
      <section>
        {error ? (
          <span className='-t absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 text-gray'>
            작성된 일기가 없습니다.
          </span>
        ) : (
          chatList.map((data) => (
            <ChatList
              key={data.couple_id}
              couple_id={data.couple_id}
              picture_url={data.picture_url}
              user2_id={data.user2_id}
              nickname={data.nickname}
              message={data.message}
              is_read={data.is_read}
              email={data.email}
              user1_id={data.user1_id}
            />
          ))
        )}
      </section>
    </>
  );
};

export default ChatListPage;
