import type { LucideIcon } from 'lucide-react';
import {
  Brain,
  Activity,
  Bone,
  CircleDot,
  HeartPulse,
  Stethoscope,
  Microscope,
  ScanLine,
  Sparkles,
  ShieldCheck,
  Hand,
} from 'lucide-react';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://baytownopenmri.com';

export const BUSINESS = {
  name: 'Baytown Open MRI',
  legalName: 'Baytown Open MRI',
  shortName: 'Baytown Open MRI',
  tagline: 'Affordable, ACR-Accredited Open MRI in Baytown, TX',
  description:
    'Baytown Open MRI is an ACR-accredited diagnostic imaging center in Baytown, Texas offering affordable Open MRI scans, same-day scheduling, and same-day reports for many studies.',
  address: {
    street: '4310 Garth Rd # A',
    city: 'Baytown',
    state: 'TX',
    zip: '77521',
    country: 'US',
  },
  phone: '(281) 422-9900',
  fax: '(281) 422-9910',
  email: 'Baytownopenmri@gmail.com',
  hours: [
    { day: 'Monday', hours: '8:00 AM – 4:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM – 4:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM – 4:00 PM' },
    { day: 'Thursday', hours: '8:00 AM – 4:00 PM' },
    { day: 'Friday', hours: '8:00 AM – 4:00 PM' },
    { day: 'Saturday', hours: 'By Appointment' },
    { day: 'Sunday', hours: 'Closed' },
  ],
  geo: {
    // Approximate coordinates for 4310 Garth Rd, Baytown, TX
    latitude: 29.7592,
    longitude: -94.9613,
  },
  mapEmbedUrl:
    'https://www.google.com/maps?q=4310+Garth+Rd+Suite+A,+Baytown,+TX+77521&output=embed',
  mapDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=4310+Garth+Rd+Suite+A+Baytown+TX+77521',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/patient-information', label: 'Patient Info' },
  { href: '/referring-providers', label: 'Referring Providers' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;

export interface Service {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}

export const SERVICES: Service[] = [
  {
    slug: 'brain-mri',
    name: 'Brain MRI',
    short: 'Detailed imaging of the brain and surrounding structures.',
    description:
      'A non-invasive brain MRI helps physicians evaluate concerns such as headaches, dizziness, memory changes, stroke follow-up, and more. Our Open MRI system delivers detailed images while keeping patients comfortable.',
    icon: Brain,
    highlights: ['Headache evaluation', 'Stroke follow-up', 'Neurology referrals'],
  },
  {
    slug: 'spine-mri',
    name: 'Spine MRI',
    short: 'Comprehensive imaging of the full spinal column.',
    description:
      'Spine MRI is used to assess back pain, nerve compression, disc disease, injuries, and post-surgical follow-up across the cervical, thoracic, and lumbar regions.',
    icon: Activity,
    highlights: ['Back & neck pain', 'Disc & nerve evaluation', 'Post-injury imaging'],
  },
  {
    slug: 'cervical-mri',
    name: 'Cervical MRI',
    short: 'Focused imaging of the neck and cervical spine.',
    description:
      'A cervical MRI evaluates the upper spine, including discs, nerves, and surrounding soft tissue. Frequently ordered for neck pain, radiating arm pain, and post-accident evaluation.',
    icon: ScanLine,
    highlights: ['Neck pain', 'Arm numbness or tingling', 'Whiplash evaluation'],
  },
  {
    slug: 'lumbar-mri',
    name: 'Lumbar MRI',
    short: 'High-resolution imaging of the lower back.',
    description:
      'A lumbar MRI assesses the lower spine, common in evaluating sciatica, herniated discs, lower back pain, and pre-surgical planning.',
    icon: Bone,
    highlights: ['Sciatica', 'Disc herniation', 'Pre-surgical planning'],
  },
  {
    slug: 'knee-mri',
    name: 'Knee MRI',
    short: 'Detailed evaluation of soft tissue, ligaments, and cartilage.',
    description:
      'A knee MRI helps providers evaluate ligament tears, meniscus injuries, cartilage damage, and chronic knee pain.',
    icon: CircleDot,
    highlights: ['Meniscus tears', 'Ligament injuries', 'Knee pain workup'],
  },
  {
    slug: 'shoulder-mri',
    name: 'Shoulder MRI',
    short: 'Comprehensive imaging of the shoulder joint.',
    description:
      'Shoulder MRI is commonly used to assess rotator cuff injuries, labral tears, impingement, and post-injury evaluation.',
    icon: HeartPulse,
    highlights: ['Rotator cuff', 'Labral tears', 'Shoulder impingement'],
  },
  {
    slug: 'acl-mri',
    name: 'ACL MRI',
    short: 'Specialized imaging for ACL injuries and follow-up.',
    description:
      'An ACL MRI offers a clear view of the anterior cruciate ligament, helpful for evaluating sports injuries and post-surgical recovery.',
    icon: Stethoscope,
    highlights: ['Sports injuries', 'Ligament tears', 'Post-op evaluation'],
  },
  {
    slug: 'extremity-mri',
    name: 'Extremity MRI',
    short: 'Imaging of arms, hands, legs, ankles, and feet.',
    description:
      'Extremity MRI covers the upper and lower limbs — useful for evaluating injuries, joint pain, and chronic conditions affecting the hands, wrists, elbows, ankles, and feet.',
    icon: Hand,
    highlights: ['Wrist & hand', 'Ankle & foot', 'Elbow imaging'],
  },
  {
    slug: 'mri-with-contrast',
    name: 'MRI with Contrast',
    short: 'Contrast-enhanced MRI for higher detail.',
    description:
      'Some studies benefit from a gadolinium-based contrast agent to highlight blood vessels, tumors, or areas of inflammation. Used only when ordered by your provider.',
    icon: Sparkles,
    highlights: ['Provider-ordered', 'Higher tissue contrast', 'Targeted indications'],
  },
  {
    slug: 'mri-without-contrast',
    name: 'MRI without Contrast',
    short: 'Standard MRI study without contrast agent.',
    description:
      'A standard MRI without contrast is appropriate for most routine indications, including joint pain, back pain, and many neurological studies.',
    icon: ScanLine,
    highlights: ['Routine imaging', 'Most musculoskeletal studies', 'Non-invasive'],
  },
  {
    slug: 'mri-with-and-without-contrast',
    name: 'MRI with & without Contrast',
    short: 'Combined study capturing pre- and post-contrast imaging.',
    description:
      'Combination MRI studies image the area before and after contrast administration, providing comprehensive detail for certain indications when ordered by your provider.',
    icon: Microscope,
    highlights: ['Comprehensive imaging', 'Pre- & post-contrast views', 'Provider-ordered'],
  },
  {
    slug: 'open-mri',
    name: 'Open MRI',
    short: 'Comfortable, open-sided imaging for anxious or larger patients.',
    description:
      'Our Open MRI provides a more comfortable experience for patients who are claustrophobic, anxious, larger-bodied, or simply prefer an open design — without sacrificing image quality.',
    icon: ShieldCheck,
    highlights: ['Claustrophobic-friendly', 'Spacious design', 'Comfortable experience'],
  },
];

export const ADVANTAGES = [
  {
    title: 'Affordable MRI Pricing',
    body: 'Transparent, competitive pricing including self-pay rates. Ask about pricing when you call.',
  },
  {
    title: 'Same-Day Scheduling',
    body: 'Need an MRI quickly? Same-day appointments are often available — call to confirm.',
  },
  {
    title: 'Same-Day Reports',
    body: 'Same-day MRI reports are available in many cases so providers can move forward sooner.',
  },
  {
    title: 'ACR Accredited',
    body: 'Our facility is accredited by the American College of Radiology — a mark of quality imaging.',
  },
  {
    title: 'Open MRI Comfort',
    body: 'A spacious open-sided MRI for claustrophobic, anxious, or larger patients.',
  },
  {
    title: 'Welcoming Care',
    body: 'A calm, comfortable, patient-first environment from check-in through follow-up.',
  },
] as const;

export const INSURANCE = [
  'Most major commercial insurance plans',
  'Medicare',
  'Medicaid',
  'Self-pay (cash) pricing',
  'Personal Injury (PI) cases',
  'Letter of Protection (LOP)',
  "Workers' Compensation",
] as const;

export const FAQS = [
  {
    q: 'What is an Open MRI and how is it different?',
    a: 'An Open MRI uses an open-sided design instead of the narrow tunnel found in a traditional closed MRI. This makes the experience much more comfortable for patients who are claustrophobic, anxious, larger-bodied, or unable to lie still in a closed bore. Image quality remains diagnostic for most studies.',
  },
  {
    q: 'Do you offer same-day MRI appointments?',
    a: 'Same-day scheduling is often available depending on the study and time of day. Call (281) 422-9900 to check the next available time.',
  },
  {
    q: 'How quickly will my report be ready?',
    a: 'Same-day MRI reports are available in many cases. Final turnaround can vary based on the study type and clinical context.',
  },
  {
    q: 'Do I need a referral from my doctor?',
    a: 'MRI studies generally require an order from a licensed healthcare provider. If you do not yet have an order, our team can help guide you on next steps.',
  },
  {
    q: 'What insurance plans do you accept?',
    a: "We accept most major commercial insurance plans as well as Medicare and Medicaid. We also work with Personal Injury (PI), Letter of Protection (LOP), and Workers' Compensation cases. Please call to verify your specific plan.",
  },
  {
    q: 'Do you offer self-pay pricing?',
    a: 'Yes. We offer competitive self-pay (cash) pricing on MRI studies. Call (281) 422-9900 for current pricing.',
  },
  {
    q: 'Will I be comfortable during the scan?',
    a: 'Our Open MRI is designed to be far more comfortable than traditional closed MRIs. Our team will walk you through the process, answer your questions, and keep you informed throughout the scan.',
  },
  {
    q: 'How long does an MRI take?',
    a: 'Most MRI studies take 20–45 minutes, depending on the body part being imaged and whether contrast is used.',
  },
  {
    q: 'Can I drive home after my MRI?',
    a: 'Yes. MRI imaging does not require sedation or recovery time for most patients. If contrast is used, you may resume normal activity immediately after.',
  },
  {
    q: 'Is MRI safe?',
    a: 'MRI uses powerful magnets and radio waves — no ionizing radiation. Tell our team about any implants, pacemakers, metal fragments, or pregnancy so we can confirm it is safe for you.',
  },
] as const;

export const SERVICE_AREAS = [
  'Baytown, TX',
  'Highlands, TX',
  'Mont Belvieu, TX',
  'Channelview, TX',
  'La Porte, TX',
  'Crosby, TX',
  'Dayton, TX',
  'Pasadena, TX',
  'Deer Park, TX',
  'Houston Metro',
] as const;
