import { Container } from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: '소나기 블로그의 개인정보처리방침입니다.',
};

export default function PrivacyPage() {
  const lastUpdated = '2024년 5월 18일';

  return (
    <Container className="py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-50">
          개인정보처리방침 (Privacy Policy)
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
          최종 수정일: {lastUpdated}
        </p>
        
        <div className="prose dark:prose-invert max-w-none space-y-8 text-neutral-600 dark:text-neutral-400">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              1. 수집하는 개인정보 항목
            </h2>
            <p>
              소나기 블로그는 별도의 회원가입 없이 서비스를 이용할 수 있습니다. 다만, 서비스 이용 과정에서 다음과 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP 주소, 쿠키, 방문 일시, 서비스 이용 기록, 기기 정보</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              2. 개인정보의 수집 및 이용 목적
            </h2>
            <p>
              수집된 정보는 다음과 같은 목적으로 이용됩니다.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>서비스 운영 및 개선</li>
              <li>접속 빈도 파악 및 서비스 이용 통계 분석</li>
              <li>보안 및 부정 이용 방지</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              3. 개인정보의 보유 및 이용 기간
            </h2>
            <p>
              이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용 목적이 달성되면 지체 없이 파기합니다. 단, 관련 법령에 의해 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보관합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              4. 쿠키(Cookie)의 운용 및 거부
            </h2>
            <p>
              본 블로그는 이용자에게 개인화된 서비스를 제공하기 위해 쿠키를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는 아주 작은 텍스트 파일로 이용자의 컴퓨터 하드디스크에 저장됩니다.
            </p>
            <p>
              이용자는 쿠키 설치에 대한 선택권을 가지고 있으며, 웹 브라우저 설정을 통해 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              5. 제3자 서비스 및 API 이용
            </h2>
            <p>
              본 서비스는 기능 제공을 위해 Pinterest API 등 제3자 서비스를 이용할 수 있습니다. 이 과정에서 해당 서비스 제공업체의 정책에 따라 정보가 처리될 수 있습니다. 각 서비스의 개인정보 정책은 해당 서비스의 공식 웹사이트를 참조하시기 바랍니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              6. 문의처
            </h2>
            <p>
              개인정보보호와 관련하여 궁금하신 사항은 아래의 연락처로 문의해 주시기 바랍니다.
            </p>
            <p className="mt-2">
              이메일: <a href="mailto:hello@sonagi.space" className="text-primary-600 dark:text-primary-400 hover:underline">hello@sonagi.space</a>
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}
