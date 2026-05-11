// preview page for newly created UI components
import SkeletonCard from "@/components/SkeletonCard"
import Avatar from "@/components/Avatar"

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Preview</h2>
      <SkeletonCard className="max-w-lg mt-6" />

      <section className="mt-10">
        <h3 className="mb-4">Avatar</h3>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
          <span>alice → <Avatar name="alice" /></span>
          <span>Charlie → <Avatar name="Charlie" /></span>
          <span>JohnDoe (PascalCase) → <Avatar name="JohnDoe" /></span>
          <span>MyComponent (PascalCase) → <Avatar name="MyComponent" /></span>
        </div>
      </section>
    </div>
  )
}
