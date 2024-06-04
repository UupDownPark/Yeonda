import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/layout/Layout';
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const JoinPage = lazy(() => import('@/pages/JoinPage'));
const FindPassWordPage = lazy(() => import('@/pages/FindPassWordPage'));
const TutorialPage = lazy(() => import('@/pages/TutorialPage'));
const StatisticsPage = lazy(() => import('@/pages/StatisticsPage'));
const AnalysisPage = lazy(() => import('@/pages/AnalysisPage'));
const MyDiaryPage = lazy(() => import('@/pages/MyDiaryPage'));
const MyDiaryDetailPage = lazy(() => import('@/pages/MyDiaryDetailPage'));
const DiarySuggestionPage = lazy(() => import('@/pages/DiarySuggestionPage'));
const DiaryPopularPage = lazy(() => import('@/pages/DiaryPopularPage'));
const MyPage = lazy(() => import('@/pages/MyPage'));
const SettingPage = lazy(() => import('@/pages/SettingPage'));
const WithdrawalPage = lazy(() => import('@/pages/WithdrawalPage'));
const WriteDiaryPage = lazy(() => import('@/pages/WriteDiaryPage'));
const ChatListPage = lazy(() => import('@/pages/ChatListPage'));
const ChatDetailPage = lazy(() => import('./pages/ChatDetailPage'));
const ChatProfilePage = lazy(() => import('./pages/ChatProfilePage'));
const ErrorPage = lazy(() => import('@/pages/ErrorPage'));
const OthersDiaryPage = lazy(() => import('@/pages/OthersDiaryPage'));
const PreferencePage = lazy(() => import('@/pages/PreferencePage'));
const TagSetting = lazy(() => import('@/pages/TagSetting'));

const queryClient = new QueryClient();

/**
 * 라우터 설정 목록
 * path: 각 페이지의 경로
 * elemnet: 렌더링할 컴포넌트
 * showHeader: Header 표시 여부
 * chatHeader: 채팅전용 Header 표시 여부
 * showFooter: Footer 표시 여부
 * onlyLogo: Logo만 표시
 * value: 제목 값
 * backBtn: 뒤로가기 버튼 표시 여부
 * cancelStr: 취소 문자 표시 여부
 */
const routeList = [
  {
    path: '/',
    element: <TutorialPage />,
    showHeader: false,
    chatHeader: false,
    showFooter: false,
    onlyLogo: false,
    value: '박상하킹갓',
    backBtn: false,
    cancelStr: true,
  },
  {
    path: '/login',
    element: <LoginPage />,
    showHeader: true,
    showFooter: false,
    onlyLogo: true,
    backBtn: false,
  },
  {
    path: '/join',
    element: <JoinPage />,
    showHeader: true,
    showFooter: false,
    onlyLogo: true,
    value: '박상하킹갓',
    backBtn: false,
    cancelStr: true,
  },
  {
    path: '/find',
    element: <FindPassWordPage />,
    showHeader: true,
    showFooter: false,
    onlyLogo: true,
    value: '박상하킹갓',
    backBtn: false,
    cancelStr: true,
  },
  {
    path: '/admin/statistics',
    element: <StatisticsPage />,
    showHeader: true,
    showFooter: false,
    onlyLogo: true,
    value: '박상하킹갓',
    backBtn: false,
    cancelStr: true,
  },
  {
    path: '/admin/settings',
    element: <TagSetting />,
    showHeader: true,
    showFooter: false,
    onlyLogo: true,
    value: '박상하킹갓',
    backBtn: false,
    cancelStr: true,
  },
  {
    path: '/admin/analysis',
    element: <AnalysisPage />,
    showHeader: true,
    showFooter: false,
    onlyLogo: true,
    value: '박상하킹갓',
    backBtn: false,
    cancelStr: true,
  },
  {
    path: '/mydiary',
    element: <MyDiaryPage />,
    showFooter: true,
    onlyLogo: true,
    value: '내 일기',
    backBtn: false,
    cancelStr: false,
  },
  {
    path: '/mydiary/:id',
    element: <MyDiaryDetailPage />,
    showHeader: true,
    showFooter: true,
    onlyLogo: true,
    value: '박상하킹갓',
    backBtn: true,
    cancelStr: false,
  },
  {
    path: '/othersdiary',
    element: <OthersDiaryPage />,
    children: [
      { path: 'suggestion', element: <DiarySuggestionPage /> },
      { path: 'popular', element: <DiaryPopularPage /> },
    ],
    showHeader: true,
    showFooter: true,
    onlyLogo: true,
    value: '박상하킹갓',
    backBtn: false,
    cancelStr: true,
  },
  {
    path: '/mypage',
    element: <MyPage />,
    showHeader: true,
    showFooter: true,
    onlyLogo: false,
    setting: true,
    value: 'MyPage',
    backBtn: false,
    cancelStr: false,
  },
  {
    path: '/mypage/setting',
    element: <SettingPage />,
    showHeader: true,
    showFooter: false,
    onlyLogo: false,
    value: '설정',
    backBtn: true,
    cancelStr: false,
  },
  {
    path: '/mypage/setting/preference',
    element: <PreferencePage />,
    showHeader: true,
    showFooter: false,
    onlyLogo: false,
    value: '관심사',
    backBtn: true,
    cancelStr: false,
  },
  {
    path: '/withdrawal',
    element: <WithdrawalPage />,
    showHeader: true,
    showFooter: false,
    onlyLogo: true,
    value: '박상하킹갓',
    backBtn: true,
    cancelStr: false,
  },
  {
    path: '/writeDiary',
    element: <WriteDiaryPage />,
    showHeader: true,
    showFooter: true,
    onlyLogo: false,
    value: '일기 작성',
    backBtn: false,
    cancelStr: true,
    complete: true,
  },
  {
    path: '/chat',
    element: <ChatListPage />,
    showHeader: true,
    showFooter: true,
    value: '채팅',
    backBtn: true,
  },
  {
    path: '/chat/:id',
    element: <ChatDetailPage />,
    showHeader: false,
    chatHeader: true,
  },
  {
    path: '/chat/profile/:id',
    element: <ChatProfilePage />,
    showHeader: true,
    showFooter: true,
    value: '상세정보',
    backBtn: true,
  },
];

/**
 * router 설정
 */
const router = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: (
        <>
          {!item.path.includes('/admin') ? (
            <Layout
              showHeader={item.showHeader}
              chatHeader={item.chatHeader}
              showFooter={item.showFooter}
              onlyLogo={item.onlyLogo}
              value={item.value}
              backBtn={item.backBtn}
              cancelStr={item.cancelStr}
              setting={item.setting ? item.setting : null}
              complete={item.complete ? item.complete : null}
            >
              {item.element}
            </Layout>
          ) : (
            item.element
          )}
        </>
      ),
      errorElement: (
        <Layout showFooter={false}>
          <ErrorPage />
        </Layout>
      ),
    };
  }),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
