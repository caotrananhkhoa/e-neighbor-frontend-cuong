import { FormattedHTMLMessage } from '@umijs/max';
import { Card, Divider } from 'antd/lib';
import React from 'react';

import Button from '@/components/Button';
import { NotifyModal } from '@/pages/lessor/on-boarding/components/NotifyModal';
import { LessorInfo } from '@/pages/lessor/on-boarding/components/OnboardingForm/LessorInfo';
import { UserInfo } from '@/pages/lessor/on-boarding/components/OnboardingForm/UserInfo';
import { OnboardStep } from '@/pages/lessor/on-boarding/components/OnboardStep';
import { useOnboardingForm } from '@/pages/lessor/on-boarding/hooks/useOnboardingForm';

const OnBoarding: React.FC = () => {
  const { currentStep, handleNextStep, handlePreviousStep, stepItems, control, errors } =
    useOnboardingForm();

  const steps = [
    <UserInfo key={'onboarding.userInfo'} control={control} errors={errors} />,
    <LessorInfo key="onboarding.lessorInfo" control={control} errors={errors} />,
  ];
  return (
    <Card
      rootClassName="w-full max-w-7xl m-4 p-8 pb-0 bg-neutral-1 h-full rounded-lg flex flex-col"
      actions={[
        <Button key="form-previous" onClick={handlePreviousStep} type="default">
          <FormattedHTMLMessage id="common.previous" defaultMessage="Back" />
        </Button>,
        <Button key="form-next" onClick={handleNextStep} type="primary">
          <FormattedHTMLMessage id="common.next" defaultMessage="Next" />
        </Button>,
      ]}
      bodyStyle={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 0 }}
    >
      <OnboardStep currentStep={currentStep} stepItems={stepItems} />
      <Divider />
      <section className="flex w-full max-w-3xl justify-center items-center m-auto">
        {steps[currentStep]}
      </section>
      <NotifyModal />
    </Card>
  );
};

export default OnBoarding;
