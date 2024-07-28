import Link from "next/link";

export default function Header() {
    return (
        <div className="flex sticky bg-orange-50 m-2.5 px-3.5 py-2.5 rounded-md top-2.5 shadow">
            <p>Create <strong className="font-normal italic">High-Quality</strong> Presentations in No Time!</p>
            <Link href="/register" className="ml-auto font-medium text-orange-500 flex items-center italic">Try It Now!</Link>
        </div>
    )
}