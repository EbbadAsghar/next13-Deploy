import Link from "next/link"

function Setting () {
    return (
        <div>
            <h1><i>This is Setting page.</i></h1>

            <ul>
                <li><Link href = "/">Home Page</Link></li>
            </ul>

            <ul>
                <li><Link href = "/dashboard/settings/password">Password</Link></li>
            </ul>

            <ul>
                <li><Link href = "/dashboard/settings/profile">Profile</Link></li>
            </ul>



        </div>
    )
}

export default Setting