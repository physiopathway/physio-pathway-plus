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
    category: "orthopedic",
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
    category: "rehabilitation",
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
    category: "manual-therapy",
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
    category: "neurological",
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
    category: "sports",
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
  },
  {
    id: 6,
    title: "Prenatal Physiotherapy: Preparing for Motherhood",
    category: "geriatric",
    readTime: "14 min",
    author: "Dr. Emma Wilson",
    date: "March 11, 2024",
    excerpt: "Essential physiotherapy techniques for pregnant women to maintain health, reduce pain, and prepare for childbirth.",
    image: "/src/assets/articles/prenatal-care.jpg",
    content: {
      introduction: "Pregnancy brings significant physical changes that can lead to discomfort and pain. Prenatal physiotherapy provides safe, effective interventions to manage these challenges while preparing the body for labor and delivery. Understanding how physiotherapy can support a healthy pregnancy empowers expectant mothers to maintain activity levels and reduce complications.",
      sections: [
        {
          title: "Common Pregnancy-Related Conditions",
          content: "Pelvic girdle pain affects up to 50% of pregnant women, causing discomfort in the pubic symphysis and sacroiliac joints. Lower back pain results from postural changes and hormonal effects on ligaments. Diastasis recti, or abdominal separation, requires specific exercises for management. Carpal tunnel syndrome from fluid retention causes hand numbness. Leg cramps and swelling are common, especially in later trimesters. Each condition benefits from specific physiotherapy interventions tailored to pregnancy."
        },
        {
          title: "Safe Exercise During Pregnancy",
          content: "Regular exercise during pregnancy improves outcomes for both mother and baby. Cardiovascular activities like walking and swimming maintain fitness safely. Pelvic floor exercises prevent incontinence and prepare for delivery. Core stability work supports the growing belly and prevents back pain. Stretching maintains flexibility and reduces muscle tension. Modifications ensure safety as pregnancy progresses. Exercise intensity should allow conversation throughout, and warning signs require immediate cessation and medical evaluation."
        },
        {
          title: "Pelvic Floor Preparation",
          content: "The pelvic floor supports pelvic organs and plays a crucial role during delivery. Prenatal pelvic floor training improves awareness and control. Kegel exercises strengthen these muscles when performed correctly. Relaxation techniques prepare for the pushing phase of labor. Perineal massage in late pregnancy may reduce tearing risk. Understanding pelvic floor function empowers women during pregnancy and postpartum recovery."
        },
        {
          title: "Labor Preparation Techniques",
          content: "Physical preparation for labor reduces complications and improves the birth experience. Optimal fetal positioning exercises encourage babies into favorable positions. Breathing techniques manage pain and anxiety during contractions. Labor positions and movements facilitate progression and reduce pain. Partner-assisted techniques involve support persons effectively. Practicing these skills during pregnancy builds confidence and competence for the actual event."
        },
        {
          title: "Postpartum Recovery Planning",
          content: "Planning for postpartum recovery begins during pregnancy. Understanding normal recovery timelines sets realistic expectations. Gentle exercise progression safely returns to pre-pregnancy fitness. Pelvic floor rehabilitation addresses any dysfunction. Core restoration exercises specifically target diastasis recti. Ergonomic considerations for infant care prevent repetitive strain. Early attention to these aspects promotes complete recovery and prevents long-term problems."
        }
      ],
      conclusion: "Prenatal physiotherapy supports women through pregnancy, preparing them physically and mentally for labor and recovery. With appropriate guidance, pregnant women can remain active, manage discomfort, and optimize outcomes for themselves and their babies."
    }
  },
  {
    id: 7,
    title: "Pediatric Physical Therapy: Early Intervention",
    category: "pediatric",
    readTime: "13 min",
    author: "Dr. David Martinez",
    date: "March 9, 2024",
    excerpt: "Understanding developmental milestones and how early intervention can help children reach their full potential through targeted therapy.",
    image: "/src/assets/articles/pediatric-therapy.jpg",
    content: {
      introduction: "Early intervention in pediatric physiotherapy can dramatically impact a child's development and long-term outcomes. Identifying developmental delays early and implementing appropriate interventions maximizes children's potential. Understanding normal development helps parents and professionals recognize when additional support is needed.",
      sections: [
        {
          title: "Developmental Milestones",
          content: "Normal motor development follows predictable patterns, though with individual variation. By 3 months, infants should lift their head during tummy time. Six-month milestones include rolling and sitting with support. At 9 months, crawling typically emerges. Walking independently usually occurs between 12-15 months. Two-year-olds can run and climb stairs. Significant delays beyond normal ranges warrant evaluation by a pediatric physiotherapist."
        },
        {
          title: "Common Pediatric Conditions",
          content: "Torticollis causes tilting and rotation limitations of the infant's head. Plagiocephaly, or flat head syndrome, often accompanies torticollis. Hypotonia, or low muscle tone, affects postural control and movement quality. Hypertonia causes increased muscle stiffness and resistance to movement. Cerebral palsy encompasses various movement disorders from brain injury. Genetic conditions like Down syndrome present specific motor challenges. Each condition requires specialized assessment and treatment approaches."
        },
        {
          title: "Assessment and Evaluation",
          content: "Comprehensive evaluation includes detailed developmental history from parents. Observation of spontaneous movement reveals quality and patterns. Standardized assessments quantify delays and track progress. Muscle tone, strength, and flexibility testing identifies impairments. Functional assessments determine how challenges affect daily activities. Parent-child interaction observation provides context for intervention planning. Ongoing reassessment monitors progress and guides treatment modifications."
        },
        {
          title: "Treatment Approaches",
          content: "Family-centered care ensures interventions fit into daily routines and family priorities. Play-based therapy keeps children engaged and motivated. Neurodevelopmental treatment facilitates normal movement patterns. Strengthening exercises build foundational motor skills. Environmental modifications support optimal development. Assistive devices and adaptive equipment enable participation when needed. Education empowers families to support development consistently."
        },
        {
          title: "Family Education and Support",
          content: "Parents are essential partners in pediatric therapy. Education about normal and delayed development sets realistic expectations. Home exercise programs ensure consistent practice between sessions. Activity suggestions integrate therapy into daily routines. Connecting families with community resources and support groups reduces isolation. Celebrating progress, however small, maintains motivation. Supporting the whole family promotes the child's best outcomes."
        }
      ],
      conclusion: "Early intervention in pediatric physiotherapy capitalizes on neuroplasticity and critical developmental periods. With family partnership and evidence-based interventions, children with delays or disabilities can achieve their maximum potential."
    }
  },
  {
    id: 8,
    title: "Aquatic Therapy: Healing in Water",
    category: "innovative",
    readTime: "11 min",
    author: "Dr. Amanda Lee",
    date: "March 8, 2024",
    excerpt: "Discover how hydrotherapy provides a unique environment for rehabilitation, reducing pain while improving strength and mobility.",
    image: "/src/assets/articles/hydrotherapy.jpg",
    content: {
      introduction: "Aquatic therapy utilizes water's unique properties to facilitate rehabilitation that may be difficult or impossible on land. The buoyancy, resistance, and warmth of water create an ideal environment for pain-free movement and progressive strengthening. Understanding these principles helps patients and therapists maximize benefits from aquatic interventions.",
      sections: [
        {
          title: "Physical Properties of Water",
          content: "Buoyancy reduces body weight by up to 90% when immersed to the neck, allowing movement with less joint stress. Hydrostatic pressure reduces swelling and improves circulation. Water resistance provides adjustable strengthening loads based on movement speed. Viscosity challenges balance and proprioception. Warmth relaxes muscles and reduces pain. These properties combine to create a therapeutic environment impossible to replicate on land."
        },
        {
          title: "Conditions Benefiting from Aquatic Therapy",
          content: "Arthritis patients experience pain-free range of motion and strengthening. Post-surgical patients begin movement earlier in water. Neurological conditions benefit from reduced gravity and sensory feedback. Sports injuries progress through rehabilitation phases safely. Chronic pain conditions respond to warm water immersion. Balance disorders improve with water's supportive environment. Almost any condition can benefit from aquatic therapy when appropriately prescribed."
        },
        {
          title: "Aquatic Exercise Techniques",
          content: "Walking and jogging in water build cardiovascular fitness with minimal impact. Resistance exercises using water's natural resistance or equipment strengthen muscles. Flexibility exercises utilize buoyancy to achieve greater range of motion. Balance activities challenge stability in a safe environment. Functional training mimics daily activities with less stress. Sport-specific movements prepare athletes for return to competition. Progression principles apply in water as they do on land."
        },
        {
          title: "Safety Considerations",
          content: "Medical clearance ensures water exercise is appropriate for each patient. Pool temperature typically ranges from 82-92°F depending on condition and activity. Supervision prevents accidents, especially for those with balance or neurological issues. Infection control through proper pool maintenance protects vulnerable individuals. Appropriate depth selection matches patient ability and therapeutic goals. Exit strategies ensure patients can safely leave the pool when fatigued."
        },
        {
          title: "Transitioning to Land-Based Exercise",
          content: "Aquatic therapy often serves as a bridge to land-based function. Progressive exercises in shallower water increase weight-bearing demands. Parallel land-based exercises ensure skill transfer. Gradual transition prevents setbacks from too-rapid progression. Some patients maintain aquatic exercise long-term for ongoing management. The goal is always maximizing function in the patient's actual living environment."
        }
      ],
      conclusion: "Aquatic therapy provides unique benefits that accelerate rehabilitation and enable exercise that may not be possible on land. When integrated appropriately into comprehensive treatment plans, water-based interventions significantly improve patient outcomes."
    }
  },
  {
    id: 9,
    title: "The Science of Workplace Ergonomics",
    category: "workplace",
    readTime: "9 min",
    author: "Dr. Kevin Brown",
    date: "March 7, 2024",
    excerpt: "Evidence-based strategies for optimizing your workspace to prevent musculoskeletal disorders and improve productivity.",
    image: "/src/assets/articles/ergonomic-assessment.jpg",
    content: {
      introduction: "Workplace musculoskeletal disorders cost billions annually in lost productivity and healthcare expenses. Proper ergonomics prevents these conditions while improving comfort and efficiency. Understanding ergonomic principles enables workers and employers to create healthier work environments.",
      sections: [
        {
          title: "Common Workplace Injuries",
          content: "Carpal tunnel syndrome from repetitive hand movements affects keyboard and mouse users. Lower back pain results from prolonged sitting or awkward postures. Neck strain comes from poor monitor positioning and sustained forward head posture. Shoulder problems develop from overhead reaching or unsupported arm positions. Eye strain and headaches result from improper lighting and screen distance. Each condition is preventable with proper ergonomic setup and work habits."
        },
        {
          title: "Optimal Workstation Setup",
          content: "Monitor height should place the top of the screen at or slightly below eye level. Viewing distance of 20-28 inches reduces eye strain. Keyboard and mouse positioning keeps wrists neutral and elbows at 90 degrees. Chair height allows feet flat on floor with thighs parallel to ground. Lumbar support maintains natural spine curves. Desk height enables relaxed shoulders with forearms parallel to floor. Lighting should be adjustable and minimize glare."
        },
        {
          title: "Movement and Break Strategies",
          content: "The 20-20-20 rule for eye strain: every 20 minutes, look at something 20 feet away for 20 seconds. Micro-breaks of 30 seconds every 10 minutes reduce muscle fatigue. Longer breaks of 5-10 minutes every hour allow full body movement. Standing intervals break up prolonged sitting. Movement snacks like shoulder rolls and neck stretches maintain mobility. Varying tasks provides natural breaks from repetitive activities. Regular movement is more important than perfect posture."
        },
        {
          title: "Body Mechanics and Posture",
          content: "Dynamic sitting with frequent position changes beats static 'perfect' posture. Core engagement supports the spine during sustained positions. Neutral spine positioning distributes loads evenly. Avoiding end-range positions prevents tissue stress. Proper lifting techniques protect the back during manual handling. Alternating between sitting and standing optimizes comfort and health. Movement and variety are key principles."
        },
        {
          title: "Implementing Ergonomic Programs",
          content: "Workstation assessments identify risk factors for each employee. Education about ergonomic principles enables self-management. Providing adjustable equipment accommodates individual needs. Creating a culture that supports movement breaks increases adherence. Regular reassessment ensures continued effectiveness. Tracking injury rates and productivity demonstrates program value. Successful programs require management support and employee engagement."
        }
      ],
      conclusion: "Workplace ergonomics prevents injuries, reduces pain, and improves productivity. Implementing evidence-based principles creates healthier, more efficient work environments benefiting both employees and employers."
    }
  },
  {
    id: 10,
    title: "Shoulder Rehabilitation After Rotator Cuff Repair",
    category: "orthopedic",
    readTime: "16 min",
    author: "Dr. Rachel Stevens",
    date: "March 6, 2024",
    excerpt: "Comprehensive guide to recovering from rotator cuff surgery with phase-specific protocols and return to activity criteria.",
    image: "/src/assets/articles/shoulder-rehab.jpg",
    content: {
      introduction: "Rotator cuff tears are among the most common shoulder injuries requiring surgery. Successful outcomes depend on appropriate surgical technique and, crucially, comprehensive rehabilitation. Understanding the healing process and following evidence-based protocols ensures optimal function and reduces re-tear risk.",
      sections: [
        {
          title: "Understanding Rotator Cuff Anatomy and Injury",
          content: "The rotator cuff consists of four muscles that stabilize and move the shoulder: supraspinatus, infraspinatus, teres minor, and subscapularis. These muscles work together to center the humeral head in the socket during movement. Tears occur from acute trauma, chronic degeneration, or a combination of both. Tear size, muscle quality, and patient factors influence healing potential and surgical approach. Repair techniques range from simple suture anchors to complex reconstructions."
        },
        {
          title: "Phase 1: Protection (Weeks 0-6)",
          content: "Immediate post-operative goals focus on protecting the repair while preventing stiffness. Immobilization in a sling maintains proper position and protects healing tissues. Passive range of motion by a therapist prevents adhesions without stressing the repair. Pendulum exercises provide gentle movement. Hand, wrist, and elbow exercises prevent stiffness in adjacent joints. Pain management through medications, ice, and positioning enables participation in therapy. Sleeping positions that protect the repair promote healing and comfort."
        },
        {
          title: "Phase 2: Active Motion (Weeks 6-12)",
          content: "Tissue healing at 6 weeks allows progression to active movement. Active-assisted range of motion exercises transition from passive to active control. Isometric strengthening begins with minimal load. Scapular stabilization exercises restore shoulder blade function. Gradual weaning from the sling occurs per surgeon protocol. Goals include achieving functional range of motion and initiating strengthening. Progression depends on individual healing, with larger tears advancing more slowly."
        },
        {
          title: "Phase 3: Strengthening (Weeks 12-24)",
          content: "Progressive resistance training rebuilds rotator cuff and surrounding muscle strength. Exercises progress from light resistance bands to weights. Emphasis on rotator cuff specific exercises ensures repair integrity. Scapular strengthening provides stable platform for arm movement. Functional exercises integrate shoulder use into daily activities. Range of motion should be full or nearly full. This phase requires patience as rotator cuff healing continues for up to one year."
        },
        {
          title: "Phase 4: Return to Activity (Months 6-12)",
          content: "Return to full activity requires meeting specific criteria, not just time milestones. Strength testing should show at least 80% of the opposite shoulder. Pain-free full range of motion enables functional activities. Quality movement patterns without compensation demonstrate neuromuscular control. Activity-specific training prepares for return to work or sport. Psychological readiness addresses fear of re-injury. Gradual return with monitoring prevents setbacks from excessive loads."
        }
      ],
      conclusion: "Rotator cuff repair rehabilitation is a lengthy process requiring patience and adherence to progressive protocols. Working closely with qualified professionals and respecting tissue healing timelines optimizes outcomes and reduces re-tear risk."
    }
  }
];

export const getArticleById = (id: number): Article | undefined => {
  return allArticles.find(article => article.id === id);
};

export const getArticlesByCategory = (category: string): Article[] => {
  if (category === "All") return allArticles;
  return allArticles.filter(article => article.category === category);
};
