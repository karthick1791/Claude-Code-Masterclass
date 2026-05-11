import styles from "./SkeletonCard.module.css"

interface SkeletonCardProps {
  className?: string
}

export default function SkeletonCard({ className }: SkeletonCardProps) {
  return (
    <div className={`${styles.card}${className ? ` ${className}` : ""}`}>
      <div className={styles.header}>
        <div className={`${styles.shimmer} ${styles.avatar}`} />
        <div className={styles.headerLines}>
          <div className={`${styles.shimmer} ${styles.lineLong}`} />
          <div className={`${styles.shimmer} ${styles.lineMedium}`} />
        </div>
      </div>
      <div className={styles.body}>
        <div className={`${styles.shimmer} ${styles.lineFull}`} />
        <div className={`${styles.shimmer} ${styles.lineFull}`} />
        <div className={`${styles.shimmer} ${styles.lineShort}`} />
      </div>
    </div>
  )
}
