//functional component
function Header(){
    let menus=["Home","About","Contact","services"];
    return(
        <>
            <h1>Header</h1>
            <ul>
                {
                    menus.map((menu)=>{
                        return(<li>{menu}</li>)
                    })
                }
            </ul>
        </>
    )
}
export default Header;