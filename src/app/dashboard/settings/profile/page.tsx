import Link from "next/link"

function Profile () {
    return (
    <div>
        <h1><i>This is Profile page.</i></h1>

        <ul>
                <li><Link href = "/">Home Page</Link></li>
            </ul>

            <ul>
                <li><Link href = "/dashboard/settings">Back to Settings Page</Link></li>
            </ul>

    </div>
    )
}


export default Profile