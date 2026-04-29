const storageKey = "lawyers-diary-data-v1";

const MAIN_CASE_ID = "case-main";
const SESSION_CASE_ID = "case-sessions";
const MAIN_CASE_NAME = "PWDVA JMFC Court";
const SESSION_CASE_NAME = "Session Court - Appeal";
const APP_STATE_VERSION = 2;

function createSessionCaseData() {
  return {
    profile: {
      role: "Respondent",
      court: "District and Session Court, Pune",
      caseType: "PWDVA APPLN. - APPLICATION UNDER DOMESTIC VIOLENCE ACT",
      filingNumber: "13035/2025",
      registrationNumber: "90/2025",
      cnrNumber: "MHPU010200322025",
      eFilingNumber: "AMH20230052824C202500021",
      filingDate: "2025-12-15",
      registrationDate: "2025-12-17",
      eFilingDate: "2025-12-15",
      firstHearingDate: "2025-12-19",
      currentStage: "Awaiting Notice",
      judge: "DISTRICT JUDGE-21 AND ADDL. SESSIONS JUDGE PUNE",
      acts: ["Limitation Act"],
      sections: ["5"],
      petitioner: ["Prashant Ramchandra Jadhav"],
      petitionerAdvocate: "Thombare Ravishankar Bibishanrao",
      respondents: ["Priyanka Prashant Jadhav", "Palak Prashant Jadhav", "The State of Maharashtra"],
      respondentAdvocate: "-"
    },
    hearings: [
      {
        businessDate: "2026-04-22",
        hearingDate: "2026-06-08",
        purpose: "Awaiting Notice",
        judge: "DISTRICT JUDGE-21 AND ADDL. SESSIONS JUDGE PUNE"
      },
      {
        businessDate: "2026-04-08",
        hearingDate: "2026-04-22",
        purpose: "Awaiting Notice",
        judge: "DISTRICT JUDGE-21 AND ADDL. SESSIONS JUDGE PUNE"
      },
      {
        businessDate: "2026-03-10",
        hearingDate: "2026-04-08",
        purpose: "Awaiting Notice",
        judge: "DISTRICT JUDGE-21 AND ADDL. SESSIONS JUDGE PUNE"
      },
      {
        businessDate: "2026-01-30",
        hearingDate: "2026-03-10",
        purpose: "Awaiting Notice",
        judge: "DISTRICT JUDGE-23 AND ADDL. SESSIONS JUDGE PUNE"
      },
      {
        businessDate: "2025-12-19",
        hearingDate: "2026-01-30",
        purpose: "Awaiting Notice",
        judge: "DISTRICT JUDGE-21 AND ADDL. SESSIONS JUDGE PUNE"
      }
    ],
    orders: [],
    exhibits: [],
    certifiedCopies: [],
    references: [],
    maintenancePayments: [],
    daughterGifts: [],
    tasks: [],
    notes: [
      {
        id: "n-session-1",
        title: "Session Court - Appeal case added",
        body: "Separate sessions court case created to keep records isolated from the existing case.",
        createdAt: new Date().toISOString()
      }
    ]
  };
}

const requiredOrderDocuments = [
  {
    date: "2025-01-09",
    details: "Maintenance Order",
    attachment: { label: "Maintenenace Order 09012025.pdf", path: "attachments/Maintenenace Order 09012025.pdf" }
  },
  {
    date: "2025-02-15",
    details: "Application - Distrace Warrant",
    attachment: { label: "Application - Distrace Warrant 15022025.pdf", path: "attachments/Application - Distrace Warrant 15022025.pdf" }
  },
  {
    date: "2025-03-15",
    details: "Bailable Warrant Issuance Application",
    attachment: { label: "Bailabale Warrant Issuance Application 15032025.pdf", path: "attachments/Bailabale Warrant Issuance Application 15032025.pdf" }
  },
  {
    date: "2026-03-18",
    details: "Issue NBW",
    attachment: { label: "Issue NBW 18032025.pdf", path: "attachments/Issue NBW 18032025.pdf" }
  },
  {
    date: "2025-03-20",
    details: "Application for Arrest Warrant",
    attachment: { label: "Application for Arrest Warrant 20032025.pdf", path: "attachments/Application for Arrest Warrant 20032025.pdf" }
  },
  {
    date: "2025-05-02",
    details: "Arrest Warrant Issue",
    attachment: { label: "Arrest Warrant Issue 02052025.pdf", path: "attachments/Arrest Warrant Issue 02052025.pdf" }
  },
  {
    date: "2025-06-02",
    details: "Arrest Warrant Against Respondent",
    attachment: { label: "Arrest Warrant against Respondent 02062025.pdf", path: "attachments/Arrest Warrant against Respondent 02062025.pdf" }
  },
  {
    date: "2025-10-29",
    details: "Application Allowed As Prayed",
    attachment: { label: "Application allowed as prayed 29102025.pdf", path: "attachments/Application allowed as prayed 29102025.pdf" }
  }
];

const requiredReferenceJudgements = [
  {
    id: "ref-rajnesh-neha",
    title: "Rajnesh v. Neha",
    citation: "Supreme Court of India | Criminal Appeal No. 730 of 2020 | 04 Nov 2020",
    attachment: { label: "Rajnesh_vs_Neha_2020.pdf", path: "references/Rajnesh_vs_Neha_2020.pdf" }
  },
  {
    id: "ref-aditi-jitesh-2023",
    title: "Aditi alias Mithi v. Jitesh Sharma",
    citation: "2023 INSC 981 | Criminal Appeal No. 3446 of 2023 | 06 Nov 2023",
    attachment: {
      label: "Aditi_alias_Mithi_vs_Jitesh_Sharma_2023_INSC_981.pdf",
      path: "references/Aditi_alias_Mithi_vs_Jitesh_Sharma_2023_INSC_981.pdf"
    }
  },
  {
    id: "ref-arnesh-bihar",
    title: "Arnesh Kumar v. State of Bihar",
    citation: "Supreme Court of India | Criminal Appeal No. 1277 of 2014 | 02 Jul 2014",
    attachment: { label: "Arnesh_Kumar_vs_State_of_Bihar_2014.pdf", path: "references/Arnesh_Kumar_vs_State_of_Bihar_2014.pdf" }
  },
  {
    id: "ref-pwdva-2005",
    title: "Protection of Women from Domestic Violence Act, 2005",
    citation: "Act No. 43 of 2005 | India Code",
    attachment: {
      label: "Protection_of_Women_from_Domestic_Violence_Act_2005.pdf",
      path: "references/Protection_of_Women_from_Domestic_Violence_Act_2005.pdf"
    }
  },
  {
    id: "ref-pwdv-rules-2006",
    title: "Protection of Women from Domestic Violence Rules, 2006",
    citation: "G.S.R. 644(E) | 17 Oct 2006 | India Code",
    attachment: {
      label: "Protection_of_Women_from_Domestic_Violence_Rules_2006.pdf",
      path: "references/Protection_of_Women_from_Domestic_Violence_Rules_2006.pdf"
    }
  },
  {
    id: "ref-fathers-death-certificate-2025",
    title: "Father's Death Certificate",
    citation: "Government of Maharashtra | Municipal Corporation Pimpri Chinchwad Ward 34 | Issued: 08 Jan 2025",
    attachment: {
      label: "IMG_20250108_160211.jpg",
      path: "references/IMG_20250108_160211.jpg"
    }
  },
  {
    id: "ref-ahilyanagar-pension-proof-2025",
    title: "Proof of Presence in Ahilyanagar for Father's Pension Transfer",
    citation: "Supporting proof submitted for transfer of father's pension to mother's name",
    attachment: {
      label: "IMG_20250207_124636.jpg",
      path: "references/IMG_20250207_124636.jpg"
    }
  },
  {
    id: "ref-certified-copy-request-2025-03-05-a",
    title: "Certified Copy Request Application",
    citation: "JMFC Court No. 1 Pune | Application No. 229/25 | Date: 05 Mar 2025",
    attachment: {
      label: "IMG_20250305_133122.jpg",
      path: "references/IMG_20250305_133122.jpg"
    }
  },
  {
    id: "ref-certified-copy-request-2025-03-05-b",
    title: "Certified Copy Request Receipt",
    citation: "Receipt proof for certified copy request | Date: 05 Mar 2025",
    attachment: {
      label: "IMG_20250305_133142.jpg",
      path: "references/IMG_20250305_133142.jpg"
    }
  },
  {
    id: "ref-maintenance-property-order-2025-03-20-a",
    title: "Property Attachment Order for Maintenance Recovery",
    citation: "Supporting order document (police forwarding) | Date: 20 Mar 2025",
    attachment: {
      label: "IMG_20250320_201057.jpg",
      path: "references/IMG_20250320_201057.jpg"
    }
  },
  {
    id: "ref-maintenance-property-order-2025-03-20-b",
    title: "Property Attachment Order for Maintenance Recovery (Court Copy)",
    citation: "Supporting order document (court copy) | Date: 20 Mar 2025",
    attachment: {
      label: "IMG_20250320_201104.jpg",
      path: "references/IMG_20250320_201104.jpg"
    }
  },
  {
    id: "ref-life-events-after-marriage-2007",
    title: "Life Events After Marriage 2007",
    citation: "Reference timeline document submitted by respondent",
    attachment: {
      label: "Life_Events_After_Marriage_2007_compact.pdf",
      path: "references/Life_Events_After_Marriage_2007_compact.pdf"
    }
  }
];

const requiredExhibitEntries = [
  {
    id: "exh-drive-01",
    date: "2026-04-22",
    exhibitNo: "Exh-1",
    description: "Google Drive Exhibit Link 1",
    attachment: {
      label: "Exhibit Link 1",
      path: "https://drive.google.com/file/d/11IqytDrFTgKneoas27F9Fgu0-MhbktMm/view?usp=sharing"
    }
  },
  {
    id: "exh-drive-02",
    date: "2026-04-22",
    exhibitNo: "Exh-2",
    description: "Google Drive Exhibit Link 2",
    attachment: {
      label: "Exhibit Link 2",
      path: "https://drive.google.com/file/d/1ZEh-qWqk0znfqsGZSYb1hRspwk5P_cRu/view?usp=sharing"
    }
  },
  {
    id: "exh-drive-03",
    date: "2026-04-22",
    exhibitNo: "Exh-3",
    description: "Google Drive Exhibit Link 3",
    attachment: {
      label: "Exhibit Link 3",
      path: "https://drive.google.com/file/d/1XDFZLkNo3efD2mchFqHsmPoecZN07rYj/view?usp=sharing"
    }
  },
  {
    id: "exh-drive-04",
    date: "2026-04-22",
    exhibitNo: "Exh-4",
    description: "Google Drive Exhibit Link 4",
    attachment: {
      label: "Exhibit Link 4",
      path: "https://drive.google.com/file/d/1OKSQRLKlQHZ1fXTHIoLxbbi_pRoj3reR/view?usp=sharing"
    }
  },
  {
    id: "exh-drive-05",
    date: "2026-04-22",
    exhibitNo: "Exh-5",
    description: "Google Drive Exhibit Link 5",
    attachment: {
      label: "Exhibit Link 5",
      path: "https://drive.google.com/file/d/1AR9yaQAisyTq_gdFeVCUuGE9Y_T5k2-r/view?usp=sharing"
    }
  },
  {
    id: "exh-drive-07",
    date: "2026-04-22",
    exhibitNo: "Exh-7",
    description: "Google Drive Exhibit Link 7",
    attachment: {
      label: "Exhibit Link 7",
      path: "https://drive.google.com/file/d/1s5s7gOcdrgGSnNA5HUGCKRLDDRJY1F5U/view?usp=sharing"
    }
  },
  {
    id: "exh-drive-08",
    date: "2026-04-22",
    exhibitNo: "Exh-8",
    description: "Google Drive Exhibit Link 8",
    attachment: {
      label: "Exhibit Link 8",
      path: "https://drive.google.com/file/d/1VWq0BETAuop-xPDukX0j01UGNwBhakoP/view?usp=sharing"
    }
  },
  {
    id: "exh-drive-09",
    date: "2026-04-22",
    exhibitNo: "Exh-9",
    description: "Google Drive Exhibit Link 9",
    attachment: {
      label: "Exhibit Link 9",
      path: "https://drive.google.com/file/d/1YlvDYEAJmMJ9iSPl3TqiKn2MKKOLCU3y/view?usp=sharing"
    }
  },
  {
    id: "exh-drive-10",
    date: "2026-04-22",
    exhibitNo: "Exh-10",
    description: "Google Drive Exhibit Link 10",
    attachment: {
      label: "Exhibit Link 10",
      path: "https://drive.google.com/file/d/1_dUEX8pOXHA4PNFF-Z9RXKsUN7kqxQZ_/view?usp=sharing"
    }
  },
  {
    id: "exh-drive-11",
    date: "2026-04-22",
    exhibitNo: "Exh-11",
    description: "Google Drive Exhibit Link 11",
    attachment: {
      label: "Exhibit Link 11",
      path: "https://drive.google.com/file/d/1qqUQf5Ek06SqMffetK8VXdBliczKS8dq/view?usp=sharing"
    }
  }
];

