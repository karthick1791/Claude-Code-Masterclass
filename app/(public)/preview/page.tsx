// preview page for newly created UI components
import SkeletonCard from "@/components/SkeletonCard"

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Preview</h2>
      <SkeletonCard className="max-w-lg mt-6" />
    </div>
  )
}
