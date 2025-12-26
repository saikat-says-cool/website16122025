import { useNavigate } from 'react-router-dom';

const EmailSamples = () => {
    const navigate = useNavigate();

    const sequences = [
        {
            title: "The MSSP 'New Executive' Campaign",
            type: "New Hire Pursuit",
            target: "Mid-Market FinTech",
            trigger: "New CISO hired < 90 days ago",
            logic: "New CISOs need immediate visibility and 'quick wins' without burning out their internal team.",
            emails: [
                {
                    day: "Day 0",
                    subject: "24/7 coverage for PayStream",
                    body: "Hi David,\n\nSaw you recently took the CISO role at PayStream—congrats.\n\nUsually, the first 90 days involve a lot of noise reduction, especially regarding alert fatigue in the SOC.\n\nAre you currently handling monitoring entirely in-house, or do you leverage a partner to filter the Level 1 noise so your internal engineers can focus on architecture?\n\nBest, Alex Mercer CEO, SentinelFlow"
                },
                {
                    day: "Day 3",
                    subject: "Re: 24/7 coverage for PayStream",
                    body: "Hi David,\n\nBrief context on why I asked: We recently helped the team at FinTech Nexus reduce their internal alert volume by 70% within the first month of engagement.\n\nIt freed up their two senior engineers to focus strictly on their cloud migration rather than chasing false positives at 2 AM.\n\nIs that a resource gap you’re currently trying to solve?"
                },
                {
                    day: "Day 7",
                    subject: "Support for your team?",
                    body: "Hi David,\n\nI don't want to crowd your inbox while you're settling in.\n\nIf you are evaluating hybrid SOC options to extend your team's runway this quarter, let me know and I can share a 1-page breakdown of how we structure our hand-offs.\n\nIf you're fully staffed, no worries—I'll hold off.\n\nBest, Alex"
                }
            ]
        },
        {
            title: "The Pentest 'Feature Launch' Campaign",
            type: "Vulnerability-Triggered",
            target: "B2B SaaS (Healthcare)",
            trigger: "Major product update / Feature release",
            logic: "New code = new vulnerabilities. Developers often rush security to meet shipping deadlines.",
            emails: [
                {
                    day: "Day 0",
                    subject: "Testing the new Patient Portal",
                    body: "Hi Sarah,\n\nSaw the press release about the new Patient Portal launch at MediCore yesterday—the integration with Epic looks seamless.\n\nQuick question: With the push to ship this release Q3, did you manage to get a full manual logic test done, or was it mostly automated scanning?\n\nAsking because we specialize in logic-based testing for healthcare SaaS where scanners usually miss the API vulnerabilities.\n\nRegards, Marcus Thorne Founder, RedTeam Ops"
                },
                {
                    day: "Day 3",
                    subject: "Re: Testing the new Patient Portal",
                    body: "Hi Sarah,\n\nFollowing up—reason I asked is that we often see 'clean' automated scans miss privilege escalation bugs in new portals.\n\nWe caught a critical IDOR vulnerability for HealthLink's new dashboard last month just two days before their go-live.\n\nHappy to share the sanitized report so you can see the difference in depth?"
                },
                {
                    day: "Day 7",
                    subject: "API Logic Check",
                    body: "Hi Sarah,\n\nLast note from me.\n\nEven if you aren't looking for a vendor right now, I have a checklist of the 'Top 5 API Logic Flaws' we found in healthcare apps this year.\n\nMind if I send it over? might be useful for your engineering lead.\n\nBest, Marcus"
                }
            ]
        },
        {
            title: "The Compliance 'Series B' Campaign",
            type: "Growth-Blocker Resolution",
            target: "Enterprise AI Startup",
            trigger: "Recent Funding Round ($20M+)",
            logic: "Funding means moving up-market. Enterprise clients will block deals until SOC 2 / ISO 27001 is finished.",
            emails: [
                {
                    day: "Day 0",
                    subject: "SOC 2 readiness for the Series B push",
                    body: "Hi Elena,\n\nCongrats on the $30M raise for CogniScale.\n\nUsually, at this stage, the procurement teams at Fortune 500 prospects start blocking deals until SOC 2 Type II is finalized.\n\nAre you handling the audit prep internally, or are you looking to fast-track the evidence collection to unblock those enterprise pipelines?\n\nBest, Jessica Vane Partner, CompliFast"
                },
                {
                    day: "Day 3",
                    subject: "Re: SOC 2 readiness for the Series B push",
                    body: "Hi Elena,\n\nThe reason I reached out: We specialize in getting post-Series B startups audit-ready in weeks, not months.\n\nWe helped DataFlow close a stalled $200k contract by expediting their Type I report in under 21 days.\n\nIs compliance currently a bottleneck for your sales team?"
                },
                {
                    day: "Day 7",
                    subject: "Audit timeline?",
                    body: "Hi Elena,\n\nQuick check—are you the right person to speak with regarding audit timelines and security governance, or does that sit with the CTO?\n\nIf it's you, are you aiming to have the report in hand by Q4?\n\nThanks, Jessica"
                }
            ]
        },
        {
            title: "The Manufacturing 'Supply Chain' Campaign",
            type: "Operational Risk Mitigation",
            target: "Logistics/Manufacturing Firm",
            trigger: "Industry-specific ransomware news",
            logic: "Manufacturing has low downtime tolerance. Fear of operational stoppage is the driver.",
            emails: [
                {
                    day: "Day 0",
                    subject: "ICS visibility for Apex Logistics",
                    body: "Hi Michael,\n\nI’m writing to you specifically because of Apex’s footprint in the Midwest supply chain.\n\nWith the recent spike in ransomware targeting OT/ICS environments in logistics, are you comfortable with your current ability to isolate an infected plant from the rest of the network?\n\nWe’re seeing many directors struggle with network segmentation on legacy hardware.\n\nBest, Sam Rostova Director, SecureChain"
                },
                {
                    day: "Day 3",
                    subject: "Re: ICS visibility for Apex Logistics",
                    body: "Hi Michael,\n\nA quick note on this—we recently deployed a segmentation strategy for a 500-employee plastics manufacturer that stopped a ransomware spread at the switch level.\n\nIt saved them roughly $2M in potential downtime.\n\nOpen to a 5-minute chat on how we handle legacy OT security without disrupting production?"
                },
                {
                    day: "Day 7",
                    subject: "Closing the loop",
                    body: "Hi Michael,\n\nI assume operational security is under control for now, so I’ll stop reaching out.\n\nIf you ever need a second set of eyes on your disaster recovery or segmentation plan, feel free to ping me.\n\nBest, Sam"
                }
            ]
        },
        {
            title: "The 'vCISO' Strategy Campaign",
            type: "Headcount Growth Gap",
            target: "Legal / Professional Services (50-100 employees)",
            trigger: "Growth in headcount (LinkedIn insights)",
            logic: "Too big for an MSP, too small for a full-time CISO ($200k+). They need strategy, not just tools.",
            emails: [
                {
                    day: "Day 0",
                    subject: "Security strategy for Sterling Law",
                    body: "Hi Robert,\n\nNoticed the team at Sterling has grown past 60 employees.\n\nAt this size, firms often outgrow their MSP's ability to handle strategic governance (client questionnaires, policy management, insider threat), but aren't ready to hire a full-time CISO.\n\nWho is currently owning the strategic side of security assurance for the firm?\n\nBest, Daniel K. Principal, CISO-On-Demand"
                },
                {
                    day: "Day 3",
                    subject: "Re: Security strategy for Sterling Law",
                    body: "Hi Robert,\n\nFollowing up—we usually see Managing Partners getting bogged down filling out 100-page security questionnaires for new big clients.\n\nWe take that entirely off your plate.\n\nWe act as the 'Security Officer' on paper, handle the client audits, and let you focus on billable hours. Is that worth a conversation?"
                },
                {
                    day: "Day 7",
                    subject: "Client questionnaire template",
                    body: "Hi Robert,\n\nSince I haven't heard back, I assume you have a handle on the governance side.\n\nI'm attaching a 'Standard Response' template we use for legal firms to speed up client security audits. Feel free to use it to save some time.\n\nBest, Daniel"
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen pt-32 px-6 md:px-12 max-w-6xl mx-auto animate-fade-in pb-20">
            <h2 className="text-4xl md:text-5xl mb-4 font-hand">Sequence Engineering</h2>
            <p className="font-tech text-gray-600 mb-16 max-w-3xl">
                These are not templates. They are engineered outputs. We monitor business events (triggers) and deploy sequences that skip the "sales fluff" and go straight to the technical or operational bottleneck.
            </p>

            <div className="space-y-24">
                {sequences.map((seq, index) => (
                    <div key={index} className="flex flex-col gap-8">
                        {/* Header Info */}
                        <div className="border-b border-black pb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                            <div>
                                <div className="font-tech text-xs uppercase tracking-widest text-[#2B4C7E] mb-2">
                                    Campaign Type: {seq.type}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-hand">{seq.title}</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-tech text-xs">
                                <div><span className="text-gray-400 block uppercase tracking-tighter">Target</span>{seq.target}</div>
                                <div><span className="text-gray-400 block uppercase tracking-tighter">Trigger</span>{seq.trigger}</div>
                            </div>
                        </div>

                        {/* Logic Note */}
                        <div className="bg-gray-100 p-6 border-l-4 border-black font-hand italic text-xl text-gray-700 max-w-2xl">
                            "{seq.logic}"
                        </div>

                        {/* Email Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {seq.emails.map((email, eIdx) => (
                                <div key={eIdx} className="sketch-box bg-white p-6 flex flex-col h-full">
                                    <div className="font-tech text-[10px] uppercase tracking-widest text-gray-400 mb-4 pb-2 border-b border-gray-100">
                                        Sequence Step: {email.day}
                                    </div>
                                    <div className="mb-4">
                                        <div className="font-tech text-[10px] uppercase text-gray-400">Subject:</div>
                                        <div className="font-tech text-sm font-bold truncate">{email.subject}</div>
                                    </div>
                                    <div className="font-tech text-xs text-gray-600 whitespace-pre-line leading-relaxed flex-grow italic">
                                        {email.body}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24 text-center border-t border-dashed border-gray-400 pt-16">
                <h4 className="text-3xl font-hand mb-6">Need this infrastructure for your firm?</h4>
                <button onClick={() => navigate('/booking')} className="btn-primary">
                    Initiate Discussion
                </button>
            </div>
        </div>
    );
};

export default EmailSamples;
