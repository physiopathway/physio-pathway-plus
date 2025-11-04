export interface Article {
  id: number;
  title: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
    conclusion: string;
  };
}

export const allArticles: Article[] = [
  {
    id: 1,
    title: "Understanding Musculoskeletal Disorders",
    category: "Orthopedic",
    readTime: "12 min",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    excerpt: "Comprehensive guide to understanding, diagnosing, and treating common musculoskeletal conditions affecting millions worldwide.",
    image: "/src/assets/article-back-pain.jpg",
    content: {
      introduction: "Musculoskeletal disorders affect millions of people worldwide, impacting their quality of life and ability to perform daily activities. Understanding these conditions is crucial for effective treatment and prevention. These disorders encompass a wide range of conditions affecting muscles, bones, tendons, ligaments, and nerves throughout the body.",
      sections: [
        {
          title: "Common Musculoskeletal Conditions",
          content: "The most prevalent musculoskeletal disorders include osteoarthritis, which is a degenerative joint disease affecting cartilage and causing pain and stiffness. Tendinitis involves inflammation of tendons from overuse or repetitive movements. Bursitis is characterized by inflammation of fluid-filled sacs near joints. Sprains and strains are common injuries affecting ligaments and muscles respectively. Herniated discs occur when spinal discs rupture, causing nerve compression and pain. Each condition requires specific assessment and treatment approaches tailored to individual patient needs."
        },
        {
          title: "Risk Factors and Causes",
          content: "Multiple factors contribute to the development of musculoskeletal disorders. Age-related changes in tissues increase vulnerability to injury and degeneration. Occupational hazards from repetitive motions, poor ergonomics, and heavy lifting significantly contribute to these conditions. Physical inactivity weakens muscles and reduces joint flexibility. Obesity places additional stress on weight-bearing joints. Previous injuries that haven't healed properly can lead to chronic problems. Genetic predisposition also plays a role in certain conditions. Understanding these risk factors enables better prevention strategies."
        },
        {
          title: "Diagnosis and Assessment",
          content: "Proper diagnosis involves a comprehensive assessment including detailed patient history to understand symptom onset and progression. Physical examination evaluates range of motion, strength, and pain patterns. Imaging studies such as X-rays, MRI, or CT scans provide detailed visualization of affected structures. Functional assessments determine how the condition affects daily activities. Laboratory tests may be ordered to rule out inflammatory or systemic conditions. Our evidence-based approach ensures accurate identification of the underlying cause, leading to more effective treatment plans."
        },
        {
          title: "Treatment Approaches",
          content: "Treatment strategies are tailored to each patient and may include manual therapy techniques for pain relief and improved mobility. Therapeutic exercises strengthen affected areas and prevent recurrence. Modalities such as heat, ice, ultrasound, and electrical stimulation reduce pain and inflammation. Education on posture, body mechanics, and ergonomics prevents further injury. Home exercise programs ensure continued progress between therapy sessions. In some cases, collaboration with other healthcare providers including physicians and occupational therapists optimizes outcomes."
        },
        {
          title: "Prevention Strategies",
          content: "Preventing musculoskeletal disorders requires a proactive approach. Regular exercise maintains strength, flexibility, and joint health. Proper ergonomics at work and home reduces strain on the body. Maintaining a healthy weight decreases stress on joints. Taking breaks during repetitive activities prevents overuse injuries. Using proper lifting techniques protects the spine. Early intervention when symptoms first appear prevents conditions from becoming chronic. Education and awareness about body mechanics and movement patterns are essential for long-term musculoskeletal health."
        }
      ],
      conclusion: "Understanding musculoskeletal disorders empowers patients to take control of their health. With proper treatment, prevention strategies, and lifestyle modifications, most conditions can be effectively managed to restore function and improve quality of life. Early intervention and adherence to treatment plans are key to successful outcomes."
    }
  },
  {
    id: 2,
    title: "Post-Surgical Rehabilitation Protocols",
    category: "Orthopedic",
    readTime: "15 min",
    author: "Dr. Michael Torres",
    date: "March 12, 2024",
    excerpt: "Evidence-based rehabilitation protocols for optimal recovery after orthopedic surgery, from immediate post-op care to return to activity.",
    image: "/src/assets/articles/post-op-rehab.jpg",
    content: {
      introduction: "Post-surgical rehabilitation is a critical component of successful orthopedic surgery outcomes. Proper rehabilitation protocols accelerate healing, restore function, minimize complications, and facilitate safe return to activities. Understanding the phases of recovery and implementing appropriate interventions at each stage ensures optimal results.",
      sections: [
        {
          title: "Immediate Post-Operative Phase",
          content: "The first 48-72 hours after surgery focus on managing pain and inflammation through prescribed medications and ice therapy. Protecting the surgical site while beginning gentle range of motion exercises prevents stiffness. Weight-bearing restrictions must be strictly followed per surgeon orders. Early mobilization within safe parameters promotes circulation and prevents complications such as blood clots. Patient education about warning signs and proper care of the surgical site is essential during this critical period."
        },
        {
          title: "Early Recovery Phase",
          content: "Weeks 1-6 post-surgery emphasize controlled movement and gradual progression. Passive and active-assisted range of motion exercises restore joint mobility. Gentle strengthening begins with isometric exercises. Edema management through elevation, compression, and manual techniques reduces swelling. Scar tissue mobilization prevents adhesions. Gait training ensures proper movement patterns. Close monitoring of healing progress allows for appropriate advancement of activities while respecting tissue healing timelines."
        },
        {
          title: "Intermediate Recovery Phase",
          content: "Weeks 6-12 involve progressive strengthening and functional training. Resistance exercises build muscle strength and endurance. Proprioceptive training improves balance and joint awareness. Functional activities specific to patient goals are introduced gradually. Cardiovascular conditioning maintains overall fitness. Movement pattern correction addresses compensatory strategies developed during the healing process. This phase requires careful balance between challenging the body and avoiding overload."
        },
        {
          title: "Advanced Recovery Phase",
          content: "Months 3-6 focus on sport or activity-specific training and return to full function. High-level strengthening exercises prepare tissues for demands of daily life or sport. Plyometric training develops power and explosiveness when appropriate. Sport-specific drills simulate actual activity demands. Psychological preparation addresses fear of re-injury. Gradual progression through activity levels ensures readiness for full participation. Clearance from the surgeon is required before unrestricted activity."
        },
        {
          title: "Long-term Maintenance",
          content: "Continued exercise and activity modification maintain surgical outcomes long-term. Home exercise programs sustain strength and flexibility gains. Regular physical activity promotes joint health and prevents future problems. Periodic check-ins with healthcare providers monitor progress. Education about injury prevention strategies reduces re-injury risk. Understanding that rehabilitation is an ongoing process, not a destination, ensures lasting success from surgery."
        }
      ],
      conclusion: "Successful post-surgical rehabilitation requires patience, dedication, and adherence to evidence-based protocols. Each phase builds upon the previous one, progressively restoring function and confidence. Working closely with qualified healthcare professionals ensures safe progression and optimal outcomes from orthopedic surgery."
    }
  },
  {
    id: 3,
    title: "Manual Therapy Techniques for Pain Relief",
    category: "Orthopedic",
    readTime: "10 min",
    author: "Dr. Lisa Rodriguez",
    date: "March 10, 2024",
    excerpt: "Exploring evidence-based manual therapy techniques that provide effective pain relief and restore movement in musculoskeletal conditions.",
    image: "/src/assets/articles/manual-therapy.jpg",
    content: {
      introduction: "Manual therapy encompasses hands-on techniques used by physical therapists to diagnose and treat soft tissue and joint problems. These techniques can effectively reduce pain, increase range of motion, reduce inflammation, and facilitate movement. Understanding different manual therapy approaches helps patients and practitioners select the most appropriate interventions.",
      sections: [
        {
          title: "Joint Mobilization",
          content: "Joint mobilization involves passive movement of joints within or at their limit of motion. Therapists apply graded forces ranging from small oscillatory movements to larger amplitude techniques. These interventions restore normal joint mechanics, reduce pain through neurophysiological mechanisms, and improve functional movement. Different grades of mobilization serve specific purposes, from pain management to restoring joint mobility. Joint mobilization is particularly effective for conditions like arthritis, post-surgical stiffness, and movement restrictions."
        },
        {
          title: "Soft Tissue Mobilization",
          content: "Soft tissue techniques target muscles, fascia, ligaments, and tendons to reduce tension and improve tissue quality. Methods include massage, myofascial release, trigger point therapy, and instrument-assisted soft tissue mobilization. These approaches increase blood flow, break down adhesions, reduce muscle guarding, and improve tissue extensibility. Soft tissue mobilization complements other interventions by preparing tissues for movement and exercise."
        },
        {
          title: "Muscle Energy Techniques",
          content: "Muscle energy techniques use active muscle contractions against resistance to restore normal motion and function. Patients isometrically contract specific muscles while the therapist provides resistance. These techniques are particularly effective for treating joint restrictions, muscle imbalances, and postural dysfunction. The neurophysiological effects include muscle relaxation through reciprocal inhibition and post-isometric relaxation, making them powerful tools for pain management and movement restoration."
        },
        {
          title: "Neural Mobilization",
          content: "Neural mobilization addresses nerve tissue restrictions and sensitivity through gentle mobilization of the nervous system. These techniques recognize that nerves must slide, glide, and adapt during movement. When neural mobility is compromised, symptoms like radiating pain, numbness, and tingling occur. Neural mobilization techniques restore normal nerve mechanics, reduce neural inflammation, and improve symptom distribution. This approach is essential for conditions involving nerve irritation or compression."
        },
        {
          title: "Integration with Exercise",
          content: "Manual therapy achieves best results when combined with therapeutic exercise. Hands-on techniques provide immediate symptom relief and create a window for effective exercise performance. Exercise then reinforces and maintains gains achieved through manual therapy. This combination addresses both immediate symptoms and underlying dysfunction. Patient education about self-mobilization techniques empowers individuals to manage symptoms independently between therapy sessions."
        }
      ],
      conclusion: "Manual therapy techniques offer powerful, evidence-based approaches to pain management and functional restoration. When applied skillfully by trained therapists and combined with appropriate exercise, these techniques can significantly improve patient outcomes. Understanding the principles and applications of manual therapy helps patients make informed decisions about their care."
    }
  },
  {
    id: 4,
    title: "Stroke Recovery: The First 90 Days",
    category: "Neurological",
    readTime: "16 min",
    author: "Dr. Robert Chen",
    date: "March 14, 2024",
    excerpt: "Critical rehabilitation strategies during the first 90 days after stroke to maximize neuroplasticity and functional recovery.",
    image: "/src/assets/articles/knee-rehabilitation.jpg",
    content: {
      introduction: "The first 90 days after a stroke represent a critical window for recovery. During this period, the brain exhibits heightened neuroplasticity, the ability to reorganize and form new neural connections. Intensive, appropriate rehabilitation during this timeframe can significantly impact long-term outcomes. Understanding the recovery process and implementing evidence-based strategies maximizes the potential for functional restoration.",
      sections: [
        {
          title: "Understanding Stroke and Its Effects",
          content: "Stroke occurs when blood flow to part of the brain is interrupted, causing cell death and loss of function. Effects vary depending on location and severity but commonly include weakness or paralysis on one side of the body, speech and language difficulties, visual problems, cognitive impairments, and emotional changes. The extent of initial deficits doesn't necessarily predict long-term outcomes, as intensive rehabilitation can promote significant recovery through neuroplasticity and compensation strategies."
        },
        {
          title: "Acute Phase: Days 1-7",
          content: "The acute phase begins immediately after medical stabilization. Early mobilization within 24-48 hours, when medically safe, improves outcomes and prevents complications. Initial interventions focus on positioning to prevent contractures and pressure sores, passive range of motion exercises, basic transfers with assistance, swallowing assessment and management, and cognitive and communication screening. Even minimal activities during this phase can stimulate neural recovery processes."
        },
        {
          title: "Subacute Phase: Weeks 2-12",
          content: "The subacute phase represents the period of most rapid recovery. Intensive therapy targeting specific impairments is crucial. Task-specific training for activities like walking, reaching, and dressing promotes functional recovery. Constraint-induced movement therapy may be appropriate for arm rehabilitation. Balance and coordination training prevents falls. Cognitive rehabilitation addresses attention, memory, and problem-solving deficits. Speech therapy works on communication and swallowing. High intensity and repetition are key during this critical period."
        },
        {
          title: "Maximizing Neuroplasticity",
          content: "Neuroplasticity allows the brain to reorganize and compensate for damage. Factors that enhance neuroplasticity include high repetition of meaningful tasks, challenging but achievable activities, immediate feedback about performance, environmental enrichment and variety, cardiovascular exercise, and adequate sleep. Rehabilitation should be intensive, with 3 or more hours of therapy daily when tolerated. The specificity principle means training should directly relate to desired functional outcomes."
        },
        {
          title: "Preventing Secondary Complications",
          content: "Secondary complications can impede recovery and must be prevented or managed promptly. Spasticity management through positioning, stretching, and sometimes medications prevents contractures. Fall prevention strategies protect against injury. Depression screening and treatment supports engagement in rehabilitation. Shoulder subluxation prevention protects the affected arm. Pressure ulcer prevention through frequent position changes maintains skin integrity. Education of patients and caregivers about these risks enables early recognition and intervention."
        },
        {
          title: "Family Education and Support",
          content: "Family members play a crucial role in stroke recovery. Education about the recovery process sets realistic expectations. Training in safe transfer and mobility techniques protects both patient and caregiver. Understanding communication strategies facilitates interaction. Learning about emotional and behavioral changes promotes patience and appropriate responses. Caregiver self-care prevents burnout. Family involvement in therapy sessions reinforces learning and promotes carryover of skills to home environment."
        }
      ],
      conclusion: "The first 90 days after stroke are critical for recovery. Intensive, appropriate rehabilitation during this period can dramatically improve outcomes by capitalizing on neuroplasticity. A multidisciplinary approach addressing physical, cognitive, communication, and emotional aspects provides comprehensive care. With proper support, dedication to rehabilitation, and prevention of complications, many stroke survivors achieve significant functional recovery."
    }
  },
  {
    id: 5,
    title: "ACL Reconstruction Recovery Guide",
    category: "Sports",
    readTime: "17 min",
    author: "Dr. Jennifer Smith",
    date: "March 13, 2024",
    excerpt: "Complete roadmap for ACL reconstruction recovery, from surgery through return to sport, with evidence-based protocols and milestones.",
    image: "/src/assets/articles/sports-massage.jpg",
    content: {
      introduction: "Anterior cruciate ligament (ACL) reconstruction is one of the most common orthopedic surgeries, particularly among athletes. Successful return to sport requires following a comprehensive rehabilitation program that progresses through specific phases. Understanding the recovery timeline, expected milestones, and potential complications ensures optimal outcomes and reduces re-injury risk.",
      sections: [
        {
          title: "Understanding ACL Injuries and Surgery",
          content: "The ACL is a crucial ligament providing stability to the knee, preventing excessive forward movement of the tibia and controlling rotation. ACL tears typically occur during sports involving sudden stops, changes in direction, or landing from jumps. Reconstruction surgery replaces the torn ligament with a graft, commonly from the patellar tendon, hamstring, or quadriceps tendon. Understanding the surgical procedure and graft source helps patients prepare for the specific challenges of their recovery."
        },
        {
          title: "Pre-operative Preparation",
          content: "Pre-operative rehabilitation, or prehab, significantly impacts post-surgical outcomes. Goals include reducing swelling and inflammation through ice, elevation, and gentle compression. Restoring range of motion, particularly full extension, prevents complications. Strengthening the quadriceps and hamstrings prepares muscles for post-surgical demands. Gait training ensures proper walking patterns. Psychological preparation and education about the recovery process sets realistic expectations. Patients entering surgery with less swelling, better motion, and stronger muscles recover faster."
        },
        {
          title: "Phase 1: Protection (Weeks 0-2)",
          content: "Immediate post-operative goals focus on protection and initial healing. Pain and swelling management through medications, ice, and elevation is paramount. Weight-bearing progresses according to surgeon protocol, typically starting with crutches. Early range of motion exercises prevent stiffness, with emphasis on achieving full extension immediately. Gentle quadriceps activation through quad sets and straight leg raises begins muscle re-education. Proper wound care prevents infection. This phase requires patience as the graft begins healing into the bone tunnels."
        },
        {
          title: "Phase 2: Motion (Weeks 2-6)",
          content: "Progressive restoration of full range of motion is the primary goal. Flexion exercises gradually increase knee bending, with goals of 90 degrees by week 4 and 120 degrees by week 6. Continued emphasis on maintaining full extension prevents flexion contractures. Strengthening progresses from isometric to active exercises. Closed-chain exercises like mini-squats and leg press begin. Stationary biking improves motion and cardiovascular fitness. Gait training transitions from crutches to normal walking. Swelling management remains important throughout this phase."
        },
        {
          title: "Phase 3: Strengthening (Weeks 6-12)",
          content: "Progressive strengthening prepares the knee for more demanding activities. Bilateral exercises progress to single-leg activities. Resistance training increases intensity and volume. Proprioceptive and balance training improves joint awareness. Functional exercises mimic daily activities. Cardiovascular conditioning through biking, swimming, and eventually jogging maintains fitness. Core and hip strengthening addresses kinetic chain function. By the end of this phase, patients should demonstrate good quadriceps control, minimal swelling, and confidence in the knee during daily activities."
        },
        {
          title: "Phase 4: Return to Sport (Months 3-9)",
          content: "Return to sport progression must be individualized and criteria-based, not time-based. Requirements include achieving at least 90% quadriceps strength compared to the uninvolved leg. Hop testing demonstrates power and control. Movement quality assessment ensures proper mechanics. Psychological readiness questionnaires assess confidence and fear of re-injury. Sport-specific training gradually increases in intensity and complexity. Full return to competition typically occurs between 9-12 months, though individual variability exists. Premature return significantly increases re-injury risk."
        }
      ],
      conclusion: "ACL reconstruction recovery is a marathon, not a sprint. Following a structured, progressive rehabilitation program under guidance of qualified professionals optimizes outcomes. Patience, dedication to exercises, and meeting objective criteria before advancement through phases reduces re-injury risk and ensures successful return to sport and activities."
    }
  }
  // Additional 25 articles would continue here following the same structure
  // For brevity, I'll add them in the next file write
];

export const getArticleById = (id: number): Article | undefined => {
  return allArticles.find(article => article.id === id);
};

export const getArticlesByCategory = (category: string): Article[] => {
  if (category === "All") return allArticles;
  return allArticles.filter(article => article.category === category);
};
