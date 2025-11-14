import universityImage from "@/assets/university-physio.jpg";

export interface University {
  id: string;
  name: string;
  location: string;
  country: string;
  program: string;
  duration: string;
  students: string;
  ranking: string;
  image: string;
  tuitionFee: string;
  accreditation: string;
  description: string;
  programs: {
    name: string;
    level: string;
    duration: string;
    credits: string;
  }[];
  admissionRequirements: string[];
  clinicalPlacements: string;
  researchAreas: string[];
  facultyHighlights: string;
  graduateOutcomes: {
    employmentRate: string;
    averageSalary: string;
    topEmployers: string[];
  };
}

export const universities: University[] = [
  {
    id: "university-of-melbourne",
    name: "University of Melbourne",
    location: "Melbourne, Victoria",
    country: "Australia",
    program: "Doctor of Physiotherapy",
    duration: "4 years",
    students: "250+ students",
    ranking: "#1 in Australia, Top 15 Global",
    image: universityImage,
    tuitionFee: "AUD $45,000 per year (International), AUD $12,000 per year (Domestic)",
    accreditation: "Australian Physiotherapy Council",
    description: "The University of Melbourne offers one of the most prestigious physiotherapy programs in the Southern Hemisphere. With state-of-the-art facilities and world-renowned faculty, students receive comprehensive training in musculoskeletal, neurological, cardiorespiratory, and pediatric physiotherapy.",
    programs: [
      {
        name: "Doctor of Physiotherapy",
        level: "Doctoral",
        duration: "4 years full-time",
        credits: "400 credit points"
      },
      {
        name: "Master of Physiotherapy",
        level: "Masters",
        duration: "2 years full-time",
        credits: "200 credit points"
      }
    ],
    admissionRequirements: [
      "Bachelor's degree in a related field with minimum GPA of 3.0",
      "Prerequisite courses in anatomy, physiology, and biomechanics",
      "IELTS 7.0 or equivalent for international students",
      "Personal statement and letters of recommendation",
      "Interview (for selected candidates)"
    ],
    clinicalPlacements: "Over 1,000 hours of clinical placement across metropolitan and rural settings, including leading hospitals like Royal Melbourne Hospital, Alfred Health, and community health centers.",
    researchAreas: [
      "Musculoskeletal biomechanics and pain management",
      "Neurological rehabilitation and neuroplasticity",
      "Sports injury prevention and performance",
      "Geriatric physiotherapy and fall prevention",
      "Telehealth and digital physiotherapy interventions"
    ],
    facultyHighlights: "Faculty includes 15+ internationally recognized researchers with expertise spanning all areas of physiotherapy practice. Many faculty members maintain active clinical practices alongside their teaching roles.",
    graduateOutcomes: {
      employmentRate: "98% within 6 months of graduation",
      averageSalary: "AUD $75,000 - $85,000",
      topEmployers: [
        "Royal Melbourne Hospital",
        "Alfred Health",
        "Eastern Health",
        "Private practices across Australia",
        "Sports physiotherapy clinics"
      ]
    }
  },
  {
    id: "mcgill-university",
    name: "McGill University",
    location: "Montreal, Quebec",
    country: "Canada",
    program: "Master of Physical Therapy",
    duration: "2 years",
    students: "180+ students",
    ranking: "Top 50 Global, #2 in Canada",
    image: universityImage,
    tuitionFee: "CAD $28,000 per year (International), CAD $8,500 per year (Domestic)",
    accreditation: "Canadian Physiotherapy Association, World Confederation for Physical Therapy",
    description: "McGill's School of Physical & Occupational Therapy is Canada's oldest and one of the world's most respected programs. The curriculum emphasizes evidence-based practice, clinical reasoning, and interprofessional collaboration.",
    programs: [
      {
        name: "Master of Science (Applied) in Physical Therapy",
        level: "Masters",
        duration: "2 years full-time",
        credits: "70 credits"
      },
      {
        name: "PhD in Rehabilitation Science",
        level: "Doctoral",
        duration: "4-5 years",
        credits: "Research-based"
      }
    ],
    admissionRequirements: [
      "Bachelor's degree with strong foundation in biological sciences",
      "Minimum GPA of 3.3 on a 4.0 scale",
      "Completion of prerequisite courses in anatomy, physiology, psychology",
      "Observation hours in physiotherapy settings (minimum 40 hours)",
      "TOEFL iBT 100 or IELTS 7.0 for international students",
      "CASPer test completion"
    ],
    clinicalPlacements: "930+ hours across diverse clinical settings including McGill University Health Centre, Jewish General Hospital, rehabilitation centers, and community clinics throughout Quebec.",
    researchAreas: [
      "Chronic pain management and opioid alternatives",
      "Stroke rehabilitation and motor learning",
      "Musculoskeletal injury prevention in aging populations",
      "Pediatric developmental disorders",
      "Indigenous health and culturally responsive physiotherapy"
    ],
    facultyHighlights: "Home to leading researchers in pain science, motor control, and rehabilitation outcomes. Faculty members lead international research collaborations and clinical practice guideline development.",
    graduateOutcomes: {
      employmentRate: "100% within 4 months of graduation",
      averageSalary: "CAD $70,000 - $80,000",
      topEmployers: [
        "McGill University Health Centre",
        "Jewish General Hospital",
        "Montreal Rehabilitation Institute",
        "Private multidisciplinary clinics",
        "Professional sports teams"
      ]
    }
  },
  {
    id: "kings-college-london",
    name: "King's College London",
    location: "London",
    country: "United Kingdom",
    program: "BSc Physiotherapy",
    duration: "3 years",
    students: "200+ students",
    ranking: "Top 10 UK, Top 30 Global",
    image: universityImage,
    tuitionFee: "£28,050 per year (International), £9,250 per year (UK/EU)",
    accreditation: "Chartered Society of Physiotherapy, Health & Care Professions Council",
    description: "King's College London offers a rigorous undergraduate physiotherapy program combining theoretical knowledge with extensive clinical practice. Located in the heart of London, students benefit from placements at world-leading NHS hospitals.",
    programs: [
      {
        name: "BSc (Hons) Physiotherapy",
        level: "Bachelor's",
        duration: "3 years full-time",
        credits: "360 credits"
      },
      {
        name: "MSc Advanced Physiotherapy",
        level: "Masters",
        duration: "1 year full-time, 2 years part-time",
        credits: "180 credits"
      }
    ],
    admissionRequirements: [
      "A-Levels: AAA including Biology and one other science",
      "IB: 35 points with 666 at Higher Level including Biology",
      "GCSE English and Mathematics at grade 6 or above",
      "IELTS 7.0 (minimum 6.5 in each component) for international students",
      "Work experience or observation in physiotherapy setting recommended",
      "UCAT test (for some applicants)"
    ],
    clinicalPlacements: "1,000+ hours of clinical education across Guy's and St Thomas' NHS Foundation Trust, King's College Hospital, and community settings throughout London and Southeast England.",
    researchAreas: [
      "Musculoskeletal pain and manual therapy",
      "Respiratory physiotherapy and critical care",
      "Women's health and pelvic floor dysfunction",
      "Cancer rehabilitation and palliative care",
      "Virtual reality and technology-enhanced rehabilitation"
    ],
    facultyHighlights: "Faculty members are leaders in UK physiotherapy education and clinical practice. Many hold dual appointments with NHS trusts and contribute to national clinical guidelines.",
    graduateOutcomes: {
      employmentRate: "99% within 6 months of graduation",
      averageSalary: "£28,000 - £34,000 (NHS Band 5 starting)",
      topEmployers: [
        "Guy's and St Thomas' NHS Foundation Trust",
        "King's College Hospital NHS Foundation Trust",
        "Central London Community Healthcare NHS Trust",
        "Private physiotherapy practices across London",
        "Sports clubs and athletic organizations"
      ]
    }
  },
  {
    id: "university-of-toronto",
    name: "University of Toronto",
    location: "Toronto, Ontario",
    country: "Canada",
    program: "Master of Science in Physical Therapy",
    duration: "2 years",
    students: "160+ students",
    ranking: "Top 20 Global, #1 in Canada",
    image: universityImage,
    tuitionFee: "CAD $32,000 per year (International), CAD $9,000 per year (Domestic)",
    accreditation: "Canadian Physiotherapy Association, Physiotherapy Education Accreditation Canada",
    description: "The University of Toronto's Department of Physical Therapy is renowned for its research excellence and innovative curriculum. The program emphasizes critical thinking, evidence-based practice, and leadership development.",
    programs: [
      {
        name: "Master of Science in Physical Therapy (MScPT)",
        level: "Masters",
        duration: "2 years full-time",
        credits: "16.5 FCE"
      },
      {
        name: "PhD in Rehabilitation Sciences",
        level: "Doctoral",
        duration: "4-6 years",
        credits: "Research-focused"
      }
    ],
    admissionRequirements: [
      "Four-year Bachelor's degree with coursework in anatomy, physiology, and statistics",
      "Minimum B+ average in last two years of study",
      "40+ hours of observation/volunteer experience in physiotherapy",
      "Three letters of reference",
      "TOEFL iBT 100 (minimum 22 in writing) or IELTS 7.0",
      "CASPer situational judgment test"
    ],
    clinicalPlacements: "Over 1,000 hours across University Health Network, Sunnybrook Health Sciences Centre, Holland Bloorview Kids Rehabilitation Hospital, and diverse community settings.",
    researchAreas: [
      "Neuroplasticity and stroke recovery",
      "Chronic pain mechanisms and interventions",
      "Orthopedic surgery outcomes",
      "Global health and accessibility",
      "Knowledge translation and implementation science"
    ],
    facultyHighlights: "Faculty includes Canada Research Chairs and recipients of major national and international research grants. Strong focus on mentorship and student research opportunities.",
    graduateOutcomes: {
      employmentRate: "100% within 3 months",
      averageSalary: "CAD $72,000 - $82,000",
      topEmployers: [
        "University Health Network",
        "Sunnybrook Health Sciences Centre",
        "Toronto Rehabilitation Institute",
        "Private multidisciplinary practices",
        "Academic and research institutions"
      ]
    }
  },
  {
    id: "university-of-sydney",
    name: "University of Sydney",
    location: "Sydney, New South Wales",
    country: "Australia",
    program: "Bachelor of Applied Science (Physiotherapy)",
    duration: "4 years",
    students: "220+ students",
    ranking: "#2 in Australia, Top 20 Global",
    image: universityImage,
    tuitionFee: "AUD $52,000 per year (International), AUD $11,500 per year (Domestic)",
    accreditation: "Australian Physiotherapy Council",
    description: "The University of Sydney's physiotherapy program combines rigorous academic training with extensive hands-on clinical experience. Students learn from internationally recognized clinicians and researchers.",
    programs: [
      {
        name: "Bachelor of Applied Science (Physiotherapy)",
        level: "Bachelor's",
        duration: "4 years full-time",
        credits: "192 credit points"
      },
      {
        name: "Master of Physiotherapy",
        level: "Masters",
        duration: "2.5 years full-time",
        credits: "160 credit points"
      }
    ],
    admissionRequirements: [
      "ATAR 98.00 or equivalent",
      "Chemistry and one other science (Biology or Physics recommended)",
      "IELTS 7.0 (minimum 7.0 in each band) for international students",
      "Special consideration for rural and Indigenous applicants",
      "Interview for some entry pathways"
    ],
    clinicalPlacements: "1,050+ hours across Sydney's premier healthcare facilities including Royal Prince Alfred Hospital, Sydney Children's Hospital, and community rehabilitation centers.",
    researchAreas: [
      "Low back pain management and prevention",
      "Sports biomechanics and injury",
      "Pediatric neurodevelopment",
      "Cardiovascular and pulmonary rehabilitation",
      "Musculoskeletal ultrasound imaging"
    ],
    facultyHighlights: "Faculty members lead major national research initiatives and serve on peak professional bodies. Active involvement in shaping physiotherapy practice standards across Australia.",
    graduateOutcomes: {
      employmentRate: "97% within 6 months",
      averageSalary: "AUD $73,000 - $83,000",
      topEmployers: [
        "Sydney Local Health District",
        "South Eastern Sydney Local Health District",
        "Private practice networks",
        "Professional sporting organizations",
        "Aged care and disability services"
      ]
    }
  },
  {
    id: "duke-university",
    name: "Duke University",
    location: "Durham, North Carolina",
    country: "United States",
    program: "Doctor of Physical Therapy",
    duration: "3 years",
    students: "150+ students",
    ranking: "Top 5 USA, Top 10 Global",
    image: universityImage,
    tuitionFee: "USD $68,000 per year",
    accreditation: "Commission on Accreditation in Physical Therapy Education (CAPTE)",
    description: "Duke's Doctor of Physical Therapy program is consistently ranked among the nation's best. With a strong emphasis on research, clinical excellence, and leadership, graduates are prepared for advanced practice roles.",
    programs: [
      {
        name: "Doctor of Physical Therapy (DPT)",
        level: "Doctoral",
        duration: "3 years",
        credits: "115 credit hours"
      },
      {
        name: "DPT/PhD Dual Degree",
        level: "Doctoral",
        duration: "6-7 years",
        credits: "Combined program"
      },
      {
        name: "Transitional DPT",
        level: "Doctoral",
        duration: "1-2 years part-time",
        credits: "33-48 credits"
      }
    ],
    admissionRequirements: [
      "Bachelor's degree from accredited institution",
      "Minimum cumulative GPA of 3.0 (competitive average 3.7)",
      "Prerequisite courses: anatomy, physiology, chemistry, physics, psychology, statistics",
      "Minimum 100 hours of observation/volunteer experience with licensed PTs",
      "GRE scores (competitive scores: 310+ combined)",
      "Three letters of recommendation",
      "TOEFL 100+ or IELTS 7.5+ for international students"
    ],
    clinicalPlacements: "37+ weeks of full-time clinical education across Duke University Health System, VA Medical Centers, and diverse community settings throughout North Carolina and beyond.",
    researchAreas: [
      "Movement system science and motor control",
      "Orthopedic manual physical therapy",
      "Neurological rehabilitation and plasticity",
      "Military and veteran health",
      "Health services and implementation research"
    ],
    facultyHighlights: "Faculty includes APTA fellows, board-certified clinical specialists, and recipients of major NIH research funding. Strong mentorship culture with numerous student research opportunities.",
    graduateOutcomes: {
      employmentRate: "100% within 6 months",
      averageSalary: "USD $75,000 - $90,000",
      topEmployers: [
        "Duke University Health System",
        "UNC Health",
        "ATI Physical Therapy",
        "Hospital systems across the United States",
        "Private practices and sports clinics"
      ]
    }
  },
  {
    id: "university-of-queensland",
    name: "University of Queensland",
    location: "Brisbane, Queensland",
    country: "Australia",
    program: "Bachelor of Physiotherapy (Honours)",
    duration: "4 years",
    students: "200+ students",
    ranking: "#3 in Australia, Top 25 Global",
    image: universityImage,
    tuitionFee: "AUD $48,000 per year (International), AUD $11,000 per year (Domestic)",
    accreditation: "Australian Physiotherapy Council",
    description: "UQ's physiotherapy program is distinguished by its research-led teaching and strong industry connections. The program offers specialization streams and international clinical placement opportunities.",
    programs: [
      {
        name: "Bachelor of Physiotherapy (Honours)",
        level: "Bachelor's",
        duration: "4 years full-time",
        credits: "64 units"
      },
      {
        name: "Master of Physiotherapy Studies",
        level: "Masters",
        duration: "2 years full-time",
        credits: "32 units"
      }
    ],
    admissionRequirements: [
      "ATAR 96.00+ or equivalent international qualification",
      "Chemistry and one other science subject",
      "IELTS 7.0 (minimum 7.0 in speaking and listening, 6.5 in reading and writing)",
      "Consideration of equity and access schemes",
      "First aid certification recommended"
    ],
    clinicalPlacements: "1,000+ hours including placements at major Brisbane hospitals, rural and remote communities, and optional international placements in Southeast Asia and Pacific nations.",
    researchAreas: [
      "Spinal pain and biomechanics",
      "Exercise physiology and chronic disease",
      "Indigenous health and cultural competency",
      "Tropical medicine and global health",
      "Sports medicine and performance analytics"
    ],
    facultyHighlights: "Faculty members are leaders in musculoskeletal research and contribute to international clinical practice guidelines. Strong partnerships with professional sports teams and Olympic programs.",
    graduateOutcomes: {
      employmentRate: "96% within 6 months",
      averageSalary: "AUD $72,000 - $82,000",
      topEmployers: [
        "Metro North Health",
        "Queensland Health facilities statewide",
        "Brisbane sports physiotherapy clinics",
        "Private multidisciplinary practices",
        "Aged care and disability sectors"
      ]
    }
  },
  {
    id: "university-of-british-columbia",
    name: "University of British Columbia",
    location: "Vancouver, British Columbia",
    country: "Canada",
    program: "Master of Physical Therapy",
    duration: "2 years",
    students: "140+ students",
    ranking: "Top 40 Global, #3 in Canada",
    image: universityImage,
    tuitionFee: "CAD $30,000 per year (International), CAD $8,800 per year (Domestic)",
    accreditation: "Canadian Physiotherapy Association",
    description: "UBC's Master of Physical Therapy program emphasizes client-centered care, cultural safety, and interprofessional collaboration. The program offers unique opportunities in Indigenous health and environmental physiotherapy.",
    programs: [
      {
        name: "Master of Physical Therapy (MPT)",
        level: "Masters",
        duration: "2 years full-time",
        credits: "85 credits"
      },
      {
        name: "PhD in Rehabilitation Sciences",
        level: "Doctoral",
        duration: "4-6 years",
        credits: "Research-focused"
      }
    ],
    admissionRequirements: [
      "Four-year undergraduate degree with prerequisite courses",
      "Minimum 76% average (competitive average 85%+)",
      "50+ hours of physiotherapy-related experience",
      "CASPer assessment",
      "Three letters of reference",
      "TOEFL iBT 100 or IELTS 7.0 (minimum 6.5 in each band)"
    ],
    clinicalPlacements: "950+ hours across Vancouver Coastal Health, Providence Health Care, Fraser Health, and rural/remote BC communities including Indigenous health centers.",
    researchAreas: [
      "Musculoskeletal pain and disability",
      "Indigenous health and reconciliation",
      "Environmental factors in rehabilitation",
      "Concussion and traumatic brain injury",
      "Aging and geriatric rehabilitation"
    ],
    facultyHighlights: "Faculty includes internationally recognized scholars in pain science, Indigenous health, and rehabilitation outcomes. Strong commitment to equity, diversity, and inclusion in healthcare.",
    graduateOutcomes: {
      employmentRate: "99% within 6 months",
      averageSalary: "CAD $70,000 - $82,000",
      topEmployers: [
        "Vancouver Coastal Health",
        "Providence Health Care",
        "Fraser Health Authority",
        "Private practices throughout BC",
        "Community health centers and First Nations facilities"
      ]
    }
  }
];

export const getUniversityById = (id: string): University | undefined => {
  return universities.find(uni => uni.id === id);
};

export const getUniversitiesByCountry = (country: string): University[] => {
  if (country === "All") return universities;
  return universities.filter(uni => uni.country === country);
};
