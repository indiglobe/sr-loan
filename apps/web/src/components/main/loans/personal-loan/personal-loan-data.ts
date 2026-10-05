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

export const banksLoanData: BankLoanData[] = [
  {
    id: "idfc-first-bank",
    bankName: "IDFC FIRST Bank",
    logoBg: "from-red-900 to-red-950",
    tagline: "Always You First",
    productName: "Personal Loan",
    roiStarting: "10.99% p.a.",
    maxAmount: "₹1 Crore",
    maxTenure: "84 Months",
    processingTime: "3 Hours TAT",
    contactNumbers: ["7699578829"],
    applyLink: "https://trkkcoin.com/ITC50525445/79JFNR?ln=English",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Paperless application with fast online verification.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Quick Disbursement",
        description: "Login to Disbursement TAT in only 3 Hours.",
        iconName: "Clock",
      },
      {
        id: "b3",
        title: "Zero Foreclosure",
        description: "Anytime foreclosure with ZERO extra charges.",
        iconName: "DollarSign",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹1 Crore.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹20k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 60 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above preferred",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online directly in bank account",
      },
      {
        id: "e5",
        requirement: "Active Loans",
        detail: "Should not have more than 3 active loans",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS / IT Returns",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
    ],
  },
  {
    id: "incred-finance",
    bankName: "InCred Finance",
    logoBg: "from-orange-600 to-blue-900",
    tagline: "SR Loan Services",
    productName: "Personal Loan",
    roiStarting: "13.99%",
    maxAmount: "₹10 Lakh",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "http://loan.gromo.in/in/lvCoDKrQPn",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Paperless application process.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Same Day Disbursement",
        description: "Fast processing and quick payout.",
        iconName: "Clock",
      },
      {
        id: "b3",
        title: "High Loan Amount",
        description: "Loan amount up to 10 Lakh.",
        iconName: "TrendingUp",
      },
      {
        id: "b4",
        title: "(-1) CIBIL Support",
        description: "(-1) CIBIL Can be Sourced.",
        iconName: "AlertCircle",
      },
      {
        id: "b5",
        title: "Flexible Tenure",
        description: "Flexible Loan tenure.",
        iconName: "Calendar",
      },
      {
        id: "b6",
        title: "Proprietorship Firm Support",
        description: "Proprietorship firm can be sourced.",
        iconName: "Briefcase",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min 15k Salary required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Age 21-56",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 680+ and above",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
      },
      {
        id: "e5",
        requirement: "Active Loans",
        detail: "Should not be more than 3 Loan active",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "Kyc required (PAN & [Aadhaar Redacted])",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank statement",
        category: "Financial Proof",
      },
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "From 16/ 26AS /PF statment",
        category: "Tax & PF Proof",
      },
      {
        id: "d5",
        documentName: "Company Id card",
        category: "Employment Proof",
      },
    ],
  },
  {
    id: "hdfc-bank",
    bankName: "HDFC Bank",
    logoBg: "from-blue-900 to-indigo-950",
    tagline: "We Understand Your World",
    productName: "Personal Loan",
    roiStarting: "10.50% p.a.",
    maxAmount: "₹40 Lakhs",
    maxTenure: "72 Months",
    processingTime: "Instant / 4 Hours",
    contactNumbers: ["7699578829"],
    applyLink: "https://wee.bnking.in/c/NjdiZGYyY ",
    benefits: [
      {
        id: "h1",
        title: "Pre-Approved Offers",
        description: "Instant disbursal for existing HDFC account holders.",
        iconName: "CheckCircle2",
      },
      {
        id: "h2",
        title: "Minimal Documentation",
        description: "Quick approvals with hassle-free paperwork.",
        iconName: "ShieldCheck",
      },
      {
        id: "h3",
        title: "Flexible Repayment",
        description: "Tenure options ranging from 12 to 72 months.",
        iconName: "Calendar",
      },
      {
        id: "h4",
        title: "Balance Transfer Facility",
        description: "Lower your existing high-interest loans easily.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "he1",
        requirement: "Minimum Salary",
        detail: "Min ₹25k salary per month for salaried employees",
      },
      {
        id: "he2",
        requirement: "Age Limit",
        detail: "21 to 60 years at loan maturity",
      },
      {
        id: "he3",
        requirement: "CIBIL Score",
        detail: "CIBIL score of 750+ gets priority rates",
      },
      {
        id: "he4",
        requirement: "Work Experience",
        detail: "At least 2 years of total experience with 1 year continuous",
      },
    ],
    requiredDocuments: [
      { id: "hd1", documentName: "PAN Card / Aadhaar Card", category: "KYC" },
      {
        id: "hd2",
        documentName: "Salary Slips for Last 3 Months",
        category: "Income",
      },
      {
        id: "hd3",
        documentName: "Bank Statements of Last 6 Months",
        category: "Banking",
      },
      {
        id: "hd4",
        documentName: "Employment Certificate",
        category: "Job Proof",
      },
    ],
  },
  {
    id: "icici-bank",
    bankName: "ICICI Bank",
    logoBg: "from-orange-900 to-amber-950",
    tagline: "Hum Hai Na",
    productName: "Instant Personal Loan",
    roiStarting: "10.75% p.a.",
    maxAmount: "₹50 Lakhs",
    maxTenure: "72 Months",
    processingTime: "Same Day Disbursal",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "i1",
        title: "End-to-End Digital",
        description: "Paperless application via netbanking or mobile app.",
        iconName: "ShieldCheck",
      },
      {
        id: "i2",
        title: "No Collateral Needed",
        description: "Unsecured personal loan with zero guarantor requirement.",
        iconName: "DollarSign",
      },
      {
        id: "i3",
        title: "Overdraft Facility",
        description: "Pay interest only on the utilized loan amount.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "ie1",
        requirement: "Income Criteria",
        detail: "Minimum net monthly income of ₹30,000",
      },
      {
        id: "ie2",
        requirement: "Age Criteria",
        detail: "23 years to 58 years",
      },
      {
        id: "ie3",
        requirement: "Credit History",
        detail: "Clean repayment history with 720+ CIBIL score",
      },
    ],
    requiredDocuments: [
      { id: "id1", documentName: "Identity & Address Proof", category: "KYC" },
      {
        id: "id2",
        documentName: "Latest 3 Months Salary Slip",
        category: "Income",
      },
      {
        id: "id3",
        documentName: "Salary Account Statement (3 months)",
        category: "Bank Proof",
      },
    ],
  },
  {
    id: "axis-bank",
    bankName: "Axis Bank",
    logoBg: "from-rose-950 to-purple-950",
    tagline: "Dil Se Open",
    productName: "Personal Loan",
    roiStarting: "10.49% p.a.",
    maxAmount: "₹40 Lakhs",
    maxTenure: "60 Months",
    processingTime: "48 Hours",
    contactNumbers: ["7699578829"],
    applyLink: "https://trkkcoin.com/ITC47382247/79JFNR?ln=English",
    benefits: [
      {
        id: "ax1",
        title: "Quick Processing",
        description: "Swift approval and direct credit to bank account.",
        iconName: "Clock",
      },
      {
        id: "ax2",
        title: "Part-Payment Facility",
        description: "Option to make part payments after 12 EMIs.",
        iconName: "DollarSign",
      },
    ],
    eligibility: [
      {
        id: "axe1",
        requirement: "Salary Requirement",
        detail: "Minimum monthly salary of ₹25,000",
      },
      { id: "axe2", requirement: "Age", detail: "21 to 60 years" },
    ],
    requiredDocuments: [
      { id: "axd1", documentName: "PAN Card / Aadhaar", category: "KYC" },
      {
        id: "axd2",
        documentName: "Bank Statements (3 months)",
        category: "Banking",
      },
    ],
  },
  {
    id: "kotak",
    bankName: "Kotak Mahindra Bank",
    logoBg: "from-red-950 to-stone-950",
    tagline: "Lets Make Money Simple",
    productName: "Smart Personal Loan",
    roiStarting: "10.99% p.a.",
    maxAmount: "₹40 Lakhs",
    maxTenure: "60 Months",
    processingTime: "Instant Approval",
    contactNumbers: ["7699578829"],
    applyLink: "https://trkkcoin.com/IT2162NSN3/79JFNR?ln=English",
    benefits: [
      {
        id: "k1",
        title: "Customized EMI Plans",
        description: "Tailored repayment structures to match your cashflow.",
        iconName: "Calendar",
      },
      {
        id: "k2",
        title: "Dedicated Relationship Manager",
        description: "Expert assistance throughout your loan tenure.",
        iconName: "UserCheck",
      },
    ],
    eligibility: [
      {
        id: "ke1",
        requirement: "Income",
        detail: "Minimum ₹30,000 monthly income",
      },
      { id: "ke2", requirement: "Age", detail: "21 to 58 years" },
    ],
    requiredDocuments: [
      {
        id: "kd1",
        documentName: "Standard KYC & Income Proof",
        category: "General",
      },
    ],
  },
  {
    id: "prefr",
    bankName: "Prefr",
    logoBg: "from-blue-700 to-indigo-900",
    tagline: "SR Loan Services",
    productName: "Personal Loan (UTM LINK)",
    roiStarting: "12.99%",
    maxAmount: "₹25 Lakhs",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "https://wee.bnking.in/c/OGNhYjQ3O ",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Paperless application process.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Same Day Disbursement",
        description: "Fast processing and quick payout.",
        iconName: "Clock",
      },
      {
        id: "b3",
        title: "Proprietorship Firm Support",
        description: "Proprietorship firm can be sourced.",
        iconName: "Briefcase",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Loan amount up to 25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min 15k Salary required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Age 21-58",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
      },
      {
        id: "e5",
        requirement: "Repayment Track",
        detail: "No DPD or Overdue allowed in last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "Kyc required (PAN & [Aadhaar Redacted])",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank statement",
        category: "Financial Proof",
      },
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "From 16/ 26AS /",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company Id card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric bill",
        category: "Address Proof",
      },
    ],
  },
  {
    id: "aditya-birla-capital",
    bankName: "Aditya Birla Capital",
    logoBg: "from-orange-500 to-red-700",
    tagline: "SR Loan Service Recomended",
    productName: "Personal Loan",
    roiStarting: "10.99% p.a.",
    maxAmount: "₹25 Lakhs",
    maxTenure: "60 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "https://wee.bnking.in/c/NTkwOTIzM",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Zero Foreclosure Charges",
        description: "Repay anytime with ZERO foreclosure charges.",
        iconName: "DollarSign",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 60 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹18k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 58 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
    ],
  },
  {
    id: "hero-fincorp",
    bankName: "Hero FinCorp",
    logoBg: "from-green-500 to-emerald-700",
    tagline: "Instant Personal Loan",
    productName: "Personal Loan",
    roiStarting: "14.99% p.a.",
    maxAmount: "₹10 Lakhs",
    maxTenure: "60 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["9732707100", "9474530839", "7407405050"],
    applyLink: "https://wee.bnking.in/c/MzcwZmRjN",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Proprietorship Firm Accepted",
        description:
          "Applicants working with proprietorship firms can be sourced.",
        iconName: "Building2",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 60 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹10 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹15k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 58 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
    ],
  },
  {
    id: "bajaj-finance",
    bankName: "Bajaj Finance",
    logoBg: "from-blue-500 to-blue-800",
    tagline: "SR Loan Service Recomended",
    productName: "Personal Loan",
    roiStarting: "12.99% p.a.",
    maxAmount: "₹25 Lakhs",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "https://wee.bnking.in/c/MWNkOTA1Y",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Proprietorship Firm Accepted",
        description:
          "Applicants working with proprietorship firms can be sourced.",
        iconName: "Building2",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹27k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 58 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric Bill",
        category: "Address Proof",
      },
    ],
  },
  {
    id: "indusind-bank",
    bankName: "IndusInd Bank",
    logoBg: "from-red-700 to-red-900",
    tagline: "SR Loan Service Recomended",
    productName: "Personal Loan",
    roiStarting: "12.99% p.a.",
    maxAmount: "₹25 Lakhs",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "https://wee.bnking.in/c/Zjg0ZmE1M",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Proprietorship Firm Accepted",
        description:
          "Applicants working with proprietorship firms can be sourced.",
        iconName: "Building2",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹20k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 58 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric Bill",
        category: "Address Proof",
      },
    ],
  },
  {
    id: "yes-bank",
    bankName: "YES Bank",
    logoBg: "from-blue-700 to-red-600",
    tagline: "SR Loan Service Recomended",
    productName: "Personal Loan",
    roiStarting: "12.99% p.a.",
    maxAmount: "₹25 Lakhs",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["9732707100", "9474530839", "7407405050"],
    applyLink: "https://wee.bnking.in/c/NjRlYzY1M ",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Proprietorship Firm Accepted",
        description:
          "Applicants working with proprietorship firms can be sourced.",
        iconName: "Building2",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹20k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 58 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric Bill",
        category: "Address Proof",
      },
    ],
  },
  {
    id: "bajaj-finance-utm",
    bankName: "Bajaj Finance",
    logoBg: "from-blue-500 to-blue-800",
    tagline: "SR Loan Service Recomended",
    productName: "Personal Loan",
    roiStarting: "12.99% p.a.",
    maxAmount: "₹25 Lakhs",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "https://wee.bnking.in/c/MWNkOTA1Y",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Proprietorship Firm Accepted",
        description:
          "Applicants working with proprietorship firms can be sourced.",
        iconName: "Building2",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹15k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 58 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric Bill",
        category: "Address Proof",
      },
    ],
  },
  {
    id: "shriram-finance",
    bankName: "Shriram Finance",
    logoBg: "from-amber-400 to-amber-500",
    tagline: "SR Loan Services",
    productName: "Personal Loan",
    roiStarting: "17.99%",
    maxAmount: "₹25 Lakhs",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Paperless application process.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Same Day Disbursement",
        description: "Fast processing and quick payout.",
        iconName: "Clock",
      },
      {
        id: "b3",
        title: "Proprietorship Firm Support",
        description: "Proprietorship firm can be sourced.",
        iconName: "Briefcase",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Loan amount up to 25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min 15k Salary required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Age 21-58",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
      },
      {
        id: "e5",
        requirement: "Repayment Track",
        detail: "No DPD or Overdue allowed in last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "Kyc required (PAN & [Aadhaar Redacted])",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank statement",
        category: "Financial Proof",
      },
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "From 16/ 26AS /",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company Id card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric bill",
        category: "Address Proof",
      },
    ],
  },
  {
    id: "money-wide",
    bankName: "Money Wide",
    logoBg: "from-purple-900 to-blue-900",
    tagline: "SR Loan Services",
    productName: "Personal Loan",
    roiStarting: "15.99%",
    maxAmount: "₹25 Lakhs",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Paperless application process.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Same Day Disbursement",
        description: "Fast processing and quick payout.",
        iconName: "Clock",
      },
      {
        id: "b3",
        title: "Proprietorship Firm Support",
        description: "Proprietorship firm can be sourced.",
        iconName: "Briefcase",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Loan amount up to 25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min 15k Salary required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Age 21-58",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
      },
      {
        id: "e5",
        requirement: "Repayment Track",
        detail: "No DPD or Overdue allowed in last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "Kyc required (PAN & [Aadhaar Redacted])",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank statement",
        category: "Financial Proof",
      },
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "From 16/ 26AS /",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company Id card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric bill",
        category: "Address Proof",
      },
    ],
  },
  {
    id: "upwards",
    bankName: "Upwards",
    logoBg: "from-green-600 to-green-800",
    tagline: "SR Loan Services",
    productName: "Personal Loan",
    roiStarting: "15.99%",
    maxAmount: "₹25 Lakhs",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Paperless application process.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Same Day Disbursement",
        description: "Fast processing and quick payout.",
        iconName: "Clock",
      },
      {
        id: "b3",
        title: "Proprietorship Firm Support",
        description: "Proprietorship firm can be sourced.",
        iconName: "Briefcase",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Loan amount up to 25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min 15k Salary required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Age 21-58",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
      },
      {
        id: "e5",
        requirement: "Repayment Track",
        detail: "No DPD or Overdue allowed in last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "Kyc required (PAN & [Aadhaar Redacted])",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank statement",
        category: "Financial Proof",
      },
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "From 16/ 26AS /",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company Id card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric bill",
        category: "Address Proof",
      },
    ],
  },
  {
    id: "paysense",
    bankName: "PaySense",
    logoBg: "from-blue-600 to-blue-900",
    tagline: "Lendinet Financial Consultant Pvt Ltd",
    productName: "Personal Loan",
    roiStarting: "15.99%",
    maxAmount: "₹25 Lakhs",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Paperless application process.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Same Day Disbursement",
        description: "Fast processing and quick payout.",
        iconName: "Clock",
      },
      {
        id: "b3",
        title: "Proprietorship Firm Support",
        description: "Proprietorship firm can be sourced.",
        iconName: "Briefcase",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Loan amount up to 25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min 15k Salary required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Age 21-58",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
      },
      {
        id: "e5",
        requirement: "Repayment Track",
        detail: "No DPD or Overdue allowed in last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "Kyc required (PAN & [Aadhaar Redacted])",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank statement",
        category: "Financial Proof",
      },
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "From 16/ 26AS /",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company Id card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric bill",
        category: "Address Proof",
      },
    ],
  },

  {
    id: "fibe",
    bankName: "Fibe",
    logoBg: "from-teal-600 to-teal-900",
    tagline: "SR Loan Services",
    productName: "Personal Loan (UTM LINK)",
    roiStarting: "12.99%",
    maxAmount: "₹25 Lakhs",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Paperless application process.",
        iconName: "ShieldCheck",
      },
      {
        id: "b2",
        title: "Same Day Disbursement",
        description: "Fast processing and quick payout.",
        iconName: "Clock",
      },
      {
        id: "b3",
        title: "Proprietorship Firm Support",
        description: "Proprietorship firm can be sourced.",
        iconName: "Briefcase",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Loan amount up to 25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min 15k Salary required",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Age 21-58",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
      },
      {
        id: "e5",
        requirement: "Repayment Track",
        detail: "No DPD or Overdue allowed in last 6 months",
      },
    ],
    requiredDocuments: [
      {
        id: "d1",
        documentName: "Kyc required (PAN & [Aadhaar Redacted])",
        category: "Identity & Address",
      },
      {
        id: "d2",
        documentName: "6 Month Bank statement",
        category: "Financial Proof",
      },
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "From 16/ 26AS /",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company Id card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric bill",
        category: "Address Proof",
      },
    ],
  },
  {
    id: "finnable",
    bankName: "Finnable",
    logoBg: "from-red-700 to-red-900",
    tagline: "Let's Make It Come True",
    productName: "Personal Loan",
    roiStarting: "15.99% p.a.",
    maxAmount: "₹10 Lakhs",
    maxTenure: "",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Proprietorship Firm Accepted",
        description:
          "Applicants working with proprietorship firms can be sourced.",
        iconName: "Building2",
      },
      {
        id: "b4",
        title: "Current Address Proof",
        description:
          "Current address proof may be considered during processing.",
        iconName: "MapPin",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹10 Lakhs",
        description: "Get personal loan amounts of up to ₹10 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹15k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 58 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 680 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
    ],
  },
  {
    id: "piramal-finance",
    bankName: "Piramal Finance",
    logoBg: "from-orange-600 to-red-700",
    tagline: "SR Loan Service Recomended",
    productName: "Personal Loan",
    roiStarting: "11.99% p.a.",
    maxAmount: "₹25 Lakhs",
    maxTenure: "60 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Zero Foreclosure Charges",
        description: "Repay anytime with ZERO foreclosure charges.",
        iconName: "DollarSign",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 60 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹20k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 60 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
    ],
  },
  {
    id: "smef-india-credit",
    bankName: "SMEF IndiaCredit",
    logoBg: "from-lime-500 to-green-800",
    tagline: "Pragati Ki Navi Pehchaan",
    productName: "Personal Loan",
    roiStarting: "12.49% p.a.",
    maxAmount: "₹25 Lakhs",
    maxTenure: "60 Months",
    processingTime: "N/A",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "Minimum Documentation",
        description: "Apply with minimum documentation requirements.",
        iconName: "FileCheck",
      },
      {
        id: "b2",
        title: "Proprietorship Firm Accepted",
        description:
          "Applicants working with proprietorship firms can be sourced.",
        iconName: "Building2",
      },
      {
        id: "b3",
        title: "Pension Files Accepted",
        description: "Pension files can also be sourced for loan processing.",
        iconName: "WalletCards",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 60 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹16k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 65 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 680 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
    ],
  },
  {
    id: "axis-finance",
    bankName: "Axis Finance",
    logoBg: "from-pink-600 to-rose-800",
    tagline: "SR Loan Service Recomended",
    productName: "Personal Loan",
    roiStarting: "11.99% p.a.",
    maxAmount: "₹25 Lakhs",
    maxTenure: "60 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Zero Foreclosure Charges",
        description: "Repay anytime with ZERO foreclosure charges.",
        iconName: "DollarSign",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 60 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹15k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 58 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
    ],
  },

  {
    id: "werize",
    bankName: "WeRize",
    logoBg: "from-orange-500 to-green-700",
    tagline: "SR Loan Service Recomended",
    productName: "Personal Loan",
    roiStarting: "16.99% p.a.",
    maxAmount: "₹5 Lakhs",
    maxTenure: "36 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Proprietorship Firm Accepted",
        description:
          "Applicants working with proprietorship firms can be sourced.",
        iconName: "Building2",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 36 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "Loan Amount up to ₹5 Lakhs",
        description: "Get approved for loan amounts up to ₹5 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹12k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 58 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 650 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
        documentName: "12 Month Bank Statement",
        category: "Financial Proof",
      },
      {
        id: "d3",
        documentName: "1 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric Bill",
        category: "Address Proof",
      },
    ],
  },
  {
    id: "l-and-t-finance",
    bankName: "L&T Finance",
    logoBg: "from-yellow-400 to-yellow-600",
    tagline: "SR Loan Service Recomended",
    productName: "Personal Loan",
    roiStarting: "12.00% p.a.",
    maxAmount: "₹15 Lakhs",
    maxTenure: "48 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Proprietorship Firm Accepted",
        description:
          "Applicants working with proprietorship firms can be sourced.",
        iconName: "Building2",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 48 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹15 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹20k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 58 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 725 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric Bill",
        category: "Address Proof",
      },
    ],
  },
  {
    id: "chola-finance",
    bankName: "Chola Finance",
    logoBg: "from-blue-700 to-red-700",
    tagline: "Enter a better life",
    productName: "Personal Loan",
    roiStarting: "12.99% p.a.",
    maxAmount: "₹25 Lakhs",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Proprietorship Firm Accepted",
        description:
          "Applicants working with proprietorship firms can be sourced.",
        iconName: "Building2",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹20k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 58 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric Bill",
        category: "Address Proof",
      },
    ],
  },

  {
    id: "poonawalla-fincorp",
    bankName: "Poonawalla Fincorp",
    logoBg: "from-blue-800 to-slate-900",
    tagline: "SR Loan Service Recomended",
    productName: "Personal Loan",
    roiStarting: "12.99% p.a.",
    maxAmount: "₹25 Lakhs",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "https://wee.bnking.in/c/ZTEzOWFlY",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Proprietorship Firm Accepted",
        description:
          "Applicants working with proprietorship firms can be sourced.",
        iconName: "Building2",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹30k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 58 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric Bill",
        category: "Address Proof",
      },
    ],
  },
  {
    id: "tvs-credit",
    bankName: "TVS Credit",
    logoBg: "from-blue-700 to-green-700",
    tagline: "SR Loan Service Recomended",
    productName: "Personal Loan",
    roiStarting: "12.99% p.a.",
    maxAmount: "₹25 Lakhs",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Proprietorship Firm Accepted",
        description:
          "Applicants working with proprietorship firms can be sourced.",
        iconName: "Building2",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹20k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 58 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric Bill",
        category: "Address Proof",
      },
    ],
  },
  {
    id: "tata-capital",
    bankName: "Tata Capital",
    logoBg: "from-blue-700 to-blue-900",
    tagline: "Count on us",
    productName: "Personal Loan",
    roiStarting: "12.99% p.a.",
    maxAmount: "₹25 Lakhs",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Proprietorship Firm Accepted",
        description:
          "Applicants working with proprietorship firms can be sourced.",
        iconName: "Building2",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹20k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 58 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric Bill",
        category: "Address Proof",
      },
    ],
  },
  {
    id: "bandhan-bank",
    bankName: "Bandhan Bank",
    logoBg: "from-red-600 to-red-800",
    tagline: "SR Loan Service Recomended",
    productName: "Personal Loan",
    roiStarting: "12.99% p.a.",
    maxAmount: "₹25 Lakhs",
    maxTenure: "84 Months",
    processingTime: "Same Day Disbursement",
    contactNumbers: ["7699578829"],
    applyLink: "",
    benefits: [
      {
        id: "b1",
        title: "100% Digital Process",
        description: "Complete the personal loan process digitally.",
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
        title: "Proprietorship Firm Accepted",
        description:
          "Applicants working with proprietorship firms can be sourced.",
        iconName: "Building2",
      },
      {
        id: "b4",
        title: "Flexible Tenure",
        description: "Repay comfortably with up to 84 Months tenure.",
        iconName: "Calendar",
      },
      {
        id: "b5",
        title: "High Loan Amount",
        description: "Get approved for loan amounts up to ₹25 Lakhs.",
        iconName: "TrendingUp",
      },
    ],
    eligibility: [
      {
        id: "e1",
        requirement: "Minimum Salary",
        detail: "Min ₹25k salary required per month",
      },
      {
        id: "e2",
        requirement: "Age Limit",
        detail: "Applicant age between 21 to 58 years",
      },
      {
        id: "e3",
        requirement: "CIBIL Score",
        detail: "CIBIL Score 700 and above required",
      },
      {
        id: "e4",
        requirement: "Salary Account",
        detail: "Salary should be credited online in bank account",
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
      {
        id: "d3",
        documentName: "3 Month Salary Slip",
        category: "Income Proof",
      },
      {
        id: "d4",
        documentName: "Form 16 / 26AS",
        category: "Tax Proof",
      },
      {
        id: "d5",
        documentName: "Company ID Card",
        category: "Employment Proof",
      },
      {
        id: "d6",
        documentName: "Electric Bill",
        category: "Address Proof",
      },
    ],
  },
];
