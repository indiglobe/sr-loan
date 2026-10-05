export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface EligibilityItem {
  id: string;
  requirement: string;
  detail: string;
}

export interface DocumentItem {
  id: string;
  documentName: string;
  category: string;
}

export interface BankLoanData {
  id: string;
  bankName: string;
  logoBg: string;
  tagline: string;
  productName: string;
  roiStarting: string;
  maxAmount: string;
  maxTenure: string;
  processingTime: string;
  contactNumbers: string[];
  benefits: BenefitItem[];
  eligibility: EligibilityItem[];
  requiredDocuments: DocumentItem[];
  applyLink: string;
}

export const banksInstantLoanData: BankLoanData[] = [
  {
    id: "poonawalla-fincorp",
    bankName: "Poonawalla Fincorp",
    logoBg: "from-blue-900 to-blue-950",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "15% p.a.",
    maxAmount: "₹5 Lakhs",
    maxTenure: "",
    processingTime: "Quick Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "https://wee.bnking.in/c/ZTEzOWFlY",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the loan application process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Quick Disbursement",
        description: "Quick loan disbursement process available.",
        iconName: "Clock",
      },
      {
        id: "b3",
        title: "Free Services",
        description: "Free services available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b4",
        title: "Flexible Loan Tenure",
        description: "Flexible loan tenure options are available.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹5 Lakhs",
        description: "Get an instant loan amount of up to ₹5 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e2",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 725 and above required",
      },
      {
        id: "e3",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e4",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "hero-fincorp",
    bankName: "Hero Fincorp",
    logoBg: "from-green-500 to-green-900",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "18.99% p.a.",
    maxAmount: "₹3 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "https://wee.bnking.in/c/MzcwZmRjN",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Same Day Disbursement",
        description: "Eligible loans can be disbursed on the same day.",
        iconName: "Clock",
      },
      {
        id: "b3",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Flexible loan tenure of up to 60 months is available.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹3 Lakhs",
        description: "Get instant loan amounts of up to ₹3 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 725+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "bajaj-finance",
    bankName: "Bajaj Finance",
    logoBg: "from-blue-600 to-blue-900",
    tagline: "Instant Loan",
    productName: "Instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹50 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "https://wee.bnking.in/c/MWNkOTA1Y",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹50 Lakhs",
        description: "Get instant loan amounts of up to ₹50 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "indusind-bank",
    bankName: "IndusInd Bank",
    logoBg: "from-red-700 to-red-900",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹5 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "https://wee.bnking.in/c/Zjg0ZmE1M",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹5 Lakhs",
        description: "Get instant loan amounts of up to ₹5 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "incred-finance",
    bankName: "InCred Finance",
    logoBg: "from-orange-500 to-blue-800",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "24.00% p.a.",
    maxAmount: "72 Lakh",
    maxTenure: "",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "http://loan.gromo.in/in/lvCoDKrQPn",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Same Day Disbursement",
        description: "Eligible loans can be disbursed on the same day.",
        iconName: "Clock",
      },
      {
        id: "b3",
        title: "Loan Amount up to 72 Lakh",
        description: "Get instant loan amounts of up to 72 Lakh.",
        iconName: "TrendingUp",
      },
      {
        id: "b4",
        title: "Minimum Documentation",
        description: "Loan processing requires minimum documentation.",
        iconName: "FileCheck",
      },
      {
        id: "b5",
        title: "Flexible Loan Tenure",
        description: "Flexible loan tenure options are available.",
        iconName: "CalendarDays",
      },
      {
        id: "b6",
        title: "No Collateral Required",
        description: "No collateral is required for the loan.",
        iconName: "BadgeCheck",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e2",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 720+ and above required",
      },
      {
        id: "e3",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e4",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "aditya-birla-finance",
    bankName: "Aditya Birla Finance",
    logoBg: "from-orange-600 to-red-800",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹7 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "https://wee.bnking.in/c/NTkwOTIzM",
    contactNumbers: ["7699578829"],
    applyLink: "https://wee.bnking.in/c/NTkwOTIzM",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹7 Lakhs",
        description: "Get instant loan amounts of up to ₹7 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "kreditbee",
    bankName: "KreditBee",
    logoBg: "from-slate-900 to-yellow-500",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "22.50% p.a.",
    maxAmount: "₹2 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["9732707100", "9474530839", "7407405050"],
    applyLink: "https://wee.bnking.in/c/MDg5MDU5Y",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹2 Lakhs",
        description: "Get instant loan amounts of up to ₹2 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
    ],
  },
  {
    id: "moneyview",
    bankName: "Moneyview",
    logoBg: "from-green-700 to-green-900",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹5 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["9732707100", "9474530839", "7407405050"],
    applyLink: "https://wee.bnking.in/c/ZGY5Y2I3M",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹5 Lakhs",
        description: "Get instant loan amounts of up to ₹5 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "ram-fincorp",
    bankName: "Ram Fincorp",
    logoBg: "from-teal-500 to-cyan-700",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹7 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "https://wee.bnking.in/c/ZjhjNTYzZ",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹7 Lakhs",
        description: "Get instant loan amounts of up to ₹7 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "unity-small-finance-bank",
    bankName: "Unity Small Finance Bank",
    logoBg: "from-yellow-400 to-yellow-600",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹5 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "https://wee.bnking.in/c/NTRjYzMzM",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹5 Lakhs",
        description: "Get instant loan amounts of up to ₹5 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "ring-instant-loan",
    bankName: "Ring",
    logoBg: "from-blue-700 to-indigo-900",
    tagline: "Instant Loan (without Income Proof)",
    productName: "instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹5 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "https://wee.bnking.in/c/NGI0ZmY3N",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹5 Lakhs",
        description: "Get instant loan amounts of up to ₹5 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "navi",
    bankName: "Navi",
    logoBg: "from-black to-slate-900",
    tagline: "Instant Loan (without Income Proof)",
    productName: "instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹10 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "https://wee.bnking.in/c/OWE1OWZkY",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹10 Lakhs",
        description: "Get instant loan amounts of up to ₹10 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "credit-sea",
    bankName: "CreditSea",
    logoBg: "from-blue-500 to-cyan-600",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹2 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "https://wee.bnking.in/c/OTJjMzU0M",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹2 Lakhs",
        description: "Get instant loan amounts of up to ₹2 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "tata-capital",
    bankName: "Tata Capital",
    logoBg: "from-blue-700 to-blue-900",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "17.99% p.a.",
    maxAmount: "₹5 Lakhs",
    maxTenure: "",
    processingTime: "Quick Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Quick Disbursement",
        description: "Quick loan disbursement process available.",
        iconName: "Clock",
      },
      {
        id: "b3",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b4",
        title: "Flexible Loan Tenure",
        description: "Flexible loan tenure options are available.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹5 Lakhs",
        description: "Get instant loan amounts of up to ₹5 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e2",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 720+ and above required",
      },
      {
        id: "e3",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e4",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "lt-finance",
    bankName: "L&T Finance",
    logoBg: "from-yellow-400 to-yellow-600",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "16.99% p.a.",
    maxAmount: "₹75 Lakhs",
    maxTenure: "",
    processingTime: "Quick Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "Minimum Documentation",
        description: "Loan processing requires minimum documentation.",
        iconName: "FileCheck",
      },
      {
        id: "b2",
        title: "Quick Disbursement",
        description: "Quick loan disbursement process available.",
        iconName: "Clock",
      },
      {
        id: "b3",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b4",
        title: "Flexible Loan Tenure",
        description: "Flexible loan tenure options are available.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹75 Lakhs",
        description: "Get instant loan amounts of up to ₹75 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Required for Applicant",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "smfg-india-credit",
    bankName: "SMFG India Credit",
    logoBg: "from-lime-500 to-green-900",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "18.50% p.a.",
    maxAmount: "₹5 Lakhs",
    maxTenure: "",
    processingTime: "Quick Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "Minimum Documentation",
        description: "Loan processing requires minimum documentation.",
        iconName: "FileCheck",
      },
      {
        id: "b2",
        title: "Quick Disbursement",
        description: "Quick loan disbursement process available.",
        iconName: "Clock",
      },
      {
        id: "b3",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b4",
        title: "Flexible Loan Tenure",
        description: "Flexible loan tenure options are available.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹5 Lakhs",
        description: "Get instant loan amounts of up to ₹5 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e2",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e3",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e4",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "instamoney",
    bankName: "Instamoney",
    logoBg: "from-purple-600 to-fuchsia-700",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹7 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["9732707100", "9474530839", "7407405050"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹7 Lakhs",
        description: "Get instant loan amounts of up to ₹7 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "trillion-loans",
    bankName: "Trillion Loans",
    logoBg: "from-blue-600 to-blue-900",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹2 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹2 Lakhs",
        description: "Get instant loan amounts of up to ₹2 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "rupee112",
    bankName: "Rupee112",
    logoBg: "from-red-600 to-blue-900",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹2 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹2 Lakhs",
        description: "Get instant loan amounts of up to ₹2 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "true-balance",
    bankName: "True Balance",
    logoBg: "from-orange-500 to-orange-700",
    tagline: "Instant Loan (without Income Proof)",
    productName: "Instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹2 Lakhs",
    maxTenure: "Up to 36 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 36 Months Tenure",
        description: "Loan tenure is available for up to 36 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹2 Lakhs",
        description: "Get instant loan amounts of up to ₹2 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "navi",
    bankName: "Navi",
    logoBg: "from-green-500 to-purple-900",
    tagline: "Instant Loan (without Income Proof)",
    productName: "instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹10 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹10 Lakhs",
        description: "Get instant loan amounts of up to ₹10 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "moneycontrol",
    bankName: "Moneycontrol",
    logoBg: "from-green-600 to-blue-700",
    tagline: "Instant Loan (without Income Proof)",
    productName: "instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹2 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹2 Lakhs",
        description: "Get instant loan amounts of up to ₹2 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "loan-122",
    bankName: "Loan 122",
    logoBg: "from-blue-700 to-blue-900",
    tagline: "Instant Loan (without Income Proof)",
    productName: "instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹2 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹2 Lakhs",
        description: "Get instant loan amounts of up to ₹2 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },

  {
    id: "insta-mudra",
    bankName: "Insta Mudra",
    logoBg: "from-purple-700 to-rose-600",
    tagline: "Instant Loan (without Income Proof)",
    productName: "instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹3 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹3 Lakhs",
        description: "Get instant loan amounts of up to ₹3 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "i2i-funding",
    bankName: "I2I Funding",
    logoBg: "from-orange-500 via-blue-900 to-green-600",
    tagline: "Instant Loan (without Income Proof)",
    productName: "instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹3 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹3 Lakhs",
        description: "Get instant loan amounts of up to ₹3 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },

  {
    id: "chintamani-finlease",
    bankName: "Chintamani Finlease",
    logoBg: "from-red-700 to-blue-800",
    tagline: "Instant Loan (without Income Proof)",
    productName: "instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹2 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹2 Lakhs",
        description: "Get instant loan amounts of up to ₹2 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "cashe",
    bankName: "CASHe",
    logoBg: "from-stone-500 to-orange-500",
    tagline: "Instant Loan (without Income Proof)",
    productName: "instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹5 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹5 Lakhs",
        description: "Get instant loan amounts of up to ₹5 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "branch",
    bankName: "Branch",
    logoBg: "from-sky-500 to-blue-900",
    tagline: "Instant Loan (without Income Proof)",
    productName: "instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹5 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["9732707100", "9474530839", "7407405050"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹5 Lakhs",
        description: "Get instant loan amounts of up to ₹5 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
  {
    id: "bharat-loan",
    bankName: "Bharat Loan",
    logoBg: "from-blue-600 to-rose-500",
    tagline: "Instant Loan (without Income Proof)",
    productName: "instant Loan",
    roiStarting: "17.50% p.a.",
    maxAmount: "₹5 Lakhs",
    maxTenure: "Up to 60 Months",
    processingTime: "",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the instant loan process digitally.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Hussle Free Services",
        description: "Hussle free services are available with the loan.",
        iconName: "BadgeCheck",
      },
      {
        id: "b3",
        title: "Can Login All Location Files",
        description: "Loan files can be logged in from all locations.",
        iconName: "MapPin",
      },
      {
        id: "b4",
        title: "Up to 60 Months Tenure",
        description: "Loan tenure is available for up to 60 months.",
        iconName: "CalendarDays",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹5 Lakhs",
        description: "Get instant loan amounts of up to ₹5 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Vintage",
        detail: "Minimum 2 years vintage required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 23 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 710+ and above required",
      },
      {
        id: "e4",
        requirement: "USL Track",
        detail: "Customer should have at least one USL track",
      },
      {
        id: "e5",
        requirement: "DPD / Overdue",
        detail: "No DPD or overdue allowed in the last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "KYC Documents (PAN & Aadhar)",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank Statement",
        category: "Financial Proof",
      },
    ],
  },
];
