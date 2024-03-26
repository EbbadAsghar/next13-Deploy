
import Link from "next/link";


function Dashboard () {
    return (
    <div>
    <h1><i>This is Dashboard page.</i></h1>
    
    <ul>
    <li><Link href="/">Home Page</Link></li>
    </ul>

    <ul>
    <li><Link href="/dashboard/analytics">Analytics</Link></li>
    </ul>
    
    <ul>
    <li><Link href="/dashboard/settings">Settings</Link></li>
    </ul>
    
    </div>
    )
}

export default Dashboard