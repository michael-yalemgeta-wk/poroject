import styles from './PortfolioPage.module.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
	{
		id: 'brandx',
		title: 'BrandX Website Redesign',
		category: 'Web',
		thumb: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
		tagline: 'Brand launch for AI startup',
		client: 'BrandX',
		overview: 'A modern, responsive site for a SaaS startup, focused on conversion and engagement.',
		tools: ['Figma', 'React', 'Vercel'],
		results: '+200% traffic, 3x conversions',
		caseStudy: '#',
	},
	{
		id: 'cafeluna',
		title: 'Cafe Luna Identity',
		category: 'Logos',
		thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
		tagline: 'Visual identity for a boutique coffee shop',
		client: 'Cafe Luna',
		overview: 'Logo, menus, and signage for a boutique coffee shop.',
		tools: ['Illustrator', 'Photoshop'],
		results: 'Brand recall & local buzz',
		caseStudy: '#',
	},
	{
		id: 'techconf',
		title: 'TechConf Motion Graphics',
		category: 'Video',
		thumb: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
		tagline: 'Animated intro and highlight reels',
		client: 'TechConf',
		overview: 'Animated intro and highlight reels for a major tech event.',
		tools: ['After Effects', 'Premiere Pro'],
		results: '↑ Engagement on social media',
		caseStudy: '#',
	},
	{
		id: 'greenmarket',
		title: 'GreenMarket Ad Campaign',
		category: 'Marketing',
		thumb: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
		tagline: 'Digital ads and landing pages',
		client: 'GreenMarket',
		overview: 'Digital ads and landing pages for a local grocer.',
		tools: ['Figma', 'Meta Ads'],
		results: '+40% online sales',
		caseStudy: '#',
	},
];

const categories = ['All', 'Web', 'Logos', 'Flyers', 'Video', 'Marketing'];

export default function PortfolioPage() {
	const [activeCat, setActiveCat] = useState('All');
	const [modal, setModal] = useState(null as null | typeof projects[0]);
	const filtered = activeCat === 'All' ? projects : projects.filter(p => p.category === activeCat);

	return (
		<div className={styles.pageBg}>
			<header className={styles.header}>
				<h1 className={styles.title}>Creative Work that Speaks for Itself</h1>
				<p className={styles.subtitle}>Real solutions across branding, design, development & campaigns.</p>
				<div className={styles.tabs}>
					{categories.map(cat => (
						<button
							key={cat}
							className={activeCat === cat ? styles.activeTab : styles.tab}
							onClick={() => setActiveCat(cat)}
						>
							{cat}
						</button>
					))}
				</div>
			</header>
			<main className={styles.grid}>
				<AnimatePresence>
					{filtered.map((proj, idx) => (
						<motion.div
							className={styles.card}
							key={proj.id}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 40 }}
							transition={{ duration: 0.6, delay: idx * 0.07 }}
							whileHover={{ scale: 1.04 }}
							onClick={() => setModal(proj)}
						>
							<div className={styles.thumb} style={{ backgroundImage: `url('${proj.thumb}')` }}>
								<div className={styles.overlay}><span>View Details</span></div>
							</div>
							<div className={styles.cardContent}>
								<h3 className={styles.cardTitle}>{proj.title}</h3>
								<span className={styles.tag}>{proj.category}</span>
								<p className={styles.tagline}>{proj.tagline}</p>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</main>
			{/* Modal */}
			<AnimatePresence>
				{modal && (
					<motion.div className={styles.modalOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<motion.div className={styles.modal} initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
							<img className={styles.modalImg} src={modal.thumb} alt={modal.title} />
							<h2 className={styles.modalTitle}>{modal.title}</h2>
							<div className={styles.modalMeta}><span>{modal.client}</span> | <span>{modal.category}</span></div>
							<p className={styles.modalOverview}>{modal.overview}</p>
							<div className={styles.modalTools}><b>Tools:</b> {modal.tools.join(', ')}</div>
							<div className={styles.modalResults}><b>Results:</b> {modal.results}</div>
							<div className={styles.modalActions}>
								<a href={modal.caseStudy} className={styles.caseBtn} target="_blank" rel="noopener noreferrer">Case Study</a>
								<button className={styles.closeBtn} onClick={() => setModal(null)}>Close</button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
