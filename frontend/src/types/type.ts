// Chat ================================================
export interface ChatMessage {
  id: number;
  user_id: number;
  message: string;
  picture_url: string;
  send_at: string;
  is_read: number;
  show_date: boolean;
}

export interface ChatMessageGetProps {
  partner_id: number;
  nickname: string;
  picture_url: string;
  user_id: number;
  chat: ChatMessage[];
}

export interface ChatMessageProps {
  message: string;
  sendAt: string;
  showDate: boolean;
  pictureUrl: string;
}

export interface ChatListProps {
  couple_id: number;
  is_read: number;
  message: string;
  nickname: string;
  picture_url: string;
  user2_id: number;
  user1_id: number;
  email: string;
}

export interface FetchOtherDiariesProps {
  currentPage: number;
  limit: number;
  userId: number;
}

// Diary ================================================

export interface Diary {
  id: number;
  nickname: string;
  picture_url: string;
  title: string;
  content: string;
  tags: Tag[];
  created_at?: string;
  likes?: number;
}

export interface FetchDiariesParams {
  currentPage: number;
  limit: number;
  sort: number;
}

export interface Tag {
  id: number;
  name: string;
}

export interface PreferData {
  distance: number;
  end_age: number;
  start_age: number;
  gender: string;
}

export type DiaryHeader = Pick<Diary, 'nickname' | 'picture_url'>;

export type DiaryContent = Omit<Diary, 'nickname' | 'picture_url'>;

export type DiaryChange = Pick<Diary, 'title' | 'content' | 'tags'>;
