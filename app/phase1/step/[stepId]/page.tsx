import React from 'react';
import Phase1StepContent from '../../../../components/Phase1StepContent';

export async function generateStaticParams() {
    return [
        { stepId: '1' },
        { stepId: '2' },
        { stepId: '3' },
        { stepId: '4' },
        { stepId: '5' },
        { stepId: '6' },
    ];
}

export default async function Phase1StepPage({ params }: { params: Promise<{ stepId: string }> }) {
    const { stepId } = await params;
    return <Phase1StepContent stepId={stepId} />;
}
