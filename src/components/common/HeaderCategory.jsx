import './HeaderCategory.css'
function HeaderCategory(props) {
    const { category, icon, span } = props
    /* TODO: add links when neccesary */
    return (
        <>
            <div className="header-category">
                <span>
                    {category}
                </span>
                {icon ? <i className={icon}></i> : null}
                {span ? <span className="free-span">{span}</span> : null}
            </div>
        </>
    )
}

export default HeaderCategory