import PropTypes from 'prop-types'


const Button = ({ varient, size, link, children, ...rest }) => {
    
    return (
        <button className={[`btn`, `btn-${varient}`].join(' ')}  {...rest}>
            {children}
        </button>
    )
}

export default Button

Button.propTypes = {
    varient: PropTypes.oneOf(['primary', 'secondary', 'link', 'outlined']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    icon: PropTypes.string
}

Button.defaultProps = {
    varient: 'primary',
    size: 'md',
    onClick: () => {}
}