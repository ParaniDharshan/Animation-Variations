// Constants exported from CRKLWebsite (1).jsx
export const PRIMARY = "#1d89c8";
export const SECONDARY = "#3eb8af";
export const BOOKING_URL = "#";

export const NAV_LINKS = ["Home", "About", "Services", "Gallery", "Why CRKL", "Contact"];

export const SERVICES = [
	{
		icon: "📊",
		title: "Accounting & Finance",
		summary: "End-to-end financial operations support — from daily transaction recording to month-end close and CPA collaboration. Built for U.S. SMEs using QuickBooks Online.",
		items: [
			{
				title: "Chart of Accounts setup & bookkeeping",
				description: "We design and maintain a clear Chart of Accounts tailored to your business, and record transactions accurately for reliable financial statements.",
			},
			{
				title: "Accounts Payable — supplier & vendor management",
				description: "Manage vendor invoices, timely payments, and supplier relationships to optimize cash flow and avoid late fees.",
			},
			{
				title: "Accounts Receivable — invoicing & customer accounts",
				description: "Handle invoicing, collections, and customer account reconciliation to accelerate receivables and reduce days-sales-outstanding.",
			},
			{
				title: "Account reconciliation & financial reporting",
				description: "Perform regular reconciliations and prepare meaningful financial reports to support decision-making and tax preparation.",
			},
			{
				title: "Payroll reconciliation & month-end close",
				description: "Reconcile payroll entries, ensure compliance, and complete month-end close processes accurately.",
			},
			{
				title: "CPA coordination",
				description: "Coordinate with your CPA for tax filings, audit support, and year-end close to ensure a smooth handoff.",
			},
		],
		tag: "QuickBooks Online",
		color: PRIMARY,
	},
	{
		icon: "🧾",
		title: "Tax Services",
		summary: "Comprehensive U.S. tax support handled by an IRS Enrolled Agent — qualified to prepare, research, and represent your business before the IRS.",
		items: [
			{
				title: "Preparation of Tax returns",
				description: "Prepare federal and state business tax returns accurately, minimizing liabilities while ensuring compliance.",
			},
			{
				title: "Financial workbook preparation",
				description: "Assemble detailed financial workpapers and supporting schedules for tax filing and CPA review.",
			},
			{
				title: "Tax workpaper preparation",
				description: "Document tax adjustments and supporting analyses to substantiate positions taken on returns.",
			},
			{
				title: "Research & Analysis",
				description: "Provide tax research and analysis to identify planning opportunities and resolve complex issues.",
			},
			{
				title: "CPA coordination",
				description: "Work with CPAs to share records, clarify questions, and implement recommended tax strategies.",
			},
			{
				title: "Client communication",
				description: "Maintain transparent client communication on deadlines, filing status, and required documentation.",
			},
		],
		tag: "IRS Enrolled Agent",
		color: SECONDARY,
	},
	{
		icon: "💻",
		title: "IT Services",
		summary: "Technology support for SMEs who need reliable systems without maintaining a full in-house IT team. Written for business owners — no technical background required.",
		items: [
			{
				title: "Custom web applications (MERN stack)",
				description: "Design and build scalable full-stack web applications using MongoDB, Express, React, and Node tailored to your workflows.",
			},
			{
				title: "Workflow automation & process improvement",
				description: "Automate repetitive tasks and improve processes to reduce manual effort and errors.",
			},
			{
				title: "System operations & maintenance",
				description: "Monitor and maintain systems, handle updates, backups, and incident response for reliable uptime.",
			},
			{
				title: "Data management & security support",
				description: "Implement data organization, backups, and security measures to protect business information.",
			},
			{
				title: "Automation to reduce manual errors",
				description: "Deploy automations that minimize manual data entry and improve operational accuracy.",
			},
		],
		tag: "MERN Stack",
		color: PRIMARY,
	},
];

// Office page hero image part
export const HERO_BG = {
	office: new URL("./assets/Office/Conference Hall.jpg", import.meta.url).href,
};

export const TIMELINE = [
	{ year: "Madurai Roots", text: "Born and raised in Madurai, Tamil Nadu. Worked in his father's small hardware distribution business — learning cash flow, customer trust, and the weight of building something by hand." },
	{ year: "50+ Years Ago", text: "Moved to the U.S. to attend Florida State University, earning his Doctorate in Chemistry." },
	{ year: "MBA & Law", text: "Earned both MBA and Law degrees from Saint Louis University with a concentration in international business." },
	{ year: "Mallinckrodt", text: "Built deep fluency in American business culture — results-driven operations, cost discipline, zero tolerance for quality lapses — inside one of St. Louis's most demanding multinational corporations." },
	{ year: "30+ Years", text: "Has lived in Chesterfield for over three decades. Raised three daughters here with his wife. He is a member of this community, not a newcomer." },
	{ year: "2012", text: "Joined the Chesterfield Regional Chamber of Commerce. Led the Business Education Committee for approximately three years." },
	{ year: "2014–2019", text: "Served on the Chamber Board of Directors for five years, culminating as Chairman of the Board in 2019." },
	{ year: "2017–Present", text: "Serves on the Finance & Administration Citizens Advisory Committee for the City of Chesterfield." },
];

