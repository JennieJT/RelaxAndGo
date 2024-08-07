
function NotesNone({list, title}) {
  return (
    <ul className = "min-w-48 h-fit text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
    <h3 className = "text-center py-2 bg-green-200">{title}</h3>
    {list?.map((p) => <li key = {Math.random()} className = "w-full py-3 text-sm font-medium text-gray-900 border-b">
      <div className = "ps-3 w-full">{p}</div>
      </li>)}
  </ul>
  )
}

export default NotesNone