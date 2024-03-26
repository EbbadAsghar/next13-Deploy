import Link from "next/link"


function Analytics () {
    return (
        <div>
            <h1>This is Analytics Page.</h1>

            <ul>
                <li><Link href = "/">Home Page</Link></li>
            </ul>
            
            <ul>
            <li><Link href="/">Back to Dashboard</Link></li>
            </ul>
            
        </div>
    )
}

export default Analytics