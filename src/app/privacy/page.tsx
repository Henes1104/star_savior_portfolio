'use client';

import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">개인정보처리방침</h1>
      <div className="max-w-3xl w-full bg-gray-800 p-8 rounded-lg shadow-lg leading-relaxed">
        <p className="mb-4">
          ㈜스튜디오비사이드 (이하 ‘회사’)는 이용자의 개인정보를 중요시하며 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라 본 개인정보처리방침을 통해 개인정보의 수집, 이용, 제공, 파기와 같은 개인정보 처리 현황과 이용자의 개인정보 보호를 위한 조치에 관한 사항, 이용자의 권리 행사 방법과 같이 개인정보 처리에 대한 전반적인 사항을 안내 드립니다. 본 개인정보처리방침은 회사가 제공하는 게임(스타세이비어) 및 제반서비스에 적용됩니다
        </p>

        <h2 className="text-2xl font-semibold mb-4">제1조 개인정보의 처리 목적</h2>
        <p className="mb-4">
          1. 회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>고지 사항 전달, 불만 처리 등을 위한 원활한 의사 소통 경로의 확보</li>
          <li>유료정보 이용에 대한 문의 처리 및 계약 이행 분쟁 처리, 결제 환불 등 고객 서비스 제공</li>
          <li>게임 내 플레이 및 커뮤니티 서비스 지원</li>
          <li>마케팅 및 광고 활용 목적
            <ul className="list-circle list-inside ml-4">
              <li>신규 서비스 이벤트 정보 안내</li>
              <li>신작 출시 및 업데이트 등의 게임 서비스 소식</li>
              <li>회사의 자체 채널을 이용한 각종 프로모션 및 이벤트 정보 등의 안내</li>
              <li>서비스 품질 향상 및 통계 정보 처리</li>
              <li>경품 등의 배송에 대한 정확한 배송지의 확보</li>
            </ul>
          </li>
          <li>기타 컨텐츠 제공 및 인증 서비스</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">제2조 개인정보의 처리 및 보유 기간</h2>
        <p className="mb-4">
          1. 회사는 이용자로부터 개인정보 수집 시에 동의 받은 개인정보 보유·이용기간 또는 법령에 따른 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>이용자 관리, 서비스 이용: 탈퇴 요청 후 30일(1개월)간 보유(게임 탈퇴 시 소비자 불만, 분쟁 해결 및 개인정보 도용으로 원치 않는 탈퇴 등을 해결하기 위해)</li>
          <li>이벤트 진행: 이벤트 보상 지급 완료 후 3개월까지 보유</li>
          <li>관련 법령에 따른 개인정보 보유
            <ul className="list-circle list-inside ml-4">
              <li>전자상거래 등에서의 소비자보호에 관한 법률
                <ul className="list-square list-inside ml-4">
                  <li>표시/광고에 관한 기록: 6개월</li>
                  <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
                  <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
                  <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
                </ul>
              </li>
              <li>통신비밀보호법
                <ul className="list-square list-inside ml-4">
                  <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
                  <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">제3조 처리하는 개인정보의 항목</h2>
        <p className="mb-4">
          1. 회사는 서비스 제공을 위하여 필요한 정보를 아래와 같은 목적으로 필수/선택 정보로 구분하여 이용자의 동의를 얻은 후 수집하고 있습니다. 아래의 목적으로 수집되는 정보들은 해당 서비스 이용 및 이용자가 정보를 직접 입력하거나 이벤트/마케팅에 참여하는 과정에서 수집됩니다.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-gray-700 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-gray-600 text-left">구분</th>
                <th className="px-4 py-2 border-b border-gray-600 text-left">수집. 이용목적</th>
                <th className="px-4 py-2 border-b border-gray-600 text-left">필수/선택</th>
                <th className="px-4 py-2 border-b border-gray-600 text-left">수집 항목</th>
                <th className="px-4 py-2 border-b border-gray-600 text-left">보유기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">플랫폼 공통</td>
                <td className="px-4 py-2 border-b border-gray-600">이용자 식별, 게임 서비스 운영</td>
                <td className="px-4 py-2 border-b border-gray-600">필수</td>
                <td className="px-4 py-2 border-b border-gray-600">광고ID, 게임 서비스 이용기록, 닉네임, 채팅기록, 접속로그 및 인증일자,부정 이용기록, 이용 정지기록, 결제 기록, 단말기 정보(모델명, OS버전), 스토어 정보, 게임버전, 디바이스 ID</td>
                <td className="px-4 py-2 border-b border-gray-600">회원탈퇴 또는 법령이 정한 시점까지</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">애플 계정 연동 시</td>
                <td className="px-4 py-2 border-b border-gray-600">이용자 식별, 게임 서비스 운영</td>
                <td className="px-4 py-2 border-b border-gray-600">필수</td>
                <td className="px-4 py-2 border-b border-gray-600">회원 식별자 정보</td>
                <td className="px-4 py-2 border-b border-gray-600">회원탈퇴 또는 법령이 정한 시점까지</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">구글 계정 로그인 연동 시</td>
                <td className="px-4 py-2 border-b border-gray-600">이용자 식별, 게임 서비스 운영</td>
                <td className="px-4 py-2 border-b border-gray-600">필수</td>
                <td className="px-4 py-2 border-b border-gray-600">회원 식별자 정보</td>
                <td className="px-4 py-2 border-b border-gray-600">회원탈퇴 또는 법령이 정한 시점까지</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">스팀 계정 로그인 연동 시</td>
                <td className="px-4 py-2 border-b border-gray-600">이용자 식별, 게임 서비스 운영</td>
                <td className="px-4 py-2 border-b border-gray-600">필수</td>
                <td className="px-4 py-2 border-b border-gray-600">회원 식별자 정보</td>
                <td className="px-4 py-2 border-b border-gray-600">회원탈퇴 또는 법령이 정한 시점까지</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">이벤트</td>
                <td className="px-4 py-2 border-b border-gray-600">이벤트참여</td>
                <td className="px-4 py-2 border-b border-gray-600">선택</td>
                <td className="px-4 py-2 border-b border-gray-600">이름, 주소, 연락처, 이메일, SNS ID</td>
                <td className="px-4 py-2 border-b border-gray-600">목적 달성 시까지(혹은 동의 철회 시까지)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">경품배송</td>
                <td className="px-4 py-2 border-b border-gray-600">필수</td>
                <td className="px-4 py-2 border-b border-gray-600">이름, 연락처, 주소, 우편번호</td>
                <td className="px-4 py-2 border-b border-gray-600">경품 지급 완료 시까지, 단, 당첨자의 제세공과금 납부 관련 정보의 경우 수집일로부터 10년 (국세기본법상 최장 부과제척기간에 대한 증빙)</td>
                <td className="px-4 py-2 border-b border-gray-600"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">제세공과금 부과</td>
                <td className="px-4 py-2 border-b border-gray-600">필수</td>
                <td className="px-4 py-2 border-b border-gray-600">이름, 주민등록번호, 신분증, 주소, 우편번호, 계좌번호, 은행명, 예금주명</td>
                <td className="px-4 py-2 border-b border-gray-600"></td>
                <td className="px-4 py-2 border-b border-gray-600"></td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">고객상담</td>
                <td className="px-4 py-2 border-b border-gray-600">이용자 식별, 연락, 고객문의 상담</td>
                <td className="px-4 py-2 border-b border-gray-600">필수</td>
                <td className="px-4 py-2 border-b border-gray-600">이메일, 단말기 정보(모델명, OS 버전)</td>
                <td className="px-4 py-2 border-b border-gray-600">3년(전자상거래 등에서의 소비자보호에 관한 법률)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600"></td>
                <td className="px-4 py-2 border-b border-gray-600"></td>
                <td className="px-4 py-2 border-b border-gray-600">선택</td>
                <td className="px-4 py-2 border-b border-gray-600">휴대전화 번호, 결제 일시, 결제 계정, 주문번호, 상품명, 결제 금액, 결제 영수증</td>
                <td className="px-4 py-2 border-b border-gray-600">3년(전자상거래 등에서의 소비자보호에 관한 법률)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">유료 서비스 이용</td>
                <td className="px-4 py-2 border-b border-gray-600">상품 결제 진행</td>
                <td className="px-4 py-2 border-b border-gray-600">필수</td>
                <td className="px-4 py-2 border-b border-gray-600">오픈마켓 아이디, 대금결제 기록</td>
                <td className="px-4 py-2 border-b border-gray-600">5년(전자상거래 등에서의 소비자보호에 관한 법률)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">환불 및 청약철회</td>
                <td className="px-4 py-2 border-b border-gray-600">환불 및 청약철회 처리</td>
                <td className="px-4 py-2 border-b border-gray-600">필수</td>
                <td className="px-4 py-2 border-b border-gray-600">오픈마켓 아이디, 결제 일시, 결제 계정, 주문번호, 상품명, 결제 금액, 결제 영수증, 타인결제 사실 확인을 위한 실명 및 가족관계 증빙 서류</td>
                <td className="px-4 py-2 border-b border-gray-600">5년(전자상거래 등에서의 소비자보호에 관한 법률)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mb-4">제4조 개인정보의 제3자 제공에 관한 사항</h2>
        <p className="mb-4">
          1. 회사는 이용자의 개인정보를 개인정보의 처리 목적에서 명시한 범위 내에서만 처리하며, 이용자의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공하고 그 이외에는 이용자의 개인정보를 제3자에게 제공하지 않습니다.
        </p>
        <p className="mb-4">
          2. 회사는 원활한 서비스 제공을 위해 다음의 경우 이용자의 동의를 얻어 필요 최소한의 범위로만 제공합니다.
        </p>

        <h2 className="text-2xl font-semibold mb-4">제5조 개인정보 처리업무의 위탁에 관한 사항</h2>
        <p className="mb-4">
          1. 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-gray-700 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-gray-600 text-left">위탁받는 자(수탁자)</th>
                <th className="px-4 py-2 border-b border-gray-600 text-left">위탁 업무</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">상품 배송 업체 (이벤트 진행 시 별도 고지)</td>
                <td className="px-4 py-2 border-b border-gray-600">게임 이벤트 경품 공급 및 발송</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          2. 회사는 위탁계약 체결 시 「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 관리·감독하고 있습니다.
        </p>
        <p className="mb-4">
          3. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.
        </p>

        <h2 className="text-2xl font-semibold mb-4">제6조 개인정보의 국외 이전에 관한 사항</h2>
        <p className="mb-4">
          1. 회사는 개인정보 보호법 제28조의8 제1항 제1호에 따라 이용자로부터 국외 이전에 관한 별도의 동의를 받은 경우 아래와 같이 개인정보를 국외에 제공하고 있습니다. 이용자는 동의 거부를 통해 개인정보 국외 이전을 거부할 수 있습니다. 다만, 이 경우 개인정보 국외 이전이 수반되는 서비스의 이용이 제한됩니다.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Google LLC (privacy@google.com)
            <ul className="list-circle list-inside ml-4">
              <li>국가: 미국 (구글 데이터센터 소재국)</li>
              <li>일시: 설문 및 이벤트 응답 시 자동 전송</li>
              <li>목적: 설문 및 이벤트 데이터 수집 및 저장</li>
              <li>항목: 설문 및 이벤트에서 수집하는 모든 개인정보</li>
            </ul>
          </li>
        </ul>
        <p className="mb-4">
          이용자는 담당부서를 통해 국외 이전 거부를 신청하실 수 있습니다. 단, 해당 서비스는 대한민국 이외 지역에서 이용하는 경우에만 위탁이 발생하며, 글로벌 서비스 이용 시 운영을 위해 이전이 발생하므로, 이전을 거부하실 경우 서비스 이용이 불가능합니다. 이에 이전을 거부하시는 경우 서비스 이용이 제한될 수 있습니다.
        </p>

        <h2 className="text-2xl font-semibold mb-4">제7조 개인정보 파기 절차 및 방법에 관한 사항</h2>
        <p className="mb-4">
          1. 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
        </p>
        <p className="mb-4">
          2. 이용자로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다. (‘개인정보의 처리 및 보유 기간’ 참조)
        </p>
        <p className="mb-4">
          3. 개인정보 파기의 절차 및 방법은 다음과 같습니다.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>회사는 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">제8조 미이용자의 개인정보 파기 등에 관한 조치</h2>
        <p className="mb-4">
          1. 회사는 1년간 서비스를 이용하지 않은 이용자의 정보를 휴면계정으로 전환하고 분리하여 보관하거나 파기하는 등 필요한 조치를 취할 수 있습니다.
        </p>
        <p className="mb-4">
          2. 회사는 휴면전환 30일 전까지 휴면예정 회원에게 별도 분리 또는 파기되는 사실, 기간 만료일 및 분리 또는 파기되는 개인정보의 항목을 이용자에게 통지 가능한 방법(APP Push 등)으로 알리고 있습니다.
        </p>
        <p className="mb-4">
          3. 휴면계정으로 전환을 원하지 않으시는 경우, 휴면계정 전환 전 서비스 로그인을 하시면 됩니다.
        </p>

        <h2 className="text-2xl font-semibold mb-4">제9조 이용자 및 법정대리인의 권리와 의무 및 그 행사 방법에 관한 사항</h2>
        <p className="mb-4">
          1. 이용자는 언제든지 이용자 본인의 개인정보를 확인, 조회하거나 수정할 수 있으며 가입해지 또는 개인정보의 삭제를 요청할 수도 있습니다. 단, 서비스 제공을 위해 반드시 필요한 개인정보를 삭제하는 경우 관련 서비스를 제공받지 못할 수 있습니다.
        </p>
        <p className="mb-4">
          2. 서비스 내 [회원정보]에서 직접 본인의 개인정보를 조회, 수정하실 수 있습니다. 또한 회원은 서비스 내 [회원탈퇴]를 통하여 언제든지 이용계약을 해지를 할 수 있으며 해지할 경우 회원의 개인정보는 모두 삭제됩니다.
        </p>
        <p className="mb-4">
          3. 이용자가 자신의 개인정보에 대한 정정 또는 삭제를 요구하는 경우 회사는 본인 여부를 확인한 후 지체 없이 필요한 조치를 취합니다. 또한, 이용약관에 따른 이용제한 시 개인정보 보호 책임자의 판단 하에 회원 ID삭제 등 개인정보를 파기할 수 있습니다.
        </p>
        <p className="mb-4">
          4. 회사는 아동 및 청소년의 개인정보를 수집, 이용, 제공하는 경우 반드시 법정대리인의 동의를 받습니다.
        </p>
        <p className="mb-4">
          5. 이용자의 개인정보에 대한 열람, 수정은 본인 또는 14세 미만 아동의 법정대리인의 요구에 따라 본인 여부 확인 후 가능합니다.
        </p>
        <p className="mb-4">
          6. 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 합니다.
        </p>
        <p className="mb-4">
          7. 회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보에 대해 "제2조 개인정보의 처리 및 보유기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
        </p>

        <h2 className="text-2xl font-semibold mb-4">제10조 개인정보의 안전성 확보조치에 관한 사항</h2>
        <p className="mb-4">
          1. 회사는 이용자들의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 내부 관리 규정을 수립하고 있습니다.
        </p>
        <p className="mb-4">
          2. 개인정보보호 전담 조직을 운영하고 있으며 기술적, 관리적 보호조치 활동을 주기적으로 이행하고 모니터링 하고 있습니다.
        </p>
        <p className="mb-4">
          3. 내부 보안 규정에 따라 이용자의 개인정보를 암호화하고 있으며, 안전한 암호 알고리즘을 채택하고 있습니다.
        </p>
        <p className="mb-4">
          4. 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템을 설치 및 운영하고 있습니다.
        </p>
        <p className="mb-4">
          5. 개인정보 취급자의 이용자 정보에 대한 접근 권한을 최소화하도록 관리하고 있으며, 정기적으로 개인정보 및 정보보호 교육을 시행하고 있습니다.
        </p>
        <p className="mb-4">
          6. 개인정보 취급자 PC에 백신 등 보안프로그램을 설치, 운영 및 정기 업데이트를 진행하고 있습니다.
        </p>
        <p className="mb-4">
          7. 개인정보의 안전한 보관을 위하여 사옥 출입통제장치, 잠금장치, CCTV 등의 설치 등 물리적 조치를 하고 있습니다.
        </p>

        <h2 className="text-2xl font-semibold mb-4">제11조 개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항</h2>
        <p className="mb-4">
          1. 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용 정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
        </p>
        <p className="mb-4">
          2. 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터 내의 하드디스크에 저장되기도 합니다.
        </p>
        <p className="mb-4">
          3. 이용자는 웹 브라우저 옵션 설정을 통해 쿠키 허용, 차단 등의 설정을 할 수 있습니다. 다만, 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>쿠키의 설치, 운영 및 거부 방법
            <ul className="list-circle list-inside ml-4">
              <li>Microsoft Edge: [설정] &gt; [쿠키 및 사이트 권한] &gt; [쿠키 및 사이트 데이터]</li>
              <li>Chrome: [설정] &gt; [개인정보 및 보안] &gt; [서드 파티 쿠키]</li>
              <li>NAVER Whale: [설정] &gt; [개인정보 보호] &gt; [보안] &gt; [쿠키 및 기타 사이트 데이터]</li>
              <li>Safari: [설정] &gt; [고급] &gt; [메뉴 마대에서 개발자용 메뉴 표시 체크] &gt; [상단 메뉴] &gt; [개발자용] &gt; [캐시 비우기]</li>
              <li>FireFox: [三] &gt; [보관함] &gt; [기록] &gt; [최근 기록 삭제하기]</li>
              <li>Opera: [설정] &gt; [개인 정보 보호 및 보안] &gt; [모든 쿠키 및 사이트 데이터 삭제]</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">제12조 개인정보 보호책임자 및 개인정보 열람청구에 관한 사항</h2>
        <p className="mb-4">
          1. 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 개인정보 보호책임자를 지정하고 있습니다.
        </p>
        <p className="mb-4">
          2. 이용자는 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 회사는 이용자의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>개인정보 보호책임자
            <ul className="list-circle list-inside ml-4">
              <li>성명: 정한영</li>
              <li>부서명: 라이브서비스팀</li>
              <li>이메일: privacy@studiobside.com</li>
              <li>전화번호: +82-31-628-5357</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">제13조 이용자의 권익침해에 대한 구제방법</h2>
        <p className="mb-4">
          1. 이용자는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr/)</li>
          <li>개인정보침해신고센터: (국번없이) 118 (https://privacy.kisa.or.kr/)</li>
          <li>대검찰청: (국번없이) 1301 (https://www.spo.go.kr/)</li>
          <li>경찰청: (국번없이) 182 (https://ecrm.cyber.go.kr/)</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">제14조 개인정보 처리방침의 변경에 관한 사항</h2>
        <p className="mb-4">
          본 개인정보처리방침은 법령·정책 또는 보안기술의 변경에 따라 내용의 추가 삭제 및 수정이 있을 시에는 변경되는 개인정보처리방침을 시행하기 최소 7일 전에 홈페이지를 통해 변경 이유 및 내용 등을 공지하도록 하겠습니다. 다만, 이용자의 권리에 중대한 변경이 발생할 때에는 시행일로부터 최소 30일전에 공지하도록 하겠습니다.
        </p>

        <h2 className="text-2xl font-semibold mb-4">부칙</h2>
        <p className="mb-4">
          본 방침은 2025년 6월 1일부터 적용됩니다.
        </p>
      </div>
    </div>
  );
}
