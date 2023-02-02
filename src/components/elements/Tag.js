const Tag = ({ tag }) => {
  return (
    <div className="mr-2 cursor-pointer rounded-md bg-[#dc2638] px-2 py-1 text-xs text-white transition-colors duration-500 hover:bg-white hover:text-black">
      <div>{tag}</div>
    </div>
  )
}

export default Tag
