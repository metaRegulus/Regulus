import { Route, Routes, } from "react-router-dom";
import Main from "./page/Main";
import MainBottomNevber from "./components/main/MainBottomNavber.js";
import Login from "./page/login";
import Notice from "./page/Notice/Notice";
import NoticeDetail from "./page/Notice/NoticeDetail";
import AddNotice from "./page/Notice/AddNotice";
import ItTechnologyMain from './page/itTechnology/itTechnologyMain.js'; 
import ItTechnologyDetail from './page/itTechnology/ItTechnologyDetail.js';
import ItTrendMain from'./page/itTrend/itTrendMain.js';
import ItTrendDetail from "./page/itTrend/ITrendDetail.js";
import Register from "./page/Register";
import MyPageCommunityBoard from "./page/myPage/myPageBoard/myPageCommunityBoard";
import MyPageCommunityComment from "./page/myPage/myPageBoard/myPageCommunityComment";
import MyPageGroupRequest from "./page/myPage/myPageBoard/myPageGroupRequest";
import MyPageInformationModify from "./page/myPage/myPageBoard/myPageInformationModify";
import MyPageGroupBoard from "./page/myPage/myPageBoard/myPageGroupBoard";
import MyPageGroupComment from "./page/myPage/myPageBoard/myPageGroupComment";
import MainOnLogin from "./page/MainOnLogin"; 
import GroupMain from "./page/communityGroup/groupMain";
import GroupMainPost from "./page/communityGroup/groupMainPost";
import CommunicationMain from "./page/communityCommunication/communicationMain";
import CommunicationMainPost from "./page/communityCommunication/communicationMainPost";

const App = () => {
  
  return (   
    <div className="App">
    <Routes>
      {/* 메인 */}
      <Route index element={<Main />} />
      {/* 로그인 */}
      <Route path="/login" element={<Login />} />
      <Route path="/mainOnLogin" element={<MainOnLogin />} />
      {/* 회원가입 */}
      <Route path="/Register" element={<Register />} />
      {/* 공지사항 */}
      <Route path="/notice" element={<Notice />}/>
      <Route path="/notice/:no" element={<NoticeDetail/>}/>
      <Route path="/addNotice" element={<AddNotice/>}/>
      {/* IT 기술 */}
      <Route path="/itTech" element={<ItTechnologyMain/>} />
      <Route path="/itTech/:no" element={<ItTechnologyDetail/>} />
      {/* IT 트렌드 */}
      <Route path="/itTrend" element={<ItTrendMain/>} />
      <Route path="/itTrend/:no" element={<ItTrendDetail/>} />
      {/* My Page */}
      <Route path="/myPageCommunityBoard" element={<MyPageCommunityBoard />} />
      <Route path="/myPageCommunityComment" element={<MyPageCommunityComment />} />
      <Route path="/myPageGroupRequest" element={<MyPageGroupRequest />} />
      <Route path="/myPageInformationModify" element={<MyPageInformationModify />} />
      <Route path="/myPageGroupBoard" element={<MyPageGroupBoard />} />
      <Route path="/myPageGroupComment" element={<MyPageGroupComment />} />
      {/* 소통공간 */}
      <Route path='/groupMain' element={<GroupMain/>} /> 
      <Route path='/groupMainPost' element={<GroupMainPost/>} /> 
      <Route path='/communicationMain' element={<CommunicationMain/>} /> 
      <Route path='/communicationMainPost' element={<CommunicationMainPost/>} /> 

    </Routes>
    <MainBottomNevber />
     </div>
  );
};
export default App;