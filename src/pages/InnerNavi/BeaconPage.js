// src/pages/UnlockSearchPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import InnerNaviHeader from '../../components/InnerNaviPage/InnerNaviHeader';

function BeaconPage() {
  const navigate = useNavigate();

  return (
    <div className="unlock-page">
      <InnerNaviHeader title="문 정보 검색하기" onBack={() => navigate(-1)} />
      <div className="content">
        <p> 비콘 내용</p>
      </div>
    </div>
  );
}

export default BeaconPage;
