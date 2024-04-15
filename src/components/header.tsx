import Link from "next/link"


function Header () {
    return (
        <div className="flex bg-gray-200 p-3 gap-5">
            <Link href = "/" className="text-blue-500">
                Home
            </Link>
            <Link href = "/blog" className="text-red-500">Blog</Link>
            <Link href = "/dashboard" className="text-blue-500">Dashboard</Link>
            <Link href="/dashboard/analytics" className="text-brown-500">Analytics</Link>
            <Link href="/dashboard/settings" className="text-purple-500">Setting</Link> 

        </div>
    )
}


export default Header;