export const CONCERNS = [
	{
		q: "Who am I actually working with — a U.S. company or an Indian firm?",
		a: "You work with CRKL Inc., a U.S.-registered corporation in Chesterfield, Missouri. Your contract is with a U.S. entity. Your primary contact is U.S.-based. KOPL in India delivers the work — but your relationship, your accountability, and your legal standing are all with CRKL Inc.",
	},
	{
		q: "What happens if something goes wrong or doesn't meet my expectations?",
		a: "CRKL Inc. handles all contractual, legal, or service issues directly with you in Chesterfield. You don't navigate time zones or foreign legal systems. Peri's commitment: \"If we fall short of your expectations, we will make it right.\"",
	},
	{
		q: "Is my financial and business data safe?",
		a: "All KOPL employees sign strict confidentiality and non-disclosure agreements before handling any client data. Work is conducted in a secure, dedicated office space. No data is accessed from personal devices or unsecured networks. Access is role-limited, monitored, and can be revoked at any time.",
	},
	{
		q: "Are your accounting professionals qualified for U.S. standards?",
		a: "Yes. Our accounting team holds postgraduate commerce degrees and is trained in U.S. workflows using QuickBooks Online. Saravana Kumar is a QuickBooks ProAdvisor (Certified 2024) and IRS Enrolled Agent (2026) — licensed to represent clients before the IRS.",
	},
	{
		q: "Will there be a language or communication barrier?",
		a: "Our team is fluent in English and experienced in professional U.S. business communication. Our General Manager, Beulah Radhakrishnan, is fluent in English, Hindi, Tamil, and Telugu. All deliverables are produced in clear, professional English.",
	},
	{
		q: "What about time zone differences?",
		a: "India Standard Time (IST) is 10.5 hours ahead of U.S. Central Time. In practice, your team in India is working while you sleep — so deliverables are often ready when your business day begins. Overlap hours and scheduled check-ins are set from day one.",
	},
	{
		q: "How much does this cost compared to hiring locally?",
		a: "Outsourcing through KOPL allows U.S. SMEs to access qualified, professional talent at a fraction of the cost of local hiring — without the overhead of benefits, payroll taxes, office space, or onboarding time. Pricing is discussed during your discovery call, scoped to your specific needs.",
	},
	{
		q: "How long does it take to get started?",
		a: "After the discovery call and scope agreement, onboarding typically takes 1–2 weeks — covering resource allocation, system setup, document protocols, and communication channels. We do not rush onboarding. A clean start prevents problems later.",
	},
	{
		q: "Do I need to manage the team on a daily basis?",
		a: "No. That is our job. You set the expectations, we manage the execution. CRKL Inc. monitors performance, quality, and timelines — so your time is spent on your business, not managing an offshore team.",
	},
	{
		q: "Can I stop or pause the engagement if my needs change?",
		a: "Yes. Engagement terms are discussed clearly upfront, including exit and pause conditions. We believe in long-term relationships built on results — not lock-in contracts that trap clients.",
	},
];

export const ROADMAP = [
	{ step: "01", title: "Agreement", sub: "You Sign with CRKL Inc. — and That's Your Only Contract.", body: "CRKL Inc. enters into a formal business agreement with you, defining scope, expectations, and standards. You also define the professional requirements — qualifications, experience, skills — for the individual who will carry out your work at KOPL's Madurai office." },
	{ step: "02", title: "Sourcing", sub: "We Find the Right People. You Set the Standard.", body: "Using your defined requirements, KOPL's team in Madurai identifies and precisely screens qualified candidates from the local professional talent pool, leveraging established relationships with experienced staffing agencies. Only candidates who meet your criteria are presented." },
	{ step: "03", title: "Interview", sub: "You See Who You're Hiring. You Make the Decision.", body: "We schedule a virtual video interview at a time that suits you, presenting the top one to three candidates. You assess them directly. You ask the questions. And you make the final selection. There is no guessing, no blind placement — the hiring decision is yours." },
	{ step: "04", title: "Onboarding", sub: "We Handle Everything That Follows.", body: "Once you have approved your chosen candidate, KOPL manages the complete hiring and onboarding process — compensation, benefits, and all human resources administration — at zero additional burden to you. Your new team member is ready to work." },
	{ step: "05", title: "Workspace", sub: "A Secure, Dedicated Environment from Day One.", body: "Your professional works from KOPL's dedicated, secure office in Madurai — fully equipped with the IT infrastructure, communication tools, and data security protocols required to handle your business work safely and efficiently." },
	{ step: "06", title: "Management", sub: "You Monitor the Output. We Manage the People.", body: "CRKL Inc. and KOPL jointly manage employee performance, attendance, HR matters, data security, and quality standards on an ongoing basis. Your role is to review the work delivered. Our role is to ensure the team delivers it to your expectations, every day." },
	{ step: "07", title: "Quality", sub: "If We Fall Short, We Make It Right.", body: "We ask one thing: regularly review the quality and output of the work so we can ensure your expectations are being met. If there is a gap between what was expected and what was delivered, CRKL Inc. will address it. Our promise is not just quality — it is accountability for quality." },
];

export const TESTIMONIALS = [
	{
		name: "Dennis Fry",
		role: "Business Owner, Chesterfield, MO",
		avatar: "DF",
		quote: "Peri and I sat down and discussed my business needs and the types of skillsets I needed to meet those needs. Then Peri, through his company in India, found me a pool of qualified candidates with 5-year accounting and finance degrees. I interviewed them virtually, selected the people I wanted to hire — and Peri handled the rest.",
	},
];

export const CONTACT_INFO = {
	phone: "+1 (314) 000-0000",
	email: "peri@crklinc.com",
	location: "Chesterfield, Missouri, USA",
};

