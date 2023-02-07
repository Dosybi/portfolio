import { FiMail } from 'react-icons/fi'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { TbBrandTelegram } from 'react-icons/tb'
import { SiHabr } from 'react-icons/si'

import Button from './elements/Button'

const ContactItem = ({ contact }) => {
  let icon = null
  switch (contact.platform) {
    case 'Mail':
      icon = <FiMail />
      break
    case 'Github':
      icon = <AiOutlineGithub />
      break
    case 'Instagram':
      icon = <BsInstagram />
      break
    case 'Telegram':
      icon = <TbBrandTelegram />
      break
    case 'Habr':
      icon = <SiHabr />
      break
  }

  return (
    <li className="flex items-center gap-3" key={contact.label}>
      {icon}
      <a href={contact.link} target="_blank" rel="noreferrer">
        <p className="link-decorated mb-1 w-fit">{contact.label}</p>
      </a>
    </li>
  )
}

const Contact = ({ heading, contacts, button }) => {
  return (
    <div className="mb-14" id="contact">
      <h2 className="mb-4 text-2xl font-bold uppercase">{heading}</h2>
      <ul className="mb-3 w-min">
        {contacts.map((contact) => (
          <ContactItem key={contact.label} contact={contact} />
        ))}
      </ul>
      <Button {...button} />
    </div>
  )
}

export default Contact