const requiredPaymentEntries = [
  {
    id: "pay-drive-01",
    date: "2024-03-16",
    amount: 15000,
    mode: "UPI",
    reference: "T2403161614520182485879",
    notes: "UTR: 407651926792 | Paid to PPPawar (priyanka0501@kotak)",
    attachment: {
      label: "Payment Link 1",
      path: "https://drive.google.com/file/d/1MUS9pK2js-x9953OhoVIPiqHXdnp_II8/view?usp=sharing"
    }
  },
  {
    id: "pay-drive-02",
    date: "2024-04-05",
    amount: 21000,
    mode: "UPI",
    reference: "T2404051305078322760859",
    notes: "UTR: 409692946684 | Paid to PPPawar (priyanka0501@kotak)",
    attachment: {
      label: "Payment Link 2",
      path: "https://drive.google.com/file/d/1nL7rxFvjdSW5ZMobj9Dk1irhljniHRji/view?usp=sharing"
    }
  },
  {
    id: "pay-drive-03",
    date: "2025-03-14",
    amount: 3000,
    mode: "UPI",
    reference: "T2503142117330363617315",
    notes: "UTR: 100119202776 | Paid to eCourts Project | Collect ID: SBI83DC40298D3C49C6975C2859160844A0",
    attachment: {
      label: "Payment Link 3",
      path: "https://drive.google.com/file/d/1AcLYCnImcIBIUH7wfDH4L-1xhdnB8ifA/view?usp=sharing"
    }
  },
  {
    id: "pay-drive-04",
    date: "2025-04-11",
    amount: 15000,
    mode: "UPI",
    reference: "T250411222326507720354",
    notes: "UTR: 993882205100 | Paid to PPPawar (priyanka0501@kotak)",
    attachment: {
      label: "Payment Link 4",
      path: "https://drive.google.com/file/d/1vrixTcY_rRvGQsVuIgN-r1E57YrSBWS0/view?usp=sharing"
    }
  },
  {
    id: "pay-drive-05",
    date: "2025-06-07",
    amount: 45000,
    mode: "UPI",
    reference: "T2506071019559085705007",
    notes: "UTR: 975878452884 | Paid to PPPawar (priyanka0501@kotak)",
    attachment: {
      label: "Payment Link 5",
      path: "https://drive.google.com/file/d/1krKpEhP3bW3XEU5Uxg6-w50o8i2mN77W/view?usp=sharing"
    }
  },
  {
    id: "pay-drive-06",
    date: "2025-10-21",
    amount: 10000,
    mode: "UPI",
    reference: "T2510211538303193758470",
    notes: "UTR: 385228791513 | Paid to PPPawar (priyanka0501@kotak)",
    attachment: {
      label: "Payment Link 6",
      path: "https://drive.google.com/file/d/1BsQFqpmlVngSH-1e1ShY8JZkb2Uhnyco/view?usp=sharing"
    }
  }
];

const requiredDaughterGiftEntries = [
  {
    id: "gift-image-01",
    date: "2024-10-30",
    item: "Diwali Gift Parcel",
    amount: 0,
    occasion: "Diwali 2024",
    notes: "Gift sent to daughter - image proof attached",
    attachment: {
      label: "IMG_20241030_114205.jpg",
      path: "gift-images/IMG_20241030_114205.jpg"
    }
  }
];

const requiredCertifiedCopyEntries = [
  {
    id: "copy-drive-01",
    appliedDate: "2026-04-22",
    documentName: "Certified Copy Link 1",
    applicationNo: "-",
    receivedDate: "",
    notes: "Google Drive certified copy",
    attachment: {
      label: "Certified Copy 1",
      path: "https://drive.google.com/file/d/11IqytDrFTgKneoas27F9Fgu0-MhbktMm/view?usp=drive_link"
    }
  },
  {
    id: "copy-drive-02",
    appliedDate: "2026-04-22",
    documentName: "Certified Copy Link 2",
    applicationNo: "-",
    receivedDate: "",
    notes: "Google Drive certified copy",
    attachment: {
      label: "Certified Copy 2",
      path: "https://drive.google.com/file/d/1ZEh-qWqk0znfqsGZSYb1hRspwk5P_cRu/view?usp=drive_link"
    }
  },
  {
    id: "copy-drive-03",
    appliedDate: "2026-04-22",
    documentName: "Certified Copy Link 3",
    applicationNo: "-",
    receivedDate: "",
    notes: "Google Drive certified copy",
    attachment: {
      label: "Certified Copy 3",
      path: "https://drive.google.com/file/d/1OKSQRLKlQHZ1fXTHIoLxbbi_pRoj3reR/view?usp=drive_link"
    }
  },
  {
    id: "copy-drive-04",
    appliedDate: "2026-04-22",
    documentName: "Certified Copy Link 4",
    applicationNo: "-",
    receivedDate: "",
    notes: "Google Drive certified copy",
    attachment: {
      label: "Certified Copy 4",
      path: "https://drive.google.com/file/d/1XDFZLkNo3efD2mchFqHsmPoecZN07rYj/view?usp=drive_link"
    }
  },
  {
    id: "copy-drive-05",
    appliedDate: "2026-04-22",
    documentName: "Certified Copy Link 5",
    applicationNo: "-",
    receivedDate: "",
    notes: "Google Drive certified copy",
    attachment: {
      label: "Certified Copy 5",
      path: "https://drive.google.com/file/d/1s5s7gOcdrgGSnNA5HUGCKRLDDRJY1F5U/view?usp=drive_link"
    }
  },
  {
    id: "copy-drive-06",
    appliedDate: "2026-04-22",
    documentName: "Certified Copy Link 6",
    applicationNo: "-",
    receivedDate: "",
    notes: "Google Drive certified copy",
    attachment: {
      label: "Certified Copy 6",
      path: "https://drive.google.com/file/d/1VWq0BETAuop-xPDukX0j01UGNwBhakoP/view?usp=drive_link"
    }
  },
  {
    id: "copy-drive-07",
    appliedDate: "2026-04-22",
    documentName: "Certified Copy Link 7",
    applicationNo: "-",
    receivedDate: "",
    notes: "Google Drive certified copy",
    attachment: {
      label: "Certified Copy 7",
      path: "https://drive.google.com/file/d/1q0XtDFIVR00GLK0mkVi8GdCMXC0rSfJQ/view?usp=drive_link"
    }
  },
  {
    id: "copy-drive-08",
    appliedDate: "2026-04-22",
    documentName: "Certified Copy Link 8",
    applicationNo: "-",
    receivedDate: "",
    notes: "Google Drive certified copy",
    attachment: {
      label: "Certified Copy 8",
      path: "https://drive.google.com/file/d/1AR9yaQAisyTq_gdFeVCUuGE9Y_T5k2-r/view?usp=drive_link"
    }
  },
  {
    id: "copy-drive-09",
    appliedDate: "2026-04-22",
    documentName: "Certified Copy Link 9",
    applicationNo: "-",
    receivedDate: "",
    notes: "Google Drive certified copy",
    attachment: {
      label: "Certified Copy 9",
      path: "https://drive.google.com/file/d/1YlvDYEAJmMJ9iSPl3TqiKn2MKKOLCU3y/view?usp=drive_link"
    }
  },
  {
    id: "copy-drive-10",
    appliedDate: "2026-04-22",
    documentName: "Certified Copy Link 10",
    applicationNo: "-",
    receivedDate: "",
    notes: "Google Drive certified copy",
    attachment: {
      label: "Certified Copy 10",
      path: "https://drive.google.com/file/d/1qqUQf5Ek06SqMffetK8VXdBliczKS8dq/view?usp=drive_link"
    }
  },
  {
    id: "copy-drive-12",
    appliedDate: "2026-04-22",
    documentName: "Certified Copy Link 12",
    applicationNo: "-",
    receivedDate: "",
    notes: "Google Drive certified copy",
    attachment: {
      label: "Certified Copy 12",
      path: "https://drive.google.com/file/d/1_dUEX8pOXHA4PNFF-Z9RXKsUN7kqxQZ_/view?usp=drive_link"
    }
  }
];

