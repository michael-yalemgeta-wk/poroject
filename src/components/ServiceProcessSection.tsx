import styles from './ServiceProcessSection.module.css';
import { motion } from 'framer-motion';

const steps = [
	{
		// Lightbulb SVG
		icon: (
			<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
				<circle cx="16" cy="16" r="16" fill="none" />
				<path
					d="M16 6a7 7 0 0 0-3 13.3V22a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-2.7A7 7 0 0 0 16 6Zm1 13h-2v-2h2v2Zm1.7-3.3A1 1 0 0 1 18 16h-4a1 1 0 0 1-.7-1.7A5 5 0 1 1 18.7 15.7Z"
					fill="#fff"
				/>
			</svg>
		),
		title: 'Tell Us Your Idea',
		desc: 'Share your vision and goals',
	},
	{
		// Laptop SVG
		icon: (
			<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
				<rect x="6" y="10" width="20" height="12" rx="2" fill="#fff" />
				<rect x="4" y="24" width="24" height="2" rx="1" fill="#F47C3C" />
				<rect x="10" y="14" width="12" height="4" rx="1" fill="#F47C3C" />
			</svg>
		),
		title: 'We Design & Develop',
		desc: 'Build solutions aligned with your brand',
	},
	{
		// Checkmark SVG
		icon: (
			<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
				<circle cx="16" cy="16" r="16" fill="none" />
				<path
					d="M10 17l4 4 8-8"
					stroke="#fff"
					strokeWidth="2.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		title: 'You Review & Approve',
		desc: 'Collaborate to refine the final product',
	},
	{
		// Rocket SVG
		icon: (
			<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
				<path d="M16 4l3 12-3-3-3 3 3-12Z" fill="#fff" />
				<ellipse
					cx="16"
					cy="22"
					rx="3"
					ry="6"
					fill="#fff"
					opacity="0.7"
				/>
			</svg>
		),
		title: 'Final Delivery / Launch',
		desc: 'Launch your new experience with full support',
	},
];

export default function ServiceProcessSection() {
	return (
		<section className={styles.processSection}>
			<h2 className={styles.sectionTitle}>How It Works – Service Process</h2>
			<div className={styles.stepsRow}>
				{steps.map((step, idx) => (
					<motion.div
						className={styles.stepBlock}
						key={step.title}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.7, delay: idx * 0.1 }}
						whileHover={{
							scale: 1.04,
							boxShadow: '0 8px 32px #34495e22',
						}}
					>
						<div className={styles.icon}>
							<span className={styles.numberBadge}>{idx + 1}</span>
							{step.icon}
						</div>
						<h3 className={styles.title}>{step.title}</h3>
						<p className={styles.desc}>{step.desc}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}
