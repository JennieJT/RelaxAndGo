function Title1({children, color = 'green'}) {
    return (
      <div className = {`bg-${color}-200 h-full flex justify-start align-center ps-2 text-sm px-1`}>{children}</div>
    )
  }
  
  export default Title1