const defaultData = {
  profile: {
    role: "Respondent (Husband)",
    court: "Chief Judicial Magistrate, Pune",
    caseType: "PWDVA Application - Domestic Violence Act",
    filingNumber: "135625/2023",
    registrationNumber: "795/2023",
    cnrNumber: "MHPU041356362023",
    eFilingNumber: "AMH20230019705C202300023",
    filingDate: "2023-12-28",
    registrationDate: "2023-12-28",
    eFilingDate: "2023-12-28",
    firstHearingDate: "2024-01-12",
    currentStage: "Evidence",
    judge: "7th Joint Civil Judge J.D. and JMFC, Pune",
    acts: ["Protection of Women from Domestic Violence Act"],
    sections: ["12", "17", "18", "20", "22", "23"],
    petitioner: ["Priyanka Prashant Jadhav"],
    petitionerAdvocate: "Shaikh Amjad Sultan",
    respondents: [
      "Prashant Ramchandra Jadhav",
      "Ramchandra Jadhav",
      "Prafulla Ramchandra Jadhav",
      "Pratibha Ramchandra Jadhav",
      "Surekha Ramchandra Jadhav"
    ],
    respondentAdvocate: "Varu Kushal Manoj"
  },
  hearings: [
    { businessDate: "2026-03-18", hearingDate: "2026-04-27", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-12-20", hearingDate: "2026-03-18", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-11-13", hearingDate: "2025-12-20", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-10-29", hearingDate: "2025-11-13", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-09-17", hearingDate: "2025-10-29", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-09-08", hearingDate: "2025-09-17", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-08-19", hearingDate: "2025-09-08", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-07-15", hearingDate: "2025-08-19", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-06-23", hearingDate: "2025-07-15", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-06-17", hearingDate: "2025-06-23", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-06-09", hearingDate: "2025-06-17", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-06-02", hearingDate: "2025-06-09", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-05-02", hearingDate: "2025-06-02", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-04-25", hearingDate: "2025-05-02", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-04-17", hearingDate: "2025-04-25", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-04-11", hearingDate: "2025-04-17", purpose: "Evidence", judge: "7th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-03-20", hearingDate: "2025-04-11", purpose: "Evidence", judge: "4th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-03-15", hearingDate: "2025-03-20", purpose: "Evidence", judge: "4th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-02-15", hearingDate: "2025-03-15", purpose: "Evidence", judge: "4th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-02-06", hearingDate: "2025-02-15", purpose: "Evidence", judge: "4th Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-01-09", hearingDate: "2025-02-06", purpose: "Evidence", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2025-01-07", hearingDate: "2025-01-09", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-12-26", hearingDate: "2025-01-07", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-12-02", hearingDate: "2024-12-26", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-11-28", hearingDate: "2024-12-02", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-11-12", hearingDate: "2024-11-28", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-10-25", hearingDate: "2024-11-12", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-10-18", hearingDate: "2024-10-25", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-10-04", hearingDate: "2024-10-18", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-09-25", hearingDate: "2024-10-04", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-09-20", hearingDate: "2024-09-25", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-09-03", hearingDate: "2024-09-20", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-08-30", hearingDate: "2024-09-03", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-08-16", hearingDate: "2024-08-30", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-08-01", hearingDate: "2024-08-16", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-07-03", hearingDate: "2024-08-01", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-07-02", hearingDate: "2024-07-03", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-04-30", hearingDate: "2024-07-02", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-04-06", hearingDate: "2024-04-30", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-04-02", hearingDate: "2024-04-06", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-03-15", hearingDate: "2024-04-02", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-02-27", hearingDate: "2024-03-15", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-01-25", hearingDate: "2024-02-27", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" },
    { businessDate: "2024-01-12", hearingDate: "2024-01-25", purpose: "Unready Board", judge: "3rd Joint Civil Judge J.D. and JMFC, Pune" }
  ],
  orders: [
    {
      orderNumber: 1,
      date: "2025-01-09",
      details: "Maintenance Order",
      attachments: [{ label: "Maintenenace Order 09012025.pdf", path: "attachments/Maintenenace Order 09012025.pdf" }]
    },
    {
      orderNumber: 2,
      date: "2025-02-15",
      details: "Application - Distrace Warrant",
      attachments: [{ label: "Application - Distrace Warrant 15022025.pdf", path: "attachments/Application - Distrace Warrant 15022025.pdf" }]
    },
    {
      orderNumber: 3,
      date: "2025-03-15",
      details: "Bailable Warrant Issuance Application",
      attachments: [{ label: "Bailabale Warrant Issuance Application 15032025.pdf", path: "attachments/Bailabale Warrant Issuance Application 15032025.pdf" }]
    },
    {
      orderNumber: 4,
      date: "2026-03-18",
      details: "Issue NBW",
      attachments: [{ label: "Issue NBW 18032025.pdf", path: "attachments/Issue NBW 18032025.pdf" }]
    },
    {
      orderNumber: 5,
      date: "2025-03-20",
      details: "Application for Arrest Warrant",
      attachments: [{ label: "Application for Arrest Warrant 20032025.pdf", path: "attachments/Application for Arrest Warrant 20032025.pdf" }]
    },
    {
      orderNumber: 6,
      date: "2025-05-02",
      details: "Arrest Warrant Issue",
      attachments: [{ label: "Arrest Warrant Issue 02052025.pdf", path: "attachments/Arrest Warrant Issue 02052025.pdf" }]
    },
    {
      orderNumber: 7,
      date: "2025-06-02",
      details: "Arrest Warrant Against Respondent",
      attachments: [{ label: "Arrest Warrant against Respondent 02062025.pdf", path: "attachments/Arrest Warrant against Respondent 02062025.pdf" }]
    },
    {
      orderNumber: 8,
      date: "2025-10-29",
      details: "Application Allowed As Prayed",
      attachments: [{ label: "Application allowed as prayed 29102025.pdf", path: "attachments/Application allowed as prayed 29102025.pdf" }]
    },
    { orderNumber: 9, date: "2026-03-18", details: "Order on Exhibit", attachments: [] }
  ],
  exhibits: structuredClone(requiredExhibitEntries),
  certifiedCopies: structuredClone(requiredCertifiedCopyEntries),
  references: [
    {
      id: "ref-rajnesh-neha",
      title: "Rajnesh v. Neha",
      citation: "Supreme Court of India | Criminal Appeal No. 730 of 2020 | 04 Nov 2020",
      attachment: { label: "Rajnesh_vs_Neha_2020.pdf", path: "references/Rajnesh_vs_Neha_2020.pdf" }
    },
    {
      id: "ref-aditi-jitesh-2023",
      title: "Aditi alias Mithi v. Jitesh Sharma",
      citation: "2023 INSC 981 | Criminal Appeal No. 3446 of 2023 | 06 Nov 2023",
      attachment: {
        label: "Aditi_alias_Mithi_vs_Jitesh_Sharma_2023_INSC_981.pdf",
        path: "references/Aditi_alias_Mithi_vs_Jitesh_Sharma_2023_INSC_981.pdf"
      }
    },
    {
      id: "ref-arnesh-bihar",
      title: "Arnesh Kumar v. State of Bihar",
      citation: "Supreme Court of India | Criminal Appeal No. 1277 of 2014 | 02 Jul 2014",
      attachment: { label: "Arnesh_Kumar_vs_State_of_Bihar_2014.pdf", path: "references/Arnesh_Kumar_vs_State_of_Bihar_2014.pdf" }
    },
    {
      id: "ref-pwdva-2005",
      title: "Protection of Women from Domestic Violence Act, 2005",
      citation: "Act No. 43 of 2005 | India Code",
      attachment: {
        label: "Protection_of_Women_from_Domestic_Violence_Act_2005.pdf",
        path: "references/Protection_of_Women_from_Domestic_Violence_Act_2005.pdf"
      }
    },
    {
      id: "ref-pwdv-rules-2006",
      title: "Protection of Women from Domestic Violence Rules, 2006",
      citation: "G.S.R. 644(E) | 17 Oct 2006 | India Code",
      attachment: {
        label: "Protection_of_Women_from_Domestic_Violence_Rules_2006.pdf",
        path: "references/Protection_of_Women_from_Domestic_Violence_Rules_2006.pdf"
      }
    }
  ],
  maintenancePayments: structuredClone(requiredPaymentEntries),
  daughterGifts: structuredClone(requiredDaughterGiftEntries),
  tasks: [
    { id: "t1", text: "Call advocate before next hearing", dueDate: "2026-04-25", done: false },
    { id: "t2", text: "Keep all exhibits and identity documents ready", dueDate: "2026-04-26", done: false },
    { id: "t3", text: "Prepare short factual timeline", dueDate: "2026-04-24", done: false }
  ],
  notes: [
    {
      id: "n1",
      title: "Case diary started",
      body: "Imported case details from eCourts screenshots. Update after every hearing.",
      createdAt: "2026-04-22T09:00:00.000Z"
    }
  ]
};

let appState = loadAppState();
let state = getActiveCaseState();
const syncRecordsPath = "./sync/latest-case-data.json";
const syncPollMs = 120000;
let lastAppliedSyncSignature = "";

function normalizeKeyText(value) {
  return String(value || "").trim().toLowerCase();
}

