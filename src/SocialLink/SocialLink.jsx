

const SocialLink = ({ title, icon, ...rest }) => {
    return (
        <li className='social-link'>
            <a {...rest}><i className={icon}></i>{ title }</a>
        </li>
    )
}

export default SocialLink