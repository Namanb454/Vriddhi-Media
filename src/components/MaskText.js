'use client'
import styles from './page.module.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// const phrases = [
//     "It is a long established fact",
//     "that a reader will be distracted",
//     "by the readable content of a page",
//     "when looking at its layout."
// ]

export function MaskText(props) {

    const animation = {
        initial: { y: "100%" },
        enter: i => ({ y: "0", transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 * i } })
    }

    const { ref, inView, entry } = useInView({
        threshold: 0.9999999,
        triggerOnce: true
    });
    // const text = text();

    return (
        <div ref={ref} className={styles.body}>
            <div className={styles.lineMask}>
                <motion.p custom variants={animation} initial="initial" animate={inView ? "enter" : ""}>{props.text}</motion.p>
            </div>
        </div>
    )
}