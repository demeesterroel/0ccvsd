import Phase2StepContent from '../../../../components/Phase2StepContent';

export async function generateStaticParams() {
    return [
        { stepId: '1' },
        { stepId: '2' },
        { stepId: '3' },
        { stepId: '4' },
        { stepId: '5' },
    ];
}

export default async function Phase2StepPage({ params }: { params: Promise<{ stepId: string }> }) {
    const { stepId } = await params;
    return <Phase2StepContent stepId={stepId} />;
}
