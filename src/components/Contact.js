import Button from './elements/Button'

const Contact = ({ heading, contacts, button }) => {
  return (
    <div className="mb-14" id="contact">
      <h2 className="mb-4 text-2xl font-bold uppercase">{heading}</h2>
      <div className="mb-3 w-min">
        {contacts.map((contact) => {
          return (
            <div className="flex items-center gap-3" key={contact.label}>
              <div>{contact.icon}</div>
              <a href={contact.link}>
                <p className="link-decorated mb-1 w-fit">{contact.label}</p>
              </a>
            </div>
          )
        })}
      </div>
      <Button {...button} />
    </div>
  )
}

export default Contact
