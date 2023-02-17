import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ headingText = "개인정보 처리방침" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>Last updated: April 21, 2048</p>
            <p>
              (주)비티소프트(이하 “회사”라 한다.)는 「정보통신망 이용촉진 및
              정보보호 등에 관한 법률」 및 「개인정보보호법」(이하 “관련
              법령”이라 한다.)에 근거하여 모든 개인정보는 정보주체의 동의, 수집
              및 처리하고 있습니다. 관련 법령에 따라 사용자의 개인정보 보호 및
              권익을 보호하고, 사용자의 고충을 원활하게 처리할 수 있도록 다음과
              같은 처리방침을 두고 있습니다.
            </p>
            <p>
              회사의 서비스별 개인정보처리에 관한 사항은 모바일 앱(이하 “앱”라
              한다.) WearDoctor.io 에서 정보주체가 확인할 수 있도록 안내하고
              있습니다.
            </p>
            <h1>개인정보 처리 목적</h1>
            <p>
              회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
              개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용
              목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의
              동의를 받는 등 필요한 조치를 이행할 예정입니다. 회사 전반의
              문의사항에 대한 사용자의 민원처리를 위한 목적으로 개인정보를
              처리합니다.
            </p>
            <ul>
              <li>서비스 부정이용 방지</li>
              <li>서비스 부정이용 방지</li>
              <li>본인인증, 연령인증 등의 목적</li>
              <li>
                각종 고지·통지, 고충처리, 분쟁 조정을 위한 기록 보존 민원인의
                신원확인, 민원사항 확인, 사실조사를 위한 연락•통지, 처리결과
                통보 목적
              </li>
              <li>서비스 이용에 대한 통계 수집 등을 목적</li>
              <li>기존 서비스의 개선 및 신규 서비스 개발</li>
              <li>
                오류 분석 등을 통한 원활한 서비스 제공 Google 개인정보처리방침
                및 Google API Service 이용약관 준수
                <ol>
                  <li>
                    회사는 Google API 서비스를 사용하고 있으며 이용약관 및
                    개인정보보호 정책을 준수합니다.
                  </li>
                  <li>
                    사용자가 앱에서 Health Connect 서비스에 동의한 정보 수집을
                    위한 용도로만 사용합니다. <br />
                    Google 개인정보처리방침( https://policies.google.com/privacy
                    )
                  </li>
                </ol>
              </li>
            </ul>
            <h1>2. 개인정보 처리 및 보유 기간</h1>
            <p>
              회사는 법령에 따른 개인정보 보유•이용기간 또는 정보주체로부터
              개인정보를 수집 시에 동의 받은 개인정보 보유•이용기간 내에서
              개인정보를 처리•보유합니다. 관계법령(상법, 전자금융거래법,
              신용정보의 이용 및 보호에 관한 법률, 정보통신망 이용촉진 및
              정보보호 등에 관한 법률 등)에 의한 정보보호 사유 의무가 있는
              경우에는 일정기간 동안 보유한 뒤 파기합니다.
            </p>
            <p>
              회사는 최초 회원가입 또는 서비스 이용시 사용자로부터 아래와 같은
              개인정보를 수집하고 있습니다.
            </p>
            <p>
              회사는 사용자와 연결된 계정에서 피트니스 활동 정보를 가져올 수
              있습니다.
            </p>
            <li>
              회사는 다른 플랫폼에서 사용자의 피트니스 활동 정보를 자동으로
              가져옵니다. 사용자는 사전에 앱을 통해서 다른 플랫폼 계정과의
              연결에 동의해야 합니다.
            </li>
            <li>
              저장된 Google 계정은 앱 삭제시 삭제되며 앱이 설치된 사용자의 기기
              이외로 저장, 유출하지 않습니다.
            </li>
            <li>
              회사는 사용자가 개인 피트니스 데이터를 제어하도록 하는 오픈
              플랫폼인 Health Connect API를 사용합니다. Health Connect API를
              통해 얻은 신체활동, 걸음수, 수면정보 데이터를 사용자의 동의를 받아
              처리합니다.
            </li>
            <li>
              새 데이터 속성이 Health Connect 프레임워크에 추가될 수 있으며,
              이는 앱에 표시될 수 있고 사용자가 동의해야 합니다.
            </li>
            <table border="1">
              <tr>
                <th>구분</th>
                <th>상세 내용</th>
                <th>수집 방법</th>
              </tr>
              <tr>
                <td>필수 항목</td>
                <td>
                  <ul>
                    <li>이름, 생년월일, 휴대폰 번호</li>
                    <li>앱 계정 정보</li>
                    <li>서비스 관련 정보</li>
                    <ol>
                      <li>응답 내용, 접속 기기 정보, 접속시간</li>
                    </ol>
                  </ul>
                </td>
                <td>
                  개인정보의 수집·이용 및 제공·활용 동의서 또는 이용약관의
                  내용을 임상 진행 과 동시에 동의하며, 의사 전용 페이지에서 해당
                  정보로 회원 생성 시 해당 계정에 대한 개인정보 수집에 동의한
                  것으로 봅니다.
                </td>
              </tr>
              <tr>
                <td>필수 항목</td>
                <td>
                  <ul>
                    <li>이름, 생년월일, 휴대폰 번호</li>
                    <li>앱 계정 정보</li>
                    <li>서비스 관련 정보</li>
                    <ol>
                      <li>응답 내용, 접속 기기 정보, 접속시간</li>
                    </ol>
                  </ul>
                </td>
                <td>
                  개인정보의 수집·이용 및 제공·활용 동의서 또는 이용약관의
                  내용을 임상 진행 과 동시에 동의하며, 의사 전용 페이지에서 해당
                  정보로 회원 생성 시 해당 계정에 대한 개인정보 수집에 동의한
                  것으로 봅니다.
                </td>
              </tr>
              <tr>
                <td>선택항목</td>
                <td>
                  <ul>
                    <li>Samsung Health </li>
                    <ol>
                      <li>
                        연동 수집 정보 : 심박수, 활동량, 소모 칼로리, 키,
                        몸무게, 혈압{" "}
                      </li>
                    </ol>
                    <li>Samsung Health </li>
                    <ol>
                      <li>
                        연동 수집 정보 : 심박수, 활동량, 소모 칼로리, 키,
                        몸무게, 혈압{" "}
                      </li>
                    </ol>
                  </ul>
                </td>
                <td>
                  Health Connect 페이지에서 [모두 허용] 토글을 클릭하여 허용하면
                  정보 수집에 동의한 것으로 봅니다
                </td>
              </tr>
            </table>
            <p>
              다만, 내부 방침에 따라 일정 기간 보관 후 파기하는 정보는 아래와
              같습니다.
            </p>
            <li>
              관계 법령 위반에 따른 수사•조사 등이 진행 중인 경우에는 해당
              수사•조사 종료 시까지
            </li>
            <li>
              앱 이용에 따른 채권•채무관계 잔존시에는 해당 채권•채무관계
              정산시까지
            </li>
            <li>개인심박기록 등 앱 전반 서비스 : 앱 회원 탈퇴시까지</li>
            <li>
              「정보통신망 이용촉진 및 정보보호 등에 관한 법률」시행령 제29조에
              따른 본인확인정보 보관 : 게시판에 정보 게시가 종료된 후 6개월
            </li>
            <li>「의료법」 제 21조 1항에 따른 처방기록 열람 서비스 : 10년</li>
            <li>민원사무 처리 : 민원처리 종료 후 1년</li>
            <li>사용자의 서비스 로그 기록 : 3개월</li>

            <h1>3. 개인정보의 제3자 제공</h1>
            <p>
              회사는 정보주체의 개인정보를 개인정보의 처리 목적에 명시한 범위
              내에서 처리하며, 다음의 경우를 제외하고는 정보주체의 사전 동의
              없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지
              않습니다.
            </p>
            <li>정보주체로부터 별도의 동의를 받는 경우</li>
            <li>법률에 특별한 규정이 있는 경우</li>
            <li>
              정보주체 또는 법정대리인의 의사표시를 할 수 없는 상태에 있거나
              주소불명 등으로 사전동의를 받을 수 없는 경우로서 명백히 정보주체
              또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고
              인정되는 경우
            </li>
            <li>
              학술연구(통계수치 산출 등을 포함) 또는 시장조사 등의 목적을 위하여
              필요한 경우로서 특정 개인을 알아볼 수 없는 형태로 가공하여
              실사용데이터 등의 정보를 제공하는 경우
            </li>
            <li>
              의료기기법 등과 같은 관계법령에 의해 정해진 절차와 방법에 따라
              정부기관의 요구가 있는 경우
            </li>
            <li>
              개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게 제공하지
              아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우
            </li>
            <li>
              조약, 그 밖의 국제협정 이행을 위하여 외국정보 또는 국제기구에
              제공하는 데 필요한 경우
            </li>
            <li>범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우</li>
            <li>법원의 재판업무 수행을 위하여 필요한 경우</li>
            <li>형 및 감호, 보호처분의 집행을 위하여 필요한 경우</li>
            <li>의료기관의 처방을 위해 개인식별정보를 제공하는 경우</li>

            <table>
              <tr>
                <th>제공하는 개인정보</th>
                <th>제공받는 기관</th>
                <th>제공시기</th>
                <th>제공목적</th>
                <th>제공근거</th>
                <th>보유기간</th>
              </tr>
              <tr>
                <td>[기본 식별정보] 이름,휴대폰번호</td>
                <td>삼섬서울병원</td>
                <td>요청 시(수시)</td>
                <td>처방대상자의 개인정보 일치 여부 확인</td>
                <td>의료법, 개인정보보호법, 정보주체의 동의</td>
                <td>1년</td>
              </tr>
            </table>

            <h1>4. 개인정보처리 위탁</h1>
            <p>
              회사는 서비스 향상을 위해서 이용자들의 개인정보를 외부전문업체에
              위탁하여 처리할 수 있습니다. 개인정보의 처리를 위탁하는 경우에는
              미리 그 사실을 이용자들에게 공지할 것입니다. 또한 위탁계약 등을
              통하여 서비스제공자의 개인정보보호 관련 지시엄수, 개인정보에 관한
              비밀유지, 제3자 제공의 금지 및 사고시의 책임부담 등을 명확히
              규정하고 당해 계약내용을 서면 또는 전자적으로 보관하여 이용자의
              권익을 보호하고 있습니다.
            </p>
            <h1>5. 정보주체와 법정대리인의 권리∙의무 및 행사방법</h1>
            <h2>
              이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.
            </h2>
            <ol>
              <li>
                1. 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호
                관련 권리를 행사할 수 있습니다.
              </li>
              <ul>
                <li>개인정보 열람요구</li>
                <li>오류 등이 있을 경우 정정 요구</li>
                <li>삭제요구</li>
                <li>처리 정지 요구</li>
              </ul>
              <li>
                2. 1항에 따른 권리 행사는 회사에 “관련 법령” 시행규칙 별지 제8호
                서식에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수
                있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.
              </li>
              <li>
                3. 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한
                경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를
                이용하거나 제공하지 않습니다.
              </li>
              <li>
                4. 1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은
                자 등 대리인을 통하여 하실 수 있습니다. 이 경우 “관련 법령”
                시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
              </li>
              <li>
                5. 회사는 권리행사를 요구를 받은 날로부터 10일 이내에 정보주체의
                요구에 상응하는 조치를 취하고 그 결과를 정보주체에게
                알리겠습니다.
              </li>
            </ol>

            <h1>6. 개인정보 파기</h1>
            <p>
              회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
              불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
              다만, 다른 법률에 따라 보존하여야 하는 경우에는 그러하지 않습니다.
              개인정보 파기의 절차 및 방법은 다음과 같습니다.
            </p>
            <h2>1.파기절차</h2>
            <p>
              사용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우
              별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후
              혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한
              경우가 아니고서는 다른 목적으로 이용되지 않습니다. 단, 이용자에게
              개인정보 보관 기간에 대해 별도의 동의를 얻은 경우, 또는 관계
              법령에 의해 보관해야 하는 정보는 법령이 정한 기간 동안 안전하게
              보관합니다. 또한, 개인정보의 처리 목적 달성, 보유기간 경과, 해당
              서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을
              때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 지체
              없이 개인정보를 파기합니다.
            </p>
            <ul>
              <li>
                <p>
                  <strong>You</strong> means the individual accessing or using
                  the Service, or the company, or other legal entity on behalf
                  of which such individual is accessing or using the Service, as
                  applicable.
                </p>
              </li>
              <li>
                <p>
                  <strong>Company</strong> (referred to as either "the Company",
                  "We", "Us" or "Our" in this Agreement) refers to Treact.
                </p>
              </li>
              <li>
                <strong>Affiliate</strong> means an entity that controls, is
                controlled by or is under common control with a party, where
                "control" means ownership of 50% or more of the shares, equity
                interest or other securities entitled to vote for election of
                directors or other managing authority.
              </li>
              <li>
                <strong>Account</strong> means a unique account created for You
                to access our Service or parts of our Service.
              </li>
              <li>
                <strong>Website</strong> refers to Treact, accessible from
                https://treact.com
              </li>{" "}
              <li>
                <strong>Service</strong> refers to the Website.
              </li>
              <li>
                <strong>Country</strong> refers to: Maharashtra, India
              </li>
              <li>
                <p>
                  <strong>Service Provider</strong> means any natural or legal
                  person who processes the data on behalf of the Company. It
                  refers to third-party companies or individuals employed by the
                  Company to facilitate the Service, to provide the Service on
                  behalf of the Company, to perform services related to the
                  Service or to assist the Company in analyzing how the Service
                  is used.
                </p>
              </li>
              <li>
                <strong>Third-party Social Media Service</strong> refers to any
                website or any social network website through which a User can
                log in or create an account to use the Service.
              </li>
              <li>
                <p>
                  <strong>Personal Data</strong> is any information that relates
                  to an identified or identifiable individual.
                </p>
              </li>
              <li>
                <strong>Cookies</strong> are small files that are placed on Your
                computer, mobile device or any other device by a website,
                containing the details of Your browsing history on that website
                among its many uses.
              </li>{" "}
              <li>
                <strong>Usage Data</strong> refers to data collected
                automatically, either generated by the use of the Service or
                from the Service infrastructure itself (for example, the
                duration of a page visit).
              </li>
            </ul>
            <h1>Collecting and Using Your Personal Data</h1>
            <h2>Types of Data Collected</h2>
            <h3>Personal Data</h3>
            <p>
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </p>
            <ul>
              <li>Email address</li> <li>First name and last name</li>{" "}
              <li>Phone number</li>{" "}
              <li>Address, State, Province, ZIP/Postal code, City</li>{" "}
              <li>Usage Data</li>
            </ul>
            <h3>Usage Data</h3>
            <p>Usage Data is collected automatically when using the Service.</p>
            <p>
              Usage Data may include information such as Your Device's Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </p>
            <p>
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device You use, Your mobile device
              unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use,
              unique device identifiers and other diagnostic data.
            </p>
            <p>
              We may also collect information that Your browser sends whenever
              You visit our Service or when You access the Service by or through
              a mobile device.
            </p>
            <h3>Tracking Technologies and Cookies</h3>
            <p>
              We use Cookies and similar tracking technologies to track the
              activity on Our Service and store certain information. Tracking
              technologies used are beacons, tags, and scripts to collect and
              track information and to improve and analyze Our Service.
            </p>
            <p>
              You can instruct Your browser to refuse all Cookies or to indicate
              when a Cookie is being sent. However, if You do not accept
              Cookies, You may not be able to use some parts of our Service.
            </p>
            <p>
              Cookies can be "Persistent" or "Session" Cookies. Persistent
              Cookies remain on your personal computer or mobile device when You
              go offline, while Session Cookies are deleted as soon as You close
              your web browser. Learn more about cookies:{" "}
              <a href="https://www.termsfeed.com/blog/cookies/">
                All About Cookies
              </a>
              .
            </p>
            <p>
              We use both session and persistent Cookies for the purposes set
              out below:
            </p>
            <ul>
              <li>
                <p>
                  <strong>Necessary / Essential Cookies</strong>
                </p>
                <p>Type: Session Cookies</p>
                <p>Administered by: Us</p>
                <p>
                  Purpose: These Cookies are essential to provide You with
                  services available through the Website and to enable You to
                  use some of its features. They help to authenticate users and
                  prevent fraudulent use of user accounts. Without these
                  Cookies, the services that You have asked for cannot be
                  provided, and We only use these Cookies to provide You with
                  those services.
                </p>
              </li>
              <li>
                <p>
                  <strong>Cookies Policy / Notice Acceptance Cookies</strong>
                </p>
                <p>Type: Persistent Cookies</p>
                <p>Administered by: Us</p>
                <p>
                  Purpose: These Cookies identify if users have accepted the use
                  of cookies on the Website.
                </p>
              </li>
              <li>
                <p>
                  <strong>Functionality Cookies</strong>
                </p>
                <p>Type: Persistent Cookies</p>
                <p>Administered by: Us</p>
                <p>
                  Purpose: These Cookies allow us to remember choices You make
                  when You use the Website, such as remembering your login
                  details or language preference. The purpose of these Cookies
                  is to provide You with a more personal experience and to avoid
                  You having to re-enter your preferences every time You use the
                  Website.
                </p>
              </li>
            </ul>
            <p>
              For more information about the cookies we use and your choices
              regarding cookies, please visit our Cookies Policy.
            </p>
            <h2>Use of Your Personal Data</h2>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul>
              <li>
                <strong>To provide and maintain our Service</strong>, including
                to monitor the usage of our Service.
              </li>
              <li>
                <strong>To manage Your Account:</strong> to manage Your
                registration as a user of the Service. The Personal Data You
                provide can give You access to different functionalities of the
                Service that are available to You as a registered user.
              </li>
              <li>
                <strong>For the performance of a contract:</strong> the
                development, compliance and undertaking of the purchase contract
                for the products, items or services You have purchased or of any
                other contract with Us through the Service.
              </li>
              <li>
                <strong>To contact You:</strong> To contact You by email,
                telephone calls, SMS, or other equivalent forms of electronic
                communication, such as a mobile application's push notifications
                regarding updates or informative communications related to the
                functionalities, products or contracted services, including the
                security updates, when necessary or reasonable for their
                implementation.
              </li>
              <li>
                <strong>To provide You</strong> with news, special offers and
                general information about other goods, services and events which
                we offer that are similar to those that you have already
                purchased or enquired about unless You have opted not to receive
                such information.
              </li>
              <li>
                <strong>To manage Your requests:</strong> To attend and manage
                Your requests to Us.
              </li>
            </ul>
            <p>
              We may share your personal information in the following
              situations:
            </p>
            <ul>
              <li>
                <strong>With Service Providers:</strong> We may share Your
                personal information with Service Providers to monitor and
                analyze the use of our Service, to contact You.
              </li>
              <li>
                <strong>For Business transfers:</strong> We may share or
                transfer Your personal information in connection with, or during
                negotiations of, any merger, sale of Company assets, financing,
                or acquisition of all or a portion of our business to another
                company.
              </li>
              <li>
                <strong>With Affiliates:</strong> We may share Your information
                with Our affiliates, in which case we will require those
                affiliates to honor this Privacy Policy. Affiliates include Our
                parent company and any other subsidiaries, joint venture
                partners or other companies that We control or that are under
                common control with Us.
              </li>
              <li>
                <strong>With Business partners:</strong> We may share Your
                information with Our business partners to offer You certain
                products, services or promotions.
              </li>
              <li>
                <strong>With other users:</strong> when You share personal
                information or otherwise interact in the public areas with other
                users, such information may be viewed by all users and may be
                publicly distributed outside. If You interact with other users
                or register through a Third-Party Social Media Service, Your
                contacts on the Third-Party Social Media Service may see Your
                name, profile, pictures and description of Your activity.
                Similarly, other users will be able to view descriptions of Your
                activity, communicate with You and view Your profile.
              </li>
            </ul>
            <h2>Retention of Your Personal Data</h2>
            <p>
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </p>
            <p>
              The Company will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </p>
            <h2>Transfer of Your Personal Data</h2>
            <p>
              Your information, including Personal Data, is processed at the
              Company's operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction.
            </p>
            <p>
              Your consent to this Privacy Policy followed by Your submission of
              such information represents Your agreement to that transfer.
            </p>
            <p>
              The Company will take all steps reasonably necessary to ensure
              that Your data is treated securely and in accordance with this
              Privacy Policy and no transfer of Your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of Your data and other
              personal information.
            </p>
            <h2>Disclosure of Your Personal Data</h2>
            <h3>Business Transactions</h3>
            <p>
              If the Company is involved in a merger, acquisition or asset sale,
              Your Personal Data may be transferred. We will provide notice
              before Your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </p>
            <h3>Law enforcement</h3>
            <p>
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </p>
            <h3>Other legal requirements</h3>
            <p>
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </p>
            <ul>
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of the Company</li>
              <li>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li>
                Protect the personal safety of Users of the Service or the
                public
              </li>
              <li>Protect against legal liability</li>
            </ul>
            <h2>Security of Your Personal Data</h2>
            <p>
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </p>
            <h1>Children's Privacy</h1>
            <p>
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 13 without verification of
              parental consent, We take steps to remove that information from
              Our servers.
            </p>
            <p>
              If We need to rely on consent as a legal basis for processing Your
              information and Your country requires consent from a parent, We
              may require Your parent's consent before We collect and use that
              information.
            </p>
            <h1>Links to Other Websites</h1>
            <p>
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>
            <h1>Changes to this Privacy Policy</h1>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              "Last updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
