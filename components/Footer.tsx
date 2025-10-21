export default function Footer(){
  return (
    <footer className="bg-beige border-t mt-12">
      <div className="container py-6 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Stray Paws India</div>
        <div className="flex gap-3">
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  )
}
