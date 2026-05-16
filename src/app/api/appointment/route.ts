import { handleSubmission } from '../_lib/handle-submission';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  return handleSubmission(request, {
    formName: 'appointment',
    requiredFields: [],
  });
}
