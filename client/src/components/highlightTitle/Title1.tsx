function Title1({children, color = 'green'}) {
  return (
    <div className = {`bg-${color}-200 w-full flex justify-start align-center ps-2 text-xl px-1 mb-1`}>{children}</div>
  )
}

export default Title1