function getLinkKey(path) {
  const raw = String(path || "").trim();
  if (!raw) return "";

  const drivePathMatch = raw.match(/drive\.google\.com\/file\/d\/([^/?#]+)/i);
  if (drivePathMatch?.[1]) {
    return `drive:${drivePathMatch[1].toLowerCase()}`;
  }
  const driveIdMatch = raw.match(/[?&]id=([^&#]+)/i);
  if (driveIdMatch?.[1] && /drive\.google\.com|drive\.usercontent\.google\.com/i.test(raw)) {
    return `drive:${driveIdMatch[1].toLowerCase()}`;
  }

  try {
    const url = new URL(raw);
    const base = `${url.origin.toLowerCase()}${url.pathname.replace(/\/+$/, "").toLowerCase()}`;
    const idParam = url.searchParams.get("id");
    return idParam ? `${base}?id=${idParam.toLowerCase()}` : base;
  } catch {
    return raw.replace(/\\/g, "/").replace(/\/+$/, "").toLowerCase();
  }
}

function normalizeOrderAttachments(orders, seedRequired = true) {
  const incoming = Array.isArray(orders)
    ? orders.map((order, index) => ({
        orderNumber: Number(order.orderNumber) || index + 1,
        date: order.date,
        details: order.details || "Order on Exhibit",
        attachments: Array.isArray(order.attachments) ? order.attachments : []
      }))
    : [];

  if (seedRequired) {
    requiredOrderDocuments.forEach((required) => {
      const existing =
        incoming.find((order) => order.attachments.some((item) => item.path === required.attachment.path)) ||
        incoming.find((order) => order.date === required.date);
      if (!existing) {
        incoming.push({
          orderNumber: incoming.length + 1,
          date: required.date,
          details: required.details,
          attachments: [required.attachment]
        });
        return;
      }

      const hasDoc = existing.attachments.some((item) => item.path === required.attachment.path);
      if (!hasDoc) {
        existing.attachments.push(required.attachment);
      }

      // Keep canonical required document dates consistent across older saved backups.
      existing.date = required.date;

      if (!existing.details || existing.details === "Order on Exhibit") {
        existing.details = required.details;
      }
    });
  }

  incoming.sort((a, b) => {
    const dateDiff = new Date(a.date) - new Date(b.date);
    if (dateDiff !== 0) return dateDiff;
    return a.orderNumber - b.orderNumber;
  });

  incoming.forEach((order, index) => {
    order.orderNumber = index + 1;
  });

  return incoming;
}

function normalizeReferences(references, seedRequired = true) {
  const incoming = Array.isArray(references)
    ? references
        .filter((item) => item && item.attachment && item.attachment.path)
        .map((item, index) => ({
          id: item.id || `ref-${Date.now()}-${index}`,
          title: item.title || "Untitled Judgement",
          citation: item.citation || "-",
          attachment: {
            label: item.attachment.label || "View PDF",
            path: item.attachment.path
          }
        }))
    : [];

  if (seedRequired) {
    requiredReferenceJudgements.forEach((required) => {
      const exists = incoming.some((item) => item.attachment.path === required.attachment.path);
      if (!exists) {
        incoming.push(structuredClone(required));
      }
    });
  }

  const deduped = [];
  const seen = new Set();
  incoming.forEach((item) => {
    const linkKey = getLinkKey(item.attachment?.path);
    const key = linkKey ? `link:${linkKey}` : `meta:${normalizeKeyText(item.title)}|${normalizeKeyText(item.citation)}`;
    if (seen.has(key)) return;
    seen.add(key);
    deduped.push(item);
  });

  return deduped;
}

function normalizeMaintenancePayments(payments, seedRequired = true) {
  const incoming = Array.isArray(payments)
    ? payments
        .filter((item) => item && item.date)
        .map((item, index) => ({
          id: item.id || `pay-${index + 1}`,
          date: item.date,
          amount: Number(item.amount) || 0,
          mode: item.mode || "-",
          reference: item.reference || "-",
          notes: item.notes || "-",
          attachment: item.attachment && item.attachment.path
            ? {
                label: item.attachment.label || "View File",
                path: item.attachment.path
              }
            : null
        }))
    : [];

  if (seedRequired) {
    requiredPaymentEntries.forEach((required) => {
      const existing = incoming.find((item) => item.id === required.id);
      if (!existing) {
        incoming.push(structuredClone(required));
        return;
      }

      // Keep seeded payment proof dates consistent across older saved backups.
      existing.date = required.date;
      if (Number(existing.amount) === 0 && Number(required.amount) > 0) {
        existing.amount = required.amount;
      }
      if (existing.mode === "Proof Link" && required.mode !== "Proof Link") {
        existing.mode = required.mode;
      }
      if ((existing.reference || "").startsWith("Payment Link") && !(required.reference || "").startsWith("Payment Link")) {
        existing.reference = required.reference;
      }
      if (existing.notes === "Google Drive payment proof" && required.notes !== "Google Drive payment proof") {
        existing.notes = required.notes;
      }
    });
  }

  const deduped = [];
  const seen = new Set();
  incoming.forEach((item) => {
    const linkKey = getLinkKey(item.attachment?.path);
    const referenceKey = normalizeKeyText(item.reference);
    const key = linkKey
      ? `link:${linkKey}`
      : referenceKey && referenceKey !== "-"
        ? `ref:${referenceKey}`
        : `meta:${item.date}|${Number(item.amount) || 0}|${normalizeKeyText(item.mode)}|${normalizeKeyText(item.notes)}`;
    if (seen.has(key)) return;
    seen.add(key);
    deduped.push(item);
  });

  deduped.sort((a, b) => new Date(b.date) - new Date(a.date));
  return deduped;
}

function normalizeDaughterGifts(gifts, seedRequired = true) {
  const incoming = Array.isArray(gifts)
    ? gifts
        .filter((item) => item && item.date && item.item)
        .map((item, index) => ({
          id: item.id || `gift-${index + 1}`,
          date: item.date,
          item: item.item,
          amount: Number(item.amount) || 0,
          occasion: item.occasion || "-",
          notes: item.notes || "-",
          attachment: item.attachment && item.attachment.path
            ? {
                label: item.attachment.label || "View File",
                path: item.attachment.path
              }
            : null
        }))
    : [];

  if (seedRequired) {
    requiredDaughterGiftEntries.forEach((required) => {
      const exists = incoming.some((item) => item.id === required.id);
      if (!exists) incoming.push(structuredClone(required));
    });
  }

  incoming.sort((a, b) => new Date(b.date) - new Date(a.date));
  return incoming;
}

function parseExhibitNo(value) {
  const match = String(value || "").trim().match(/^exh[-\s]?(\d+)$/i);
  return match ? Number(match[1]) : Number.NaN;
}

function parseCertifiedCopyNo(value) {
  const match = String(value || "").trim().match(/^certified copy link\s*(\d+)$/i);
  return match ? Number(match[1]) : Number.NaN;
}

function normalizeExhibits(exhibits, seedRequired = true) {
  const incoming = Array.isArray(exhibits)
    ? exhibits
        .filter((item) => item && item.date && item.exhibitNo && item.description)
        .map((item, index) => ({
          id: item.id || `exh-${index + 1}`,
          date: item.date,
          exhibitNo: item.exhibitNo,
          description: item.description,
          attachment: item.attachment && item.attachment.path
            ? {
                label: item.attachment.label || "View File",
                path: item.attachment.path
              }
            : null
        }))
    : [];

  if (seedRequired) {
    requiredExhibitEntries.forEach((required) => {
      const exists = incoming.some((item) => item.id === required.id);
      if (!exists) {
        incoming.push(structuredClone(required));
      }
    });
  }

  const deduped = [];
  const seen = new Set();
  incoming.forEach((item) => {
    const linkKey = getLinkKey(item.attachment?.path);
    const key = linkKey
      ? `link:${linkKey}`
      : `meta:${item.date}|${normalizeKeyText(item.exhibitNo)}|${normalizeKeyText(item.description)}`;
    if (seen.has(key)) return;
    seen.add(key);
    deduped.push(item);
  });

  deduped.sort((a, b) => {
    const noA = parseExhibitNo(a.exhibitNo);
    const noB = parseExhibitNo(b.exhibitNo);
    const hasA = Number.isFinite(noA);
    const hasB = Number.isFinite(noB);
    if (hasA && hasB && noA !== noB) return noA - noB;
    if (hasA && !hasB) return -1;
    if (!hasA && hasB) return 1;
    return new Date(a.date) - new Date(b.date);
  });

  // Keep exhibit sequence continuous (Exh-1, Exh-2, ...), especially after dedupe cleanup.
  let seq = 1;
  deduped.forEach((item) => {
    if (/^exh[-\s]?\d+$/i.test(String(item.exhibitNo || "").trim())) {
      item.exhibitNo = `Exh-${seq}`;
      if (/^google drive exhibit link \d+$/i.test(String(item.description || "").trim())) {
        item.description = `Google Drive Exhibit Link ${seq}`;
      }
      if (item.attachment && /^exhibit link \d+$/i.test(String(item.attachment.label || "").trim())) {
        item.attachment.label = `Exhibit Link ${seq}`;
      }
      seq += 1;
    }
  });

  return deduped;
}

function normalizeCertifiedCopies(copies, seedRequired = true) {
  const incoming = Array.isArray(copies)
    ? copies
        .filter((item) => item && item.appliedDate && item.documentName)
        .map((item, index) => ({
          id: item.id || `copy-${index + 1}`,
          appliedDate: item.appliedDate,
          documentName: item.documentName,
          applicationNo: item.applicationNo || "-",
          receivedDate: item.receivedDate || "",
          notes: item.notes || "-",
          attachment: item.attachment && item.attachment.path
            ? {
                label: item.attachment.label || "View File",
                path: item.attachment.path
              }
            : null
        }))
    : [];

  if (seedRequired) {
    requiredCertifiedCopyEntries.forEach((required) => {
      const exists = incoming.some((item) => item.id === required.id);
      if (!exists) {
        incoming.push(structuredClone(required));
      }
    });
  }

  // Remove duplicates from older saved data/backups (same underlying link).
  const deduped = [];
  const seen = new Set();
  incoming.forEach((item) => {
    const linkKey = getLinkKey(item.attachment?.path);
    const key = linkKey
      ? `path:${linkKey}`
      : `meta:${item.appliedDate}|${item.documentName}|${item.applicationNo}`;
    if (seen.has(key)) return;
    seen.add(key);
    deduped.push(item);
  });

  deduped.sort((a, b) => {
    const noA = parseCertifiedCopyNo(a.documentName);
    const noB = parseCertifiedCopyNo(b.documentName);
    const hasA = Number.isFinite(noA);
    const hasB = Number.isFinite(noB);
    if (hasA && hasB && noA !== noB) return noA - noB;
    if (hasA && !hasB) return -1;
    if (!hasA && hasB) return 1;
    return new Date(b.appliedDate) - new Date(a.appliedDate);
  });

  // Keep certified copy sequence continuous (Certified Copy Link 1, 2, 3...).
  let seq = 1;
  deduped.forEach((item) => {
    if (/^certified copy link\s*\d+$/i.test(String(item.documentName || "").trim())) {
      item.documentName = `Certified Copy Link ${seq}`;
      if (item.attachment && /^certified copy\s*\d+$/i.test(String(item.attachment.label || "").trim())) {
        item.attachment.label = `Certified Copy ${seq}`;
      }
      seq += 1;
    }
  });

  return deduped;
}

function normalizeProfile(profile) {
  const fallback = {
    role: "-",
    court: "-",
    caseType: "-",
    filingNumber: "-",
    registrationNumber: "-",
    cnrNumber: "-",
    eFilingNumber: "-",
    filingDate: "",
    registrationDate: "",
    eFilingDate: "",
    firstHearingDate: "",
    currentStage: "-",
    judge: "-",
    acts: [],
    sections: [],
    petitioner: [],
    petitionerAdvocate: "-",
    respondents: [],
    respondentAdvocate: "-"
  };
  const incoming = profile && typeof profile === "object" ? profile : {};
  return {
    ...fallback,
    ...incoming,
    acts: Array.isArray(incoming.acts) ? incoming.acts : [],
    sections: Array.isArray(incoming.sections) ? incoming.sections : [],
    petitioner: Array.isArray(incoming.petitioner) ? incoming.petitioner : [],
    respondents: Array.isArray(incoming.respondents) ? incoming.respondents : []
  };
}

function normalizeHearings(hearings, defaultJudge) {
  return Array.isArray(hearings)
    ? hearings
        .filter((item) => item && item.hearingDate)
        .map((item) => ({
          businessDate: item.businessDate || item.hearingDate,
          hearingDate: item.hearingDate,
          purpose: item.purpose || "-",
          judge: item.judge || defaultJudge || "-"
        }))
    : [];
}

function normalizeTasks(tasks) {
  return Array.isArray(tasks)
    ? tasks
        .filter((item) => item && item.text && item.dueDate)
        .map((item, index) => ({
          id: item.id || `t-${index + 1}`,
          text: item.text,
          dueDate: item.dueDate,
          done: Boolean(item.done)
        }))
    : [];
}

function normalizeNotes(notes) {
  return Array.isArray(notes)
    ? notes
        .filter((item) => item && item.title && item.body)
        .map((item, index) => ({
          id: item.id || `n-${index + 1}`,
          title: item.title,
          body: item.body,
          createdAt: item.createdAt || new Date().toISOString()
        }))
    : [];
}

function migrateState(data, options = {}) {
  const seedRequired = options.seedRequired !== false;
  const migrated = structuredClone(data || {});
  migrated.profile = normalizeProfile(migrated.profile);
  migrated.hearings = normalizeHearings(migrated.hearings, migrated.profile.judge);
  migrated.orders = normalizeOrderAttachments(migrated.orders, seedRequired);
  migrated.references = normalizeReferences(migrated.references, seedRequired);
  migrated.maintenancePayments = normalizeMaintenancePayments(migrated.maintenancePayments, seedRequired);
  migrated.daughterGifts = normalizeDaughterGifts(migrated.daughterGifts, seedRequired);
  migrated.exhibits = normalizeExhibits(migrated.exhibits, seedRequired);
  migrated.certifiedCopies = normalizeCertifiedCopies(migrated.certifiedCopies, seedRequired);
  migrated.tasks = normalizeTasks(migrated.tasks);
  migrated.notes = normalizeNotes(migrated.notes);
  return migrated;
}

function getDefaultCases() {
  return {
    [MAIN_CASE_ID]: {
      id: MAIN_CASE_ID,
      name: MAIN_CASE_NAME,
      seedRequired: true,
      data: migrateState(defaultData, { seedRequired: true })
    },
    [SESSION_CASE_ID]: {
      id: SESSION_CASE_ID,
      name: SESSION_CASE_NAME,
      seedRequired: false,
      data: migrateState(createSessionCaseData(), { seedRequired: false })
    }
  };
}

function migrateAppState(raw) {
  const defaults = getDefaultCases();
  if (raw && raw.cases && typeof raw.cases === "object") {
    const migratedCases = {};
    Object.entries(raw.cases).forEach(([caseId, caseEntry], index) => {
      if (!caseEntry || typeof caseEntry !== "object") return;
      const safeId = caseId || `case-${index + 1}`;
      const seedRequired = typeof caseEntry.seedRequired === "boolean" ? caseEntry.seedRequired : safeId === MAIN_CASE_ID;
      const name =
        safeId === MAIN_CASE_ID
          ? MAIN_CASE_NAME
          : safeId === SESSION_CASE_ID
            ? SESSION_CASE_NAME
            : caseEntry.name || `Case ${index + 1}`;
      const sourceData = caseEntry.data && caseEntry.data.profile ? caseEntry.data : caseEntry;
      migratedCases[safeId] = {
        id: safeId,
        name,
        seedRequired,
        data: migrateState(sourceData, { seedRequired })
      };
    });
    if (!migratedCases[MAIN_CASE_ID]) migratedCases[MAIN_CASE_ID] = defaults[MAIN_CASE_ID];
    if (!migratedCases[SESSION_CASE_ID]) migratedCases[SESSION_CASE_ID] = defaults[SESSION_CASE_ID];
    const activeCaseId = migratedCases[raw.activeCaseId] ? raw.activeCaseId : MAIN_CASE_ID;
    return { version: APP_STATE_VERSION, activeCaseId, cases: migratedCases };
  }

  const legacyData = raw && raw.profile ? raw : defaultData;
  return {
    version: APP_STATE_VERSION,
    activeCaseId: MAIN_CASE_ID,
    cases: {
      [MAIN_CASE_ID]: {
        id: MAIN_CASE_ID,
        name: MAIN_CASE_NAME,
        seedRequired: true,
        data: migrateState(legacyData, { seedRequired: true })
      },
      [SESSION_CASE_ID]: defaults[SESSION_CASE_ID]
    }
  };
}

function loadAppState() {
  try {
    const raw = localStorage.getItem(storageKey);
    return migrateAppState(raw ? JSON.parse(raw) : null);
  } catch {
    return migrateAppState(null);
  }
}

function getActiveCaseRecord() {
  return appState?.cases?.[appState.activeCaseId] || null;
}

function getActiveCaseState() {
  const record = getActiveCaseRecord();
  return record ? record.data : migrateState(defaultData, { seedRequired: true });
}

function renderCaseSwitcher() {
  const select = document.getElementById("caseSessionSelect");
  if (!select || !appState?.cases) return;

  const orderedIds = [MAIN_CASE_ID, SESSION_CASE_ID, ...Object.keys(appState.cases)].filter(
    (id, index, arr) => arr.indexOf(id) === index && appState.cases[id]
  );
  select.innerHTML = orderedIds
    .map((id) => `<option value="${id}">${appState.cases[id].name}</option>`)
    .join("");
  select.value = appState.activeCaseId;
}

function save() {
  const active = getActiveCaseRecord();
  if (active) {
    active.data = state;
  }
  localStorage.setItem(storageKey, JSON.stringify(appState));
}

function applySyncedCasePatch(caseRecord, patch) {
  if (!caseRecord || !patch || typeof patch !== "object") return false;

  const merged = structuredClone(caseRecord.data || {});
  let changed = false;

  if (patch.profile && typeof patch.profile === "object") {
    merged.profile = merged.profile || {};
    Object.entries(patch.profile).forEach(([key, value]) => {
      if (value === undefined) return;
      merged.profile[key] = value;
      changed = true;
    });
  }
  if (Array.isArray(patch.hearings) && patch.hearings.length) {
    merged.hearings = patch.hearings;
    changed = true;
  }
  if (Array.isArray(patch.orders) && patch.orders.length) {
    merged.orders = patch.orders;
    changed = true;
  }
  if (Array.isArray(patch.exhibits) && patch.exhibits.length) {
    merged.exhibits = patch.exhibits;
    changed = true;
  }
  if (Array.isArray(patch.certifiedCopies) && patch.certifiedCopies.length) {
    merged.certifiedCopies = patch.certifiedCopies;
    changed = true;
  }
  if (Array.isArray(patch.maintenancePayments) && patch.maintenancePayments.length) {
    merged.maintenancePayments = patch.maintenancePayments;
    changed = true;
  }
  if (Array.isArray(patch.daughterGifts) && patch.daughterGifts.length) {
    merged.daughterGifts = patch.daughterGifts;
    changed = true;
  }
  if (Array.isArray(patch.references) && patch.references.length) {
    merged.references = patch.references;
    changed = true;
  }

  if (!changed) return false;
  caseRecord.data = migrateState(merged, { seedRequired: caseRecord.seedRequired });
  return true;
}

function buildSyncSignature(syncPayload) {
  if (!syncPayload || typeof syncPayload !== "object") return "";
  const generatedAt = String(syncPayload.generatedAt || "");
  const rev = String(syncPayload.revision || "");
  const casesChunk = syncPayload.cases ? JSON.stringify(syncPayload.cases) : "";
  return `${generatedAt}|${rev}|${casesChunk}`;
}

function applySyncPayload(syncPayload) {
  if (!syncPayload || typeof syncPayload !== "object" || !syncPayload.cases || typeof syncPayload.cases !== "object") {
    return false;
  }

  let changed = false;
  Object.entries(syncPayload.cases).forEach(([caseId, patch]) => {
    const caseRecord = appState?.cases?.[caseId];
    if (!caseRecord) return;
    const didChange = applySyncedCasePatch(caseRecord, patch);
    if (didChange) changed = true;
  });

  if (changed) {
    state = getActiveCaseState();
    save();
    renderCaseSwitcher();
    renderAll();
  }
  return changed;
}

async function refreshSyncedRecords(showAlert = false) {
  try {
    const response = await fetch(`${syncRecordsPath}?t=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) {
      if (showAlert) alert("Sync file not found. Run pull script first.");
      return false;
    }

    const syncPayload = await response.json();
    const signature = buildSyncSignature(syncPayload);
    if (signature && signature === lastAppliedSyncSignature) {
      if (showAlert) alert("Records already up to date.");
      return false;
    }

    const changed = applySyncPayload(syncPayload);
    if (signature) lastAppliedSyncSignature = signature;
    if (showAlert) alert(changed ? "Records synced successfully." : "No applicable updates found.");
    return changed;
  } catch {
    if (showAlert) alert("Could not sync records. Check local sync file/server.");
    return false;
  }
}

function toIndianDate(isoDate) {
  if (!isoDate) return "-";
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return isoDate;
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(d);
}

function formatCurrencyINR(amount) {
  const numericAmount = Number(amount);
  if (!Number.isFinite(numericAmount)) return "-";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numericAmount);
}

function getFileLabelFromPath(path, fallbackLabel = "View File") {
  const cleaned = String(path || "").trim();
  if (!cleaned) return fallbackLabel;
  const label = cleaned.split(/[\\/]/).filter(Boolean).at(-1);
  return label || fallbackLabel;
}

function buildAttachmentFromPath(path, fallbackLabel = "View File") {
  const cleaned = String(path || "").trim();
  if (!cleaned) return null;
  return {
    label: getFileLabelFromPath(cleaned, fallbackLabel),
    path: cleaned
  };
}

function renderRowActions(editAttr, editValue, deleteAttr, deleteValue) {
  return `<div class="row-actions">
    <button class="mini edit" ${editAttr}="${editValue}">Edit</button>
    <button class="mini" ${deleteAttr}="${deleteValue}">Delete</button>
  </div>`;
}

function getNextHearing() {
  const today = new Date();
  const futureHearings = state.hearings
    .map((h) => ({ ...h, dt: new Date(h.hearingDate) }))
    .filter((h) => !Number.isNaN(h.dt.getTime()) && h.dt >= new Date(today.toDateString()))
    .sort((a, b) => a.dt - b.dt);
  return futureHearings[0] || null;
}

function daysUntil(dateString) {
  const now = new Date();
  const target = new Date(dateString);
  const diffMs = target - new Date(now.toDateString());
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

function renderSummary() {
  const next = getNextHearing();
  const pendingTasks = state.tasks.filter((t) => !t.done).length;
  const totalMaintenancePaid = (state.maintenancePayments || []).reduce((sum, payment) => sum + (Number(payment.amount) || 0), 0);
  const totalGiftEntries = (state.daughterGifts || []).length;
  const totalExhibits = (state.exhibits || []).length;
  const totalCertifiedCopies = (state.certifiedCopies || []).length;
  const summary = [
    { label: "Next Hearing", value: next ? toIndianDate(next.hearingDate) : "Not available" },
    {
      label: "Days Left",
      value: next ? `${daysUntil(next.hearingDate)} day(s)` : "-",
      alert: next ? daysUntil(next.hearingDate) <= 7 : false
    },
    { label: "Case Stage", value: state.profile.currentStage || "-" },
    { label: "Pending Tasks", value: String(pendingTasks) },
    { label: "Hearings Logged", value: String(state.hearings.length) },
    { label: "Orders Logged", value: String(state.orders.length) },
    { label: "Maintenance Paid", value: formatCurrencyINR(totalMaintenancePaid) },
    { label: "Daughter Gifts", value: String(totalGiftEntries) },
    { label: "Exhibits Logged", value: String(totalExhibits) },
    { label: "Certified Copies", value: String(totalCertifiedCopies) }
  ];

  const summaryGrid = document.getElementById("summaryGrid");
  summaryGrid.innerHTML = summary
    .map(
      (item) => `
        <article class="stat ${item.alert ? "alert" : ""}">
          <p class="label">${item.label}</p>
          <p class="value">${item.value}</p>
        </article>
      `
    )
    .join("");

  document.getElementById("roleBadge").textContent = state.profile.role;
}

function renderMeta() {
  const mapping = [
    ["Court", state.profile.court],
    ["Case Type", state.profile.caseType],
    ["Filing Number", state.profile.filingNumber],
    ["Registration Number", state.profile.registrationNumber],
    ["CNR Number", state.profile.cnrNumber],
    ["e-Filing Number", state.profile.eFilingNumber],
    ["First Hearing", toIndianDate(state.profile.firstHearingDate)],
    ["Current Judge", state.profile.judge],
    ["Petitioner", (state.profile.petitioner || []).join(", ") || "-"],
    ["Petitioner Advocate", state.profile.petitionerAdvocate],
    ["Respondents", (state.profile.respondents || []).join(", ") || "-"],
    ["Respondent Advocate", state.profile.respondentAdvocate]
  ];

  const caseMeta = document.getElementById("caseMeta");
  caseMeta.innerHTML = "";

  const template = document.getElementById("metaRowTemplate");
  mapping.forEach(([key, value]) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".meta-key").textContent = key;
    clone.querySelector(".meta-value").textContent = value || "-";
    caseMeta.appendChild(clone);
  });

  document.getElementById("actsWrap").innerHTML = `
    <strong>Acts & Sections</strong>
    <p>${(state.profile.acts || []).join(", ") || "-"}</p>
    <p>Sections: ${(state.profile.sections || []).join(", ") || "-"}</p>
  `;
}

function renderHearings() {
  const body = document.getElementById("hearingTable");
  const sorted = [...state.hearings].sort((a, b) => new Date(b.hearingDate) - new Date(a.hearingDate));

  body.innerHTML = sorted
    .map(
      (row) => `
      <tr>
        <td>${toIndianDate(row.businessDate)}</td>
        <td>${toIndianDate(row.hearingDate)}</td>
        <td>${row.purpose || "-"}</td>
        <td>${row.judge || "-"}</td>
        <td>${renderRowActions(
          "data-edit-hearing",
          `${row.hearingDate}-${row.businessDate}`,
          "data-delete-hearing",
          `${row.hearingDate}-${row.businessDate}`
        )}</td>
      </tr>
    `
    )
    .join("");
}

function renderOrders() {
  const body = document.getElementById("orderTable");
  const sorted = [...state.orders].sort((a, b) => a.orderNumber - b.orderNumber);

  body.innerHTML = sorted
    .map(
      (row) => {
        const attachmentHtml = row.attachments?.length
          ? `<div class="doc-links">${row.attachments
              .map(
                (attachment) =>
                  `<a class="doc-link" href="${encodeURI(attachment.path)}" target="_blank" rel="noopener">${attachment.label}</a>`
              )
              .join("")}</div>`
          : "-";

        return `
      <tr>
        <td>${row.orderNumber}</td>
        <td>${toIndianDate(row.date)}</td>
        <td>${row.details}</td>
        <td>${attachmentHtml}</td>
        <td>${renderRowActions("data-edit-order", row.orderNumber, "data-delete-order", row.orderNumber)}</td>
      </tr>
    `;
      }
    )
    .join("");
}

function renderExhibits() {
  const body = document.getElementById("exhibitTable");
  const rows = [...(state.exhibits || [])].sort((a, b) => {
    const noA = parseExhibitNo(a.exhibitNo);
    const noB = parseExhibitNo(b.exhibitNo);
    const hasA = Number.isFinite(noA);
    const hasB = Number.isFinite(noB);
    if (hasA && hasB && noA !== noB) return noA - noB;
    if (hasA && !hasB) return -1;
    if (!hasA && hasB) return 1;
    return new Date(a.date) - new Date(b.date);
  });

  if (!rows.length) {
    body.innerHTML = '<tr><td colspan="5" class="empty">No exhibits logged yet.</td></tr>';
    return;
  }

  body.innerHTML = rows
    .map((row) => {
      const attachmentHtml = row.attachment?.path
        ? `<a class="doc-link" href="${encodeURI(row.attachment.path)}" target="_blank" rel="noopener">${row.attachment.label || "View File"}</a>`
        : "-";

      return `
      <tr>
        <td>${toIndianDate(row.date)}</td>
        <td>${row.exhibitNo}</td>
        <td>${row.description}</td>
        <td>${attachmentHtml}</td>
        <td>${renderRowActions("data-edit-exhibit", row.id, "data-delete-exhibit", row.id)}</td>
      </tr>
    `;
    })
    .join("");
}

function renderCertifiedCopies() {
  const body = document.getElementById("copyTable");
  const rows = [...(state.certifiedCopies || [])].sort((a, b) => {
    const noA = parseCertifiedCopyNo(a.documentName);
    const noB = parseCertifiedCopyNo(b.documentName);
    const hasA = Number.isFinite(noA);
    const hasB = Number.isFinite(noB);
    if (hasA && hasB && noA !== noB) return noA - noB;
    if (hasA && !hasB) return -1;
    if (!hasA && hasB) return 1;
    return new Date(b.appliedDate) - new Date(a.appliedDate);
  });

  if (!rows.length) {
    body.innerHTML = '<tr><td colspan="7" class="empty">No certified copy records yet.</td></tr>';
    return;
  }

  body.innerHTML = rows
    .map((row) => {
      const attachmentHtml = row.attachment?.path
        ? `<a class="doc-link" href="${encodeURI(row.attachment.path)}" target="_blank" rel="noopener">${row.attachment.label || "View File"}</a>`
        : "-";

      return `
      <tr>
        <td>${toIndianDate(row.appliedDate)}</td>
        <td>${row.documentName}</td>
        <td>${row.applicationNo || "-"}</td>
        <td>${row.receivedDate ? toIndianDate(row.receivedDate) : "-"}</td>
        <td>${attachmentHtml}</td>
        <td>${row.notes || "-"}</td>
        <td>${renderRowActions("data-edit-copy", row.id, "data-delete-copy", row.id)}</td>
      </tr>
    `;
    })
    .join("");
}

function renderReferences() {
  const body = document.getElementById("referenceTable");
  const rows = [...(state.references || [])];

  if (!rows.length) {
    body.innerHTML = '<tr><td colspan="4" class="empty">No reference judgements yet.</td></tr>';
    return;
  }

  body.innerHTML = rows
    .map(
      (row) => `
      <tr>
        <td>${row.title}</td>
        <td>${row.citation || "-"}</td>
        <td>
          <a class="doc-link" href="${encodeURI(row.attachment.path)}" target="_blank" rel="noopener">
            ${row.attachment.label}
          </a>
        </td>
        <td>${renderRowActions("data-edit-reference", row.id, "data-delete-reference", row.id)}</td>
      </tr>
    `
    )
    .join("");
}

function renderMaintenancePayments() {
  const body = document.getElementById("paymentTable");
  const totalPaidEl = document.getElementById("paymentTotalPaid");
  const sortOrder = document.getElementById("paymentSortOrder")?.value === "asc" ? "asc" : "desc";
  const rows = [...(state.maintenancePayments || [])].sort((a, b) =>
    sortOrder === "asc" ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)
  );
  const totalPaid = rows.reduce((sum, payment) => sum + (Number(payment.amount) || 0), 0);
  if (totalPaidEl) {
    totalPaidEl.textContent = formatCurrencyINR(totalPaid);
  }

  if (!rows.length) {
    body.innerHTML = '<tr><td colspan="8" class="empty">No maintenance payment records yet.</td></tr>';
    return;
  }

  body.innerHTML = rows
    .map(
      (row, index) => {
        const attachmentHtml = row.attachment?.path
          ? `<a class="doc-link" href="${encodeURI(row.attachment.path)}" target="_blank" rel="noopener">${row.attachment.label || "View File"}</a>`
          : "-";

        return `
      <tr>
        <td>${index + 1}</td>
        <td>${toIndianDate(row.date)}</td>
        <td>${formatCurrencyINR(row.amount)}</td>
        <td>${row.mode || "-"}</td>
        <td>${row.reference || "-"}</td>
        <td>${attachmentHtml}</td>
        <td>${row.notes || "-"}</td>
        <td>${renderRowActions("data-edit-payment", row.id, "data-delete-payment", row.id)}</td>
      </tr>
    `;
      }
    )
    .join("");
}

function renderDaughterGifts() {
  const body = document.getElementById("giftTable");
  const rows = [...(state.daughterGifts || [])].sort((a, b) => new Date(b.date) - new Date(a.date));

  if (!rows.length) {
    body.innerHTML = '<tr><td colspan="7" class="empty">No daughter gift records yet.</td></tr>';
    return;
  }

  body.innerHTML = rows
    .map((row) => {
      const attachmentHtml = row.attachment?.path
        ? `<a class="doc-link" href="${encodeURI(row.attachment.path)}" target="_blank" rel="noopener">${row.attachment.label || "View File"}</a>`
        : "-";

      return `
      <tr>
        <td>${toIndianDate(row.date)}</td>
        <td>${row.item}</td>
        <td>${formatCurrencyINR(row.amount)}</td>
        <td>${row.occasion || "-"}</td>
        <td>${attachmentHtml}</td>
        <td>${row.notes || "-"}</td>
        <td>${renderRowActions("data-edit-gift", row.id, "data-delete-gift", row.id)}</td>
      </tr>
    `;
    })
    .join("");
}

function renderTasks() {
  const list = document.getElementById("taskList");

  if (!state.tasks.length) {
    list.innerHTML = '<li class="empty">No tasks yet.</li>';
    return;
  }

  const sorted = [...state.tasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  list.innerHTML = sorted
    .map(
      (task) => `
      <li class="task-item ${task.done ? "done" : ""}">
        <div class="task-main">
          <input type="checkbox" ${task.done ? "checked" : ""} data-toggle-task="${task.id}" />
          <span class="task-text">${task.text}</span>
        </div>
        <div>
          <span class="deadline">${toIndianDate(task.dueDate)}</span>
          ${renderRowActions("data-edit-task", task.id, "data-delete-task", task.id)}
        </div>
      </li>
    `
    )
    .join("");
}

function renderNotes() {
  const wrap = document.getElementById("notesList");
  const sorted = [...state.notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (!sorted.length) {
    wrap.innerHTML = '<div class="empty">No notes yet.</div>';
    return;
  }

  wrap.innerHTML = sorted
    .map(
      (note) => `
      <article class="note-card">
        <p class="note-meta">${toIndianDate(note.createdAt)}</p>
        <h4 class="note-title">${note.title}</h4>
        <p class="note-body">${note.body}</p>
        ${renderRowActions("data-edit-note", note.id, "data-delete-note", note.id)}
      </article>
    `
    )
    .join("");
}

function renderAll() {
  renderSummary();
  renderMeta();
  renderHearings();
  renderOrders();
  renderExhibits();
  renderCertifiedCopies();
  renderMaintenancePayments();
  renderDaughterGifts();
  renderReferences();
  renderTasks();
  renderNotes();
}

function addHearing() {
  const hearingDate = document.getElementById("hearingDate").value;
  const hearingPurpose = document.getElementById("hearingPurpose").value.trim();

  if (!hearingDate || !hearingPurpose) return;

  state.hearings.push({
    businessDate: new Date().toISOString().slice(0, 10),
    hearingDate,
    purpose: hearingPurpose,
    judge: state.profile.judge
  });

  document.getElementById("hearingDate").value = "";
  document.getElementById("hearingPurpose").value = "";
  save();
  renderAll();
}

function addOrder() {
  const orderDate = document.getElementById("orderDate").value;
  const orderTitle = document.getElementById("orderTitle").value.trim();

  if (!orderDate || !orderTitle) return;

  const orderNumber = (state.orders.at(-1)?.orderNumber || 0) + 1;
  state.orders.push({ orderNumber, date: orderDate, details: orderTitle, attachments: [] });

  document.getElementById("orderDate").value = "";
  document.getElementById("orderTitle").value = "";
  save();
  renderAll();
}

function addExhibit() {
  const exhibitDate = document.getElementById("exhibitDate").value;
  const exhibitNo = document.getElementById("exhibitNo").value.trim();
  const exhibitDesc = document.getElementById("exhibitDesc").value.trim();
  const exhibitPath = document.getElementById("exhibitPath").value.trim();

  if (!exhibitDate || !exhibitNo || !exhibitDesc) return;

  const attachment = buildAttachmentFromPath(exhibitPath, "View File");

  const exhibitLinkKey = getLinkKey(attachment?.path);
  const isDuplicateExhibitByLink =
    exhibitLinkKey &&
    (state.exhibits || []).some((item) => getLinkKey(item.attachment?.path) === exhibitLinkKey);
  if (isDuplicateExhibitByLink) {
    alert("Duplicate exhibit link detected. Entry ignored.");
    return;
  }
  const isDuplicateExhibitEntry = (state.exhibits || []).some(
    (item) =>
      item.date === exhibitDate &&
      normalizeKeyText(item.exhibitNo) === normalizeKeyText(exhibitNo) &&
      normalizeKeyText(item.description) === normalizeKeyText(exhibitDesc)
  );
  if (isDuplicateExhibitEntry) {
    alert("Duplicate exhibit entry detected. Entry ignored.");
    return;
  }

  state.exhibits = state.exhibits || [];
  state.exhibits.push({
    id: `exh-${Date.now()}`,
    date: exhibitDate,
    exhibitNo,
    description: exhibitDesc,
    attachment
  });

  document.getElementById("exhibitDate").value = "";
  document.getElementById("exhibitNo").value = "";
  document.getElementById("exhibitDesc").value = "";
  document.getElementById("exhibitPath").value = "";
  save();
  renderAll();
}

function addCertifiedCopy() {
  const appliedDate = document.getElementById("copyAppliedDate").value;
  const documentName = document.getElementById("copyDocName").value.trim();
  const applicationNo = document.getElementById("copyApplicationNo").value.trim();
  const receivedDate = document.getElementById("copyReceivedDate").value;
  const copyPath = document.getElementById("copyPath").value.trim();
  const copyNotes = document.getElementById("copyNotes").value.trim();

  if (!appliedDate || !documentName) return;

  const attachment = buildAttachmentFromPath(copyPath, "View File");

  const copyLinkKey = getLinkKey(attachment?.path);
  const isDuplicateCopyByLink =
    copyLinkKey &&
    (state.certifiedCopies || []).some((item) => getLinkKey(item.attachment?.path) === copyLinkKey);
  if (isDuplicateCopyByLink) {
    alert("Duplicate certified copy link detected. Entry ignored.");
    return;
  }
  const isDuplicateCopyEntry = (state.certifiedCopies || []).some(
    (item) =>
      item.appliedDate === appliedDate &&
      normalizeKeyText(item.documentName) === normalizeKeyText(documentName) &&
      normalizeKeyText(item.applicationNo) === normalizeKeyText(applicationNo || "-")
  );
  if (isDuplicateCopyEntry) {
    alert("Duplicate certified copy entry detected. Entry ignored.");
    return;
  }

  state.certifiedCopies = state.certifiedCopies || [];
  state.certifiedCopies.push({
    id: `copy-${Date.now()}`,
    appliedDate,
    documentName,
    applicationNo: applicationNo || "-",
    receivedDate: receivedDate || "",
    notes: copyNotes || "-",
    attachment
  });

  document.getElementById("copyAppliedDate").value = "";
  document.getElementById("copyDocName").value = "";
  document.getElementById("copyApplicationNo").value = "";
  document.getElementById("copyReceivedDate").value = "";
  document.getElementById("copyPath").value = "";
  document.getElementById("copyNotes").value = "";
  save();
  renderAll();
}

function addReference() {
  const refTitle = document.getElementById("refTitle").value.trim();
  const refCitation = document.getElementById("refCitation").value.trim();
  const refPath = document.getElementById("refPath").value.trim();

  if (!refTitle || !refPath) return;

  const refLinkKey = getLinkKey(refPath);
  const isDuplicateReferenceByLink =
    refLinkKey &&
    (state.references || []).some((item) => getLinkKey(item.attachment?.path) === refLinkKey);
  if (isDuplicateReferenceByLink) {
    alert("Duplicate reference link detected. Entry ignored.");
    return;
  }
  const isDuplicateReferenceEntry = (state.references || []).some(
    (item) =>
      normalizeKeyText(item.title) === normalizeKeyText(refTitle) &&
      normalizeKeyText(item.citation) === normalizeKeyText(refCitation || "-")
  );
  if (isDuplicateReferenceEntry) {
    alert("Duplicate reference entry detected. Entry ignored.");
    return;
  }
  state.references = state.references || [];
  state.references.push({
    id: `ref-${Date.now()}`,
    title: refTitle,
    citation: refCitation || "-",
    attachment: buildAttachmentFromPath(refPath, "Reference.pdf")
  });

  document.getElementById("refTitle").value = "";
  document.getElementById("refCitation").value = "";
  document.getElementById("refPath").value = "";
  save();
  renderAll();
}

function addPayment() {
  const paymentDate = document.getElementById("paymentDate").value;
  const paymentAmount = Number(document.getElementById("paymentAmount").value);
  const paymentMode = document.getElementById("paymentMode").value.trim();
  const paymentRef = document.getElementById("paymentRef").value.trim();
  const paymentPath = document.getElementById("paymentPath").value.trim();
  const paymentNotes = document.getElementById("paymentNotes").value.trim();

  if (!paymentDate || !Number.isFinite(paymentAmount) || paymentAmount <= 0) return;

  const attachment = buildAttachmentFromPath(paymentPath, "View File");

  const paymentLinkKey = getLinkKey(attachment?.path);
  const isDuplicatePaymentByLink =
    paymentLinkKey &&
    (state.maintenancePayments || []).some((item) => getLinkKey(item.attachment?.path) === paymentLinkKey);
  if (isDuplicatePaymentByLink) {
    alert("Duplicate payment link detected. Entry ignored.");
    return;
  }
  const paymentRefKey = normalizeKeyText(paymentRef);
  const isDuplicatePaymentByRef =
    paymentRefKey &&
    paymentRefKey !== "-" &&
    (state.maintenancePayments || []).some((item) => normalizeKeyText(item.reference) === paymentRefKey);
  if (isDuplicatePaymentByRef) {
    alert("Duplicate payment reference / transaction ID detected. Entry ignored.");
    return;
  }
  const isDuplicatePaymentEntry = (state.maintenancePayments || []).some(
    (item) =>
      item.date === paymentDate &&
      Number(item.amount) === Number(paymentAmount) &&
      normalizeKeyText(item.mode) === normalizeKeyText(paymentMode || "-")
  );
  if (isDuplicatePaymentEntry) {
    alert("Duplicate payment entry detected. Entry ignored.");
    return;
  }

  state.maintenancePayments = state.maintenancePayments || [];
  state.maintenancePayments.push({
    id: `pay-${Date.now()}`,
    date: paymentDate,
    amount: paymentAmount,
    mode: paymentMode || "-",
    reference: paymentRef || "-",
    notes: paymentNotes || "-",
    attachment
  });

  document.getElementById("paymentDate").value = "";
  document.getElementById("paymentAmount").value = "";
  document.getElementById("paymentMode").value = "";
  document.getElementById("paymentRef").value = "";
  document.getElementById("paymentPath").value = "";
  document.getElementById("paymentNotes").value = "";
  save();
  renderAll();
}

function addGift() {
  const giftDate = document.getElementById("giftDate").value;
  const giftItem = document.getElementById("giftItem").value.trim();
  const rawAmount = document.getElementById("giftAmount").value;
  const giftOccasion = document.getElementById("giftOccasion").value.trim();
  const giftPath = document.getElementById("giftPath").value.trim();
  const giftNotes = document.getElementById("giftNotes").value.trim();

  if (!giftDate || !giftItem) return;

  const amount = rawAmount === "" ? 0 : Number(rawAmount);
  if (!Number.isFinite(amount) || amount < 0) return;

  const attachment = buildAttachmentFromPath(giftPath, "View File");

  state.daughterGifts = state.daughterGifts || [];
  state.daughterGifts.push({
    id: `gift-${Date.now()}`,
    date: giftDate,
    item: giftItem,
    amount,
    occasion: giftOccasion || "-",
    notes: giftNotes || "-",
    attachment
  });

  document.getElementById("giftDate").value = "";
  document.getElementById("giftItem").value = "";
  document.getElementById("giftAmount").value = "";
  document.getElementById("giftOccasion").value = "";
  document.getElementById("giftPath").value = "";
  document.getElementById("giftNotes").value = "";
  save();
  renderAll();
}

function addTask() {
  const taskText = document.getElementById("taskText").value.trim();
  const taskDate = document.getElementById("taskDate").value;

  if (!taskText || !taskDate) return;

  state.tasks.push({
    id: `t-${Date.now()}`,
    text: taskText,
    dueDate: taskDate,
    done: false
  });

  document.getElementById("taskText").value = "";
  document.getElementById("taskDate").value = "";
  save();
  renderAll();
}

function addNote() {
  const title = document.getElementById("noteTitle").value.trim();
  const body = document.getElementById("noteBody").value.trim();

  if (!title || !body) return;

  state.notes.push({
    id: `n-${Date.now()}`,
    title,
    body,
    createdAt: new Date().toISOString()
  });

  document.getElementById("noteTitle").value = "";
  document.getElementById("noteBody").value = "";
  save();
  renderAll();
}

function renameActiveCaseSession() {
  const active = getActiveCaseRecord();
  if (!active) return;

  const nextName = prompt("Rename active case session:", active.name || "");
  if (nextName === null) return;
  const cleaned = nextName.trim();
  if (!cleaned) {
    alert("Case session name cannot be empty.");
    return;
  }

  active.name = cleaned;
  save();
  renderCaseSwitcher();
  renderAll();
}

function editHearingEntry(hearingKey) {
  const row = (state.hearings || []).find((h) => `${h.hearingDate}-${h.businessDate}` === hearingKey);
  if (!row) return;

  const hearingDateInput = prompt("Edit hearing date (YYYY-MM-DD):", row.hearingDate || "");
  if (hearingDateInput === null) return;
  const hearingDate = hearingDateInput.trim();
  if (!hearingDate) {
    alert("Hearing date is required.");
    return;
  }

  const purposeInput = prompt("Edit purpose:", row.purpose || "");
  if (purposeInput === null) return;
  const purpose = purposeInput.trim();
  if (!purpose) {
    alert("Purpose is required.");
    return;
  }

  const judgeInput = prompt("Edit judge (optional):", row.judge || "");
  if (judgeInput === null) return;

  row.hearingDate = hearingDate;
  row.purpose = purpose;
  row.judge = judgeInput.trim() || "-";

  save();
  renderAll();
}

function editOrderEntry(orderNo) {
  const row = (state.orders || []).find((item) => String(item.orderNumber) === String(orderNo));
  if (!row) return;

  const dateInput = prompt("Edit order date (YYYY-MM-DD):", row.date || "");
  if (dateInput === null) return;
  const date = dateInput.trim();
  if (!date) {
    alert("Order date is required.");
    return;
  }

  const detailsInput = prompt("Edit order details/title:", row.details || "");
  if (detailsInput === null) return;
  const details = detailsInput.trim();
  if (!details) {
    alert("Order details are required.");
    return;
  }

  row.date = date;
  row.details = details;

  save();
  renderAll();
}

function editExhibitEntry(exhibitId) {
  const row = (state.exhibits || []).find((item) => item.id === exhibitId);
  if (!row) return;

  const dateInput = prompt("Edit exhibit date (YYYY-MM-DD):", row.date || "");
  if (dateInput === null) return;
  const date = dateInput.trim();
  if (!date) {
    alert("Exhibit date is required.");
    return;
  }

  const exhibitNoInput = prompt("Edit exhibit number:", row.exhibitNo || "");
  if (exhibitNoInput === null) return;
  const exhibitNo = exhibitNoInput.trim();
  if (!exhibitNo) {
    alert("Exhibit number is required.");
    return;
  }

  const descriptionInput = prompt("Edit exhibit description:", row.description || "");
  if (descriptionInput === null) return;
  const description = descriptionInput.trim();
  if (!description) {
    alert("Exhibit description is required.");
    return;
  }

  const currentAttachmentPath = row.attachment?.path || "";
  const attachmentPathInput = prompt("Edit attachment path/URL (optional):", currentAttachmentPath);
  if (attachmentPathInput === null) return;

  row.date = date;
  row.exhibitNo = exhibitNo;
  row.description = description;
  row.attachment = buildAttachmentFromPath(attachmentPathInput, "View File");

  save();
  renderAll();
}

function editCertifiedCopyEntry(copyId) {
  const row = (state.certifiedCopies || []).find((item) => item.id === copyId);
  if (!row) return;

  const appliedDateInput = prompt("Edit applied date (YYYY-MM-DD):", row.appliedDate || "");
  if (appliedDateInput === null) return;
  const appliedDate = appliedDateInput.trim();
  if (!appliedDate) {
    alert("Applied date is required.");
    return;
  }

  const documentNameInput = prompt("Edit document name:", row.documentName || "");
  if (documentNameInput === null) return;
  const documentName = documentNameInput.trim();
  if (!documentName) {
    alert("Document name is required.");
    return;
  }

  const applicationNoInput = prompt("Edit application number (optional):", row.applicationNo || "");
  if (applicationNoInput === null) return;

  const receivedDateInput = prompt("Edit received date (YYYY-MM-DD, optional):", row.receivedDate || "");
  if (receivedDateInput === null) return;

  const notesInput = prompt("Edit notes (optional):", row.notes || "");
  if (notesInput === null) return;

  const attachmentPathInput = prompt("Edit attachment path/URL (optional):", row.attachment?.path || "");
  if (attachmentPathInput === null) return;

  row.appliedDate = appliedDate;
  row.documentName = documentName;
  row.applicationNo = applicationNoInput.trim() || "-";
  row.receivedDate = receivedDateInput.trim();
  row.notes = notesInput.trim() || "-";
  row.attachment = buildAttachmentFromPath(attachmentPathInput, "View File");

  save();
  renderAll();
}

function editReferenceEntry(referenceId) {
  const row = (state.references || []).find((item) => item.id === referenceId);
  if (!row) return;

  const titleInput = prompt("Edit reference title:", row.title || "");
  if (titleInput === null) return;
  const title = titleInput.trim();
  if (!title) {
    alert("Reference title is required.");
    return;
  }

  const citationInput = prompt("Edit citation (optional):", row.citation || "");
  if (citationInput === null) return;

  const pathInput = prompt("Edit attachment path/URL:", row.attachment?.path || "");
  if (pathInput === null) return;
  const attachment = buildAttachmentFromPath(pathInput, "Reference.pdf");
  if (!attachment) {
    alert("Reference attachment path is required.");
    return;
  }

  row.title = title;
  row.citation = citationInput.trim() || "-";
  row.attachment = attachment;

  save();
  renderAll();
}

function editPaymentEntry(paymentId) {
  const row = (state.maintenancePayments || []).find((item) => item.id === paymentId);
  if (!row) return;

  const dateInput = prompt("Edit payment date (YYYY-MM-DD):", row.date || "");
  if (dateInput === null) return;
  const date = dateInput.trim();
  if (!date) {
    alert("Payment date is required.");
    return;
  }

  const amountInput = prompt("Edit payment amount (INR):", String(row.amount ?? ""));
  if (amountInput === null) return;
  const amount = Number(amountInput.trim());
  if (!Number.isFinite(amount) || amount <= 0) {
    alert("Valid payment amount is required.");
    return;
  }

  const modeInput = prompt("Edit payment mode (optional):", row.mode || "");
  if (modeInput === null) return;

  const referenceInput = prompt("Edit payment reference (optional):", row.reference || "");
  if (referenceInput === null) return;

  const notesInput = prompt("Edit notes (optional):", row.notes || "");
  if (notesInput === null) return;

  const pathInput = prompt("Edit attachment path/URL (optional):", row.attachment?.path || "");
  if (pathInput === null) return;

  row.date = date;
  row.amount = amount;
  row.mode = modeInput.trim() || "-";
  row.reference = referenceInput.trim() || "-";
  row.notes = notesInput.trim() || "-";
  row.attachment = buildAttachmentFromPath(pathInput, "View File");

  save();
  renderAll();
}

function editGiftEntry(giftId) {
  const row = (state.daughterGifts || []).find((item) => item.id === giftId);
  if (!row) return;

  const dateInput = prompt("Edit gift date (YYYY-MM-DD):", row.date || "");
  if (dateInput === null) return;
  const date = dateInput.trim();
  if (!date) {
    alert("Gift date is required.");
    return;
  }

  const itemInput = prompt("Edit gift item:", row.item || "");
  if (itemInput === null) return;
  const item = itemInput.trim();
  if (!item) {
    alert("Gift item is required.");
    return;
  }

  const amountInput = prompt("Edit gift amount (INR, optional):", String(row.amount ?? 0));
  if (amountInput === null) return;
  const amount = amountInput.trim() === "" ? 0 : Number(amountInput.trim());
  if (!Number.isFinite(amount) || amount < 0) {
    alert("Gift amount must be 0 or more.");
    return;
  }

  const occasionInput = prompt("Edit occasion (optional):", row.occasion || "");
  if (occasionInput === null) return;

  const notesInput = prompt("Edit notes (optional):", row.notes || "");
  if (notesInput === null) return;

  const pathInput = prompt("Edit attachment path/URL (optional):", row.attachment?.path || "");
  if (pathInput === null) return;

  row.date = date;
  row.item = item;
  row.amount = amount;
  row.occasion = occasionInput.trim() || "-";
  row.notes = notesInput.trim() || "-";
  row.attachment = buildAttachmentFromPath(pathInput, "View File");

  save();
  renderAll();
}

function editTaskEntry(taskId) {
  const row = (state.tasks || []).find((item) => item.id === taskId);
  if (!row) return;

  const textInput = prompt("Edit task text:", row.text || "");
  if (textInput === null) return;
  const text = textInput.trim();
  if (!text) {
    alert("Task text is required.");
    return;
  }

  const dueDateInput = prompt("Edit due date (YYYY-MM-DD):", row.dueDate || "");
  if (dueDateInput === null) return;
  const dueDate = dueDateInput.trim();
  if (!dueDate) {
    alert("Task due date is required.");
    return;
  }

  row.text = text;
  row.dueDate = dueDate;

  save();
  renderAll();
}

function editNoteEntry(noteId) {
  const row = (state.notes || []).find((item) => item.id === noteId);
  if (!row) return;

  const titleInput = prompt("Edit note title:", row.title || "");
  if (titleInput === null) return;
  const title = titleInput.trim();
  if (!title) {
    alert("Note title is required.");
    return;
  }

  const bodyInput = prompt("Edit note body:", row.body || "");
  if (bodyInput === null) return;
  const body = bodyInput.trim();
  if (!body) {
    alert("Note body is required.");
    return;
  }

  row.title = title;
  row.body = body;

  save();
  renderAll();
}

function switchCaseSession(caseId) {
  if (!appState?.cases?.[caseId]) return;
  save();
  appState.activeCaseId = caseId;
  state = getActiveCaseState();
  save();
  renderCaseSwitcher();
  renderAll();
}

function bindEvents() {
  document.getElementById("caseSessionSelect").addEventListener("change", (event) => {
    switchCaseSession(event.target.value);
  });
  document.getElementById("syncNowBtn").addEventListener("click", () => {
    refreshSyncedRecords(true);
  });
  document.getElementById("renameCaseBtn").addEventListener("click", renameActiveCaseSession);
  document.getElementById("addHearingBtn").addEventListener("click", addHearing);
  document.getElementById("addOrderBtn").addEventListener("click", addOrder);
  document.getElementById("addExhibitBtn").addEventListener("click", addExhibit);
  document.getElementById("addCopyBtn").addEventListener("click", addCertifiedCopy);
  document.getElementById("addPaymentBtn").addEventListener("click", addPayment);
  document.getElementById("paymentSortOrder").addEventListener("change", renderMaintenancePayments);
  document.getElementById("addGiftBtn").addEventListener("click", addGift);
  document.getElementById("addReferenceBtn").addEventListener("click", addReference);
  document.getElementById("addTaskBtn").addEventListener("click", addTask);
  document.getElementById("addNoteBtn").addEventListener("click", addNote);

  document.querySelectorAll(".tab").forEach((tabButton) => {
    tabButton.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));

      tabButton.classList.add("active");
      document.getElementById(`tab-${tabButton.dataset.tab}`).classList.add("active");
    });
  });

  document.body.addEventListener("click", (event) => {
    const hearingEditKey = event.target.getAttribute("data-edit-hearing");
    if (hearingEditKey) {
      editHearingEntry(hearingEditKey);
      return;
    }

    const hearingKey = event.target.getAttribute("data-delete-hearing");
    if (hearingKey) {
      state.hearings = state.hearings.filter((h) => `${h.hearingDate}-${h.businessDate}` !== hearingKey);
      save();
      renderAll();
      return;
    }

    const editOrderNo = event.target.getAttribute("data-edit-order");
    if (editOrderNo) {
      editOrderEntry(editOrderNo);
      return;
    }

    const orderNo = event.target.getAttribute("data-delete-order");
    if (orderNo) {
      state.orders = state.orders.filter((o) => String(o.orderNumber) !== orderNo);
      save();
      renderAll();
      return;
    }

    const editExhibitId = event.target.getAttribute("data-edit-exhibit");
    if (editExhibitId) {
      editExhibitEntry(editExhibitId);
      return;
    }

    const exhibitId = event.target.getAttribute("data-delete-exhibit");
    if (exhibitId) {
      state.exhibits = (state.exhibits || []).filter((exhibit) => exhibit.id !== exhibitId);
      save();
      renderAll();
      return;
    }

    const editCopyId = event.target.getAttribute("data-edit-copy");
    if (editCopyId) {
      editCertifiedCopyEntry(editCopyId);
      return;
    }

    const copyId = event.target.getAttribute("data-delete-copy");
    if (copyId) {
      state.certifiedCopies = (state.certifiedCopies || []).filter((copy) => copy.id !== copyId);
      save();
      renderAll();
      return;
    }

    const editRefId = event.target.getAttribute("data-edit-reference");
    if (editRefId) {
      editReferenceEntry(editRefId);
      return;
    }

    const refId = event.target.getAttribute("data-delete-reference");
    if (refId) {
      state.references = (state.references || []).filter((r) => r.id !== refId);
      save();
      renderAll();
      return;
    }

    const editPaymentId = event.target.getAttribute("data-edit-payment");
    if (editPaymentId) {
      editPaymentEntry(editPaymentId);
      return;
    }

    const paymentId = event.target.getAttribute("data-delete-payment");
    if (paymentId) {
      state.maintenancePayments = (state.maintenancePayments || []).filter((payment) => payment.id !== paymentId);
      save();
      renderAll();
      return;
    }

    const editGiftId = event.target.getAttribute("data-edit-gift");
    if (editGiftId) {
      editGiftEntry(editGiftId);
      return;
    }

    const giftId = event.target.getAttribute("data-delete-gift");
    if (giftId) {
      state.daughterGifts = (state.daughterGifts || []).filter((gift) => gift.id !== giftId);
      save();
      renderAll();
      return;
    }

    const editTaskId = event.target.getAttribute("data-edit-task");
    if (editTaskId) {
      editTaskEntry(editTaskId);
      return;
    }

    const taskId = event.target.getAttribute("data-delete-task");
    if (taskId) {
      state.tasks = state.tasks.filter((t) => t.id !== taskId);
      save();
      renderAll();
      return;
    }

    const editNoteId = event.target.getAttribute("data-edit-note");
    if (editNoteId) {
      editNoteEntry(editNoteId);
      return;
    }

    const noteId = event.target.getAttribute("data-delete-note");
    if (noteId) {
      state.notes = state.notes.filter((n) => n.id !== noteId);
      save();
      renderAll();
    }
  });

  document.body.addEventListener("change", (event) => {
    const taskId = event.target.getAttribute("data-toggle-task");
    if (!taskId) return;
    const task = state.tasks.find((t) => t.id === taskId);
    if (task) {
      task.done = Boolean(event.target.checked);
      save();
      renderAll();
    }
  });

  document.getElementById("exportBtn").addEventListener("click", () => {
    save();
    const blob = new Blob([JSON.stringify(appState, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `lawyers-diary-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(link.href);
  });

  document.getElementById("importInput").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const content = await file.text();
      const parsed = JSON.parse(content);
      appState = migrateAppState(parsed);
      state = getActiveCaseState();
      save();
      renderCaseSwitcher();
      renderAll();
      alert("Backup imported successfully.");
    } catch {
      alert("Could not import file.");
    }
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    const active = getActiveCaseRecord();
    if (!active) return;
    active.data = active.seedRequired
      ? migrateState(defaultData, { seedRequired: true })
      : migrateState(createSessionCaseData(), { seedRequired: false });
    state = getActiveCaseState();
    save();
    renderCaseSwitcher();
    renderAll();
  });
}

function init() {
  bindEvents();
  renderCaseSwitcher();
  save();
  renderAll();
  refreshSyncedRecords(false);
  setInterval(() => {
    refreshSyncedRecords(false);
  }, syncPollMs);
}

init();
