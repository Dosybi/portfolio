import Image from 'next/image'

import avatar from '../../assets/photos/avatar.png'
import avatarWhite from '../../assets/photos/avatar-white.png'

const BlogHeader = ({ theme }) => {
  return (
    <div className="mb-16 flex items-center pt-10">
      <Image
        className="mr-6 border-b-2 border-black"
        src={theme === 'light' ? avatar : avatarWhite}
        alt="Антон Досыбиев"
        width={30}
        height={'100%'}
        priority
      />
      <div className="text-2xl font-bold">Блог</div>
    </div>
  )
}

export default BlogHeader
