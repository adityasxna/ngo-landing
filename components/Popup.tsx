export default function Popup({ message }: { message: string }){
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm text-center">
        <p className="font-semibold">{message}</p>
      </div>
    </div>
  )
}
