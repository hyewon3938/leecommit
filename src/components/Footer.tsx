import styled from "styled-components";
import Logo from "@/assets/icons/vertical_logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterInner>
        {/* 왼쪽: 브랜드 */}
        <BrandBlock>
          <BrandName>
            <Logo width={100} />
          </BrandName>
          <Slogan>즐거운 독서의 시작, 리커밋</Slogan>
        </BrandBlock>

        {/* 가운데: 사업자/연락처 정보 */}
        <InfoBlock>
          <p>
            <LabelText>사업자등록번호</LabelText> 807-14-02430
          </p>
          <p>
            <LabelText>대표</LabelText> 이혜원
          </p>
          <p>
            <LabelText>통신판매업신고</LabelText> 2024-서울송파-2007
          </p>
          <p>
            <LabelText>이메일</LabelText>
            <a href="mailto:contact@leecommit.kr">contact@leecommit.kr</a>
          </p>
        </InfoBlock>

        {/* 오른쪽: 외부 링크 */}
        <SocialBlock>
          <SocialList>
            <SocialItem>
              <SocialLink
                href="https://www.instagram.com/leecommit"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink
                href="https://mkt.shopping.naver.com/link/68b108c05451ef48c677a9db"
                target="_blank"
                rel="noreferrer"
              >
                SmartStore
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink
                href="https://link.coupang.com/re/SHOPPAGESHAREVID?pageKey=A01303331&sourceType2=brandstore_share&title=%EB%A6%AC%EC%BB%A4%EB%B0%8B&destUrl=https%3A%2F%2Fshop.coupang.com%2Fvid%2FA01303331%3Fsource%3Dbrandstore_share"
                target="_blank"
                rel="noreferrer"
              >
                Coupang
              </SocialLink>
            </SocialItem>
          </SocialList>
        </SocialBlock>
      </FooterInner>
      <CopyRightRow>
        © {currentYear} leeCommit. All rights reserved.
      </CopyRightRow>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  padding: 40px 20px 32px;
  background-color: #fff;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 32px 16px 24px;
  }
`;

const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  gap: 32px;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 13px;
  line-height: 1.4;
  color: #555;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 18px;
  }
`;

const FooterBlock = styled.div`
  flex: 1;
  min-width: 0;
  p > a {
    color: #555;
    text-decoration: underline;
    margin: 0 0 0 3px;
  }
`;

const BrandBlock = styled(FooterBlock)`
  flex: 0.9;
`;

const InfoBlock = styled(FooterBlock)`
  flex: 1.2;
`;

const SocialBlock = styled(FooterBlock)`
  flex: 0.9;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: left;
  }
`;

const BrandName = styled.p`
  font-size: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 8px;
  color: #222;
`;

const Slogan = styled.p`
  font-size: 13px;
  color: #777;
`;

const LabelText = styled.span`
  color: #888;
`;

const SocialList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SocialItem = styled.li`
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SocialLink = styled.a`
  font-size: 13px;
  text-decoration: none;
  color: #555;

  &:hover {
    text-decoration: underline;
  }
`;

const CopyRightRow = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 24px auto 0;
  font-size: 12px;
  color: #999;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: left;
    margin-top: 16px;
  }
`;
